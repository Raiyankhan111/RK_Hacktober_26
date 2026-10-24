import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../types';
import { Globe, Check, ChevronDown } from 'lucide-react';

const languages: { code: Language; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🚩' },
];

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Language"
        className={`inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/90 px-3 py-1.5 text-xs sm:text-sm font-medium text-forest-900 shadow-sm transition hover:bg-forest-50 hover:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-500 ${
          compact ? 'py-1 px-2.5 text-xs' : ''
        }`}
      >
        <Globe className="h-4 w-4 text-forest-600" />
        <span className="font-semibold">{activeLang.nativeName}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-forest-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-2xl bg-white p-1.5 shadow-lifted border border-forest-100 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-100">
            Select Language / भाषा
          </div>
          {languages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs sm:text-sm transition ${
                  isSelected
                    ? 'bg-forest-50 font-semibold text-forest-900'
                    : 'text-stone-700 hover:bg-stone-50 hover:text-forest-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.flag}</span>
                  <div>
                    <div className="leading-tight">{item.nativeName}</div>
                    <div className="text-[10px] text-stone-400 font-normal">{item.name}</div>
                  </div>
                </div>
                {isSelected && <Check className="h-4 w-4 text-forest-700" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
