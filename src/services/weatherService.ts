import { WeatherData, WeatherForecastDay } from '../types';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY as string | undefined;

// Pre-mapped coordinates for key Indian agricultural districts
const INDIAN_AGRI_HUBS: Record<string, { lat: number; lon: number; region: string; state: string }> = {
  pune: { lat: 18.5204, lon: 73.8567, region: 'Pune District', state: 'Maharashtra' },
  nashik: { lat: 19.9975, lon: 73.7898, region: 'Nashik (Grape & Onion Hub)', state: 'Maharashtra' },
  nagpur: { lat: 21.1458, lon: 79.0882, region: 'Nagpur (Citrus & Cotton)', state: 'Maharashtra' },
  aurangabad: { lat: 19.8762, lon: 75.3433, region: 'Chhatrapati Sambhajinagar', state: 'Maharashtra' },
  chhatrapati_sambhajinagar: { lat: 19.8762, lon: 75.3433, region: 'Chhatrapati Sambhajinagar', state: 'Maharashtra' },
  kolhapur: { lat: 16.7050, lon: 74.2433, region: 'Kolhapur (Sugarcane Hub)', state: 'Maharashtra' },
  solapur: { lat: 17.6599, lon: 75.9064, region: 'Solapur (Pomegranate & Jowar)', state: 'Maharashtra' },
  ludhiana: { lat: 30.9010, lon: 75.8573, region: 'Ludhiana (PAU Agri Hub)', state: 'Punjab' },
  amritsar: { lat: 31.6340, lon: 74.8723, region: 'Amritsar (Wheat & Paddy)', state: 'Punjab' },
  karnal: { lat: 29.6857, lon: 76.9905, region: 'Karnal (CSSRI & Basmati)', state: 'Haryana' },
  hisar: { lat: 29.1492, lon: 75.7217, region: 'Hisar (HAU Agricultural Zone)', state: 'Haryana' },
  varanasi: { lat: 25.3176, lon: 82.9739, region: 'Varanasi (Vegetable Belt)', state: 'Uttar Pradesh' },
  lucknow: { lat: 26.8467, lon: 80.9462, region: 'Lucknow (Mango & Sugarcane)', state: 'Uttar Pradesh' },
  patna: { lat: 25.5941, lon: 85.1376, region: 'Patna (Gangetic Plains)', state: 'Bihar' },
  jaipur: { lat: 26.9124, lon: 75.7873, region: 'Jaipur (Mustard & Bajra)', state: 'Rajasthan' },
  hyderabad: { lat: 17.3850, lon: 78.4867, region: 'Hyderabad (Telangana Agri Hub)', state: 'Telangana' },
  guntur: { lat: 16.3067, lon: 80.4365, region: 'Guntur (Chilli & Cotton Capital)', state: 'Andhra Pradesh' },
  bengaluru: { lat: 12.9716, lon: 77.5946, region: 'Bengaluru Rural (Horticulture)', state: 'Karnataka' },
  coimbatore: { lat: 11.0168, lon: 76.9558, region: 'Coimbatore (TNAU Cotton Zone)', state: 'Tamil Nadu' },
  shimla: { lat: 31.1048, lon: 77.1734, region: 'Shimla (Apple Belt)', state: 'Himachal Pradesh' },
  srinagar: { lat: 34.0837, lon: 74.7973, region: 'Srinagar (Apple & Walnut Valley)', state: 'Jammu & Kashmir' },
};

// Weather code description interpreter
const interpretWmoWeatherCode = (code: number): { text: string; icon: string } => {
  if (code === 0) return { text: 'Clear Sky', icon: '☀️' };
  if (code === 1 || code === 2) return { text: 'Partly Cloudy', icon: '🌤️' };
  if (code === 3) return { text: 'Overcast', icon: '☁️' };
  if (code >= 45 && code <= 48) return { text: 'Foggy / Dewy Mist', icon: '🌫️' };
  if (code >= 51 && code <= 55) return { text: 'Light Drizzle', icon: '🌦️' };
  if (code >= 61 && code <= 65) return { text: 'Rain Showers', icon: '🌧️' };
  if (code >= 80 && code <= 82) return { text: 'Heavy Downpour', icon: '⛈️' };
  if (code >= 95) return { text: 'Thunderstorm', icon: '⚡' };
  return { text: 'Moderate Breeze', icon: '⛅' };
};

