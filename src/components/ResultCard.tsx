import React, { useState } from 'react';
import { CropScanResult } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  PhoneCall, 
  Printer, 
  Bookmark, 
  BookmarkCheck, 
  RotateCcw, 
  Share2, 
  ExternalLink,
  Info,
  Bug,
  Leaf,
  Droplets,
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';

interface ResultCardProps {
  result: CropScanResult;
  onScanAnother: () => void;
  onSaveToHistory?: () => void;
  isSaved?: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  onScanAnother,
  onSaveToHistory,
  isSaved = false,
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'meaning' | 'treatment' | 'prevention' | 'expert' | 'alternatives'>('meaning');
  const [copySuccess, setCopySuccess] = useState(false);

  // Localized crop name
  const localizedCrop = language === 'hi' && result.cropLocalName?.hi
    ? `${result.cropLocalName.hi} (${result.crop})`
    : language === 'mr' && result.cropLocalName?.mr
    ? `${result.cropLocalName.mr} (${result.crop})`
    : result.crop;

  // Localized disease name
  const localizedDisease = language === 'hi' && result.diseaseLocalName?.hi
    ? `${result.diseaseLocalName.hi} (${result.prediction})`
    : language === 'mr' && result.diseaseLocalName?.mr
    ? `${result.diseaseLocalName.mr} (${result.prediction})`
    : result.prediction;

  const isHealthy = result.pathogenType === 'healthy' || result.severity === 'healthy';
  const confidencePercent = Math.round(result.confidence * 100);

