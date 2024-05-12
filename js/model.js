import { createClient } from "https://esm.sh/@supabase/supabase-js@2";


// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://hddtjmpervvtauiyzfdi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkZHRqbXBlcnZ2dGF1aXl6ZmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MjQxNzIsImV4cCI6MjAzMTAwMDE3Mn0.oATTDo-Nf9FDqJhnLVwowcfOKekmDHzSp9UWrJN469o"
);