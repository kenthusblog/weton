var hasil7 = "<div class='inpo'><b>Pendito Kang Lelaku (7)</b></div><div class='note'>Jumlah neptu ini dikenal dengan watak yang menyukai berpergian jauh. Sehingga sangat suka berpetualang ke berbagai tempat dengan tujuan tertentu. Selain itu, neptu ini juga memiliki watak yang sedikit pemalas serta kurang bisa berkomunikasi dengan baik.</div>";		
		
var hasil8 = "<div class='inpo'><b>Lakune Geni (8)</b></div><div class='note'>Jumlah neptu ini dikenal dengan wataknya yang cukup mendendam layaknya geni atau api. Karena pemilik weton ini disebut bisa memiliki amarah dan emosi yang bisa membakar jiwa bahkan meledak-ledak. Selain itu, watak neptu 8 juga disebut dengan cilik kaitane, gede pungkasane.</div>";
		
var hasil9 = "<div class='inpo'><b>Lakune Angin (9)</b></div><div class='note'>Selayaknya angin yang berhembus, neptu ini memiliki watak yang mudah goyah lantaran tidak memiliki pendirian kuat. Selain itu, neptu weton ini dikenal juga sangat kuat dari guna-guna serta lincah.</div>";
		
var hasil10 = "<div class='inpo'><b>Pendito Mbangun Teki (10)</b></div><div class='note'>Watak neptu weton ini adalah sangat suka memberi nasihat kepada orang lain. Tapi dirinya sendiri enggan untuk dikritik. Sehingga dikenal dengan istilah gelem nuturi wong, tapi nggak gelem dituturi. Walaupun begitu, ia memiliki kecerdasan tinggi dan nggak mudah tersinggung.</div>";
		
var hasil11 = "<div class='inpo'><b>Lakune Setan (11)</b></div><div class='note'>Watak neptu weton ini berdasarkan primbon Jawa adalah ela elu, nggak kena dadi pimpinan. Artinya, seseorang dengan weton ini tidak memiliki karakter selayaknya seorang pemimpin. Pasalnya ia sering dibuat bimbang dengan berbagai hal hingga kesulitan dalam pengambilan keputusan. Inilah yang menjadikan alasan mengapa weton tersebut disebut kurang cocok jika menjadi pemimpin.</div>";
		
var hasil12 = "<div class='inpo'><b>Lakune Kembang (12)</b></div><div class='note'>Watak neptu weton ini dikenal dengan istilah Gelem diturut tapi emoh dadi punjeran. Artinya ia sangat menyukai perdamaian. Karena sifatnya ini weton tersebut lebih sering mengalah untuk menghindari pertikaian. Selain itu, watak weton ini juga dikenal penurut serta sangat rajin menjalani sesuatu.</div>";	
		
var hasil13 = "<div class='inpo'><b>Lakune Lintang (13)</b></div><div class='note'>Watak neptu ini adalah memiliki pesona yang menakjubkan dan senang berpetualang. Sehingga istilahnya adalah emoh dadi punjeran, melok-melok ora iso digayuh.</div>";	
		
var hasil14 = "";	
		
var hasil15 = "<div class='inpo'><b>Lakune Geni (15)</b></div><div class='note'>Watak neptu ini dikenal dengan emosinya yang mudah terbakar layaknya api. Karenanya, weton ini dikenal juga dengan sifat pendendam, tidak suka diperintah, dan tegas.</div>";
		
var hasil16 = "<div class='inpo'><b>Lakune Bumi (16)</b></div><div class='note'>Watak neptu weton ini dikenal dengan sifatnya yang sangat mengayomi. Artinya ia memiliki hati yang lembut, namun jangan sekali-kali membuat amarahnya tersulut, sebab, ia bisa berubah menjadi lebih mengerikan.</div>";		
		
var hasil17 = "<div class='inpo'><b>Lakune Gunung (17)</b></div><div class='note'>Neptu weton ini dikenal sebagai pribadi yang pendiam, penurut, baik hatinya, hingga disebut punya sifat yang lambat. Karenanya, beberapa sifatnya ini justru bisa merugikan dirinya sendiri.</div>";
		
var hasil18 = "<div class='inpo'><b>Lakune Paripurna (18)</b></div><div class='note'>Weton ini memiliki watak yang cukup dominan serta egois. Dominan yang dimaksudkan dalam hal sebuah kekuasaan. Selain itu, penolakan menjadi hal paling tidak disukai oleh weton ini.</div>";
		
'use strict';
var HijriJS = {
    currentLanguage: 'en',
    today: function today() {
        var today = new Date();
        return this.gregorianToHijri(today.getFullYear(), (today.getMonth() + 1), today.getDate())
    },
    toGregorian: function toGregorian(dateString, splitter) {
        if (!splitter)
            splitter = "/";
        var arrDate = dateString.split(splitter);
        if (arrDate.length >= 3)
            return HijriJS.hijriToGregorian(arrDate[2], arrDate[1], arrDate[0])
    },
    toHijri: function toHijri(dateString, splitter) {
        if (!splitter)
            splitter = "/";
        var arrDate = dateString.split(splitter);
        if (arrDate.length >= 3)
            return HijriJS.gregorianToHijri(arrDate[2], arrDate[1], arrDate[0])
    },
    hijriToGregorian: function hijriToGregorian(year, month, day) {
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);
        if (year === "NaN" || month === "NaN" || day === "NaN")
            return "Error Input";
        var iy = year;
        var im = month;
        var id = day;
        var ii = iy - 1;
        var iln = (ii * 12) + 1 + (im - 1);
        var i = iln - 16260;
        var mcjdn = id + HijriJS.ummalqura_dat[i - 1] - 1;
        var cjdn = mcjdn + 2400000;
        return this.julianToGregorian(cjdn)
    },
    gregorianToHijri: function gregorianToHijri(pYear, pMonth, pDay) {
        var day = parseInt(pDay);
        var month = parseInt(pMonth) - 1;
        var year = parseInt(pYear);
        var m = month + 1;
        var y = year;
        if (m < 3) {
            y -= 1;
            m += 12
        }
        var a = Math.floor(y / 100.);
        var jgc = a - Math.floor(a / 4.) - 2;
        var cjdn = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day - jgc - 1524;
        a = Math.floor((cjdn - 1867216.25) / 36524.25);
        jgc = a - Math.floor(a / 4.) + 1;
        var b = cjdn + jgc + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        month = Math.floor((b - d) / 30.6001);
        day = (b - d) - Math.floor(30.6001 * month);
        if (month > 13) {
            c += 1;
            month -= 12
        }
        month -= 1;
        year = c - 4716;
        var mcjdn = cjdn - 2400000;
        for (var i = 0; i < HijriJS.ummalqura_dat.length; i++) {
            if (HijriJS.ummalqura_dat[i] > mcjdn)
                break
        }
        var iln = i + 16260;
        var ii = Math.floor((iln - 1) / 12);
        var iy = ii + 1;
        var im = iln - 12 * ii;
        var id = mcjdn - HijriJS.ummalqura_dat[i - 1] + 1;
        var ml = HijriJS.ummalqura_dat[i] - HijriJS.ummalqura_dat[i - 1];
        return new this.HDate(iy, im, id)
    },
    julianToGregorian: function julianToGregorian(julianDate) {
        var z = Math.floor(julianDate + 0.5);
        var a = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + a - Math.floor(a / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);
        var day = b - d - Math.floor(e * 30.6001);
        var month = e - (e > 13.5 ? 13 : 1);
        var year = c - (month > 2.5 ? 4716 : 4715);
        if (year <= 0) {
            year--
        }
        return new Date(year + "/" + (month + 1) + "/" + day)
    },
    HDate: function HDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.toString = function toString() {
            return this.format(this.year, this.month, this.day, "dd/mm/yyyyN")
        }
        this.toFormat = function toFormat(format) {
            return this.format(this.year, this.month, this.day, format)
        }
        this.format = function useFormat(year, month, day, format) {
            if (HijriJS.vlidateHijri(year, month, day)) {
                var newFormat = format;
                if (newFormat.indexOf("dd") !== -1)
                    newFormat = newFormat.replace("dd", day < "10" ? "0" + day : day);
                else newFormat = newFormat.replace("d", day);
                if (newFormat.indexOf("mm") !== -1)
                    newFormat = newFormat.replace("mm", month < "10" ? "0" + month : month);
                else newFormat = newFormat.replace("m", month);
                if (newFormat.indexOf("yyyy") !== -1)
                    newFormat = newFormat.replace("yyyy", year);
                else newFormat = newFormat.replace("yy", year.substr((year.length - 2), 2));
                newFormat = newFormat.replace("N", HijriJS.lang[HijriJS.currentLanguage].notation);
                return HijriJS.lang[HijriJS.currentLanguage].formatLocale(newFormat)
            }
        }
    },
    vlidateHijri: function vlidateHijri(year, month, day) {
        if (month < 1 || month > 12)
            return !1;
        if (day < 1 || day > 30)
            return !1;
        return !0
    },
    validateGregorian: function validateGregorian(year, month, day) {
        if (month < 1 || month > 12)
            return !1;
        if (day < 1 || day > 31)
            return !1;
        return !0
    },
    lang: {
        'en': {
            notation: 'H',
            zero: '0',
            one: '1',
            two: '2',
            three: '3',
            four: '4',
            five: '5',
            six: '6',
            seven: '7',
            eight: '8',
            nine: '9',
            monthNames: ['Muharram', 'Safar', 'Rabi\' al-awwal', 'Rabi\' al-thani', 'Jumada al-awwal', 'Jumada al-thani', 'Rajab', 'Sha\'aban', 'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'],
            monthShortNames: ['Muh', 'Saf', 'Rab1', 'Rab2', 'Jum1', 'Jum2', 'Raj', 'Sha\'', 'Ram', 'Shaw', 'DhuQ', 'DhuH'],
            formatLocale: function(hDate) {
                return hDate
            }
        }
    },
    ummalqura_dat: [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348, 30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939, 30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530, 31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120, 32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711, 32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302, 33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893, 33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483, 34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074, 35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665, 35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254, 36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845, 36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436, 37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027, 38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617, 38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208, 39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798, 39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389, 40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980, 41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570, 41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161, 42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751, 42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342, 43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932, 43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523, 44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114, 45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704, 45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295, 46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885, 46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476, 47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066, 48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657, 48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248, 49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838, 49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429, 50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019, 51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611, 51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200, 52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792, 52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383, 53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973, 54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564, 54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154, 55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745, 55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335, 56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926, 56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517, 57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107, 58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698, 58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288, 59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879, 59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469, 60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061, 61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651, 61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242, 62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832, 62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423, 63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014, 64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603, 64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195, 65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785, 65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376, 66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967, 66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557, 67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148, 68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738, 68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330, 69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919, 69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510, 70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101, 71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691, 71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282, 72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872, 72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464, 73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053, 74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645, 74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235, 75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826, 75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416, 76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007, 77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598, 77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188, 78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779, 78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369, 79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960, 79990]
};
		
var pecah = {
    'Senin': {
        'Pon': 'Senin (4) Pon (7)',
        'Wage': 'Senin (4) Wage (4)',
        'Kliwon': 'Senin (4) Kliwon (8)',
        'Legi': 'Senin (4) Legi (5)',
        'Pahing': 'Senin (4) Pahing (9)'
    },
    'Selasa': {
       'Pon': 'Selasa (3) Pon (7)',
        'Wage': 'Selasa (3) Wage (4)',
        'Kliwon': 'Selasa (3) Kliwon (8)',
        'Legi': 'Selasa (3) Legi (5)',
        'Pahing': 'Selasa (3) Pahing (9)'
    },
    'Rabu': {
        'Pon': 'Rabu (7) Pon (7)',
        'Wage': 'Rabu (7) Wage (4)',
        'Kliwon': 'Rabu (7) Kliwon (8)',
        'Legi': 'Rabu (7) Legi (5)',
        'Pahing': 'Rabu (7) Pahing (9)'
    },
    'Kamis': {
       'Pon': 'Kamis (8) Pon (7)',
        'Wage': 'Kamis (8) Wage (4)',
        'Kliwon': 'Kamis (8) Kliwon (8)',
        'Legi': 'Kamis (8) Legi (5)',
        'Pahing': 'Kamis (8) Pahing (9)'
    },
    'Jumat': {
        'Pon': 'Jumat (6) Pon (7)',
        'Wage': 'Jumat (6) Wage (4)',
        'Kliwon': 'Jumat (6) Kliwon (8)',
        'Legi': 'Jumat (6) Legi (5)',
        'Pahing': 'Jumat (6) Pahing (9)'
    },
    'Sabtu': {
        'Pon': 'Sabtu (9) Pon (7)',
        'Wage': 'Sabtu (9) Wage (4)',
        'Kliwon': 'Sabtu (9) Kliwon (8)',
        'Legi': 'Sabtu (9) Legi (5)',
        'Pahing': 'Sabtu (9) Pahing (9)'
    },
    'Minggu': {
        'Pon': 'Minggu (5) Pon (7)',
        'Wage': 'Minggu (5) Wage (4)',
        'Kliwon': 'Minggu (5) Kliwon (8)',
        'Legi': 'Minggu (5) Legi (5)',
        'Pahing': 'Minggu (5) Pahing (9)'
    }
};
		
		
		
		
		
