import { supabase } from "./../lib/supabaseAPI.js";

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

export async function Insertdata() {
    try {
      const { data, error } = await supabase
        .from("absensi")
        .insert([
          {
            id_guests: 1,
            date: "2024-05-12",
            time: "11:30:00",
            status: "hadir",
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
