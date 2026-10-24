import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Info, 
  Sprout, 
  Cpu, 
  ShieldAlert, 
  HeartHandshake, 
  PhoneCall, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  MapPin
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in duration-300 max-w-4xl mx-auto">
      
      {/* Title */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold">
          <Info className="w-3.5 h-3.5 text-forest-700" />
          <span>Agricultural Technology & Responsible AI</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
          {t.about.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {t.about.subtitle}
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-3xl border border-forest-100 p-6 sm:p-8 shadow-soft space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center">
          <Sprout className="w-6 h-6 text-forest-700" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-forest-950">
          {t.about.missionTitle}
        </h2>
        <p className="text-sm text-stone-600 leading-relaxed">
          {t.about.missionDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100 text-xs">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-stone-700">Trained on 50,000+ validated crop leaf specimens</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-stone-700">Integrated Pest Management (IPM) aligned with ICAR</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-stone-700">100% Free & Accessible in local Indian languages</span>
          </div>
        </div>
      </div>

      {/* How the AI Engine Operates */}
      <div className="bg-white rounded-3xl border border-forest-100 p-6 sm:p-8 shadow-soft space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-forest-950">
              {t.about.howAiWorksTitle}
            </h2>
            <p className="text-xs text-stone-500">Deep Computer Vision & Agronomic Rule Engines</p>
          </div>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed">
          {t.about.howAiWorksDesc}
        </p>

        {/* Pipeline Architecture Diagram */}
        <div className="p-4 rounded-2xl bg-cream/70 border border-forest-100 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-forest-700" />
            <span>End-to-End Processing Architecture</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block">1. Input Intake</span>
              <p className="text-[11px] text-stone-500 mt-1">High-res camera stream or image upload; client-side canvas pre-processing.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block">2. Neural Classifier</span>
              <p className="text-[11px] text-stone-500 mt-1">Supabase Edge Function / MobileNet Vision model inference with softmax scores.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block">3. Pathology Engine</span>
              <p className="text-[11px] text-stone-500 mt-1">Match model labels against verified Indian agronomic pathology knowledge base.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block">4. Localized Action</span>
              <p className="text-[11px] text-stone-500 mt-1">Render actionable cultural, bio-organic, and safe chemical advice in EN/HI/MR.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Limitations & Responsible AI */}
      <div className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-8 shadow-soft space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
          <ShieldAlert className="w-6 h-6 text-amber-700" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
          {t.about.limitationsTitle}
        </h2>
        <p className="text-sm text-stone-700 leading-relaxed">
          {t.about.limitationsDesc}
        </p>

        <div className="space-y-2 text-xs text-stone-600 bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 leading-relaxed">
          <p>
            <strong>Key AI Boundaries:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Visual symptoms of physiological stress (e.g., severe nitrogen or zinc deficiency) can sometimes mimic fungal leaf spots.</li>
            <li>Photos taken in poor lighting, heavy shadow, or blurry focus may produce uncertain predictions.</li>
            <li>We do NOT generate fabricated dosages or off-label pesticide recommendations. All chemicals listed strictly conform to Central Insecticides Board & Registration Committee (CIBRC) standards.</li>
          </ul>
        </div>
      </div>

      {/* National Agricultural Extensions */}
      <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-lifted space-y-4">
        <div className="flex items-center gap-3">
          <HeartHandshake className="w-7 h-7 text-harvest-400" />
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Connecting Farmers with Indian Agricultural Institutions
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          CropCare AI works in tandem with national agricultural extensions, including 731+ Krishi Vigyan Kendras (KVK), State Agricultural Universities (SAUs), and the Indian Council of Agricultural Research (ICAR).
        </p>
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <a
            href="https://kvk.icar.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-emerald-300 text-xs font-semibold transition"
          >
            <span>Locate Nearest KVK Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="tel:18001801551"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-harvest-400 text-stone-950 text-xs font-bold hover:bg-harvest-500 transition"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Kisan Call Center: 1800-180-1551</span>
          </a>
        </div>
      </div>

    </div>
  );
};
