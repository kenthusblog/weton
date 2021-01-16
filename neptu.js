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
    var pegat = [7,'Pendito Kang Lelaku','"Hasil pegat, Orang yang memiliki jumlah neptu 7 adalah orang yang lahir pada hari selasa (3) Wage (4). Orang yang lahir pada neptu 7 memiliki sifat dan watak serta kepribadian yang sedikit pemalas, suka bepergian, suka ingkar janji dan juga kurang pintar dalam berkomunikasi. Hal ini menyebabkan lingkungan pergaulannya terbatas. Yang pasti ia merupakan sosok yang suka untuk bepergian kemana saja."']

    var ratu = [8,'ratu','"Hasil Ratu, Orang yang memiliki neptu 8 adalah orang yang lahir pada Selasa (3) Legi (5) dan Senin (4) Wage (4). Watak dan kepribadian orang dengan neptu 8 adalah orang yang mempunyai karakter pendedam, panas hati, gampang marah, sering bertengkar. Ia mempunyai emosi yang meledak ledak sehingga sering kali timbul permasalahan akibat dari emosi yang dikeluarkannya."']

    var jodo = [9,'Lakune Angin','"Hasil Jodoh, Orang yang memiliki neptu 9 adalah orang yang lahir pada Senin (4) Legi (5) dan Minggu (5) Wage (4). Watak dan kepribadian orang dengan neptu 9 adalah orang yang mempunyai karakter mudah untuk dipengaruhi orang lain dan sering terjadi mereka tidak memiliki pendirian hidup. Orang ini termasuk orang yang pendiam tetapi lincah. Salah satu hal terbaik menurut primbon jawa kuno orang yang memiliki neptu 9 kebal bila di guna guna."']

    var topo = [10,'Pendito Mbangun Teki','"Hasil Topo, Orang yang memiliki neptu 10 adalah orang yang lahir pada Selasa (4) Pon (7), Jumat (6) Wage (4) dan Minggu (5) Legi (5). Watak dan kepribadian orang dengan neptu 10 adalah merupakan orang yang suka memberikan nasehat kepada orang lain tetapi tidak menerima saran ataupun kritik orang lain. Ia juga merupakan orang yang cerdas dan tidak mudah tersinggung."']

    var tinari = [11,'TINARI','"Hasil Tinari, menurut hitungan weton jawanya berarti akan menemukan kebehagaiaan dimasa nanti. Selain itu gampang dalam mencari rezeki dan sering mendapatkan keberuntungan."']

    var padu = [12,'Lakune Setan','"Hasil Padu, Orang yang memiliki neptu 11 adalah orang yang lahir pada Senin (4) Pon (7), Rabu (7) Wage (4) , Selasa (3) Kliwon (8) dan Jumat (6) Legi (5). Watak dan kepribadian orang dengan neptu 11 adalah mereka tipikal orang yang tidak bisa menjadi seorang pemimpin dikarenakan tidak memiliki jiwa kepemimpinan dan juga orang yang plin plan. Walaupun dia terlihat sebagai sosok yang pemberani."']

    var sujanan = [13,'Lakune Kembang','"Hasil sujanan, Orang yang memiliki neptu 12 adalah orang yang lahir pada Minggu (5) Pon (7), Kamis(8) Wage (4), Senin (4) Kliwon (8), Rabu (7) Legi (5), dan Selasa (3) Pahing (9). Watak dan kepribadian orang dengan neptu 12  adalah ia sosok yang suka mengalah terhadap orang lain dan tipikal orang yang cinta damai. Dia penurut, rajin, pintar dan juga sayang pada teman temannya. Orang dengan neptu 12 di ramalkan akan sering kehilangan barang."']

    var pesthi = [14,'Lakune Lintang','"Hasil Pesthi, Orang yang memiliki neptu 13 adalah orang yang lahir pada Sabtu (9) Wage (4), Minggu (5) Kliwon (8), Senin (4) Pahing (9), Kamis(8) Legi (5) dan juga Jumat (6) Pon (7). Watak dan kepribadian orang dengan neptu 13  adalah orang yang memiliki pesona yang sangat baik, lemah lembut, berjiwa petualang, ia adalah orang yang memiliki karisma yang tinggi tetapi tidak bisa memimpin."']


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
    <tbody>
                Nama Kamu : <b>`+nama1+`</b><br/>
                Tanggal Lahir : <b>`+layla[0][0]+` `+layla[0][1]+` `+layla[0][2]+` </b><br/>
                Hari : <b>`+layla[1]+` </b><br/>
                Pasaran : <b> `+layla[2]+` </b>  <br/>
                Neptu  : <b>`+layla[3]+` </b> <br/>
           

<i class='separate'></i>    
            
     

</tbody>
</div><p></p>
 <div class='block-author'><span class='block-desc' align='right' style="font-size: 0.7em"><a href="https://www.panjinawangkung.com">panjinawangkung.com</a></span></p></div></blockquote>
                </div>
    
                     `);
                     
    $('#myModal').modal('show');
   

})
