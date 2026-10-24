export type Language = 'en' | 'hi' | 'mr';

export type PathogenType = 'fungal' | 'bacterial' | 'viral' | 'pest' | 'deficiency' | 'healthy' | 'unknown';

export interface AlternativePrediction {
  name: string;
  confidence: number;
  crop: string;
}

export interface CropScanResult {
  success: boolean;
  crop: string;
  cropLocalName?: {
    hi: string;
    mr: string;
  };
  prediction: string;
  diseaseLocalName?: {
    hi: string;
    mr: string;
  };
  scientificName?: string;
  pathogenType: PathogenType;
  confidence: number;
  severity: 'low' | 'moderate' | 'high' | 'healthy';
  alternatives: AlternativePrediction[];
  isUnclearImage?: boolean;
  unclearReason?: string;
  symptoms: string[];
  causes: string[];
  treatment: {
    cultural: string[];
    organic: string[];
    chemical: string[];
  };
  prevention: string[];
  expertGuidance: string;
  model: string;
  disclaimer: string;
  analysisTimestamp: string;
  imageUrl?: string;
}

export interface ScanHistoryItem {
  id: string;
  timestamp: string;
  crop: string;
  prediction: string;
  confidence: number;
  severity: 'low' | 'moderate' | 'high' | 'healthy';
  pathogenType: PathogenType;
  imageUrl?: string;
  result: CropScanResult;
  isCloudSynced?: boolean;
}

export interface CropDiseaseGuide {
  name: string;
  localNameHindi: string;
  localNameMarathi: string;
  scientificName: string;
  pathogenType: PathogenType;
  symptoms: string[];
  causes: string[];
  organicTreatment: string[];
  chemicalTreatment: string[];
  prevention: string[];
  imageUrl: string;
}

export interface CropGuideItem {
  id: string;
  crop: string;
  cropHindi: string;
  cropMarathi: string;
  scientificName: string;
  category: string;
  idealSeason: string;
  soilType: string;
  description: string;
  imageUrl: string;
  commonDiseases: CropDiseaseGuide[];
}

export interface WeatherForecastDay {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  condition: string;
  rainProbability: number;
}

export interface WeatherData {
  city: string;
  region: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  condition: string;
  icon: string;
  fungalRisk: 'low' | 'moderate' | 'high';
  agriculturalAdvisory: string[];
  forecast: WeatherForecastDay[];
  source: 'Open-Meteo (Live)' | 'OpenWeather (Live)' | 'Offline Simulation';
}

export interface ContactFormData {
  name: string;
  contact: string; // phone or email
  state: string;
  district: string;
  crop: string;
  queryType: 'disease' | 'prevention' | 'pesticide' | 'technical' | 'other';
  message: string;
}