// Generate intelligent agricultural advice based on actual weather conditions
const generateAgriculturalAdvisories = (
  temp: number,
  humidity: number,
  windSpeed: number,
  rainProb: number
): { advisory: string[]; risk: 'low' | 'moderate' | 'high' } => {
  const advisories: string[] = [];
  let risk: 'low' | 'moderate' | 'high' = 'low';

  // Fungal pressure assessment
  if (humidity > 80 && temp >= 18 && temp <= 29) {
    risk = 'high';
    advisories.push('⚠️ High Fungal Risk: High humidity (>80%) and warm temperatures favor Early Blight, Downy Mildew, and Leaf Blast. Inspect lower canopies.');
  } else if (humidity > 68) {
    risk = 'moderate';
    advisories.push('Moderate Fungal Potential: Monitor foliage closely for emerging water-soaked spots.');
  } else {
    risk = 'low';
    advisories.push('Low Fungal Pressure: Atmospheric moisture is below disease outbreak thresholds.');
  }

  // Spraying conditions
  if (windSpeed > 15) {
    advisories.push('🚫 Avoid Spraying: Wind speed exceeds 15 km/h. High risk of pesticide drift onto adjacent fields or non-target plants.');
  } else if (rainProb > 40) {
    advisories.push('🌧️ Delay Chemical Spraying: Rain probability >40%. Pesticides will wash off foliage before systemic absorption.');
  } else if (windSpeed < 12 && rainProb < 25) {
    advisories.push('✅ Excellent Spraying Window: Gentle breeze (<12 km/h) and low rain risk. Morning or evening spray recommended.');
  }

  // Irrigation recommendations
  if (temp > 35) {
    advisories.push('☀️ Heat Stress Alert: Temperatures exceeding 35°C. Apply light evening drip irrigation to prevent blossom drop.');
  } else if (humidity > 85 && rainProb > 30) {
    advisories.push('💧 Suspend Surface Irrigation: Moisture levels are high. Prevent waterlogging to avoid bacterial wilt and root rot.');
  }

  return { advisory: advisories, risk };
};

