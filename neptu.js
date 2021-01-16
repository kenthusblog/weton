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
    var PenditoKangLelaku = [7,'Pendito Kang Lelaku','"Hasil Pendito Kang Lelaku,  Seneng nglencer. Orang yang memiliki jumlah neptu 7 adalah orang yang lahir pada hari selasa (3) Wage (4). Orang yang lahir pada neptu 7 memiliki sifat dan watak serta kepribadian yang sedikit pemalas, suka bepergian, suka ingkar janji dan juga kurang pintar dalam berkomunikasi. Hal ini menyebabkan lingkungan pergaulannya terbatas. Yang pasti ia merupakan sosok yang suka untuk bepergian kemana saja."']

    var LakuneGeni = [8,'Lakune Geni','"Hasil Lakune Geni,  Cilik Kaitane, Gede Pungkasane.Orang yang memiliki neptu 8 adalah orang yang lahir pada Selasa (3) Legi (5) dan Senin (4) Wage (4). Watak dan kepribadian orang dengan neptu 8 adalah orang yang mempunyai karakter pendedam, panas hati, gampang marah, sering bertengkar. Ia mempunyai emosi yang meledak ledak sehingga sering kali timbul permasalahan akibat dari emosi yang dikeluarkannya."']

    var LakuneAngin = [9,'Lakune Angin','"Hasil Lakune Angin, Orang yang memiliki neptu 9 adalah orang yang lahir pada Senin (4) Legi (5) dan Minggu (5) Wage (4). Watak dan kepribadian orang dengan neptu 9 adalah orang yang mempunyai karakter mudah untuk dipengaruhi orang lain dan sering terjadi mereka tidak memiliki pendirian hidup. Orang ini termasuk orang yang pendiam tetapi lincah. Salah satu hal terbaik menurut primbon jawa kuno orang yang memiliki neptu 9 kebal bila di guna guna."']

    var PenditoMbangunTeki = [10,'Pendito Mbangun Teki','"Hasil Pendito Mbangun Teki, Orang yang memiliki neptu 10 adalah orang yang lahir pada Selasa (4) Pon (7), Jumat (6) Wage (4) dan Minggu (5) Legi (5). Watak dan kepribadian orang dengan neptu 10 adalah merupakan orang yang suka memberikan nasehat kepada orang lain tetapi tidak menerima saran ataupun kritik orang lain. Ia juga merupakan orang yang cerdas dan tidak mudah tersinggung."']

    var LakuneSetan = [11,'Lakune Setan','"Hasil Lakune Setan, Orang yang memiliki neptu 11 adalah orang yang lahir pada Senin (4) Pon (7), Rabu (7) Wage (4) , Selasa (3) Kliwon (8) dan Jumat (6) Legi (5). Watak dan kepribadian orang dengan neptu 11 adalah mereka tipikal orang yang tidak bisa menjadi seorang pemimpin dikarenakan tidak memiliki jiwa kepemimpinan dan juga orang yang plin plan. Walaupun dia terlihat sebagai sosok yang pemberani."']

    var LakuneKembang = [12,'Lakune Kembang','"Hasil Lakune Kembang, Orang yang memiliki neptu 12 adalah orang yang lahir pada Minggu (5) Pon (7), Kamis(8) Wage (4), Senin (4) Kliwon (8), Rabu (7) Legi (5), dan Selasa (3) Pahing (9). Watak dan kepribadian orang dengan neptu 12  adalah ia sosok yang suka mengalah terhadap orang lain dan tipikal orang yang cinta damai. Dia penurut, rajin, pintar dan juga sayang pada teman temannya. Orang dengan neptu 12 di ramalkan akan sering kehilangan barang."']

    var LakuneLintang = [13,'Lakune Lintang','"Hasil Lakune Lintang, Orang yang memiliki neptu 13 adalah orang yang lahir pada Sabtu (9) Wage (4), Minggu (5) Kliwon (8), Senin (4) Pahing (9), Kamis(8) Legi (5) dan juga Jumat (6) Pon (7). Watak dan kepribadian orang dengan neptu 13  adalah orang yang memiliki pesona yang sangat baik, lemah lembut, berjiwa petualang, ia adalah orang yang memiliki karisma yang tinggi akan tetapi tidak bisa memimpin."']

    var LakuneMbulan = [14,'Lakune Mbulan','"Hasil Lakune Mbulan, Orang yang memiliki neptu 14 adalah orang yang lahir pada Jumat (6) Kliwon (8), Sabtu (9) Legi (5), Minggu (5) Pahing (9) dan juga Rabu (7) Pon (7) . Watak dan kepribadian orang dengan neptu 14 adalah orang yang dapat menerima apa saja, ia adalah sosok yang berbakti, cerdas, mudah bergaul dan ia merupakan kunci jawaban teman teman ataupun sahabatnya dalam menyelesaikan sebuah permasalahan"']


 var Lakune Geni = [15,'Lakune Geni','"Hasil Lakune Geni, Orang yang memiliki neptu 15 adalah orang yang lahir pada Rabu (7) Kliwon (8), Kamis(8) Pon (7) dan juga Jumat (6) Pahing (9). Watak dan kepribadian orang dengan neptu 15 adalah orang yang pendendam dan memiliki amarah yang besar. Ia tidak suka diperintah karena hatinya tegas. Dalam hidupnya ia akan sering berselisih dengan orang orang yang berada di dekatnya."']


 var Lakune Bumi = [16,'Lakune Bumi','"Hasil Lakune Bumi, Orang yang memiliki neptu 16 adalah orang yang lahir pada Kamis(8) Kliwon (8), Sabtu (9) Pon (7) dan juga Rabu (7) Pahing (9). Watak dan kepribadian orang dengan neptu 16 adalah orang yang mudah diatur dan suka mengayomi. Ia adalah sosok yang cocok untuk menjadi seorang pemimpin yang baik. Sopan santun, pemaaf dan tidak mudah marah membuat dia memiliki banyak teman. Tetapi hati hati jika sampai ia marah maka akan mengerikan sekali."']


 var Lakune Gunung = [17,'Lakune Gunung','"Hasil Lakune Gunung, Orang yang memiliki neptu 17 adalah orang yang lahir pada Sabtu (9) Kliwon (8) atau Kamis(8) Pahing (9). Watak dan kepribadian orang dengan neptu 17 adalah orang yang moody, pendiam, lambat dan terlalu baik. Apabila seseorang bisa mengambil hatinya maka ia akan mudah diatur."']


 var Lakune Paripurna = [18,'Lakune Paripurna','"Hasil Lakune Paripurna, Orang yang memiliki neptu 18 adalah orang yang lahir pada Sabtu (9) Pahing (9). Watak dan kepribadian orang dengan neptu 18 adalah orang yang suka akan kekuasaan, setiap permintaannya harus dipenuhi. Ia juga jadi sosok yang mudah panas tetapi mudah mengalah jika amarahnya redah."']




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
         document.getElementById('nama-alert').innerHTML = "Nama tidak boleh kosong, hehe :)";
         //return false;
     }else{
         document.getElementById('nama-alert').innerHTML = "";
     }
     

    //validasi tanggal
    var alertTgl1 = $("#inputTanggal1").val().length;
        if (alertTgl1 == 0) {			
            document.getElementById('tanggal-alert').innerHTML = "Tanggalnya diisi dulu cuy";
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
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-11">Nama Kamu  : `+nama1+`</div>
                <div class=col-4>Lahir Tanggal : `+layla[0][0]+` `+layla[0][1]+` `+layla[0][2]+`</div>
                <div class=col-4>Pasaran       : `+layla[1]+ ` `+layla[2]+`</div>
                <div class=col-4>Neptu         : `+layla[3]+ `</div>

            </div>    
           
            <div class="row mt-3">
                    <center><b>`+final[0]+`</b></center>
                    <p>
                        &nbsp &nbsp &nbsp `+final[1]+`
                    </p>
                </div>
            </div>
        </div>
    </div>
    
                     `);
                     
    $('#myModal').modal('show');
   

})
