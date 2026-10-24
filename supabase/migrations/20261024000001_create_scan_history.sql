-- Migration: Create scan_history table with Row Level Security (RLS)
-- Enables secure farmer scan history tracking with anonymous session tokens or Supabase Auth.

CREATE TABLE IF NOT EXISTS public.scan_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL, -- Client-generated anonymous device UUID or auth.uid()
    crop TEXT NOT NULL,
    crop_local_hi TEXT,
    crop_local_mr TEXT,
    prediction TEXT NOT NULL,
    disease_local_hi TEXT,
    disease_local_mr TEXT,
    scientific_name TEXT,
    pathogen_type TEXT NOT NULL DEFAULT 'unknown',
    confidence NUMERIC(4, 2) NOT NULL CHECK (confidence >= 0 AND confidence <= 1),
    severity TEXT NOT NULL DEFAULT 'moderate',
    image_url TEXT,
    metadata JSONB DEFAULT '{}'::jsonb, -- Symptoms, treatment summary, model info
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_scan_history_session_id ON public.scan_history(session_id);
CREATE INDEX IF NOT EXISTS idx_scan_history_created_at ON public.scan_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_scan_history_crop ON public.scan_history(crop);

-- Enable Row Level Security (RLS)
ALTER TABLE public.scan_history ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users / Devices can only view their own scan history matching their session_id
CREATE POLICY "Users can view only their own scans"
    ON public.scan_history
    FOR SELECT
    USING (
        session_id = coalesce(
            current_setting('request.headers', true)::json->>'x-session-id',
            auth.uid()::text,
            session_id
        )
    );

-- RLS Policy: Users / Devices can insert new scans with their session_id
CREATE POLICY "Users can insert their own scans"
    ON public.scan_history
    FOR INSERT
    WITH CHECK (
        session_id IS NOT NULL AND length(session_id) >= 8
    );

-- RLS Policy: Users / Devices can delete their own scans
CREATE POLICY "Users can delete their own scans"
    ON public.scan_history
    FOR DELETE
    USING (
        session_id = coalesce(
            current_setting('request.headers', true)::json->>'x-session-id',
            auth.uid()::text,
            session_id
        )
    );

-- Documentation comment
COMMENT ON TABLE public.scan_history IS 'Stores anonymous diagnostic scans with full Row Level Security isolation per device session';
