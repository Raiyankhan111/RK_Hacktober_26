import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { cropKnowledgeBase } from '../data/cropKnowledge';
import { CropGuideItem, CropDiseaseGuide } from '../types';
import { 
  Search, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  AlertTriangle, 
  Leaf, 
  Droplets, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Filter,
  Layers,
  ScanLine
} from 'lucide-react';

interface CropGuideViewProps {
  initialCropId?: string | null;
  onSelectCropToScan: (cropName: string) => void;
}

export const CropGuideView: React.FC<CropGuideViewProps> = ({
  initialCropId,
  onSelectCropToScan,
}) => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCrop, setSelectedCrop] = useState<CropGuideItem | null>(() => {
    if (initialCropId) {
      return cropKnowledgeBase.find(c => c.id === initialCropId) || null;
    }
    return null;
  });
  const [selectedDisease, setSelectedDisease] = useState<CropDiseaseGuide | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    cropKnowledgeBase.forEach(item => {
      if (item.category.includes('Vegetable')) set.add('Vegetables');
      else if (item.category.includes('Cereal')) set.add('Cereals');
      else if (item.category.includes('Commercial') || item.category.includes('Cash')) set.add('Cash Crops');
      else if (item.category.includes('Fruit') || item.category.includes('Horticultural')) set.add('Fruits');
      else set.add('Other');
    });
    return ['all', ...Array.from(set)];
  }, []);

  // Filter crops based on search query and category
  const filteredCrops = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return cropKnowledgeBase.filter(item => {
      // Category match
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'Vegetables' && !item.category.includes('Vegetable')) return false;
        if (selectedCategory === 'Cereals' && !item.category.includes('Cereal')) return false;
        if (selectedCategory === 'Cash Crops' && !item.category.includes('Commercial') && !item.category.includes('Cash')) return false;
        if (selectedCategory === 'Fruits' && !item.category.includes('Fruit') && !item.category.includes('Horticultural')) return false;
      }

      // Search match across English, Hindi, Marathi, scientific name, or disease names
      if (!q) return true;
      const matchCrop = item.crop.toLowerCase().includes(q) ||
        item.cropHindi.toLowerCase().includes(q) ||
        item.cropMarathi.toLowerCase().includes(q) ||
        item.scientificName.toLowerCase().includes(q);

      if (matchCrop) return true;

      const matchDisease = item.commonDiseases.some(d => 
        d.name.toLowerCase().includes(q) ||
        d.localNameHindi.toLowerCase().includes(q) ||
        d.localNameMarathi.toLowerCase().includes(q) ||
        d.scientificName.toLowerCase().includes(q)
      );

      return matchDisease;
    });
  }, [searchQuery, selectedCategory]);

  const getLocalizedCropName = (crop: CropGuideItem) => {
    if (language === 'hi') return `${crop.cropHindi} (${crop.crop})`;
    if (language === 'mr') return `${crop.cropMarathi} (${crop.crop})`;
    return crop.crop;
  };

  const getLocalizedDiseaseName = (disease: CropDiseaseGuide) => {
    if (language === 'hi') return `${disease.localNameHindi} (${disease.name})`;
    if (language === 'mr') return `${disease.localNameMarathi} (${disease.name})`;
    return disease.name;
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-forest-700" />
          <span>ICAR & Agricultural University Verified Reference</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
          {t.guide.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {t.guide.subtitle}
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-forest-100 shadow-soft space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.guide.searchPlaceholder}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-cream/50 border border-forest-200 text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:bg-white transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px] shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const label = cat === 'all' ? t.guide.categoryAll : cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-forest-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Crop Library Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white rounded-3xl border border-forest-100 shadow-soft overflow-hidden hover:shadow-lifted hover:border-forest-200 transition flex flex-col justify-between"
          >
            <div>
              {/* Crop Card Image Header */}
              <div className="relative h-44 w-full bg-forest-900 overflow-hidden">
                <img
                  src={crop.imageUrl}
                  alt={crop.crop}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-forest-900/90 text-emerald-300 text-[10px] font-bold backdrop-blur-xs border border-emerald-400/30">
                    {crop.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-extrabold text-xl leading-tight">
                    {getLocalizedCropName(crop)}
                  </h3>
                  <p className="text-xs text-emerald-200 italic">{crop.scientificName}</p>
                </div>
              </div>

              {/* Crop Agronomic Info */}
              <div className="p-5 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-2 text-stone-600 bg-cream/70 p-3 rounded-2xl border border-forest-50">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Season</span>
                    <strong className="text-stone-800 text-[11px]">{crop.idealSeason}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Soil pH / Type</span>
                    <strong className="text-stone-800 text-[11px] truncate block" title={crop.soilType}>{crop.soilType}</strong>
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed text-xs">
                  {crop.description}
                </p>

                {/* Common Diseases List */}
                <div className="space-y-2 pt-1 border-t border-stone-100">
                  <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
                    <span>Common Diseases ({crop.commonDiseases.length})</span>
                    <span className="text-emerald-700">Verified IPM</span>
                  </div>
                  <div className="space-y-1.5">
                    {crop.commonDiseases.map((disease, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedCrop(crop);
                          setSelectedDisease(disease);
                        }}
                        className="w-full text-left p-2.5 rounded-xl bg-forest-50/50 hover:bg-forest-100/70 border border-forest-100 transition flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${
                            disease.pathogenType === 'fungal' ? 'bg-amber-500' : disease.pathogenType === 'bacterial' ? 'bg-blue-500' : 'bg-rose-500'
                          }`} />
                          <span className="font-medium text-stone-900 group-hover:text-forest-900 text-xs truncate">
                            {getLocalizedDiseaseName(disease)}
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-forest-800 group-hover:translate-x-0.5 transition shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="p-4 pt-0 border-t border-stone-50">
              <button
                onClick={() => onSelectCropToScan(crop.crop)}
                className="w-full py-2.5 px-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <ScanLine className="w-3.5 h-3.5 text-emerald-400" />
                <span>Scan {crop.crop} Leaf</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* No results fallback */}
      {filteredCrops.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto space-y-3 border border-forest-100 shadow-soft">
          <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="text-base font-bold text-stone-800">No matching crops or diseases found</h3>
          <p className="text-xs text-stone-500">
            Try searching with common terms like "Rice", "Tomato", "करपा", or "Blight".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-2 text-xs font-semibold text-forest-700 underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Detailed Disease Guide Modal */}
      {selectedDisease && selectedCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-lifted border border-stone-100 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-forest-950 text-white p-5 sm:p-6 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {selectedCrop.crop} Health Library
                  </span>
                  <span className="text-xs text-stone-400">•</span>
                  <span className="text-xs text-harvest-300 uppercase font-semibold">
                    {selectedDisease.pathogenType} Pathogen
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {getLocalizedDiseaseName(selectedDisease)}
                </h3>
                <p className="text-xs text-emerald-200 italic mt-0.5">
                  Causal Agent: {selectedDisease.scientificName}
                </p>
              </div>

              <button
                onClick={() => setSelectedDisease(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-forest-800 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Verified Information Disclaimer Tag */}
            <div className="bg-emerald-50 px-5 sm:px-6 py-2.5 border-b border-emerald-200 flex items-center gap-2 text-emerald-950 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                <strong>Verified Agricultural Reference:</strong> Formulated according to Indian Council of Agricultural Research (ICAR) package of practices.
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6 overflow-y-auto text-xs sm:text-sm">
              
              {/* Symptoms */}
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <Leaf className="w-4 h-4 text-forest-700" />
                  <span>{t.guide.symptoms}</span>
                </h4>
                <div className="space-y-1.5 pl-6">
                  {selectedDisease.symptoms.map((sym, i) => (
                    <div key={i} className="flex items-start gap-2 text-stone-700 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-700 shrink-0 mt-2" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Causes & Weather Triggers */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <Droplets className="w-4 h-4 text-amber-700" />
                  <span>Environmental & Biological Triggers</span>
                </h4>
                <div className="space-y-1.5 pl-6">
                  {selectedDisease.causes.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-stone-700 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organic Treatment */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="font-bold text-forest-950 flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>{t.guide.organicCure} (Eco-Friendly / Biocontrol)</span>
                </h4>
                <div className="space-y-2">
                  {selectedDisease.organicTreatment.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-teal-50/60 border border-teal-100 text-stone-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chemical Treatment */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="font-bold text-forest-950 flex items-center gap-2 text-sm sm:text-base">
                  <AlertTriangle className="w-4 h-4 text-rose-700" />
                  <span>{t.guide.chemicalCure} (Judicious CIBRC Recommendations)</span>
                </h4>
                <div className="space-y-2">
                  {selectedDisease.chemicalTreatment.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-stone-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  <span>{t.guide.prevention}</span>
                </h4>
                <div className="space-y-1.5 pl-6">
                  {selectedDisease.prevention.map((prev, i) => (
                    <div key={i} className="flex items-start gap-2 text-stone-700 leading-relaxed">
                      <span className="font-bold text-forest-800">{i + 1}.</span>
                      <span>{prev}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedDisease(null)}
                className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-200 text-xs font-semibold"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedDisease(null);
                  onSelectCropToScan(selectedCrop.crop);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs shadow-soft transition"
              >
                <ScanLine className="w-4 h-4 text-emerald-400" />
                <span>Upload {selectedCrop.crop} Photo to Diagnose</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
