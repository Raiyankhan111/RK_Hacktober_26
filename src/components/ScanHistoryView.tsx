import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ScanHistoryItem, CropScanResult } from '../types';
import { getAllScans, deleteLocalScan, clearAllLocalScans } from '../services/storageService';
import { isSupabaseConfigured } from '../services/supabaseClient';
import { 
  History, 
  Trash2, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Cloud, 
  HardDrive, 
  Calendar, 
  ScanLine, 
  AlertCircle,
  FileText,
  ChevronRight
} from 'lucide-react';

interface ScanHistoryViewProps {
  onViewScan: (result: CropScanResult) => void;
  onNewScan: () => void;
}

export const ScanHistoryView: React.FC<ScanHistoryViewProps> = ({
  onViewScan,
  onNewScan,
}) => {
  const { t } = useLanguage();
  const [scans, setScans] = useState<ScanHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmClearModal, setConfirmClearModal] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const items = await getAllScans();
      setScans(items);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = deleteLocalScan(id);
    setScans(updated);
  };

  const handleClearAll = () => {
    clearAllLocalScans();
    setScans([]);
    setConfirmClearModal(false);
  };

  const exportToJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(scans, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `cropcare_scans_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-5xl mx-auto">
      
      {/* Page Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold">
            <History className="w-3.5 h-3.5 text-forest-700" />
            <span>Private Farmer Diagnostic Log</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
            {t.history.title}
          </h1>
          <p className="text-sm text-stone-600">
            {t.history.subtitle}
          </p>
        </div>

        {scans.length > 0 && (
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={exportToJson}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition shadow-xs"
              title="Export scan logs"
            >
              <Download className="w-4 h-4 text-forest-700" />
              <span>Export Records</span>
            </button>

            <button
              onClick={() => setConfirmClearModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition shadow-xs"
            >
              <Trash2 className="w-4 h-4" />
              <span>{t.history.clearAll}</span>
            </button>
          </div>
        )}
      </div>

      {/* Cloud vs Local Privacy Callout Banner */}
      <div className="rounded-2xl bg-cream border border-forest-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
            {isSupabaseConfigured ? <Cloud className="w-5 h-5 text-emerald-700" /> : <HardDrive className="w-5 h-5 text-stone-600" />}
          </div>
          <div>
            <div className="font-bold text-stone-900 text-sm">
              {isSupabaseConfigured ? 'Supabase Secure Cloud Sync Active' : 'Offline Device-Only Storage (Private)'}
            </div>
            <p className="text-stone-600 mt-0.5 leading-relaxed">
              {isSupabaseConfigured
                ? 'Your diagnostic records are securely synchronized to your device session in Supabase PostgreSQL with strict Row Level Security (RLS).'
                : 'Scans are saved strictly in your browser local storage. No images or agricultural records leave your device.'}
            </p>
          </div>
        </div>

        <div className="shrink-0 self-end sm:self-auto">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-stone-200 text-stone-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Tracking</span>
          </span>
        </div>
      </div>

      {/* Scans List / Empty State */}
      {loading ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-forest-100 shadow-soft">
          <p className="text-xs text-stone-500">Loading your scan logs...</p>
        </div>
      ) : scans.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-forest-100 shadow-soft space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center mx-auto">
            <ScanLine className="w-8 h-8 text-forest-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900">{t.history.emptyTitle}</h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto">
              {t.history.emptyDesc}
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={onNewScan}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-harvest-400 hover:bg-harvest-500 text-stone-950 font-bold text-xs sm:text-sm shadow-soft transition"
            >
              <ScanLine className="w-4 h-4 text-stone-900" />
              <span>{t.history.scanNow}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scans.map((item) => (
            <div
              key={item.id}
              onClick={() => onViewScan(item.result)}
              className="group bg-white rounded-2xl border border-forest-100 hover:border-forest-300 p-4 shadow-soft hover:shadow-lifted transition cursor-pointer flex gap-4 items-center justify-between"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Thumbnail */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-forest-900 shrink-0 border border-forest-100">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.crop} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-forest-50 text-forest-700 font-bold text-xs">
                      {item.crop.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-2 py-0.5 rounded-md">
                      {item.crop}
                    </span>
                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.timestamp).toLocaleDateString()}
                    </span>
                  </div>

                  <h4 className="font-bold text-stone-900 text-sm truncate group-hover:text-forest-900 transition">
                    {item.prediction}
                  </h4>

                  <div className="flex items-center gap-2 text-xs">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      item.severity === 'healthy' 
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.severity === 'high'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.severity === 'healthy' ? 'Healthy' : `${Math.round(item.confidence * 100)}% Match`}
                    </span>

                    <span className="text-[11px] text-stone-500">
                      {item.isCloudSynced ? '☁️ Cloud' : '📱 Local'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => handleDelete(item.id, e)}
                  className="p-2 rounded-xl text-stone-400 hover:text-red-600 hover:bg-red-50 transition"
                  title={t.history.deleteItem}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="p-1 rounded-lg text-stone-400 group-hover:text-forest-900 group-hover:translate-x-1 transition">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal for Clearing All Scans */}
      {confirmClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-lifted">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-bold text-stone-900 text-base">Clear Scan History?</h3>
              <p className="text-xs text-stone-600">{t.history.confirmClear}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setConfirmClearModal(false)}
                className="py-2.5 rounded-xl border border-stone-200 text-stone-700 font-semibold text-xs hover:bg-stone-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClearAll}
                className="py-2.5 rounded-xl bg-red-600 text-white font-semibold text-xs hover:bg-red-700 shadow-sm"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
