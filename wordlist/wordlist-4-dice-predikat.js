//
// Our wordlist.
//
// Originally obtained from: http://norvig.com/ngrams/
//
var wordlist = [
	"mengaduk",
	"mengadopsi",
	"mengajak",
	"mengajar",
	"mengamati",
	"mengambil",
	"menganggukan",
	"mengangkat",
	"mengangkut",
	"mengangsur",
	"melafalkan",
	"melahap",
	"melahirkan",
	"melaksanakan",
	"melakukan",
	"melamar",
	"melampirkan",
	"melanggar",
	"melangkah",
	"melapisi",
	"melaporkan",
	"melarang",
	"melawan",
	"melayani",
	"melebarkan",
	"melebihkan",
	"meleburkan",
	"melekati",
	"melemaskan",
	"melelehkan",
	"melemahkan",
	"melembekkan",
	"melembungkan",
	"melempar",
	"melengkapi",
	"melengketkan",
	"melentikkan",
	"melengkungkan",
	"melenturkan",
	"melenyapkan",
	"melepasi",
	"melepaskan",
	"melerai",
	"melestarikan",
	"meletuskan",
	"meletupkan",
	"melewati",
	"melibatkan",
	"melicinkan",
	"melihat",
	"melilit",
	"melimpahi",
	"melindungi",
	"melingkari",
	"melingkupi",
	"melintangi",
	"melintas",
	"melintasi",
	"melinting",
	"melipat",
	"melipatkan",
	"melipatgandakan",
	"meliputi",
	"melirik",
	"melobi",
	"meloloskan",
	"melompat",
	"melompati",
	"meloncati",
	"meloncatkan",
	"melonjakkan",
	"melontari",
	"melontarkan",
	"meloroti",
	"melorotkan",
	"meluangkan",
	"meluaskan",
	"melubangi",
	"melucuti",
	"melucutkan",
	"melukai",
	"melukis",
	"melukiskan",
	"meluluhkan",
	"meluluskan",
	"melumas",
	"melumasi",
	"melumaskan",
	"melumat",
	"melumatkan",
	"melumuri",
	"melumurkan",
	"melunakkan",
	"melunasi",
	"meluncurkan",
	"melupakan",
	"meluruskan",
	"memaafkan",
	"memadati",
	"memadatkan",
	"memadukan",
	"memahami",
	"memahat",
	"memainkan",
	"memakai",
	"memakan",
	"memaksa",
	"memalsukan",
	"memamerkan",
	"memanah",
	"memanasi",
	"memanaskan",
	"memancing",
	"memandang",
	"memandangi",
	"memandikan",
	"memandu",
	"memanen",
	"memanfaatkan",
	"memanggang",
	"memanggil",
	"memanggul",
	"memangkas",
	"memangku",
	"memanjat",
	"memantaskan",
	"memantik",
	"memantulkan",
	"memaparkan",
	"memarahi",
	"memarut",
	"memasak",
	"memasang",
	"memasarkan",
	"memasukan",
	"memasuki",
	"memasukan",
	"mematahkan",
	"mematikan",
	"mematuhi",
	"membaca",
	"membagi",
	"membagikan",
	"membahagiakan",
	"membahas",
	"membajak",
	"membakar",
	"membalas",
	"membalik",
	"membalikan",
	"membalur",
	"membalut",
	"membalutkan",
	"membandingkan",
	"membanggakan",
	"membangun",
	"membantu",
	"membasahi",
	"membasuh",
	"membatalkan",
	"membatasi",
	"membawa",
	"membayar",
	"membebani",
	"membeberkan",
	"membekali",
	"membekukan",
	"membela",
	"membelah",
	"membelanjakan",
	"membeli",
	"membelikan",
	"membentuk",
	"memberanikan",
	"membereskan",
	"memberi",
	"memberikan",
	"memberitahu",
	"membersihkan",
	"membesarkan",
	"membetulkan",
	"membiayai",
	"membicarakan",
	"membimbing",
	"membina",
	"membisiki",
	"membohongi",
	"membolehkan",
	"membonceng",
	"membongkar",
	"memborong",
	"membuat",
	"membubarkan",
	"membujuk",
	"membuka",
	"membuktikan",
	"membulatkan",
	"membungkus",
	"memburu",
	"membutuhkan",
	"memecahkan",
	"memegang",
	"memejamkan",
	"memelihara",
	"memeluk",
	"memenuhi",
	"memercayai",
	"memercayakan",
	"memerhatikan",
	"memeriksa",
	"memerintah",
	"memerintahkan",
	"memerlukan",
	"memesan",
	"memetik",
	"memfoto",
	"memijat",
	"memikirkan",
	"memilah",
	"memilih",
	"memiliki",
	"memimpikan",
	"memimpin",
	"memindahkan",
	"meminjam",
	"meminta",
	"meminum",
	"meminumkan",
	"memisah",
	"memisahkan",
	"memohon",
	"memotret",
	"mempedulikan",
	"mempekerjakan",
	"mempelajari",
	"mempengaruhi",
	"memperbaiki",
	"memperbolehkan",
	"mempercantik",
	"memperdekat",
	"memperebutkan",
	"mempererat",
	"memperhalus",
	"memperhatikan",
	"memperhitungkan",
	"memperinci",
	"memperindah",
	"memperjelas",
	"memperkaya",
	"memperkecil",
	"memperkenalkan",
	"memperoleh",
	"mempunyai",
	"memudahkan",
	"memuja",
	"memuji",
	"memupuk",
	"memurnikan",
	"memutuskan",
	"menaati",
	"menabung",
	"menagih",
	"menahan",
	"menaiki",
	"menaikan",
	"menajamkan",
	"menaklukan",
	"menakuti",
	"menamai",
	"menampar",
	"menanam",
	"menanamkan",
	"menangisi",
	"menangkap",
	"menangkis",
	"menantang",
	"menanti",
	"menantikan",
	"menargetkan",
	"menarik",
	"menaruh",
	"menasihati",
	"menata",
	"menatap",
	"menawar",
	"menawari",
	"menawarkan",
	"mencabut",
	"mencadangkan",
	"mencampur",
	"mencairkan",
	"mencapurkan",
	"mencapai",
	"mencari",
	"mencarikan",
	"mencatat",
	"mencatatkan",
	"mencegah",
	"mencela",
	"mencelupkan",
	"mencemari",
	"mencemarkan",
	"mencemaskan",
	"mencemburui",
	"mencengkeram",
	"mencerahkan",
	"mengadopsi",
	"mengaduk",
	"mengajak",
	"mengajar",
	"mengamati",
	"mengambil",
	"menganggukan",
	"mengangkat",
	"mengangkut",
	"mengangsur",
	"melafalkan",
	"melahap",
	"melahirkan",
	"melaksanakan",
	"melakukan",
	"melamar",
	"melampirkan",
	"melanggar",
	"melangkah",
	"melapisi",
	"melaporkan",
	"melarang",
	"melawan",
	"melayani",
	"melebarkan",
	"melebihkan",
	"meleburkan",
	"melekati",
	"melemaskan",
	"melelehkan",
	"melemahkan",
	"melembekkan",
	"melembungkan",
	"melempar",
	"melengkapi",
	"melengketkan",
	"melentikkan",
	"melengkungkan",
	"melenturkan",
	"melenyapkan",
	"melepasi",
	"melepaskan",
	"melerai",
	"melestarikan",
	"meletuskan",
	"meletupkan",
	"melewati",
	"melibatkan",
	"melicinkan",
	"melihat",
	"melilit",
	"melimpahi",
	"melindungi",
	"melingkari",
	"melingkupi",
	"melintangi",
	"melintas",
	"melintasi",
	"melinting",
	"melipat",
	"melipatkan",
	"melipatgandakan",
	"meliputi",
	"melirik",
	"melobi",
	"meloloskan",
	"melompat",
	"melompati",
	"meloncati",
	"meloncatkan",
	"melonjakkan",
	"melontari",
	"melontarkan",
	"meloroti",
	"melorotkan",
	"meluangkan",
	"meluaskan",
	"melubangi",
	"melucuti",
	"melucutkan",
	"melukai",
	"melukis",
	"melukiskan",
	"meluluhkan",
	"meluluskan",
	"melumas",
	"melumasi",
	"melumaskan",
	"melumat",
	"melumatkan",
	"melumuri",
	"melumurkan",
	"melunakkan",
	"melunasi",
	"meluncurkan",
	"melupakan",
	"meluruskan",
	"memaafkan",
	"memadati",
	"memadatkan",
	"memadukan",
	"memahami",
	"memahat",
	"memainkan",
	"memakai",
	"memakan",
	"memaksa",
	"memalsukan",
	"memamerkan",
	"memanah",
	"memanasi",
	"memanaskan",
	"memancing",
	"memandang",
	"memandangi",
	"memandikan",
	"memandu",
	"memanen",
	"memanfaatkan",
	"memanggang",
	"memanggil",
	"memanggul",
	"memangkas",
	"memangku",
	"memanjat",
	"memantaskan",
	"memantik",
	"memantulkan",
	"memaparkan",
	"memarahi",
	"memarut",
	"memasak",
	"memasang",
	"memasarkan",
	"memasukan",
	"memasuki",
	"memasukan",
	"mematahkan",
	"mematikan",
	"mematuhi",
	"membaca",
	"membagi",
	"membagikan",
	"membahagiakan",
	"membahas",
	"membajak",
	"membakar",
	"membalas",
	"membalik",
	"membalikan",
	"membalur",
	"membalut",
	"membalutkan",
	"membandingkan",
	"membanggakan",
	"membangun",
	"membantu",
	"membasahi",
	"membasuh",
	"membatalkan",
	"membatasi",
	"membawa",
	"membayar",
	"membebani",
	"membeberkan",
	"membekali",
	"membekukan",
	"membela",
	"membelah",
	"membelanjakan",
	"membeli",
	"membelikan",
	"membentuk",
	"memberanikan",
	"membereskan",
	"memberi",
	"memberikan",
	"memberitahu",
	"membersihkan",
	"membesarkan",
	"membetulkan",
	"membiayai",
	"membicarakan",
	"membimbing",
	"membina",
	"membisiki",
	"membohongi",
	"membolehkan",
	"membonceng",
	"membongkar",
	"memborong",
	"membuat",
	"membubarkan",
	"membujuk",
	"membuka",
	"membuktikan",
	"membulatkan",
	"membungkus",
	"memburu",
	"membutuhkan",
	"memecahkan",
	"memegang",
	"memejamkan",
	"memelihara",
	"memeluk",
	"memenuhi",
	"memercayai",
	"memercayakan",
	"memerhatikan",
	"memeriksa",
	"memerintah",
	"memerintahkan",
	"memerlukan",
	"memesan",
	"memetik",
	"memfoto",
	"memijat",
	"memikirkan",
	"memilah",
	"memilih",
	"memiliki",
	"memimpikan",
	"memimpin",
	"memindahkan",
	"meminjam",
	"meminta",
	"meminum",
	"meminumkan",
	"memisah",
	"memisahkan",
	"memohon",
	"memotret",
	"mempedulikan",
	"mempekerjakan",
	"mempelajari",
	"mempengaruhi",
	"memperbaiki",
	"memperbolehkan",
	"mempercantik",
	"memperdekat",
	"memperebutkan",
	"mempererat",
	"memperhalus",
	"memperhatikan",
	"memperhitungkan",
	"memperinci",
	"memperindah",
	"memperjelas",
	"memperkaya",
	"memperkecil",
	"memperkenalkan",
	"memperoleh",
	"mempunyai",
	"memudahkan",
	"memuja",
	"memuji",
	"memupuk",
	"memurnikan",
	"memutuskan",
	"menaati",
	"menabung",
	"menagih",
	"menahan",
	"menaiki",
	"menaikan",
	"menajamkan",
	"menaklukan",
	"menakuti",
	"menamai",
	"menampar",
	"menanam",
	"menanamkan",
	"menangisi",
	"menangkap",
	"menangkis",
	"menantang",
	"menanti",
	"menantikan",
	"menargetkan",
	"menarik",
	"menaruh",
	"menasihati",
	"menata",
	"menatap",
	"menawar",
	"menawari",
	"menawarkan",
	"mencabut",
	"mencadangkan",
	"mencampur",
	"mencairkan",
	"mencapurkan",
	"mencapai",
	"mencari",
	"mencarikan",
	"mencatat",
	"mencatatkan",
	"mencegah",
	"mencela",
	"mencelupkan",
	"mencemari",
	"mencemarkan",
	"mencemaskan",
	"mencemburui",
	"mencengkeram",
	"mencerahkan",
	"mengadopsi",
	"mengaduk",
	"mengajak",
	"mengajar",
	"mengamati",
	"mengambil",
	"menganggukan",
	"mengangkat",
	"mengangkut",
	"mengangsur",
	"melafalkan",
	"melahap",
	"melahirkan",
	"melaksanakan",
	"melakukan",
	"melamar",
	"melampirkan",
	"melanggar",
	"melangkah",
	"melapisi",
	"melaporkan",
	"melarang",
	"melawan",
	"melayani",
	"melebarkan",
	"melebihkan",
	"meleburkan",
	"melekati",
	"melemaskan",
	"melelehkan",
	"melemahkan",
	"melembekkan",
	"melembungkan",
	"melempar",
	"melengkapi",
	"melengketkan",
	"melentikkan",
	"melengkungkan",
	"melenturkan",
	"melenyapkan",
	"melepasi",
	"melepaskan",
	"melerai",
	"melestarikan",
	"meletuskan",
	"meletupkan",
	"melewati",
	"melibatkan",
	"melicinkan",
	"melihat",
	"melilit",
	"melimpahi",
	"melindungi",
	"melingkari",
	"melingkupi",
	"melintangi",
	"melintas",
	"melintasi",
	"melinting",
	"melipat",
	"melipatkan",
	"melipatgandakan",
	"meliputi",
	"melirik",
	"melobi",
	"meloloskan",
	"melompat",
	"melompati",
	"meloncati",
	"meloncatkan",
	"melonjakkan",
	"melontari",
	"melontarkan",
	"meloroti",
	"melorotkan",
	"meluangkan",
	"meluaskan",
	"melubangi",
	"melucuti",
	"melucutkan",
	"melukai",
	"melukis",
	"melukiskan",
	"meluluhkan",
	"meluluskan",
	"melumas",
	"melumasi",
	"melumaskan",
	"melumat",
	"melumatkan",
	"melumuri",
	"melumurkan",
	"melunakkan",
	"melunasi",
	"meluncurkan",
	"melupakan",
	"meluruskan",
	"memaafkan",
	"memadati",
	"memadatkan",
	"memadukan",
	"memahami",
	"memahat",
	"memainkan",
	"memakai",
	"memakan",
	"memaksa",
	"memalsukan",
	"memamerkan",
	"memanah",
	"memanasi",
	"memanaskan",
	"memancing",
	"memandang",
	"memandangi",
	"memandikan",
	"memandu",
	"memanen",
	"memanfaatkan",
	"memanggang",
	"memanggil",
	"memanggul",
	"memangkas",
	"memangku",
	"memanjat",
	"memantaskan",
	"memantik",
	"memantulkan",
	"memaparkan",
	"memarahi",
	"memarut",
	"memasak",
	"memasang",
	"memasarkan",
	"memasukan",
	"memasuki",
	"memasukan",
	"mematahkan",
	"mematikan",
	"mematuhi",
	"membaca",
	"membagi",
	"membagikan",
	"membahagiakan",
	"membahas",
	"membajak",
	"membakar",
	"membalas",
	"membalik",
	"membalikan",
	"membalur",
	"membalut",
	"membalutkan",
	"membandingkan",
	"membanggakan",
	"membangun",
	"membantu",
	"membasahi",
	"membasuh",
	"membatalkan",
	"membatasi",
	"membawa",
	"membayar",
	"membebani",
	"membeberkan",
	"membekali",
	"membekukan",
	"membela",
	"membelah",
	"membelanjakan",
	"membeli",
	"membelikan",
	"membentuk",
	"memberanikan",
	"membereskan",
	"memberi",
	"memberikan",
	"memberitahu",
	"membersihkan",
	"membesarkan",
	"membetulkan",
	"membiayai",
	"membicarakan",
	"membimbing",
	"membina",
	"membisiki",
	"membohongi",
	"membolehkan",
	"membonceng",
	"membongkar",
	"memborong",
	"membuat",
	"membubarkan",
	"membujuk",
	"membuka",
	"membuktikan",
	"membulatkan",
	"membungkus",
	"memburu",
	"membutuhkan",
	"memecahkan",
	"memegang",
	"memejamkan",
	"memelihara",
	"memeluk",
	"memenuhi",
	"memercayai",
	"memercayakan",
	"memerhatikan",
	"memeriksa",
	"memerintah",
	"memerintahkan",
	"memerlukan",
	"memesan",
	"memetik",
	"memfoto",
	"memijat",
	"memikirkan",
	"memilah",
	"memilih",
	"memiliki",
	"memimpikan",
	"memimpin",
	"memindahkan",
	"meminjam",
	"meminta",
	"meminum",
	"meminumkan",
	"memisah",
	"memisahkan",
	"memohon",
	"memotret",
	"mempedulikan",
	"mempekerjakan",
	"mempelajari",
	"mempengaruhi",
	"memperbaiki",
	"memperbolehkan",
	"mempercantik",
	"memperdekat",
	"memperebutkan",
	"mempererat",
	"memperhalus",
	"memperhatikan",
	"memperhitungkan",
	"memperinci",
	"memperindah",
	"memperjelas",
	"memperkaya",
	"memperkecil",
	"memperkenalkan",
	"memperoleh",
	"mempunyai",
	"memudahkan",
	"memuja",
	"memuji",
	"memupuk",
	"memurnikan",
	"memutuskan",
	"menaati",
	"menabung",
	"menagih",
	"menahan",
	"menaiki",
	"menaikan",
	"menajamkan",
	"menaklukan",
	"menakuti",
	"menamai",
	"menampar",
	"menanam",
	"menanamkan",
	"menangisi",
	"menangkap",
	"menangkis",
	"menantang",
	"menanti",
	"menantikan",
	"menargetkan",
	"menarik",
	"menaruh",
	"menasihati",
	"menata",
	"menatap",
	"menawar",
	"menawari",
	"menawarkan",
	"mencabut",
	"mencadangkan",
	"mencampur",
	"mencairkan",
	"mencapurkan",
	"mencapai",
	"mencari",
	"mencarikan",
	"mencatat",
	"mencatatkan",
	"mencegah",
	"mencela",
	"mencelupkan",
	"mencemari",
	"mencemarkan",
	"mencemaskan",
	"mencemburui",
	"mencengkeram",
	"mencerahkan",
	"mengadopsi",
	"mengaduk",
	"mengajak",
	"mengajar",
	"mengamati",
	"mengambil",
	"menganggukan",
	"mengangkat",
	"mengangkut",
	"mengangsur",
	"melafalkan",
	"melahap",
	"melahirkan",
	"melaksanakan",
	"melakukan",
	"melamar",
	"melampirkan",
	"melanggar",
	"melangkah",
	"melapisi",
	"melaporkan",
	"melarang",
	"melawan",
	"melayani",
	"melebarkan",
	"melebihkan",
	"meleburkan",
	"melekati",
	"melemaskan",
	"melelehkan",
	"melemahkan",
	"melembekkan",
	"melembungkan",
	"melempar",
	"melengkapi",
	"melengketkan",
	"melentikkan",
	"melengkungkan",
	"melenturkan",
	"melenyapkan",
	"melepasi",
	"melepaskan",
	"melerai",
	"melestarikan",
	"meletuskan",
	"meletupkan",
	"melewati",
	"melibatkan",
	"melicinkan",
	"melihat",
	"melilit",
	"melimpahi",
	"melindungi",
	"melingkari",
	"melingkupi",
	"melintangi",
	"melintas",
	"melintasi",
	"melinting",
	"melipat",
	"melipatkan",
	"melipatgandakan",
	"meliputi",
	"melirik",
	"melobi",
	"meloloskan",
	"melompat",
	"melompati",
	"meloncati",
	"meloncatkan",
	"melonjakkan",
	"melontari",
	"melontarkan",
	"meloroti",
	"melorotkan",
	"meluangkan",
	"meluaskan",
	"melubangi",
	"melucuti",
	"melucutkan",
	"melukai",
	"melukis",
	"melukiskan",
	"meluluhkan",
	"meluluskan",
	"melumas",
	"melumasi",
	"melumaskan",
	"melumat",
	"melumatkan",
	"melumuri",
	"melumurkan",
	"melunakkan",
	"melunasi",
	"meluncurkan",
	"melupakan",
	"meluruskan",
	"memaafkan",
	"memadati",
	"memadatkan",
	"memadukan",
	"memahami",
	"memahat",
	"memainkan",
	"memakai",
	"memakan",
	"memaksa",
	"memalsukan",
	"memamerkan",
	"memanah",
	"memanasi",
	"memanaskan",
	"memancing",
	"memandang",
	"memandangi",
	"memandikan",
	"memandu",
	"memanen",
	"memanfaatkan",
	"memanggang",
	"memanggil",
	"memanggul",
	"memangkas",
	"memangku",
	"memanjat",
	"memantaskan",
	"memantik",
	"memantulkan",
	"memaparkan",
	"memarahi",
	"memarut",
	"memasak",
	"memasang",
	"memasarkan",
	"memasukan",
	"memasuki",
	"memasukan",
	"mematahkan",
	"mematikan",
	"mematuhi",
	"membaca",
	"membagi",
	"membagikan",
	"membahagiakan",
	"membahas",
	"membajak",
	"membakar",
	"membalas",
	"membalik",
	"membalikan",
	"membalur",
	"membalut",
	"membalutkan",
	"membandingkan",
	"membanggakan",
	"membangun",
	"membantu",
	"membasahi",
	"membasuh",
	"membatalkan",
	"membatasi",
	"membawa",
	"membayar",
	"membebani",
	"membeberkan",
	"membekali",
	"membekukan",
	"membela",
	"membelah",
	"membelanjakan",
	"membeli",
	"membelikan",
	"membentuk",
	"memberanikan",
	"membereskan",
	"memberi",
	"memberikan",
	"memberitahu",
	"membersihkan",
	"membesarkan",
	"membetulkan",
	"membiayai",
	"membicarakan",
	"membimbing",
	"membina",
	"membisiki",
	"membohongi",
	"membolehkan",
	"membonceng",
	"membongkar",
	"memborong",
	"membuat",
	"membubarkan",
	"membujuk",
	"membuka",
	"membuktikan",
	"membulatkan",
	"membungkus",
	"memburu",
	"membutuhkan",
	"memecahkan",
	"memegang",
	"memejamkan",
	"memelihara",
	"memeluk",
	"memenuhi",
	"memercayai",
	"memercayakan",
	"memerhatikan",
	"memeriksa",
	"memerintah",
	"memerintahkan",
	"memerlukan",
	"memesan",
	"memetik",
	"memfoto",
	"memijat",
	"memikirkan",
	"memilah",
	"memilih",
	"memiliki",
	"memimpikan",
	"memimpin",
	"memindahkan",
	"meminjam",
	"meminta",
	"meminum",
	"meminumkan",
	"memisah",
	"memisahkan",
	"memohon",
	"memotret",
	"mempedulikan",
	"mempekerjakan",
	"mempelajari",
	"mempengaruhi",
	"memperbaiki",
	"memperbolehkan",
	"mempercantik",
	"memperdekat",
	"memperebutkan",
	"mempererat",
	"memperhalus",
	"memperhatikan",
	"memperhitungkan",
	"memperinci",
	"memperindah",
	"memperjelas",
	"memperkaya",
	"memperkecil",
	"memperkenalkan",
	"memperoleh",
	"mempunyai",
	"memudahkan",
	"memuja",
	"memuji",
	"memupuk",
	"memurnikan",
	"memutuskan",
	"menaati",
	"menabung",
	"menagih",
	"menahan",
	"menaiki",
	"menaikan",
	"menajamkan",
	"menaklukan",
	"menakuti",
	"menamai",
	"menampar",
	"menanam",
	"menanamkan",
	"menangisi",
	"menangkap",
	"menangkis",
	"menantang",
	"menanti",
	"menantikan",
	"menargetkan",
	"menarik",
	"menaruh",
	"menasihati",
	"menata",
	"menatap",
	"menawar",
	"menawari",
	"menawarkan",
	"mencabut",
	"mencadangkan",
	"mencampur",
	"mencairkan",
	"mencapurkan",
	"mencapai",
	"mencari",
	"mencarikan",
	"mencatat",
	"mencatatkan",
	"mencegah",
	"mencela",
	"mencelupkan",
	"mencemari",
	"mencemarkan",
	"mencemaskan",
	"mencemburui",
	"mencengkeram",
	"mencerahkan",
	"mengadopsi",
	"mengaduk",
	"mengajak",
	"mengajar",
	"mengamati",
	"mengambil",
	"menganggukan",
	"mengangkat",
	"mengangkut",
	"mengangsur",
	"melafalkan",
	"melahap",
	"melahirkan",
	"melaksanakan",
	"melakukan",
	"melamar",
	"melampirkan",
	"melanggar",
	"melangkah",
	"melapisi",
	"melaporkan",
	"melarang",
	"melawan",
	"melayani",
	"melebarkan",
	"melebihkan",
	"meleburkan",
	"melekati",
	"melemaskan",
	"melelehkan",
	"melemahkan",
	"melembekkan",
	"melembungkan",
	"melempar",
	"melengkapi",
	"melengketkan",
	"melentikkan",
	"melengkungkan",
	"melenturkan",
	"melenyapkan",
	"melepasi",
	"melepaskan",
	"melerai",
	"melestarikan",
	"meletuskan",
	"meletupkan",
	"melewati",
	"melibatkan",
	"melicinkan",
	"melihat",
	"melilit",
	"melimpahi",
	"melindungi",
	"melingkari",
	"melingkupi",
	"melintangi",
	"melintas",
	"melintasi",
	"melinting",
	"melipat",
	"melipatkan",
	"melipatgandakan",
	"meliputi",
	"melirik",
	"melobi",
	"meloloskan",
	"melompat",
	"melompati",
	"meloncati",
	"meloncatkan",
	"melonjakkan",
	"melontari",
];