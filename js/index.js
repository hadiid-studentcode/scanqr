import {success} from "./sweetalert.js";
import { supabase } from "./model.js";


function domReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1000);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {
  // If found you qr code
  async function onScanSuccess(decodeText, decodeResult) {
    alert(1);

    
let { data: absensi, error } = await supabase.from("absensi").select("*");

console.log(absensi[0].id);
          

    success();

    //    MASUKKAN DATANYA DISINI
  }

  let htmlscanner = new Html5QrcodeScanner("my-qr-reader", {
    fps: 10,
    qrbos: 250,
  });
  htmlscanner.render(onScanSuccess);
});
