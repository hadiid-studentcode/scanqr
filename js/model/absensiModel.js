import { supabase } from "../lib/supabaseAPI.js";

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

export async function Insertdata(idGuest,qrGuest,idKelolaAbsensiTerbaru,datenow,timenow) {
  try {
    const { data, error } = await supabase
      .from("absensi")
      .insert([
        {
          id_guests: idGuest,
          kode_absensi: idKelolaAbsensiTerbaru+qrGuest,
          date: datenow,
          time: timenow,
          status: "Hadir",
        },
      ])
      .select();
    if (error) {
      // console.error("Terjadi kesalahan:", error);
      return null; // Atau lakukan penanganan kesalahan lainnya
    }
    return data; // Mengembalikan hasil operasi insert
  } catch (error) {
    // console.error("Terjadi kesalahan:", error);
    return null; // Atau lakukan penanganan kesalahan lainnya
  }
}
