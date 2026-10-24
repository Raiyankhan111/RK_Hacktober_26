import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ScanHistoryItem } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-key'
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

// Get or generate a persistent anonymous device session ID
export const getDeviceSessionId = (): string => {
  const STORAGE_KEY = 'cropcare_device_session_id';
  let sessionId = localStorage.getItem(STORAGE_KEY);
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
    localStorage.setItem(STORAGE_KEY, sessionId);
  }
  return sessionId;
};

// Cloud sync functions
export const syncScanToSupabase = async (item: ScanHistoryItem): Promise<boolean> => {
  if (!supabase || !isSupabaseConfigured) return false;

  try {
    const sessionId = getDeviceSessionId();
    const { error } = await supabase.from('scan_history').insert({
      id: item.id,
      session_id: sessionId,
      crop: item.crop,
      crop_local_hi: item.result.cropLocalName?.hi,
      crop_local_mr: item.result.cropLocalName?.mr,
      prediction: item.prediction,
      disease_local_hi: item.result.diseaseLocalName?.hi,
      disease_local_mr: item.result.diseaseLocalName?.mr,
      scientific_name: item.result.scientificName,
      pathogen_type: item.pathogenType,
      confidence: item.confidence,
      severity: item.severity,
      image_url: item.imageUrl || null,
      metadata: {
        symptoms: item.result.symptoms,
        treatment: item.result.treatment,
        prevention: item.result.prevention,
        model: item.result.model,
      },
      created_at: item.timestamp,
    });

    if (error) {
      console.warn('Failed to sync scan to Supabase cloud:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error syncing scan to cloud:', err);
    return false;
  }
};

export const fetchCloudScans = async (): Promise<ScanHistoryItem[]> => {
  if (!supabase || !isSupabaseConfigured) return [];

  try {
    const sessionId = getDeviceSessionId();
    const { data, error } = await supabase
      .from('scan_history')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      timestamp: row.created_at,
      crop: row.crop,
      prediction: row.prediction,
      confidence: Number(row.confidence),
      severity: row.severity,
      pathogenType: row.pathogen_type,
      imageUrl: row.image_url,
      isCloudSynced: true,
      result: {
        success: true,
        crop: row.crop,
        cropLocalName: { hi: row.crop_local_hi || '', mr: row.crop_local_mr || '' },
        prediction: row.prediction,
        diseaseLocalName: { hi: row.disease_local_hi || '', mr: row.disease_local_mr || '' },
        scientificName: row.scientific_name,
        pathogenType: row.pathogen_type,
        confidence: Number(row.confidence),
        severity: row.severity,
        alternatives: [],
        symptoms: row.metadata?.symptoms || [],
        causes: [],
        treatment: row.metadata?.treatment || { cultural: [], organic: [], chemical: [] },
        prevention: row.metadata?.prevention || [],
        expertGuidance: 'Verified agricultural record',
        model: row.metadata?.model || 'Cloud Storage',
        disclaimer: 'AI diagnostic aid',
        analysisTimestamp: row.created_at,
        imageUrl: row.image_url,
      },
    }));
  } catch (err) {
    console.warn('Error fetching cloud scans:', err);
    return [];
  }
};