var neptu = {
    'Senin': {
        'Pon': 11,
        'Wage': 8,
        'Kliwon': 12,
        'Legi': 9,
        'Pahing': 13
    },
    'Selasa': {
        'Pon': 10,
        'Wage': 7,
        'Kliwon': 11,
        'Legi': 8,
        'Pahing': 12
    },
    'Rabu': {
        'Pon': 14,
        'Wage': 11,
        'Kliwon': 15,
        'Legi': 12,
        'Pahing': 16
    },
    'Kamis': {
        'Pon': 15,
        'Wage': 12,
        'Kliwon': 16,
        'Legi': 13,
        'Pahing': 17
    },
    'Jumat': {
        'Pon': 13,
        'Wage': 10,
        'Kliwon': 14,
        'Legi': 11,
        'Pahing': 15
    },
    'Sabtu': {
        'Pon': 16,
        'Wage': 13,
        'Kliwon': 17,
        'Legi': 14,
        'Pahing': 18
    },
    'Minggu': {
        'Pon': 12,
        'Wage': 9,
        'Kliwon': 13,
        'Legi': 10,
        'Pahing': 14
    }
};

		
var sifat = {
    'Senin': {
        'Pon': 'Orang yang punya weton ini, adalah seorang yang penuh kontradiksi. Ia mungkin terlihat sebagai orang yang tangguh, yang suka tampil kuat, bahkan dengan bangga memamerkan kekayaan atau kepandaiannya. Tapi, ia sebenarnya adalah seorang yang sangat perasa. Dan ia akan selalu membuat orang lain terkejut, ketika mendapatinya memiliki sikap yang begitu ramah, sopan, dan bertanggung jawab.',
        'Wage': 'Orang yang punya weton ini, jarang terjebak dalam keadaan yang memalukan. Itu karena ia suka merencanakan dan menimbang pilihannya dengan hati-hati, jauh sebelum mengambil tindakan. Ia juga termasuk orang yang cukup jujur dan tidak keberatan mendengarkan permasalahan orang lain. Berkat pendekatannya yang tenang, ia mampu tampil meyakinkan di depan masyarakat, sehingga berbakat menjadi diplomat yang baik. Tapi, sekali marah, ia tidak akan mau menerima alasan apapun. Dan ia terkadang begitu ndableg, keras kepala, sehingga lebih baik dibiarkan seorang diri untuk menjadi tenang kembali.',
        'Kliwon': 'Orang yang punya weton ini mempunyai prinsip kuat untuk â€œkehormatan keluargaâ€. Pengabdiannya terhadap orang tua, anak, kakak-adik, hingga kerabat jauh, patut diacungi jempol, karena bersedia mengorbankan semuanya untuk membela keluarganya itu. Ia juga memiliki perasaan yang kuat terhadap daerah asal, bahkan negara tempat kelahiran. Sayangnya, segala hal cenderung terlalu dimasukkan hati, sehingga ia mudah tersinggung. Meskipun begitu, pada dasarnya ia mudah memaafkan dan tidak suka mendendam. Kepandaiannya dalam hal kata-kata, memungkinkan dirinya menjadi seorang pembicara atau penulis yang baik. Dan karena keramahan, kesopanan, serta kelembutannya yang terpuji, membuat orang lain menghargainya.',
        'Legi': 'Orang yang punya weton ini memiliki kepribadian yang cemerlang. Sikapnya terlalu sopan, murah hati, dan tidak punya keinginan untuk menyakiti perasaan orang lain. Ia juga suka berkeliling dan melihat-lihat dunia, baik secara fisik ataupun secara intelektual. Meskipun suka berdebat, tapi ia tidak bersifat antagonis. Tapi terkadang ia suka mencampuri urusan orang lain.',
        'Pahing': 'Orang yang punya weton ini suka menyampaikan pendapat dengan tegas. Ia tidak akan terpengaruh oleh omongan orang lain, bila tidak menemukan alasan untuk mempercayainya. Meskipun demikian, ia adalah orang yang perasa, jujur, beriba, dan bercita-cita tinggi. Ia juga seorang pekerja giat yang tidak suka menghambur-hamburkan hasil jerih payah. Dan ia punya perasaan yang sensitif sehingga sering memasukkan setiap perkataan atau tindakan orang lain ke dalam hati.'
    },
    'Selasa': {
        'Pon': 'Orang yang punya weton ini sangat suka akan kemewahan. Tingkat pemborosannya memang tergantung pada kemampuan finansial yang ada, tetapi keinginan yang kuat akan kehidupan yang serba mewah akan selalu ada. Meskipun cenderung untuk melindungi perasaannya sendiri, ia dapat menjadi sangat setia dan murah hati kepada orang-orang yang sesuai dengan standar pribadinya. Dan saat ada seseorang yang dekat dengannya, berarti seseorang itu telah menjadi miliknya secara utuh. Juga karena sering terbawa kekhawatiran akan ancaman, maka tidak mengherankan jika rasa cemburu selalu menyertainya dalam setiap hubungan. Kemudian meskipun ia terkenal bersifat tertutup dan berpendirian kaku, namun dapat bersikap cukup ramah dalam kehidupan sosial.',
        'Wage': 'Orang yang punya weton ini tidak suka membesar-besarkan diri. Bahkan, ia lebih sering mengalah kepada orang yang lebih cerewet daripada mempersoalkan hal-hal yang remeh. Meskipun demikian, ia punya semangat baja. Memang, beberapa orang mungkin mengatakannya sedikit kaku, bahkan ada yang menganggap teramat ndableg. Meski demikian, terkadang lawan-lawannya akan mengagumi nafsunya yang besar akan ilmu pengetahuan dan tekad kuat yang memungkinkan ia menelaah secara mendalam hal-hal yang menarik perhatiannya. Kemudian jika ia merasa terancam, egonya yang sensitif akan sangat mudah terusik sehingga cenderung bersikap cemburu. Dan bila keadaan mulai memburuk ia akan tetap bertahan.',
        'Kliwon': 'Orang yang punya weton ini terkenal bersifat ramah dan pendiriannya keras. Ia juga begitu pandai mengungkapkan kata-kata yang tepat dalam berbagai situasi sehingga orang lain cukup mudah menyukainya. Pada saat-saat tertentu, ia bisa bersikap sangat kritis terhadap orang lain. Dan mungkin itu adalah caranya untuk membantu orang lain menjadi lebih sempurna.',
        'Legi': 'Orang yang punya weton ini memiliki kepribadian yang kuat, sehingga tidak suka dihalangi dan tidak mau mengalah, meskipun dalam hal sepele. Sesungguhnya, popularitasnya tidak akan berkurang bila ia mau belajar sedikit berkompromi. Dorongan untuk berkuasa, malah akan membuatnya membuang banyak tenaga dalam adu kekuatan dengan teman, pasangan, atau majikan. Dan sebenarnya, ia adalah tipe yang jujur, suka bekerja keras, memiliki cita-cita tinggi, dan minat yang tak terpuaskan terhadap ilmu pengetahuan.',
        'Pahing': 'Orang yang punya weton ini mempunyai sifat terampil, santai, dapat menerima orang lain, suka menolong, dan mau berkorban banyak bagi orang yang mereka sayangi. Tetapi, jika ada yang membuatnya marah, ia mempunyai reputasi terburuk dalam hal membalas dendam secara membabibuta. Meskipun ia cenderung beruntung, tapi tetap harus belajar untuk mengendalikan suatu kehausan pribadi, yang membuat mereka agak serakah. Dengan begitu, ia dapat hidup tenang dan berbahagia, dikelilingi banyak teman yang baik dan menarik.'
    },
    'Rabu': {
        'Pon': 'Orang yang punya weton ini, selalu merencanakan tindakannya dengan hati-hati, terbuka terhadap peluang yang baru, dan tidak mudah putus asa. Ia juga memiliki beberapa keterampilan sosial, sehingga sejelek apapun wajahnya, tetap mudah bergaul dengan orang lain. Sisi buruknya, adalah suka pamer. Mungkin itu karena ia haus perhatian sewaktu kecil, sehingga kini merasa harus membuat kagum semua orang, dengan kepandaian atau kekayaan yang dimiliki. Dan dengan menjadi diri sendiri, orang lain pun akan menyukainya.',
        'Wage': 'Orang yang punya weton ini, secara umum bersifat baik hati, ramah, serta senantiasa menjunjung tinggi kejujuran dan niat baik. Meskipun terkadang kata-katanya agak keras, tapi tetap mudah bergaul dengan orang lain. Saat dihadapkan pada suatu pilihan, ia akan menimbang dengan cermat, dan dalam hal ini ia memiliki cukup banyak kebijaksanaan. Ia juga sangat menghargai uangnya, sehingga dapat bersikap sangat irit. Meskipun begitu, terkadang ia juga suka menikmati barang-barang dan pelayanan yang mewah.',
        'Kliwon': 'Orang yang punya weton ini, adalah seorang pemikir sejati. Dengan sikap lembut disertai gaya duniawi yang memesona, ia mudah menarik orang lain.  Bakat alaminya akan bahasa dan kepekaannya terhadap perasaan orang lain, menyiratkan bahwa ia memiliki potensi untuk menjadi seorang pembicara besar. Banyak di antara orang yang punya weton ini telah menjadi orator atau penulis yang handal. Yang perlu diwaspadai oleh pemilik weton ini, adalah jangan terlalu mudah percaya pada kata-kata manis, karena itu akan membuat dia mudah diperdaya. Dan ia perlu belajar untuk tidak terlalu memasukkan kritikan orang lain ke dalam hati.',
        'Legi': 'Orang yang punya weton  ini menghormati tata krama dan berpegang teguh pada falsafah hidupnya. Kejujuran adalah salah satu prioritas, sehingga ia membenci ketidakadilan. Ia juga sangat setia terhadap teman tercinta yang begitu banyak. Dan karena kata-katanya yang bijaksana, banyak orang mengaguminya.',
        'Pahing': 'Orang yang punya weton ini, suka mempertimbangkan segala sesuatu sebelum melakukan suatu tindakan. Akan direnungkannya segala kemungkinan hingga yakin terhadap hasil yang akan dicapai. Ia juga tidak suka berbagi dengan yang lain. Kewaspadaan mereka mungkin terlihat berlebihan saat rasa curiga mereka timbul. Pemilik weton ini sangat perlu belajar untuk bersikap lebih santai dan menurunkan pertahanan mereka. Dan untungnya mereka memiliki prinsip untuk tidak mencampuri urusan orang lain.'
    },
    'Kamis': {
        'Pon': 'Orang yang punya weton ini, biasanya memiliki cita-cita tinggi dan tujuan-tujuan mulia yang berusaha diwujudkan sekuat tenaga. Pikirannya cerdas dan penuh rasa ingin tahu, serta suka mempelajari hal-hal baru yang dapat memperluas wawasan. Tapi, dengan kecenderungan untuk berpikir dan bertindak dalam skala besar, kebanggaan serta rasa percaya terhadap kekayaan materi atau kepandaian, suatu saat dapat dengan mudah menjadi kelemahannya. Mengenai hubungan sosialnya, ia bukan tipe orang yang suka banyak bergaul dan tidak tertarik pada urusan orang lain. Dan ia cukup puas dengan mengandalkan kemampuan pribadi untuk memahami suatu situasi dan menghindarkan diri dari pengaruh orang lain.',
        'Wage': 'Orang yang punya weton ini, biasanya memiliki cita-cita setinggi langit. Tapi, ia juga berpegang pada aturan dan dapat cukup berhati-hati dalam mewujudkan tujuan, sehingga seringkali tercapai. Ia juga cenderung pandai dan sering terpaku pada jalannya sendiri serta tidak menghargai saran yang tidak diinginkannya. Meskipun demikian, ia cenderung tampil baik dalam pergaulan dan cukup memesona orang lain dengan sopan-santunnya. Dan sebenarnya ia tidak suka menunjukkan perasaan yang sebenarnya, tetapi mudah dibujuk dengan rayuan, hingga pamer dengan sendirinya.',
        'Kliwon': 'Orang yang punya weton ini memiliki rencana-rencana besar dalam hidupnya. Bahkan, karena imajinasinya yang terlalu aktif, terkadang cita-citanya sedikit terlalu besar dan tidak setara dengan keadaannya. Meskipun demikian, ia tidak mudah menyerah, dan sikapnya yang optimis dan terhormat akan membuatnya diterima dengan baik oleh kebanyakan orang. Ia, sebenarnya juga suka menjadi pemimpin, akan tetapi sebaiknya terlebih dulu ia mengendalikan kecenderungannya yang mudah terpengaruh.',
        'Legi': 'Orang yang punya weton ini, memiliki cita-cita yang mulia dan nilai-nilai yang tinggi. Tidak terlalu sulit ia memperoleh dukungan, sebab biasanya dikelilingi oleh banyak teman dari pergaulannya yang luas. Meskipun termasuk tipe yang selalu membutuhkan pujian, tapi kadang ia amat bijaksana. Itu  dikarenakan kemampuannya untuk melihat prospek jangka panjang dari suatu hal. Masalahnya, meskipun ia cenderung berpandangan luas, tapi sering terjerumus dalam pernik-pernik kehidupan sehari-hari. Sebuah pertanyaan untuknya: Benarkah hanya keinginan untuk membantu ataukah dorongan tersembunyi untuk menguasai lingkungan, hingga selalu membuat mereka mencampuri urusan orang lain?' ,
        'Pahing': 'Orang yang punya weton ini, memiliki cita-cita yang besar disertai semangat baja. Ia selalu siaga mencari kesempatan untuk memajukan kepentingannya. Ia juga sangat mempedulikan keluarga dan selalu siap membantu saudara yang membutuhkannya. Hal yang perlu diwaspadainya, adalah kecenderungan untuk selalu mengambil kesimpulan tanpa mengetahui fakta-fakta yang lengkap. Terutama dalam pergaulan, yaitu kecenderungan suka membantah tanpa lebih dahulu mengatur pikiran dan kata-kata, hingga membuat orang lain merasa tidak dihargai.'
    },
    'Jumat': {
        'Pon': 'Orang yang punya weton ini, biasanya berpembawaan tenang, serius, dan bijaksana dalam berbicara. Ia adalah tipe yang berjiwa sosial, murni, dan jujur serta mudah bersimpati terhadap orang yang tertindas. Ia mudah beradaptasi dengan orang-orang di sekitarnya dan dapat menyesuaikan diri dengan berbagai situasi seperti seekor bunglon. Akan tetapi, kelebihan ini juga dapat menjadi kelemahan terbesar, karena tidak disertai rasa percaya diri yang kuat, ia dapat dengan mudah dipengaruhi oleh pendapat dan kebiasaan buruk orang lain. Orang yang punya weton ini, sebaiknya banyak bergaul dengan berbagai jenis orang.',
        'Wage': 'Orang yang punya weton ini, terkenal sangat mengasihi dan mudah menaruh iba kepada sesama manusia. Ia juga sangat jujur dan setia. Tidak pernah membesar-besarkan kemampuannya sendiri, padahal di dalam hati ia sesungguhnya adalah orang yang tegar. Sangatlah sulit membuatnya mengubah keputusan yang telah ditetapkan. Keyakinannya itu memang sangat mengagumkan atau bahkan hanya suatu kebodohan. Dan saran buatnya, mungkin ia perlu belajar menerima saran orang lain yang bermaksud baik.',
        'Kliwon': 'Orang yang punya weton ini, mempunyai kesabaran dan kemurahan hati. Mungkin hal itulah yang mempengaruhi gayanya yang halus. Ia dapat menjadi seorang pemimpin yang baik, karena mempunyai cara berpikir yang luas dan dapat mempengaruhi banyak orang dengan kata-katanya yang pandai. Meskipun terkadang ia sedikit malas, tetapi orang-orang akan tetap mencintainya. Yang jelas, pemilik weton ini tidak akan pernah kekurangan teman.',
        'Legi': 'Orang yang punya weton ini, cenderung bersifat jujur dan kadang terlalu jujur. Itu karena ia adalah tipe orang yang suka mengungkapkan pikiran mereka secara terbuka. Tentang pendiriannya, ia cukup teguh, hingga terkadang malah menghambat kemampuannya untuk menerima orang lain secara apa adanya. Bila amarahnya terpancing, ia dapat bertindak ekstrim. Meskipun demikian, ia setia dan murah hati terhadap orang-orang yang dicintainya. Dan simpatinya pun mudah timbul sehingga tidak keberatan untuk untuk membantu teman atau bahkan orang asing.',
        'Pahing': 'Orang yang punya weton ini, pada dasarnya merupakan seorang pembicara yang menyenangkan dengan cita-cita yang tinggi dan hati yang jujur. Meskipun kelihatannya begitu mudah dimanfaatkan orang lain, sebenarnya ia mampu bersikap gigih. Ia juga mampu bersikap ganas saat mengalami hari yang menjengkelkan.'
    },
    'Sabtu': {
        'Pon': 'Orang yang punya weton ini, memiliki ego yang besar dan selalu ingin menjadi penguasa di dalam lingkungannya. Meskipun demikian, Ia bukanlah tipe orang yang sulit dalam hal memberi ampun. Bila seseorang mengecewakannya, dan kemudian memohon maaf serta mengaku salah, ia akan memaafkan dan melupakan kesalahan itu dengan cukup mudah. Ia juga suka membayangkan diri sebagai orang yang kaya dan terkenal. Hal itu tidak berarti ia materialistis. Mungkin hal itu berhubungan dengan masa kecil yang kurang bahagia dari segi emosional atau ekonomi.',
        'Wage': 'Orang yang punya weton ini, memiliki sifat teguh pada pendirian. Ia juga sangat mudah naik darah jika rencananya tidak berjalan sesuai dengan keinginan. Barangkali ia akan sedikit banyak bergelut dengan masalah seputar kepercayaan dan rasa memiliki, karena cenderung bersifat cemburuan. Meskipun demikian, ia sangat setia dan murah hati terhadap orang-orang yang disukai. Di samping itu, ia memiliki bakat besar dalam mengatur rumahtangga agar tetap berjalan tenang. Dan ia benar-benar menyukai kemewahan serta sangat menghargai barang-barang yang berkualitas tinggi.',
        'Kliwon': 'Orang yang punya weton ini, punya sifat begitu ramah, sopan, mudah terkesan, dan cenderung memperlakukan semua orang dengan baik, termasuk musuhnya sendiri. Ia juga pintar mengucapkan kata-kata yang menyenangkan. Bahkan, ia termasuk yang memiliki bakat alamiah dalam berbicara dan menulis. Tapi ia tidak dikenal sebagai orang tegar yang berpegang pada pendiriannya. Akan sangat berguna jika ia mau mengembangkan sedikit keberanian dan ketegasan, karena kecenderungannya yang sangat mudah menyerah pada rintangan pertama. Dan biasanya, ia akan memperhitungkan segala tindakan yang diambil dengan cermat. Pertanyaan untuknya adalah: Mengapa mereka sangat mudah terkecoh oleh penampilan seseorang atau sesuatu?',
        'Legi': 'Orang yang punya weton ini, adalah penggemar gaya hidup yang santai dan mewah. Baginya, kualitas selalu menjadi yang terpenting. Hal itu berlaku juga pada kehidupan sosial. Dan ia ingin berada di sekitar orang-orang baik yang ber-IQ tinggi. Ia sendiri tidak kalah dari segi otak. Untungnya ia juga dapat menghargai pandangan orang lain. Meskipun tidak dipungkiri, omongannya terkadang sedikit tajam. Sebuah pertanyaan untuknya adalah: Mengapa orang lain mau bersikap sarkatis (kasar) terhadap anda?',
        'Pahing': 'Orang yang punya weton ini, memiliki semangat hidup yang tinggi, meskipun terkadang berakibat pada kecerobohan. Bila berhubungan dengan suatu hal yang menyangkut materi, ia akan bersikap lebih waspada. Ia juga salah satu tipe yang selalu siap membantu teman yang sedang menderita. Dan kadang, ia juga bersifat lekas naik darah, tapi cepat reda dan melupakan penyebabnya.'
    },
    'Minggu': {
        'Pon': 'Orang yang punya weton ini, termasuk tipe yang sensitive dan tertutup. Mungkin karena takut disakiti, ia selalu melindungi perasaannya dan selalu berusaha terlihat baik di depan teman-temannya. Walaupun ia mungkin saja mengambil cara yang tidak langsung, tetapi lama-lama ia pasti merebut kesempatan untuk memamerkan kelebihannya, entah dari segi material ataupun intelektual. Dan ia bisa menjadi seorang diplomat yang piawai, bahkan seorang manipulator yang licik.',
        'Wage': 'Orang yang punya weton ini, biasanya bersifat pemurah, mudah menaruh iba, dan tahu cara-cara untuk menghibur orang yang sedang menderita. Meskipun ia pandai menenangkan perasaan orang lain, ia tidak akan menunjukkan perasaan mereka sendiri dengan mudah. Ia juga pekerja keras. Tapi, terkadang ia terlalu teguh dalam pendirian, hingga  sangat keras kepala. Dan ia cocok menjadi diplomat, doktor UGD, atau pemadam kebakaran.',
        'Kliwon': 'Orang yang punya weton ini, merupakan tipe pendiam, berpendirian tegas, dan berkemauan keras. Ia juga pandai bersosialisasi, pandai berbicara, dan memiliki bakat politik yang besar. Meskipun cukup sensitif, tetapi jangan berharap orang lain akan mempercayainya pada saat mendengar ia beradu pendapat. Ia juga sangat pandai dalam membuat orang selalu menduga-duga perasaannya.',
        'Legi': 'Orang yang punya weton ini, merupakan tipe orang yang tegas dan pendiam. Ia terlihat sangat tenang dan terkendali, bahkan saat terbakar amarah, senyuman misterius tidak akan pernah lepas dari bibirnya. Hanya sedikit orang yang diperkenankan mengetahui isi hatinya yang terdalam. Maka dari itu, pada saat ia melepaskan perasaan, baik cinta ataupun benci, hal itu akan menjadi pengalaman yang luar biasa bagi orang-orang di sekitarnya. Ia juga berwatak cerdik, bahkan terkadang licik, dan pandai dalam mengorek rahasia. Selain itu, ia mudah tertarik pada hal-hal yang aneh, mistis, atau misterius. Mencampuri urusan orang lain, adalah sangat menyenangkan baginya. Dan ia cocok menjadi seorang detektif, agen rahasia, atau psikiater yang baik.',
        'Pahing': 'Orang yang punya weton ini, diakui memiliki kemampuan yang mengagumkan di bidang apa saja yang digelutinya. Ia adalah pribadi-pribadi kuat yang mampu mempertahankan pendapatnya dalam keadaan sulit sekalipun. Ia juga berpikiran luas dan cenderung ditanggapi dengan baik dalam lingkungan sosial. Anehnya, kelompok ini dapat benar-benar ahli dalam menyembunyikan perasaan-perasaan yang tidak enak, seperti kemarahan, kesedihan, atau penyesalan. Namun, semoga sifat ini tidak berakibat pula pada terpendamnya perasaan-perasaan yang semestinya ditunjukkan secara terbuka kepada orang-orang yang mereka cintai. Dan ia cocok menjadi seorang politikus, doktor UGD, atau agen rahasia'
    }
};
		
		
var kerja = {
    'Senin': {
        'Pon': 'Dengan bakat kepemimpinan yang dimilikinya dan sifatnya yang tak bisa didikte, maka orang dengan weton kelahiran Senin Pahing akan lebih cocok menjadi seorang pemimpin, baik itu pemimpin dalam kepemerintahan, maupun pemimpin dalam usahanya. Jika Anda kebetulan memiliki weton kelahiran ini, maka Anda pasti lebih menyukai semua kegiatan yang mengasah kepemimpinan Anda',
        'Wage': 'Dengan sifat, watak, dan karakter kepribadian yang dimilikinya, orang dengan weton Senin Wage hanya akan cocok pada beberapa jenis pekerjaan saja. Mereka cocok untuk bekerja sebagai karyawan, pegawai, atau pekerjaan lain yang tidak membutuhkan kesabaran tinggi. Jika menjalankan usahanya sendiri, ia akan mengalami aral dan rintangan yang akan menguras mentalnya. Namun jika ketangguhan jiwanya telah teruji, ia akan memperoleh jalan usahanya yang langgeng dan bisa menjadi bekal hidup',
        'Kliwon': 'Watak, karakter, dan sifat dari kepribadian yang dimilikinya membuat orang dengan weton Senin Kliwon bisa cocok bekerja dibidang manapun, kecuali pekerjaan-pekerjaan yang membutuhkan ketelitian, seperti peneliti, akuntan, bendahara, dan lain sebagainya.',
        'Legi': 'Atas semua sifat, watak, serta karakter yang dimilikinya, seorang dengan weton kelahiran Senin Legi umumnya bisa cocok bekerja dengan semua jenis bidang pekerjaan, terlebih pada bidang sosial kemasyarakatan. Mereka bisa menjadi pemimpin, pegawai negeri, atau karyawan. Mereka juga berbakat menjadi seorang pedagang atau pengusaha.',
        'Pahing': 'Dengan semua sifat dan watak yang dimilikinya, orang berweton Senin Pahing hanya akan cocok pada beberapa usaha dan pekerjaan saja. Mereka lebih tepat bekerja dan mencari penghasilan dengan kemampuan dirinya sendiri. Menjadi seorang wirausahawan dan menjadi bos untuk usahanya sendiri adalah yang paling baik bagi dirinya. Mereka tidak cocok bekerja sebagai karyawan, PNS, pekerja, buruh, atau segala pekerjaan yang mewajibkannya menuruti perintah orang lain'
    },
    'Selasa': {
        'Pon': 'Dengan watak, sifat, dan karakter yang dimilikinya, orang berweton Selasa Pon cendung lebih cocok bekerja sebagai pedagang besar. Kemampuannya dalam berkomunikasi merupakan modal baginya untuk dapat menjual sesuatu pada orang di sekitarnya dan memperoleh keuntungan. Orang weton Selasa Pon tak cocok bekerja sebagai pekerja yang diberi perintah. Pendapatnya yang sering berlawanan dan kegemarannya dalam berdebat membuat mereka tak akan bertahan lama menjadi seorang PNS, TNI, POLRI, atau sebagai karyawan swasta.',
        'Wage': 'Berdasarkan sifat, watak, dan karakter yang dimilikinya, orang yang berweton Selasa Wage umumnya hanya cocok pada profesi atau pekerjaan yang terbatas yaitu pekerjaan-pekerjaan yang bergaji tetap dalam posisi sebagai bawahan. Pekerjaan yang cocok bagi mereka misalnya PNS, Polisi, Tentara, karyawan swasta, buruh, petani, atau pesuruh. Dalam primbon weton disebutkan bahwa orang berweton Selasa Wage memiliki rakam Mantri Sinaroja, artinya mereka akan mampu mengerjakan tugas dengan baik sesuai perintah. Mereka akan sabar dalam pekerjaannya dan tak pantang menyerah atas segala kegagalan yang dihadapi',
        'Kliwon': 'Berdasarkan watak, sifat, serta karakter yang dimilikinya, seorang yang lahir di weton Selasa Kliwon sangat cocok jika bekerja sebagai seorang pedagang. Kemampuannya dalam berkomunikasi dan wawasannya yang luas merupakan modal bagi dirinya untuk meraup rejeki di jalur niaga. Selain sebagai pedagang, orang berweton Selasa Kliwon juga cocok menjalani profesi sebagai seorang pemimpin, entah itu pemimpin komunitas, pemimpin daerah, maupun pemimpin untuk usahanya sendiri.',
        'Legi': 'Berdasarkan sifat, karakter, dan watak yang dimilikinya, orang yang terlahir di weton Selasa Legi umumnya cocok bekerja sebagai wirausahawan, pemimpin, atau pengajar. Orang berweton Selasa Legi tidak cocok menjadi bawahan, jika menjadi bawahan ia tidak akan lama dipecat atau mengundurkan diri karena terlalu sering membantah atasannya. Ia lebih cocok mengais rejeki dengan menjadi wirausahawan dan menjadi bos untuk usahanya sendiri. Orang berweton Selasa Legi juga akan cocok menjadi pemimpin, misalnya kepala desa, ketua organisasi, camat, bupati, dan seterusnya. Keberanian dan kehati-hatiannya dalam memutuskan sesuatu adalah modal besar baginya untuk menjadi seorang pemimpin yang sukses. Mereka yang terlahir di weton Selasa Legi juga tepat bila menjadi seorang guru, dosen, atau pengajar lainnya. Ia bisa mengarahkan murid yang dipimpinnya secara ikhlas untuk mencapai tingkat kesuksesan tertinggi dengan dasar watak pemberi dan murah hati yang dimilikinya.',
        'Pahing': 'Menurut pada sifat, watak, dan karakter yang dimilikinya, orang-orang berweton Selasa Pahing lebih cocok bekerja sebagai bos untuk dirinya sendiri. Ia tidak memiliki mental sebagai pekerja. Ia lebih pas menjadi seorang pedagang, petani, makelar, atau seorang wirausahawan dalam mencari jalan rejeki. Mentalnya yang kuat dan sifatnya sering membantah membuat orang yang lahir di weton Selasa Pahing tak akan bertahan lama menjadi seorang yang bekerja pada orang lain'
    },
    'Rabu': {
        'Pon': 'Dengan watak, sifat, dan karakter yang dimiliki, orang berweton Rabu Pon cendung lebih cocok bekerja sebagai seniman atau orang yang menjual kemampuannya untuk mendapat nafkah. Sikapnya yang urakan, tidak disiplin, dan tidak bisa memegang tanggung jawab akan kontradiktif bila dipasangkan dengan pekerjaan sebagai karyawan atau profesi lain yang mendapat perintah dari orang lain, seperti PNS, POLRI, TNI, atau sebagai karyawan swasta.',
        'Wage': 'Dari watak dan karakter yang dimilikinya tersebut, orang berweton lahir Rabu Wage umumnya akan cocok bila bekerja pada orang lain. Dalam mencari nafkah, mereka tidak dapat mengandalkan kemampuan dirinya sendiri dan mandiri. Mereka hanya dapat menerima perintah dan menjalankannya dengan baik. Dalam primbon disebutkan pula bahwa orang berweton Rabu Wage memiliki rakam Sumur Sinamba, artinya jiwa mereka sangat erat dengan pengajaran. Oleh karena itu, mereka juga cocok bila bekerja sebagai guru, dosen, atau pelatih.',
        'Kliwon': 'Seorang yang lahir di weton Rabu Kliwon sangat cocok jika bekerja dalam bidang yang membutuhkan kedisiplinan dan sikap tanggung jawab. Bidang pekerjaan tersebut misalnya bisa ditemukan pada profesi tentara, polisi, keamanan, atau pemimpin suatu daerah dan komunitas.',
        'Legi': 'Berdasarkan kepribadian dan watak yang dimiliki, orang dengan weton kelahiran Rabu Legi umumnya bekerja dibidang yang berhubungan dengan kehidupan sosial, seperti pengacara, polisi, tentara, guru, atau seorang pemimpin. Orang berweton Rabu Legi tidak cocok menjadi pekerja yang banyak diperintah, jika menjadi dipaksa ia tidak akan lama mengundurkan diri atau dipecat akibat kebiasaannya yang terlalu sering membantah.',
        'Pahing': 'Berdasarkan sifat, watak, kepribadian, dan karakter yang dimilikinya, orang-orang berweton Rabu Pahing akan lebih cocok menjadi bos untuk usahanya sendiri. Mereka tidak punya mental pekerja. Mereka lebih pantas menjadi wirausahawan, entah itu sebagai seorang pedagang, petani, makelar, atau frelancer dalam mencari jalan rejeki. Sifatnya sering membantah dan mentalnya yang kuat membuat orang berweton kelahiran Rabu Pahing tak bakal sukses atau bertahan lama menjadi seorang pekerja.'
    },
    'Kamis': {
        'Pon': 'Dengan semua watak yang dimilikinya, orang dengan weton kelahiran Kamis Pon menurut primbon akan lebih cocok bekerja dalam profesi yang kaitannya dengan keuangan. Ia bisa menjadi bendahara, pemasar, pedagang, makelar, atau pekerjaan-pekerjaan finansial lainnya. Selain itu, dengan watak dan kebiasaan yang selalu cekatan dalam bekerja, orang berweton Kamis Pon juga bisa menyesuaikan diri dengan pekerjaan-pekerjaan yang membutuhkan tanggung jawab tinggi.',
        'Wage': 'Dengan semua watak dan kepribadian tersebut, orang berweton Kamis Wage umumnya akan cocok bekerja sebagai bawahan. Ia punya sikap setia dan penurut. Ia juga adalah orang yang loyal. Saat diberi tugas atau perintah ia akan bertanggung jawab menyelesaikan tugas yang diberikan tersebut secara tepat waktu. Kendati demikian, orang berweton Kamis Wage juga dapat berusaha mencari penghasilan dengan jalan mandiri. Ia dapat menjadi wirausahawan dan usaha yang cocok untuknya adalah usaha-usaha dalam lingkup perairan, seperti budidaya ikan, pariwisata, dan lain sebagainya.',
        'Kliwon': 'Dengan sifat, watak, dan semua karakter yang dimilikinya orang dengan weton kelahiran Kamis Kliwon bisa bekerja pada semua jenis pekerjaan atau profesi. Mereka dapat beradaptasi dengan segala kondisi dan iklim kerja. Kendati begitu, primbon Jawa mengisyaratkan supaya mereka dapat memilih pekerjaan yang lebih berhubungan dengan pengajaran, seperti guru, dosen, orator, penceramah, atau lain sebagainya. Kemampuan mereka dalam berbicara dan menggali ilmu tak bisa dianggap remeh dan justru harus dioptimalkan.',
        'Legi': 'Berdasarkan watak dasar dan kepribadian yang dimilikinya, orang berweton Kamis Legi akan lebih cocok bila menjalani pekerjaan yang tidak berhubungan dengan manusia lainnya. Dia tidak tepat bila bekerja di bawah perintah orang lain. Pekerjaan yang cocok bagi mereka misalnya yang terkait dengan keuangan, teknologi, seniman, atau menjadi petani, peternak, serta sebagai seorang yang mandiri dalam mencari penghasilan.',
        'Pahing': 'Berdasarkan watak dan karakter yang demikian, seorang berweton Kamis Pahing bisa cocok pada beragam jenis pekerjaan. Sikapnya yang luwes akan selalu mampu beradaptasi dalam setiap kondisi. Kendati begitu, menurut primbon orang weton Kamis Pahing akan lebih cocok jika bekerja dengan kemampuan otaknya, bukan ototnya. Pekerjaan yang sesuai untuknya adalah guru, dokter, peneliti, seniman, dan lain sebagainya. Dalam hal usaha, orang berweton Kamis Pahing dianjurkan untuk memilih usaha yang berhubungan dengan kayu atau tumbuhan'
    },
    'Jumat': {
        'Pon': 'Dengan watak yang dimilikinya, primbon Jawa meramalkan bahwa orang yang memiliki weton kelahiran Jumat Pon tidak bisa menyesuaikan diri dengan beberapa jenis pekerjaan, terutama pekerjaan-pekerjaan yang berhubungan dengan ilmu sosial. Ia tidak cocok menjadi pedagang, pemimpin, marketing, dan jenis pekerjaan lain yang butuh banyak interaksi dengan orang. Ia lebih cocok bekerja pada bidang yang membutuhkan kreatifitas dan daya pikir yang tinggi, seperti seniman, guru, peneliti, petani, dan pekerjaan lainnya yang tidak menuntut dirinya banyak bicara.',
        'Wage': 'Dalam primbon, disebutkan bahwa orang yang memiliki weton Jumat Wage sebaiknya memilih pekerjaan yang tidak berhubungan dengan benda hidup, seperti hewan atau tanaman. Tangan mereka diyakini panas dan tidak cocok untuk usaha dibidang pertanian atau peternakan. Jika dipaksakan, hewan atau tumbuhan yang dipelihara olehnya akan lebih banyak yang mati. Orang berweton Jumat Wage lebih cocok bila bekerja dengan benda yang mati. Ia pun bisa menerima dan mengerjakan setiap tugas yang diberikan bila bekerja sebagai bawahan',
        'Kliwon': 'Dengan watak dan karakter yang ada dalam dirinya, orang berweton Jumat Kliwon disebut tidak bisa bekerja sebagai bawahan. Mereka tidak cocok menjadi pekerja, melainkan lebih tepat mencari rejeki dengan menjadi bos untuk usahanya sendiri. Berwirausaha adalah pilihan tepat untuknya. Adapun usaha yang paling cocok bagi orang berweton Jumat Kliwon menurut primbon adalah usaha-usaha yang berkaitan dengan benda hidup, entah itu dengan tanaman sebagai petani, maupun dengan hewan sebagai peternak.',
        'Legi': 'Dengan sifat, watak, dan kepribadian yang dimilikinya, seorang yang lahir di weton Jumat Legi umumnya cocok bekerja dalam pekerjaan yang berkaitan dengan mahluk hidup, seperti hewan atau tumbuhan. tangannya dingin dan akan berhasil jika memelihara sesuatu. Ketabahan yang dimilikinya saat menghadapi kegagalan adalah modal besar yang diperlukan jika mereka ingin usaha secara mandiri.',
        'Pahing': 'Dengan beragam watak dan karakter tersebut, orang berweton Jumat Pahing umumnya dapat bekerja dengan lingkungan yang beraneka ragam. Kemampuannya dalam beradaptasi serta sikap tanggung jawab, ketekunan, dan kemandiriannya adalah modal besar bagi dirinya untuk mencari rejeki. Kendati begitu, primbon meramalkan bahwa orang berweton Jumat Pahing akan sangat baik bila bekerja atau berprofesi sebagai seorang pemimpin. Watak dasarnya yang kuat dengan jiwa korsa sangat bisa diandalkan untuk membawa perubahan orang banyak ke arah yang lebih baik.'
    },
    'Sabtu': {
        'Pon': 'Berdasarkan karakter yang ada di dirinya, primbon menjelaskan bahwa orang dengan weton kelahiran Sabtu Pon lebih cocok bekerja dengan ketelitian dan kesabarannya. Pekerjaan yang cocok bagi mereka misalnya peneliti, seniman, peternak, petani, dan arsitektur. Kendati demikian, mereka juga cocok jika bekerja sebagai seorang wirausahawan. Usaha yang cocok baginya adalah usaha yang berhubungan dengan air, misalnya usaha budidaya perikanan, usaha pembuatan perahu, usaha pertanian sawah, dan lain sebagainya. Parasaan lakuning banyu yang dimilikinya membuat orang dengan weton ini biasanya juga pandai memancing.',
        'Wage': 'Orang-orang yang weton kelahirannya Sabtu Wage bisa dikatakan tidak bisa mencari rejeki dengan jalannya sendiri. Ia lebih cocok bekerja pada orang lain. Jiwanya yang penurut dan wataknya yang pendiam lebih tepat bila disandingkan dengan pekerjaan yang rutin mendapat gaji yang pasti. Pekerjaan yang cocok baginya adalah pegawai negeri, karyawan swasta, TNI, Polri, dan lain sebagainya. Dalam hitungan weton Jawa, watak orang Sabtu Wage tidak tepat bila memaksakan diri menjadi seorang wirausahawan, pedagang, atau pebisnis',
        'Kliwon': 'Atas segala watak, sifat, dan karakter yang ada pada dirinya, orang dengan weton kelahiran Sabtu Kliwon diyakini hanya akan cocok pada beberapa jenis pekerjaan tertentu. Wataknya yang mengayomi akan tepat bila digunakan untuk memimpin atau mengajarkan sesuatu pada orang lain. Jika menjadi guru, ia akan sabar memberikan pemahaman pada murid-muridnya sampai mereka benar-benar bisa. Oleh karena itu, kecocokan pekerjaan bagi mereka bisa diperoleh dalam profesi guru, kepala desa, dosen, ketua organisasi, atau pekerjaan lain yang berhubungan dengan kepemimpinan dan pengajaran',
        'Legi': 'Dengan sifatnya yang demikian, orang yang lahir di hari Sabtu Legi umumnya hanya cocok dengan pekerjaan yang terbatas pada bidang sosial kemasyarakatan. Mereka akan mudah mencari rejeki dengan bermain kata-kata dan menjual omongan. Beberapa pekerjaan yang dimaksud misalnya orator, sales, penceramah, makelar, guru, dan lain sebagainya',
        'Pahing': 'Dengan sifat, watak, dan karakter bawaan yang dimilikinya, seseorang yang lahir di weton Sabtu Pahing umumnya tidak akan cocok bekerja di bawah telunjuk orang lain. Mereka lebih cocok mencari rejeki secara mandiri dan berdikari di atas kakinya sendiri. Mereka cocok menjadi wirausahawan, pengusaha, pedagang, atau menjadi seorang pemimpin. Jika dipaksa menjadi karyawan atau pekerja, alam bawah sadar orang yang weton kelahirannya Sabtu Pahing dipercaya akan memberontak. Ia tak bisa di atur dan diperintah semaunya'
    },
    'Minggu': {
        'Pon': 'Berdasarkan karakter yang dimilikinya, primbon menjelaskan bahwa orang dengan weton Minggu Pon lebih cocok bekerja sebagai orang yang mandiri. Ia tidak tepat bila bekerja sebagai bawahan, karyawan, atau orang yang bekerja atas perintah. Ia justru lebih tepat menjadi pedagang, pemimpin, atau pekerjaan lainnya yang bebas tanpa harus mengemban tanggung jawab untuk titah orang lain. Sifatnya yang giat bekerja juga menunjukan bahwa mereka cocok dengan pekerjaan-pekerjaan yang membutuhkan daya kreatifitas tinggi, seperti artis, seniman, pelukis, atau peneliti.',
        'Wage': 'Orang-orang yang lahir di weton Minggu Wage bisa dibilang sangat tidak tepat bila bekerja sebagai seorang yang mengandalkan dirinya sendiri. Ia lebih cocok mencari nafkah dengan menjadi seorang pekerja. Pekerjaan yang tepat baginya adalah pekerjaan yang membutuhkan ketelitian dan kecerdasan berpikir. Dalam hal ini contohnya dokter, akuntan, bendahara, dokter, arsitektur, atau dosen. Pekerjaan-pekerjaan tersebut adalah pekerjaan yang dekat dengan jiwanya',
        'Kliwon': 'Orang yang weton kelahirannya Minggu Kliwon disebut akan cocok pada banyak jenis pekerjaan saja. Wataknya yang low profile bisa beradaptasi dengan beragam lingkungan kerja yang berbeda. Tanggung jawab yang dimiliki dan kebijaksanaannya dalam berpikir membuat semua rekan kerja yang ada akan senang terhadapnya. Meski semua pekerjaan cocok dengan orang yang weton kelahirannya Minggu Kliwon, namun ada beberapa pekerjaan yang menurut primbon adalah yang menjadi paling tepat untuknya. Pekerjaan tersebut antara lain pemimpin desa, pegawai negeri, polisi, tentara, dan pekerjaan yang membutuhkan tanggung jawab tinggi lainnya.',
        'Legi': 'Dengan sifatnya yang sedemikian, orang-orang yang lahir di weton Minggu Legi umumnya hanya cocok dengan pekerjaan yang terbatas pada bidang pemasaran. Mereka akan mudah mencari rejeki dengan bermain uang atau menjual omongan. Beberapa pekerjaan yang dimaksud misalnya pedagang, sales, makelar, dan distributor. Selain itu, kecakapannya dalam wawasan dan ilmu pengetahuan membuat mereka yang berweton Minggu Legi juga cocok bekerja pada bidang yang membutuhkan pikiran dan daya kreatifitas yang kuat seperti dosen, peneliti, guru, dokter, dan lain sebagainya.',
        'Pahing': 'Dengan watak, sifat, dan karakter yang dimilikinya, seseorang yang lahir di weton Minggu Pahing umumnya tidak akan cocok bekerja sebagai orang yang menjual tenaganya, seperti buruh, petani, tukang, atau sopir. Mereka lebih cocok mencari rejeki sebagai orang yang menjual kemampuan berpikirnya. Beberapa pekerjaan tersebut misalnya guru, dosen, peneliti, pelukis, dan lain sebagainya.'
    }
};		

		
var cinta = {
    'Senin': {
        'Pon': 'Orang-orang dengan weton kelahiran Senin Pon dikatakan akan sangat baik bila dapat berjodoh dengan orang-orang yang memiliki nilai neptu 8, 13, dan 18. Nilai ketiga neptu di atas bisa ditemukan pada orang-orang yang lahir di weton Selasa Legi, Minggu Kliwon, Jumat Pon, Kamis Legi, Sabtu Wage, atau Sabtu Pahing. Bila berjodoh dengan orang yang memiliki weton kelahiran tersebut, orang Senin Pon akan memperoleh kemuliaan hidup berumah tangga. Rumah tangganya akan langgeng, dikaruniai banyak anak, dan rejeki yang melimpah.',
        'Wage': 'Orang weton kelahiran Senin Wage menurut primbon hitungan Jawa hanya akan cocok bila berjodoh dengan orang yang memiliki nilai neptu 11 dan 16, seperti Selasa Kliwon, Senin Pon, Jumat Legi, Rabu Wage, Kamis Kliwon, Rabu Pahing, atau Sabtu Pon. Pertemuan orang weton kelahiran Senin Wage dengan orang salah satu weton tersebut digambarkan sebagai pertemuan antara dayung dan sampan. Keduanya dalam biduk rumah tangga dapat saling melengkapi. Mereka akan akur dan saling menutupi kekurangan sehingga keluarganya akan awet, rukun, damai dan berkecukupan.',
        'Kliwon': 'Dalam perkara jodoh, primbon weton menjelaskan bahwa orang yang terlahir di weton Senin Kliwon akan sangat tepat bila bertemu atau berjodoh dengan orang yang memiliki nilai neptu 7, 12, atau 17. Orang dengan nilai neptu tersebut bisa ditemukan pada mereka yang lahir di weton Selasa Wage, Senin Kliwon, Selasa Pahing, Rabu Legi, Minggu Pon, Kamis Wage, Sabtu Kliwon, atau Kamis Pahing.',
        'Legi': 'Dalam hal jodoh, orang dengan weton kelahiran Senin Legi menurut hitungan Jawa akan baik bila berjodoh dengan orang yang memiliki neptu kelahiran 10 atau 5. Nilai neptu tersebut dapat ditemukan pada orang yang memiliki weton kelahiran Selasa Pon, Jumat Wage, Minggu Legi, Jumat Pahing, Kamis Pon, atau Rabu Kliwon. Bila weton Senin Legi berjodoh dengan orang salah satu weton tersebut, keluarganya akan bahagia dan berkecukupan. Keduanya bisa saling mengerti dan melengkapi hingga hanya maut yang bisa memisahkan keduanya.',
        'Pahing': 'Neptu 13 yang dimiliki oleh weton Senin Pahing akan sangat cocok bila berjodoh dengan seseorang yang neptu wetonnya 11 dan 16. Kedua neptu tersebut bisa kita temukan pada orang-orang yang lahir di weton Selasa Kliwon, Jumat Legi, Senin Pon, Rabu Pahing, Sabtu Pon, Rabu Wage, dan Kamis Kliwon. Menurut hitungan weton Jawa, bila berjodoh dengan orang yang memiliki weton-weton tersebut, orang Senin Pahing umumnya akan mendapatkan kelancaran rezeki dalam berkeluarga. Biduk rumah tangganya pun akan harmonis dan lepas dari beragam rintangan yang menghalangi.'
    },
    'Selasa': {
        'Pon': 'Weton Selasa Pon memiliki jumlah neptu 10. Dengan jumlah neptu tersebut, mereka akan cocok bila bertemu dengan jodoh yang jumlah neptunya 9 atau 14. Jumlah neptu tersebut bisa ditemukan pada orang-orang dengan weton Senin Legi, Minggu Wage, Minggu Pahing, Jumat Kliwon, Rabu Pon, dan Sabtu Legi. Pertemuan atau perjodohan antara weton Selasa Pon dan salah satu weton di atas dalam primbon diibaratkan pertemuan buah kelapa tua dan tanah. Keduanya akan saling melengkapi, menopang, dan tumbuh berdua hingga hanya maut yang bisa memisahkannya',
        'Wage': 'Weton Selasa Wage memiliki neptu 7. Ia sangat cocok bila berjodoh dengan orang-orang yang memiliki neptu 7, 12 dan 17, seperti Selasa Wage (sesamanya), Selasa Pahing, Senin Kliwon, Minggu Pon, Rabu Legi, Kamis Wage, Kamis Pahing, dan Sabtu Kliwon. Bila berjodoh dengan orang-orang yang wetonnya seperti disebutkan tadi, insya Alloh mereka akan saling melengkapi. Kebahagiaan dan rejeki akan mengiringi biduk rumah tangga yang dibangunnya.',
        'Kliwon': 'Weton Selasa Kliwon memiliki jumlah neptu 11. Dengan jumlah neptu tersebut, mereka akan cocok bila bertemu dengan jodoh yang jumlah neptunya 8, 13, atau 18. Jumlah neptu tersebut bisa ditemukan pada orang-orang dengan weton Selasa Legi, Senin Wage, Senin Pahing, Minggu Kliwon, Jumat Pon, Kamis Legi, Sabtu Wage, atau Sabtu Pahing. Bila bertemu dengan jodoh yang memiliki weton-weton tersebut, menurut primbon keduanya akan saling melengkapi. Pertemuan keduanya diibaratkan pertemuan tangkai dan bunga, saling menyokong, menopang, dan membawa keindahan.',
        'Legi': 'Weton Selasa Legi memiliki jumlah neptu 8. Ia akan sangat cocok disandingkan dengan orang-orang yang memiliki jumlah neptu 11 dan 16, seperti Selasa Kliwon, Senin Pon, Jumat Legi, Rabu Wage, Rabu Pahing, Kamis Kliwon, dan Sabtu Pon. Kecocokan jodoh ini berlaku dalam hal pasangan hidup. Insya Alloh jika berpasangan dengan orang yang neptu wetonnya 11 dan 16, mereka akan bisa saling melengkapi.',
        'Pahing': 'Weton Selasa Pahing memiliki neptu 12. Dengan jumlah neptu tersebut, jodoh yang cocok untuk orang dengan weton ini adalah orang-orang dengan neptu 7, 12 dan 17, seperti Selasa Wage, Selasa Pahing (sesamanya), Minggu Pon, Senin Kliwon, Rabu Legi, Kamis Pahing, Kamis Wage, dan Sabtu Kliwon. Bila berjodoh dengan salah satu dari 8 weton tadi maka mereka yang lahir di weton Selasa Pahing akan mendapatkan ketentraman hati. Sesama pasangan bisa saling melengkapi. Rejeki dan kesehatan dalam keluarga akan baik dibandingkan bila berjodoh dengan orang weton lainnya.'
    },
    'Rabu': {
        'Pon': 'Weton Rabu Pon memiliki jumlah neptu 14. Dengan jumlah neptu tersebut, mereka akan cocok bila bertemu dengan jodoh yang jumlah neptunya 10 atau 15. Jumlah neptu tersebut bisa ditemukan pada orang-orang dengan weton Jumat Pahing, Rabu Kliwon, Kamis Pon, Selasa Pon, Jumat Wage, dan Minggu Legi. Perjodohan atau pertemuan antara weton Rabu Pon dan salah satu weton di atas diibaratkan pertemuan kelapa tua dan tanah. Keduanya akan saling menopang, melengkapi, dan tumbuh berdua sampai hanya maut yang memisahkannya.',
        'Wage': 'Weton Rabu Wage memiliki neptu 11. Ia sangat cocok bila berjodoh dengan orang-orang yang memiliki neptu 8, 13 dan 18, seperti Kamis Legi, Sabtu Wage, Selasa Legi, Minggu Kliwon, Jumat Pon, atau Sabtu Pahing. Bila jodohnya adalah orang-orang dengan weton seperti disebutkan tadi, insya Alloh keduanya dalam kehidupan berumah tangga akan saling melengkapi. Rejeki dan kebahagiaan akan mengiringi biduk rumah tangga mereka.',
        'Kliwon': 'Weton Rabu Kliwon memiliki jumlah neptu 15. Dengan jumlah neptu tersebut, mereka akan cocok bila bertemu dengan jodoh yang jumlah neptunya 9 atau 14. Jumlah neptu tersebut bisa ditemukan pada orang-orang dengan weton Minggu Wage, Minggu Pahing, Jumat Kliwon, Rabu Pon, atau Sabtu Legi. Bila memiliki jodoh dengan salah satu dari weton-weton tersebut, menurut primbon kedua pasangan akan saling melengkapi. Pertemuan keduanya dianggap seperti pertemuan tangkai dan bunga, saling menopang, menyokong, dan membawa keindahan',
        'Legi': 'Weton Rabu Legi memiliki jumlah neptu 12. Ia akan sangat cocok bila disandingkan dengan mereka yang memiliki jumlah neptu 7, 12, dan 17, seperti Selasa Wage, Selasa Pahing, Senin Kliwon, Minggu Pon, Kamis Wage, Rabu Legi, Kamis Pahing, atau Sabtu Kliwon. Kecocokan jodoh ini akan berlaku dalam hal rumah tangga. Insya Alloh jika berjodoh dengan orang neptu weton tersebut, mereka akan hidup saling melengkapi.',
        'Pahing': 'Weton Rabu Pahing memiliki neptu 16. Dengan jumlah neptu tersebut, jodoh yang cocok untuk orang dengan weton ini adalah orang-orang dengan neptu 8, 13 dan 18, seperti Minggu Pon, Rabu Legi, Selasa Wage, selasa Pahing, Senin Kliwon, Selasa Legi, Kamis wage, atau Sabtu Pahing. Bila berjodoh dengan satu dari 8 weton tersebut, maka mereka berweton Rabu Pahing umumnya akan mendapatkan ketentraman. Mereka bisa saling melengkapi sesama pasangan. Rejeki dan kesehatannya dalam keluarga akan lebih baik dibandingbila berjodoh dengan orang di luar weton tersebut.'
    },
    'Kamis': {
        'Pon': 'Dalam hitungan weton Jawa, orang dengan weton kelahiran Kamis Pon disebutkan dapat mencapai kemuliaan hidup berumah tangga bila mereka menikah dengan orang yang memiliki neptu kelahiran 9 atau 14. Orang dengan neptu tersebut dapat ditemukan pada orang-orang yang lahir pada weton Minggu Wage, Minggu Pahing, Sabtu Legi, Jumat Kliwon, atau Rabu Pon.',
        'Wage': 'Weton Kamis Wage memiliki neptu berjumlah 12. Dalam primbin weton, jodoh yang baik orang dengan neptu kelahiran ini adalah orang dengan neptu kelahiran 7, 12, dan 17. Ketiga neptu kelahiran tersebut bisa ditemukan pada orang yang lahir di weton Rabu Legi, Kamis Pahing, Senin Kliwon, Minggu Pon, Kamis Wage, Selasa Wage, Selasa Pahing, atau Sabtu Kliwon.',
        'Kliwon': 'Dalam perkara jodoh, primbon menyarankan agar orang yang lahir di weton Kamis Kliwon sebaiknya dapat mencari pasangan hidup yang memiliki nilai neptu 8, 13, atau 18. Jodoh dengan neptu tersebut dapat ditemukan pada orang-orang yang lahir di weton Selasa Legi, Selasa Wage, Selasa Pahing, Minggu Pon, Rabu Legi, Kamis wage, Senin Kliwon, atau Sabtu Pahing. Bila berjodoh dengan mereka, orang yang berweton Kamis Kliwon diyakini dapat mencapai kesempurnaan hidup berumah tangga.',
        'Legi': 'Terkait dengan perkara jodoh, orang dengan weton kelahiran Kamis Legi dengan nilai neptu 13, disebut akan cocok bila berjodoh dengan orang yang memiliki neptu 11 atau 16. Kedua nilai neptu tersebut dapat ditemukan pada orang-orang yang lahir di weton Jumat Legi, Senin Pon, Selasa Kliwon, Rabu Wage, Sabtu Pon, Rabu Pahing, dan Kamis Kliwon. Perjodohan orang Kamis Legi dengan orang yang wetonnya berneptu 11 atau 16 diyakini dapat menjadi jalan menuju kehidupan rumah tangga yang sukses. Rejeki keluarga dari perjodohan tersebut akan lancar, kesehatannya terjaga, hingga hanya mati yang memisahkan keduanya.',
        'Pahing': 'Untuk mereka yang berweton Kamis Pahing, primbon menganjurkan agar mereka dapat memilih jodoh hanya orang yang memiliki neptu 7, 12, atau 17. Orang neptu tersebut dapat ditemukan pada mereka yang lahir di weton Sabtu Kliwon, Selasa Wage, Kamis Pahing, Selasa Pahing, Minggu Pon, Senin Kliwon, Rabu Legi, atau Kamis Wage.'
    },
    'Jumat': {
        'Pon': 'Dalam urusan jodoh, primbon menyarankan agar orang yang lahir di weton Jumat Pon dapat mencari pasangan yang memiliki neptu kelahiran 13 atau 16. Neptu kelahiran tersebut bisa ditemukan pada mereka yang lahir di weton Senin Pon, Selasa Kliwon, Jumat Legi, Rabu Wage, Rabu Pahing, Sabtu Pon, dan Kamis Kliwon.',
        'Wage': 'Dalam perkara kehidupan asmara, orang berweton Jumat Wage dengan nilai neptunya yang berjumlah 10, akan cocok bila dipasangkan dengan orang yang nilai neptunya 9 atau 14, seperti mereka yang lahir di weton Minggu Pahing, Senin Legi, Minggu Wage, Jumat Kliwon, Rabu Pon, dan Sabtu Legi.',
        'Kliwon': 'Dalam urusan jodoh, primbon weton menyarankan orang berweton Jumat Kliwon agar dapat memilih pasangan hidup yang memiliki neptu kelahiran 10 atau 15. Neptu dengan nilai tersebut dapat ditemukan pada orang yang lahir di weton Sabtu Legi, Minggu Wage, Jumat Kliwon, Minggu Pahing, atau Rabu Pon',
        'Legi': 'Orang berweton Jumat Legi sebaiknya mengambil pasangan dari orang yang memiliki nilai neptu 8, 13, atau 18. Orang-orang tersebut dapat ditemui pada mereka yang lahir di weton Selasa Legi, Sabtu Wage, Jumat Pon, Kamis Legi, Minggu Kliwon, atau Sabtu Pahing. Bila berjodoh dengan satu dari weton-weton tersebut, menurut primbon, kedua pasangan akan hidup saling melengkapi. Pertemuan keduanya dianggap seperti pertemuan bunga dan tangkainya; saling menyokong, menopang, dan membawa keindahan.',
        'Pahing': 'Terkait dengan perkara jodoh, orang yang lahir di weton Jumat Pahing disebutkan akan sangat baik bila berpasangan dengan orang yang jumlah neptunya 9 atau 14. Orang dengan jumlah neptu tersebut dapat ditemukan pada orang-orang yang lahir di weton Jumat Kliwon, Minggu Wage, Sabtu Legi, Minggu Pahing, atau Rabu Pon.'
    },
    'Sabtu': {
        'Pon': 'Terkait dengan urusan jodoh, orang dengan weton kelahiran Sabtu Pon yang memiliki nilai neptu 16, akan cocok bila berjodoh dengan orang-orang yang punya nilai neptu 8, 13, atau 18. Orang dengan neptu-neptu tersebut adalah orang dengan weton kelahiran Selasa Legi, Selasa Wage, Minggu Pon, Rabu Legi, Selasa Pahing, Senin Kliwon, Kamis Wage, atau Sabtu Pahing.',
        'Wage': 'Neptu 13 yang dimiliki oleh weton Sabtu Wage sangat cocok dan serasi bila dipertemukan dengan jodoh yang neptunya 11 dan 16. Kedua neptu tersebut bisa kita temukan pada orang-orang yang lahir di weton Senin Pon, Selasa Kliwon, Jumat Legi, Rabu Wage, Rabu Pahing, Sabtu Pon, dan Kamis Kliwon. Berdasarkan primbon weton, pertemuan orang yang weton kelahirannya Sabtu Wage dengan orang yang weton kelahiran tersebut diibaratkan pertemuan antara biji padi kering dengan tanah sawah. Keduanya akan saling menyokong dalam kebahagiaan berumah tangga dan rejekinya lancar.',
        'Kliwon': 'Neptu 17 yang dimiliki weton kelahiran Sabtu Kliwon akan cocok bila disandingkan dengan jodoh yang neptu wetonnya 7, 12 atau 17. Neptu-neptu tersebut bisa diperoleh pada orang yang lahir di weton Selasa Wage, Kamis Pahing, Sabtu Kliwon, Selasa Pahing, Senin Kliwon, Rabu Legi, Minggu Pon, atau Kamis Wage.',
        'Legi': 'Adapun dalam perkara jodoh, orang yang wetonnya Sabtu Legi umumnya akan cocok dengan beberapa pilihan pasangan. Pasangan yang cocok dan membawa kebaikan bagi mereka dalam hitungan jawa adalah pasangan yang neptu wetonnya berjumlah 10 atau 15, seperti weton Selasa Pon, Minggu Legi, Jumat Wage, Jumat Pahing, Rabu Kliwon, atau Kamis Pon.',
        'Pahing': 'Jumlah neptu 18 menurut primbon akan cocok jika disandingkan dengan orang yang nilai neptunya 11 atau 16. Jumlah neptu tersebut dapat kita ditemukan pada orang yang weton kelahirannya Rabu Pahing, Kamis Kliwon, Sabtu Pon, Selasa Kliwon, Senin Pon, Jumat Legi, atau Rabu Wage.'
    },
    'Minggu': {
        'Pon': 'Orang dengan weton Minggu Pon yang memiliki nilai neptu 12, akan cocok bila bersanding dengan orang-orang yang memiliki nilai neptu 7, 12 (sesamanya), atau 17 dalam weton kelahirannya. Orang dengan neptu tersebut adalah orang yang weton kelahirannya Selasa Wage, Selasa Pahing, Senin Kliwon, Minggu Pon, Rabu Legi, Kamis Wage, Kamis Pahing, atau Satu Kliwon.',
        'Wage': 'Dalam hal ramalan rejeki, seorang anak yang lahir di weton Minggu Wage umumnya akan membawa penurunan kesejahteraan bagi keluarganya. Hal ini berlaku bila bapaknya (semisal anak pertama) atau kakaknya (semisal bukan anak pertama) memiliki weton dengan jumlah neptu kurang dari 9, seperti Selasa Wage, Selasa Legi, dan Senin Wage',
        'Kliwon': 'Neptu 13 yang dimiliki weton kelahiran Minggu Kliwon akan cocok bila disandingkan dengan jodoh yang neptu wetonnya 11 atau 16. Neptu-neptu tersebut bisa diperoleh pada orang yang lahir di weton Rabu Pahing, Kamis Kliwon, Sabtu Pon, Selasa Kliwon, Senin Pon, Jumat Legi, dan Rabu Wage.',
        'Legi': 'Adapun dalam perkara jodoh, orang yang wetonnya Minggu Legi umumnya akan cocok dengan beberapa pilihan pasangan. Pasangan yang cocok dan membawa kebaikan bagi mereka dalam hitungan jawa adalah pasangan yang neptu wetonnya berjumlah 9 atau 14, seperti weton Senin Legi, Minggu Wage, Minggu Pahing, Jumat Kliwon, Rabu Pon, dan Sabtu Legi.',
        'Pahing': 'Jumlah neptu 14 menurut primbon hanya cocok bila disandingkan dengan orang yang neptunya 10 atau 15. Jumlah neptu tersebut bisa ditemukan pada orang yang lahir di weton Selasa Pon, Minggu Legi, Jumat Wage, Jumat Pahing, Rabu Kliwon, atau Kamis Pon.'
    }
};		


