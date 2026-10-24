import { CropScanResult, ScanHistoryItem } from '../types';
import { syncScanToSupabase, isSupabaseConfigured, fetchCloudScans } from './supabaseClient';

const STORAGE_KEY = 'cropcare_scan_history_v1';

export const getLocalScans = (): ScanHistoryItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading local scan history:', e);
    return [];
  }
};

export const saveLocalScan = async (
  result: CropScanResult,
  imageUrl?: string
): Promise<ScanHistoryItem> => {
  const newItem: ScanHistoryItem = {
    id: 'scan_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    timestamp: new Date().toISOString(),
    crop: result.crop,
    prediction: result.prediction,
    confidence: result.confidence,
    severity: result.severity,
    pathogenType: result.pathogenType,
    imageUrl: imageUrl || result.imageUrl,
    result: { ...result, imageUrl: imageUrl || result.imageUrl },
    isCloudSynced: false,
  };

  const existing = getLocalScans();
  // Keep up to 50 most recent scans
  const updated = [newItem, ...existing].slice(0, 50);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    // If quota exceeded due to large image strings, strip image data and save metadata
    console.warn('LocalStorage quota limit reached, saving without full image payload:', err);
    const compactItem = { ...newItem, imageUrl: undefined };
    const compactUpdated = [compactItem, ...existing.map(x => ({ ...x, imageUrl: undefined }))].slice(0, 50);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compactUpdated));
    } catch {
      // Ignored
    }
  }

  // If Supabase cloud is configured, asynchronously sync
  if (isSupabaseConfigured) {
    syncScanToSupabase(newItem).then((success) => {
      if (success) {
        newItem.isCloudSynced = true;
        const current = getLocalScans();
        const marked = current.map(item => item.id === newItem.id ? { ...item, isCloudSynced: true } : item);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(marked));
        } catch {}
      }
    });
  }

  return newItem;
};

export const deleteLocalScan = (id: string): ScanHistoryItem[] => {
  const existing = getLocalScans();
  const filtered = existing.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return filtered;
};

export const clearAllLocalScans = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getAllScans = async (): Promise<ScanHistoryItem[]> => {
  const local = getLocalScans();
  if (isSupabaseConfigured) {
    try {
      const cloud = await fetchCloudScans();
      if (cloud && cloud.length > 0) {
        // Merge cloud scans with local scans avoiding duplicates
        const map = new Map<string, ScanHistoryItem>();
        local.forEach(item => map.set(item.id, item));
        cloud.forEach(item => {
          if (!map.has(item.id)) {
            map.set(item.id, item);
          }
        });
        return Array.from(map.values()).sort(
          (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      }
    } catch (e) {
      console.warn('Could not merge cloud scans:', e);
    }
  }
  return local;
};
