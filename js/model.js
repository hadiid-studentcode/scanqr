import { supabase } from "./lib/supabaseAPI.js";

export async function getdata() {
  try {
    const { data: absensi, error } = await supabase.from("absensi").select("*");
    if (error) {
      console.error("Terjadi kesalahan:", error);
      return null; // Atau lakukan penanganan kesalahan lainnya
    }
    return absensi;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return null; // Atau lakukan penanganan kesalahan lainnya
  }
}



