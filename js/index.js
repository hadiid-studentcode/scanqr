import { success } from "./sweetalert.js";
import { Insertdata } from "./model/absensiModel.js";
import { getdataKelolaAbsensi } from "./model/kelolaAbsensiModel.js";

moment.locale("id");



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

    const parts = decodeText.split("-");
    const idGuest = parts[0];
    const qrGuest = parts[1];

    const resultKelolaAbsensi = await getdataKelolaAbsensi();

    const idKelolaAbsensiTerbaru = resultKelolaAbsensi.slice(-1)[0].id;

    const datenow = moment().format("YYYY-MM-DD");

    const timenow = moment().format("HH:mm:ss");

    
    success();

    setTimeout( async function () {
     
    const result = await Insertdata(
      idGuest,
      qrGuest,
      idKelolaAbsensiTerbaru,
      datenow,
      timenow
    );
       if (result) {
         Swal.fire({
           title: "Success!",
           text: "Scanning success.",
           icon: "success",
         });
       } else {
         Swal.fire({
           title: "Warning!",
           text: "Scanning failed.",
           icon: "warning",
         });
       }

    }, 2000); // 2000 milliseconds = 20 seconds


 

    //    MASUKKAN DATANYA DISINI
  }

  let htmlscanner = new Html5QrcodeScanner("my-qr-reader", {
    fps: 10,
    qrbos: 250,
  });
  htmlscanner.render(onScanSuccess);
});
