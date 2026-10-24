export interface SampleLeaf {
  id: string;
  name: string;
  crop: string;
  condition: string;
  imageUrl: string;
  description: string;
}

export const sampleLeaves: SampleLeaf[] = [
  {
    id: 'sample-tomato-early-blight',
    name: 'Tomato Early Blight',
    crop: 'Tomato',
    condition: 'Early Blight (Alternaria solani)',
    imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    description: 'Leaf showing concentric target rings with chlorotic yellow halo.'
  },
  {
    id: 'sample-potato-late-blight',
    name: 'Potato Late Blight',
    crop: 'Potato',
    condition: 'Late Blight (Phytophthora infestans)',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    description: 'Dark water-soaked necrotic lesions on margins with white downy fungal bloom.'
  },
  {
    id: 'sample-rice-blast',
    name: 'Rice Leaf Blast',
    crop: 'Rice',
    condition: 'Leaf Blast (Magnaporthe oryzae)',
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80',
    description: 'Spindle-shaped elliptical lesions with gray centers and necrotic reddish borders.'
  },
  {
    id: 'sample-cotton-blight',
    name: 'Cotton Angular Spot',
    crop: 'Cotton',
    condition: 'Bacterial Blight (Xanthomonas citri)',
    imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
    description: 'Water-soaked angular lesions bounded strictly by leaf veins.'
  },
  {
    id: 'sample-corn-healthy',
    name: 'Corn (Healthy Leaf)',
    crop: 'Maize',
    condition: 'Healthy Leaf — No Pathogen Detected',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant green chlorophyll leaf surface without necrotic spots or chlorosis.'
  },
  {
    id: 'sample-unclear-leaf',
    name: 'Unclear / Out of Focus Leaf',
    crop: 'Unknown',
    condition: 'Indeterminate / Low Confidence',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Far-away shot / non-leaf background to test low-confidence warning system.'
  }
];
