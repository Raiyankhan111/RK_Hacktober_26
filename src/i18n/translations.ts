import { Language } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  nav: {
    home: string;
    detect: string;
    guide: string;
    weather: string;
    history: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsFarmers: string;
    statsCrops: string;
    statsAccuracy: string;
  };
  howItWorks: {
    tag: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  features: {
    tag: string;
    title: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  crops: {
    tag: string;
    title: string;
    subtitle: string;
  };
  detect: {
    title: string;
    subtitle: string;
    uploadAreaTitle: string;
    uploadAreaSubtitle: string;
    browseFiles: string;
    takePhoto: string;
    sampleImagesPrompt: string;
    trySample: string;
    analyzingTitle: string;
    analyzingSubtitle: string;
    analyzeBtn: string;
    removeBtn: string;
    retestBtn: string;
    cameraModalTitle: string;
    captureBtn: string;
    switchCamBtn: string;
    closeCamBtn: string;
    fileLimitWarning: string;
  };
  result: {
    detectionSummary: string;
    detectedCrop: string;
    detectedDisease: string;
    confidence: string;
    scientificName: string;
    pathogenType: string;
    severityLabel: string;
    unclearWarningTitle: string;
    unclearWarningDesc: string;
    tabMeaning: string;
    tabTreatment: string;
    tabPrevention: string;
    tabExpert: string;
    tabAlternatives: string;
    symptomsTitle: string;
    causesTitle: string;
    culturalTreatment: string;
    organicTreatment: string;
    chemicalTreatment: string;
    chemicalNotice: string;
    preventionTitle: string;
    expertTitle: string;
    kisanCallCenter: string;
    kisanCallCenterDesc: string;
    printReport: string;
    saveToHistory: string;
    savedToHistory: string;
  };
  weather: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchBtn: string;
    useLocationBtn: string;
    currentWeather: string;
    humidity: string;
    wind: string;
    rainfall: string;
    feelsLike: string;
    agriAdvisoryTitle: string;
    fungalRiskTitle: string;
    forecastTitle: string;
    disclaimer: string;
  };
  guide: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCrops: string;
    categoryAll: string;
    diseasesCount: string;
    symptoms: string;
    organicCure: string;
    chemicalCure: string;
    prevention: string;
    learnMore: string;
  };
  history: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyDesc: string;
    scanNow: string;
    clearAll: string;
    deleteItem: string;
    cloudStatusLocal: string;
    cloudStatusSynced: string;
    confirmClear: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    contactLabel: string;
    stateLabel: string;
    districtLabel: string;
    cropLabel: string;
    queryTypeLabel: string;
    messageLabel: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    emergencyCardTitle: string;
    emergencyNumber: string;
    emergencySubtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    howAiWorksTitle: string;
    howAiWorksDesc: string;
    limitationsTitle: string;
    limitationsDesc: string;
  };
  disclaimer: {
    text: string;
    officialKisanLink: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    helpline: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    appName: "CropCare AI",
    tagline: "Smart Farming, Healthier Crops",
    nav: {
      home: "Home",
      detect: "Detect Disease",
      guide: "Crop Library",
      weather: "Weather Advisory",
      history: "Scan History",
      about: "About AI",
      contact: "Support & Helpline",
    },
    hero: {
      badge: "🌾 AI-Powered Agricultural Guardian for Indian Farmers",
      title: "Protect Your Crops with",
      highlight: "Real-Time AI Detection",
      subtitle: "Instant identification of leaf diseases for Rice, Wheat, Tomato, Cotton, Chilli and more. Receive practical, eco-friendly treatment plans verified for Indian soil.",
      ctaPrimary: "Detect Crop Disease Now",
      ctaSecondary: "Explore Crop Library",
      statsFarmers: "10+ Supported Crops",
      statsCrops: "35+ Plant Diseases",
      statsAccuracy: "Instant Analysis",
    },
    howItWorks: {
      tag: "SIMPLE & FAST",
      title: "How CropCare AI Works",
      subtitle: "Four simple steps from leaf photo to actionable crop remedy",
      step1Title: "1. Capture or Upload",
      step1Desc: "Take a clear, well-lit photo of the affected leaf using your mobile camera or upload from gallery.",
      step2Title: "2. Real-Time AI Analysis",
      step2Desc: "Our computer vision model inspects lesion spots, discoloration, and fungal patterns against thousands of verified samples.",
      step3Title: "3. Verified Diagnosis",
      step3Desc: "Get the disease name, confidence score, and alternative differential diagnoses in English, Hindi, or Marathi.",
      step4Title: "4. Practical IPM Treatment",
      step4Desc: "Follow step-by-step organic, cultural, and CIBRC-approved chemical solutions safe for Indian agricultural conditions.",
    },
    features: {
      tag: "BUILT FOR FARMERS",
      title: "Smart Features Tailored for the Field",
      f1Title: "Precision Disease Detection",
      f1Desc: "Instant diagnosis with confidence breakdown for 35+ major Indian crop diseases.",
      f2Title: "Integrated Pest Management (IPM)",
      f2Desc: "Prioritizes organic biocontrol (Neem, Trichoderma) alongside safe chemical dosages.",
      f3Title: "Live Agri-Weather Alerts",
      f3Desc: "Real-time rainfall & humidity monitoring to forecast fungal blast & mildew outbreaks.",
      f4Title: "Multilingual & Offline-Ready",
      f4Desc: "Available in English, हिन्दी, and मराठी with offline local scan history.",
    },
    crops: {
      tag: "SUPPORTED CROPS",
      title: "Protecting India's Major Food & Cash Crops",
      subtitle: "Extensive diagnostic coverage tailored to regional agronomy across Indian states.",
    },
    detect: {
      title: "Crop Disease Scanner",
      subtitle: "Upload a photo or capture a live leaf picture to get an instant AI health diagnosis.",
      uploadAreaTitle: "Drop leaf image here or choose an option",
      uploadAreaSubtitle: "Supports JPG, PNG, WEBP (Up to 10MB)",
      browseFiles: "Browse Files",
      takePhoto: "Open Camera",
      sampleImagesPrompt: "Don't have a leaf image? Try these test samples:",
      trySample: "Try Sample Leaf",
      analyzingTitle: "Analyzing Leaf Pattern...",
      analyzingSubtitle: "Inspecting fungal textures, lesion margins, and chlorosis symptoms...",
      analyzeBtn: "Analyze Crop Leaf Now",
      removeBtn: "Remove",
      retestBtn: "Scan Another Leaf",
      cameraModalTitle: "Live Camera Capture",
      captureBtn: "Snap Photo",
      switchCamBtn: "Switch Camera",
      closeCamBtn: "Close",
      fileLimitWarning: "Please upload an image file under 10MB.",
    },
    result: {
      detectionSummary: "Diagnostic Assessment",
      detectedCrop: "Identified Crop",
      detectedDisease: "Predicted Condition",
      confidence: "Model Confidence",
      scientificName: "Pathogen / Cause",
      pathogenType: "Classification",
      severityLabel: "Severity Level",
      unclearWarningTitle: "Low Confidence / Unclear Leaf Image",
      unclearWarningDesc: "The image quality, lighting, or leaf angle makes a definitive prediction uncertain. Please review alternative possibilities or take a closer photo in daylight.",
      tabMeaning: "Symptoms & Causes",
      tabTreatment: "Treatment Plan (IPM)",
      tabPrevention: "Prevention & Care",
      tabExpert: "Expert Guidance",
      tabAlternatives: "Other Possibilities",
      symptomsTitle: "Visual Symptoms Observed",
      causesTitle: "Likely Environmental & Biological Causes",
      culturalTreatment: "1. Cultural & Field Sanitation",
      organicTreatment: "2. Organic & Biological Remedies (Eco-friendly)",
      chemicalTreatment: "3. Recommended Chemical Controls (Judicious Use)",
      chemicalNotice: "Always wear protective gear. Follow official CIBRC label directions and observe withholding periods before harvest.",
      preventionTitle: "Best Practices to Prevent Recurrence",
      expertTitle: "Local Agricultural Extension (KVK)",
      kisanCallCenter: "National Kisan Call Center (Toll Free)",
      kisanCallCenterDesc: "Dial 1800-180-1551 (6:00 AM to 10:00 PM) to speak directly with an agricultural officer in your state language.",
      printReport: "Print / Save PDF Report",
      saveToHistory: "Save to My Scans",
      savedToHistory: "Saved to History",
    },
    weather: {
      title: "Agricultural Weather & Spray Advisory",
      subtitle: "Hyperlocal weather monitoring to safeguard your field operations and predict fungal risks.",
      searchPlaceholder: "Search Indian city or district (e.g. Pune, Ludhiana, Nashik, Varanasi)...",
      searchBtn: "Check Weather",
      useLocationBtn: "Use My GPS Location",
      currentWeather: "Current Field Conditions",
      humidity: "Relative Humidity",
      wind: "Wind Speed",
      rainfall: "Precipitation",
      feelsLike: "Feels Like",
      agriAdvisoryTitle: "Field Spray & Sowing Advisory",
      fungalRiskTitle: "Disease & Fungal Pressure Index",
      forecastTitle: "5-Day Farming Forecast",
      disclaimer: "Weather indicators support farm planning but cannot independently confirm crop infections. Monitor crops directly after rain events.",
    },
    guide: {
      title: "Crop Disease Knowledge Base",
      subtitle: "Verified agricultural library of common diseases, visual indicators, and treatment strategies.",
      searchPlaceholder: "Search by crop (e.g., Tomato, Rice) or disease name...",
      allCrops: "All Crops",
      categoryAll: "All Categories",
      diseasesCount: "Documented Diseases",
      symptoms: "Symptoms",
      organicCure: "Organic Control",
      chemicalCure: "Chemical Control",
      prevention: "Prevention",
      learnMore: "View Full Guide",
    },
    history: {
      title: "My Crop Scans",
      subtitle: "Your past leaf diagnostic reports stored safely on your device with optional cloud sync.",
      emptyTitle: "No Scans Yet",
      emptyDesc: "Your diagnostic results will appear here after you scan an infected or healthy leaf.",
      scanNow: "Run First Leaf Scan",
      clearAll: "Clear Scan History",
      deleteItem: "Delete",
      cloudStatusLocal: "Stored Locally (Private)",
      cloudStatusSynced: "Synced to Supabase Cloud",
      confirmClear: "Are you sure you want to delete all saved scan records?",
    },
    contact: {
      title: "Farmer Support & Agricultural Helplines",
      subtitle: "Connect with certified agronomists or ask technical questions regarding CropCare AI.",
      nameLabel: "Farmer / User Name",
      contactLabel: "Mobile Number or Email",
      stateLabel: "State",
      districtLabel: "District / Tehsil",
      cropLabel: "Crop Involved",
      queryTypeLabel: "Query Category",
      messageLabel: "Describe your crop issue or feedback",
      submitBtn: "Submit Support Request",
      submittingBtn: "Submitting...",
      successTitle: "Support Request Received!",
      successDesc: "Your inquiry has been logged. For urgent disease outbreaks, please call the toll-free Kisan Call Center.",
      emergencyCardTitle: "Government Kisan Helpline",
      emergencyNumber: "1800-180-1551",
      emergencySubtitle: "Toll-free agricultural advice from ICAR & State Agri Universities across all Indian states.",
    },
    about: {
      title: "About CropCare AI",
      subtitle: "Bridging the gap between cutting-edge Artificial Intelligence and grassroots Indian agriculture.",
      missionTitle: "Our Mission: Healthier Crops, Prosperous Farmers",
      missionDesc: "CropCare AI was engineered to deliver fast, scientifically sound plant pathology assistance directly to smallholder farmers. By combining computer vision with Integrated Pest Management (IPM), we empower growers to act swiftly before diseases spread across fields.",
      howAiWorksTitle: "How the AI Model Works",
      howAiWorksDesc: "Our deep learning classification model is trained on tens of thousands of real agricultural leaf images covering foliar blights, rusts, mildews, bacterial leaf spots, and viral mosaics. It identifies micro-textures, discoloration margins, and necrosis patterns unique to specific pathogens.",
      limitationsTitle: "Responsible AI & Limitations",
      limitationsDesc: "AI predictions are decision-support aids and should not replace on-ground lab soil/tissue testing during catastrophic outbreaks. If symptoms appear ambiguous, consult your local Krishi Vigyan Kendra (KVK).",
    },
    disclaimer: {
      text: "Notice: CropCare AI provides diagnostic decision assistance based on visual machine learning. Chemical dosages must follow official CIBRC guidelines. Always consult your local Krishi Vigyan Kendra (KVK) or agricultural officer for localized advisories.",
      officialKisanLink: "Kisan Suvidha Portal",
    },
    footer: {
      desc: "Empowering Indian agriculture with accessible, accurate, and actionable AI disease diagnosis.",
      quickLinks: "Quick Links",
      helpline: "National Helplines",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      copyright: "CropCare AI. Built for Indian Farmers.",
    },
  },

  hi: {
    appName: "क्रॉपकेयर AI",
    tagline: "स्मार्ट खेती, स्वस्थ फसलें",
    nav: {
      home: "मुख्य पृष्ठ",
      detect: "रोग पहचानें",
      guide: "फसल पुस्तकालय",
      weather: "मौसम व छिड़काव",
      history: "स्कैन इतिहास",
      about: "AI के बारे में",
      contact: "सहायता व हेल्पलाइन",
    },
    hero: {
      badge: "🌾 भारतीय किसानों के लिए आधुनिक AI रक्षक",
      title: "अपनी फसलों को सुरक्षित करें",
      highlight: "तुरंत AI रोग पहचान से",
      subtitle: "धान, गेहूं, टमाटर, कपास, मिर्च आदि के पत्तों की बीमारियों की तुरंत पहचान। भारतीय मिट्टी और मौसम के अनुकूल सुरक्षित और असरदार जैविक व रासायनिक उपचार पाएँ।",
      ctaPrimary: "अभी पत्ती का रोग पहचानें",
      ctaSecondary: "फसल रोग ज्ञानकोष",
      statsFarmers: "10+ प्रमुख फसलें",
      statsCrops: "35+ फसल रोग",
      statsAccuracy: "त्वरित परिणाम",
    },
    howItWorks: {
      tag: "सरल व तीव्र",
      title: "क्रॉपकेयर AI कैसे कार्य करता है",
      subtitle: "पत्ते की फोटो से सटीक उपचार तक चार आसान चरण",
      step1Title: "1. फोटो खींचें या अपलोड करें",
      step1Desc: "प्रभावित पत्ते की अच्छी रोशनी में अपने मोबाइल से साफ फोटो खींचें या गैलरी से चुनें।",
      step2Title: "2. तुरंत AI विश्लेषण",
      step2Desc: "हमारा डीप लर्निंग मॉडल धब्बे, फंगस और रंग परिवर्तन की हजारों सत्यापित नमूनों से तुलना करता है।",
      step3Title: "3. सटीक निदान प्राप्त करें",
      step3Desc: "रोग का नाम, विश्वसनीयता प्रतिशत और संभावित विकल्प हिंदी, मराठी या अंग्रेजी में देखें।",
      step4Title: "4. व्यावहारिक IPM उपचार",
      step4Desc: "भारतीय कृषि अनुकूल जैविक, सांस्कृतिक और सीआईबीआरसी अनुमोदित सुरक्षित रासायनिक समाधान अपनाएँ।",
    },
    features: {
      tag: "किसानों के लिए समर्पित",
      title: "खेतों के लिए विशेष स्मार्ट सुविधाएं",
      f1Title: "सटीक रोग पहचान",
      f1Desc: "35 से अधिक प्रमुख फसल रोगों की तुरंत पहचान और विश्वसनीयता स्कोर।",
      f2Title: "एकीकृत कीट प्रबंधन (IPM)",
      f2Desc: "नीम तेल और ट्राइकोडर्मा जैसे जैविक उपायों को प्राथमिकता, सुरक्षित रासायनिक मार्गदर्शन।",
      f3Title: "लाइव मौसम व फंगस चेतावनी",
      f3Desc: "आर्द्रता और वर्षा का पूर्वानुमान देख कर झुलसा और फफूंद संक्रमण से पहले रोकथाम।",
      f4Title: "बहुभाषी व सुलभ",
      f4Desc: "हिंदी, मराठी और अंग्रेजी में उपलब्ध, बिना इंटरनेट भी पिछला स्कैन देखने की सुविधा।",
    },
    crops: {
      tag: "समर्थित फसलें",
      title: "भारत की प्रमुख खाद्यान्न व नकदी फसलें",
      subtitle: "राज्यों की कृषि विविधता के अनुसार व्यापक रोग पहचान सुविधा।",
    },
    detect: {
      title: "फसल रोग स्कैनर",
      subtitle: "रोगग्रस्त या स्वस्थ पत्ती की तस्वीर अपलोड करें और तुरंत स्वास्थ्य रिपोर्ट पाएँ।",
      uploadAreaTitle: "पत्ती की तस्वीर यहाँ खींचें या चुनें",
      uploadAreaSubtitle: "JPG, PNG, WEBP (अधिकतम 10MB तक)",
      browseFiles: "फाइल चुनें",
      takePhoto: "कैमरा खोलें",
      sampleImagesPrompt: "क्या आपके पास पत्ती की फोटो नहीं है? इन परीक्षण नमूनों को आजमाएं:",
      trySample: "परीक्षण नमूना देखें",
      analyzingTitle: "पत्ती का विश्लेषण हो रहा है...",
      analyzingSubtitle: "धब्बों, फफूंद बनावट और लक्षणों की जांच की जा रही है...",
      analyzeBtn: "पत्ती का विश्लेषण करें",
      removeBtn: "हटाएं",
      retestBtn: "दूसरी पत्ती स्कैन करें",
      cameraModalTitle: "लाइव कैमरा फोटो",
      captureBtn: "फोटो लें",
      switchCamBtn: "कैमरा बदलें",
      closeCamBtn: "बंद करें",
      fileLimitWarning: "कृपया 10MB से कम आकार की वैध तस्वीर अपलोड करें।",
    },
    result: {
      detectionSummary: "जांच परिणाम सारांश",
      detectedCrop: "पहचानी गई फसल",
      detectedDisease: "संभावित रोग",
      confidence: "सटीकता / विश्वास स्कोर",
      scientificName: "रोगजनक / वैज्ञानिक नाम",
      pathogenType: "प्रकार",
      severityLabel: "गंभीरता स्तर",
      unclearWarningTitle: "कम स्पष्ट / धुंधली तस्वीर",
      unclearWarningDesc: "रोशनी की कमी या पत्ते के कोण के कारण परिणाम में अनिश्चितता हो सकती है। कृपया दिन की रोशनी में दोबारा नजदीक से फोटो लें।",
      tabMeaning: "लक्षण व कारण",
      tabTreatment: "उपचार योजना (IPM)",
      tabPrevention: "बचाव व सावधानियां",
      tabExpert: "विशेषज्ञ मार्गदर्शन",
      tabAlternatives: "अन्य संभावनाएं",
      symptomsTitle: "पत्ते पर दिखे लक्षण",
      causesTitle: "पर्यावरणीय व जैविक कारण",
      culturalTreatment: "1. कृषि संबंधी व खेत स्वच्छता",
      organicTreatment: "2. जैविक व प्राकृतिक उपाय (पर्यावरण-हितैषी)",
      chemicalTreatment: "3. अनुशंसित रासायनिक उपचार (सावधानीपूर्वक उपयोग)",
      chemicalNotice: "छिड़काव करते समय मास्क व दस्ताने पहनें। सरकारी CIBRC अनुमोदित मात्रा का ही प्रयोग करें।",
      preventionTitle: "भविष्य में इस रोग से बचाव के तरीके",
      expertTitle: "स्थानीय कृषि विज्ञान केंद्र (KVK)",
      kisanCallCenter: "राष्ट्रीय किसान कॉल सेंटर (टोल फ्री)",
      kisanCallCenterDesc: "सीधे कृषि विशेषज्ञ से अपनी भाषा में बात करने के लिए 1800-180-1551 (सुबह 6 से रात 10 बजे) डायल करें।",
      printReport: "रिपोर्ट प्रिंट / PDF डाउनलोड",
      saveToHistory: "इतिहास में सहेजें",
      savedToHistory: "इतिहास में सुरक्षित",
    },
    weather: {
      title: "कृषि मौसम व छिड़काव परामर्श",
      subtitle: "सटीक मौसम पूर्वानुमान ताकि दवा का छिड़काव व्यर्थ न हो और फफूंद से पहले बचाव हो सके।",
      searchPlaceholder: "शहर या जिले का नाम खोजें (उदा. पुणे, लुधियाना, नासिक, वाराणसी)...",
      searchBtn: "मौसम देखें",
      useLocationBtn: "मेरा स्थान उपयोग करें",
      currentWeather: "वर्तमान खेत मौसम",
      humidity: "सापेक्ष आर्द्रता",
      wind: "हवा की गति",
      rainfall: "वर्षा संभावना",
      feelsLike: "अनुभूत तापमान",
      agriAdvisoryTitle: "छिड़काव व बुवाई सलाह",
      fungalRiskTitle: "फंगल / फफूंद संक्रमण जोखिम",
      forecastTitle: "5-दिवसीय कृषि पूर्वानुमान",
      disclaimer: "मौसम की जानकारी केवल योजना में सहायक है। बारिश के बाद हमेशा खेत में जाकर फसल का व्यक्तिगत निरीक्षण करें।",
    },
    guide: {
      title: "फसल रोग ज्ञानकोष",
      subtitle: "प्रमुख भारतीय फसलों के सामान्य रोगों, लक्षणों और प्रमाणित उपचारों का संपूर्ण संग्रह।",
      searchPlaceholder: "फसल (जैसे टमाटर, धान) या रोग के नाम से खोजें...",
      allCrops: "सभी फसलें",
      categoryAll: "सभी श्रेणियां",
      diseasesCount: "दर्ज रोग",
      symptoms: "प्रमुख लक्षण",
      organicCure: "जैविक नियंत्रण",
      chemicalCure: "रासायनिक उपाय",
      prevention: "बचाव के तरीके",
      learnMore: "विस्तृत विवरण देखें",
    },
    history: {
      title: "मेरे पिछले स्कैन",
      subtitle: "आपके द्वारा जांची गई फसलों का सुरक्षित विवरण।",
      emptyTitle: "अभी कोई स्कैन नहीं है",
      emptyDesc: "जब आप किसी पत्ते की जांच करेंगे, तो परिणाम यहाँ स्वतः सुरक्षित हो जाएंगे।",
      scanNow: "पहला स्कैन शुरू करें",
      clearAll: "सारा इतिहास मिटाएं",
      deleteItem: "हटाएं",
      cloudStatusLocal: "डिवाइस पर सुरक्षित (निजी)",
      cloudStatusSynced: "सुपाबेस क्लाउड पर सिंक",
      confirmClear: "क्या आप सभी पिछले स्कैन रिकॉर्ड हटाना चाहते हैं?",
    },
    contact: {
      title: "किसान सहायता व हेल्पलाइन",
      subtitle: "कृषि वैज्ञानिकों से संपर्क करें या क्रॉपकेयर AI के संबंध में सहायता प्राप्त करें।",
      nameLabel: "किसान का नाम",
      contactLabel: "मोबाइल नंबर या ईमेल",
      stateLabel: "राज्य",
      districtLabel: "जिला / तहसील",
      cropLabel: "संबंधित फसल",
      queryTypeLabel: "समस्या का प्रकार",
      messageLabel: "अपनी समस्या या सुझाव विस्तार से लिखें",
      submitBtn: "अनुरोध भेजें",
      submittingBtn: "भेजा जा रहा है...",
      successTitle: "अनुरोध प्राप्त हुआ!",
      successDesc: "आपकी जानकारी दर्ज कर ली गई है। गंभीर रोग प्रकोप के लिए तुरंत किसान कॉल सेंटर पर संपर्क करें।",
      emergencyCardTitle: "सरकारी किसान हेल्पलाइन",
      emergencyNumber: "1800-180-1551",
      emergencySubtitle: "सभी भारतीय राज्यों में भारतीय कृषि अनुसंधान परिषद (ICAR) द्वारा निःशुल्क सलाह।",
    },
    about: {
      title: "क्रॉपकेयर AI के बारे में",
      subtitle: "आर्टिफिशियल इंटेलिजेंस को भारतीय किसानों के खेतों तक पहुँचाने का प्रयास।",
      missionTitle: "हमारा उद्देश्य: स्वस्थ फसलें, समृद्ध किसान",
      missionDesc: "क्रॉपकेयर AI छोटे और सीमांत किसानों को तुरंत वैज्ञानिक कृषि परामर्श प्रदान करता है ताकि समय रहते रोगों को नियंत्रित किया जा सके।",
      howAiWorksTitle: "AI मॉडल कैसे काम करता है",
      howAiWorksDesc: "हमारा कंप्यूटर विज़न मॉडल लाखों पत्तियों के धब्बों, फफूंद जाल और क्लोरोसिस लक्षणों का विश्लेषण करके रोग का निर्धारण करता है।",
      limitationsTitle: "जिम्मेदार उपयोग व सीमाएं",
      limitationsDesc: "यह प्रणाली किसानों के निर्णय में सहायता के लिए है। बड़े नुकसान की स्थिति में अपने नजदीकी कृषि विज्ञान केंद्र (KVK) से संपर्क करें।",
    },
    disclaimer: {
      text: "सूचना: क्रॉपकेयर AI मशीन लर्निंग पर आधारित अनुमान प्रदान करता है। कीटनाशक की मात्रा के लिए आधिकारिक सरकारी दिशा-निर्देशों का पालन करें और स्थानीय कृषि अधिकारी से परामर्श लें।",
      officialKisanLink: "किसान सुविधा पोर्टल",
    },
    footer: {
      desc: "भारतीय कृषि को सुलभ, सटीक और सशक्त AI तकनीक से समृद्ध बनाना।",
      quickLinks: "महत्वपूर्ण लिंक",
      helpline: "राष्ट्रीय हेल्पलाइन",
      privacy: "गोपनीयता नीति",
      terms: "नियम व शर्तें",
      copyright: "क्रॉपकेयर AI. भारतीय किसानों के लिए निर्मित।",
    },
  },

  mr: {
    appName: "क्रॉपकेअर AI",
    tagline: "स्मार्ट शेती, निरोगी पिके",
    nav: {
      home: "मुख्य पान",
      detect: "रोग ओळखा",
      guide: "पीक माहिती ग्रंथालय",
      weather: "हवामान सल्ला",
      history: "माझे स्कॅन",
      about: "AI बद्दल",
      contact: "मदत व हेल्पलाइन",
    },
    hero: {
      badge: "🌾 महाराष्ट्रातील व देशातील शेतकऱ्यांसाठी AI रक्षक",
      title: "आपली पिके सुरक्षित ठेवा",
      highlight: "अचूक AI रोग निदानाने",
      subtitle: "भात, गहू, टोमॅटो, कापूस, मिरची, द्राक्षे, ऊस इत्यादी पिकांच्या पानांवरील रोगांची झटपट ओळख. जमिनीनुसार सेंद्रिय व रासायनिक खात्रीशीर उपाय.",
      ctaPrimary: "आता पानाचा रोग तपासा",
      ctaSecondary: "पीक रोग माहिती पहा",
      statsFarmers: "10+ प्रमुख पिके",
      statsCrops: "35+ वनस्पती रोग",
      statsAccuracy: "त्वरित निकाल",
    },
    howItWorks: {
      tag: "सोपे व वेगवान",
      title: "क्रॉपकेअर AI कसे कार्य करते",
      subtitle: "पानाच्या फोटोवरून योग्य उपचारांपर्यंत चार सोप्या पायऱ्या",
      step1Title: "1. फोटो काढा किंवा अपलोड करा",
      step1Desc: "रोगट पाण्याचा चांगल्या सूर्यप्रकाशात मोबाईल कॅमेऱ्याने स्पष्ट फोटो काढा किंवा गॅलरीतून निवडा.",
      step2Title: "2. तत्काळ AI विश्लेषण",
      step2Desc: "आमचे मॉडेल पानावरील ठिपके, बुरशी व रंगबदलांची हजारो नमुन्यांशी क्षणार्धात तुलना करते.",
      step3Title: "3. अचूक रोग निदान",
      step3Desc: "रोगाचे नाव, अचूकता टक्केवारी आणि इतर संभाव्य आजार मराठी, हिंदी किंवा इंग्रजीत समजून घ्या.",
      step4Title: "4. एकात्मिक IPM उपचार",
      step4Desc: "सेंद्रिय कीडनाशके (निंबोळी अर्क, ट्रायकोडर्मा) आणि अधिकृत रासायनिक औषधांची योग्य मात्रा वापरा.",
    },
    features: {
      tag: "शेतकऱ्यांसाठी खास",
      title: "शेतात उपयुक्त ठरणारी आधुनिक वैशिष्ट्ये",
      f1Title: "अचूक रोग निदान",
      f1Desc: "35 पेक्षा जास्त पिकांच्या रोगांची खात्रीशीर तपासणी व टक्केवारी निकाल.",
      f2Title: "एकात्मिक कीड व्यवस्थापन (IPM)",
      f2Desc: "सेंद्रिय व जैविक उपायांना प्राधान्य, सोबत सुरक्षित रासायनिक फवारणी मार्गदर्शन.",
      f3Title: "हवामान व बुरशी अलर्ट",
      f3Desc: "हवेतील आर्द्रता आणि पावसाचा अंदाज घेऊन करपा व भुरी रोगाचा धोका अगोदरच ओळखा.",
      f4Title: "मराठी भाषेत संपूर्ण माहिती",
      f4Desc: "मराठी, हिंदी व इंग्रजी भाषेत सहज वापर, ऑफलाइन स्कॅन इतिहास पाहण्याची सोय.",
    },
    crops: {
      tag: "समर्थित पिके",
      title: "महाराष्ट्रातील व भारतातील प्रमुख पिके",
      subtitle: "कापूस, सोयाबीन, ऊस, द्राक्षे, कांदा, टोमॅटो, भात यांसारख्या पिकांचे संपूर्ण संरक्षण.",
    },
    detect: {
      title: "पीक रोग स्कॅनर",
      subtitle: "बाधित किंवा चांगल्या पाण्याचा फोटो टाका आणि क्षणात AI आरोग्य अहवाल मिळवा.",
      uploadAreaTitle: "पानाचा फोटो येथे टाका किंवा निवडा",
      uploadAreaSubtitle: "JPG, PNG, WEBP (जास्तीत जास्त 10MB)",
      browseFiles: "फाइल निवडा",
      takePhoto: "कॅमेरा उघडा",
      sampleImagesPrompt: "तुमच्याकडे पाण्याचे चित्र नाही का? हे नमुने तपासा:",
      trySample: "नमुना पान पहा",
      analyzingTitle: "पानाचे विश्लेषण सुरू आहे...",
      analyzingSubtitle: "ठिपके, बुरशीचे आवरण आणि लक्षणांची पडताळणी होत आहे...",
      analyzeBtn: "पानाचे विश्लेषण करा",
      removeBtn: "काढून टाका",
      retestBtn: "दुसरे पान स्कॅन करा",
      cameraModalTitle: "थेट कॅमेऱ्याने फोटो काढा",
      captureBtn: "फोटो काढा",
      switchCamBtn: "कॅमेरा बदला",
      closeCamBtn: "बंद करा",
      fileLimitWarning: "कृपया 10MB पेक्षा कमी आकाराची वैध प्रतिमा निवडा.",
    },
    result: {
      detectionSummary: "निदान अहवाल सारांश",
      detectedCrop: "ओळखलेले पीक",
      detectedDisease: "संभाव्य रोग",
      confidence: "विश्वासार्हता टक्केवारी",
      scientificName: "रोगकारक / शास्त्रीय नाव",
      pathogenType: "प्रकार",
      severityLabel: "तीव्रता पातळी",
      unclearWarningTitle: "अस्पष्ट किंवा अंधुक फोटो",
      unclearWarningDesc: "कमी प्रकाश किंवा अस्पष्ट पाणामुळे खात्रीशीर निदान करणे कठीण आहे. कृपया चांगल्या प्रकाशात जवळून दुसरा फोटो घ्या.",
      tabMeaning: "लक्षणे व कारणे",
      tabTreatment: "उपचार योजना (IPM)",
      tabPrevention: "प्रतिबंधात्मक काळजी",
      tabExpert: "तज्ज्ञ सल्ला",
      tabAlternatives: "इतर शक्यता",
      symptomsTitle: "पानावर दिसलेली मुख्य लक्षणे",
      causesTitle: "हवामान व जैविक कारणे",
      culturalTreatment: "1. मशागत व शेताची स्वच्छता",
      organicTreatment: "2. सेंद्रिय व जैविक उपचार (पर्यावरणपूरक)",
      chemicalTreatment: "3. रासायनिक फवारणी शिफारसी (योग्य प्रमाणात)",
      chemicalNotice: "फवारणी करताना सुरक्षा साधने वापरा. CIBRC मान्यताप्राप्त औषधांचाच वापर करा.",
      preventionTitle: "पुन्हा हा रोग होऊ नये म्हणून काळजी",
      expertTitle: "स्थानिक कृषी विज्ञान केंद्र (KVK)",
      kisanCallCenter: "राष्ट्रीय किसान कॉल सेंटर (टोल फ्री)",
      kisanCallCenterDesc: "मराठीत थेट कृषी अधिकाऱ्यांशी बोलण्यासाठी 1800-180-1551 (सकाळी 6 ते रात्री 10) या क्रमांकावर कॉल करा.",
      printReport: "अहवाल प्रिंट / PDF जतन करा",
      saveToHistory: "इतिहासात जतन करा",
      savedToHistory: "इतिहासात जतन झाले",
    },
    weather: {
      title: "शेती हवामान व फवारणी सल्ला",
      subtitle: "अचूक हवामानाचा अंदाज घेऊन फवारणीचे योग्य नियोजन करा आणि बुरशीजन्य रोगांपासून सावध राहा.",
      searchPlaceholder: "शहर किंवा जिल्ह्याचे नाव शोधा (उदा. नाशिक, पुणे, नागपूर, कोल्हापूर)...",
      searchBtn: "हवामान पहा",
      useLocationBtn: "माझे जीपीएस स्थान वापरा",
      currentWeather: "सध्याचे शेतातील हवामान",
      humidity: "हवेतील आर्द्रता",
      wind: "वाऱ्याचा वेग",
      rainfall: "पावसाची शक्यता",
      feelsLike: "जाणवणारे तापमान",
      agriAdvisoryTitle: "फवारणी व पेरणी सल्ला",
      fungalRiskTitle: "बुरशी व करपा रोगाचा धोका",
      forecastTitle: "5-दिवसीय शेती अंदाज",
      disclaimer: "हवामानाची माहिती नियोजनासाठी आहे. पाऊस किंवा धुके पडल्यावर स्वतः शेतात जाऊन पिकाची पाहणी करा.",
    },
    guide: {
      title: "पीक रोग माहिती ज्ञानकोष",
      subtitle: "महाराष्ट्रातील प्रमुख पिकांचे रोग, त्यांची लक्षणे व जैविक आणि रासायनिक नियंत्रणाचे मार्गदर्शन.",
      searchPlaceholder: "पीक (उदा. कापूस, द्राक्षे, टोमॅटो) किंवा रोगाचे नाव शोधा...",
      allCrops: "सर्व पिके",
      categoryAll: "सर्व प्रकार",
      diseasesCount: "नोंदवलेले रोग",
      symptoms: "मुख्य लक्षणे",
      organicCure: "सेंद्रिय नियंत्रण",
      chemicalCure: "रासायनिक उपाय",
      prevention: "प्रतिबंध",
      learnMore: "सविस्तर माहिती पहा",
    },
    history: {
      title: "माझे पूर्वीचे स्कॅन",
      subtitle: "तुम्ही तपासलेल्या पिकांचे अहवाल तुमच्या फोनवर सुरक्षित आहेत.",
      emptyTitle: "अद्याप कोणताही स्कॅन नाही",
      emptyDesc: "जेव्हा तुम्ही एखाद्या रोगाचे पान स्कॅन कराल, तेव्हा त्याचा निकाल येथे दिसेल.",
      scanNow: "पहिले पान तपासा",
      clearAll: "सर्व इतिहास पुसा",
      deleteItem: "हटवा",
      cloudStatusLocal: "डिव्हाइसवर सुरक्षित (स्थानिक)",
      cloudStatusSynced: "सुपाबेस क्लाउडवर सिंक",
      confirmClear: "तुम्हाला खात्री आहे का की सर्व जुने स्कॅन काढून टाकायचे आहेत?",
    },
    contact: {
      title: "शेतकरी मदत व संपर्क",
      subtitle: "कृषी तज्ज्ञांशी संपर्क साधा किंवा ॲप्लिकेशनबद्दल काही शंका असल्यास कळवा.",
      nameLabel: "शेतकऱ्याचे नाव",
      contactLabel: "मोबाईल नंबर किंवा ईमेल",
      stateLabel: "राज्य",
      districtLabel: "जिल्हा / तालुका",
      cropLabel: "संबंधित पीक",
      queryTypeLabel: "समस्येचा प्रकार",
      messageLabel: "आपली समस्या किंवा अभिप्राय येथे लिहा",
      submitBtn: "माहिती पाठवा",
      submittingBtn: "पाठवत आहे...",
      successTitle: "माहिती यशस्वीपणे पाठवली!",
      successDesc: "आपली नोंद घेतली गेली आहे. तातडीच्या मदतीसाठी किसान कॉल सेंटरला थेट संपर्क करा.",
      emergencyCardTitle: "शासकीय शेतकरी हेल्पलाइन",
      emergencyNumber: "1800-180-1551",
      emergencySubtitle: "ICAR आणि कृषी विद्यापीठांद्वारे मराठीत विनामूल्य कृषी सल्ला उपलब्ध.",
    },
    about: {
      title: "क्रॉपकेअर AI बद्दल",
      subtitle: "आर्टिफिशियल इंटेलिजन्सचा वापर करून शेतकऱ्यांना आत्मनिर्भर बनवण्याचा संकल्प.",
      missionTitle: "आमचे ध्येय: निरोगी पिके, समृद्ध शेतकरी",
      missionDesc: "क्रॉपकेअर AI हे लहान व मोठ्या शेतकऱ्यांना शेतावरच तज्ज्ञांसारखे अचूक निदान मिळावे यासाठी विकसित केले आहे.",
      howAiWorksTitle: "AI मॉडेल कसे काम करते",
      howAiWorksDesc: "डीप लर्निंग आणि कॉम्प्युटर व्हिजनच्या साहाय्याने पानांवरील ठिपके, बुरशीचे थर आणि विकृती तपासून रोगाचा अचूक शोध घेतला जातो.",
      limitationsTitle: "जबाबदार वापर व मर्यादा",
      limitationsDesc: "हे मॉडेल शेतकऱ्यांना त्वरित दिशा देण्यासाठी आहे. मोठ्या प्रमाणावर प्रादुर्भाव झाल्यास जवळच्या कृषी विज्ञान केंद्रास (KVK) भेट द्या.",
    },
    disclaimer: {
      text: "सूचना: क्रॉपकेअर AI संगणकीय निष्कर्षांवर आधारित सल्ला देते. कीटकनाशकांच्या वापरासाठी नेहमी अधिकृत कृषी मार्गदर्शक तत्त्वांचे पालन करा.",
      officialKisanLink: "किसान सुविधा पोर्टल",
    },
    footer: {
      desc: "भारतीय शेतीला सोप्या, अचूक आणि मोफत AI तंत्रज्ञानाने समृद्ध बनवणे.",
      quickLinks: "महत्त्वाचे दुवे",
      helpline: "राष्ट्रीय हेल्पलाइन",
      privacy: "गोपनीयता धोरण",
      terms: "नियम व अटी",
      copyright: "क्रॉपकेअर AI. भारतीय शेतकऱ्यांसाठी समर्पित.",
    },
  },
};
