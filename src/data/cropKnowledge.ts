import { CropGuideItem } from '../types';

export const cropKnowledgeBase: CropGuideItem[] = [
  {
    id: 'tomato',
    crop: 'Tomato',
    cropHindi: 'टमाटर',
    cropMarathi: 'टोमॅटो',
    scientificName: 'Solanum lycopersicum',
    category: 'Vegetable / Solanaceous',
    idealSeason: 'Kharif & Rabi (Year-round with drip)',
    soilType: 'Well-drained red loam, pH 6.0 - 7.0',
    description: 'One of the most widely cultivated commercial vegetable crops in India, prone to foliar blights, bacterial wilt, and leaf curl viruses.',
    imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Early Blight',
        localNameHindi: 'अगेती झुलसा',
        localNameMarathi: 'लवकर येणारा करपा',
        scientificName: 'Alternaria solani',
        pathogenType: 'fungal',
        symptoms: [
          'Concentric dark brown rings resembling a target board on older leaves',
          'Yellow halo surrounding necrotic spots',
          'Lower leaves drop prematurely, exposing fruits to sunscald'
        ],
        causes: [
          'High humidity (>80%) combined with temperatures of 24°C–29°C',
          'Prolonged leaf wetness from overhead irrigation or morning dew'
        ],
        organicTreatment: [
          'Spray 5% Neem Seed Kernel Extract (NSKE) or Neem oil at 5ml/liter',
          'Foliar application of bio-fungicide Trichoderma harzianum or Bacillus subtilis (5g/L)',
          'Mulch with clean paddy straw to prevent fungal spores from splashing from soil'
        ],
        chemicalTreatment: [
          'Spray Mancozeb 75% WP @ 2.5 g/liter of water at first symptom appearance',
          'Alternative: Chlorothalonil 75% WP @ 2 g/liter or Azoxystrobin 23% SC @ 1 ml/liter (Observe 7-day waiting period)'
        ],
        prevention: [
          'Rotate with non-solanaceous crops (avoid planting after potato or chilli)',
          'Adopt drip irrigation instead of sprinkler/furrow splashing',
          'Prune lower leaves up to 30 cm from ground level for air circulation'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Late Blight',
        localNameHindi: 'पछेती झुलसा',
        localNameMarathi: 'उशिरा येणारा करपा',
        scientificName: 'Phytophthora infestans',
        pathogenType: 'fungal',
        symptoms: [
          'Water-soaked dark lesions on leaf tips and margins spreading rapidly',
          'White fluffy mildew growth on leaf undersides in humid mornings',
          'Stems develop greasy purplish-brown lesions, leading to plant collapse'
        ],
        causes: [
          'Cool, cloudy weather with intermittent rain and temperatures 15°C–20°C',
          'Relative humidity exceeding 90% for consecutive days'
        ],
        organicTreatment: [
          'Spray copper-based organic formulations (Bordeaux mixture 1%)',
          'Destroy and deeply bury severely infected foliage away from the field',
          'Soil drenching with Pseudomonas fluorescens (10 g/liter)'
        ],
        chemicalTreatment: [
          'Metalaxyl 8% + Mancozeb 64% WP (Ridomil MZ) @ 2.5 g/liter',
          'Cymoxanil 8% + Mancozeb 64% WP @ 2 g/liter (Strict adherence to 10-day pre-harvest interval)'
        ],
        prevention: [
          'Use certified blight-tolerant hybrids (e.g. Arka Rakshak, Kashi Abhiman)',
          'Ensure strict field drainage to eliminate standing puddles',
          'Avoid handling wet plants during early morning hours'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Tomato Leaf Curl Virus (ToLCV)',
        localNameHindi: 'पत्ती मरोड़ रोग (पर्ण कुंचन)',
        localNameMarathi: 'टोमॅटोचा चुरडा-मुरडा',
        scientificName: 'Begomovirus (Vectored by Whitefly)',
        pathogenType: 'viral',
        symptoms: [
          'Severe upward curling, cupping, and twisting of young leaflets',
          'Pronounced interveinal chlorosis (yellowing) with stunted bushy growth',
          'Flower bud shedding leading to zero fruit formation'
        ],
        causes: [
          'Vectored by Bemisia tabaci (Silverleaf Whitefly)',
          'Hot, dry weather favorable for whitefly population explosion'
        ],
        organicTreatment: [
          'Install 15-20 yellow sticky traps per acre at crop canopy height',
          'Foliar spray with Verticillium lecanii or Beauveria bassiana (5g/L)',
          'Neem oil 10,000 ppm @ 3ml/liter to deter whitefly nymph feeding'
        ],
        chemicalTreatment: [
          'Target whitefly vector: Acetamiprid 20% SP @ 0.5 g/L or Thiamethoxam 25% WG @ 0.3 g/L',
          'Alternate with Spiromesifen 22.9% SC @ 1 ml/liter to manage resistance'
        ],
        prevention: [
          'Erect nylon insect-proof net nurseries (40-mesh size) for seedling production',
          'Grow 3 border rows of tall maize or sorghum as a physical barrier against whitefly drift',
          'Uproot and burn virus-infected plants immediately to prevent vector acquisition'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'potato',
    crop: 'Potato',
    cropHindi: 'आलू',
    cropMarathi: 'बटाटा',
    scientificName: 'Solanum tuberosum',
    category: 'Tuber / Solanaceous',
    idealSeason: 'Rabi (Oct–Feb in Indo-Gangetic plains)',
    soilType: 'Friable sandy loam rich in organic matter',
    description: 'Major food security crop cultivated across Uttar Pradesh, West Bengal, Bihar, and Maharashtra. Highly vulnerable to late blight and bacterial wilt.',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Late Blight of Potato',
        localNameHindi: 'आलू का पछेती झुलसा',
        localNameMarathi: 'बटाट्यावरील उशिरा येणारा करपा',
        scientificName: 'Phytophthora infestans',
        pathogenType: 'fungal',
        symptoms: [
          'Rapidly spreading dark brown irregular lesions on leaf edges',
          'White downy growth on underside of leaves in early morning mist',
          'Tubers rot with copper-brown dry sunken dry rot beneath skin'
        ],
        causes: [
          'Prolonged fog, relative humidity >90%, temperature 12°C–18°C',
          'Continuous wet foliage for >8 hours'
        ],
        organicTreatment: [
          'Prophylactic spray of Bordeaux Mixture (1%)',
          'Trichoderma viride soil application enriched in compost (5kg/acre)',
          'Immediate haulm cutting (dehaulming) 10 days before harvest to prevent tuber contamination'
        ],
        chemicalTreatment: [
          'Preventive: Mancozeb 75% WP @ 2.5 g/L before onset of cloudy foggy weather',
          'Curative: Dimethomorph 50% WP @ 1 g/L + Mancozeb @ 2 g/L'
        ],
        prevention: [
          'Plant certified disease-free seed tubers from verified sources (CPRI)',
          'High earthing up to bury tubers deep away from washing spores',
          'Avoid over-irrigation during cold spells'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Potato Early Blight',
        localNameHindi: 'आलू का अगेती झुलसा',
        localNameMarathi: 'बटाट्यावरील अगेती करपा',
        scientificName: 'Alternaria solani',
        pathogenType: 'fungal',
        symptoms: [
          'Brown angular spots with distinct concentric rings on mature foliage',
          'Defoliation starts from bottom canopy moving upwards',
          'Reduced tuber size due to loss of photosynthetic leaf area'
        ],
        causes: [
          'Alternating wet and dry weather conditions with warm days (25°C)',
          'Nutrient stress (especially nitrogen and potassium deficiency)'
        ],
        organicTreatment: [
          'Foliar spray with Cow urine + Neem oil decoction (5%)',
          'Bio-agent Bacillus subtilis @ 5 ml/L'
        ],
        chemicalTreatment: [
          'Propineb 70% WP @ 2.5 g/L or Chlorothalonil 75% WP @ 2 g/L'
        ],
        prevention: [
          'Ensure balanced N-P-K nutrition with sufficient potassium',
          'Avoid overhead sprinkler irrigation late in the afternoon'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'rice',
    crop: 'Rice / Paddy',
    cropHindi: 'चावल / धान',
    cropMarathi: 'भात / तांदूळ',
    scientificName: 'Oryza sativa',
    category: 'Cereal / Kharif Staple',
    idealSeason: 'Kharif (June–Nov) & Boro (Winter)',
    soilType: 'Heavy clay or clayey loam with good water retention',
    description: 'The lifeline staple of Indian agriculture, cultivated over 45 million hectares. Highly susceptible to blast, sheath blight, and bacterial leaf blight.',
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Rice Leaf Blast',
        localNameHindi: 'धान का झोंका रोग (ब्लास्ट)',
        localNameMarathi: 'भातावरील कडा करपा (ब्लास्ट)',
        scientificName: 'Magnaporthe oryzae (Pyricularia oryzae)',
        pathogenType: 'fungal',
        symptoms: [
          'Spindle-shaped or diamond-shaped lesions with gray-white centers and dark brown margins',
          'Lesions enlarge and coalesce, causing entire leaf to dry up and die',
          'Neck blast phase turns panicle base black, leading to empty chaffy grains'
        ],
        causes: [
          'Excessive chemical nitrogen fertilizer application',
          'Cloudy overcast skies, high humidity (>90%) with cool night temperatures (18°C–22°C)'
        ],
        organicTreatment: [
          'Spray 10% cow dung slurry supernatant + 5% NSKE',
          'Pseudomonas fluorescens seed treatment (10 g/kg) and foliar spray @ 2.5 g/L',
          'Incorporate silicon amendments into soil to strengthen leaf epidermal cell walls'
        ],
        chemicalTreatment: [
          'Tricyclazole 75% WP @ 0.6 g/liter at initial leaf symptom or boot-leaf stage',
          'Alternate: Isoprothiolane 40% EC @ 1.5 ml/L or Kasugamycin 3% SL @ 2.5 ml/L'
        ],
        prevention: [
          'Avoid split overdose of urea; apply nitrogen in 3 balanced splits with zinc',
          'Do not let standing water dry completely into cracked soil during vegetative phase',
          'Select blast-resistant varieties like IR64, Swarna Sub1, or Pusa Basmati 1637'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Bacterial Leaf Blight (BLB)',
        localNameHindi: 'जीवाणु पत्ती झुलसा',
        localNameMarathi: 'जिवाणूजन्य पानांचा करपा',
        scientificName: 'Xanthomonas oryzae pv. oryzae',
        pathogenType: 'bacterial',
        symptoms: [
          'Water-soaked to yellowish-white wavy lesions along leaf margins moving down',
          'Milky bacterial ooze droplets visible on fresh cuts in early morning',
          'Leaves turn straw-yellow, curl inward, and wither ("Kresek" wilt phase in young tillers)'
        ],
        causes: [
          'Cyclonic storms, heavy rains with strong winds injuring leaf tips',
          'High ambient temperature (25°C–34°C) with water stagnation'
        ],
        organicTreatment: [
          'Drain excess floodwater from affected fields for 3-4 days',
          'Spray fresh cow dung extract (20%) mixed with turmeric powder',
          'Apply bio-agent Pseudomonas fluorescens @ 5 g/L'
        ],
        chemicalTreatment: [
          'Copper Hydroxide 53.8% DF @ 2 g/L or Copper Oxychloride 50% WP @ 2.5 g/L',
          'Streptocycline (agricultural antibiotic) @ 1 g in 10 liters of water (strictly as per state agri advisory)'
        ],
        prevention: [
          'Avoid clip pruning of seedling tips during transplanting',
          'Discontinue nitrogen application immediately when symptoms are detected; top-dress potash',
          'Use certified seed treated with hot water (52°C–54°C for 10 min)'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'cotton',
    crop: 'Cotton',
    cropHindi: 'कपास',
    cropMarathi: 'कापूस',
    scientificName: 'Gossypium hirsutum',
    category: 'Cash Crop / Fibre',
    idealSeason: 'Kharif (May–Dec)',
    soilType: 'Deep black cotton soil (Regur) with high moisture capacity',
    description: 'White gold of central and western India (Maharashtra, Gujarat, Telangana). Highly impacted by bacterial blight, fungal root rot, and sucking pests.',
    imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Bacterial Blight / Angular Leaf Spot',
        localNameHindi: 'कपास का जीवाणु अंगमारी / कोणीय पत्ती धब्बा',
        localNameMarathi: 'कापसावरील जिवाणूजन्य कोनीय करपा',
        scientificName: 'Xanthomonas citri pv. malvacearum',
        pathogenType: 'bacterial',
        symptoms: [
          'Small, angular, water-soaked translucent spots restricted by leaf veins',
          'Spots turn reddish-brown to black on upper surface',
          'Black-arm stage: cankers encircle branches causing snapping under boll weight'
        ],
        causes: [
          'Warm temperatures (30°C–35°C) combined with intermittent rains',
          'Pathogen carries over through contaminated fuzzy cotton seeds'
        ],
        organicTreatment: [
          'Acid delinting of cotton seed before sowing (100ml H2SO4 per kg seed)',
          'Foliar spray of 5% Neem seed oil decoction',
          'Trichoderma harzianum soil incorporation'
        ],
        chemicalTreatment: [
          'Copper Oxychloride 50% WP @ 2.5 g/L + Streptocycline 100 ppm (1g in 10 liters water)',
          'Repeat at 15-day interval if rains persist'
        ],
        prevention: [
          'Burn cotton stubbles after harvest; avoid ratoon cropping',
          'Adopt wide inter-row spacing (90x60 cm or 120x45 cm) for sunlight penetration'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Cotton Leaf Curl Virus (CLCuV)',
        localNameHindi: 'कपास का पत्ती मरोड़ रोग',
        localNameMarathi: 'कापसाचा चुरडा-मुरडा (लीफ कर्ल)',
        scientificName: 'Cotton leaf curl virus (Whitefly transmitted)',
        pathogenType: 'viral',
        symptoms: [
          'Upward or downward cupping of leaves with thickened, darkened veins',
          'Enation (leaf-like outgrowths) on the undersides of primary leaf veins',
          'Stunted bushy growth, small squares (buds) and aborted bolls'
        ],
        causes: [
          'High population of Bemisia tabaci (whitefly vector) in early crop stages',
          'Weed hosts like Abutilon indicum and Xanthium strumarium along field bunds'
        ],
        organicTreatment: [
          'Castor trap crop on field borders to attract and monitor whiteflies',
          'Yellow sticky traps (20 per acre)',
          'Neem oil 1500 ppm @ 5 ml/liter'
        ],
        chemicalTreatment: [
          'Flonicamid 50% WG @ 0.4 g/L or Diafenthiuron 50% WP @ 1.2 g/L for vector knockdown',
          'Avoid broad-spectrum synthetic pyrethroids which cause whitefly flare-ups'
        ],
        prevention: [
          'Clean border weeds that act as green bridge during summer',
          'Sow CLCuV tolerant Bt hybrids recommended for your specific agro-climatic zone'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'chilli',
    crop: 'Chilli / Pepper',
    cropHindi: 'मिर्च',
    cropMarathi: 'मिरची',
    scientificName: 'Capsicum annuum',
    category: 'Spice / Vegetable',
    idealSeason: 'Kharif, Rabi, Summer',
    soilType: 'Well-aerated sandy loam or black soil',
    description: 'High-value cash spice crop widely grown in Andhra Pradesh, Telangana, Karnataka, and Maharashtra. Frequently affected by Anthracnose, Powdery Mildew, and Thrips/Mites curling.',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Anthracnose / Fruit Rot (Dieback)',
        localNameHindi: 'मिर्च का एंथ्रेक्नोज / फल सड़न रोग',
        localNameMarathi: 'मिरचीवरील फळकुज व डायबॅक',
        scientificName: 'Colletotrichum capsici',
        pathogenType: 'fungal',
        symptoms: [
          'Circular, sunken necrotic spots with concentric rings of black acervuli on ripe fruits',
          'Dieback symptoms: twigs dry from top downwards, turning white/bleached',
          'Leaves develop circular brown lesions and fall prematurely'
        ],
        causes: [
          'Warm, humid weather (28°C–30°C) with continuous rainy spells during fruit ripening',
          'Overhead sprinkler irrigation creating micro-climatic humidity'
        ],
        organicTreatment: [
          'Seed treatment with Trichoderma viride @ 4 g/kg seed',
          'Foliar spray with garlic-chilli extract + Neem oil (5ml/L)',
          'Collect and destroy shriveled mummified fruits and dead twigs'
        ],
        chemicalTreatment: [
          'Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/liter',
          'Alternate: Tebuconazole 25.9% EC @ 1 ml/L or Mancozeb 75% WP @ 2.5 g/L'
        ],
        prevention: [
          'Use certified disease-free seeds; practice crop rotation with non-solanaceous crops',
          'Ensure raised-bed cultivation with plastic mulch to prevent soil splash'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Chilli Leaf Curl (Murda Complex)',
        localNameHindi: 'मिर्च का पत्ती मरोड़ (चुर्रा-मुर्रा)',
        localNameMarathi: 'मिरचीचा बोकड्या / चुरडा-मुरडा',
        scientificName: 'Chilli leaf curl virus & Thrips/Mite complex',
        pathogenType: 'viral',
        symptoms: [
          'Upward curling of leaves indicating Thrips feeding; downward boat-shaped curling indicates Mites',
          'Severe bunching of leaves at the shoot tips ("witch’s broom")',
          'Brittle, thick leaves with chlorosis and total blossom drop'
        ],
        causes: [
          'Scirtothrips dorsalis (Thrips) and Polyphagotarsonemus latus (Yellow Mite)',
          'Transmitted viruses (ChiLCV)'
        ],
        organicTreatment: [
          'Install blue sticky traps for thrips and yellow sticky traps for whiteflies (15 each/acre)',
          'Spray Dashparni Ark or Neem oil 10,000 ppm @ 3 ml/L',
          'Sulphur 80% WDG @ 3 g/L for natural mite suppression'
        ],
        chemicalTreatment: [
          'Thrips control: Spinetoram 11.7% SC @ 0.9 ml/L or Fipronil 5% SC @ 2 ml/L',
          'Mite control: Fenpyroximate 5% EC @ 1.5 ml/L'
        ],
        prevention: [
          'Grow barrier crops (2 rows of maize or bajra around the perimeter)',
          'Avoid excess nitrogenous fertilizer which produces tender, succulent leaves prone to sap-suckers'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'wheat',
    crop: 'Wheat',
    cropHindi: 'गेहूं',
    cropMarathi: 'गहू',
    scientificName: 'Triticum aestivum',
    category: 'Cereal / Rabi Staple',
    idealSeason: 'Rabi (Nov–April)',
    soilType: 'Loamy to clay loam with good drainage',
    description: 'Premier rabi staple crop across Punjab, Haryana, Madhya Pradesh, and UP. Key threats include yellow rust, brown rust, and loose smut.',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Yellow (Stripe) Rust',
        localNameHindi: 'पीला रतुआ (हल्दी रोग)',
        localNameMarathi: 'पिवळा तांबेरा',
        scientificName: 'Puccinia striiformis f. sp. tritici',
        pathogenType: 'fungal',
        symptoms: [
          'Bright yellow pustules (uredinia) arranged in neat linear stripes along leaf veins',
          'Yellow powder sticks to clothes and hands when walking through the field',
          'Leaves chlorotic, dried prematurely; grains shrivel'
        ],
        causes: [
          'Sub-Himalayan wind-blown spores during foggy winter months',
          'Cool temperatures (10°C–15°C) with persistent fog or dew'
        ],
        organicTreatment: [
          'Spray bio-control agent Trichoderma harzianum @ 5g/L at onset of winter',
          'Apply wood ash and fermented butter-milk foliar spray'
        ],
        chemicalTreatment: [
          'Propiconazole 25% EC (Tilt) @ 1 ml/liter of water at first detection',
          'Tebuconazole 25.9% EC @ 1 ml/L'
        ],
        prevention: [
          'Plant rust-resistant certified cultivars (e.g. DBW 187, DBW 222, HD 3086, HD 3226)',
          'Avoid late sowing; complete sowing before November 25'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'maize',
    crop: 'Maize / Corn',
    cropHindi: 'मक्का',
    cropMarathi: 'मका',
    scientificName: 'Zea mays',
    category: 'Cereal / Fodder',
    idealSeason: 'Kharif, Rabi & Spring',
    soilType: 'Deep, well-drained loams rich in organic matter',
    description: 'Versatile crop used for grain, poultry feed, silage, and industrial starch across Karnataka, MP, Bihar, and Maharashtra.',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Turcicum Leaf Blight (TLB)',
        localNameHindi: 'मक्के का पत्ती झुलसा',
        localNameMarathi: 'मक्याचा तुर्सिकम करपा',
        scientificName: 'Exserohilum turcicum',
        pathogenType: 'fungal',
        symptoms: [
          'Large, long, elliptical cigar-shaped grayish-green lesions on leaves',
          'Lesions turn tan and necrotic, often 3 to 15 cm in length',
          'Dense dark fungal sporulation within lesions during damp mornings'
        ],
        causes: [
          'Moderate temperatures (18°C–27°C) with heavy dews and high humidity',
          'Overwintered fungal mycelium in crop residues'
        ],
        organicTreatment: [
          'Seed treatment with Trichoderma viride @ 5 g/kg',
          'Spray with 5% fermented cow urine solution mixed with vitex negundo extract'
        ],
        chemicalTreatment: [
          'Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L'
        ],
        prevention: [
          'Deep summer ploughing to bury infected maize stubbles',
          'Grow resistant hybrids recommended by ICAR-IIMR'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'sugarcane',
    crop: 'Sugarcane',
    cropHindi: 'गन्ना',
    cropMarathi: 'ऊस',
    scientificName: 'Saccharum officinarum',
    category: 'Commercial / Sugar',
    idealSeason: 'Adsali (July), Pre-seasonal (Oct), Suru (Jan)',
    soilType: 'Deep, well-drained medium black to loamy soil',
    description: 'Crucial agro-industrial crop in Maharashtra, UP, and Karnataka. Severely threatened by Red Rot, Smut, and Pokkah Boeng.',
    imageUrl: 'https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Red Rot of Sugarcane',
        localNameHindi: 'गन्ने का लाल सड़न रोग',
        localNameMarathi: 'उसावरील तांबडे कूज (रेड रॉट)',
        scientificName: 'Colletotrichum falcatum',
        pathogenType: 'fungal',
        symptoms: [
          'Third and fourth leaves from top show yellowing and drying along midrib',
          'Canes split open lengthwise show bright red pith tissues interspersed with white transverse patches',
          'Alcoholic fermentation sour odor emitted from internal stalk tissues'
        ],
        causes: [
          'Planting infected seed setts; waterlogging in heavy soils',
          'Continuous monoculture of susceptible varieties'
        ],
        organicTreatment: [
          'Sett treatment with Trichoderma viride (10 g/L) for 30 minutes before planting',
          'Uproot infected clumps along with root mass, burn them, and treat stool with lime'
        ],
        chemicalTreatment: [
          'Sett treatment with Carbendazim 50% WP @ 1 g/L or Thiophanate Methyl @ 1 g/L',
          'Note: Chemical foliar sprays are generally ineffective once internal stalk red rot sets in'
        ],
        prevention: [
          'Strict quarantine: plant only tissue-culture or certified nursery setts (e.g. Co 0238, Co 86032)',
          'Moist Hot Air Treatment (MHAT) of seed setts at 54°C for 2.5 hours',
          'Provide furrow drainage to avoid monsoon standing water'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'grapes',
    crop: 'Grapes',
    cropHindi: 'अंगूर',
    cropMarathi: 'द्राक्षे',
    scientificName: 'Vitis vinifera',
    category: 'Fruit / Horticulture',
    idealSeason: 'Pruning: Foundation (April) & Forward (Sept–Oct)',
    soilType: 'Well-drained sandy loam to black clay loam',
    description: 'Premier export horticultural crop centered in Nashik, Sangli, and Solapur (Maharashtra). Intensely managed for Downy Mildew and Powdery Mildew.',
    imageUrl: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Downy Mildew of Grapes',
        localNameHindi: 'अंगूर का डाउनी मिल्ड्यू (मृदुरोमिल फफूंद)',
        localNameMarathi: 'द्राक्षांवरील डाऊनी मिल्ड्यू (केवडा)',
        scientificName: 'Plasmopara viticola',
        pathogenType: 'fungal',
        symptoms: [
          'Yellow translucent oily spots ("oil spots") on the upper leaf surface',
          'Dense white cottony growth of sporangiophores on the corresponding lower surface',
          'Shoots curl, bunches dry and turn into hard brownish berries ("leather berries")'
        ],
        causes: [
          'Persistent rainfall, drizzle or heavy morning dew with temps between 20°C–25°C',
          'Relative humidity over 85% during tender shoot and flowering stage'
        ],
        organicTreatment: [
          'Spray Bordeaux mixture 1% or Copper Oxychloride 50% WP @ 2.5 g/L',
          'Apply potassium phosphonate @ 2.5 ml/L to trigger systemic acquired resistance',
          'Ampelomyces quisqualis bio-spray'
        ],
        chemicalTreatment: [
          'Dimethomorph 50% WP @ 1 g/L + Mancozeb 75% WP @ 2 g/L',
          'Fluopicolide + Propamocarb (Infinito) @ 2.5 ml/L (respect export pre-harvest intervals)'
        ],
        prevention: [
          'Canopy management: Shoot thinning and leaf plucking around grape bunches for air circulation',
          'Use Y-trellis or bower training systems with proper aeration'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'apple',
    crop: 'Apple',
    cropHindi: 'सेब',
    cropMarathi: 'सफरचंद',
    scientificName: 'Malus domestica',
    category: 'Temperate Fruit / Plantation',
    idealSeason: 'Winter dormant, Bloom in April–May',
    soilType: 'Deep, rich loams with pH 5.5 to 6.5',
    description: 'King of temperate fruits grown in Jammu & Kashmir, Himachal Pradesh, and Uttarakhand. Subject to severe Apple Scab and Marssonina leaf blotch.',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    commonDiseases: [
      {
        name: 'Apple Scab',
        localNameHindi: 'सेब का स्केब रोग',
        localNameMarathi: 'सफरचंदावरील खपल्या रोग (स्कॅब)',
        scientificName: 'Venturia inaequalis',
        pathogenType: 'fungal',
        symptoms: [
          'Velvety olive-green to brown circular spots on emerging leaves',
          'Spots become corky, scab-like, and dark black as leaves mature',
          'Fruits develop cracking, distorted shapes, and brown corky lesions'
        ],
        causes: [
          'Cool, rainy weather during leaf break and pink bud bloom stage',
          'Overwintering fallen leaves carrying perithecia from the previous season'
        ],
        organicTreatment: [
          'Foliar spray of 5% urea on orchard floor in late autumn to accelerate fallen leaf decomposition',
          'Lime sulphur spray during dormant and green-tip stage',
          'Bacillus subtilis bio-fungicide during petal fall'
        ],
        chemicalTreatment: [
          'Difenoconazole 25% EC @ 0.5 ml/L or Kresoxim-methyl 44.3% SC @ 0.5 ml/L',
          'Captan 50% WP @ 2.5 g/L (Protective spray)'
        ],
        prevention: [
          'Rake and compost or burn all fallen orchard leaves before winter snowfall',
          'Prune orchard trees annually to ensure maximum sunlight penetration into inner branches'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80'
      }
    ]
  }
];
