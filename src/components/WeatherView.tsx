import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { fetchWeatherForLocation, fetchWeatherForCoordinates } from '../services/weatherService';
import { WeatherData } from '../types';
import { 
  CloudSun, 
  MapPin, 
  Search, 
  Navigation, 
  Droplets, 
  Wind, 
  Thermometer, 
  CloudRain, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Calendar, 
  Info,
  Loader2,
  Sparkles
} from 'lucide-react';

export const WeatherView: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCity, setCurrentCity] = useState('Pune');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const popularHubs = [
    { name: 'Pune', label: 'Pune' },
    { name: 'Nashik', label: 'Nashik (Grapes/Onion)' },
    { name: 'Nagpur', label: 'Nagpur (Cotton/Oranges)' },
    { name: 'Kolhapur', label: 'Kolhapur (Sugarcane)' },
    { name: 'Ludhiana', label: 'Ludhiana (Wheat/Paddy)' },
    { name: 'Karnal', label: 'Karnal (Basmati)' },
    { name: 'Guntur', label: 'Guntur (Chilli)' },
    { name: 'Varanasi', label: 'Varanasi (Vegetables)' },
  ];

  const loadWeather = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherForLocation(query);
      setWeatherData(data);
      setCurrentCity(data.city);
    } catch (err: any) {
      setError(err?.message || 'Unable to retrieve weather data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather(currentCity);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    loadWeather(searchQuery.trim());
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const data = await fetchWeatherForCoordinates(lat, lon);
          setWeatherData(data);
          setCurrentCity(data.city);
        } catch (e: any) {
          setError('Failed to fetch weather for your exact GPS coordinates.');
        } finally {
          setIsLocating(false);
          setLoading(false);
        }
      },
      (geoErr) => {
        setIsLocating(false);
        setError('Location permission denied or unavailable. Please type your district manually.');
      },
      { timeout: 10000 }
    );
  };

  const getFungalBadge = (risk: 'low' | 'moderate' | 'high') => {
    switch (risk) {
      case 'low':
        return (
          <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs">
              <strong className="block text-emerald-950 font-bold">Low Fungal Outbreak Risk</strong>
              <span>Atmospheric humidity is below normal spore germination thresholds.</span>
            </div>
          </div>
        );
      case 'moderate':
        return (
          <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <div className="text-xs">
              <strong className="block text-amber-950 font-bold">Moderate Fungal Alert</strong>
              <span>High moisture may induce leaf spots and blights. Inspect lower crop leaves.</span>
            </div>
          </div>
        );
      case 'high':
        return (
          <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-red-50 border border-red-300 text-red-900">
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
            <div className="text-xs">
              <strong className="block text-red-950 font-bold">CRITICAL: High Fungal Risk</strong>
              <span>Relative humidity &gt;80% combined with warm conditions strongly favors Early/Late Blight & Mildew.</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-5xl mx-auto">
      
      {/* Title & Description */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold">
          <CloudSun className="w-3.5 h-3.5 text-forest-700" />
          <span>Hyperlocal Agricultural Meteorology</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
          {t.weather.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl">
          {t.weather.subtitle}
        </p>
      </div>

      {/* Search & Location Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-forest-100 shadow-soft space-y-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.weather.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-cream/50 border border-forest-200 text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:bg-white transition"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xs"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span>{t.weather.searchBtn}</span>
          </button>

          <button
            type="button"
            onClick={handleUseCurrentLocation}
            disabled={isLocating}
            className="px-5 py-3 rounded-2xl bg-harvest-400 hover:bg-harvest-500 text-stone-950 font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xs"
          >
            {isLocating ? (
              <Loader2 className="w-4 h-4 animate-spin text-stone-900" />
            ) : (
              <Navigation className="w-4 h-4 text-stone-900" />
            )}
            <span>{t.weather.useLocationBtn}</span>
          </button>
        </form>

        {/* Quick Hub Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px] shrink-0 mr-1 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-forest-700" /> Agri Hubs:
          </span>
          {popularHubs.map((hub) => (
            <button
              key={hub.name}
              type="button"
              onClick={() => {
                setSearchQuery(hub.name);
                loadWeather(hub.name);
              }}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition ${
                currentCity.toLowerCase().includes(hub.name.toLowerCase())
                  ? 'bg-forest-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {hub.label}
            </button>
          ))}
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="bg-white rounded-3xl p-12 text-center border border-forest-100 shadow-soft space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-forest-700 mx-auto" />
          <p className="text-xs text-stone-600 font-medium">Fetching real-time atmospheric readings...</p>
        </div>
      )}

      {/* Main Weather Display */}
      {!loading && weatherData && (
        <div className="space-y-6">
          
          {/* Current Conditions Card */}
          <div className="bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-white rounded-3xl p-6 sm:p-8 shadow-lifted">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-forest-700/60">
              <div>
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{weatherData.region}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {weatherData.city}
                </h2>
                <p className="text-stone-300 text-sm mt-0.5">
                  {weatherData.condition}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-5xl">{weatherData.icon}</span>
                <div className="text-right">
                  <div className="text-4xl sm:text-5xl font-black text-white">
                    {weatherData.temp}°C
                  </div>
                  <div className="text-xs text-stone-300 mt-1">
                    {t.weather.feelsLike}: <strong>{weatherData.feelsLike}°C</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Microclimate Parameters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 text-center sm:text-left">
              <div className="bg-forest-900/60 p-3 sm:p-4 rounded-2xl border border-forest-700/60">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-stone-300">
                  <Droplets className="w-4 h-4 text-emerald-400" />
                  <span>{t.weather.humidity}</span>
                </div>
                <div className="text-lg sm:text-2xl font-bold mt-1 text-white">
                  {weatherData.humidity}%
                </div>
              </div>

              <div className="bg-forest-900/60 p-3 sm:p-4 rounded-2xl border border-forest-700/60">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-stone-300">
                  <Wind className="w-4 h-4 text-teal-400" />
                  <span>{t.weather.wind}</span>
                </div>
                <div className="text-lg sm:text-2xl font-bold mt-1 text-white">
                  {weatherData.windSpeed} km/h
                </div>
              </div>

              <div className="bg-forest-900/60 p-3 sm:p-4 rounded-2xl border border-forest-700/60">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-stone-300">
                  <CloudRain className="w-4 h-4 text-harvest-400" />
                  <span>{t.weather.rainfall}</span>
                </div>
                <div className="text-lg sm:text-2xl font-bold mt-1 text-white">
                  {weatherData.precipitation}%
                </div>
              </div>
            </div>

            {/* Live Data Provider Badge */}
            <div className="mt-4 pt-3 border-t border-forest-800/80 flex items-center justify-between text-[11px] text-stone-400">
              <span>Feed Provider: <strong className="text-emerald-300">{weatherData.source}</strong></span>
              <span>Updated just now</span>
            </div>
          </div>

          {/* Fungal & Spray Advisory Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Fungal Risk Alert */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-forest-100 shadow-soft space-y-4">
              <h3 className="font-bold text-base text-forest-950 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-forest-700" />
                <span>{t.weather.fungalRiskTitle}</span>
              </h3>
              {getFungalBadge(weatherData.fungalRisk)}
              <p className="text-xs text-stone-600 leading-relaxed">
                Fungal pathogens such as <em>Alternaria solani</em> and <em>Phytophthora infestans</em> require prolonged leaf moisture (&gt;6 hours) and high ambient humidity to infect host tissues.
              </p>
            </div>

            {/* Agricultural Spray Advisory */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-forest-100 shadow-soft space-y-4">
              <h3 className="font-bold text-base text-forest-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>{t.weather.agriAdvisoryTitle}</span>
              </h3>
              <div className="space-y-2.5">
                {weatherData.agriculturalAdvisory.map((adv, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-forest-50/60 border border-forest-100 text-xs text-stone-800 leading-relaxed">
                    {adv}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 5-Day Agricultural Forecast */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-forest-100 shadow-soft space-y-4">
            <h3 className="font-bold text-base text-forest-950 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-forest-700" />
              <span>{t.weather.forecastTitle}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {weatherData.forecast.map((day, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-cream/70 border border-forest-100 text-center space-y-2">
                  <div className="font-bold text-xs text-stone-900">{day.dayName}</div>
                  <div className="text-[11px] text-stone-500">{day.date}</div>
                  <div className="text-sm font-extrabold text-forest-900">
                    {day.tempMax}° / <span className="text-stone-500 font-normal">{day.tempMin}°</span>
                  </div>
                  <div className="text-xs text-stone-600 font-medium truncate" title={day.condition}>
                    {day.condition}
                  </div>
                  <div className="text-[10px] font-semibold text-blue-700 bg-blue-50 py-0.5 rounded-md">
                    Rain {day.rainProbability}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Agricultural Planning Notice:</strong> {t.weather.disclaimer}
            </p>
          </div>

        </div>
      )}

    </div>
  );
};
