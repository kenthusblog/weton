function Hitung(x){
    var explode =x.split("-");
    
        // Menampilkan tanggal, bulan, tahun
        var hari = explode[2];
        var tahun = explode[0];
        var bulan = ["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        
        if (explode[1] == "10" || explode[1] == "11" || explode[1] == "12"){
            var bln=explode[1];
        }else {
            bln=explode[1].substr(1,1);
        }
            bln = bulan[bln];

        var date = [hari, bln, tahun];

    // Menentukan Hari Masehi
    if (explode[0]%4 == 0){
		a = ['',31,29,31,30,31,30,31,31,30,31,30,31]
    }
	else {
		a = ['',31,28,31,30,31,30,31,31,30,31,30,31]
    }

    var siklus = Math.floor((explode[0]-1)/4);
    var sisaSiklus = (explode[0]-1) % 4;
    
     if (sisaSiklus !== 0 ){
         sisaSiklus = sisaSiklus * 365;
        }
    var hariSiklus = siklus * 1461;
        var w = explode[1];
        
        var q = 0;
            for(var i=1; i<w; i++){
                q = q+a[i];
            }
        var haridalamTahun = q + parseInt(explode[2]);

    var jumlahHari = hariSiklus + sisaSiklus + haridalamTahun;

    //Koreksi Gregorius dan selisih hijriyah dan masehi

    var selisihdankoreksi = 227029;
    jumlahHari = jumlahHari - selisihdankoreksi;
  
    // Masehi
    var xmasehi = jumlahHari % 7;

    // Pasaran
    var xpasaran = jumlahHari % 5;

    var day = ["Kamis", "Jum'at","Sabtu","Minggu","Senin","Selasa","Rabu","Kamis"]
    var pasaran = ["Kliwon","Legi","Pahing","Pon","Wage","Kliwon"]

    var ankday = [8,6,9,5,4,3,7,8]
    var ankpasaran = [8,5,9,7,4,8]

    var angkaWeton = ankday[xmasehi]+ankpasaran[xpasaran];

    return [date, day[xmasehi], pasaran[xpasaran], angkaWeton];
}

function weton(x){
    var pegat = [7,'PEGAT','"Hasil pegat, bahwa menurut hitungan weton jawa kemungkinan pasangan akan sering mendapatkan masalah di kemudian hari, bisa saja masalah ekonomi, kekuasaan, perselingkuhan hingga menyebabkan pasangan bercerai."']

    var ratu = [2,11,20,29,'RATU','"Hasil Ratu, menurut hitungan weton jawa bisa dikatakan bahwa pasangan ini memang sudah jodohnya. Karena didalam kehidupan nanti keluarganya akan sangat dihargai dan disegani oleh tetangga maupun masyarakat sekitar. Bahkan banyak orang yang iri hati karena keharmonisannya dalam membina rumah tangga."']

    var jodo = [3,12,21,30,'JODOH','"Hasil Jodoh, menurut hitungan weton jawa pasangan ini memang beneran cocok dan berjodoh. Karena dapat saling menerima baik kelebihan atau kekurangannya. Selain itu rumah tangganya dapat rukun sampai tua nanti."']

    var topo = [4,13,22,31,'TOPO','"Hasil Topo, menurut hitungan jawa di gambarkan dalam membina rumah tangga nanti akan mengalami kesusahan di awal, tetapi akan bahagia di akhir nanti. Masalah ini bisa saja karena masalah ekonomi dan masih banyak lagi. Namun ketika sudah mempunyai anak dan cukup lama berumah tangga, di hari itulah kehidupanya akan menjadi sukses dan bahagia."']

    var tinari = [5, 14, 23, 32,'TINARI','"Hasil Tinari, menurut hitungan weton jawanya berarti akan menemukan kebehagaiaan dimasa nanti. Selain itu gampang dalam mencari rezeki dan sering mendapatkan keberuntungan."']

    var padu = [6, 15, 24, 33,'PADU','"Hasil Padu, menurut hitungan weton jawa digambarkan dalam berumah tangganya nanti akan sering mengalami sebuah pertengkaran. Namun tidak sampai mengarah ke seuah perceraian. Masalah pertengkaran ini digambarkan hanya masalah yang sifatnya cukup sepele."']

    var sujanan = [7, 16, 25, 34,'SUJANAN','"Hasil sujanan, menurut hitungan weton jawa digambarkan bahwa dalam berumah tangganya nanti akan mengalami sebuah pertengkaran, bisa saja kerana perselingkuhan yang terjadi yang di mulai dari pahak laki-laki atau si perempuan."']

    var pesthi = [8, 17, 26, 35,'PESTHI','"Hasil Pesthi, menurut hitungan weton jawa digambarkan bahwa dalam berumah tangganya nanti akan selalu rukun, tenteram, adem ayem hingga tua nanti. Meskipun ada masalah, namun tidak akan bisa merusak keharmonisan keluarganya."']


    if(pegat.some(item => item == x)){
        return [pegat[8], pegat[9], "FFC4C8"];
    }else if(ratu.some(item => item == x)){
        return [ratu[4], ratu[5], "C6FFC2"];
    }else if(jodo.some(item => item == x)){
        return [jodo[4], jodo[5], "C6FFC2"];
    }else if(topo.some(item => item == x)){
        return [topo[4], topo[5], "E5E4C7"];
    }else if(tinari.some(item => item == x)){
        return [tinari[4], tinari[5], "E5E4C7"];
    }else if(padu.some(item => item == x)){
        return [padu[4], padu[5], "FFC4C8"];
    }else if(sujanan.some(item => item == x)){
        return [sujanan[4], sujanan[5], "FFC4C8"];
    }else if(pesthi.some(item => item == x)){
        return [pesthi[4], pesthi[5], "C6FFC2"];
    }
}




$('#submit').on('click', function () {
    $("#result").html("");

     //validasi nama
     var nama = $("#inputNama1").val().length;

	if (nama == 0) {			
         document.getElementById('nama-alert').innerHTML = "Nama tidak boleh kosong :)";
         //return false;
     }else{
         document.getElementById('nama-alert').innerHTML = "";
     }
     
     

    //validasi tanggal
    var alertTgl1 = $("#inputTanggal1").val().length;
        if (alertTgl1 == 0) {			
            document.getElementById('tanggal-alert').innerHTML = "Tanggalnya diisi dulu gaes";
            //return false;
        }else{
            document.getElementById('tanggal-alert').innerHTML = "";
        }
       
	
   $("#result").html("");

    var nama1 = $('#inputNama1').val();

    var tanggal1 = $('#inputTanggal1').val();
    
    var layla = Hitung(tanggal1);

    
    var total = layla[3];
    var final = weton(total)

    $("#result").append(`                    
    
<div class='weton'>
                Nama Kamu : <b>`+nama1+`</b><br/>
                Tanggal Lahir : <b>`+layla[0][0]+` `+layla[0][1]+` `+layla[0][2]+` </b><br/>
                Hari : <b>`+layla[1]+` </b><br/>
                Pasaran : <b> `+layla[2]+` </b>  <br/>
                Neptu  : <b>`+layla[3]+` </b> <br/>
           

<i class='separate'></i>    

<b>`+layla[0][10]+` </b>

           </div> 



                     `);
                     
    $('#myModal').modal('show');
   

})
