import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, HardDrive, EyeOff, Server, Trash2, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBack: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-4xl mx-auto">
      
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-950 underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Previous Page</span>
        </button>
      </div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
          <span>Farmer Privacy & Data Ethics</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
          Privacy Policy & Transparency
        </h1>
        <p className="text-xs sm:text-sm text-stone-500">
          Last Updated: October 2026 • Designed for Indian Smallholder Data Sovereignty
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-soft space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
        
        {/* 1. Image Processing */}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-forest-700" />
            <span>1. Ephemeral Crop Image Processing</span>
          </h3>
          <p>
            When you upload or photograph a plant leaf, CropCare AI processes the image data strictly to detect visual disease features. We do not sell or monetize your photos. The image is processed in-memory or via secure edge functions and is not retained on public cloud storage without your knowledge.
          </p>
        </div>

        {/* 2. Scan Storage & Local First Architecture */}
        <div className="space-y-2 pt-4 border-t border-stone-100">
          <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-forest-700" />
            <span>2. Offline-First & Local Storage Default</span>
          </h3>
          <p>
            By default, all your diagnostic logs are stored exclusively in your browser’s local storage on your smartphone or computer. You do not need to register or create an account to use CropCare AI. 
          </p>
          <p>
            If our cloud sync feature with Supabase is enabled, records are secured using cryptographic Row Level Security (RLS) policies tied solely to your anonymous device token, preventing any other user from viewing your farm’s scans.
          </p>
        </div>

        {/* 3. Third-Party APIs */}
        <div className="space-y-2 pt-4 border-t border-stone-100">
          <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
            <Server className="w-5 h-5 text-forest-700" />
            <span>3. Third-Party API Services</span>
          </h3>
          <p>
            To deliver real-time agronomic insights, CropCare AI interfaces with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Weather Providers (Open-Meteo & OpenWeather):</strong> Latitude and longitude coordinates are transmitted solely to fetch ambient temperature, humidity, and rainfall forecasts. No personal user identification is shared.</li>
            <li><strong>Computer Vision Inference (Hugging Face / Supabase Edge Functions):</strong> Compressed image arrays are evaluated by the deep neural classification model via encrypted HTTPS endpoints.</li>
          </ul>
        </div>

        {/* 4. Deletion & Data Retention */}
        <div className="space-y-2 pt-4 border-t border-stone-100">
          <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-forest-700" />
            <span>4. Farmer Data Ownership & Instant Deletion</span>
          </h3>
          <p>
            You retain absolute ownership of your agricultural records. At any point, you can navigate to <strong>My Crop Scans</strong> and click <strong>Clear Scan History</strong> or delete individual entries. This permanently purges the stored records immediately.
          </p>
        </div>

      </div>

    </div>
  );
};
