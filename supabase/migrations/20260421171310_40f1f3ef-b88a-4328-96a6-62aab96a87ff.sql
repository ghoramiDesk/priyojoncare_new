ALTER TABLE public.care_requests
  ADD COLUMN IF NOT EXISTS package_id text,
  ADD COLUMN IF NOT EXISTS custom_price integer;