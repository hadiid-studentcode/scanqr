import { success } from "./sweetalert.js";
import { getdata } from "./model.js";

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

    const dataAbsensi = await getdata();
    if (dataAbsensi) {
      console.log(dataAbsensi[0].id);
    } else {
      console.log("Gagal mengambil data absensi.");
    }

    success();

    //    MASUKKAN DATANYA DISINI
  }

  let htmlscanner = new Html5QrcodeScanner("my-qr-reader", {
    fps: 10,
    qrbos: 250,
  });
  htmlscanner.render(onScanSuccess);
});
