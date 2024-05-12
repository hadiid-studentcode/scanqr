import { success } from "./sweetalert.js";
import { Insertdata } from "./model/absensiMode.js";

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
   
    // Swal.fire("SweetAlert2 is working!");

    const result = await Insertdata();
    if (result) {
        alert("Data berhasil dimasukkan");
    } else {
        alert("Data gagal dimasukkan");
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
