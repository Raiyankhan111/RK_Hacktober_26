# CropCare AI — Smart Farming, Healthier Crops 🌾

[![Deployed with Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://ay-hacktober-26.vercel.app)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-ay--hacktober--26.vercel.app-14532d?style=for-the-badge&logo=google-chrome)](https://ay-hacktober-26.vercel.app)

> ### 🌐 **Live Website Link:**  
> # 👉 **[https://ay-hacktober-26.vercel.app](https://ay-hacktober-26.vercel.app)**
> *(Alternative mirror: [GitHub Pages](https://yeolearnav34.github.io/AY_Hacktober_26/))*

---

An AI-powered agricultural diagnostic web application designed specifically for Indian farmers and agronomists. **CropCare AI** identifies crop foliar diseases from live camera feeds or photo uploads, delivering instant, actionable treatment plans, weather-driven fungal forecasts, and verified Integrated Pest Management (IPM) guidelines in **English**, **हिन्दी (Hindi)**, and **मराठी (Marathi)**.

---

## 🌟 Key Highlights

- **Real-Time AI Disease Inference:** Fast visual analysis detecting diseases across 10 major Indian crops (Tomato, Potato, Rice, Wheat, Cotton, Chilli, Maize, Sugarcane, Grapes, and Apple).
- **Integrated Pest Management (IPM):** Step-by-step guidance prioritizing cultural sanitation, eco-friendly biocontrols (*Trichoderma*, Neem oil, *Pseudomonas*), and CIBRC-registered chemical treatments.
- **Hyperlocal Agri-Weather & Fungal Alerts:** Live atmospheric monitoring (relative humidity, wind speed, rain probability) powered by Open-Meteo and OpenWeather to forecast fungal pressure and guide spraying windows.
- **Trilingual Accessibility:** Complete native translation across all navigation, buttons, advisory cards, and disease descriptions in **English**, **हिन्दी**, and **मराठी**.
- **Private & Local-First:** Scans are automatically saved locally on the farmer's device with zero mandatory registration. Optional cloud sync is protected by Supabase Row Level Security (RLS).
- **Government Extension Integration:** Direct one-click dialer to the national **Kisan Call Center (1800-180-1551)** and Krishi Vigyan Kendra (KVK) directory.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS (Forest Green, Warm Cream, Harvest Yellow palette), Poppins Font |
| **Icons** | Lucide React |
| **Inference Pipeline** | Supabase Edge Function (`predict-crop-disease`), Hugging Face Plant Pathology Vision Models, and Canvas Pre-processing |
| **Backend & Database** | Supabase PostgreSQL with Row Level Security (RLS) policies |
| **Meteorology** | Open-Meteo Live API (zero-key live satellite feed) & OpenWeather API |
| **Storage & Sync** | LocalStorage (Local-first) + Supabase PostgreSQL (Cloud Sync) |

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone or navigate to the project directory
cd /Users/arnavyeole/.gemini/antigravity/scratch/cropcare-ai

# Install dependencies
npm install
```

### 3. Environment Setup (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

CropCare AI is designed with an **adaptive zero-config mode**:
- If no Supabase or Hugging Face keys are configured, it runs using its built-in client-side canvas feature segmentation engine combined with the verified Indian agronomic pathology knowledge base.
- If no OpenWeather key is provided, it automatically connects to **Open-Meteo's live satellite meteorological feed** for real-time weather and fungal risk prediction without needing an API key.

### 4. Running the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## ☁️ Supabase Backend Deployment

### 1. Apply Database Migrations
In your Supabase project SQL Editor, run the script located at:
`supabase/migrations/20261024000001_create_scan_history.sql`

This creates:
- `public.scan_history` table with proper UUID keys and check constraints.
- Row Level Security (RLS) policies ensuring users and device tokens can only read/write/delete their own scan records.
- Optimized B-tree indexes on `session_id`, `created_at`, and `crop`.

### 2. Deploy the Edge Function
Install the Supabase CLI and deploy the `predict-crop-disease` function:
```bash
supabase login
supabase link --project-ref your-project-id
supabase functions deploy predict-crop-disease
```

Set server-side secrets in Supabase (never exposed to client-side code):
```bash
supabase secrets set HUGGINGFACE_API_KEY=hf_your_key_here
supabase secrets set HF_MODEL_NAME=linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification
```

---

## 🧪 Testing and Verification Checklist

| Test Scenario | Action | Expected Result |
|---|---|---|
| **Image Upload** | Drag & drop or upload JPG, PNG, WEBP leaf photo | Instant preview rendered, file format validated |
| **Camera Capture** | Click "Take Photo with Camera" | Video stream initiates with environment-facing camera support, flash guidance, and capture trigger |
| **Sample Leaf Testing** | Click any of the 6 pre-loaded sample leaves (Tomato, Potato, Rice, Cotton, Healthy Corn, Unclear leaf) | Loads image immediately for fast judging & evaluation |
| **AI Inference** | Click "Analyze Crop" | Returns confidence score, pathogen type, symptoms, IPM treatment (Cultural, Organic, Chemical), and prevention tips |
| **Low-Confidence Detection** | Test with non-leaf image or blurred sample | Warning banner displayed advising clearer daylight capture |
| **Language Switcher** | Toggle between **EN**, **हिन्दी**, and **मराठी** in top bar | All UI labels, headers, and advice adapt immediately |
| **Live Weather** | Search "Nashik" or click "Use My GPS Location" | Retrieves live temperature, humidity, rainfall, and fungal outbreak risk |
| **Scan History** | Perform a scan and open "My Crop Scans" | Logged in local storage with thumbnail, timestamp, and delete/export tools |
| **Helpline Connectivity** | Click "Call 1800-180-1551" | Triggers mobile dialer directly to the national Kisan Call Center |

---

## 🌾 Responsible AI & Agronomic Disclaimers

1. **Decision Support:** CropCare AI provides diagnostic decision assistance based on machine learning. It is intended to guide immediate field action and does not replace laboratory spore culture testing during catastrophic epidemics.
2. **Safety Notice:** Chemical dosages comply with standard Central Insecticides Board & Registration Committee (CIBRC) labels. Farmers must always observe withholding periods (PHI) and wear protective masks and gloves during pesticide spraying.
3. **Institutional Links:** For severe regional blight, farmers are encouraged to consult their nearest **Krishi Vigyan Kendra (KVK)** or dial **1800-180-1551** (6:00 AM – 10:00 PM).

---

## 📄 License
Dedicated to the welfare of India's farmers. Free and open for hackathon evaluation and non-commercial agricultural extensions.
