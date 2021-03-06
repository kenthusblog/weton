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
    var pegat = [7,78,79,80,'Pendito Kang Lelaku','"Orang yang lahir pada neptu 7 memiliki sifat dan watak serta kepribadian yang sedikit pemalas, suka bepergian, suka ingkar janji dan juga kurang pintar dalam berkomunikasi. Hal ini menyebabkan lingkungan pergaulannya terbatas. Yang pasti ia merupakan sosok yang suka untuk bepergian kemana saja."']

    var ratu = [8,88,89,90,'Lakune Geni','"Watak dan kepribadian orang dengan neptu 8 adalah orang yang mempunyai karakter pendedam, panas hati, gampang marah, sering bertengkar. Ia mempunyai emosi yang meledak ledak sehingga sering kali timbul permasalahan akibat dari emosi yang dikeluarkannya."']

    var jodo = [9,91,92,93,'Lakune Angin','"Watak dan kepribadian orang dengan neptu 9 adalah orang yang mempunyai karakter mudah untuk dipengaruhi orang lain dan sering terjadi mereka tidak memiliki pendirian hidup. Orang ini termasuk orang yang pendiam tetapi lincah. Salah satu hal terbaik menurut primbon jawa kuno orang yang memiliki neptu 9 kebal bila di guna guna."']

    var topo = [10,101,202,103,'Mbangun Teki','"Watak dan kepribadian orang dengan neptu 10 adalah merupakan orang yang suka memberikan nasehat kepada orang lain tetapi tidak menerima saran ataupun kritik orang lain. Ia juga merupakan orang yang cerdas dan tidak mudah tersinggung."']

    var tinari = [11, 114, 123, 132,'Lakune Setan','"Watak dan kepribadian orang dengan neptu 11 adalah mereka tipikal orang yang tidak bisa menjadi seorang pemimpin dikarenakan tidak memiliki jiwa kepemimpinan dan juga orang yang plin plan. Walaupun dia terlihat sebagai sosok yang pemberani."']

    var padu = [12, 215, 224, 233,'Lakune Kembang','"Watak dan kepribadian orang dengan neptu 12  adalah ia sosok yang suka mengalah terhadap orang lain dan tipikal orang yang cinta damai. Dia penurut, rajin, pintar dan juga sayang pada teman temannya. Orang dengan neptu 12 di ramalkan akan sering kehilangan barang."']

    var sujanan = [13, 378, 325, 334,'Lakune Lintang','"Watak dan kepribadian orang dengan neptu 13  adalah orang yang memiliki pesona yang sangat baik, lemah lembut, berjiwa petualang, ia adalah orang yang memiliki karisma yang tinggi tetapi tidak bisa memimpin."']

    var pesthi = [14, 217, 226, 235,'Lakune Mbulan','"Watak dan kepribadian orang dengan neptu 14 adalah orang yang dapat menerima apa saja, ia adalah sosok yang berbakti, cerdas, mudah bergaul dan ia merupakan kunci jawaban teman teman ataupun sahabatnya dalam menyelesaikan sebuah permasalahan"']

    var pesthi1 = [15, 517, 526, 535,'Lakune Geni','"Watak dan kepribadian orang dengan neptu 15 adalah orang yang pendendam dan memiliki amarah yang besar. Ia tidak suka diperintah karena hatinya tegas. Dalam hidupnya ia akan sering berselisih dengan orang orang yang berada di dekatnya."']
    
    var pesthi2 = [16, 617, 626, 635,'Lakune Bumi','"Watak dan kepribadian orang dengan neptu 16 adalah orang yang mudah diatur dan suka mengayomi. Ia adalah sosok yang cocok untuk menjadi seorang pemimpin yang baik. Sopan santun, pemaaf dan tidak mudah marah membuat dia memiliki banyak teman. Tetapi hati hati jika sampai ia marah maka akan mengerikan sekali."']
    
    var pesthi3 = [17, 107, 206, 205,'Lakune Gunung','"Watak dan kepribadian orang dengan neptu 17 adalah orang yang moody, pendiam, lambat dan terlalu baik. Apabila seseorang bisa mengambil hatinya maka ia akan mudah diatur."']
    
    var pesthi4 = [18, 817, 826, 935,'Lakune Paripurna','"Watak dan kepribadian orang dengan neptu 18 adalah orang yang suka akan kekuasaan, setiap permintaannya harus dipenuhi. Ia juga jadi sosok yang mudah panas tetapi mudah mengalah jika amarahnya redah."']
    
    
    
    
    
    

    if(pegat.some(item => item == x)){
        return [pegat[4], pegat[5], "C6FFC2"];
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
    }else if(pesthi1.some(item => item == x)){
        return [pesthi1[4], pesthi1[5], "C6FFC2"];
    }else if(pesthi2.some(item => item == x)){
        return [pesthi2[4], pesthi2[5], "C6FFC2"];
    }else if(pesthi3.some(item => item == x)){
        return [pesthi3[4], pesthi3[5], "C6FFC2"];
    }else if(pesthi4.some(item => item == x)){
        return [pesthi4[4], pesthi4[5], "C6FFC2"];
    }
}




$('#submit').on('click', function () {
    $("#result").html("");

     //validasi nama
     var nama = $("#inputNama1").val().length;

	if (nama == 0) {			
         document.getElementById('nama-alert').innerHTML = "Nama Jangan dikosongin dong Broo!! :)";
         //return false;
     }else{
         document.getElementById('nama-alert').innerHTML = "";
     }
     
     

    //validasi tanggal
    var alertTgl1 = $("#inputTanggal1").val().length;
        if (alertTgl1 == 0) {			
            document.getElementById('tanggal-alert').innerHTML = "Tanggalnya Harus diisi gaes!!";
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
<br/><center><b>`+final[0]+` (`+layla[3]+`)</b></center><br/>
<blockquote>
`+final[1]+`

<div class='block-author'>
    <div class='block-img'>
      <img class='lazy' alt='Author' data-src='https://1.bp.blogspot.com/-TJveDHmopf8/YAczjGBH28I/AAAAAAAAHts/Ypusd4262wgzQAzJySOLp_jrldMW2_enwCLcBGAsYHQ/s1134/blangkon.png' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='/>
    </div>
    <div class='block-info'><span class='block-name'>dikutip dari berbagai sumber</span><span class='block-desc'>Source Code by <a href="https://www.panjinawangkung.com">PANJINAWANGKUNG</a></span>
    </div>
  </div>


</blockquote>
</div></div> 
                     `);
                     
    $('#myModal').modal('show');
  

})