var rejeki = {
    'Senin': {
        'Pon': 'Orang yang weton kelahirannya Senin Pon biasanya dapat hidup berkecukupan. Saat terlahir ke dunia, mereka akan menjadi bayi yang membawa peruntungan bagi keluarganya. Usaha bapaknya akan lancar dan penghidupan keluarganya dari sisi ekonomi akan membaik. Hal ini berlaku bila sang Bapak memiliki neptu yang nilainya lebih kecil dari 11, seperti Selasa Wage, Selasa Legi, Senin Wage, Senin Legi, Minggu Wage, Selasa Pon, Minggu Legi, atau Jumat Wage. Namun, jika nilai neptu bapaknya lebih besar dari 11, maka hal yang berlaku adalah sebaliknya.',
        'Wage': 'Primbon menjelaskan tersendiri ramalan rejeki bagi orang yang lahir di weton Senin Wage. Ya menurut hitungan weton Jawa, orang dengan weton kelahiran ini bila terlahir sebagai orang dengan rejeki yang mudah, dia akan menjadi orang yang kayanya tidak tanggung-tanggung, namun jika sebaliknya alias rejekinya sulit, ia juga akan menjadi orang yang miskinnya tidak tanggung-tanggung pula, sama seperti weton Sabtu Pahing. Adapun dalam masa kecilnya, orang yang lahir di weton ini biasanya akan membawa penurunan ekonomi bagi keluarganya. Salah satu hal yang diperhitungkan dalam hal ini adalah nilai neptunya yang hanya 8.',
        'Kliwon': 'Orang dengan weton kelahiran Senin Kliwon biasanya akan memiliki kecukupan rejeki semasa hidupnya. Ia termasuk mudah mencari uang namun karena kemudahan tersebut ia tak akan pernah merasakan kepuasan dan kebahagiaan. Adapun dalam perkara hitungan rejeki keluarga, seorang yang lahir di weton tersebut biasanya akan membawa peningkatan ekonomi dan kemudahan memperoleh rejeki bagi anggota keluarganya yang mencari nafkah. Ini berlaku bila nilai neptu weton orang yang mencari nafkah tersebut memiliki nilai lebih kecil dari 12',
        'Legi': 'Dalam ramalan rejeki, orang yang lahir di weton Senin Legi menurut hitungan Jawa haruslah berusaha di setengah umur (30 tahun) agar menjadi orang yang berada dan kecukupan. Jika sampai di usia 30 tahun ia belum mendapatkan jalan rejeki yang mapan pada usia tersebut, ia akan hidup dalam kesulitan ekonomi. Adapun dalam perkara hitungan rejeki keluarga, bayi yang lahir di weton ini dapat membawa peruntungan bagi keluarganya. Nilai neptu 9 dalam primbon dianggap sebagai nilai besar dalam kehidupan ekonomi dan perolehan rejeki bagi orang yang mencari nafkah di keluarganya.',
        'Pahing': 'Seorang bayi terlahir di weton Senin Pahing biasanya ia akan membawa banyak peruntungan bagi keluarganya. Kesejahteraan keluarganya akan meningkat karena kemudahan ayah atau ibunya untuk memperoleh rejeki semakin membaik. Kebanyakan weton pahing memang baik dalam hal rejeki. Kendati begitu, weton Senin Pahing juga bisa membawa rejeki yang rendah apabila ayahnya (semisal anak pertama) atau kakaknya (semisal bukan anak pertama) punya weton dengan nilai neptu kurang dari 13.'
    },
    'Selasa': {
        'Pon': 'Neptu weton Selasa Pon berjumlah 10. Dalam primbon, neptu tersebut terbilang kecil bila dikaitkan dengan rejeki yang dibawanya dalam keluarga. Jika istri Anda melahirkan anak dengan weton ini, Anda patut bermawas diri. Kedatangannya dalam keluarga adalah awal dari menurunnya rejeki Anda. Kendati begitu, ini hanya berlaku bila Anda termasuk orang-orang yang lahir di weton dengan neptu besar. Hal yang sebaliknya berlaku bila neptu Anda kecil dan kurang dari 10, seperti Selasa Wage, Selasa Legi, Senin Wage, Senin Legi, atau Minggu Wage',
        'Wage': 'Jumlah neptu weton Selasa Wage adalah 7, menjadi yang terkecil di antara neptu weton-weton lainnya. Kedatangannya dalam keluarga diramalkan akan membawa penurunan rejeki. Meski terdengar pahit, namun ramalan ini memang begitu adanya dan sudah dibuktikan beberapa kali oleh para pendahulu kita. Dalam masa kecilnya, orang berweton Selasa Wage akan belajar tentang arti keprihatinan dan kesederhanaan. Hal inilah yang membuat mereka punya watak penurut, waspada, dan berjiwa besar.',
        'Kliwon': 'Dalam hal ramalan rezeki, neptu ini terbilang kecil. Kendati begitu, ia bisa membawa rejeki besar bila neptu ayahnya (bila anak pertama) atau neptu kakaknya (bila bukan anak pertama) bernilai lebih kecil dari 11, seperti Selasa Wage, Selasa Legi, Senin Wage, Senin Legi, Minggu Wage, Selasa Pon, Minggu Legi, atau Jumat Wage.',
        'Legi': 'Berdasarkan jumlah neptunya, weton Selasa Legi memiliki nilai yang sangat kecil, yaitu 8. Dalam keluarga ia diramalkan akan membawa rejeki yang kecil pula. Kendati begitu hal ini juga dipengaruhi oleh nilai neptu dari ayahnya (jika anak pertama) atau nilai neptu dari kakaknya (jika bukan anak pertama).',
        'Pahing': 'Neptu Selasa Pahing adalah 12. Ini menjadikannya sebagai weton dengan neptu tertinggi dalam hitungan hari Selasa. Kedatangan bayi laki-laki atau perempuan Selasa Pahing dalam keluarga akan membawa peruntungan besar. Usaha ayah atau ibunya akan jaya. Ia akan disayang oleh segenap keluarga. Hal inilah yang menjadikannya pribadi yang angkuh.'
    },
    'Rabu': {
        'Pon': 'Orang yang lahir Rabu Pon biasanya memiliki rejeki yang cukup. Ia tidak akan mengalami kesulitan ekonomi dan kemiskinan dalam hidupnya. Rejekinya datang silih berganti dan selalu tumbuh bersemi seperti batang padi. Adapun bila dikaitkan dengan ramalan rejeki dalam keluarga, orang yang berweton Rabu Pon dengan nilai jumlah neptunya 14, ia dapat membawa kebaikan dan peningkatan rejeki. Jika istri Anda melahirkan anak dengan weton ini, Anda patut berbahagia. Kedatangannya di keluarga Anda akan membawa kemudahan keluarga dalam mencari nafkah. Kendati begitu, ini hanya berlaku bila Anda termasuk memiliki neptu lebih besar dari 14, seperti Rabu Kliwon, Rabu Pahing, Kamis Pon, Kamis Kliwon, Kamis Pahing, Sabtu Pon, Sabtu Kliwon, atau Sabtu Pahing.',
        'Wage': 'Jumlah neptu weton Rabu Wage adalah 11, menjadi yang terkecil di antara neptu weton-weton Rabu lainnya. Kelahirannya dalam suatu keluarga diramalkan akan membuat menurunnya rejeki dari keluarga tersebut. Meski terdengar pahit, tapi ramalan ini memang begitu adanya. Di masa kecilnya, orang berweton Rabu Wage akan belajar tentang keprihatinan dan kesederhanaan. Hal inilah yang membuat mereka punya sikap hemat',
        'Kliwon': 'Jumlah neptu weton Rabu Kliwon adalah 15. Dalam hal hitungan rezeki, neptu ini terbilang cukup besar. Kendati begitu, ia bisa membawa rejeki kecil bila neptu ayahnya (bila anak pertama) atau neptu kakaknya (bila bukan anak pertama) bernilai lebih besar dari 15, seperti Rabu Pahing, Kamis Pon, Sabtu Pon, Kamis Kliwon, Kamis Pahing, Sabtu Kliwon, atau Sabtu Pahing.',
        'Legi': 'Berdasarkan ramalan primbon, rejeki menurut weton Rabu Legi diyakini akan cukup baik. Rejekinya seperti batang padi yang saat di potong akan tumbuh kembali. Mereka akan hidup berkecukupan karena sikap hemat yang dimilikinya. Adapun jika dikaitkan dengan rejeki dalam keluarga, orang yang lahir di weton Rabu Legi biasanya akan membawa peruntungan bagi kehidupan ekonomi keluarganya. Kendati begitu, hal ini juga dipengaruhi nilai neptu ayahnya (jika anak pertama) dan nilai neptu dari kakaknya (jika bukan kedua, ketiga, atau seterusnya). Jika nilai neptu ayah atau kakaknya tersebut lebih kecil dari 12, maka kehidupan ekonomi keluarga mereka justru akan memburuk.',
        'Pahing': 'Neptu Rabu Pahing adalah 16. Ini menjadikannya sebagai neptu weton tertinggi dalam hitungan hari Selasa. Kedatangan bayi â€“baik laki-laki maupun perempuan yang lahir di hari Rabu Pahing akan membawa peruntungan besar dalam keluarga. Usaha ayahnya akan lancar, sehingga ia akan dikasihi oleh segenap keluarga. Hal inilah yang menjadikannya pribadi yang boros.'
    },
    'Kamis': {
        'Pon': 'Menurut primbon weton, rejeki seorang yang lahir di weton Kamis Pon dapat dibilang cukup baik. Mereka akan hidup berkecukupan bahkan bisa menjadi kaya raya. Sifat hemat yang dimilikinya merupakan salah satu penyebabnya. Adapun bila dikaitkan dengan rejeki dalam keluarga, bayi yang lahir di weton Kamis Pon disebut akan dapat meningkatkan kehidupan ekonomi keluarganya. Neptunya yang besar merupakan salah satu hal yang menjadi dasar ramalan ini. Kendati demikian, jika ayah atau kakaknya memiliki neptu weton yang lebih besar dari 15, maka kelahiran bayi berweton Kamis Pon justru dapat menurunkan kesejahteraan keluarganya meski hanya sedikit.',
        'Wage': 'Dalam perkara rejeki, primbon meramalkan bahwa orang berweton Kamis Wage dapat memperoleh kecukupan dan kesejahteraan dalam hidupnya. Jika bersungguh-sungguh dalam usaha yang dijalaninya, orang dengan weton ini dapat mencapai kekayaan harta dan benda secara tak terbatas. Adapun bila dikaitkan dengan rejeki dalam keluarga, bayi yang lahir di weton ini umumnya akan membawa penurunan rejeki bagi ayah atau kehidupan ekonomi keluarganya. Jumlah neptunya yang sangat kecil dibandingkan weton Kamis lainnya merupakan salah satu pertimbangannya.',
        'Kliwon': 'Dirunut pada ramalan rejekinya, orang yang lahir di weton Kamis Kliwon umumnya akan mendapatkan kecukupan dalam rejeki. Semasa hidupnya, mereka tak akan pernah mengalami kesulitan yang berarti. Dan jika bekerja secara bersungguh-sungguh mereka bisa menjadi orang kaya yang serba berkecukupan. Adapun bila dikaitkan dengan masalah rejeki dalam keluarga, bayi yang lahir di weton ini sering kali dapat membawa kebaikan dan peningkatan kehidupan ekonomi bagi keluarganya. Hal ini salah satunya didasari oleh besarnya nilai neptu dari weton Kamis Kliwon',
        'Legi': 'Secara jujur saya mengatakan bahwa dalam primbon disebutkan bahwa bayi yang lahir di weton Kamis Legi umumnya akan membawa penurunan kesejahteraan bagi keluarganya. Jalan rejeki yang biasanya lancar, berangsur-angsur akan menjadi semakin sulit setelah kehadirannya. Nilai wetonnya yang terbilang kecil bisa menjadi alasan mengapa ramalan tersebut berbunyi seperti demikian. Dalam kehidupannya sendiri, orang dengan weton Kamis Legi dapat meraih kesuksesan dan kemudahan rejeki bila dalam setengah umurnya (usia 30 tahun) ia sudah menemukan jalan rejekinya. Namun bila di usia setengah umur tersebut dia masih kesulitan, maka ia akan sulit untuk selamanya.',
        'Pahing': 'Dalam urusan rejeki, primbon meramalkan bahwa orang yang lahir di weton Kamis Pahing akan selalu hidup berkecukupan. Dia tidak akan pernah hidup susah dan terpuruk dalam kemiskinan. Terlebih mereka yang giat bekerja, mereka diyakini dapat memperoleh kemakmuran. Hal yang sama juga berlaku dalam ramalan rejeki dalam keluarga. Bayi yang lahir di weton ini akan bisa mengangkat derajat dan rejeki orang tuanya. Nilai neptu 17 yang dimiliki oleh mereka adalah yang terbesar kedua setelah weton Sabtu Pahing. Tak heran jika kemudian primbon meramalkan rejeki besar untuk kehidupannya.'
    },
    'Jumat': {
        'Pon': 'Orang yang lahir di weton Jumat Pon dalam primbon diramalkan akan selalu memiliki rejeki yang cukup. Kendati begitu, hati mereka akan selalu resah dan merasa banyak kekurangan. Oleh karenanya, tak jarang meski hidup berkecukupan, mereka akan terlihat seperti orang susah. Adapun bila dikaitkan dengan ramalan rejeki dalam keluarga, orang berweton Jumat Pon dipercaya dapat meningkatkan kehidupan dan derajat ekonomi orang tuanya. Terlebih bila kakak atau ayahnya memiliki weton yang nilai neptunya di bawah 13',
        'Wage': 'Ramalan rejeki yang disebutkan oleh primbon weton bagi kehidupan orang yang lahir di weton Jumat Wage menyatakan bahwa mereka akan hidup berkecukupan dalam kurun setengah usianya (30 sd 35 tahun). Lebih dari itu, mereka akan mengalami kesulitan dan keterpurukan jika tidak bisa mengendalikan dirinya. Adapun bila dikaitkan dengan rejeki dalam keluarga, bayi yang terlahir di weton Jumat Wage umumnya akan membawa penurunan kehidupan ekonomi dalam keluarganya. Jika sebelumnya sang ayah mudah dalam mencari nafkah, setelah kelahiran bayi dengan weton tersebut, ayahnya kemudian akan mengalami sedikit kendala dan penurunan rejeki.',
        'Kliwon': 'Orang weton Jumat Kliwon sering mengalami kesulitan dalam perkara rejeki. Mereka umumnya berada dalam kemiskinan dalam hidupnya, akan tetapi jika bisa berusaha dan memperbaiki diri sehingga menjadi kaya, kekayaan mereka bisa berlimpah ruah melebihi saudara-saudara sekandungnya. Adapun bila dikaitkan dengan rejeki dalam keluarga, orang berweton Jumat Kliwon dapat membawa peningkatan kesejahteraan dan kemudahan ayah ibunya dalam mencari nafkah. Jumlah neptunya terbilang cukup besar sehingga primbon pun meramalkan rejeki yang dibawanya ke dunia untuk keluarganya juga akan besar.',
        'Legi': 'Orang yang lahir di weton Jumat Legi memiliki rejeki yang sempit di setengah umurnya tapi akan jaya dan kaya di setengah umur berikutnya. Meski masa kecilnya diliputi dengan kesulitan, mereka akan tumbuh menjadi pribadi yang mampu mengatur ekonomi. Ramalan ini memang sering terbukti dalam kehidupan nyata yang penulis lihat di sekeliling. Adapun bila dikaitkan dengan rejeki dalam keluarga, orang berweton Jumat Legi saat lahir, ia akan membawa penurunan rejeki dalam keluarganya. Nilai neptunya terbilang kecil menjadi salah satu hal yang diperhingkan dalam perkara ini.',
        'Pahing': 'Rejeki orang dengan weton kelahiran Jumat Pahing sering diibaratkan dengan pepatah Tunggak Semi. Artinya, rejeki mereka akan selalu ada, setelah habis akan muncul tumbuh kembali. Oleh karenanya, dalam hidup mereka tidak akan mengalami kesulitan dan kemiskinan yang parah. Adapun bila dikaitkan dengan rejeki dalam keluarga, orang berweton Jumat Pahing terbilang akan membawa kebaikan dan peningkatan ekonomi bagi keluarganya. Nilai neptunya terbilang besar merupakan gambaran besarnya rejeki yang dibawa olehnya dalam keluarganya'
    },
    'Sabtu': {
        'Pon': 'Dalam ramalan weton Jawa, kelahiran bayi yang terjadi pada weton Sabtu Pon merupakan awal dari meningkatnya kualitas kehidupan ekonomi keluarganya. Rejekinya termasuk rejeki baik sehingga kedatangannya dalam keluarga akan memudahkan perolehan rejeki bagi ayahnya. Hal ini berlaku bila weton ayahnya atau kakaknya memiliki neptu kurang dari 16.',
        'Wage': 'Terkait dengan ramalan rejeki, seorang anak yang lahir saat weton Sabtu Wage dapat membawa kelancaran atau justru penurunan rejeki bagi keluarganya. Nilai neptunya yang rendah dibandingkan weton hari Sabtu lainnya adalah salah satu pertimbangan dalam menentukan ramalan ini. Ia bisa saja memudahkan rejeki keluarganya jika bapaknya (bila anak pertama) atau kakaknya (bila bukan anak pertama) punya weton dengan neptu kurang dari 13. Namun, hal kebalikannya bisa terjadi pula bila weton ayah atau kakaknya tersebut punya nilai neptu lebih dari 13',
        'Kliwon': 'Dalam urusan rejeki, primbon hitungan weton meramalkan bahwa orang dengan weton kelahiran Sabtu Kliwon umumnya adalah orang yang berkecukupan. Ia tidak mengalami kesulitan dalam memperoleh penghidupan karena jalannya selalu dimudahkan. Adapun bila seorang anak lahir di weton ini, ia juga akan membawa kebaikan dan peningkatan ekonomi dalam keluarganya. Neptunya yang terbilang besar membuat ayahnya atau seseorang yang mencari rejeki di keluarganya akan mendapatkan kemudahan dalam pekerjaannya. Hal ini terlebih bila nilai neptu ayah atau kakaknya lebih kecil dari 17.',
        'Legi': 'Dalam hitungan weton Jawa, Sabtu Legi memiliki jumlah neptu 14. Jumlah neptu ini terbilang menengah, tidak terlalu besar dan tidak pula terlalu kecil. Dalam hal rejeki, jika seseorang lahir di weton ini, umumnya mereka akan membawa perbaikan finansial dan ekonomi bagi keluarganya, asalkan neptu weton ayah atau kakaknya tidak berjumlah kurang dari 14, seperti Jumat Pahing, Rabu Kliwon, Kamis Pon, Kamis Pahing, Sabtu Kliwon, Sabtu Pahing, Sabtu Pon.',
        'Pahing': 'Neptu Sabtu Pahing adalah 18. Jumlah neptu ini menjadi yang paling besar di antara weton-weton lainnya. Oleh karena itu, datangnya bayi yang lahir di weton ini dalam sebuah keluarga sering kali akan membawa peruntungan besar. Jika bayi Anda lahir di weton ini, Anda akan mengalami kemudahan dalam mencari nafkah dan peningkatan rejeki, terlebih bila Anda termasuk orang yang lahir dengan nilai neptu weton yang sangat kecil.'
    },
    'Minggu': {
        'Pon': 'Dalam ramalan weton Jawa, kelahiran seseorang yang terjadi pada weton Minggu Pon merupakan awal dari peningkatan kualitas kehidupan ekonomi keluarganya. Rejekinya termasuk rejeki baik dan kedatangannya dalam keluarga akan memudahkan perolehan rejeki bagi ayahnya. Hal ini berlaku bila weton ayahnya atau kakaknya memiliki neptu kurang dari 12.',
        'Wage': 'Dalam hal ramalan rejeki, seorang anak yang lahir di weton Minggu Wage umumnya akan membawa penurunan kesejahteraan bagi keluarganya. Hal ini berlaku bila bapaknya (semisal anak pertama) atau kakaknya (semisal bukan anak pertama) memiliki weton dengan jumlah neptu kurang dari 9, seperti Selasa Wage, Selasa Legi, dan Senin Wage.',
        'Kliwon': 'Untuk urusan rejeki, primbon hitungan Jawa meramalkan bahwa jika ada seorang anak yang lahir di weton ini, maka anak tersebut akan membawa kebaikan rejeki bagi keluarganya, karena neptu yang dimilikinya adalah neptu yang terbilang besar. Kendati begitu, hitungan jawa ini tidak berlaku pada beberapa kondisi.',
        'Legi': 'Dalam hitungan weton Jawa, Minggu Legi memiliki jumlah neptu 10. Jumlah neptu ini terbilang menengah, tidak terlalu kecil dan tidak pula terlalu besar. Dalam perkara rejeki, bila seseorang lahir di weton ini umumnya akan membawa peningkatan ekonomi bagi keluarganya bila neptu weton ayah atau kakaknya berjumlah kurang dari 10, seperti Selasa Wage, Selasa Legi, Senin Wage, Senin Legi, atau Minggu Wage',
        'Pahing': 'Jumlah neptu ini menjadi yang paling besar di antara weton-weton Minggu lainnya. Oleh karena itu, kedatangan orang atau bayi dengan weton ini di keluarga sering kali membawa peruntungan besar. Jika bayi Anda lahir di weton ini, Anda akan mengalami peningkatan rejeki dan kemudahan dalam mencari nafkah, terlebih bila Anda sebagai ayah termasuk orang dengan jumlah neptu yang kecil.'
    }
};
		



		
function zyxwhtnsq(e) {
    dn0v = e.getDay();
    if (dn0v == 0)
        dn0 = "Minggu";
    else if (dn0v == 1)
        dn0 = "Senin";
    else if (dn0v == 2)
        dn0 = "Selasa";
    else if (dn0v == 3)
        dn0 = "Rabu";
    else if (dn0v == 4)
        dn0 = "Kamis";
    else if (dn0v == 5)
        dn0 = "Jumat";
    else if (dn0v == 6)
        dn0 = "Sabtu";
    return dn0
};