  const getSeverityBadge = () => {
    switch (result.severity) {
      case 'healthy':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Healthy Crop
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-300">
            <Info className="w-3.5 h-3.5 text-yellow-600" />
            Mild / Early Stage
          </span>
        );
      case 'moderate':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300">
            <AlertTriangle className="w-3.5 h-3.5 text-orange-600" />
            Moderate Severity
          </span>
        );
      case 'high':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-300">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            Severe / High Risk
          </span>
        );
    }
  };

  const getPathogenBadge = () => {
    switch (result.pathogenType) {
      case 'fungal':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200">🍄 Fungal Disease</span>;
      case 'bacterial':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200">🦠 Bacterial Pathogen</span>;
      case 'viral':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-900 border border-purple-200">🧬 Viral Vector</span>;
      case 'pest':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-900 border border-rose-200">🐛 Pest Infestation</span>;
      case 'healthy':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-900 border border-emerald-200">🌿 No Pathogen</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200">🔬 Agronomic Assessment</span>;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const text = `CropCare AI Diagnostic Report:\nCrop: ${result.crop}\nDiagnosis: ${result.prediction}\nConfidence: ${confidencePercent}%\nExpert Advice: ${result.expertGuidance}\nGenerated via CropCare AI`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `CropCare AI: ${result.prediction}`,
          text,
          url: window.location.href,
        });
      } catch (err) {
        // User canceled or unsupported
      }
    } else {
      navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
      
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-forest-100 shadow-soft print:hidden">
        <button
          onClick={onScanAnother}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-forest-50 text-forest-900 hover:bg-forest-100 transition"
        >
          <RotateCcw className="w-4 h-4 text-forest-700" />
          <span>Scan Another Leaf</span>
        </button>

        <div className="flex items-center gap-2">
          {onSaveToHistory && (
            <button
              onClick={onSaveToHistory}
              disabled={isSaved}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                isSaved 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-cream text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-emerald-600" /> : <Bookmark className="w-4 h-4 text-stone-600" />}
              <span>{isSaved ? t.result.savedToHistory : t.result.saveToHistory}</span>
            </button>
          )}

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-cream text-stone-700 hover:bg-stone-100 border border-stone-200 transition"
            title="Share Diagnosis"
          >
            <Share2 className="w-4 h-4 text-stone-600" />
            <span className="hidden xs:inline">{copySuccess ? 'Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-cream text-stone-700 hover:bg-stone-100 border border-stone-200 transition"
            title="Print or Save PDF"
          >
            <Printer className="w-4 h-4 text-stone-600" />
            <span className="hidden xs:inline">{t.result.printReport}</span>
          </button>
        </div>
      </div>

      {/* Unclear Image Alert Banner */}
      {(result.isUnclearImage || result.confidence < 0.6) && (
        <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-4 sm:p-5 text-amber-900 shadow-soft">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm sm:text-base text-amber-950">
                {t.result.unclearWarningTitle}
              </h4>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                {result.unclearReason || t.result.unclearWarningDesc}
              </p>
              <div className="pt-2">
                <button
                  onClick={onScanAnother}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-950 underline hover:no-underline"
                >
                  Take another photo with better daylight and closer focus &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 1: Detection Result Card */}
      <div className="bg-white rounded-3xl border border-forest-100 shadow-lifted overflow-hidden">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-forest-900 to-forest-800 text-white p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                  {t.result.detectionSummary}
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-xs text-stone-300">
                  {new Date(result.analysisTimestamp).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {localizedDisease}
              </h2>
              {result.scientificName && (
                <p className="text-xs sm:text-sm text-emerald-200 italic mt-0.5">
                  Pathogen: {result.scientificName}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {getSeverityBadge()}
            </div>
          </div>

          {/* Diagnostic Metrics Row */}
          <div className="mt-5 pt-4 border-t border-forest-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-stone-300 block text-[11px]">{t.result.detectedCrop}</span>
              <strong className="text-white text-sm">{localizedCrop}</strong>
            </div>

            <div>
              <span className="text-stone-300 block text-[11px]">{t.result.pathogenType}</span>
              <div className="mt-0.5">{getPathogenBadge()}</div>
            </div>

            <div>
              <span className="text-stone-300 block text-[11px]">{t.result.confidence}</span>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-16 bg-forest-950/80 rounded-full h-2 overflow-hidden border border-forest-600">
                  <div
                    className={`h-full rounded-full ${
                      confidencePercent > 80 ? 'bg-emerald-400' : confidencePercent > 60 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${confidencePercent}%` }}
                  />
                </div>
                <strong className="text-harvest-300 text-sm font-bold">{confidencePercent}%</strong>
              </div>
            </div>

            <div>
              <span className="text-stone-300 block text-[11px]">Inference Engine</span>
              <span className="text-white text-xs truncate block max-w-[140px]" title={result.model}>
                {result.model.split('/')[1] || result.model}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail & Quick Overview */}
        {result.imageUrl && (
          <div className="p-4 sm:p-6 bg-cream/40 border-b border-forest-50 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-forest-200 shrink-0 shadow-sm bg-stone-100">
              <img 
                src={result.imageUrl} 
                alt="Analyzed leaf specimen" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-mono">
                Specimen
              </span>
            </div>
            <div className="flex-1 space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-forest-800 font-semibold">
                <Sparkles className="w-4 h-4 text-forest-600" />
                <span>Agricultural Diagnostic Report Generated</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isHealthy 
                  ? 'No pathogenic spores, chlorosis, or necrotic spots were identified on this specimen. The plant exhibits normal foliar vigor.'
                  : `Visual pattern and foliar lesion analysis identify active ${result.prediction}. Review the IPM treatment and prevention measures below.`
                }
              </p>
              <div className="text-[11px] text-stone-500 pt-1">
                KVK Verification Code: <span className="font-mono font-bold text-forest-800">CROP-{result.crop.toUpperCase().slice(0,3)}-{Math.floor(result.confidence * 9999)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs for Analysis Sections */}
        <div className="border-b border-stone-200 bg-stone-50/70 px-4 sm:px-6 flex overflow-x-auto gap-2 py-2.5 scrollbar-none">
          <button
            onClick={() => setActiveTab('meaning')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'meaning'
                ? 'bg-forest-900 text-white shadow-soft'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Bug className="w-4 h-4" />
            <span>{t.result.tabMeaning}</span>
          </button>

          <button
            onClick={() => setActiveTab('treatment')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'treatment'
                ? 'bg-forest-900 text-white shadow-soft'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Droplets className="w-4 h-4" />
            <span>{t.result.tabTreatment}</span>
          </button>

          <button
            onClick={() => setActiveTab('prevention')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'prevention'
                ? 'bg-forest-900 text-white shadow-soft'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{t.result.tabPrevention}</span>
          </button>

          <button
            onClick={() => setActiveTab('expert')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
              activeTab === 'expert'
                ? 'bg-forest-900 text-white shadow-soft'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{t.result.tabExpert}</span>
          </button>

          {result.alternatives && result.alternatives.length > 0 && (
            <button
              onClick={() => setActiveTab('alternatives')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
                activeTab === 'alternatives'
                  ? 'bg-forest-900 text-white shadow-soft'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t.result.tabAlternatives} ({result.alternatives.length})</span>
            </button>
          )}
        </div>

        {/* Tab Content Panes */}
        <div className="p-5 sm:p-7 space-y-6">
          
          {/* 1. Meaning, Symptoms & Causes */}
          {activeTab === 'meaning' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <span>{t.result.symptomsTitle}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.symptoms.map((symptom, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-cream/70 border border-forest-100">
                      <div className="w-2 h-2 rounded-full bg-forest-600 shrink-0 mt-1.5" />
                      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">{symptom}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-amber-600" />
                  <span>{t.result.causesTitle}</span>
                </h3>
                <div className="space-y-2.5">
                  {result.causes.map((cause, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">{cause}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Treatment Plan */}
          {activeTab === 'treatment' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Cultural Treatments */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-forest-950">
                    {t.result.culturalTreatment}
                  </h4>
                </div>
                <div className="space-y-2 pl-9">
                  {result.treatment.cultural.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-forest-50/60 border border-forest-100 text-xs sm:text-sm text-stone-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organic / Bio Remedies */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-forest-950">
                    {t.result.organicTreatment}
                  </h4>
                </div>
                <div className="space-y-2 pl-9">
                  {result.treatment.organic.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-teal-50/50 border border-teal-100 text-xs sm:text-sm text-stone-800 flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chemical Remedies */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-forest-950">
                    {t.result.chemicalTreatment}
                  </h4>
                </div>
                <div className="space-y-2 pl-9">
                  {result.treatment.chemical.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-rose-50/40 border border-rose-200/80 text-xs sm:text-sm text-stone-800 flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Statutory Warning */}
                <div className="mt-3 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 flex items-start gap-3 text-xs text-amber-950">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Pesticide Safety Notice:</strong> {t.result.chemicalNotice}
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* 3. Prevention & Care */}
          {activeTab === 'prevention' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-base sm:text-lg font-bold text-forest-950 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-forest-700" />
                <span>{t.result.preventionTitle}</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {result.prevention.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/80 border border-forest-100">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-900 text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Expert Guidance & Government Extensions */}
          {activeTab === 'expert' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200 space-y-2">
                <h4 className="font-bold text-forest-950 text-sm sm:text-base flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-forest-700" />
                  <span>Agronomic Expert Advice</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {result.expertGuidance}
                </p>
              </div>

              {/* Kisan Call Center Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900 to-forest-800 text-white shadow-soft space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-harvest-300 uppercase tracking-wider">
                    Ministry of Agriculture & Farmers Welfare
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/30 text-emerald-200 border border-emerald-400/40">
                    Free Government Helpline
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-harvest-400" />
                  <span>{t.result.kisanCallCenter}</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {t.result.kisanCallCenterDesc}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:18001801551"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-harvest-400 text-stone-900 font-bold text-sm hover:bg-harvest-500 transition shadow-sm"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call 1800-180-1551 Now</span>
                  </a>
                  <a
                    href="https://mkisan.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-emerald-200 hover:text-white transition"
                  >
                    <span>mKisan Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Local KVK guidance */}
              <div className="p-4 rounded-2xl bg-cream border border-stone-200 text-xs text-stone-600 space-y-1">
                <strong>When to visit your local Krishi Vigyan Kendra (KVK):</strong>
                <p>
                  If foliage damage exceeds 20% of your crop plot within 48 hours, or if spraying shows no recovery after 5 days, bring a fresh, enclosed leaf sample to your district KVK scientist for microscopic spore culture verification.
                </p>
              </div>
            </div>
          )}

          {/* 5. Alternative Possibilities */}
          {activeTab === 'alternatives' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-forest-950">
                  Alternative Model Predictions
                </h3>
                <p className="text-xs text-stone-600">
                  Crop leaf diseases can present overlapping chlorosis or leaf spot symptoms. These were the next most probable matches detected by the vision model:
                </p>
              </div>

              <div className="space-y-3">
                {result.alternatives.map((alt, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-cream/70 border border-stone-200 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-sm text-stone-900">{alt.name}</div>
                      <span className="text-xs text-stone-500">Related Host Crop: {alt.crop}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-20 bg-stone-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-forest-600 rounded-full"
                          style={{ width: `${Math.round(alt.confidence * 100)}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-stone-700 min-w-[36px] text-right">
                        {Math.round(alt.confidence * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Card Footer: Model disclaimer */}
        <div className="bg-stone-50 px-5 sm:px-7 py-3.5 border-t border-stone-200 text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>AI Engine: <strong>{result.model}</strong></span>
          <span className="text-center sm:text-right">{result.disclaimer}</span>
        </div>

      </div>

    </div>
  );
};