export const fetchWeatherForLocation = async (
  queryOrCity: string
): Promise<WeatherData> => {
  const cleanKey = queryOrCity.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  let lat = 18.5204;
  let lon = 73.8567;
  let cityName = 'Pune';
  let regionName = 'Maharashtra, India';

  // Match predefined hub first
  const matchedKey = Object.keys(INDIAN_AGRI_HUBS).find(k => cleanKey.includes(k) || k.includes(cleanKey));
  if (matchedKey) {
    const hub = INDIAN_AGRI_HUBS[matchedKey];
    lat = hub.lat;
    lon = hub.lon;
    cityName = matchedKey.charAt(0).toUpperCase() + matchedKey.slice(1);
    regionName = `${hub.region}, ${hub.state}`;
  } else {
    // Geocode via Open-Meteo geocoding API (free, live, zero-key)
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(queryOrCity)}&count=1&language=en&format=json`
      );
      if (geoRes.ok) {
        const geoData = await geoRes.json();
        if (geoData.results && geoData.results.length > 0) {
          const first = geoData.results[0];
          lat = first.latitude;
          lon = first.longitude;
          cityName = first.name;
          regionName = `${first.admin1 || ''}, ${first.country || 'India'}`.replace(/^, /, '');
        }
      }
    } catch (e) {
      console.warn('Geocoding service unavailable, using regional center:', e);
    }
  }

  // 1. If OpenWeather API key is present, attempt OpenWeather call
  if (OPENWEATHER_API_KEY && OPENWEATHER_API_KEY !== 'your-openweather-api-key') {
    try {
      const owRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );
      if (owRes.ok) {
        const owData = await owRes.json();
        const temp = Math.round(owData.main.temp);
        const humidity = owData.main.humidity;
        const windSpeed = Math.round(owData.wind.speed * 3.6); // m/s to km/h
        const feelsLike = Math.round(owData.main.feels_like);
        const rainProb = owData.rain ? 60 : 10;
        const condition = owData.weather[0]?.main || 'Clear';

        const { advisory, risk } = generateAgriculturalAdvisories(temp, humidity, windSpeed, rainProb);

        // Mock 5-day forecast based on current data
        const forecast: WeatherForecastDay[] = [
          { date: 'Tomorrow', dayName: 'Tue', tempMax: temp + 2, tempMin: temp - 4, condition: 'Partly Cloudy', rainProbability: 15 },
          { date: 'Day 2', dayName: 'Wed', tempMax: temp + 1, tempMin: temp - 5, condition: 'Clear', rainProbability: 10 },
          { date: 'Day 3', dayName: 'Thu', tempMax: temp - 1, tempMin: temp - 3, condition: 'Light Drizzle', rainProbability: 45 },
          { date: 'Day 4', dayName: 'Fri', tempMax: temp, tempMin: temp - 4, condition: 'Clear', rainProbability: 5 },
          { date: 'Day 5', dayName: 'Sat', tempMax: temp + 3, tempMin: temp - 2, condition: 'Sunny', rainProbability: 10 },
        ];

        return {
          city: cityName,
          region: regionName,
          temp,
          feelsLike,
          humidity,
          windSpeed,
          precipitation: rainProb,
          condition,
          icon: '☀️',
          fungalRisk: risk,
          agriculturalAdvisory: advisory,
          forecast,
          source: 'OpenWeather (Live)',
        };
      }
    } catch (owErr) {
      console.warn('OpenWeather request failed, falling back to Open-Meteo live:', owErr);
    }
  }

  // 2. Fetch live weather and forecast from Open-Meteo (zero-key, live satellite & weather model)
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const current = data.current;
      const daily = data.daily;

      const temp = Math.round(current.temperature_2m);
      const humidity = Math.round(current.relative_humidity_2m);
      const windSpeed = Math.round(current.wind_speed_10m);
      const precipitation = Math.round(current.precipitation);
      const feelsLike = Math.round(current.apparent_temperature);
      const weatherInfo = interpretWmoWeatherCode(current.weather_code);
      const rainProb = daily.precipitation_probability_max?.[0] || 15;

      const { advisory, risk } = generateAgriculturalAdvisories(temp, humidity, windSpeed, rainProb);

      const forecast: WeatherForecastDay[] = [];
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 1; i <= 5; i++) {
        const rawDate = daily.time[i];
        const dateObj = new Date(rawDate);
        const dayName = days[dateObj.getDay()] || `Day ${i}`;
        const conditionInfo = interpretWmoWeatherCode(daily.weather_code[i] || 0);

        forecast.push({
          date: rawDate,
          dayName,
          tempMax: Math.round(daily.temperature_2m_max[i]),
          tempMin: Math.round(daily.temperature_2m_min[i]),
          condition: conditionInfo.text,
          rainProbability: daily.precipitation_probability_max[i] || 10,
        });
      }

      return {
        city: cityName,
        region: regionName,
        temp,
        feelsLike,
        humidity,
        windSpeed,
        precipitation: rainProb,
        condition: weatherInfo.text,
        icon: weatherInfo.icon,
        fungalRisk: risk,
        agriculturalAdvisory: advisory,
        forecast,
        source: 'Open-Meteo (Live)',
      };
    }
  } catch (liveErr) {
    console.warn('Live weather request failed, providing realistic fallback:', liveErr);
  }

  // 3. Graceful offline fallback
  const temp = 28;
  const humidity = 65;
  const windSpeed = 11;
  const { advisory, risk } = generateAgriculturalAdvisories(temp, humidity, windSpeed, 20);

  return {
    city: cityName,
    region: regionName,
    temp,
    feelsLike: 29,
    humidity,
    windSpeed,
    precipitation: 20,
    condition: 'Partly Cloudy',
    icon: '🌤️',
    fungalRisk: risk,
    agriculturalAdvisory: advisory,
    forecast: [
      { date: 'Tomorrow', dayName: 'Tue', tempMax: 30, tempMin: 22, condition: 'Partly Cloudy', rainProbability: 20 },
      { date: 'Day 2', dayName: 'Wed', tempMax: 31, tempMin: 23, condition: 'Sunny', rainProbability: 10 },
      { date: 'Day 3', dayName: 'Thu', tempMax: 29, tempMin: 21, condition: 'Light Rain', rainProbability: 50 },
      { date: 'Day 4', dayName: 'Fri', tempMax: 28, tempMin: 20, condition: 'Overcast', rainProbability: 30 },
      { date: 'Day 5', dayName: 'Sat', tempMax: 31, tempMin: 22, condition: 'Sunny', rainProbability: 5 },
    ],
    source: 'Offline Simulation',
  };
};

export const fetchWeatherForCoordinates = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  return fetchWeatherForLocation(`${lat.toFixed(4)}, ${lon.toFixed(4)}`);
};
