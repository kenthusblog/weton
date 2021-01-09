//var __nama = document.getElementById("pbnama");
var __tanggal = document.getElementById("pbtanggal");
var __bulan = document.getElementById("pbbulan");
var __tahun = document.getElementById("pbtahun");
var __hasil = document.getElementById("pbhasil");
var bthasil = document.getElementById("pbhitung");

bthasil.addEventListener("click", function() {
  var tanggalLahir = new Date(__tahun.value, __bulan.selectedIndex, __tanggal.value);
  __hasil.innerHTML = "Weton Kamu " + hitunghari(tanggalLahir) + " " + hitungpasaran(tanggalLahir);
});

function hitunghari(_tanggal) {
  _hari = _tanggal.getDay();
  
  switch(_hari) {
    case 0:
      return "Minggu";
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jum'at";
    case 6:
      return "Sabtu";
    default:
      return "";
  }
} 
function hitungpasaran(_tanggal) {
  var awal = new Date(70,0,2);
  pembagian = ((_tanggal.getTime()-awal.getTime())+86400000)/432000000;
  sisa = Math.round((pembagian-Math.floor(pembagian))*10)/2;
  
  switch (sisa) {
    case 0:
      return "Wage";
    case 1:
      return "Kliwon";
    case 2:
      return "Legi";
    case 3:
      return "Pahing";
    case 4:
      return "Pon";
    default:
      return "";
  }
}