function ovmljgfdib(e) {
    ins = new Date(70, 0, 2);
    hasil_bagi = (e.getTime() - ins.getTime() + 864e5) / 432e6;
    sisa = Math.round((hasil_bagi - Math.floor(hasil_bagi)) * 10) / 2;
    if (sisa == 0)
        P4S = "Wage";
    else if (sisa == 1)
        P4S = "Kliwon";
    else if (sisa == 2)
        P4S = "Legi";
    else if (sisa == 3)
        P4S = "Pahing";
    else if (sisa == 4)
        P4S = "Pon";
    return P4S
}

function modalx(x) {
    var xmodal = document.getElementById("myModal");
    var xspan = document.getElementsByClassName("close")[0];
    $("#textmodal").text(x);
    xmodal.style.display = "block";
    xspan.onclick = function() {
        xmodal.style.display = "none"
    }
    window.onclick = function(event) {
        if (event.target == xmodal) {
            xmodal.style.display = "none"
        }
    }
}

function rmlk(e) {
    if ($("#sc").length < 1 || $("#sc").text() !== "Made with ❤️ Kenthus") {
        alert("Something wrong!");
        return !1
    }
    if (!e.tga.value | !e.tun.value) {
        modalx("Mohon dilengkapi..")
    } else {
        if (e.bal.value == "Januari") {
            var bulan = 0
        } else if (e.bal.value == "Februari") {
            var bulan = 1
        } else if (e.bal.value == "Maret") {
            var bulan = 2
        } else if (e.bal.value == "April") {
            var bulan = 3
        } else if (e.bal.value == "Mei") {
            var bulan = 4
        } else if (e.bal.value == "Juni") {
            var bulan = 5
        } else if (e.bal.value == "Juli") {
            var bulan = 6
        } else if (e.bal.value == "Agustus") {
            var bulan = 7
        } else if (e.bal.value == "September") {
            var bulan = 8
        } else if (e.bal.value == "Oktober") {
            var bulan = 9
        } else if (e.bal.value == "November") {
            var bulan = 10
        } else if (e.bal.value == "Desember") {
            var bulan = 11
        }
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date
        }
        Date.prototype.minDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() - days);
            return date
        }
        for (var i = 0; i < 9; i++) {
            tgma = new Date(e.tun.value, e.bal.selectedIndex, e.tga.value);
            tgma = tgma.addDays(i);
            hrAN = zyxwhtnsq(tgma);
            P4Sa = ovmljgfdib(tgma);
            var first_date = new Date(e.tun.value, bulan, e.tga.value);
            first_date = first_date.addDays(i);
            var first_h = HijriJS.gregorianToHijri(first_date.getFullYear(), (first_date.getMonth() + 1), 1);
            var max_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var no_date = first_date.getDate();
            if (e.tun.value % 4 == 0) {
                max_date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            }
            if (e.tga.value <= max_date[bulan]) {
                first_h = HijriJS.gregorianToHijri(first_date.getFullYear(), (first_date.getMonth() + 1), no_date);
                var masehi_month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
                var hijri_month = ["Muharam", "Safar", "Rabiul awal", "Rabiul akhir", "Jumadil awal", "Jumadil akhir", "Rajab", "Syakban", "Ramadan", "Syawal", "Zulkaidah", "Zulhijah"];
                var java_months = ["Sura", "Sapar", "Mulud", "Bakda Mulud", "Jumadilawal", "Jumadilakir", "Rejeb", "Ruwah", "Pasa", "Sawal", "Sela", "Besar"];
                var tahunjawa = ["Alip", "Ehe", "Jimawal", "Je", "Dal", "Be", "Wawu", "Jimakir"];
                var first_tj = HijriJS.gregorianToHijri(first_date.getFullYear(), (first_date.getMonth() + 1), first_date.getDate());
                var first_tj = tahunjawa[(first_tj.year - 1435) - (Math.floor((first_tj.year - 1435) / 8) * 8)];
                if (i == 0) {
                    document.getElementById('tggl').innerHTML = first_date.getDate() + " " + masehi_month[first_date.getMonth()] + " " + first_date.getFullYear() + " M";
                    document.getElementById('tggljawa').innerHTML = first_h.day + " " + java_months[first_h.month - 1] + " " + (Number(first_h.year) + 512) + " Ja";
										document.getElementById('hijriyah').innerHTML = first_h.day + " " + hijri_month[first_h.month - 1] + " " + first_h.year + " H";
                    document.getElementById('pasaran').innerHTML = hrAN + " " + P4Sa;
					document.getElementById('warsa').innerHTML = first_tj;
                    document.getElementById('neptu').innerHTML = Number(neptu[hrAN][P4Sa]);
					document.getElementById('neptupecah').innerHTML = (pecah[hrAN][P4Sa]);
					document.getElementById('sifat').innerHTML = (sifat[hrAN][P4Sa]);
					document.getElementById('pasaran1').innerHTML = hrAN + " " + P4Sa;
					document.getElementById('neptu1').innerHTML = Number(neptu[hrAN][P4Sa]);
					document.getElementById('kerjaan').innerHTML = (kerja[hrAN][P4Sa]);
					document.getElementById('cinta').innerHTML = (cinta[hrAN][P4Sa]);
					document.getElementById('rejeki').innerHTML = (rejeki[hrAN][P4Sa]);

                    var has = Number(neptu[hrAN][P4Sa]);
                    if (has == 7) {
                        var html = hasil7
                    } else if (has == 8) {
                        var html = hasil8
                    } else if (has == 9) {
                        var html = hasil9
                    } else if (has == 10) {
                        var html = hasil10
                    } else if (has == 11) {
                        var html = hasil11
                    }else if (has == 12) {
                        var html = hasil12
                    }else if (has == 13) {
                        var html = hasil13
                    }else if (has == 14) {
                        var html = hasil14
                    }else if (has == 15) {
                        var html = hasil15
                    }else if (has == 16) {
                        var html = hasil16
                    }else if (has == 17) {
                        var html = hasil17
                    }else if (has == 18) {
                        var html = hasil18
                    }
                } document.getElementById("hasil").style.display = "block"
            } else {
			modalx("Maaf bulan " + e.bal.value + " " + e.tun.value + " tidak memiliki tanggal "+ e.tga.value);
			document.getElementById("hasil").style.display = "none";
		}
            var elmnt = document.getElementById("hasil");
            elmnt.scrollIntoView()
        }
    }
}

function neptuMin(url) {
    newwindow = window.open(url, 'name');
    if (window.focus) {
        newwindow.focus()
    }
    return !1
}

function weton(e) {
    if (window.event) return window.event.keyCode;
    else if (e) return e.which;
    else return null
}

function kodeScript(e, a, b) {
    var c, keychar;
    c = weton(e);
    if (c == null) return !0;
    keychar = String.fromCharCode(c);
    keychar = keychar.toLowerCase();
    a = a.toLowerCase();
    if (a.indexOf(keychar) != -1) return !0;
    if (c == null || c == 0 || c == 8 || c == 9 || c == 27) return !0;
    if (c == 13) {
        var i;
        for (i = 0; i < b.form.elements.length; i++)
            if (b == b.form.elements[i]) break;
        i = (i + 1) % b.form.elements.length;
        b.form.elements[i].focus();
        return !1
    };
    return !1
};
