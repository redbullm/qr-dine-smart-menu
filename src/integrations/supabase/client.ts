// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://efscersrektsroluzmdf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmc2NlcnNyZWt0c3JvbHV6bWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MTU5MjUsImV4cCI6MjA1OTA5MTkyNX0.M2JhyKQjDxHibCu2pZRnF1v_nGNX0DSaElEyKFT8gRM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);