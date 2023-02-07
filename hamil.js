function isValidDate(dateStr) {
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
var matchArray = dateStr.match(datePat);
if (matchArray == null) {
alert("Format tanggal salah.")
return false;
}
month = matchArray[1];
day = matchArray[3];
year = matchArray[4];
if (month < 1 || month > 12) {
alert("Bulan harus antara 1 dan 12.");
return false;
}
if (day < 1 || day > 31) {
alert("Tanggal harus antara 1 dan 31.");
return false;
}
if ((month==4 || month==6 || month==9 || month==11) && day==31) {
alert("Bulan "+month+" tidak sampai 31 hari!")
return false;
}
if (month == 2) {
var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
if (day>29 || (day==29 && !isleap)) {
alert("Pebruari " + year + " tidak sampai " + day + " hari!");
return false;
}
}
return true;
}

function dispDate(dateObj) {
month = dateObj.getMonth()+1;
month = (month < 10) ? "0" + month : month;
day   = dateObj.getDate();
day = (day < 10) ? "0" + day : day;
year  = dateObj.getYear();
if (year < 2000) year += 1900;
return (day + " - " + month + " - " + year);
}

function pregnancyCalc(pregform) {
menstrual = new Date();
ovulation = new Date();
duedate = new Date();
tri1 = new Date();
tri2 = new Date();
tri3 = new Date();
senam = new Date();
bulan3 = new Date();
bulan7 = new Date();
siap = new Date();
lebih = new Date();
today = new Date();
cycle = 0;
menstruasi = pregform.bulan.value + "/" + pregform.tanggal.value + "/" + pregform.tahun.value

if (isValidDate(menstruasi)) {
menstrualinput = new Date(menstruasi);
menstrual.setTime(menstrualinput.getTime())
}
else return false;
cycle = (pregform.cycle.value == "" ? 28 : pregform.cycle.value);

if (pregform.cycle.value != "" && (pregform.cycle.value < 22 || pregform.cycle.value > 36)) {
alert("Siklus haid terlalu pendek / terlalu panjang \n" + "Penghitungan mungkin tidak akurat, \n" + "walaupun demikian penghitungan tetap kami lakukan. ");
}

ovulation.setTime(menstrual.getTime() + (cycle*86400000) - (14*86400000));
pregform.conception.value = dispDate(ovulation);
duedate.setTime(ovulation.getTime() + 266*86400000);
pregform.duedate.value = dispDate(duedate);
// sets tri1 First Trimester ends 13 weeks + 3 days   ~   Second Trimester ends 26 weeks + 6 day 
tri1.setTime(menstrual.getTime());
pregform.tri1.value = dispDate(tri1);
// sets tri2  
tri2.setTime(ovulation.getTime() + 81*86400000);
pregform.tri2.value = dispDate(tri2);
// sets tri3  
tri3.setTime(ovulation.getTime() + 175*86400000);
pregform.tri3.value = dispDate(tri3);
// sets senam  
senam.setTime(ovulation.getTime() + 126*86400000);
pregform.senam.value = dispDate(senam);
// sets 3bulan 
bulan3.setTime(ovulation.getTime() + 70*86400000);
pregform.bulan3.value = dispDate(bulan3);
// sets 7bulan 
bulan7.setTime(ovulation.getTime() + 175*86400000);
pregform.bulan7.value = dispDate(bulan7);
//siap
siap.setTime(ovulation.getTime() + 226*86400000);
pregform.siap.value = dispDate(siap);
//lebih
lebih.setTime(ovulation.getTime() + 280*86400000);
pregform.lebih.value = dispDate(lebih);
// sets usia kehamilan to 14 + 266 (pregnancy time) - time left 
var fetalage = 14 + 266 - ((duedate - today) / 86400000);
weeks = parseInt(fetalage / 7);
days = Math.floor(fetalage % 7);
fetalage = weeks + " minggu" + " " + days + " hari";
pregform.fetalage.value = fetalage;
return false;
}

function dispDate(dateObj) 
{
var month = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
return("" + dateObj.getDate() + " " + month[dateObj.getMonth()] + " " + dateObj.getFullYear()); 
}

