import { supabase } from "../lib/supabaseAPI.js";

export async function getdataKelolaAbsensi() {
  try {
    const { data: kelola_absensi, error } = await supabase.from("kelola_absensi").select("id");
    if (error) {
      console.error("Terjadi kesalahan:", error);
      return null; // Atau lakukan penanganan kesalahan lainnya
    }
    return kelola_absensi;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return null; // Atau lakukan penanganan kesalahan lainnya
  }
}
