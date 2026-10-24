import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ContactFormData } from '../types';
import { supabase, isSupabaseConfigured } from '../services/supabaseClient';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Loader2, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const INDIAN_STATES = [
  'Maharashtra',
  'Punjab',
  'Haryana',
  'Uttar Pradesh',
  'Madhya Pradesh',
  'Andhra Pradesh',
  'Gujarat',
  'Karnataka',
  'Tamil Nadu',
  'Rajasthan',
  'Bihar',
  'Telangana',
  'West Bengal',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Other'
];

export const ContactView: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    state: 'Maharashtra',
    district: '',
    crop: 'Tomato',
    queryType: 'disease',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.contact.trim() || formData.contact.trim().length < 6) {
      setError('Please provide a valid 10-digit mobile number or email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError('Please provide more details regarding your crop problem (at least 10 characters).');
      return;
    }

    setLoading(true);

    try {
      const ticketId = 'CC-TICKET-' + Math.floor(100000 + Math.random() * 900000);

      if (isSupabaseConfigured && supabase) {
        try {
          await supabase.from('farmer_inquiries').insert({
            ticket_id: ticketId,
            name: formData.name,
            contact: formData.contact,
            state: formData.state,
            district: formData.district,
            crop: formData.crop,
            query_type: formData.queryType,
            message: formData.message,
            created_at: new Date().toISOString(),
          });
        } catch (supabaseErr) {
          console.warn('Supabase inquiry insert skipped, recorded locally:', supabaseErr);
        }
      }

      // Save locally to localStorage inquiries log
      try {
        const stored = JSON.parse(localStorage.getItem('cropcare_inquiries') || '[]');
        stored.push({ ...formData, ticketId, timestamp: new Date().toISOString() });
        localStorage.setItem('cropcare_inquiries', JSON.stringify(stored));
      } catch {}

      setSubmittedTicket(ticketId);
      setFormData({
        name: '',
        contact: '',
        state: 'Maharashtra',
        district: '',
        crop: 'Tomato',
        queryType: 'disease',
        message: '',
      });
    } catch (err: any) {
      setError('Failed to submit message. Please try calling the Kisan Helpline directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-300 max-w-4xl mx-auto">
      
      {/* Title */}
      <div className="space-y-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold">
          <PhoneCall className="w-3.5 h-3.5 text-forest-700" />
          <span>Farmer Helpline & Agricultural Assistance</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
          {t.contact.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: National Helpline Cards */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Kisan Call Center Box */}
          <div className="bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-white rounded-3xl p-6 shadow-lifted space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-harvest-300 uppercase tracking-wider">
                Government of India
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/30 text-emerald-200">
                24x7 Toll Free
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-harvest-400" />
                <span>{t.contact.emergencyCardTitle}</span>
              </h3>
              <a 
                href="tel:18001801551" 
                className="mt-2 inline-block text-2xl sm:text-3xl font-black text-harvest-400 hover:text-harvest-300 tracking-tight"
              >
                {t.contact.emergencyNumber}
              </a>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {t.contact.emergencySubtitle}
            </p>

            <div className="pt-2 border-t border-forest-800 text-xs text-stone-300 space-y-1">
              <div>⏰ <strong>Operating Hours:</strong> 6:00 AM – 10:00 PM (Daily)</div>
              <div>🗣️ <strong>Languages:</strong> Hindi, Marathi, Punjabi, Telugu, Tamil, & 17 others</div>
            </div>
          </div>

          {/* District KVK Information */}
          <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-soft space-y-3 text-xs">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-forest-700" />
              <span>Krishi Vigyan Kendra (KVK) Network</span>
            </h4>
            <p className="text-stone-600 leading-relaxed">
              For catastrophic crop failures or seed certification inquiries, visit your district KVK scientist directly with an enclosed fresh leaf specimen.
            </p>
            <div className="pt-1">
              <a
                href="https://kvk.icar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-forest-800 hover:text-forest-950 underline"
              >
                <span>Find Your District KVK Center</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-soft">
          
          {submittedTicket ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-950">{t.contact.successTitle}</h3>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                {t.contact.successDesc}
              </p>
              <div className="p-3 bg-white rounded-xl border border-emerald-200 inline-block text-xs font-mono font-bold text-emerald-950">
                Ticket Reference: {submittedTicket}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="px-5 py-2 rounded-xl bg-forest-900 text-white font-semibold text-xs hover:bg-forest-800"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700 block">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patil"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700 block">
                    {t.contact.contactLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. 9822012345 or farmer@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>
              </div>

              {/* State & District */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700 block">
                    {t.contact.stateLabel}
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600 bg-white"
                  >
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700 block">
                    {t.contact.districtLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="e.g. Nashik / Niphad"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>
              </div>

              {/* Crop & Query Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700 block">
                    {t.contact.cropLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.crop}
                    onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    placeholder="e.g. Tomato, Cotton, Rice"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700 block">
                    {t.contact.queryTypeLabel}
                  </label>
                  <select
                    value={formData.queryType}
                    onChange={(e) => setFormData({ ...formData, queryType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600 bg-white"
                  >
                    <option value="disease">Disease Diagnosis Assistance</option>
                    <option value="prevention">Preventive Agronomy Advice</option>
                    <option value="pesticide">Safe Pesticide / Dosage Query</option>
                    <option value="technical">Technical App Help</option>
                    <option value="other">Other Inquiries</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="font-semibold text-stone-700 block">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe leaf symptoms, crop age, and recent weather in your field..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-forest-600 leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-2xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-soft transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                    <span>{t.contact.submittingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>{t.contact.submitBtn}</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-stone-400 text-center pt-1">
                Your contact information is only used to respond to your agricultural inquiry.
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
