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

    var day = ["Kamis (8)", "Jum'at (6)","Sabtu (9)","Minggu (5)","Senin (4)","Selasa (3)","Rabu (7)","Kamis (8)"]
    var pasaran = ["Kliwon (8)","Legi (5)","Pahing (9)","Pon (7)","Wage (4)","Kliwon (8)"]

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
                Nama Kamu &nbsp; &nbsp; : <b>`+nama1+`</b><br/>
                Tanggal Lahir &nbsp;                         : <b>`+layla[0][0]+` `+layla[0][1]+` `+layla[0][2]+` </b><br/>
                Hari &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: <b>`+layla[1]+` </b><br/>
                Pasaran &nbsp; &nbsp;  &nbsp;    &nbsp;  &nbsp;   &nbsp;    : <b> `+layla[2]+` </b><br/>
                Neptu Weton&nbsp;    &nbsp;    : <b>`+layla[3]+` </b>
           
<i class='separate'></i>    
<center><div class='note noteAlert'><strong>`+final[0]+` (`+layla[3]+`)</strong></div></center>
<div class='note'>
`+final[1]+`

<div class='block-author'>
    <div class='block-img'>
      <img class='lazy' alt='Author' data-src='https://1.bp.blogspot.com/-TJveDHmopf8/YAczjGBH28I/AAAAAAAAHts/Ypusd4262wgzQAzJySOLp_jrldMW2_enwCLcBGAsYHQ/s1134/blangkon.png' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='/>
    </div>
    
  <div class='block-info'><span class='block-name'>Dikutip dari berbagai sumber</span><span class='block-desc'>Source Code by <a href="https://www.panjinawangkung.com">KENTHUS</a><br>
     Made with <svg class='svg-icon' width='10' height='10' viewBox='0 0 20 20'>
<path d='M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61'></path>
</svg> in JaTim, ID


    </span>
    </div>
  </div>
 
                     `);
                     
    $('#myModal').modal('show');
  

})
