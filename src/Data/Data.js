

const users = [

  {
    id : "1",
    name : "Alisher",
    lastName : "Navoiy",
    born : 1441,  
    bornDate : 9,
    bornMonth : "Feb",
    died : 1501,
    diedDate : 3,
    diedMonth : "Jan",
    books : 55,
    audio : 23,
    genre : "uzbek",
    img : "https://xs.uz/upload/post/2018/04/05/189a3b5c409afb57c085e2f36a7bd8b00405.jpg",
    desc : `Alisher Navoiy (9-fevral 1441-yil — 3-yanvar 1501-yil) — ulugʻ oʻzbek va boshqa turkiy xalqlarning shoiri, mutafakkiri va davlat arbobi boʻlgan.[1][2][3] Gʻarbda chigʻatoy adabiyotining buyuk vakili deb qaraladi, sharqda „nizomi millati va din“ (din va millatning nizomi) unvoni bilan ulugʻlanadi.

    Ali Yazdiy nazariga tushgan, Mavlono Lutfiy yosh shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan. Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan ijodiy hamkorlikda boʻlgan. Navoiy 1469-yilgacha temuriylar orasidagi ichki nizolar sababli Hirotdan yiroqroqda yashagan.`,
    jobs : `Алишер Навоий ижодининг юксак чўққиси “Хамса” асари (1483-85)дир, шоир биринчилардан бўлиб, туркий тилда тўлиқ “Хамса” яратди ва туркий тилда шундай кўламдор асар ёзиш мумкинлигини исботлаб берди. “Хамса” таркибига “Ҳайратул-аброр”, “Фарҳод ва Ширин”, “Лайли ва Мажнун”, “Сабъаи сайёр”, “Садди Искандарий” каби достонлар киради.`,
    location : "Gerat, Afganistan",
    bookObj : [
      {
        bookId : "2",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bc073a51a.jpg.webp",
        bookName : "Hamza",
        bookRating : 5,
        bookGenre : "badiiy",
        bookSenario : "uzbek",
        published : 2019,
        bookPage : 496,
        nashriyot : "Yangi asr avlodi nashri",
        bookInfo : `
        Алишер Навоий ижодининг юксак чўққиси “Хамса” асари (1483-85)дир, шоир биринчилардан бўлиб, туркий тилда тўлиқ “Хамса” яратди ва туркий тилда шундай кўламдор асар ёзиш мумкинлигини исботлаб берди. “Хамса” таркибига “Ҳайратул-аброр”, “Фарҳод ва Ширин”, “Лайли ва Мажнун”, “Сабъаи сайёр”, “Садди Искандарий” каби достонлар киради.`,

        bookInfoTwo : `

        Бугун ўзбек интернети яна бир катта манба билан бойиди.
        Алишер Навоийнинг «Хамса» асари илк бор онлайн оламга тўлиқ жойланди.
        Марҳамат азизлар, буюк шоиримизнинг маънавият гулшанидан баҳраманд бўлинг:
        Жами 54 минг мисрадан иборат Навоийнинг «Хамса»си 1483-1485 йилларда ёзилган бўлиб, беш достондан иборат. Улар қуйидагилар:
        1. «Ҳайрат ул – аброр» («Яхши кишиларнинг ҳайратланиши»). Асар 7976 мисра (3988 байт) бўлиб, 64 боб, 20 мақолатдан иборат. Булардан 21 боби муқаддима, 40 боби — 20 мақолат ва 20 ҳикоя ҳамда масал, сўнгги уч боби эса асар хотимасидир. «Ҳайрат ул – аброр» 1483 йилда арузнинг сариъ баҳрида ёзилган бўлиб, анъанавий муқаддима – «ҳамд ва наът» билан бошланади.
        `,
        bookPrice : "35 000 so’m",
        audioTime : "8:10 soat",
        electron : "pdf"
      },
      {
        bookId : "3",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bff5cfe1f.jpg.webp",
        bookName : "Nasoyim Ul-Muhabbat",
        bookRating : 4.7,
        bookGenre : "uzbek",
        bookPage : 230,
        published : 2020,
        bookSenario : "Badiiy",
        nashriyot : "O'zbekiston nashr",
        bookInfo : `
        Алишер Навоийнинг «Насойим ул-муҳаббат мнн шамойим ул-футувват» асари илк бор арабий, форсий матнлар, уларнинг таржималари ва изоҳлари билан тўлиқ ҳолда нашр этилмоқда. Асар муқаддима ва 770 та шайх (35 таси авлиё аёллар)иинг ҳаёти ва фаолиятига бағишланган. Илгарнги нашрида (1968) атиги 153 та шайхлар ҳақида маълумот берилиб, айрим диний ва тасаввуфий атамалар маълум сабабларга кўра туширилиб қолдирилган эди.`,
        
        bookInfoTwo : `

        «Насойим ул-муҳаббат Абдурраҳмон Жомийнинг «Нафаҳот ул-унс мин ҳазарот ил-қудс» тазқирасининг таржимаси, лекин Навоий Жомий асарига эркин, ижодий муносабатда. бўлади ва унинг асаридаги маълумотларни тўлдириб ёхуд қисқартириб боради ва 618 та шайхлар сонини 770 тага етказади. Тарих ва маданий меросимизни кенг ўрганаётган ҳамда нақшбандийлик таълимотига рағбат кўрсатаётган эканмиз, бу асарни тўлиқ ҳолда нашр этилишн илмий, маърифий ва ахлоқий аҳамиятга эга. Айниқса, Имом Аъзам, Имом Мотуридий, Аҳмад Яссавий, Ҳаким Тирмизий, Баҳоуддин Нақшбандийларнинг ақида ва қарашлари билан халқимизни, хусусан, ёшларимизни яқиндан таништириш жойиздир.
        `,
        bookPrice : "29 000 so’m",
        audioTime : "4:30 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "4",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/fe441a2890346117084cb1c0475bbeb520201017152825576222985FLcOVv.jpg.webp",
        bookName : "So'z chamani",
        bookRating : 3.4,
        bookGenre : "uzbek",
        bookPage : 128,
        published : 2018,
        bookSenario : "Badiiy",
        nashriyot : "Akademnashr",  
        bookInfo : `
        "So'z chamani" turkum kitoblarining ilk risolasi Hazrat Alisher Navoiy g'azallaridan tuzildi. Ko'hna turkiy-o'zbek yozuvining "alif"idan boshlab "yo"siga qadar, barcha harflariga oid she'rlardan saralab olishga harakat qilindi..`,
        
        bookInfoTwo : `

        «Soʻz chamani» turkum kitoblarining navbatdagi risolasi ozarbayjon xalqining otashin shoiri, oshiqi sodiq - hazrat Muhammad Fuzuliy she'rlaridan tuzildi. Zarofat, fasohat va hikmat sohibi boʻlgan bu valiy zotning she'riyati barcha turkiy xalqlar orasida tarjimasiz holda sevib oʻqiladi. Majmuani tuzishda marhum alloma Xolid Rasul nashridan istifoda etildi.
        `,
        bookPrice : "7 500 so’m",
        audioTime : "2:23 soat",
        electron : "pdf"      
      },
      {
        bookId : "5",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/22f61c59d6efa44c12fc5514db0b38132020102215044358569pvingUhnDi.jpg.webp",
        bookName : "Muhokamatu-l-lug‘atayn",
        bookRating : 4.5,
        bookGenre : "uzbek",
        bookPage : 128,
        published : 2018,
        bookSenario : "Badiiy",
        nashriyot : "Akademnashr",
        bookInfo : `
        Гениальный мыслитель Алишер Навои пять веков тому назад в своей монографии  Muhokamatu-l-lug’atayn (Суждение о двух языках) основанный на сравнительном анализе языков заложил основу в мировой лингвистике абсолютно новое научное направление – компаративистика. Учёный при помощи этой работы выработал в сравнительной лингвистике методы исследований, анализа, методологическую базу. Вплоть до нынешних времён этот научный первоисточник в анализе и методов исследования занимает достойное место в современной лингвистике.`,
        
        bookInfoTwo : `

        Научный исследования, основанные на новой научной направлении отцом основателем, которого является Алишер Навои провели в Европе лишь в первой половине XIX веке и оно в истории лингвистики заняло место под названием историко-сравнительная лингвистика. На сегодняшний день это направление науки в современной лингвистике занимает солидное место.
        `,
        bookPrice : "27 000 so’m",
        audioTime : "4:10 soat",
        electron : "pdf"
      }
    ]
  },

  {
    id : "6",
    name : "Xudoyberdi ",
    lastName : "To'xtaboyev",
    born : 1932,  
    bornDate : 17,
    bornMonth : "Dec",
    died : 2021,
    diedDate : 21,
    diedMonth : "March",
    books : 62,
    audio : 14,
    genre : "uzbek",
    img : "https://aniq.uz/photos/news/zigAwnaRcIutTa9.jpeg",
    desc : `Xudoyberdi Toʻxtaboyev (1932-yil 17-dekabr, Oʻzbekiston tumani — 2021-yil 21-mart[1]) — Oʻzbekiston xalq yozuvchisi (1991). Oʻzbekistonda xizmat koʻrsatgan madaniyat xodimi (1982). Qoʻqon pedagogika bilim yurtini (1949), Oʻrta Osiyo universitetini tugatgan (1955). Oʻrta maktabda oʻqituvchi va direktor (1955— 58), 

    Xudoyberdi Toʻxtaboyev oʻzbek bolalar adabiyotini jahon miqyosiga olib chiqqan ijodkorlardan biridir. Asarlari dunyoning koʻpgina tillariga tarjima qilingan. Hamza nomidagi Oʻzbekiston Davlat mukofoti laureati (1989).
    Oʻzbek bolalar yozuvchisi, Oʻzbekiston Respublikasida xizmat koʻrsatgan madaniyat xodimi, Oʻzbekiston xalq yozuvchisi Xudoyberdi Toʻxtaboyev 2021-yil 21-mart kuni 88 yoshda vafot etdi[1]. Shavkat Mirziyoyev yozuvchining vafoti munosabati bilan hamdardlik bildirgan.`,
    jobs : ` Xudoyberdi Toʻxtaboyev oʻzbek bolalar adabiyotini jahon miqyosiga olib chiqqan ijodkorlardan biridir. Asarlari dunyoning koʻpgina tillariga tarjima qilingan. Hamza nomidagi Oʻzbekiston Davlat mukofoti laureati.`,
    location : "Farg'ona , Uzbekiston",
    bookObj : [
      {
        bookId : "7",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/d94e18a8adb4cc0f623f7a83b1ac75b42021090311544060290Dal1OKa7t7.jpg.webp",
        bookName : "Mungli ko'zlar",
        bookRating : 4.2,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2018,
        bookPage : 304,
        nashriyot : "Yangi asr avlodi nashri",
        bookInfo : `
        Ota-onaga farzandining baxtidan bo‘lak neʼmat kerak emas. Xuddi shuningdek, farzand ham eng baxtiyor damlarida ota-ona yonida bo‘lgisi, baxtini ular bilan baham ko‘rgisi keladi. Ota-ona diydori, ota-ona mehrini ular har narsadan aziz biladilar.`,
        
        bookInfoTwo : `

        Qimmatli kitobxon! Sevimli yozuvchimiz Xudoyberdi To‘xtaboyevning siz - aziz kitobsevar do‘stlarimiz uchun taqdim etilayotgan mazkur kitobida ana shu mavzu qalamga olingan. Asarning yozilganiga ancha fursat o‘tgan bo‘lishiga qaramay, u badiiy qimmatini hamon yo‘qotmagan, aksincha, har bir kitobxon ushbu asarni har gal qo‘liga o‘zgacha mehr va iztirob bilan oladi.

        Mol-dunyoni har narsadan uchun bilgan va oxir-oqibatda guldek farzandlarining achchiq qismatiga sabab bo‘lgan ota-ona haqida hikoya qiluvchi mazkur asar, umid qilamizki, yana bir karra o‘zining yangi o‘quvchilarini kashf etadi.
        `,
        bookPrice : "25 000 so’m",
        audioTime : "3:10 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "8",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/363763e5c3dc3a68b399058c34aecf2c2021092512041635287gxdtTx2hrN.jpg.webp",
        bookName : "Quyonlar saltanati",
        bookRating : 3.6,
        bookGenre : "uzbek",
        bookPage : 248,
        published : 2016,
        bookSenario : "Badiiy",
        nashriyot : "Ziyo nashr",
        bookInfo : `
        Bolalar adabiyotining chinakam fidoyi ijodkori Xudoyberdi To‘xtaboyevning bolajonlarimizga atalgan navbatdagi tuhfasi ham o‘ziga xos badiiy qimmatga sazovor asar, desak mubolag‘a qilmagan bo‘lamiz.`,
        
        bookInfoTwo : `

        Ikki yosh o‘spirin yigitning orzulari, ularni tengdoshlaridan ajratib turadigan fazilatlari, qalamga olingan har bir voqea-hodisaning zamiridagi yaxshilikka, ezgulikka undash istagining mavjudligi, о‘ylaymizki, bu gal ham kitobsevar muxlislarimizni quvontiradi. Shu bilan birga kitob qahramonlariga o'xshash istagi ularning ham qalbida paydo bo‘lsa, biz oldimizni maqsadimiz sari bir qadam oldinga tashlaganmiz, deb hisoblaymiz.
        `,
        bookPrice : "11 000 so’m",
        audioTime : "2:50 soat",
        electron : "pdf"
      },
      {
        bookId : "9",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/b96b6ef511a43a1c18545b2c0c305c1f20210417160539151267InK7Oi5Y1.jpg.webp",
        bookName : "Sariq devni minib",
        bookRating : 4.7,
        bookGenre : "uzbek",
        bookPage : 544,
        published : 2014,
        bookSenario : "Badiiy",
        nashriyot : "Yangi Asr Avlodi",  
        bookInfo : `
        O‘zbekiston xalq yozuvchisi, bolalarning sevimli adibi X.To‘xtaboyevning asarlari nafaqat respublikamizda, balki chet ellarda ham maʼlum va mashhurdir`,
        
        bookInfoTwo : `

        "Sariq devni minib" sarguzasht romani bolalar hayotidan olib yozilgan bo‘lib, ularning sevimli kitoblaridan hisoblanadi. Bu asarda orzu-havasga eltadigan chinakam yo‘l halol mehnat, yaxshi xulq-odob va qunt bilan o‘qishda ekanligi taʼkidlanadi.
        `,
        bookPrice : "29 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, ebook"      
      },
      {
        bookId : "10",
        bookImg : "https://kitobxon.com/img_knigi/s7380.jpg",
        bookName : "Qo‘lga tushmas qasoskor",
        bookRating : 4.8,
        bookGenre : "uzbek",
        bookPage : 144,
        published : 2020,
        bookSenario : "Badiiy",
        nashriyot : "Yangi Nashr",
        bookInfo : `
        Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi.`,
        
        bookInfoTwo : `

        Mazkur asarda o‘zbek xalqining tarixida o'chinas iz qoldirgan, xalq
       ozodlik harakatiga boshchilik qilgan qahramonlaridan biri Namoz botir
        haqida so‘z boradi.
        Keng kitobxonlar ommasida katta qiziqish uyg‘otgan ushbu
        roman adabiyotimiz xazinasiga qo'shilgan nodir javohirlardan biri
        hisoblanadi.

        `,
        bookPrice : "7 600 so’m",
        audioTime : "2:10 soat",
        electron : "pdf"
      }
    ]
  },

  {
    id : "11",
    name : "Muhammad",
    lastName : "Yusuf",
    born : 1954,  
    bornDate : 26,
    bornMonth : "Apr",
    died : 2001,
    diedDate : 31,
    diedMonth : "July",
    books : 36,
    audio : 32,
    genre : "uzbek",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sH-VHa4eNtMFsfkEBWsr0xlCD574E1vCFWxJFiXxFFeJmJ66v0yK5AftPMZ7897hT8I&usqp=CAU",
    desc : `Muhammad YuSUF 1954 yil 26 aprelda Andijon viloyatining Marhamat tumanida tug‘ilgan.

    Shoirning dastlabki she’rlari 1976 yili «O‘zbekiston adabiyoti va san’ati» haftaligida bosilgan. Birinchi kitobi «Tanish teraklar» nomi bilan 1985 yilda chop etiladi. So‘ng uning «Bulbulda bir gapim bor», «Iltijo», «Uyqudagi qiz», «Ko‘nglimda bir yor», «Erka kiyik» nomli qator she’riy to‘plamlari nashr qilinadi.`,
    jobs : ` Mazkur to‘plamlarga kirgan she’rlarida shoir o‘zi mansub bo‘lgan avlodning eng olijanob va yuksak insoniy fazilatlari bilan birga ular qalbidagi yoshlik sururini, ishq va muhabbatning ajib tug‘yonlarini samimiy ohanglarda yonib kuyladi.`,
    location : "Andijon, Uzbekiston",
    bookObj : [
      {
        bookId : "12",
        bookImg : "https://kitobxon.com/img_knigi/s3000.jpg",
        bookName : "Xalq bo‘l, elim",
        bookRating : 4.4,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2012,
        bookPage : 288,
        nashriyot : "O'zbekiston NMIU",
        bookInfo : `
        Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan`,
        
        bookInfoTwo : `
        Va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi.
        `,
        bookPrice : "26 000 so’m",
        audioTime : "5:20 soat",
        electron : "pdf"
      },
      {
        bookId : "13",
        bookImg : "https://kitobxon.com/img_knigi/s5228.jpg",
        bookName : "Quyoshga qarab oqqan suv",
        bookRating : 4.6,
        bookGenre : "uzbek",
        bookPage : 232,
        published : 2018,
        bookSenario : "Badiiy",
        nashriyot : "Nurafshon Business",
        bookInfo : `
        Kitoblari va she’rlari: «Tanish teraklar» (1985, birinchi to‘plami), «Bulbulga bir gapim bor» (1987), «Iltijo» (1988), «Uyqudagi qiz» (1989), «Halima enam allalari» (1989), «Ishq kemasi» (1990)
        `,
        
        bookInfoTwo : `
        «Ko‘nglimda bir yor» (1990), «Bevafo ko‘p ekan» (1991), «Erka kiyik» (1992), «Osmonimga olib ketaman», «Kumush», «Kokilingni kim kesdi», «Aldov», «Turkman qiz», «Yur, Muhammad, ketdik bu yerdan», «Yolg‘onchi yor», «Qora quyosh» (doston) va boshq.
        `,
        bookPrice : "25 000 so’m",
        audioTime : "5:25 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "14",
        bookImg : "https://kitobxon.com/img_knigi/s708.jpg",
        bookName : "Shoir sevgisi",
        bookRating : 3.6,
        bookGenre : "uzbek",
        bookPage : 196,
        published : 2017,
        bookSenario : "Badiiy",
        nashriyot : "Noshir",  
        bookInfo : `
        Ушбу тўпламда М.Юсуфнинг турли даврларда ёзган шеърларидан саралаб олинди.`,
        
        bookInfoTwo : `

        Тўплам "Қизлар қўшиғи", "Сени ҳеч ким севолмайди менингдек", "Қизғалдоғим" деган бобчалардан иборат бўлиб, муҳаббат, табиат мавзуларидаги шеърлар жамланган.
        `,
        bookPrice : "22 000 so’m",
        audioTime : "3:45 soat",
        electron : "pdf"      
      },
      {
        bookId : "15",
        bookImg : "https://kitobxon.com/img_knigi/s482.jpg",
        bookName : "Saylanma",
        bookRating : 3.5,
        bookGenre : "uzbek",
        bookPage : 272,
        published : 2021,
        bookSenario : "Badiiy",
        nashriyot : "Sharq",
        bookInfo : `
        Ўзбекистон халқ шоири марҳум Муҳаммад Юсуф номини
        билмаган, лоақал у ёзган шеърларнинг бир сатрини хиргойи
        қилмаган юртдошимиз йўқ бўлса керак.`,
        
        bookInfoTwo : `

        «Сайланма»нинг ушбу
        тузатилган қайта нашрига шоирнинг китобхонлар томонидан
        самимий қаршиланган энг сара шеърлари, «Кўхна қудуқ» ва
        «Қора қуёш» достонлари, шу

        `,
        bookPrice : "21 500 so’m",
        audioTime : "6:10 soat",
        electron : "pdf, ebook"
      }
    ]
  },

  {
    id : "16",
    name : "Abdulla",
    lastName : "Oripov ",
    born : 1941,  
    bornDate : 21,
    bornMonth : "March",
    died : 2016,
    diedDate : 5,
    diedMonth : "Nov",
    books : 24,
    audio : 4,
    genre : "uzbek",
    img : "https://ilmlar.uz/wp-content/uploads/2021/05/Abdulla-oripov-tarjimai-hol.jpg",
    desc : `Abdulla Oripov — ardoqli oʻzbek shoiri va jamoat arbobi. Zamonaviy oʻzbek sheʼriyatida inson qalbidagi murakkablik va ziddiyatlarni teran, haqqoniy oʻziga xos betakror kuylagan taniqli ijodkor. Oripov hozirgi oʻzbek sheʼriyatiga yangicha badiiy tafakkur yoʻsinlarini olib kirdi. U tub mohiyati bilan Yassaviy, Navoiy, Bobur, Choʻlpon, Gʻafur Gʻulom singari ijodkorlar badiiy anʼanalarining davomchisi hisoblanadi. Shoir Oʻzbekiston Respublikasi Davlat madhiyasi sheʼri muallifidir.`,

    jobs : `Abdulla Oripov 1941-yilning 21-martida Qashqadaryo] viloyati, Koson tumanidagi Nekoʻz qishlogʻida tugʻildi. Qishloq Qoʻngʻirtov etagiga oʻrnashgan boʻlib, oqar suv taqchil boʻlsa-da, seryomgʻir kelgan yillarda koʻkat-u maysalarga koʻmilib qoladigan kengish joy edi..`,
    location : "Qashqadaryo, Uzbekiston",
    bookObj : [
      {
        bookId : "17",
        bookImg : "https://kitobxon.com/img_knigi/s7343.jpg",
        bookName : "Zamondoshlari xotirasida",
        bookRating : 3.8,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2015,
        bookPage : 576,
        nashriyot : "G'afur G'ulom",
        bookInfo : `
        “Эътироф” китобига устозга бағишлаб шеърият мухлислари, шогирдлари, шоир дўстлари томонидан ёзилган шеърий эҳтиромларини жамладим, – дейди шоира Фароғат Худоқулова. – Унга бошида муаллифлардан 500га яқин шеърлар тушди. Шундан 100дан ортиқ энг сараларини танлаб олдик. Шеърларда акс эттирилган соғинч ва ўкинч туйғулари халқнинг буюк шоиримизга бўлган меҳр ва ҳурмати белгисидир.`,
        
        bookInfoTwo : `
        “Шоирнинг туғилиши” номли китобга киритилган шеърлар шоирнинг “эълон қилинмаган шеърлар” туркумидан жамланган, – дея таъкидлади Ёзувчилар уюшмаси аъзоси Нурбой Жабборов. – Унга айрим шеърларнинг қўлёзмалари ҳам жойлаштирилган
        `,
        bookPrice : "23 500 so’m",
        audioTime : "3:15 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "18",
        bookImg : "https://kitobxon.com/img_knigi/s1329.jpg",
        bookName : "Istiqlol manzaralari",
        bookRating : 4.9,
        bookGenre : "uzbek",
        bookPage : 64,
        published : 2019,
        bookSenario : "Badiiy",
        nashriyot : "Tafakkur",
        bookInfo : `
        Йигирма йил йўл босиб,
        Маккага етган каби.
        Юраклардан дард, алам,
        Армонлар кетган каби.
        Ёхуд тинмай шунча йил
        Ҳикмат конин қазгандай.
        Йигирма йил бир шоир
        Шоҳ асарин ёзгандай.
        `,
        
        bookInfoTwo : `
        Кул босган ўчоқлардан
        Чиққан каби ўт-олов.
        Қўл етмас чўққиларга
        Қадалгандек туғ-ялов.
        `,
        bookPrice : "5 000 so’m",
        audioTime : "2:35 soat",
        electron : "pdf"
      },
      {
        bookId : "19",
        bookImg : "https://kitobxon.com/img_knigi/s344.jpg",
        bookName : "Everest va ummon",
        bookRating : 3.3,
        bookGenre : "uzbek",
        bookPage : 394,
        published : 2016,
        bookSenario : "Badiiy",
        nashriyot : "O'zbekiston NMIU",  
        bookInfo : `
        Шеър — руҳият тадқиқи, туйғулар тасвири. Унда озод
        ва покиза кўнгилнинг гоҳ майин, гоҳ нолакор, гоҳ ўтли,
        гоҳ мунгли манзараларини кўришингиз мумкин.`,
        
        bookInfoTwo : `

        Ушбу
        манзумада ана шу туйғулар мусаввири, Ўзбекистон Қаҳрамони, Халқ шоири Абдулла Ориповнинг сўнгги йилларда ва вафотидан олдин ёзилган шеърлари жамланган.
        Ўйлаймизки, ушбу тўплам шеърият ихлосмандларига
        муносиб туҳфа бўлди
        `,
        bookPrice : "10 600 so’m",
        audioTime : "5:10 soat",
        electron : "pdf"      
      },
      {
        bookId : "20",
        bookImg : "https://kitobxon.com/img_knigi/s4491.jpg",
        bookName : "Umr manzillari",
        bookRating : 4.1,
        bookGenre : "uzbek",
        bookPage : 116,
        published : 2017,
        bookSenario : "Badiiy",
        nashriyot : "Tafakkur qanoati",
        bookInfo : `
        Shundan keyin shoirning «Ko‘zlarim yo‘lingda», «Ruhim», «Xotirot», «Yillar armoni» singari to‘plamlari chop etildi va ularning har biri adabiyot maydonida hodisa bo‘ldi. Uning «Bahor», «O‘ylarim», «Onajon» kabi she’rlari nafaqat o‘zbek she’riyati, balki jahon she’riyatining ham namuna asarlariga aylandi.`,
        
        bookInfoTwo : `

        A. Oripov turli janrlarda ijod qildi. Jumladan, «Sohibqiron» pesasini yozib, buyuk sarkarda Amir Temur obrazini yarat- di. Shoir Dante «Ilohiy komediya»sining «Do‘zax» qismini tilimizga yuksak mahorat bilan tarjima qildi.
        `,
        bookPrice : "15 500 so’m",
        audioTime : "4:40 soat",
        electron : "pdf"
      }
    ]
  },

  {
    id : "21",
    name : "Odil",
    lastName : "Yoqubov",
    born : 1926,  
    bornDate : 20,
    bornMonth : "Oct",
    died : 2009,
    diedDate : 21,
    diedMonth : "Dec",
    books : 18,
    audio : 43,
    genre : "uzbek",
    img : "https://telegra.ph/file/49a3cba9b33dadafbf734.jpg",
    desc : `Odil Yoqubov — oʻzbek sovet adabiyoting yirik vakili, 1926-yili Qozogʻistonning Turkiston tumanidagi Qarnoq qishlogʻida ziyoli oilada tugʻilgan.

    Ikkinchi jahon urushi boshlangach, urushda qatnashish uchun yoshini katta koʻrsatib, Yaponiya frontiga joʻnagan. 1945-yildan 1950-yilgacha haqiqiy harbiy xizmatda boʻldi. 1951–1956-yillar mobaynida Oʻrta Osiyo Davlat Universiteti (hozirgi Milliy universitet)da taʼlim olgan. „Literaturnaya gazeta“ning Oʻzbekiston boʻyicha muxbiri, Oʻzbekiston yozuvchilari uyushmasi raisi, „Oʻzbekiston adabiyoti va sanʼati“ gazetasi bosh muharriri va boshqa mas’ul vazifalarda ishlagan.`,

    jobs : `Yoqubov 1985-yil Oʻzbekiston xalq yozuvchisi ordeni bilan taqdirlangan. Oʻzbekiston milliy universiteti filologiya fakultetini tugatgan (1956). Oʻzbekiston Yozuvchilar uyushmasida adabiy maslahatchi (1955-59), „Literaturnaya gazeta“ning Oʻzbekistondagi maxsus muxbiri (1959-63; 1967-70), „Oʻzbekfilm“ kinostudiyasi va Oʻzbekiston davlat kinematografiya qoʻmitasida bosh muharrir`,
    location : "Toshkent, Uzbekiston",
    bookObj : [
      {
        bookId : "22",
        bookImg : "https://kitobxon.com/img_knigi/s6809.jpg",
        bookName : "Onaizor",
        bookRating : 4.6,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2018,
        bookPage : 336,
        nashriyot : "G'afur G'ulom",
        bookInfo : `
        Китоб Ғафур Ғулом номидаги нашриёт-матбаа ижод уйи томонидан чоп этилган.Тақдимотда нашриёт ходимлари, ёзувчининг яқин қариндошлари, шогирдлари ва адабиёт ихлосмандлари иштирок этди.

        Унда шоир Муҳиддин Омон ва бошқалар Одил Ёқубовнинг бой адабий мероси, ибратли ҳаёт йўли ҳақида гапирди.`,
        
        bookInfoTwo : `
        Тўплам «Уруш кўрган адиблар» рукни остида босилган бўлиб, унга атоқли адибнинг «Излайман» қиссаси, «Музқаймоқ», «Қайдасан, Морико», «Онаизор» каби Иккинчи жаҳон уруши даври қийинчиликлари акс этган ҳикоялари киритилган.
        `,
        bookPrice : "20 900 so’m",
        audioTime : "2:45 soat",
        electron : "pdf"
      },

      {
        bookId : "23",
        bookImg : "https://kitobxon.com/img_knigi/s7020.jpg",
        bookName : "Diyonat",
        bookRating : 3.9,
        bookGenre : "uzbek",
        bookPage : 376,
        published : 2020,
        bookSenario : "Badiiy",
        nashriyot : "Qaldirg'och",
        bookInfo : `
        Roman janri inson borligʻi hamda davr ruhiyatini izchil va teran, yaxlit va tugal ifodalash xususiyatiga egadir. Badiiy shakl qahramon ruhiy dunyosini batafsil ochish barobarida voqelikka boʻlgan ongli-sogʻlom munosabatni ham sharhlaydi.
        `,
        
        bookInfoTwo : `
        Tashqi muhitning bevosita va bilvosita inson yashash tarziga taʼsirini ifodalash, koʻrsatish, oʻz munosabatini ham bildirib oʻtish janr qonuniyatlari sirasiga kiradi. Shu maʼnoda, roman mavjud voqelik silsilasida yangi hamda muhim ahamiyatga molik falsafiy-axloqiy muammolarni ilgari suradi. Odil Yoqubovning “Diyonat” romani ham bundan mustasno emas. Vaqtida “voqea” boʻlgan asarlar qatoridan joy olgan ushbu roman hayotning muhim qirralarini oʻzida jamlay olganligi bilan ham qadrlidir. Bir qarashda roman psixologik asardek tuyuladi.
        `,
        bookPrice : "25 000 so’m",
        audioTime : "1:50 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "24",
        bookImg : "https://kitobxon.com/img_knigi/s5202.jpg",
        bookName : "Adolat manzili",
        bookRating : 3.9,
        bookGenre : "uzbek",
        bookPage : 240,
        published : 2019,
        bookSenario : "Badiiy",
        nashriyot : "Yangi Nashr",  
        bookInfo : `
        Odil Yoqubov shunday jamiyatda dunyoga keldi, voyaga yetdi, hayot kechirdiki, bevosita, har bitta ijod namunasidan shu hayot tajribasi, ko‘rgan kechirganlarini qog‘ozga tushurdi.`,
        
        bookInfoTwo : `
        "Adolat manzili" romanida adolatsizlikning eng mudhish ko‘rinishi bir millat, bir katta davlat ustidan qilingan adolatsizlikni qamrab olgani bilan o‘ziga xoslik kasb etadi.
        `,
        bookPrice : "16 000 so’m",
        audioTime : "7:25 soat",
        electron : "pdf"      
      },
      {
        bookId : "25",
        bookImg : "https://kitobxon.com/img_knigi/s4134.jpg",
        bookName : "Ko‘hna dunyo",
        bookRating : 4.5,
        bookGenre : "uzbek",
        bookPage : 480,
        published : 2014,
        bookSenario : "Badiiy",
        nashriyot : "Yangi ask avlodi",
        bookInfo : `
        «Odil Yoqubovning «Ko’hna dunyo» romanining markazida Ibn Sino hamda Beruniy taqdirlari, ular yashagan davri ruradi. Muallifning xulosalari va umumlashmalari keng, shuning uchun tarixiy materialga ajib aktual ma’no bag’ishlaydi.`,
        
        bookInfoTwo : `

        Zamonlar osha qilingan sayohat teran falsafiy umumlashmalar chiqarishga imkon beradi. Romanda tasvirlangan barcha voqealar hujjatlar bilan cheklab qo’yilmagan. Odil Yoqubov tarixni xuddi ko’rib turadi, tarix bilan bahslashadi, zamondoshlarga uzoq o’tmishdoshlarining tajribalaridan guvohlik berayotganday bo’ladi. U tarixga bugungi nuqtayi nazaridan qaraydi»
        `,
        bookPrice : "11 600 so’m",
        audioTime : "6:25 soat",
        electron : "pdf, ebook"
      }
    ]
  },

  {
    id : "26",
    name : "Abdulhamid ",
    lastName : "Choʻlpon",
    born : 1897,  
    bornDate : 25,
    bornMonth : "Nov",
    died : 1938,
    diedDate : 4,
    diedMonth : "Oct",
    books : 22,
    audio : 12,
    genre : "uzbek",
    img : "https://upload.wikimedia.org/wikipedia/commons/9/9c/Abdulhamid_Cholpon.jpg",
    desc : `Choʻlpon (taxallusi; asl ism-sharifi Abdulhamid Sulaymon oʻgʻli Yunusov) (1897, Andijon — 1938.4.10, Toshkent) — shoir, yozuvchi, dramaturg , tarjimon, tanqidchi va jamoat arbobi. Dastlab madrasada (1908-1912), soʻngra rus-tuzem maktabida (1912-1914) oʻqigan. Sharq mumtoz shoirlari asarlarini mutolaa qilish va jadid matbuotini kuzatish yoʻli bilan adabiy, ijtimoiy-siyosiy bilimini oshirgan.`,

    jobs : `1914-yil Toshkentga kelib, „Sadoi Turkiston“ gazetasi bilan hamkorlik qilgan. „Yangi Sharq“, „Ishtirokiyun“ (1920-yildan „Qizil bayroq“, 1922-yildan „Turkiston“) gazetasida adabiy xodim (1919-1923), Xalq maorif komissarligi qoshidagi Ilmiy kengash (1921-yildan Oʻlka oʻzbek bilim hayʼati, 1922-yildan Ilmiy hayʼat)da rais (1920-1923), „Buxoro axboroti“ gazetasida muharrir (1921-1922)`,
    location : "Toshkent, Uzbekiston",
    bookObj : [
      {
        bookId : "27",
        bookImg : "https://kitobxon.com/img_knigi/s6963.jpg",
        bookName : "Kecha va kunduz",
        bookRating : 5,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2019,
        bookPage : 328,
        nashriyot : "G'afur G'ulom",
        bookInfo : `
        Абдулҳамид Сулаймон Чўлпоннинг “Кеча ва кундуз” романи яратилганига қарийб 80 йил бўлса-да, у ҳамон қўлдан-қўлга ўтиб келмоқда. Мазкур асар икки қисимдан иборат бўлиб, дастлабки – “Кеча” деб номлангани қўлингиздаги китобда акс этади. 
        `,
        
        bookInfoTwo : `
        “Бугун” деб аталган иккинчи қисми ҳақида эса маълумотлар йўқ.  Китобда ўзбекларга хос андиша, ҳиммат, иффат ва соддалик каби фазилатлар билан бирга хотинбозлик ва мол-мулк орттириш йўлидаги иллатлар ҳам ўз интиқосини топган. Бу каби сифатлар ‎ва иллатлар китобхонни чуқур мушоҳада юритишга ундайди. Чўлпон дунёси, унинг олами, ижодидаги нафислик ва сержилолик сиз азизларга манзур бўлади, деган умиддамиз. Асар ёшларнинг миллий маънавиятини шакллантиришда муҳим ўрин тутади.
        `,
        bookPrice : "17 480 so’m",
        audioTime : "4:45 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "28",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/d2cd33e9c0236a8c2d8bd3fa91ad3acf2022042615345389929X4Ktze57tL.jpg.webp",
        bookName : "Жадид адабиёти намоёндалари",
        bookRating : 4.1,
        bookGenre : "uzbek",
        bookPage : 336,
        published : 2015,
        bookSenario : "Badiiy",
        nashriyot : "Zabarjad media",
        bookInfo : `
        Ватанининг мустабидлар зулмидан озод бўлишини, миллати фарзандларини шарафга тўлганлар қаторида кўришни орзулаган халқимизнинг қалби уйғоқ фарзандлари - «жадид адабиёти намояндалари» бугун яна ўз ўқувчилари билан юзлашмоқда.
        `,
        
        bookInfoTwo : `
        Халқ маънавиятини бойитиш йўлида олиб борилган курашлар, миллий матбуот, адабиёт ва театрнинг одамлар тафаккурини оширишдаги аҳамияти ҳақида асарларида куюниб ёзган, бу борада фидойилик кўрсатган, алалоқибат қатағонга учраганлар ҳақида сўз бораркан, Абдулла Қодирий, Абдурауф Фитрат, Абдулҳамид Чўлпон, Абдулла Авлоний, Маҳмудхўжа Беҳбудий, Мунаввар қори Абдурашидхонов, Усмон Носир, Исъҳоқхон Ибрат сиймолари кўз олдимизда гавдаланади. Улар ўз асарларида кўтарган муаммолар ҳамон бизнинг қаршимизда бўй кўрсатиб турибди. Биз ҳамон «миллатни уйғотиш уйғонганларнинг вазифаси» деган чорловга муносиб жавоб қайтаролганимиз йўқ.
        `,
        bookPrice : "49 000 so’m",
        audioTime : "6:25 soat",
        electron : "pdf"
      },
      {
        bookId : "29",
        bookImg : "https://kitobxon.com/img_knigi/s7206.jpg",
        bookName : "She’rlar",
        bookRating : 3.2,
        bookGenre : "uzbek",
        bookPage : 272,
        published : 2017,
        bookSenario : "Badiiy",
        nashriyot : "Akademnashr",  
        bookInfo : `
        Бир қатор журнал, тўпламларда Чўлпонга нисбат берилган талайгина шеърлар эълон қилинган бўлиб, бу каби шеърларнинг айримлари ҳам мазмун, ҳам тузилиши жиҳатидан шоирнинг машҳур “Бузилган Ўлкага” шеърига ўхшаб кетади.`,
        
        bookInfoTwo : `
        Шу ва шунга ўхшаш халқ орасида кенг тарқалиб кетган шоирнинг шеърлари асосида кейинчалик, уруш ҳамда урушдан сўнгги йиллари халқ Чўлпоннинг номидан бошқа шеърлар яратиб, куйлаб юргани сир эмас. Шу сингари шеърлардан яна бири “Гўзал Туркистон” саналади:
        `,
        bookPrice : "40 000 so’m",
        audioTime : "4:25 soat",
        electron : "pdf, ebook"      
      },
      {
        bookId : "30",
        bookImg : "https://kitobxon.com/img_knigi/s3880.jpg",
        bookName : "Nazm",
        bookRating : 4.2,
        bookGenre : "uzbek",
        bookPage : 48,
        published : 2012,
        bookSenario : "Badiiy",
        nashriyot : "Akademnashr",
        bookInfo : `
        Хорижда Чўлпоннинг шеърий ижоди бўйича энг кўп ёзганлардан яна бири Боймирза Ҳайит бўлади. Б. Ҳайит ўзининг бир қатор асарларида шоир шеъриятига тўғри баҳо беради:`,
        
        bookInfoTwo : `

        “Чўлпоннинг инсонлар қалбини ларзага келтирган, туркистонликлардаги миллий туйғунинг дил ифодаси бўлган “Уйғониш”, “Булоқлар” ва “Тонг сирлари” шеърий тўпламлари унинг хеч вақт адабиёт тарихидан ўчириб бўлмайдиган бир сиймо ҳолига келтирган. Балки Чўлпон ўз вақтида ижодининг юксак поғонасига етган бўлуви мумкин
        `,
        bookPrice : "5 200 so’m",
        audioTime : "1:45 soat",
        electron : "pdf"
      }
    ]
  },

  {
    id : "31",
    name : "Tohir  ",
    lastName : "Malik",
    born : 1946,  
    bornDate : 27,
    bornMonth : "Dec",
    died : 2019,
    diedDate : 16,
    diedMonth : "May",
    books : 43,
    audio : 31,
    genre : "uzbek",
    img : "https://upload.wikimedia.org/wikipedia/ru/9/9d/%D0%A2%D0%BE%D1%85%D0%B8%D1%80_%D0%9C%D0%B0%D0%BB%D0%B8%D0%BA.jpg",
    desc : `1946-yilning 27-dekabrida Toshkent shahrida ziyoli oilasida dunyoga kelgan. Toshkent Davlat Universiteti (hozirgi Oʻzbekiston Milliy Universiteti)ning jurnalistika fakulteti kechki boʻlimida oʻqib, kunduzi qurilish ishlarida qatnashgan. 1966-yildan beri Oʻzbekiston radiosida, gazeta va jurnallar tahririyatida, Oʻzbekiston yozuvchilar uyushmasida, nashriyotlarda faoliyat yuritgan. Hozirgi kunda „Sharq“ NMAK Bosh tahririyatida muharrir.`,

    jobs : `Barcha tengdoshlari singari u ham urushdan keyingi turmush qiyinchiliklarini boshidan kechirgan. Oilada besh farzand boʻlib Tohir Malik eng kenja farzand boʻlgan. Tohir maktabga bormay turiboq, dars tayyorlab oʻtirgan akalari va opalari yonida savodni oʻzlashtirgan. Ukasining kitobga boʻlgan ixlosini sezgan akalari unga — Mard yigit ertaklar toʻplamini sovgʻa qilishadi va ushbu kitobni hozirga qadar eʼzozlab saqlashini aytgan. Taniqli oʻzbek adibi va tarjimoni Mirzakalon Ismoiliy Tohir Malikning togʻasi boʻlib, uni 1949-yilda "xalq dushmani" degan tuhmat bilan qamoqqa olishadi. Bu haqida adibning oʻzi ushbu soʻzlarni aytgan`,

    location : "Toshkent, Uzbekiston",
    bookObj : [
      {
        bookId : "32",
        bookImg : "https://kitobxon.com/img_knigi/s6479.jpg",
        bookName : "So‘nggi o‘q",
        bookRating : 4.9,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2017,
        bookPage : 400,
        nashriyot : "Tohir Malik nomidagi nashriyot uyi",
        bookInfo : `
        Tohir Malikning "Savohil" hamda "So‘nggi o‘q" qissalari o‘zbek kitobxonlari uchun yaqin o‘tmishimizga bir nazar bo‘lib , tarixiy voqealar asnosida inson ruhiyatiga qilinadigan benazir sayohat hamdir
        `,
        
        bookInfoTwo : `
        Qismat va zamonning achchiq to‘lqinlariga tashlangan qahramonning temir bardoshiga tan bermay ilojimiz yo‘q. Tog‘dek g‘amlar ostida ham eng buyuk sharaf - inson bo‘lib qolish darsini o‘rganamiz.
        `,
        bookPrice : "23 500 so’m",
        audioTime : "3:21 soat",
        electron : "pdf"
      },
      {
        bookId : "33",
        bookImg : "https://kitobxon.com/img_knigi/s6743.jpg",
        bookName : "Mehmon tuyg‘ular",
        bookRating : 4.4,
        bookGenre : "uzbek",
        bookPage : 544,
        published : 2018,
        bookSenario : "Badiiy",
        nashriyot : "Tohir Malik nomidagi nashriyot uyi",
        bookInfo : `
        Ўзбекистон халқ ёзувчиси Тоҳир Малик бир неча йил аввал шу номда китоб нашр эттирган эди. Бу китобга жамланган фалсафий фикрларнинг айримлари билан азиз мухлислар «Иймонлашиш умиди», «Тош қалбларга назар солинмас» каби тўпламлари орқали танишган бўлишлари мумкин
        `,
        
        bookInfoTwo : `
        Мазкур китобни нашрга тайёрлашда адиб кўп янгиликлар киритди. Дунёни тушунишга хизмат қилувчи янги ҳикматлар билан бойитди
        `,
        bookPrice : "21 500 so’m",
        audioTime : "3:50 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "34",
        bookImg : "https://kitobxon.com/img_knigi/s5188.jpg",
        bookName : "Tiriklik suvi",
        bookRating : 4.8,
        bookGenre : "uzbek",
        bookPage : 256,
        published : 2019,
        bookSenario : "Badiiy",
        nashriyot : "Davr press",  
        bookInfo : `
        Мазкур китобга одамийлик ҳусниниг гултожи ҳисобланган номус ва ҳаё фазилати баробарида энг хунук иллиатлардан бўлмиш номуссизлик ва беҳаёлик иллатлари ҳақида баҳс юритувчи бадиий асарлар жамланган..`,
        
        bookInfoTwo : `
        Номус фазилатига эришганлар саодатга етишсалар, шайтонга тиз чўкиб ибодат қилувчи номуссизларни кутаётган азоблар ҳақида ҳам сўз боради.
        `,
        bookPrice : "32 600 so’m",
        audioTime : "6:50 soat",
        electron : "pdf"      
      },
      {
        bookId : "35",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/0ae3f79a30234b6c45a6f7d298ba13102021122119073186749rVxoEBLitv.jpg.webp",
        bookName : "Padarkush",
        bookRating : 4.7,
        bookGenre : "uzbek",
        bookPage : 344,
        published : 2018,
        bookSenario : "Badiiy",
        nashriyot : "Tohir Malik nomidagi nashriyot uyi",
        bookInfo : `
        Inson va hayot, inson va xayol, iymon, diyonat, oqibat uyg‘unligi Tohir Malik asarlarining bosh mavzusi bo‘lib, bunda yaxshilikning yomonlik ustidan g‘olib kelishi, mehr muhabbat esa tiriklik tarozisida posangi bo‘lib xizmat qilishi go‘zal tarzda ifoda etiladi.`,
        
        bookInfoTwo : `

        Mazkur kitobga yozuvchi Tohir Malikning «Omad qushini uchirib yuborgan kishi» nomli qissasi va turli yillarda, turli tarzlarda yozilgan sara hikoyalari jamlandi.
        `,
        bookPrice : "55 000 so’m",
        audioTime : "7:20 soat",
        electron : "pdf, ebook"
      }
    ]
  },

  {
    id : "36",
    name : "Pirimqul",
    lastName : "Qodirov",
    born : 1928,  
    bornDate : 25,
    bornMonth : "Oct",
    died : 2010,
    diedDate : 20,
    diedMonth : "Dec",
    books : 37,
    audio : 11,
    genre : "uzbek",
    img : "https://static.xabaruz.com/uploads/15/720__rmppuco36-Do9x5s8y9I3aA3_LDt0O08.jpg",
    desc : `1951-yildan Oʻrta Osiyo Davlat universiteti (hozirgi [[OʻzMU]]) sharqshunoslik fakultetini va 1954-yili Moskvadagi Adabiyot institutining aspiranturasini bitirgan. Filologiya fanlari nomzodi. Birinchi kitobi – „Studentlar“ 1950-yilda chop etilgan. Yangi avlod oʻzbek ziyolilarining shakllanishi „Uch ildiz“ romanida (1958) tasvirlangan. Roman 1959-yilda Moskvada rus tilida chop etildi.`,

    jobs : `Yozuvchi tugʻilgan togʻli qishloq hayoti „Qora koʻzlar“ (1966) romanida aks ettirilgan. Pirimqul Qodirov „Qadrim“ (1963), „Erk“ (1969), „Meros“ (1975) qissalari, „Olmos kamar“ (1977) romani muallifi.

    Soʻng oʻttiz yil davomida xalqning tarixiy xotirasini uygʻotadigan „Yulduzli tunlar“ (1978), „Avlodlar dovoni“ (1988), „Ona lochin vidosi“ (2001) nomli tarixiy romanlarni chop ettirdi. Bobur haqidagi roman oʻzbek tilida 6 marta, rus tilida 5 marta katta tirajda chop etildi. U hind, urdu, bengal, turk, qozoq, uygʻur, turkman tillariga oʻgirilgan.`,

    location : "Toshkent, Uzbekiston",
    bookObj : [
      {
        bookId : "37",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/3295c76acbf4caaed33c36b1b5fc2cb12021052111494312960hgKUgNsft8.jpg.webp",
        bookName : "Avlodlar dovoni",
        bookRating : 4.7,
        bookGenre : "uzbek",
        bookSenario : "Badiiy",
        published : 2019,
        bookPage : 528,
        nashriyot : "Yoshlar",
        bookInfo : `
        Pirimqul Qodirov «Yuduzli tunlar»ning mantiqiy davomi sanalmish Boburning sadoqatli, jasur farzandi Humoyun va nabirasi - tarixda «chinakam daho shaxs» deb nom olgan 
        `,
        
        bookInfoTwo : `
        Akbar hayoti haqida hikoya qiluvchi «Avlodlar dovoni» («Akbar») romanini 80-yillarda yaratgan. Asarda pok sevgi, insoniy mehru muhabbat, shavqu shijoat tarixiy qahramonlar qiyofasida yorqin aks ettirilgan.
        `,
        bookPrice : "29 000 so’m",
        audioTime : "5:40 soat",
        electron : "pdf, ebook"
      },
      {
        bookId : "38",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/ab8aa05e782481f55fc1412a97e7ac342022012010284092605nvTaSqzqAZ.jpg.webp",
        bookName : "Yulduzli tunlar",
        bookRating : 3.6,
        bookGenre : "uzbek",
        bookPage : 560,
        published : 2015,
        bookSenario : "Badiiy",
        nashriyot : "Адабиёт учқунлари",
        bookInfo : `
        Mahoratli yozuvchi Pirimqul Qodirovning ushbu asari o‘zbek adabiyotining eng sara tarixiy romanlari sirasiga kiradi. Unda Movarounnahrdek saltanatning parchalanib ketishi, Temuriylar sulolasining inqirozi, hokimiyatga erishish ilinjida taxt talashib, bir-birlariga qilich ko‘targan og‘a-ini, tog‘a-jiyanlarning fojiaviy qismati aks ettirilgan.Roman voqealari orqali o‘quvchi tarixda Temuriylar o‘rtasidagi nizolar, fitna, fisq-u fasod tufayli yuzaga kelgan qonli urushlar, ayovsiz xunrezliklar oqibatida behad qonxo‘r beklar zulmidan sillasi butkul qurigan xalqning g‘oyat nochor ahvoli va uyyushqoqlikdan bexabar Temuriylarni Shayboniyxon qanchalar oson mahv etgani bilan tanishadi.
        `,
        
        bookInfoTwo : `
        Asarning bosh qahramoni Mirzo Bobur odamlaridagi bemehrlik, bir-birini ko‘rolmaslik, xudbinlik, xiyonat singari jirkanch illatlar bilan g‘oyat erta, o‘n ikki yoshda taxtga o‘tirganida ro‘baro bo‘ldi. Taqdirning ayanchli zarbalaridan zada bo‘lgan shohning kuygan yuragi- shoir qalbi qalandarlikni ixtiyor etgani ajab emas. Asar mutolaasi davomida butun umr vatan ishqida yonib, sog‘inch bilan o‘rtanib, “Jonimdin o‘zga yori vafodor topmadim...” deya iztirob chekkan bobokalonimiz dardi kitobxon qalbini larzaga soladi.
        `,
        bookPrice : "29 000 so’m",
        audioTime : "2:55 soat",
        electron : "pdf"
      },
      {
        bookId : "39",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/299fb2142d7de959380f91c01c3a293c2021100211134531969GKHD0K1WlI.jpg.webp",
        bookName : "Qora ko'zlar",
        bookRating : 4.1,
        bookGenre : "uzbek",
        bookPage : 352,
        published : 2012,
        bookSenario : "Badiiy",
        nashriyot : "Янги Аср Авлоди",  
        bookInfo : `
        “Qorа kozlаr” romаni 60-yillаr boshidаgi qishloq hаyoti mаnzаrаlаrini, turmush qiyinchiliklаrini, murаkkаbliklаrini, ziddiyatlаrini royi-rost korsаtgаnligi bilаn аjrаlib turаdigаn аsаr edi. Undа hozirgi kunlаrgа hаmohаng muаmmolаr tаlqinini hаm uchrаtish mumkin edi.`,
        
        bookInfoTwo : `
        Хususаn, romаn rаhbаrlikdаgi, хojаlikdаgi kozboyamаchiliklаrni, qo'shib yozishlаrni, kishilаr ахloqidаgi tubаnliklаrni hаmdа ulаrgа qаrshi kurаshuvchilаr borligini ochiq-oydin gаvdаlаntirishi bilаn deyarli bаrchа dаvrlаr uchun dolzаrblik qiymаti kаsb etаdi. 
        `,
        bookPrice : "25 000 so’m",
        audioTime : "4:25 soat",
        electron : "pdf, ebook"      
      },
      {
        bookId : "40",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/970af30e481057c48f87e101b61e69942021100211300948481lfU8tgACAO.jpg.webp",
        bookName : "Olmos kamar",
        bookRating : 5,
        bookGenre : "uzbek",
        bookPage : 416,
        published : 2020,
        bookSenario : "Badiiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        "Olmos kamar" romanida Abror va Sherzodning ma'naviyati, kasb, ruhiyat, shuurdagi kurashlarini, hayot, jamiyat, oila, el-yurtga qarashlari aro ziddiyatlarni ko'rsatish asosiga qurilgan. Ularning ikkovi ham arxitektor-yangi shahar bunyod etuvchi, uni obodonlashtiruvchi mutaxassis. Lekin tarbiya, tabiati, burch va mas'uliyatiga munosabati, muhabbatga, oilaga qarashda farq kuchli.`,
        
        bookInfoTwo : `

        Abror elparvar, adolatgo'y, maydonlarga ko'rk berishda milliy udumlarimiz, an'analarimizga rioya qilish tarafdori. Bahrom esa ishni o'zboshimchalik bilan do'ndirishga moyil. Yozuvchi ularni murakkab kechinmalar, iztiroblar, adashishlar, to'g'ri yo'lni topa olish natijasidagi yoniq quvonchlar ichida ko'rsatadi. Bu qahramonlar kitobxonni mustaqil mushohada yuritishga, mayda andishalar girdobiga o'ralib qolmaslikka, hayotda kurashlardan qo'rqmay, el-yurt dardi bilan yashashga o'rgatadi.
        `,
        bookPrice : "42 500 so’m",
        audioTime : "4:20 soat",
        electron : "pdf"
      }
    ]
  },

  {
    id : "41",
    name : "Ahmad Muhammad",
    lastName : "Tursun",
    born : 1949,  
    bornDate : 18,
    bornMonth : "May",
    died : 2021,
    diedDate : 24,
    diedMonth : "May",
    books : 10,
    audio : 10,
    genre : "Diniy",
    img : "https://ziyouz.uz/wp-content/uploads/2021/05/ahmad-muhammad.jpeg",
    desc : `
    Аҳмад Муҳаммад Турсун (Турсунов Аҳмад Мамажонович) 1949 йили Наманган шаҳрида туғилган. 1979 йили Наманган давлат университетини тамомлаган.
  
    1967 йилдан буён матбуотда фаолият олиб боради: «Наманган ҳақиқати» газетасида турли вазифаларда, «Наманган атласи», «Ирфон», «Таржимон», «Суҳбатдош», «Ҳайрат» газеталари бош муҳаррири бўлиб ишлаган. 2003-2010 йилларда «Ҳидоят» журналида бўлим муҳаррири бўлган. 2014 йилдан «Ҳилол-нашр» нашриётида муҳаррирлик қилган.
    
    Элликка яқин бадиий, илмий-маърифий, публицистик китоблари нашр этилган. Ўзбекистон Ёзувчилари уюшмаси аъзоси.
    `,
    jobs : "«Тўрт денгиз оша саёҳат», «Барча давонинг боши», «Қайнона ва келин», «Ислом ҳазораси», «Умрнинг бир лаҳзаси», «Тарозининг икки палласи», «Табобат китоби», «Седана 1000 дардга даво», «Ҳар дарднинг давоси бор», «Шарқ Ҳақни топди», «Ҳақ ҳамиша ғолиб», «Ота-она ризоси», «Қуддус амакининг сабоқлари», «Ислом дини»,",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "42",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/muminning-aqiydasi-web-500x500h.jpg",
        bookName : "Mo'minning aqidasi",
        bookRating : 4.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2021,
        bookPage : 216,
        nashriyot : "Matbaachi",
        bookInfo : `
        Бу асарга ақийда бобида энг мўътабар манбалардан саналган мисрлик атойли олим Абу Жаъфар Варрой Аҳмад ибн Муҳаммад Таҳовийнинг «Ақийдатут Таҳовия» асари асос қилиб олинди. Ушбу асарнинг матнини имом Таҳовий бундан қарийб ўн бир ярим аср муқаддам ёзганлар. Орадан тахминан беш аср ўтганидан сўнг Абул Изз Ҳанафий ўша матнни шарҳ қилганлар. Бундан ўн йилча олдин устоз Муҳаммад Анвар Бадахшоний Абул Изз Ҳанафийнинг шарҳини талхийс қилганлар. Яъни, асарнинг мазмунига футур етказмаган ҳолда тафсилотларини қисқартириб, ихчамлаштирган.`,
        
        bookInfoTwo : `
        Бу асарга ақийда бобида энг мўътабар манбалардан саналган мисрлик атойли олим Абу Жаъфар Варрой Аҳмад ибн Муҳаммад Таҳовийнинг «Ақийдатут Таҳовия» асари асос қилиб олинди. Ушбу асарнинг матнини имом Таҳовий бундан қарийб ўн бир ярим аср муқаддам ёзганлар. Орадан тахминан беш аср ўтганидан сўнг Абул Изз Ҳанафий ўша матнни шарҳ қилганлар. Бундан ўн йилча олдин устоз Муҳаммад Анвар Бадахшоний Абул Изз Ҳанафийнинг шарҳини талхийс қилганлар. Яъни, асарнинг мазмунига футур етказмаган ҳолда тафсилотларини қисқартириб, ихчамлаштирган.
        `,
        bookPrice : "25 000 so’m",
        audioTime : "8:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "43",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/7-buyuk-web-500x500h.jpg",
        bookName : "Dunyoni tebratgan 7 buyuk",
        bookRating : 4.3,
        bookGenre : "Diniy",
        bookPage : 584,
        published : 2021,
        bookSenario : "Diniy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Mazkur kitobda dunyo tamaddunida ulkan hissa qo‘shgan, Islom olamida o‘z hayoti va faoliyati bilan o‘chmas iz qoldirgan Hasan Basriy, Umar ibn Abdulaziz, Abdulloh ibn Muborak, Abu Homid G‘azzoliy, Salohiddin Ayyubiy, Amir Temur, Avrangzeb Olamgir kabi ulug‘lar haqida so‘z boradi. Mutolaa davomida yuqorida tilga olingan shaxslar hayot yo‘llariga oid go‘zal lavhalarga duch kelasiz`,
        
        bookInfoTwo : `
        Mazkur kitobda dunyo tamaddunida ulkan hissa qo‘shgan, Islom olamida o‘z hayoti va faoliyati bilan o‘chmas iz qoldirgan Hasan Basriy, Umar ibn Abdulaziz, Abdulloh ibn Muborak, Abu Homid G‘azzoliy, Salohiddin Ayyubiy, Amir Temur, Avrangzeb Olamgir kabi ulug‘lar haqida so‘z boradi. Mutolaa davomida yuqorida tilga olingan shaxslar hayot yo‘llariga oid go‘zal lavhalarga duch kelasiz
        `,
        bookPrice : "65 000 so’m",
        audioTime : "5:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "44",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/chingizxon-web-500x500h.jpg",
        bookName : "Chingizxon (Dunyoni tebratgan buyuklar)",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 120,
        published : 2021,
        bookSenario : "Diniy",
        nashriyot : "Azon kitoblari",  
        bookInfo : `
        Нашриётимиз «Дунёни тебратган буюклар» рукни остидаги навбатдаги рисолани сизларга тақдим этмоқда. Ушбу китобча қурол ва ҳарбий иқтидор билан жаҳоннинг ярмини босиб олган, кўплаб халқларни, хусусан, Мовароуннаҳр аҳолисини зулм ва истибдодга солган машҳур мўғул лашкарбошиси Чингизхоннинг ҳаёт йўли, ҳарбий босқинлари ва юртимиз халқининг бошига солган мусибатлари ҳақида сўз юритилади.`,
        
        bookInfoTwo : `
  
        Нашриётимиз «Дунёни тебратган буюклар» рукни остидаги навбатдаги рисолани сизларга тақдим этмоқда. Ушбу китобча қурол ва ҳарбий иқтидор билан жаҳоннинг ярмини босиб олган, кўплаб халқларни, хусусан, Мовароуннаҳр аҳолисини зулм ва истибдодга солган машҳур мўғул лашкарбошиси Чингизхоннинг ҳаёт йўли, ҳарбий босқинлари ва юртимиз халқининг бошига солган мусибатлари ҳақида сўз юритилади.
        `,
        bookPrice : "11 000 so’m",
        audioTime : "2:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "45",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/hilol-nashr-kitoblari/uluglar-shunday-yashashgan-web-500x500h.jpg",
        bookName : "Uluglar shunday yashagan",
        bookRating : 3.9,
        bookGenre : "Diniy",
        bookPage : 600,
        published : 2019,
        bookSenario : "Diniy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ёзувчи Аҳмад Муҳаммад Турсуннинг «Ҳилол-нашр» нашриёти томонидан тақдим этилган «Сиз қандай яшамоқчисиз?» китоби ўқувчилар томонидан катта қизиқиш билан кутиб олиндива бир неча марта кўп нусхада нашр этилди. Шундан сўнг мухлис ўқувчилардан муаллифга «Бу асар ҳозирда яшашни ўргатувчи китоб бўлибди, қанийди ўтмишда ҳаёт кечирган улуғ аждодларимизнинг ҳаётлари, қай тарзда яшаганлари, ахлоқ ва фазилат бобида нималарга эътибор берганлари ҳақида бир китоб ёзилсайди, аввалгисини тўлдирувчи асар бўларди» маъносидаги таклиф-мулоҳазалар туша бошлади.`,
        
        bookInfoTwo : `
        Ана шу таклифларни инобатга олган ёзувчи олдинги китобини моҳият ва мазмун жиҳатидан тўлдирувчи ушбу янги асарини сиз азизларга тақдим этмоқда. Унда илгари яшаб ўтган улуғ олимлар, донишмандлар, солиҳ аждодларнинг ибрат бўлувчи ҳаёт тарзлари, гўзал фазилатлари ва ахлоқ-одоблари ҳақидаги ажойиб ҳикоят ва ривоятлар асосида бугунги замондошларимиз учун ўта муҳим бўлган тарбия соҳасида нималарга эътибор бериш кераклиги ҳақидаги фикр-мулоҳазалар ўрин олган. Уларни ўқинг, ибрат олинг, улуғларга ўхшашга интилинг. Солиҳ инсонларнинг ҳаёт йўллари ва фазилатларидан ўрнак олиб, ўз ҳаётингизни шу асосда зийнатланг.
        `,
        bookPrice : "52 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "46",
    name : "Usmonxon",
    lastName : "Olimov",
    born : 1950,  
    bornDate : 1,
    bornMonth : "January",
    died : 2021,
    diedDate : 15,
    diedMonth : "August",
    books : 18,
    audio : 18,
    genre : "Diniy",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Usmankhan_Alimov.jpg/330px-Usmankhan_Alimov.jpg",
    desc : `
    1950-yil 1-yanvarda Samarqand viloyati Ishtixon tumanida xizmatchi oilasida tavallud topgan. Boshlangʻich taʼlimni oʻsha tuman 57-oʻrta umumtaʼlim maktabida olgan.
    1987-yilda Toshkent islom institutini tamomlagan.
    1987-2000 - Payariq tumanidagi Imom Buxoriy masjidi imom-xatibi.
    2000-2006-yillarda Payariq tumani bosh imom-xatibi, Samarqand viloyati bosh imom-xatibi lavozimlarida ish yuritgan.
    2006-yil yanvarda Oʻzbekiston musulmonlari diniy idorasi bosh muftiyi etib saylangan.
    2020-yilda El-yurt hurmati ordeni bilan taqdirlangan[2][3]
    2021-yil 15-avgustda vafot etgan. Ishtixon tumanida dafn etilgan.
    `,
    jobs : "«Тўрт денгиз оша саёҳат», «Барча давонинг боши», «Қайнона ва келин», «Ислом ҳазораси», «Умрнинг бир лаҳзаси», «Тарозининг икки палласи», «Табобат китоби», «Седана 1000 дардга даво», «Ҳар дарднинг давоси бор», «Шарқ Ҳақни топди», «Ҳақ ҳамиша ғолиб», «Ота-она ризоси», «Қуддус амакининг сабоқлари», «Ислом дини»,",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "47",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/muminning-aqiydasi-web-500x500h.jpg",
        bookName : "Tavsiri ifron",
        bookRating : 4.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2019,
        bookPage : 752,
        nashriyot : "Sharq",
        bookInfo : `
        Шайх Усмонхон Темурхон Самарқандий ҳазратларининг қаламларига мансуб олти жилдлик «Тафсири Ирфон» - Қуръони Карим маъноларининг ўзбекча таржима ва тафсир китоблари.`,
        
        bookInfoTwo : `
        Қуръони Карим Аллоҳ таолонинг муборак каломи, Ислом динига оид барча ҳукмларнинг асосий ва биринчи манбаидир. Қуръони Каримни яхши билмаган, тушунмаган кишиларнинг асл ҳидоят йўлидан, ҳақ йўлдан чалғишлари, турли оқим ва ҳаракатларга алданиб қолишлари, миссионерлар ва сохта мазҳаблар таъсирига тушиб қолишлари осон кечади. Шунинг учун халқимизни иложи борича Қуръони Карим билан яқиндан таништириш, унга бағишланган асарларни кўпроқ тарғиб қилиш ҳозирги пайтдаги муҳим вазифалардан саналади. Қуръони Карим маъноларининг Ўзбекистон мусулмонлари идораси раиси, муфтий, шайх Усмонхон Темурхон Самарқандий (Алимов) томонидан қилинган ўзбекча таржимаси ва тафсири шу йўлдаги камтарона уринишлардан бири. Қўлингиздаги Қуръони Каримнинг ушбу маънолар таржимаси ва тафсири бошқаларидан шу билан фарқланадики, унда оятлар маъноси замондош ўқувчиларимизга иложи борича тушунарли, содда ва равон бўлишига ҳаракат қилинди.
        `,
        bookPrice : "570 000 so’m",
        audioTime : "8:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "48",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/diniy_marifiy/kuz_2018/hazrati-imom-majmuasi-web-500x500h.jpg",
        bookName : "«Hazrati Imom» majmuasi",
        bookRating : 6.3,
        bookGenre : "Diniy",
        bookPage : 280,
        published : 2018,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",
        bookInfo : `
        Ушбу рисолада «Ҳазрати Имом» мажмуаси, унинг таркибидаги ёдгорликлар ва бинолар, Имом Абу Бакр Қаффол Шоший ҳаёти, асарлари ҳақида қисқача баён қилинган.`,
        
        bookInfoTwo : `
        Ушбу рисолада «Ҳазрати Имом» мажмуаси, унинг таркибидаги ёдгорликлар ва бинолар, Имом Абу Бакр Қаффол Шоший ҳаёти, асарлари ҳақида қисқача баён қилинган.
        `,
        bookPrice : "6 000 so’m",
        audioTime : "3:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "49",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/diniy_marifiy/rasululloh-mujizalari-web-500x500h.jpg",
        bookName : "«Rasululloh sollallohu alayhi vasallam mo'jizalari»",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 416,
        published : 2018,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",  
        bookInfo : `
        Аллоҳ таоло Одам (алайҳиссалом)дан бошлаб инсонларни ҳидоятга чақирувчи пайғамбарларни юбориб турди. Ҳар бир пайғамбар инсонларни ёлғиз Аллоҳга ибодат қилишга даъват этган ва мўъжизалар кўрсатган. Пайғамбарларга берилган мўъжизалар вафот этишлари биланоқ тўхтаган. Бироқ Пайғамбаримиз (соллаллоҳу алайҳи ва саллам)га берилган мўъжизалардан бири бўлган Қуръони карим ва бошқа баъзи мўъжизалар то Қиёматгача сақланиб қолади.`,
        
        bookInfoTwo : `
        Пайғамбаримиз (соллаллоҳу алайҳи ва саллам)нинг мўъжизаларини билиш мўминнинг имонини янада мустаҳкам қилади ва илм олиб, унга амал қилишга ундайди. Чунки бу мўъжизаларнинг ҳар бири илм ва ҳикматга тўладир.
        Ушбу нашр кенг китобхонлар оммасига мўлжалланган. 
        `,
        bookPrice : "28 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "50",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/hilol-nashr-kitoblari/uluglar-shunday-yashashgan-web-500x500h.jpg",
        bookName : "Oilada farzand tarbiyasi",
        bookRating : 3.9,
        bookGenre : "Diniy",
        bookPage : 460,
        published : 2017,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",
        bookInfo : `
        Мустақиллик йилларида мамлакатимизда она ва бола саломатлиги масалаларига муҳтарам Юртбошимиз раҳбарликларида алоҳида эътибор қаратиляпти. Соғлом бола йили давлат дастури доирасида амалга оширилаётган хайрли ишлар ҳам фикримизнинг яққол исботидир. Бу вазифа давлатимиз ички сиёсатининг бош йўналишларидан бирига айланди. Ватанимизнинг порлоқ келажагини ҳар жиҳатдан соғлом ва баркамол авлод таъмин этади. Фарзандларни эртанги куннинг муносиб эгалари ҳамда ворислари қилиб вояга етказиш ота-оналарнинг орзуси, масъулияти, бурчидир.`,
        
        bookInfoTwo : `
        Ўзбекистон мусулмонлари идораси раиси, муфтий Усмонхон Алимовнинг ўтган йиллари чоп қилинган “Оилада фарзанд тарбияси” рисолалари жамланмаси бўлган ушбу китоб ўғил-қизларимизни юксак маънавият, гўзал фазилатлар эгаси қилиб тарбиялашда ота-оналар ва устоз-мураббийларга ишончли қўлланма бўлади.
        `,
        bookPrice : "48 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "51",
    name : "Abu Abdulloh Muhammad ibn Ismoil",
    lastName : "ibn Ibrohim al Buxoriy",
    born : 810,  
    bornDate : 19,
    bornMonth : "July",
    died : 870,
    diedDate : 1,
    diedMonth : "September",
    books : 20,
    audio : 20,
    genre : "Diniy",
    img : "https://assets.almeros.uz/historical-places/photo/606a93dfc66a1.jpeg",
    desc : `
    Buxoriy, Imom al-Buxoriy (asl ismi Abu Abdulloh Muhammad ibn Ismoil ibn Ibrohim al Buxoriy) (810.21.7, Buxoro — 870.31.8, Samarqand yaqinidagi Hartang qishlogʻi) — islom olamining yirik mutafakkiri. Muhaddislar imomi, hadis ilmining sultoni deb ham yuritiladi.
    Otasi Ismoil oʻz davrining yetuk muhaddislaridan, Malik ibn Alasning shogirdi va yaqinlaridan biri boʻlib, tijorat ishlari bilan shugʻullangan. Onasi taqvodor, diyonatli, oqila ayol edi. Otasi vafot etgach, uning tarbiyasi volidasi zimmasiga tushgan. U 5-6 yoshidan islomiy ilmlarni, Muhammad (s.a.v)ning hadislarini oʻrganishga va yodlashga kirishadi. Taniqli muhaddislar — Doxiliy, Muhammad ibn Salom Poykandiy, Muhammad ibn Yusuf Poykandiy, Abdulloh ibn Muhammad Masnadiy va boshqalardan saboq olgan. Azaldan muhaddislar safarga chiqishdan oldin oʻz yurtidagi roviylardan birorta ham hadis qoldirmasdan yozib olgan boʻlishi va shundan keyingina boshqa shahar yoki mamlakatga safarga otlanishi mumkin edi.
    `,
    jobs : "Buxoriyning boshqa asarlari orasida „Tafsir alQur’on“ („Qur’on tafsiri“) kitobini ham alohida taʼkidlash kerak. Buxoriy asarlari musulmon dunyosining barcha madrasa va dorilfununlarida paygʻambar (as) sunnatlari boʻyicha asosiy darslik, qoʻllanma hisoblanadi. Jamoat arboblari, olimu ulamolar va din peshvolari Buxoriy asarlariga tayanib ish tutadilar. Istiqlol sharofati bilan Buxoriyning oʻlmas merosi el-yurti bagʻriga qaytdi. Oʻzbekiston Respublikasi Vazirlar Mahkamasining „Imom al-Buxoriy tavalludining hijriy-qamariy taqvim boʻyicha 1225-yilligini nishonlash toʻgʻrisida“gi qarori (1997-yil 29-aprel) asosida Buxoriyning ilmiy merosini oʻrganish va targʻib qilish, xotirasini abadiylashtirish borasida katta ishlar qilindi. 1998-yil 23-oktabrda Samarqandda yubiley toʻy-tantanalari boʻlib oʻtdi.",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "52",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/muminning-aqiydasi-web-500x500h.jpg",
        bookName : "Abu Abdulloh Muhammad ibn Ismoil al-Buxoriy: Sahihi Buxoriy: Al-jome' as-sahih",
        bookRating : 4.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2019,
        bookPage : 752,
        nashriyot : "Шарқ",
        bookInfo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.`,
        
        bookInfoTwo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.
        `,
        bookPrice : "459 000 so’m",
        audioTime : "8:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "53",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/65f2a94c8c2d56d5b43a1a3d9d8111022022020915443352230Ti4rvoYN8V.png.webp",
        bookName : "«Hazrati Imom» majmuasi",
        bookRating : 6.3,
        bookGenre : "Diniy",
        bookPage : 1728,
        published : 2018,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",
        bookInfo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.
  
        Barcha ulamolar: muhaddislar, faqihlar, usuliylar, mutakallimlar, nahviylar va boshqalar «Sahihi Buxoriy. Alloh taoloning Kitobi - Qurʼoni karimdan keyingi eng ishonchli va sahih kitob ekanligiga ittifoq qilganlar.`,
        
        bookInfoTwo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.
  
        Barcha ulamolar: muhaddislar, faqihlar, usuliylar, mutakallimlar, nahviylar va boshqalar «Sahihi Buxoriy. Alloh taoloning Kitobi - Qurʼoni karimdan keyingi eng ishonchli va sahih kitob ekanligiga ittifoq qilganlar.
        `,
        bookPrice : "429 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "54",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/61kCUH2sAIL._SX346_BO1,204,203,200_.jpg",
        bookName : "Al Arab Al Mufrad",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2010,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud.`,
        
        bookInfoTwo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud. 
        `,
        bookPrice : "400 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "55",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/61kCUH2sAIL._SX346_BO1,204,203,200_.jpg",
        bookName : "Al Arab Al Mufrad",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2010,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud.`,
        
        bookInfoTwo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud. 
        `,
        bookPrice : "400 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
    ]
  },

  {
    id : "56",
    name : "Imomi",
    lastName : "Aʼzam",
    born : 699,  
    bornDate : 5,
    bornMonth : "September",
    died : 767,
    diedDate : 14,
    diedMonth : "June",
    books : 20,
    audio : 20,
    genre : "Diniy",
    img : "https://i0.wp.com/www.mohakal.net/wp-content/uploads/2021/06/e1e1aa97-f0fe-432a-a32a-67e86b317075.png?fit=419%2C469&ssl=1",
    desc : `
    Abu Hanifa Noʻmon ibn Sobit al-Kufiy (699, Kufa — 767, Bagʻdod) — sunniy musulmonlar tomonidan hurmat bilan Imomi Aʼzam deb ataladigan[1] hanafiylik mazhabi asoschisi.Faqih, muhaddis. «Abu Hanifa» uning kunyasi, «Imomi Aʼzam» («Ulugʻ imom») ulugʻligining eʼtirofi oʻlaroq berilgan unvon.
    Asli fors boʻlib, oʻziga toʻq, zodagon oiladan. Uning bobosi Zuta Kobuldan qul sifatida olib kelingan va Abu Hanifa tugʻilgan Kufaga yetkazilgan deyishadi.Aytishlaricha, uning oilasi VIII asrda Kobulning shimolidagi Chorikordan Bagʻdodga koʻchib ketgan degan variant ham mavjud. Olim va fozil insonlar orasida voyaga yetdi. Otasidan qolgan katta boylikni ilm yoʻlida sarf etdi. Yoshlikdan Qurʼonni yod oldi. Kalom ilmi va mantiqni oʻrgandi. Imomi Aʼzam yoshligida Arabistonning Hijoz mintaqasiga sayohat qilgan va u yerda Makka va Madinada tahsil olgan[2]. 22 yoshida Kufalik faqih Hammod ibn Abu Sulaymonga shogird tushib uning taʼlimini oldi. Keyin Kufa va Basraning eng obroʻli faqihi boʻlib yetishdi va oʻzi shogirdlar tarbiyaladi. Kamtar, mehribon, taqvodor inson sifatida hurmat qozondi. Uning 55 marta haj qilganligi haqida rivoyat bor.
    `,
    jobs : "Imomi Aʼzam islom ulamolari orasida eng yetuk olimlardan edi. U odamlarga qulay, toliblarga yengil boʻladigan yoʻlni topishga muvaffaq boʻldi: sharʼiy ilmni birinchi boʻlib tasnif qilib, uni boblarga ajratib, tartibga soldi va kitob shakliga keltirdi. Imomi Aʼzamning ilmi kalom, fiqh, hadis, sarf ilmlariga oid bir necha kitoblari mavjud: «Kitob as-salot» («Namoz ahkomlari kitobi»), «Kitob al-manosik» («Haj kitobi»), «Kitob ash-shurut» («Shartnomalar haqida kitob»), «Kitob al-faroiz» («Meros ilmi haqida kitob»), «Kitob al-olim val-mutaallim» («Ustoz va shogird haqida kitob»), «Kitob al-fiqh al-akbar», «Kitobi al-vasiya» («Vasiyatnoma kitobi») va b. Imomi Aʼzamning bulardan tashqari hadis sohasida ham asarlari mavjud",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "57",
        bookImg : "https://upload.wikimedia.org/wikipedia/en/c/ca/Al-Fiqh_al-Akbar.jpeg",
        bookName : "Fiqh al-Akbar",
        bookRating : 3.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2007,
        bookPage : 852,
        nashriyot : "Шарқ",
        bookInfo : `
        Имоми Аъзам Абу Ҳанифа Нўъмон ибн Собит ал-Кўфий (80-150/699-767) раҳматуллоҳи алайҳи тобеъин, улуғ мужтаҳид ва фақиҳ, буюк имом бўлиб, ҳанафий мазҳабининг муассисидирлар. У зот ислом ақоидига оид бир неча асарлар битган бўлиб, ақида илмини “ал-Фиқҳ ал-акбар” (“Катта фиқҳ”) деб атаганлар. Ана шу номда асар ҳам ёзганлар. Шунингдек, “ал-Фиқҳ ал-абсат” (“Батафсил фиқҳ”), “ал-Олим ва-л-мутааллим” (“Устоз ва шогирд”) каби рисолалар билан бирга бир неча васиятлари – шогирдларига қилган панд-насиҳатлари мавжуд. Шогирдлари ва мазҳаб аҳли томонидан у зот ривоят қилган ҳадиси шарифлар бир қанча “Муснад”, “ал-Асор” каби асарларда жамланган.`,
        
        bookInfoTwo : `
        Имоми Аъзам Абу Ҳанифа Нўъмон ибн Собит ал-Кўфий (80-150/699-767) раҳматуллоҳи алайҳи тобеъин, улуғ мужтаҳид ва фақиҳ, буюк имом бўлиб, ҳанафий мазҳабининг муассисидирлар. У зот ислом ақоидига оид бир неча асарлар битган бўлиб, ақида илмини “ал-Фиқҳ ал-акбар” (“Катта фиқҳ”) деб атаганлар. Ана шу номда асар ҳам ёзганлар. Шунингдек, “ал-Фиқҳ ал-абсат” (“Батафсил фиқҳ”), “ал-Олим ва-л-мутааллим” (“Устоз ва шогирд”) каби рисолалар билан бирга бир неча васиятлари – шогирдларига қилган панд-насиҳатлари мавжуд. Шогирдлари ва мазҳаб аҳли томонидан у зот ривоят қилган ҳадиси шарифлар бир қанча “Муснад”, “ал-Асор” каби асарларда жамланган.
        `,
        bookPrice : "389 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "58",
        bookImg : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Musnad_Imam_Ahmad_bin_Hanbal.jpg/450px-Musnad_Imam_Ahmad_bin_Hanbal.jpg",
        bookName : "Musnad Ahmad ibn Hanbal",
        bookRating : 4.3,
        bookGenre : "Diniy",
        bookPage : 1728,
        published : 2015,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",
        bookInfo : `
        It is one of the largest hadith books in islamic history containing more than twenty-seven thousand hadiths, according to Maktaba Shamila. It is organized into compilations of the hadiths narrated by each companion, starting with "the ten who were promised Paradise". This highlights their status and the efforts they made to preserve the ahadith of Muhammad`,
        
        bookInfoTwo : `
        It is said by some that Ahmad ibn Hanbal made a comment in regard to his book which reads as follows: "I have only included a hadith in this book if it had been used as evidence by some of the scholars." Abu al-Faraj Ibn al-Jawzi ironically claimed that the Musnad contains hadiths that are fabricated by interpolation (i.e. the narrator jumbling up information, mixing texts and authoritative chains), which were said to be nine Hadiths by some, or fifteen hadiths by others. However, it is agreed that the hadith that are suspected to be fabricated are not new hadiths that are creations of a dubious narrator's imagination
        `,
        bookPrice : "729 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "59",
        bookImg : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397733084l/21942067.jpg",
        bookName : "Kitab Al-Athar of Imam Abu Hanifah",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2006,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Asli fors boʻlib, oʻziga toʻq, zodagon oiladan. Uning bobosi Zuta Kobuldan qul sifatida olib kelingan va Abu Hanifa tugʻilgan Kufaga yetkazilgan deyishadi.Aytishlaricha, uning oilasi VIII asrda Kobulning shimolidagi Chorikordan Bagʻdodga koʻchib ketgan degan variant ham mavjud. Olim va fozil insonlar orasida voyaga yetdi. Otasidan qolgan katta boylikni ilm yoʻlida sarf etdi. Yoshlikdan Qurʼonni yod oldi. Kalom ilmi va mantiqni oʻrgandi. Imomi Aʼzam yoshligida Arabistonning Hijoz mintaqasiga sayohat qilgan va u yerda Makka va Madinada tahsil olgan[2]. 22 yoshida Kufalik faqih Hammod ibn Abu Sulaymonga shogird tushib uning taʼlimini oldi. Keyin Kufa va Basraning eng obroʻli faqihi boʻlib yetishdi va oʻzi shogirdlar tarbiyaladi. Kamtar, mehribon, taqvodor inson sifatida hurmat qozondi. Uning 55 marta haj qilganligi haqida rivoyat bor.`,
        
        bookInfoTwo : `
        Asli fors boʻlib, oʻziga toʻq, zodagon oiladan. Uning bobosi Zuta Kobuldan qul sifatida olib kelingan va Abu Hanifa tugʻilgan Kufaga yetkazilgan deyishadi.Aytishlaricha, uning oilasi VIII asrda Kobulning shimolidagi Chorikordan Bagʻdodga koʻchib ketgan degan variant ham mavjud. Olim va fozil insonlar orasida voyaga yetdi. Otasidan qolgan katta boylikni ilm yoʻlida sarf etdi. Yoshlikdan Qurʼonni yod oldi. Kalom ilmi va mantiqni oʻrgandi. Imomi Aʼzam yoshligida Arabistonning Hijoz mintaqasiga sayohat qilgan va u yerda Makka va Madinada tahsil olgan[2]. 22 yoshida Kufalik faqih Hammod ibn Abu Sulaymonga shogird tushib uning taʼlimini oldi. Keyin Kufa va Basraning eng obroʻli faqihi boʻlib yetishdi va oʻzi shogirdlar tarbiyaladi. Kamtar, mehribon, taqvodor inson sifatida hurmat qozondi. Uning 55 marta haj qilganligi haqida rivoyat bor. 
        `,
        bookPrice : "200 000 so’m",
        audioTime : "19:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "60",
        bookImg : "https://hilolnashr.uz/image/cache/catalog/Hilol_Nashr_boshqa/imomi-azam-web-500x750.jpg",
        bookName : "Imom A'zam",
        bookRating : 8.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2010,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Динни етказишдек оғир масъулиятни чиройли адо қилган олим саҳобалардан Аллоҳ рози бўлсин.
        Маълумки, юртимизда ўн икки асрдан буён ибодатлар ҳанафий мазҳаби асосида адо этиб келинади. Ҳанафий мазҳабининг юртимизга кириб келиш тарихи ҳижрий 150-217 саналарда яшаб ўтган Абу Ҳафс Кабир раҳматуллоҳи алайҳ билан боғлиқдир. У киши имом Муҳаммад раҳматуллоҳи алайҳдан ҳанафий фиқҳини ўрганиб, Бухорога келганларида мана шу мазҳаб бўйича таълим бердилар. Натижада ушбу фиқҳий йўналиш юртимизда расмий ибодат қилинадиган мазҳабга айланди. Мовароуннаҳрда ҳукмронлик қилган неча-неча хонлар, подшоҳлар ва уларнинг фуқаролари айнан ҳанафий мазҳаби асосида ибодат қилиб келишган. `,
        
        bookInfoTwo : `
        Динни етказишдек оғир масъулиятни чиройли адо қилган олим саҳобалардан Аллоҳ рози бўлсин.
        Маълумки, юртимизда ўн икки асрдан буён ибодатлар ҳанафий мазҳаби асосида адо этиб келинади. Ҳанафий мазҳабининг юртимизга кириб келиш тарихи ҳижрий 150-217 саналарда яшаб ўтган Абу Ҳафс Кабир раҳматуллоҳи алайҳ билан боғлиқдир. У киши имом Муҳаммад раҳматуллоҳи алайҳдан ҳанафий фиқҳини ўрганиб, Бухорога келганларида мана шу мазҳаб бўйича таълим бердилар. Натижада ушбу фиқҳий йўналиш юртимизда расмий ибодат қилинадиган мазҳабга айланди. Мовароуннаҳрда ҳукмронлик қилган неча-неча хонлар, подшоҳлар ва уларнинг фуқаролари айнан ҳанафий мазҳаби асосида ибодат қилиб келишган. 
        `,
        bookPrice : "37 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
    ]
  },

  {
    id : "61",
    name : "Hasanxon Yahyo",
    lastName : "Abdulmajid",
    born : 1981,  
    bornDate : 12,
    bornMonth : "January",
    died : "Live",
    diedDate : "Live",
    diedMonth : "Live",
    books : 20,
    audio : 20,
    genre : "Diniy",
    img : "https://kitoblardunyosi.uz/image/cache/catalog/009-Category/003-authors/photo_2022-03-12_18-10-35-230x230h.jpg",
    desc : `
    Ҳасанхон Яҳё Абдулмажид 1981 йил 12 январда Андижон шаҳрида таваллуд топган. 13 ёшида Қуръони Каримни тўла ёд олган.
    Ҳасанхон қори 2005 йил Саудия Арабистони Қироллиги Маккаи Мукаррама шаҳрида ўтказган халқаро Қуръон мусобақасида қатнашган. Ўзбекистон Мусулмонлари идораси томонидан ўтказилган 19-Қуръон мусобақасининг Республика босқичида биринчи ўринни олди (2009).
  
    Имом Бухорий номидаги Тошкент Ислом институтини тамомлаган (2008).
    `,
    jobs : "изқ Аллоҳнинг зиммасидадир. У Зот тақдир қилганидан ортиғи насиб бўлмайди. Шунингдек, мақбуллик ва машҳурлик ҳам Аллоҳ берадиган нарса, чунки азиз қиладиган ҳам, хор қиладиган ҳам Унинг Ўзи. Бу ҳақиқат ҳар бир мўмин киши иймон келтириши лозим бўлган тушунчадир. Қорилар ниятнинг тўғри бўлиши учун ушбу ҳақиқатни ҳаммадан кўра кўпроқ эсга олишлари лозим. «Ниятингизни таҳлил қилиш учун эса сизга бирор кимдан манфаат етганда қалбингизга назар солинг. Агар етган неъмат учун қалбингизда аввал Аллоҳга шукр келтириш туйғуси уйғонса, бу яхши. Аммо аввал бандага ташаккур айтиш хаёли устун келса, унда аҳволни ислоҳ қилиш лозим», дейишади руҳий тарбия уламолари.",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "62",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/001_hilol_nashr/001_diniy/qorilar-silsilasi-web-500x500h.jpg",
        bookName : "O'zbek qorilarining oltin silsilasi",
        bookRating : 4.7,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2019,
        bookPage : 496,
        nashriyot : "Hilol-Nashr",
        bookInfo : `
        Карамли, мурувватли, ёрдам ва фазлу инъом соҳиби бўлмиш Зотга, бизни иймонга ҳидоят қилган, бизларга Ўз Китобини – замонлар ўтишига қарамай мўъжизалиги давом этаверадиган Қуръонни нозил қилиб, марҳамат кўрсатган, уни қалб кўзи очиқ, маърифатли кишилар учун қалблар баҳори қилган, кўп такрор билан ёки вақтлар ўтиши билан эскирмайдиган қилган, ёш болалар ҳам ёдлаб оладиган даражада зикр учун осон қилиб қўйган ҳамда унга ўзгартириш ва янгилик дахл қилишидан сақлаш кафолатини берган, Ўз каломи Фурқонда: «Зикрни (Қуръонни) Биз нозил қилдик ва уни Ўзимиз муҳофаза қилгувчимиз», деб марҳамат қилган Аллоҳ субҳанаҳу ва таолога ҳамду санолар бўлсин!`,
        
        bookInfoTwo : `
        Карамли, мурувватли, ёрдам ва фазлу инъом соҳиби бўлмиш Зотга, бизни иймонга ҳидоят қилган, бизларга Ўз Китобини – замонлар ўтишига қарамай мўъжизалиги давом этаверадиган Қуръонни нозил қилиб, марҳамат кўрсатган, уни қалб кўзи очиқ, маърифатли кишилар учун қалблар баҳори қилган, кўп такрор билан ёки вақтлар ўтиши билан эскирмайдиган қилган, ёш болалар ҳам ёдлаб оладиган даражада зикр учун осон қилиб қўйган ҳамда унга ўзгартириш ва янгилик дахл қилишидан сақлаш кафолатини берган, Ўз каломи Фурқонда: «Зикрни (Қуръонни) Биз нозил қилдик ва уни Ўзимиз муҳофаза қилгувчимиз», деб марҳамат қилган Аллоҳ субҳанаҳу ва таолога ҳамду санолар бўлсин!
        `,
        bookPrice : "58 000 so’m",
        audioTime : "4:13 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "63",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/hilol-nashr-kitoblari/mavli-web-500x500h.jpg",
        bookName : "Mavlid",
        bookRating : 4.9,
        bookGenre : "Diniy",
        bookPage : 384,
        published : 2017,
        bookSenario : "Diniy",
        nashriyot : "Hilol-Nashr",
        bookInfo : `
        Бизни Ўзининг сўнгги элчиси Муҳаммад соллаллоҳу алайҳи васалламнинг умматларидан қилган Аллоҳ таолога чексиз ҳамду саноларимиз бўлсин!
        Ҳаётларининг ҳар бир лаҳзаси биз учун ибрат манбаи бўлган ҳабибимиз Муҳаммад Мустафо соллаллоҳу алайҳи васалламга дуруду салавотларимиз бўлсин!
        Ўша муҳташам ҳаётнинг ҳар бир лаҳзасини диққат билан ўрганиб, келажак авлодларга ўта аниқлик ила ривоят қилиб қолдириб кетган саҳобаи киромларга ва бу илмий омонатни саҳифаларга қайдлаб, бизгача етиб келишида хизмат қилган уламои киромларга Аллоҳ таолонинг розилиги ва раҳмати бўлсин!`,
        
        bookInfoTwo : `
        Бизни Ўзининг сўнгги элчиси Муҳаммад соллаллоҳу алайҳи васалламнинг умматларидан қилган Аллоҳ таолога чексиз ҳамду саноларимиз бўлсин!
        Ҳаётларининг ҳар бир лаҳзаси биз учун ибрат манбаи бўлган ҳабибимиз Муҳаммад Мустафо соллаллоҳу алайҳи васалламга дуруду салавотларимиз бўлсин!
        Ўша муҳташам ҳаётнинг ҳар бир лаҳзасини диққат билан ўрганиб, келажак авлодларга ўта аниқлик ила ривоят қилиб қолдириб кетган саҳобаи киромларга ва бу илмий омонатни саҳифаларга қайдлаб, бизгача етиб келишида хизмат қилган уламои киромларга Аллоҳ таолонинг розилиги ва раҳмати бўлсин!
        `,
        bookPrice : "32 000 so’m",
        audioTime : "6:55 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "64",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/qiroatlar-tugrisida-web--500x500h.jpg",
        bookName : "Qur'oni Karim qiroatlari to'g'risida",
        bookRating : 3.4,
        bookGenre : "Diniy",
        bookPage : 44,
        published : 2021,
        bookSenario : "Diniy",
        nashriyot : "Zilol buloq",  
        bookInfo : `
        Қуръони қироатлари нима дегани? Қуръон ўзи биттами ёки бир нечтами? Нега Қуръондаги айрим сўзлар икки-уч хил ўқилади? Бунинг сабаб ва ҳикмати нимада? Етти, ўн қироат нима дегани? Бу ва бу каби саволлар китобхонлар ўртасида бўй кўрсатиб қолгани ҳеч кимга сир эмас. Қўлингиздаги рисола ушбу мавзуда ўзбек тилида ёзилган илк мустақил асар бўлиб, унда сиз мазкур ва бошқа кўплаб саволларга жавоб топасиз.`,
        
        bookInfoTwo : `
        Қуръони қироатлари нима дегани? Қуръон ўзи биттами ёки бир нечтами? Нега Қуръондаги айрим сўзлар икки-уч хил ўқилади? Бунинг сабаб ва ҳикмати нимада? Етти, ўн қироат нима дегани? Бу ва бу каби саволлар китобхонлар ўртасида бўй кўрсатиб қолгани ҳеч кимга сир эмас. Қўлингиздаги рисола ушбу мавзуда ўзбек тилида ёзилган илк мустақил асар бўлиб, унда сиз мазкур ва бошқа кўплаб саволларга жавоб топасиз.
        `,
        bookPrice : "8 500 so’m",
        audioTime : "9:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "65",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/001_hilol_nashr/001_diniy/quron-tartili-web-500x500h.jpg",
        bookName : "Qur'on tartili",
        bookRating : 8.4,
        bookGenre : "Diniy",
        bookPage : 200,
        published : 2020,
        bookSenario : "Diniy",
        nashriyot : "Hilol",  
        bookInfo : `
        Абдуллоҳ ибн Амр розияллоҳу анҳумодан ривоят қилинади: «Набий соллаллоҳу алайҳи васаллам: «Қуръон соҳибига: «Қироат қилиб кўтарилавер. Дунёда қандай тартил қилган бўлсанг, худди шундай тартил қил. Албатта, сенинг манзилинг охирги қироат қилган оятинг маконидан бўлади», дейилади», дедилар». Абу Довуд ва Термизий ривоят қилган `,
        
        bookInfoTwo : `
        Абдуллоҳ ибн Амр розияллоҳу анҳумодан ривоят қилинади: «Набий соллаллоҳу алайҳи васаллам: «Қуръон соҳибига: «Қироат қилиб кўтарилавер. Дунёда қандай тартил қилган бўлсанг, худди шундай тартил қил. Албатта, сенинг манзилинг охирги қироат қилган оятинг маконидан бўлади», дейилади», дедилар». Абу Довуд ва Термизий ривоят қилган
        `,
        bookPrice : "46 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
    ]
  },

  {
    id : "66",
    name : "Turan",
    lastName : "Dursun",
    born : 1934,  
    bornDate : 4,
    bornMonth : "September",
    died : 1990,
    diedDate : 4,
    diedMonth : "September",
    books : 20,
    audio : 20,
    genre : "Diniy",
    img : "https://upload.wikimedia.org/wikipedia/en/4/4f/Turan_Dursun.jpg",
    desc : `
    (1934, Şarkışla – 4-sentabr 1990, Istanbul) turk islom olimi va yozuvchisi boʻlgan. Uning ishlari islom va uning asoschilarini tanqid qiladi.
    U avvaliga imom va muftiy boʻlgan, biroq keyinchalik monoteistik dinlar tarixini oʻrganib, ateist boʻlib ketgan. Dursun din, xususan islomiy matnlar tafsirlari haqida bir necha kitob yozgan. U dinni ochiq tanqid qilib, bu ishi tufayli fundamentalist aqidaparastlar tomonidan tez-tez tahdidlarga uchrar edi.
    Turan Dursun 1990-yil 4-sentabr kuni Istanbuldagi uyi tashqarisida oʻldirildi. Bu voqeadan keyin uning kitoblari minglab nusxada Turkiyada sotild
    `,
    jobs : "Otasi Turan'ni diniy taʼlim olishi maqsadida yotoqli din maktablariga, Qurʼon kurslariga, mashhur domlalar qoʻliga berdi. Bittasidan boshqa barcha domlalar bepul taʼlim berishdi. Dursun pullik domlaga 100 lira toʻlash uchun atir sotib, oʻzi ham domlalik qilib yurdi. Harbiy xizmatga chaqirilishidan oldin kurdcha, cherkascha va arabcha oʻrgandi. Antropologiya bilan qiziqdi. 1958-yili muftiy boʻldiBoshqa dindagilar bilan bahs olib borish uchun Dursun 1960-yillarda xristianlik va yahudiylikni oʻrgana boshladi. Bu izlanishlar davomida u ibrohimiy dinlarning kelib chiqishi, asotir va afsonalarini oʻrganib chiqdi; bu uning diniy ishonchlarini qayta qarab chiqishiga turtki boʻldi. Din haqida salbiy xulosaga kelgach, Dursun Muhammad uning qimmatli bolalik va yoshlik yillarini olib qoʻyganidan afsuslandi va 1966-yili muftiylikni tashladi",
    location : "Istanbul, Turkiya",
    bookObj : [
      {
        bookId : "67",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/41DzpT62XtL._SX345_BO1,204,203,200_.jpg",
        bookName : "Qullatayn",
        bookRating : 5.3,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 1990,
        bookPage : 420,
        nashriyot : "Hilol-Nashr",
        bookInfo : `
        Turkish is a member of the Oghuz group of the Turkic family. Other members include Azerbaijani, spoken in Azerbaijan and north-west Iran, Gagauz of Gagauzia, Qashqai of south Iran and the Turkmen of Turkmenistan.
  
        Classification of the Turkic languages is complicated. The migrations of the Turkic peoples and their consequent intermingling with one another and with peoples who spoke non-Turkic languages, have created a linguistic situation of vast complexity.`,
        
        bookInfoTwo : `
        Turkish is a member of the Oghuz group of the Turkic family. Other members include Azerbaijani, spoken in Azerbaijan and north-west Iran, Gagauz of Gagauzia, Qashqai of south Iran and the Turkmen of Turkmenistan.
  
        Classification of the Turkic languages is complicated. The migrations of the Turkic peoples and their consequent intermingling with one another and with peoples who spoke non-Turkic languages, have created a linguistic situation of vast complexity.
        `,
        bookPrice : "80 000 so’m",
        audioTime : "10:13 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "68",
        bookImg : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592087112i/54007426._UY630_SR1200,630_.jpg",
        bookName : "Islam and Nurculuk",
        bookRating : 3.2,
        bookGenre : "Diniy",
        bookPage : 300,
        published : 1995,
        bookSenario : "Diniy",
        nashriyot : "Hilol-Nashr",
        bookInfo : `
        The modern Turkish religious movement known as Nurculuk takes its name from its founder and leader Bediüzzaman Said Nursî (1876–1960). He was born in the village of Nurs in the province of Bitlis in eastern Turkey in a region with a largely Kurdish population. In the 1870s the Ottoman government had only recently established centralized administrative structures in this area, replacing a flexible, decentralized system that relied on the local aristocracy. The fall from power of the local notables gave impetus to the growth of the fideist/fundamentalist Sunnī Naqshbandī (Tk., Nakşibendi) order, that took over local functions of conciliation among the tribes as the old system of law and order disintegrated. A branch of the Naqshbandīyah had established local seminaries and had spread from northern Iraq to Anatolia and to the Russian Empire in Kazan, the Caucasus, and Central Asia. It combated the expansion of Russia and the spread of Russian Orthodox Christianity. Said Nursî was educated in a Naqshbandī circle; in Bitlis, however, his outlook was also shaped by the presence of an Ottoman administration modeling itself increasingly on Western Europe. He realized that the Turkish modernization movement was establishing new criteria differentiating between the more modern Turks of western Anatolia and the Balkans and his own comparatively backward Kurdish region, and this moved him to take up the defense of his kin. An Islam that brought all Muslims under the umbrella of a common faith but added the advantages of Western technology and knowledge was his solution to this cultural bifurcation, which he considered to be a great danger for all Muslims. This foundation of his thought reappears in his later writings in diverse forms and also underlies his followers’ self-assumed task of teaching advances in knowledge.`,
        
        bookInfoTwo : `
        The modern Turkish religious movement known as Nurculuk takes its name from its founder and leader Bediüzzaman Said Nursî (1876–1960). He was born in the village of Nurs in the province of Bitlis in eastern Turkey in a region with a largely Kurdish population. In the 1870s the Ottoman government had only recently established centralized administrative structures in this area, replacing a flexible, decentralized system that relied on the local aristocracy. The fall from power of the local notables gave impetus to the growth of the fideist/fundamentalist Sunnī Naqshbandī (Tk., Nakşibendi) order, that took over local functions of conciliation among the tribes as the old system of law and order disintegrated. A branch of the Naqshbandīyah had established local seminaries and had spread from northern Iraq to Anatolia and to the Russian Empire in Kazan, the Caucasus, and Central Asia. It combated the expansion of Russia and the spread of Russian Orthodox Christianity. Said Nursî was educated in a Naqshbandī circle; in Bitlis, however, his outlook was also shaped by the presence of an Ottoman administration modeling itself increasingly on Western Europe. He realized that the Turkish modernization movement was establishing new criteria differentiating between the more modern Turks of western Anatolia and the Balkans and his own comparatively backward Kurdish region, and this moved him to take up the defense of his kin. An Islam that brought all Muslims under the umbrella of a common faith but added the advantages of Western technology and knowledge was his solution to this cultural bifurcation, which he considered to be a great danger for all Muslims. This foundation of his thought reappears in his later writings in diverse forms and also underlies his followers’ self-assumed task of teaching advances in knowledge.
        `,
        bookPrice : "100 000 so’m",
        audioTime : "9:55 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "69",
        bookImg : "https://ia601807.us.archive.org/BookReader/BookReaderImages.php?zip=/16/items/turan-dursun-din-bu-2-hz.-muhammed/Turan%20Dursun%20-%20Din%20Bu%201_jp2.zip&file=Turan%20Dursun%20-%20Din%20Bu%201_jp2/Turan%20Dursun%20-%20Din%20Bu%201_0000.jp2&id=turan-dursun-din-bu-2-hz.-muhammed&scale=4&rotate=0",
        bookName : "Din Bu",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 300,
        published : 2001,
        bookSenario : "Diniy",
        nashriyot : "Zilol buloq",  
        bookInfo : `
        Қуръони қироатлари нима дегани? Қуръон ўзи биттами ёки бир нечтами? Нега Қуръондаги айрим сўзлар икки-уч хил ўқилади? Бунинг сабаб ва ҳикмати нимада? Етти, ўн қироат нима дегани? Бу ва бу каби саволлар китобхонлар ўртасида бўй кўрсатиб қолгани ҳеч кимга сир эмас. Қўлингиздаги рисола ушбу мавзуда ўзбек тилида ёзилган илк мустақил асар бўлиб, унда сиз мазкур ва бошқа кўплаб саволларга жавоб топасиз.`,
        
        bookInfoTwo : `
        Қуръони қироатлари нима дегани? Қуръон ўзи биттами ёки бир нечтами? Нега Қуръондаги айрим сўзлар икки-уч хил ўқилади? Бунинг сабаб ва ҳикмати нимада? Етти, ўн қироат нима дегани? Бу ва бу каби саволлар китобхонлар ўртасида бўй кўрсатиб қолгани ҳеч кимга сир эмас. Қўлингиздаги рисола ушбу мавзуда ўзбек тилида ёзилган илк мустақил асар бўлиб, унда сиз мазкур ва бошқа кўплаб саволларга жавоб топасиз.
        `,
        bookPrice : "25 500 so’m",
        audioTime : "9:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "70",
        bookImg : "https://img1-kidega.mncdn.com/mnresize/200/307/UPLOAD/urunler/9789753430678.jpg",
        bookName : "Qurʼon ensiklopediyasi ",
        bookRating : 8.4,
        bookGenre : "Diniy",
        bookPage : 500,
        published : 1990,
        bookSenario : "Diniy",
        nashriyot : "Hilol",  
        bookInfo : `
        Turan Dursun, 1934 yılında Gümüştepe, Şarkışla Sivas'da dünyaya gelmiştir. Türk yazar, düşünür, eski imam ve müftüdür. Aynı zamanda İbn-i Ravendi'nin takipçilerinden biri olduğundan yapmış olduğu araştırmalarda İslamiyeti ve peygamberi Hz. Muhammed'i ağrı bir şekilde eleştirmiştir.`,
        
        bookInfoTwo : `
        Turan Dursun, 1934 yılında Gümüştepe, Şarkışla Sivas'da dünyaya gelmiştir. Türk yazar, düşünür, eski imam ve müftüdür. Aynı zamanda İbn-i Ravendi'nin takipçilerinden biri olduğundan yapmış olduğu araştırmalarda İslamiyeti ve peygamberi Hz. Muhammed'i ağrı bir şekilde eleştirmiştir.`,
        bookPrice : "105 000 so’m",
        audioTime : "16:23 soat",
        electron : "pdf, epub"      
      },
    ]
  },

  {
    id : "71",
    name : "Abu Abdulloh Muhammad ibn Ismoil",
    lastName : "ibn Ibrohim al Buxoriy",
    born : 810,  
    bornDate : 19,
    bornMonth : "July",
    died : 870,
    diedDate : 1,
    diedMonth : "September",
    books : 20,
    audio : 20,
    genre : "Diniy",
    img : "https://assets.almeros.uz/historical-places/photo/606a93dfc66a1.jpeg",
    desc : `
    Buxoriy, Imom al-Buxoriy (asl ismi Abu Abdulloh Muhammad ibn Ismoil ibn Ibrohim al Buxoriy) (810.21.7, Buxoro — 870.31.8, Samarqand yaqinidagi Hartang qishlogʻi) — islom olamining yirik mutafakkiri. Muhaddislar imomi, hadis ilmining sultoni deb ham yuritiladi.
    Otasi Ismoil oʻz davrining yetuk muhaddislaridan, Malik ibn Alasning shogirdi va yaqinlaridan biri boʻlib, tijorat ishlari bilan shugʻullangan. Onasi taqvodor, diyonatli, oqila ayol edi. Otasi vafot etgach, uning tarbiyasi volidasi zimmasiga tushgan. U 5-6 yoshidan islomiy ilmlarni, Muhammad (s.a.v)ning hadislarini oʻrganishga va yodlashga kirishadi. Taniqli muhaddislar — Doxiliy, Muhammad ibn Salom Poykandiy, Muhammad ibn Yusuf Poykandiy, Abdulloh ibn Muhammad Masnadiy va boshqalardan saboq olgan. Azaldan muhaddislar safarga chiqishdan oldin oʻz yurtidagi roviylardan birorta ham hadis qoldirmasdan yozib olgan boʻlishi va shundan keyingina boshqa shahar yoki mamlakatga safarga otlanishi mumkin edi.
    `,
    jobs : "Buxoriyning boshqa asarlari orasida „Tafsir alQur’on“ („Qur’on tafsiri“) kitobini ham alohida taʼkidlash kerak. Buxoriy asarlari musulmon dunyosining barcha madrasa va dorilfununlarida paygʻambar (as) sunnatlari boʻyicha asosiy darslik, qoʻllanma hisoblanadi. Jamoat arboblari, olimu ulamolar va din peshvolari Buxoriy asarlariga tayanib ish tutadilar. Istiqlol sharofati bilan Buxoriyning oʻlmas merosi el-yurti bagʻriga qaytdi. Oʻzbekiston Respublikasi Vazirlar Mahkamasining „Imom al-Buxoriy tavalludining hijriy-qamariy taqvim boʻyicha 1225-yilligini nishonlash toʻgʻrisida“gi qarori (1997-yil 29-aprel) asosida Buxoriyning ilmiy merosini oʻrganish va targʻib qilish, xotirasini abadiylashtirish borasida katta ishlar qilindi. 1998-yil 23-oktabrda Samarqandda yubiley toʻy-tantanalari boʻlib oʻtdi.",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "72",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/muminning-aqiydasi-web-500x500h.jpg",
        bookName : "Abu Abdulloh Muhammad ibn Ismoil al-Buxoriy: Sahihi Buxoriy: Al-jome' as-sahih",
        bookRating : 4.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2019,
        bookPage : 752,
        nashriyot : "Шарқ",
        bookInfo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.`,
        
        bookInfoTwo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.
        `,
        bookPrice : "459 000 so’m",
        audioTime : "8:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "73",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/65f2a94c8c2d56d5b43a1a3d9d8111022022020915443352230Ti4rvoYN8V.png.webp",
        bookName : "«Hazrati Imom» majmuasi",
        bookRating : 6.3,
        bookGenre : "Diniy",
        bookPage : 1728,
        published : 2018,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",
        bookInfo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.
  
        Barcha ulamolar: muhaddislar, faqihlar, usuliylar, mutakallimlar, nahviylar va boshqalar «Sahihi Buxoriy. Alloh taoloning Kitobi - Qurʼoni karimdan keyingi eng ishonchli va sahih kitob ekanligiga ittifoq qilganlar.`,
        
        bookInfoTwo : `
        Odamlar orasida «Sahihi Buxoriy», «Al-jomeʼ as-sahih" kabi nomlar bilan tanilgan ushbu kitobni Imom Buxoriy «Al-jomeʼ as-sahih al-musnad min hadisi Rasulillahi sollallohu alayhi va sallam va sunanihi va ayyamihi» (Rasululloh sollallohu alayhi va sallam hadislari, sunnatlari va muborak hayotlaridan to‘plangan sahih musnad) deb nomlagan.
  
        Barcha ulamolar: muhaddislar, faqihlar, usuliylar, mutakallimlar, nahviylar va boshqalar «Sahihi Buxoriy. Alloh taoloning Kitobi - Qurʼoni karimdan keyingi eng ishonchli va sahih kitob ekanligiga ittifoq qilganlar.
        `,
        bookPrice : "429 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "74",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/61kCUH2sAIL._SX346_BO1,204,203,200_.jpg",
        bookName : "Al Arab Al Mufrad",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2010,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud.`,
        
        bookInfoTwo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud. 
        `,
        bookPrice : "400 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "75",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/61kCUH2sAIL._SX346_BO1,204,203,200_.jpg",
        bookName : "Al Arab Al Mufrad",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2010,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud.`,
        
        bookInfoTwo : `
        Kitobda Muhammad paygʻambarning odob-axloqi toʻgʻrisida hadislar bor. Asardan umumiy 1322 hadis joy olgan. Ushbu kitob Imom al-Buxoriyning boshqa kitobi - „Al-Jome as-Sahih“ hadislar toʻplamining soyasida qolgan deyiladi. Musulmon ulamolari oʻrtasida al-Jome 'as-Sahih va Sahihi Muslim, Islomning Qur’ondan keyingi eng haqiqiy kitoblari ekanligi toʻgʻrisida yakdil fikr mavjud. 
        `,
        bookPrice : "400 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
    ]
  },

  {
    id : "76",
    name : "Imomi",
    lastName : "Aʼzam",
    born : 699,  
    bornDate : 5,
    bornMonth : "September",
    died : 767,
    diedDate : 14,
    diedMonth : "June",
    books : 20,
    audio : 20,
    genre : "Diniy",
    img : "https://i0.wp.com/www.mohakal.net/wp-content/uploads/2021/06/e1e1aa97-f0fe-432a-a32a-67e86b317075.png?fit=419%2C469&ssl=1",
    desc : `
    Abu Hanifa Noʻmon ibn Sobit al-Kufiy (699, Kufa — 767, Bagʻdod) — sunniy musulmonlar tomonidan hurmat bilan Imomi Aʼzam deb ataladigan[1] hanafiylik mazhabi asoschisi.Faqih, muhaddis. «Abu Hanifa» uning kunyasi, «Imomi Aʼzam» («Ulugʻ imom») ulugʻligining eʼtirofi oʻlaroq berilgan unvon.
    Asli fors boʻlib, oʻziga toʻq, zodagon oiladan. Uning bobosi Zuta Kobuldan qul sifatida olib kelingan va Abu Hanifa tugʻilgan Kufaga yetkazilgan deyishadi.Aytishlaricha, uning oilasi VIII asrda Kobulning shimolidagi Chorikordan Bagʻdodga koʻchib ketgan degan variant ham mavjud. Olim va fozil insonlar orasida voyaga yetdi. Otasidan qolgan katta boylikni ilm yoʻlida sarf etdi. Yoshlikdan Qurʼonni yod oldi. Kalom ilmi va mantiqni oʻrgandi. Imomi Aʼzam yoshligida Arabistonning Hijoz mintaqasiga sayohat qilgan va u yerda Makka va Madinada tahsil olgan[2]. 22 yoshida Kufalik faqih Hammod ibn Abu Sulaymonga shogird tushib uning taʼlimini oldi. Keyin Kufa va Basraning eng obroʻli faqihi boʻlib yetishdi va oʻzi shogirdlar tarbiyaladi. Kamtar, mehribon, taqvodor inson sifatida hurmat qozondi. Uning 55 marta haj qilganligi haqida rivoyat bor.
    `,
    jobs : "Imomi Aʼzam islom ulamolari orasida eng yetuk olimlardan edi. U odamlarga qulay, toliblarga yengil boʻladigan yoʻlni topishga muvaffaq boʻldi: sharʼiy ilmni birinchi boʻlib tasnif qilib, uni boblarga ajratib, tartibga soldi va kitob shakliga keltirdi. Imomi Aʼzamning ilmi kalom, fiqh, hadis, sarf ilmlariga oid bir necha kitoblari mavjud: «Kitob as-salot» («Namoz ahkomlari kitobi»), «Kitob al-manosik» («Haj kitobi»), «Kitob ash-shurut» («Shartnomalar haqida kitob»), «Kitob al-faroiz» («Meros ilmi haqida kitob»), «Kitob al-olim val-mutaallim» («Ustoz va shogird haqida kitob»), «Kitob al-fiqh al-akbar», «Kitobi al-vasiya» («Vasiyatnoma kitobi») va b. Imomi Aʼzamning bulardan tashqari hadis sohasida ham asarlari mavjud",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "77",
        bookImg : "https://upload.wikimedia.org/wikipedia/en/c/ca/Al-Fiqh_al-Akbar.jpeg",
        bookName : "Fiqh al-Akbar",
        bookRating : 3.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2007,
        bookPage : 852,
        nashriyot : "Шарқ",
        bookInfo : `
        Имоми Аъзам Абу Ҳанифа Нўъмон ибн Собит ал-Кўфий (80-150/699-767) раҳматуллоҳи алайҳи тобеъин, улуғ мужтаҳид ва фақиҳ, буюк имом бўлиб, ҳанафий мазҳабининг муассисидирлар. У зот ислом ақоидига оид бир неча асарлар битган бўлиб, ақида илмини “ал-Фиқҳ ал-акбар” (“Катта фиқҳ”) деб атаганлар. Ана шу номда асар ҳам ёзганлар. Шунингдек, “ал-Фиқҳ ал-абсат” (“Батафсил фиқҳ”), “ал-Олим ва-л-мутааллим” (“Устоз ва шогирд”) каби рисолалар билан бирга бир неча васиятлари – шогирдларига қилган панд-насиҳатлари мавжуд. Шогирдлари ва мазҳаб аҳли томонидан у зот ривоят қилган ҳадиси шарифлар бир қанча “Муснад”, “ал-Асор” каби асарларда жамланган.`,
        
        bookInfoTwo : `
        Имоми Аъзам Абу Ҳанифа Нўъмон ибн Собит ал-Кўфий (80-150/699-767) раҳматуллоҳи алайҳи тобеъин, улуғ мужтаҳид ва фақиҳ, буюк имом бўлиб, ҳанафий мазҳабининг муассисидирлар. У зот ислом ақоидига оид бир неча асарлар битган бўлиб, ақида илмини “ал-Фиқҳ ал-акбар” (“Катта фиқҳ”) деб атаганлар. Ана шу номда асар ҳам ёзганлар. Шунингдек, “ал-Фиқҳ ал-абсат” (“Батафсил фиқҳ”), “ал-Олим ва-л-мутааллим” (“Устоз ва шогирд”) каби рисолалар билан бирга бир неча васиятлари – шогирдларига қилган панд-насиҳатлари мавжуд. Шогирдлари ва мазҳаб аҳли томонидан у зот ривоят қилган ҳадиси шарифлар бир қанча “Муснад”, “ал-Асор” каби асарларда жамланган.
        `,
        bookPrice : "389 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "78",
        bookImg : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Musnad_Imam_Ahmad_bin_Hanbal.jpg/450px-Musnad_Imam_Ahmad_bin_Hanbal.jpg",
        bookName : "Musnad Ahmad ibn Hanbal",
        bookRating : 4.3,
        bookGenre : "Diniy",
        bookPage : 1728,
        published : 2015,
        bookSenario : "Diniy",
        nashriyot : "Мовароуннаҳр",
        bookInfo : `
        It is one of the largest hadith books in islamic history containing more than twenty-seven thousand hadiths, according to Maktaba Shamila. It is organized into compilations of the hadiths narrated by each companion, starting with "the ten who were promised Paradise". This highlights their status and the efforts they made to preserve the ahadith of Muhammad`,
        
        bookInfoTwo : `
        It is said by some that Ahmad ibn Hanbal made a comment in regard to his book which reads as follows: "I have only included a hadith in this book if it had been used as evidence by some of the scholars." Abu al-Faraj Ibn al-Jawzi ironically claimed that the Musnad contains hadiths that are fabricated by interpolation (i.e. the narrator jumbling up information, mixing texts and authoritative chains), which were said to be nine Hadiths by some, or fifteen hadiths by others. However, it is agreed that the hadith that are suspected to be fabricated are not new hadiths that are creations of a dubious narrator's imagination
        `,
        bookPrice : "729 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "79",
        bookImg : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397733084l/21942067.jpg",
        bookName : "Kitab Al-Athar of Imam Abu Hanifah",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2006,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Asli fors boʻlib, oʻziga toʻq, zodagon oiladan. Uning bobosi Zuta Kobuldan qul sifatida olib kelingan va Abu Hanifa tugʻilgan Kufaga yetkazilgan deyishadi.Aytishlaricha, uning oilasi VIII asrda Kobulning shimolidagi Chorikordan Bagʻdodga koʻchib ketgan degan variant ham mavjud. Olim va fozil insonlar orasida voyaga yetdi. Otasidan qolgan katta boylikni ilm yoʻlida sarf etdi. Yoshlikdan Qurʼonni yod oldi. Kalom ilmi va mantiqni oʻrgandi. Imomi Aʼzam yoshligida Arabistonning Hijoz mintaqasiga sayohat qilgan va u yerda Makka va Madinada tahsil olgan[2]. 22 yoshida Kufalik faqih Hammod ibn Abu Sulaymonga shogird tushib uning taʼlimini oldi. Keyin Kufa va Basraning eng obroʻli faqihi boʻlib yetishdi va oʻzi shogirdlar tarbiyaladi. Kamtar, mehribon, taqvodor inson sifatida hurmat qozondi. Uning 55 marta haj qilganligi haqida rivoyat bor.`,
        
        bookInfoTwo : `
        Asli fors boʻlib, oʻziga toʻq, zodagon oiladan. Uning bobosi Zuta Kobuldan qul sifatida olib kelingan va Abu Hanifa tugʻilgan Kufaga yetkazilgan deyishadi.Aytishlaricha, uning oilasi VIII asrda Kobulning shimolidagi Chorikordan Bagʻdodga koʻchib ketgan degan variant ham mavjud. Olim va fozil insonlar orasida voyaga yetdi. Otasidan qolgan katta boylikni ilm yoʻlida sarf etdi. Yoshlikdan Qurʼonni yod oldi. Kalom ilmi va mantiqni oʻrgandi. Imomi Aʼzam yoshligida Arabistonning Hijoz mintaqasiga sayohat qilgan va u yerda Makka va Madinada tahsil olgan[2]. 22 yoshida Kufalik faqih Hammod ibn Abu Sulaymonga shogird tushib uning taʼlimini oldi. Keyin Kufa va Basraning eng obroʻli faqihi boʻlib yetishdi va oʻzi shogirdlar tarbiyaladi. Kamtar, mehribon, taqvodor inson sifatida hurmat qozondi. Uning 55 marta haj qilganligi haqida rivoyat bor. 
        `,
        bookPrice : "200 000 so’m",
        audioTime : "19:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "80",
        bookImg : "https://hilolnashr.uz/image/cache/catalog/Hilol_Nashr_boshqa/imomi-azam-web-500x750.jpg",
        bookName : "Imom A'zam",
        bookRating : 8.4,
        bookGenre : "Diniy",
        bookPage : 112,
        published : 2010,
        bookSenario : "Diniy",
        nashriyot : "Dar Al Siddiq",  
        bookInfo : `
        Динни етказишдек оғир масъулиятни чиройли адо қилган олим саҳобалардан Аллоҳ рози бўлсин.
        Маълумки, юртимизда ўн икки асрдан буён ибодатлар ҳанафий мазҳаби асосида адо этиб келинади. Ҳанафий мазҳабининг юртимизга кириб келиш тарихи ҳижрий 150-217 саналарда яшаб ўтган Абу Ҳафс Кабир раҳматуллоҳи алайҳ билан боғлиқдир. У киши имом Муҳаммад раҳматуллоҳи алайҳдан ҳанафий фиқҳини ўрганиб, Бухорога келганларида мана шу мазҳаб бўйича таълим бердилар. Натижада ушбу фиқҳий йўналиш юртимизда расмий ибодат қилинадиган мазҳабга айланди. Мовароуннаҳрда ҳукмронлик қилган неча-неча хонлар, подшоҳлар ва уларнинг фуқаролари айнан ҳанафий мазҳаби асосида ибодат қилиб келишган. `,
        
        bookInfoTwo : `
        Динни етказишдек оғир масъулиятни чиройли адо қилган олим саҳобалардан Аллоҳ рози бўлсин.
        Маълумки, юртимизда ўн икки асрдан буён ибодатлар ҳанафий мазҳаби асосида адо этиб келинади. Ҳанафий мазҳабининг юртимизга кириб келиш тарихи ҳижрий 150-217 саналарда яшаб ўтган Абу Ҳафс Кабир раҳматуллоҳи алайҳ билан боғлиқдир. У киши имом Муҳаммад раҳматуллоҳи алайҳдан ҳанафий фиқҳини ўрганиб, Бухорога келганларида мана шу мазҳаб бўйича таълим бердилар. Натижада ушбу фиқҳий йўналиш юртимизда расмий ибодат қилинадиган мазҳабга айланди. Мовароуннаҳрда ҳукмронлик қилган неча-неча хонлар, подшоҳлар ва уларнинг фуқаролари айнан ҳанафий мазҳаби асосида ибодат қилиб келишган. 
        `,
        bookPrice : "37 000 so’m",
        audioTime : "12:23 soat",
        electron : "pdf, epub"      
      },
    ]
  },

  {
    id : "81",
    name : "Ahmad Muhammad",
    lastName : "Tursun",
    born : 1949,  
    bornDate : 18,
    bornMonth : "May",
    died : 2021,
    diedDate : 24,
    diedMonth : "May",
    books : 10,
    audio : 10,
    genre : "Diniy",
    img : "https://ziyouz.uz/wp-content/uploads/2021/05/ahmad-muhammad.jpeg",
    desc : `
    Аҳмад Муҳаммад Турсун (Турсунов Аҳмад Мамажонович) 1949 йили Наманган шаҳрида туғилган. 1979 йили Наманган давлат университетини тамомлаган.
  
    1967 йилдан буён матбуотда фаолият олиб боради: «Наманган ҳақиқати» газетасида турли вазифаларда, «Наманган атласи», «Ирфон», «Таржимон», «Суҳбатдош», «Ҳайрат» газеталари бош муҳаррири бўлиб ишлаган. 2003-2010 йилларда «Ҳидоят» журналида бўлим муҳаррири бўлган. 2014 йилдан «Ҳилол-нашр» нашриётида муҳаррирлик қилган.
    
    Элликка яқин бадиий, илмий-маърифий, публицистик китоблари нашр этилган. Ўзбекистон Ёзувчилари уюшмаси аъзоси.
    `,
    jobs : "«Тўрт денгиз оша саёҳат», «Барча давонинг боши», «Қайнона ва келин», «Ислом ҳазораси», «Умрнинг бир лаҳзаси», «Тарозининг икки палласи», «Табобат китоби», «Седана 1000 дардга даво», «Ҳар дарднинг давоси бор», «Шарқ Ҳақни топди», «Ҳақ ҳамиша ғолиб», «Ота-она ризоси», «Қуддус амакининг сабоқлари», «Ислом дини»,",
    location : "Toshkent, Uzbekistan",
    bookObj : [
      {
        bookId : "82",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/muminning-aqiydasi-web-500x500h.jpg",
        bookName : "Mo'minning aqidasi",
        bookRating : 4.1,
        bookGenre : "Diniy",
        bookSenario : "Diniy",
        published : 2021,
        bookPage : 216,
        nashriyot : "Matbaachi",
        bookInfo : `
        Бу асарга ақийда бобида энг мўътабар манбалардан саналган мисрлик атойли олим Абу Жаъфар Варрой Аҳмад ибн Муҳаммад Таҳовийнинг «Ақийдатут Таҳовия» асари асос қилиб олинди. Ушбу асарнинг матнини имом Таҳовий бундан қарийб ўн бир ярим аср муқаддам ёзганлар. Орадан тахминан беш аср ўтганидан сўнг Абул Изз Ҳанафий ўша матнни шарҳ қилганлар. Бундан ўн йилча олдин устоз Муҳаммад Анвар Бадахшоний Абул Изз Ҳанафийнинг шарҳини талхийс қилганлар. Яъни, асарнинг мазмунига футур етказмаган ҳолда тафсилотларини қисқартириб, ихчамлаштирган.`,
        
        bookInfoTwo : `
        Бу асарга ақийда бобида энг мўътабар манбалардан саналган мисрлик атойли олим Абу Жаъфар Варрой Аҳмад ибн Муҳаммад Таҳовийнинг «Ақийдатут Таҳовия» асари асос қилиб олинди. Ушбу асарнинг матнини имом Таҳовий бундан қарийб ўн бир ярим аср муқаддам ёзганлар. Орадан тахминан беш аср ўтганидан сўнг Абул Изз Ҳанафий ўша матнни шарҳ қилганлар. Бундан ўн йилча олдин устоз Муҳаммад Анвар Бадахшоний Абул Изз Ҳанафийнинг шарҳини талхийс қилганлар. Яъни, асарнинг мазмунига футур етказмаган ҳолда тафсилотларини қисқартириб, ихчамлаштирган.
        `,
        bookPrice : "25 000 so’m",
        audioTime : "8:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "83",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/7-buyuk-web-500x500h.jpg",
        bookName : "Dunyoni tebratgan 7 buyuk",
        bookRating : 4.3,
        bookGenre : "Diniy",
        bookPage : 584,
        published : 2021,
        bookSenario : "Diniy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Mazkur kitobda dunyo tamaddunida ulkan hissa qo‘shgan, Islom olamida o‘z hayoti va faoliyati bilan o‘chmas iz qoldirgan Hasan Basriy, Umar ibn Abdulaziz, Abdulloh ibn Muborak, Abu Homid G‘azzoliy, Salohiddin Ayyubiy, Amir Temur, Avrangzeb Olamgir kabi ulug‘lar haqida so‘z boradi. Mutolaa davomida yuqorida tilga olingan shaxslar hayot yo‘llariga oid go‘zal lavhalarga duch kelasiz`,
        
        bookInfoTwo : `
        Mazkur kitobda dunyo tamaddunida ulkan hissa qo‘shgan, Islom olamida o‘z hayoti va faoliyati bilan o‘chmas iz qoldirgan Hasan Basriy, Umar ibn Abdulaziz, Abdulloh ibn Muborak, Abu Homid G‘azzoliy, Salohiddin Ayyubiy, Amir Temur, Avrangzeb Olamgir kabi ulug‘lar haqida so‘z boradi. Mutolaa davomida yuqorida tilga olingan shaxslar hayot yo‘llariga oid go‘zal lavhalarga duch kelasiz
        `,
        bookPrice : "65 000 so’m",
        audioTime : "5:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "84",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/chingizxon-web-500x500h.jpg",
        bookName : "Chingizxon (Dunyoni tebratgan buyuklar)",
        bookRating : 4.4,
        bookGenre : "Diniy",
        bookPage : 120,
        published : 2021,
        bookSenario : "Diniy",
        nashriyot : "Azon kitoblari",  
        bookInfo : `
        Нашриётимиз «Дунёни тебратган буюклар» рукни остидаги навбатдаги рисолани сизларга тақдим этмоқда. Ушбу китобча қурол ва ҳарбий иқтидор билан жаҳоннинг ярмини босиб олган, кўплаб халқларни, хусусан, Мовароуннаҳр аҳолисини зулм ва истибдодга солган машҳур мўғул лашкарбошиси Чингизхоннинг ҳаёт йўли, ҳарбий босқинлари ва юртимиз халқининг бошига солган мусибатлари ҳақида сўз юритилади.`,
        
        bookInfoTwo : `
  
        Нашриётимиз «Дунёни тебратган буюклар» рукни остидаги навбатдаги рисолани сизларга тақдим этмоқда. Ушбу китобча қурол ва ҳарбий иқтидор билан жаҳоннинг ярмини босиб олган, кўплаб халқларни, хусусан, Мовароуннаҳр аҳолисини зулм ва истибдодга солган машҳур мўғул лашкарбошиси Чингизхоннинг ҳаёт йўли, ҳарбий босқинлари ва юртимиз халқининг бошига солган мусибатлари ҳақида сўз юритилади.
        `,
        bookPrice : "11 000 so’m",
        audioTime : "2:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "85",
        bookImg : "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/hilol-nashr-kitoblari/uluglar-shunday-yashashgan-web-500x500h.jpg",
        bookName : "Uluglar shunday yashagan",
        bookRating : 3.9,
        bookGenre : "Diniy",
        bookPage : 600,
        published : 2019,
        bookSenario : "Diniy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ёзувчи Аҳмад Муҳаммад Турсуннинг «Ҳилол-нашр» нашриёти томонидан тақдим этилган «Сиз қандай яшамоқчисиз?» китоби ўқувчилар томонидан катта қизиқиш билан кутиб олиндива бир неча марта кўп нусхада нашр этилди. Шундан сўнг мухлис ўқувчилардан муаллифга «Бу асар ҳозирда яшашни ўргатувчи китоб бўлибди, қанийди ўтмишда ҳаёт кечирган улуғ аждодларимизнинг ҳаётлари, қай тарзда яшаганлари, ахлоқ ва фазилат бобида нималарга эътибор берганлари ҳақида бир китоб ёзилсайди, аввалгисини тўлдирувчи асар бўларди» маъносидаги таклиф-мулоҳазалар туша бошлади.`,
        
        bookInfoTwo : `
        Ана шу таклифларни инобатга олган ёзувчи олдинги китобини моҳият ва мазмун жиҳатидан тўлдирувчи ушбу янги асарини сиз азизларга тақдим этмоқда. Унда илгари яшаб ўтган улуғ олимлар, донишмандлар, солиҳ аждодларнинг ибрат бўлувчи ҳаёт тарзлари, гўзал фазилатлари ва ахлоқ-одоблари ҳақидаги ажойиб ҳикоят ва ривоятлар асосида бугунги замондошларимиз учун ўта муҳим бўлган тарбия соҳасида нималарга эътибор бериш кераклиги ҳақидаги фикр-мулоҳазалар ўрин олган. Уларни ўқинг, ибрат олинг, улуғларга ўхшашга интилинг. Солиҳ инсонларнинг ҳаёт йўллари ва фазилатларидан ўрнак олиб, ўз ҳаётингизни шу асосда зийнатланг.
        `,
        bookPrice : "52 000 so’m",
        audioTime : "10:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id: "86",
    name: "Pushkin",
    lastName: "Aleksandr",
    born: 1799,
    bornDate: 5,
    bornMonth: "Aug",
    died: 1837,
    diedDate: 29,
    diedMonth: "января",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kiprensky_Pushkin.jpg/270px-Kiprensky_Pushkin.jpg",
    desc: `Алекса́ндр Серге́евич Пу́шкин (26 мая [6 июня] 1799, Москва — 29 января [10 февраля] 1837, Санкт-Петербург) — русский поэт, драматург и прозаик, заложивший основы русского реалистического направления[2], литературный критик[3] и теоретик литературы, историк[3], публицист, журналист[3]; один из самых авторитетных литературных деятелей первой трети XIX века.

    Ещё при жизни Пушкина сложилась его репутация величайшего национального русского поэта[4][5].Пушкин рассматривается как основоположник современного русского литературного языка[~2].`,
    jobs: "Ещё при жизни Пушкина сложилась его репутация величайшего национального русского поэта[4][5]. Пушкин рассматривается как основоположник современного русского литературного языка[~ 2].",
    location: "Москва, Российская империя",
    bookObj: [
      {
        bookId: "87",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/0e01938fc48a2cfb5f2217fbfb00722d2021060113263255378BqpjWn2fpQ.jpg.webp",
        bookName: "All Pushkin for children",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 288,
        nashriyot: "Росмэн",
        bookInfo: `
        В этой книге собраны произведения А.С. Пушкина, которые уже на протяжении полутора столетий с удовольствием читают и слушают дети в каждой семье.`,

        bookInfoTwo: `
        В этой книге собраны произведения А.С. Пушкина, которые уже на протяжении полутора столетий с удовольствием читают и слушают дети в каждой семье. Это прекрасные пушкинские сказки - "Сказка о золотом петушке", "Сказка о мёртвой царевне и о семи богатырях", "Сказка о рыбаке и рыбке", "Сказка о царе Салтане", "Сказка о попе и о работнике его Балде", баллада "Песнь о вещем Олеге", поэма "Руслан и Людмила", а также стихи. Книга подойдет как для первого знакомства с творчеством поэта, так и для подготовки к школьным урокам литературы. Рисунки мастеров книжной иллюстрации - Е. Володькиной, В. Гальдяева, В. Коркина, А. Лебедева, В. Ненова.`,
        bookPrice: "109 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "88",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/9f61408e3afb633e50cdf1b20de6f4662021052016142340507slCvoPjjCc.jpg.webp",
        bookName: "Eugene Onegin",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2021,
        bookSenario: "Tarixiy",
        nashriyot: "Эксмо",
        bookInfo: `
        Роман в стихах «Евгений Онегин» - «энциклопедия русской жизни» и «самое задушевное произведение Пушкина, самое любимое дитя его фантазии, и можно указать слишком на немногие творения, в которых личность поэта отразилась бы с такою полнотою, светло и ясно, как отразилась в «Онегине» личность Пушкина», как писал В.Г. Белинский.`,

        bookInfoTwo: `
        Роман в стихах «Евгений Онегин» - «энциклопедия русской жизни» и «самое задушевное произведение Пушкина, самое любимое дитя его фантазии, и можно указать слишком на немногие творения, в которых личность поэта отразилась бы с такою полнотою, светло и ясно, как отразилась в «Онегине» личность Пушкина», как писал В.Г. Белинский. Kоторых личность поэта отразилась бы с такою полнотою, светло и ясно, как отразилась в «Онегине» личность Пушкина», как писал В.Г. Белинский.
        `,
        bookPrice: "59 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "89",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/d9ff90f4000eacd3a6c9cb27f78994cf2022012410552470918VvoUBVbXKv.jpg.webp",
        bookName: "Eugene Onegin",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 640,
        published: 2001,
        bookSenario: "Tarixiy",
        nashriyot: "Азбука",
        bookInfo: `
        «Я теперь пишу не роман, а роман в стихах — дьявольская разница…» Занимательный, легкий, основанный на любовной истории, переданной в манере доверительной беседы автора с читателем — и вместе с тем полный неразрешимых парадоксов и загадок, пушкинский роман привлекает новые и новые поколения читателей.`,

        bookInfoTwo: `
        «Евгений Онегин» — самое известное и самое значительное произведение А. С. Пушкина, вершина русской поэзии и предмет многочисленных исследований. Пушкин начал роман в мае 1823 года, а закончил только осенью 1831 года, когда было написано «Письмо Онегина к Татьяне». Осенью 1823 года поэт сообщал друзьям: «Я теперь пишу не роман, а роман в стихах — дьявольская разница…» Занимательный, легкий, основанный на любовной истории, переданной в манере доверительной беседы автора с читателем — и вместе с тем полный неразрешимых парадоксов и загадок, пушкинский роман привлекает новые и новые поколения читателей. В настоящее издание включен комментарий к роману известного филолога Ю. М. Лотмана. Ученый показывает внутренне сложную, полную противоречий структуру романа «Евгений Онегин», скрывающуюся за внешней легкостью и понятностью пушкинских строк.
        `,
        bookPrice: "129 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "90",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15c2858d092.jpg.webp",
        bookName: "Eugene Onegin (lotin)",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2019,
        bookSenario: "Tarixiy",
        nashriyot: "Ёшлар нашриёт уйи",
        bookInfo: `
        Шоир баёнчи эмас, "кўрсатувчи" ҳолатини егаллайди - рус ҳаёти манзаралари суратдагидек кўз ўнгингизда жонланади. Айни пайтда унда даврнинг ўткир ижтимоий-ахлоқий муаммолари акс этади.`,
        bookInfoTwo: `

        Пушкин "Евгений Онегин" шеърий романида ёш замондошларининг умумлашма образини яратган. Шоир тасвирда воқеликни акс эттиришнинг янги, мураккаб усулларига мурожаат қилади. Шоир баёнчи эмас, "кўрсатувчи" ҳолатини егаллайди - рус ҳаёти манзаралари суратдагидек кўз ўнгингизда жонланади. Айни пайтда унда даврнинг ўткир ижтимоий-ахлоқий муаммолари акс этади. Шоир баёнчи эмас, "кўрсатувчи" ҳолатини егаллайди - рус ҳаёти манзаралари суратдагидек кўз ўнгингизда жонланади. Айни пайтда унда даврнинг ўткир ижтимоий-ахлоқий муаммолари акс этади.
        `,
        bookPrice: "19 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "91",
    name: "Antuan",
    lastName: "Saint Exupery",
    born: 1900,
    bornDate: 29,
    bornMonth: "июня",
    died: 1944,
    diedDate: 31,
    diedMonth: "июля ",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kiprensky_Pushkin.jpg/270px-Kiprensky_Pushkin.jpg",
    desc: `Антуа́н Мари́ Жан-Бати́ст Роже́ де Сент-Экзюпери́ (фр. Antoine Marie Jean-Baptiste Roger vicomte de Saint-Exupéry; 29 июня 1900, Лион, Франция — 31 июля 1944) — французский писатель, поэт, эссеист и профессиональный лётчик.
    Антуа́н Мари́ Жан-Бати́ст Роже́ де Сент-Экзюпери́ (фр. Antoine Marie Jean-Baptiste Roger vicomte de Saint-Exupéry; 29 июня 1900, Лион, Франция — 31 июля 1944) — французский писатель, поэт, эссеист и профессиональный лётчик.`,
    jobs: "Антуан де Сент-Экзюпери родился во французском городе Лион на улице Пейра (фр. rue Peyrat, ныне фр. rue Antoine de Saint Exupéry), 8, у страхового инспектора Мартина-Луи Жана Экзюпери (1863—1904) и его супруги Мари Буаэ де Фонколомб. Семья происходила из старинного рода перигорских дворян",
    location: "	Лион, Франция",
    bookObj: [
      {
        bookId: "92",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/aa97d584861474f4097cf13ccb5325da20220510221703730438djiW5Rrei.jpg.webp",
        bookName: "The Little Prince",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 128,
        nashriyot: "АСТ",
        bookInfo: `
        Самое знаменитое произведение Антуана де Сент-Экзюпери с авторскими рисунками. Мудрая и "человечная" сказка-притча, в которой просто и проникновенно говорится о самом важном: о дружбе и любви, о долге и верности, о красоте и нетерпимости к злу.`,

        bookInfoTwo: `
        Самое знаменитое произведение Антуана де Сент-Экзюпери с авторскими рисунками. Мудрая и "человечная" сказка-притча, в которой просто и проникновенно говорится о самом важном: о дружбе и любви, о долге и верности, о красоте и нетерпимости к злу.
        "Все мы родом из детства", - напоминает великий француз и знакомит нас с самым загадочным и трогательным героем мировой литературы.
        "Все мы родом из детства", - напоминает великий француз и знакомит нас с самым загадочным и трогательным героем мировой литературы.`,
        bookPrice: "39 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "93",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/3dd9424294b0292b6e89ea2bba2e11442022010515115666810z80kecbli9.jpg.webp",
        bookName: "The Little Prince",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 96,
        published: 2021,
        bookSenario: "Tarixiy",
        nashriyot: "Махаон",
        bookInfo: `
        Повесть-сказка «Маленький принц» – самое известное произведение Антуана де Сент-Экзюпери. Книга впервые была опубликована в 1943 году, с тех пор переведена более чем на 300 языков, а её суммарный тираж превышает несколько десятков миллионов экземпляров.`,

        bookInfoTwo: `
        Повесть-сказка «Маленький принц» – самое известное произведение Антуана де Сент-Экзюпери. Книга впервые была опубликована в 1943 году, с тех пор переведена более чем на 300 языков, а её суммарный тираж превышает несколько десятков миллионов экземпляров.
        Повесть-сказка «Маленький принц» – самое известное произведение Антуана де Сент-Экзюпери. Книга впервые была опубликована в 1943 году, с тех пор переведена более чем на 300 языков, а её суммарный тираж превышает несколько десятков миллионов экземпляров.
        `,
        bookPrice: "35 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "94",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/f8a7ae4cba91f264e7591e883065844120210412162204477261RqxQb0Pfg.jpg.webp",
        bookName: "The Little Prince",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 128,
        published: 2001,
        bookSenario: "Tarixiy",
        nashriyot: "АСТ",
        bookInfo: `
        Самое знаменитое произведение Антуана де Сент-Экзюпери с авторскими рисунками. Мудрая и "человечная" сказка-притча, в которой просто и проникновенно говорится о самом важном: о дружбе и любви, о долге и верности, о красоте и нетерпимости к злу.`,

        bookInfoTwo: `
        Самое знаменитое произведение Антуана де Сент-Экзюпери с авторскими рисунками. Мудрая и "человечная" сказка-притча, в которой просто и проникновенно говорится о самом важном: о дружбе и любви, о долге и верности, о красоте и нетерпимости к злу.
        Самое знаменитое произведение Антуана де Сент-Экзюпери с авторскими рисунками. Мудрая и "человечная" сказка-притча, в которой просто и проникновенно говорится о самом важном: о дружбе и любви, о долге и верности, о красоте и нетерпимости к злу.
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "95",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15c2858d092.jpg.webp",
        bookName: "Kichkina shahzoda",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2018,
        bookSenario: "Tarixiy",
        nashriyot: "Адабиёт учқунлари",
        bookInfo: `
        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”. “Кичкина шаҳзода” катталарга болалигини эслаш, болаларга эса меҳрлироқ бўлиш, илк бор сабр, дўстлик ва муҳаббат ҳақида ўйлаб кўриш имкониятини беради.`,
        bookInfoTwo: `

        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”. “Кичкина шаҳзода” катталарга болалигини эслаш, болаларга эса меҳрлироқ бўлиш, илк бор сабр, дўстлик ва муҳаббат ҳақида ўйлаб кўриш имкониятини беради.
        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”. “Кичкина шаҳзода” катталарга болалигини эслаш, болаларга эса меҳрлироқ бўлиш, илк бор сабр, дўстлик ва муҳаббат ҳақида ўйлаб кўриш имкониятини беради.
        `,
        bookPrice: "19 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "96",
    name: "James",
    lastName: "Clergy",
    born: 1921,
    bornDate: 10,
    bornMonth: " октября",
    died: 1994,
    diedDate: 7,
    diedMonth: "сентября",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://i0.wp.com/whitepaper.life/wp-content/uploads/2020/08/12.png?fit=900%2C703&ssl=1",
    desc: `Антуа́н Мари́ Жан-Бати́ст Роже́ де Сент-Экзюпери́ (фр. Antoine Marie Jean-Baptiste Roger vicomte de Saint-Exupéry; 29 июня 1900, Лион, Франция — 31 июля 1944) — французский писатель, поэт, эссеист и профессиональный лётчик.
    Антуа́н Мари́ Жан-Бати́ст Роже́ де Сент-Экзюпери́ (фр. Antoine Marie Jean-Baptiste Roger vicomte de Saint-Exupéry; 29 июня 1900, Лион, Франция — 31 июля 1944) — французский писатель, поэт, эссеист и профессиональный лётчик.`,
    jobs: "Антуан де Сент-Экзюпери родился во французском городе Лион на улице Пейра (фр. rue Peyrat, ныне фр. rue Antoine de Saint Exupéry), 8, у страхового инспектора Мартина-Луи Жана Экзюпери (1863—1904) и его супруги Мари Буаэ де Фонколомб. Семья происходила из старинного рода перигорских дворян",
    location: "Сидней, Австралия",
    bookObj: [
      {
        bookId: "97",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/be1bc7997695495f756312886f5661102022042721444072504yCTRpe6uKr.jpg.webp",
        bookName: "Atom odatlar",
        bookRating: 5,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 300,
        nashriyot: "Ниҳол нашр",
        bookInfo: `
        Сизга ҳаётингизни ўзгартиришда муҳим бўлган ажойиб китобни она тилимизда тақдим этишдан хурсандмиз. 
        Нима мақсад қўйганингиздан қатъий назар, ушбу китоб сизга ҳар куни оз-оздан яхшиланиб боришнинг синалган дастурини таклиф қилади.`,

        bookInfoTwo: `
        Агар одатларингизни ўзгартиришни уддасидан чиқа олмаётган бўлсангиз, муаммо сизда эмас. Муаммо тизимда. Ёмон одатлар такрорланаверишининг сабаби сиз уларни ўзгартиришни хоҳламаётганингизда эмас, балки ўзгариш учун нотўғри тизим танлаганингизда. Сиз мақсадларингизнинг даражасига кўтарилмайсиз, билъакс тизимларингиз даражасига тушиб қоласиз. Мазкур китобда эса сизни янги чўққиларга олиб чиқувчи синашта тизим билан танишасиз.`,
        bookPrice: "45 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "98",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/6da37dd3139aa4d9aa55b8d237ec5d4a20210602165931445931XM3xFsyhG.jpg.webp",
        bookName: "Atomic Habits (A5)",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 248,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Питер",
        bookInfo: `
        Атомные привычки - маленькие изменения, в которых скрыта огромную мощь! Вы давно пытаетесь измениться, но не получается. Не корите себя! Виноваты не вы, а система. Джеймс Клир развенчивает мифы о привычках, мотивации и силе воли.`,

        bookInfoTwo: `
        Опираясь на научные данные, результаты исследований, личный опыт и опыт успешных людей, он просто и понятно объясняет, как сделать хорошие привычки неизбежными, а вредные - невозможными. Без вариантов!
        Может ли одна монетка сделать человека богатым? Конечно, нет, скажете вы. Но если добавить еще одну? И еще? И еще? В какой-то момент количество перейдет в качество.
        `,
        bookPrice: "59 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "99",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/db98dc0dbafde48e8f74c0de001d35e42022051319454159977vQljshj6i2.jpg.webp",
        bookName: "Atomic Habits",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 304,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Питер",
        bookInfo: `
        А теперь представьте, что одно крошечное изменение кардинально меняет всю жизнь. Звучит фантастически! Но, как и в случае с монетками, срабатывает эффект сложного процента. И вот уже маленькое, но регулярное действие привело к большим результатам.`,

        bookInfoTwo: `
        Атомные привычки - маленькие изменения, в которых скрыта огромную мощь! Вы давно пытаетесь измениться, но не получается. Не корите себя! Виноваты не вы, а система. Джеймс Клир развенчивает мифы о привычках, мотивации и силе воли. Опираясь на научные данные, результаты исследований, личный опыт и опыт успешных людей, он просто и понятно объясняет, как сделать хорошие привычки неизбежными, а вредные - невозможными. Без вариантов!
        `,
        bookPrice: "85 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "100",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/db98dc0dbafde48e8f74c0de001d35e42022051319454159977vQljshj6i2.jpg.webp",
        bookName: "Atomic Habits",
        bookRating: 4.1,
        bookGenre: "jahon",
        bookPage: 304,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Питер",
        bookInfo: `
        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”. “Кичкина шаҳзода” катталарга болалигини эслаш, болаларга эса меҳрлироқ бўлиш, илк бор сабр, дўстлик ва муҳаббат ҳақида ўйлаб кўриш имкониятини беради.`,
        bookInfoTwo: `

        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”. “Кичкина шаҳзода” катталарга болалигини эслаш, болаларга эса меҳрлироқ бўлиш, илк бор сабр, дўстлик ва муҳаббат ҳақида ўйлаб кўриш имкониятини беради.
        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”. “Кичкина шаҳзода” катталарга болалигини эслаш, болаларга эса меҳрлироқ бўлиш, илк бор сабр, дўстлик ва муҳаббат ҳақида ўйлаб кўриш имкониятини беради.
        `,
        bookPrice: "70 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "101",
    name: "Lion",
    lastName: "Tolstoy Nikolaevich",
    born: 1828,
    bornDate: 28,
    bornMonth: "августа",
    died: 1910,
    diedDate: 7,
    diedMonth: "ноября",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Leo_Tolstoy%2C_portrait.jpg/800px-Leo_Tolstoy%2C_portrait.jpg",
    desc: `Граф Лев Никола́евич Толсто́й[К 1] (28 августа [9 сентября] 1828, Ясная Поляна, Тульская губерния, Российская империя — 7 [20] ноября 1910, станция Астапово, Рязанская губерния, Российская империя) — один из наиболее известных русских писателей и мыслителей, один из величайших писателей-романистов мира[4]. Участник обороны СевастополяПерейти к разделу «#Военная служба». Просветитель, публицист, религиозный мыслитель, его авторитетное мнение послужило причиной возникновения нового религиозно-нравственного течения — толстовстваПерейти к разделу «#Философия». За свои взгляды был отлучён от церкви. Член-корреспондент Императорской Академии наук (1873), почётный академик по разряду изящной словесности (1900)[5]. Был номинирован на Нобелевскую премию по литературе (1902, 1903, 1904, 1905). Впоследствии отказался от дальнейших номинаций. Классик мировой литературы.
    `,
    jobs: "Черты деда Ильи Андреевича даны в «Войне и мире» добродушному, непрактичному старому графу Ростову. Сын Ильи Андреевича, Николай Ильич Толстой (1794—1837), был отцом Льва Николаевича. Некоторыми свойствами характера и фактами биографии он был похож на отца Николеньки в «Детстве» и «Отрочестве» и отчасти на Николая Ростова в «Войне и мире».",
    location: "Ясная Поляна, Крапивенский уезд, Тульская губерния, Российская империя",
    bookObj: [
      {
        bookId: "102",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15c1a539b48.jpg.webp",
        bookName: "Uch ўlim",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 224,
        nashriyot: "Янги Нашр",
        bookInfo: `
        Ушбу тўпламда атоқли рус адиби Лев Толстойнинг ҳикоялари ва қиссалари жамланган. Унда: "Уч ўлим", "Хўжайин ва хизматкор", "Балдан сўнг", "Гуноҳимиз нима ?" каби ҳикоялари ва "Сергий ота" қиссаси ўрин олган.`,

        bookInfoTwo: `
        Ушбу тўпламда атоқли рус адиби Лев Толстойнинг ҳикоялари ва қиссалари жамланган. Унда: "Уч ўлим", "Хўжайин ва хизматкор", "Балдан сўнг", "Гуноҳимиз нима ?" каби ҳикоялари ва "Сергий ота" қиссаси ўрин олган.
        Ушбу тўпламда атоқли рус адиби Лев Толстойнинг ҳикоялари ва қиссалари жамланган. Унда: "Уч ўлим", "Хўжайин ва хизматкор", "Балдан сўнг", "Гуноҳимиз нима ?" каби ҳикоялари ва "Сергий ота" қиссаси ўрин олган.`,
        bookPrice: "19 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "103",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/3def184ad8f4755ff269862ea77393dd20210524150554570718qZskOi3Ps.jpg.webp",
        bookName: "Uch ўlim",
        bookRating: 0.3,
        bookGenre: "jahon",
        bookPage: 800,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Эксмо",
        bookInfo: `
        "Анна Каренина", один из самых знаменитых романов Льва Толстого, начинается ставшей афоризмом фразой: "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему". Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве.`,

        bookInfoTwo: `
        "Анна Каренина", один из самых знаменитых романов Льва Толстого, начинается ставшей афоризмом фразой: "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему". Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве. Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве.
        `,
        bookPrice: "65 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "104",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15c1e83fc3d.jpg.webp",
        bookName: "Ilohy Donishmand Lao-Tze hikmatlari",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 30,
        published: 2009,
        bookSenario: "Tarixiy",
        nashriyot: "Дониш",
        bookInfo: `
        А теперь представьте, что одно крошечное изменение кардинально меняет всю жизнь. Звучит фантастически! Но, как и в случае с монетками, срабатывает эффект сложного процента. И вот уже маленькое, но регулярное действие привело к большим результатам.`,

        bookInfoTwo: `
          Джеймс Клир развенчивает мифы о привычках, мотивации и силе воли. Опираясь на научные данные, результаты исследований, личный опыт и опыт успешных людей, он просто и понятно объясняет, как сделать хорошие привычки неизбежными, а вредные - невозможными. Без вариантов!
        `,
        bookPrice: "6 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "105",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/b11002a4638a6bb480e36147261b2d072020041517180547378nG8QMb8WpL.jpg.webp",
        bookName: "Bolalar uchun hikoyalar",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 96,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Академнашр",
        bookInfo: `
        Мазкур китоб улуғ адиб Л.Н.Толстойнинг болалар учун яратилган ҳикоялари, эртаклари ва масалларидан иборат. Бу мўъжаз асарларни ўқиш давомида азиз ўқувчи ҳаётда учраб турадиган турли-туман воқеликларга ошно бўлади. Китоб ёш уқувчилар, ота-оналар, устозлар учун мўлжалланган.`,
        bookInfoTwo: `
        Мазкур китоб улуғ адиб Л.Н.Толстойнинг болалар учун яратилган ҳикоялари, эртаклари ва масалларидан иборат. Бу мўъжаз асарларни ўқиш давомида азиз ўқувчи ҳаётда учраб турадиган турли-туман воқеликларга ошно бўлади. Китоб ёш уқувчилар, ота-оналар, устозлар учун мўлжалланган.
        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”.
        `,
        bookPrice: "15 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "106",
    name: "Robin",
    lastName: "Sharma",
    born: 1965,
    bornDate: 18,
    bornMonth: "марта",
    died: 2002,
    diedDate: 1,
    diedMonth: "ноября",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robin_Sharma.jpg/800px-Robin_Sharma.jpg",
    desc: `Граф Лев Никола́евич Толсто́й[К 1] (28 августа [9 сентября] 1828, Ясная Поляна, Тульская губерния, Российская империя — 7 [20] ноября 1910, станция Астапово, Рязанская губерния, Российская империя) — один из наиболее известных русских писателей и мыслителей, один из величайших писателей-романистов мира[4]. Участник обороны СевастополяПерейти к разделу «#Военная служба». Просветитель, публицист, религиозный мыслитель, его авторитетное мнение послужило причиной возникновения нового религиозно-нравственного течения — толстовстваПерейти к разделу «#Философия». За свои взгляды был отлучён от церкви. Член-корреспондент Императорской Академии наук (1873), почётный академик по разряду изящной словесности (1900)[5]. Был номинирован на Нобелевскую премию по литературе (1902, 1903, 1904, 1905). Впоследствии отказался от дальнейших номинаций. Классик мировой литературы.
    `,
    jobs: "Черты деда Ильи Андреевича даны в «Войне и мире» добродушному, непрактичному старому графу Ростову. Сын Ильи Андреевича, Николай Ильич Толстой (1794—1837), был отцом Льва Николаевича. Некоторыми свойствами характера и фактами биографии он был похож на отца Николеньки в «Детстве» и «Отрочестве» и отчасти на Николая Ростова в «Войне и мире».",
    location: "Порт Хоксбери, Новая Шотландия, Канада",
    bookObj: [
      {
        bookId: "107",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/f7a230fa929494cfc804c26e5c27d4522020051513220358635bP9qf2H7GU.jpg.webp",
        bookName: "The Key to Superpowers!",
        bookRating: 0.2,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 100,
        nashriyot: "АСТ",
        bookInfo: `
        Можно проклинать тьму, а можно зажечь свечу и осветить свою жизнь. Этот выбор очень просто сделать на словах, но так сложно в жизни. Вас поддержит тот, за чьими идеями идут уже миллионы.`,

        bookInfoTwo: `
        Его книга – одновременно простая и мудрая, эмоциональная и вдохновляющая. Она расширяет горизонты, поможет посмотреть в лицо своим страхам, указывает на очевидные возможности стать успешным, которые вы просто не замечаете, а в итоге выводит вас на совершенно новый уровень жизни.
        По отзывам читателей, с этой книгой просто невозможно оставаться в темноте, она выведет вас к свету, хотите вы того или нет.`,
        bookPrice: "35 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "108",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/72007983849f4fcb0ad565439834756b2022050413300213160eju7g7gaiT.jpg.webp",
        bookName: "200 hayot darcy",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Zukko kitobxon",
        bookInfo: `
        "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему". Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве.`,

        bookInfoTwo: `
          "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему". Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве. Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве.
        `,
        bookPrice: "39 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "109",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/dabd8d2ce74e782c65a973ef76fd540b2021080717310387726zRC0DESWkt.jpg.webp",
        bookName: "Robin Sharma Super Hot",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2009,
        bookSenario: "Tarixiy",
        nashriyot: "Ёш куч",
        bookInfo: `
        Бугун – сизнинг янгиланган, сизга уни бирор-бир ҳақиқатда гўзал ва умрбоқий нарсага айлантириб олишингиз учун берилган янги ҳаётингизнинг биринчи кунидир.`,

        bookInfoTwo: `
        Бугун – сизнинг янгиланган, сизга уни бирор-бир ҳақиқатда гўзал ва умрбоқий нарсага айлантириб олишингиз учун берилган янги ҳаётингизнинг биринчи кунидир. Ҳеч бир ўтмиш келажакни белгилай олмайди, шундай экан, ҳаётингиздаги ижобий ўзгариш­лар, бурилишлар киприк қоққулик муддатда содир бўлиши ҳеч гап эмас (албатта, агар ҳаёт тарзингизни энг юқори даражасигача олиб чиқишга бўлган қатъий қарорга эга бўлсангиз).
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "110",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/287ea2b7ce2a717ab78940b3966591ea20210308175933554239eVoKQMBUp.jpg.webp",
        bookName: "Eng sara asarlari",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 600,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Шарқ-Зиё-Заковат",
        bookInfo: `
        Робин Шарманинг бестселлерга айланган "Феррарини сотган роҳиб" асари адвокат ва миллионер Жулиан Ментлнинг ҳаёти ҳақида ноодатий воқеани ҳикоя қилади. У руҳий кризисни бошдан кечириб қадимий маданиятлардан бирига шўнғийди ва ўзи учун амалий, оқилона билимларни кашф этади. `,
        bookInfoTwo: `
        Мазкур китоб улуғ адиб Л.Н.Толстойнинг болалар учун яратилган ҳикоялари, эртаклари ва масалларидан иборат. Бу мўъжаз асарларни ўқиш давомида азиз ўқувчи ҳаётда учраб турадиган турли-туман воқеликларга ошно бўлади. Китоб ёш уқувчилар, ота-оналар, устозлар учун мўлжалланган.
        Антуан де Сент экзепюри китобга ёзган бағишловида шундай дейди: “Барча катталар аввал бола бўлган, аммо улардан камчилиги буни эслайди”.
        `,
        bookPrice: "49 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "111",
    name: "Fedor",
    lastName: "Mikhailovich Dostoevsky",
    born: 1821,
    bornDate: 30,
    bornMonth: "октября ",
    died: 1881,
    diedDate: 28,
    diedMonth: "января",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robin_Sharma.jpg/800px-Robin_Sharma.jpg",
    desc: `
    Фёдор Миха́йлович Достое́вский (30 октября [11 ноября] 1821, Москва, Российская империя — 28 января [9 февраля] 1881, Санкт-Петербург, Российская империя) — русский писатель, мыслитель, философ и публицист[9]. Член-корреспондент Петербургской академии наук с 1877 года[10]. Классик мировой литературы, по данным ЮНЕСКО, один из самых читаемых писателей в мире. Собрание сочинений Достоевского состоит из 12 романов, четырёх новелл, 16 рассказов и множества других произведений.
    `,
    jobs: "К наиболее значительным произведениям писателя относятся романы «великого пятикнижия». Многие известные произведения Достоевского многократно экранизировались и инсценировались в театре, ставились балетные и оперные постановки.",
    location: "Москва, Российская империя",
    bookObj: [
      {
        bookId: "112",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/3ea2db50e62ceefceaf70a9d9a56a6f42022051020065814859SeSoXEKXCY.jpg.webp",
        bookName: "Kambagallar",
        bookRating: 5,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 158,
        nashriyot: "Ўқитувчи",
        bookInfo: `
        Достоевский инсон руҳиятини ёритувчи салмоқли асарлари билан жаҳон адиблари рўйхатидан ўрин олди. Унинг умуминсоний қадриятларни тараннум этувчи барча асарлари аллақачон ҳақиқий китобхонлар жовонига териб бўлинган.`,

        bookInfoTwo: `
        Адибнинг маълум бир миллат ҳаётини, турмуш таризини ёритар экан, замирида барча халқларга бирдек хос бўлган маънавий хусусиятларни меҳр-муҳаббат, садоқат, элпарварлик, меҳнатсеварликни юксакларга кўтаради. "Камбағаллар" романи ҳам ана шундай туйғу ва ҳислатларни улуғловчи асарлардан бири.`,
        bookPrice: "25 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "113",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/4b4edc2630fe75800ddc29a7b4070add2021122817020475502VbpTTzsy6v.jpg.webp",
        bookName: "Iblislar (2-wire)",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 408,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Ўқитувчи",
        bookInfo: `
        Ҳар қандай, боз устига ижодкор инсон ҳаётида бўлганидек, муҳаббат кечинмалари Достоевский ижодига шубҳасиз таъсир кўрсатган. Достоевский ўзи севган аёлларнинг, масалан,Мария Дмитриевнанинг фазилатларини асарлари қаҳрамонлари: Катерина Мармеладова, Катерина Верховенская ва Настасья Филипповнага сингдириб юборган.`,

        bookInfoTwo: `
          "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему". Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве. Это книга о вечных ценностях: о любви, о вере, о семье, о человеческом достоинстве.
          Ҳар қандай, боз устига ижодкор инсон ҳаётида бўлганидек, муҳаббат кечинмалари Достоевский ижодига шубҳасиз таъсир кўрсатган. Достоевский ўзи севган аёлларнинг, масалан,Мария Дмитриевнанинг фазилатларини асарлари қаҳрамонлари: Катерина Мармеладова, Катерина Верховенская ва Настасья Филипповнага сингдириб юборган.
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "114",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15bfec05b4a.jpg.webp",
        bookName: "Khurlangan va khakoratlanganlar",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 480,
        published: 2009,
        bookSenario: "Tarixiy",
        nashriyot: "Ёш куч",
        bookInfo: `
        Ушбу китоб рус адиби Фёдор Достоевский қаламига мансуб "Униженые и оскорбленные" романининг Ҳабиба Зиёхонова томонидан "Хўрланганлар ва ҳақоратланганлар" номи остида таржима қилинган кўринишидир.`,

        bookInfoTwo: `
        Ўзбек китобхонларига тақдим этилаётган бу роман улуғ рус ёзувчиси Ф.М.Достоевскийнинг энг йирик асарларидан бири. Адиб рус подшоларининг пойтахти  бўлган Петербург шаҳрининг энг қашшоқ , бахтсиз фуқаролари ҳаётини тасвирлайди, уларнинг олийжаноблигини, золим княз Валковский каби катта ер эгаларининг бераҳм, очкўзлигини чуқур бадиий воситалар билан кўрсатади.
        `,
        bookPrice: "35 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "115",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15c072c2d89.jpg.webp",
        bookName: "Zhinoyat va jazzo",
        bookRating: 3.1,
        bookGenre: "jahon",
        bookPage: 720,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Илм-Зиё-Заковат",
        bookInfo: `
        Асар 1866 йилда ёзилган. Аммо инсон кечинмаларининг эски ва янгиси бўлмаганидек, роман қадри ҳам эскирмаган. Китоб ўзбек тилида бундан аввал 1977 йилда чоп этилган. Қарийб 40 йилдан кейин асарни қайта нашр этишдан мақсадимиз.
          `,
        bookInfoTwo: `
        Натижада, йўқчиликдан қутулиш, тезда бойиб кетиш ва юқори мавқеига эга бўлиш мақсадида ақл бовар қилмайдиган жиноят содир қилади. Фожиали жиҳати – қаҳрамон ўз жиноятини оқлайди. Аммо ҳаёт қонунлари адолатли – жиноятни жазосиз қолишига имкон бермайди. Руҳий жазо жиноятчини ўз айбига иқрор бўлишга мажбур этади. Романда шу мудҳиш қотилликнинг узлуксиз уқубатлари билан бирга гўзал муҳаббат тасвири ҳам борки, у китобхон қалбини беихтиёр жунбишга келтиради.
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "116",
    name: "Valery",
    lastName: "Vladimirovich",
    born: 1966,
    bornDate: 21,
    bornMonth: "ноября ",
    died: 2013,
    diedDate: 28,
    diedMonth: "января",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robin_Sharma.jpg/800px-Robin_Sharma.jpg",
    desc: `
    Вале́рий Влади́мирович Сине́льников (род. 21 ноября 1966) — писатель, гомеопат, автор книг по улучшению качества жизни. Создатель «Школы Здоровья и Радости доктора Синельникова», общеобразовательной начальной школы для детей «Азъ Буки Веди».
    Вале́рий Влади́мирович Сине́льников (род. 21 ноября 1966) — писатель, гомеопат, автор книг по улучшению качества жизни. Создатель «Школы Здоровья и Радости доктора Синельникова», общеобразовательной начальной школы для детей «Азъ Буки Веди».`,
    jobs: "Создатель «Школы Здоровья и Радости доктора Синельникова», общеобразовательной начальной школы для детей «Азъ Буки Веди».",
    location: "Владивосток, РСФСР, СССР",
    bookObj: [
      {
        bookId: "117",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/b5b0db7f3a77ca4fcf9eca57aa7181ca2022051020310938375DfL9Vx8Naz.jpg.webp",
        bookName: "Dardingny sowing",
        bookRating: 3.1,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 877,
        nashriyot: "Muharrir",
        bookInfo: `
        Доктор Синельников томонидан ишлаб чиқилган янги дунёқараш модели, муаллифнинг самарали усул ва стратегиялари сизни нафақат шифо топиш, балки касалликнинг олдини олиш сирларидан воқиф этади.`,

        bookInfoTwo: `
        Доктор Синельников томонидан ишлаб чиқилган янги дунёқараш модели, муаллифнинг самарали усул ва стратегиялари сизни нафақат шифо топиш, балки касалликнинг олдини олиш сирларидан воқиф этади. Сиз туйғуларингизни бошқариш, бошқаларнинг фикрини ўқишни ўрганиб оласиз, қўрқув ва тушкунлик билан ҳайрлашасиз, айбдорлик туйғуси ва беҳудага ачинишдан воз кечасиз, ҳаётингиздан стресслар батамом чиқиб кетади`,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "118",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/88c210aec890e836f12da3e47528032b2021041118074893612O5JTNm16yR.jpg.webp",
        bookName: "Stressdan Emlanish",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 200,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Наврўз",
        bookInfo: `
        В. В. Синелников - машҳур амалиётчи психотерапевт, психолог, минглаб одамга соғлиғини тиклаш, моддий фаровонлигини ошириш, ҳаёт қувончини ҳис қилишга ёрдам берган оддий ва самарадорлиги билан ўзига хос бўлган психологик методикалар муаллифи. `,

        bookInfoTwo: `
        Унинг бу китобидан қандай килиб онг остингиз имкониятидан куч ва энергия тўплаш, муаммоларингизни тушуниш, стресс ва касаллик нималигини батамом унутиш учун фойдаланиш мумкинлигини билиб оласиз. Китоб шифобахш кучга эга. Унинг ижобий таъсири китобни қўлга олган пайтингизданоқ бошланади.
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "119",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/ca851e9f71b25d2d588b7e0d4de3d62720220506143017871464udSnlBWgr.jpg.webp",
        bookName: "Love your disease",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 416,
        published: 2009,
        bookSenario: "Tarixiy",
        nashriyot: "Ёш куч",
        bookInfo: `
        Валерий Синельников - известный практикующий психотерапевт, психолог, гомеопат, автор уникальных по простоте и эффективности целительных психологических методик, которые помогли тысячам людей вернуть здоровье, повысить благосостояние, познать радость жизни.`,

        bookInfoTwo: `
        Из его книги вы узнаете, как научиться использовать силы своего подсознания для того, чтобы простить и избавиться от чувства вины, справиться с депрессией и изгнать ревность, излечиться от множества заболеваний и стать удачливым. Сегодня мы представляем вам новую, доработанную и дополненную версию легендарной книги. Читайте и будьте здоровы!
        `,
        bookPrice: "135 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "120",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/0a348ede8ac3768875037baca5de6e2620220510200448267577GSN2bLhqg.jpg.webp",
        bookName: "Niyatning heaps",
        bookRating: 3.1,
        bookGenre: "jahon",
        bookPage: 120,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Бошқа нашриётлар",
        bookInfo: `
        Ният нима ? Қандай қилиб уни тўғри ифодалаш ва кундалик ҳаётда ундан самарали фойдаланиш мумкин ? Қандай қилиб ички кучни кўпайтириш мумкин ?
          `,
        bookInfoTwo: `
        Сиз фикрлаш ва хатти-ҳаракатингизда мослашувчан бўлишга, кўтаринкилик ва ният тозалигига ўрганасиз, салбий туйғулар ва иримлар билан хайрлашасиз, ички ижодий имкониятингизни очиб, рўёбга чиқарасиз ва кўнглингиздаги орзунгизни амалга оширасиз . 
        Китоб шифобахш кучга эга !
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id: "121",
    name: "Resat",
    lastName: "Nuri",
    born: 1889,
    bornDate: 25,
    bornMonth: "ноября ",
    died: 1956,
    diedDate: 7,
    diedMonth: "декабря ",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robin_Sharma.jpg/800px-Robin_Sharma.jpg",
    desc: `
    Его отец был военным врачом-майором в армии. Владел персидским, арабским и французским языками и однажды сказал Решату: «Я хотел воспитать тебя как Эмиля из романа Руссо». Он побуждал сына лучше узнавать людей, природу, размышлять о них. Все это сыграло важную роль в становлении Решата Нури как писателя.`,
    jobs: "Создатель «Школы Здоровья и Радости доктора Синельникова», общеобразовательной начальной школы для детей «Азъ Буки Веди».",
    location: "	Стамбул, Османская империя",
    bookObj: [
      {
        bookId: "122",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/3546ab441e56fa333f8b44b610d956912021091121524722020Wh7Mj8YeYk.jpg.webp",
        bookName: "Otash kechasi",
        bookRating: 5,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 368,
        nashriyot: "Янги Аср Авлоди",
        bookInfo: `
        Қўлингиздаги роман Рашод Нури Гунтекиннинг энг машҳур асарларидан биридир. Роман қаҳрамони ниҳоятда гўзал, покиза, лекин бахтсиз Афифани қаттиқ севиб қолади, унинг ишқида ўртаниб куйиб-ёнади.`,

        bookInfoTwo: `
        Қўлингиздаги роман Рашод Нури Гунтекиннинг энг машҳур асарларидан биридир. Роман қаҳрамони ниҳоятда гўзал, покиза, лекин бахтсиз Афифани қаттиқ севиб қолади, унинг ишқида ўртаниб куйиб-ёнади. Асар қаҳрамонларининг ишқ изтироблари, дарду ҳасратлари китобхонни бефарқ қолдирмайди, гўзалликка, муҳаббатни қадрлашга чорлайди.`,
        bookPrice: "35 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "123",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/88c210aec8https://assets.asaxiy.uz/product/items/desktop/15de21c670ae7c3f6f3f1f37029303c92021021015411481522plh3j3MqHj.jpg.webp",
        bookName: "Eng sara asarlari",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 560,
        published: 2019,
        bookSenario: "Tarixiy",
        nashriyot: "Бук медиа Нашр",
        bookInfo: `
        В. В. Синелников - машҳур амалиётчи психотерапевт, психолог, минглаб одамга соғлиғини тиклаш, моддий фаровонлигини ошириш, ҳаёт қувончини ҳис қилишга ёрдам берган оддий ва самарадорлиги билан ўзига хос бўлган психологик методикалар муаллифи. `,

        bookInfoTwo: `
        Унинг бу китобидан қандай килиб онг остингиз имкониятидан куч ва энергия тўплаш, муаммоларингизни тушуниш, стресс ва касаллик нималигини батамом унутиш учун фойдаланиш мумкинлигини билиб оласиз. Китоб шифобахш кучга эга. Унинг ижобий таъсири китобни қўлга олган пайтингизданоқ бошланади.
        `,
        bookPrice: "39 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "124",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/ab363e8e6f600bea303f8a0a9f7867f92020021817051387150C1f9ghpC5g.jpg.webp",
        bookName: "Iztirob",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 128,
        published: 2009,
        bookSenario: "Tarixiy",
        nashriyot: "Янги Аср Авлоди",
        bookInfo: `
        Асар бош қаҳрамони Заҳро – мактабнинг катта ўқитув­чиси. Фидойи, жонкуяр, меҳнаткаш, бир сўз билан айтган­да, жонсарак аёл. Заҳронинг бошлиғи, яъни маориф муди­ри уни ниҳоятда ҳурмат қилади, иш борасида муваффақи­ятларини эътироф этади, аммо ходимининг бир жиҳатини сира қабул қилолмайди:`,

        bookInfoTwo: `
        Фидойи, жонкуяр, меҳнаткаш, бир сўз билан айтган­да, жонсарак аёл. Заҳронинг бошлиғи, яъни маориф муди­ри уни ниҳоятда ҳурмат қилади, иш борасида муваффақи­ятларини эътироф этади, аммо ходимининг бир жиҳатини сира қабул қилолмайди: Заҳрода раҳм-шафқат, кечириш туйғуси йўқ! Бунинг сабаби балки шафқатсизлик дунёсида қолиб кетган болаликка бориб тақалар, балки бу туйғулар узун тунларда ота-онасининг жанжалларидан қўрқиб, ун­сиз тўкилган кўз ёшлар билан уни тарк этгандир...
        `,
        bookPrice: "19 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "125",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/c7223489d2f8ab84f76e5d5d54769d6120200828154731738619ML1Yxa4WK.jpg.webp",
        bookName: "Muhabbat symphonysi",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 420,
        published: 2020,
        bookSenario: "Tarixiy",
        nashriyot: "Янги Аср Авлоди",
        bookInfo: `
        Улуғ турк ёзувчиси Рашод Нури Гунтекин 1925 йилда ёзилган “Муҳаббат симфонияси” (“Дудоқдан қалбга”) романида турли социал қатламлардан чиққан қаҳрамонларнинг яшаш тарзларини кўрсатаркан, даврнинг ижтимоий-сиёсий шароитини ҳам эътибордан четда қолдирмайди. 
          `,
        bookInfoTwo: `
        Илк романи “Чолиқуши”да бўлгани каби, бу асарда ҳам қаҳрамонларнинг ҳиссий тўлқинлари, умидсиз яшаш манзараларини усталик билан таҳлил этади, ўқувчини роман қаҳрамонлари Ламиа билан Ҳусайн Канон кетидан бир Истанбулга, бир Измирга, Кутаҳйа ва Бўзёқанинг бетакрор манзарали боғларига етаклайди. Китобхон қаҳрамонларнинг теран ва мураккаб муҳаббатлари қиссасини то китобнинг сўнгги саҳифасигача катта ҳаяжон билан ўқиши ҳар қандай шубҳадан холидир.
        `,
        bookPrice: "29 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },

  {
    id : "126",
    name : "Ray",
    lastName : "Bradbury",
    born : 1942,  
    bornDate : 22,
    bornMonth : "Aug",
    died : 2012,
    diedDate : 5,
    diedMonth : "June",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndGfPav_QnrVpRHGN9i-2D6tRpDsVRMOKT97zc_evpQ3-F2Dp",
    desc : "Ray Douglas Bradbury was an American author and screenwriter. One of the most celebrated 20th-century American writers, he worked in a variety of modes, including fantasy, science fiction, horror, mystery, and realistic fiction.",
    jobs : "Bradbury was mainly known for his novel Fahrenheit 451 (1953) and his short-story collections The Martian Chronicles (1950) and The Illustrated Man (1951).",
    location : "Illinois, United States",
    bookObj : [
      {
        bookId : "127",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/bd7db7397f7d83052f829816ecc7f00420220121123310819848iaLdiqnX9.jpg.webp",
        bookName : "Dandelion Wine",
        bookRating : 5,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        published : 2021,
        bookPage : 320,
        nashriyot : "Эксмо",
        bookInfo : `
        Яркое, фантастическое лето 1928 года: двенадцатилетний Дуглас Сполдинг ведет записи о событиях того лета, которые складываются в отдельные истории, гротескные искажения ординарных будней маленького городка, где живут Дуглас и его семья. Там все кажется не тем, чем является, а сила детского воображения создает новую реальность, которую не отличить от вымысла. Выросший из отдельных рассказов, филигранных в своей лиричности, роман "Вино из одуванчиков" – классическая хроника детства Рэя Брэдбери, окно в творческий мир писателя, создавшего такие шедевры мировой литературы, как "Марсианские хроники" и "451 градус по Фаренгейту".`,
        
        bookInfoTwo : `
  
        Здесь навсегда останется Ваше сердце. Войдите в светлый мир двенадцатилетнего мальчика и проживите с ним одно лето, наполненное событиями радостными и печальными, загадочными и тревожными; лето, когда каждый день совершаются удивительные открытия, главное из которых — ты живой, ты дышишь, ты чувствуешь! Старики — мудрецы, постигшие жизнь. Дети — мудрецы, постигающие жизнь. Богатый мир детей вбирает в себя все от кузнечиков до магии, которая у Рэя Брэдбери реально действует. Дети любят бояться. Они постоянно ищут приключения на свою голову, шатаясь по Оврагу в неурочный час. После фильма ужасов возвращаются через Овраг (воплощение зла, почти живое существо) и не хотят, чтобы их город превратился в идеальный мир «ванильный творожок». Они постигают жизнь и законы бытия и собираются жить вечно (ну или почти).
        `,
        bookPrice : "69 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "128",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5a9d8bf5b7a4b35f3110dde8673bdda22022051022162188381pCLUVWWOWc.jpg.webp",
        bookName : "Farewell Summer",
        bookRating : 0,
        bookGenre : "jahon",
        bookPage : 224,
        published : 2020,
        bookSenario : "Tarixiy",
        nashriyot : "Эксмо",
        bookInfo : `
        Роман Рэя Брэдбери, опубликованный 17 октября 2006 года. Является продолжением повести 1957 года «Вино из одуванчиков». `,
        
        bookInfoTwo : `
  
        Эти две книги, вместе с романом «Надвигается беда» 1962 года, представляют собой трилогию воспоминаний Брэдбери о детстве, проведённом в Уокигане.
        `,
        bookPrice : "79 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "129",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/1f3202d820180a39f736f20fce790de82021100217521374425HC12z9cj5t.jpg.webp",
        bookName : "Dandelion Wine",
        bookRating : 5,
        bookGenre : "jahon",
        bookPage : 352,
        published : 2021,
        bookSenario : "Tarixiy",
        nashriyot : "Эксмо",  
        bookInfo : `
        Войдите в светлый мир двенадцатилетнего мальчика и проживите с ним одно лето, наполненное событиями радостными и печальными, загадочными и тревожными; лето, когда каждый день совершаются удивительные открытия, главное из которых — ты живой, ты дышишь, ты чувствуешь!`,
        
        bookInfoTwo : `
  
        «Вино из одуванчиков» Рэя Брэдбери — классическое произведение, вошедшее в золотой фонд мировой литературы.
        `,
        bookPrice : "59 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "130",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/662548dada72a36a0c52c675797272fe2022042616435663053Lxg3AqGOZZ.jpg.webp",
        bookName : "Farengeyt bo'yicha 451 daraja",
        bookRating : 5,
        bookGenre : "jahon",
        bookPage : 224,
        published : 2021,
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ҳаёт тезлашган, бир хиллик тенглик деб аталадиган, одамлар бир-бирини эшитмайдиган, фикрлашдан тўхтаган, ҳурлик маҳв этилган…  Бу жамиятда китоблар ақл кушандаси саналади, тақиқлар туфайли одамлар аста-секин улардан воз кечади, адабиётдан қўрқади.`,
        
        bookInfoTwo : `
  
        Улар фақат қулоқларидаги “чиғаноқ”лардан тараладиган маънисиз мусиқадан маст, рекламалардан сарҳуш  яшайди.
        Китоблар тақиқланган яқин келажакдаги хаёлий Америка жамияти ҳақида ҳикоя қилувчи ушбу асар бош қаҳрамони Гай Монтэг – ўт ўчирувчи. Номи ўт ўчирувчи, аммо китобларни  улар топилган уйлар билан қўшиб ёқиш унинг аъмолидир. Аммо куни келиб, у ўз касбининг тўғрилигига шубҳаланиб қолди  ва аста-секин фикрлашни истаётганини сезди, ана шундан бошланган исён ортидан у ўзи яшаб турган жамиятдаги тутумни, тартиботни савол остига ола бошлади.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "131",
    name : "Dan",
    lastName : "Brown",
    born : 1964 ,  
    bornDate : 22,
    bornMonth : "June",
    died : 2012,
    diedDate : 5,
    diedMonth : "June",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6jdYkC4pZlZYxz6wssMxmXK0WW2rtOhUwKtLftidmbEiaPJA",
    desc : "Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno, and Origin. His novels are treasure hunts which usually take place over a period of 24 hours.",
    jobs : "The Robert Langdon novels are deeply engaged with Christian themes and historical fiction, and have generated controversy as a result. Brown states on his website that his books are not anti-Christian and he is on a 'constant spiritual journey' himself.",
    location : "New Hampshire, United States",
    bookObj : [
      {
        bookId : "132",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/0084ae4bc24c0795d1e6a4f58444d39b2022042720371385007LUUTHneFRs.jpg.webp",
        bookName : "Ibtido",
        bookRating : 4,
        bookPage : 670,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        2017 йил чоп этилиб бутун дунё бўйлаб жуда кўплаб шов-шув ва жиддий баҳс-мунозараларга сабаб бўлган, «Да Винчи сири» асари муаллифи Ден Брауннинг яна бир машҳур романи энди ўзбек тилида!!!`,
        
        bookInfoTwo : `
  
        Бу асар 2017 йил октябр ойида АҚШ да чоп этилишига қарамай, 2 ой ичида дунёнинг 30 дан ортиқ тилига таржима қилинди ва дунё бестселлерлари сирасига кирган ҳисобланади.
        «Ибтидо» - америкалик муаллиф Ден Браун қаламига мансуб триллер асар бўлиб, Роберт Ленгдон сериясида «Инферно»дан кейинги бешинчи китоб ҳисобланади. Асар воқеалари асосан Испанияда, қисман Дубай ва Будапештда юз беради. 2018 йил Август ойида асар «New York Times»нинг энг яхши сотилган китоблар рўйхатидан биринчи ўринни эгаллади ҳамда 23 ҳафта мобайнида рўйхатдан тушмади.
        `,
        bookPrice : "69 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "133",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/680aef021cb2454116eb738550f81cb02020022015024962143ZW8TLxtWh6.jpg.webp",
        bookName : "Da Vinci Code",
        bookRating : 5,
        bookPage : 376,
        published : 2020,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        "Да Винчи сири” илк бор (2003 йил) савдога чиққан ҳафтанинг ўзидаёқ савдо кўрсаткичи билан “The New York Times” газетасида, “The Wall Street Journal” ва “San-Fransisko” йилномаларида биринчи ўринни, кейинчалик мамлакатдаги энг йирик сотувчилар рейтингида юқори ўринни эгаллаган.`,
        
        bookInfoTwo : `
  
        Ушбу асар жаҳоннинг 44 тилига таржима қилинган бўлиб, бугунги кунга қадар бутун дунё бўйлаб 81 миллиондан ортиқ нусхада сотилган асар. Фақат угина машҳур рассом Леонардо да Винчи асарларида яширинган сирли кодни аниқлай олади... Ёлғиз у куч-қудрат берувчи диний қадамжолар, муқаддас қадриятларнинг ақл бовар қилмайдиган салоҳиятини англайди... Инсоният асрлар давомида бош қотирган улкан ва сирли жумбоқ калитини танҳо у топиши мумкин... «Да Винчи сири» романида муаллиф ўз ижодий изланишларини, тажрибаларини жамлаб, асар бош қаҳрамони, иконография ва дин тарихи мутахассиси, Гарвард университети профессори Роберт Лэнгдонда акс эттирди.
        `,
        bookPrice : "35 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "134",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/9edcc1391c208ba0b503fe9a225742512022031017552535635uyGcOPkAZE.jpg.webp",
        bookName : "Digital Fortress",
        bookRating : 5,
        bookPage : 480,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "АСТ",
        bookInfo : `
        Автор супербестселлера десятилетия предлагает вам взломать еще один код — сверхсложный, таящий в себе опасность и угрозу для всего мира! Но... кто придумал этот код?!`,
        
        bookInfoTwo : `
  
        Чего он добивается?! Зачем вступил в безжалостную игру с Агентством национальной безопасности США?! Оружие загадочного врага — всего лишь набор символов и букв. За расшифровку берется лучший криптограф Америки Сьюзан Флетчер. И то, что она обнаруживает, ставит под угрозу не только важнейшие разработки спецслужб США, но и судьбы миллионов людей... С этой секунды на Сьюзан начинается настоящая охота...
        `,
        bookPrice : "159 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "135",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/53c6a98e1c9f8da6f2918b19701a33392020050901130987293LkIasTTzB7.jpg.webp",
        bookName : "Inferno",
        bookRating : 5,
        bookPage : 607,
        published : 2018,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "АСТ",
        bookInfo : `
        Профессор Лэнгдон очнулся в больнице. Последние два дня пропали из его памяти, что дало старт странным событиям… За Лэнгдоном ведется охота. Но почему?`,
        
        bookInfoTwo : `
  
        Теперь ему предстоит перемещаться из города в город, чтобы спасти свою жизнь, узнать, что же произошло за эти два дня, и разгадать загадку, зашифрованную в «Божественной комедии» Данте, чтобы спасти человечество от надвигающейся беды по имени «Инферно».«Инферно» – четвертая по счету книга о приключениях профессора Роберта Лэнгдона – специалиста по Средневековью
        `,
        bookPrice : "109 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "136",
    name : "Mark",
    lastName : "Manson",
    born : 1984,  
    bornDate : 9,
    bornMonth : "March",
    died : 2012,
    diedDate : 5,
    diedMonth : "June",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdIm6hPApyMKPveMUu53NvQgr6clW6a90JttO2WB7X9GAYvlZ",
    desc : "Mark Manson is an American self-help author and blogger. As of 2019 he had authored three books, two of which, The Subtle Art of Not Giving a Fuck, and Everything Is Fucked: A Book About Hope, were The New York Times bestsellers. His books have sold over 13 million copies.",
    jobs : "Mark Manson was raised in Austin, Texas, in the United States.[2] He moved to Boston, Massachusetts to study, and graduated from Boston University in 2007.",
    location : "Остин, США",
    bookObj : [
      {
        bookId : "137",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/6e16656a6ee1de7232164767ccfa79202022042720485117146X2bgyDuYei.jpg.webp",
        bookName : "Beparvolikning nozik san’ati",
        bookRating : 5,
        bookPage : 192,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        "New York Times" бестселлери 6 миллиондан ортиқ нусхада сотилган
        Сўнгги йилларда Мэнсон анча оммалашган блоги орқали ўзимиз ва атрофимиздаги олам ҳақидаги ёлғон тасаввурларимиз ва уларни тўғрилаш ҳақида ёзди.`,
        
        bookInfoTwo : `
  
        Ниҳоят, у ўзининг аччиқ ҳақиқатларини қўлингиздаги китобга жамлади.
        Ушбу китобда  муаллиф бахтли бўлишнинг калити мудом “ижобий” фикрлашни тўхтатиб, воқеликни тан олиш ва унга тик боришда, деб кўрсатади. “Йиллар мобайнида бизга ижобий фикрлаш – бахтли ва муваффақиятли ҳаётнинг калити, дея уқтириб келдилар. Ортиқ бундай бўлмайди. Ижобийликка тупуринг,” – дейди Марк Мэнсон.
        `,
        bookPrice : "29 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "138",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/698d51a19d8a121ce581499d7b7016682021022718405066509C1CXkjDhKC.jpg.webp",
        bookName : "The Subtle Art of Not Giving a F*ck",
        bookRating : 0,
        bookPage : 191,
        published : 2020,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Бошқа нашриётлар",
        bookInfo : `
        Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее - будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение и заработал кучу денег, статьями в духе "Тысяча и один способ быть счастливым", а фото во френдленте создают впечатление, что окружающие живут лучше и интереснее, чем мы.`,
        
        bookInfoTwo : `
  
        Однако наша зацикленность на позитиве и успехе лишь напоминает о том, чего мы не достигли, о мечтах, которые не сбылись. Как же стать по-настоящему счастливым? Популярный блогер Марк Мэнсон предлагает свой, оригинальный подход к этому вопросу. Его жизненная философия проста - необходимо научиться искусству пофигизма. Определив то, до чего вам действительно есть дело, нужно уметь наплевать на все второстепенное, забить на трудности, послать к черту чужое мнение и быть готовым взглянуть в лицо неудачам и показать им средний палец.
        `,
        bookPrice : "99 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "139",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bd8105c2a.jpg.webp",
        bookName : "Everything Is Fucked",
        bookRating : 5,
        bookPage : 374,
        published : 2019,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Бошқа нашриётлар",
        bookInfo : `
        Популярнейший в мире блогер-скептик Марк Мэнсон продолжает обучать всех желающих «тонкому искусству пофигизма» в своей новой книге с воодушевляющим названием «Все хреново». И несмотря ни на что – это книга о надежде!`,
        
        bookInfoTwo : `
  
        Никогда еще в человеческой истории мы не жили так хорошо: победили кучу болезней, получили доступ к мировым знаниям и окружили себя комфортом технологий. Однако чем лучше становится жизнь, тем больше мы тревожимся и переживаем. Живем с ощущением, что все хреново. Планета нагревается, экономическое неравенство зашкаливает, политики воруют и врут. Нашей неуверенностью в будущем, отчаянием и надеждой, что все будет нормально, умело пользуются все кому не лень — от маркетологов, впаривающих нам очередную ненужную хрень, до религиозных и политических деятелей. Что же делать?
        `,
        bookPrice : "99 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "140",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/a4fd466fcbec6a26185a4fe62885b4b42020120811580885091h8Mv1UDVyE.jpg.webp",
        bookName : "Hammasi rasvo",
        bookRating : 5,
        bookPage : 240,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Muharrir",
        bookInfo : `
        Биз жуда қизиқ даврда яшамоқдамиз. Шу пайтга қадар инсон боласи кўрмаган қулайликларга эгамиз, бой-бадавлатмиз тўрт мучамиз соғ, тинч замондамиз яашаяпмиз, лекин, шундай бўлса-да  кўпчиликни умидсизлик қуршаб олмоқда.`,
        
        bookInfoTwo : `
  
        Қай биримиз глобал исиш муаммолардан қўрқамиз,  кимлардир ҳукуматдан норози, иқтисодий буҳронлардан таҳликага тушаётганларимиз ҳам сон-саноқсиз. Бу ҳол одамларда қўрқувни,  келажакка умидсизлик кайфиятини, негатив фикрларни туғдирмоқда.
        Мутолаасига киришаётганимиз ушбу китоб айни муаммоларни ечишда бизга ёрдам беради - руҳиятимиздаги ўзгаришларни психологик таҳлил қилади, сиёсий жараёнларга баҳо беришни ўргатади, глобал ўйинлар, бизнес ҳийлалар ҳақида жуда қизиқарли, ҳайратланарли маълумотларни тақдим этади. Хуллас, муаллиф ушбу асари орқали инсонларни умидсизликка, ялтироқ нарсаларга алданмасликка, ҳаётнинг моҳиятини англаб яшашга чақиради.
        `,
        bookPrice : "45 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]    
  },

  {
    id : "141",
    name : "Omina",
    lastName : "Shenliko'g'li",
    born : 1950,  
    bornDate : 1,
    bornMonth : "Jan",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://ziyouz.uz/wp-content/uploads/2019/02/amina-senlikoglu.jpg",
    desc : `Амина Шенликўғлу (Emine Şenlikoğlu) 1950 йил 1 январда Туркиянинг Адапазари шаҳрида туғилган. Асл исми Эмине Ўзжан Шенликўғлу (Emine Özkan Şenlikoğlu) дир
    Оз муддат Қоҳирадаги Ал-Азҳар Университетида ўқиган. 1984 йилдан «Мактуб» (Mektup) журналини чиқаришни бошлаган.
    «Ёшликнинг иймонини сўроқлар билан ўғирладилар» (Gençliğin İmanını Sorularla Çaldılar) китоби учун 8 йилу 3 ой ҳибсда ўтирган.`,
    jobs : "«Маҳкум туйғулар» (Mahkûm Duygular, 1985), «Руҳим ойнаси» (Ruhumun Penceresi, 1991) шеърий тўпламлари, «Мария» (Maria, 1993), «Мен кимнинг қурбониман» (Ben Kimin Kurbanıyım, 1993), «Сўнгги пушмон фойда этар» (Son Pişmanlık Fayda Eder, 1997) романлари, «Йиғлатган йиллар» (Ağlatan Yıllar, 1991) хотира-китоби, «Виждон азоби» (Vicdan Azabı, 1992) тўпламлари машҳур.",
    location : "Istanbul, Turkiya",
    bookObj : [
      {
        bookId : "142",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c1ce30b51.jpg.webp",
        bookName : "Imomning maneken qizi",
        bookRating : 5,
        bookPage : 171,
        published : 2018,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Qaqnus Media",
        bookInfo : `
        Омина Шенликўғли 1953 йилда Туркиянинг Гиресун вилояти, Дарали Анбаралан қишлоғида туғилган. Кичик ёшиданоқ Адабозорига, у ердан эса оиласи билан биргаликда Истанбулга келиб жойлашади.`,
        
        bookInfoTwo : `
  
        Ёшлик чоғидан турли йўналишлардаги таҳсил билан бир қаторда христианлик дини ва "Инжил" китоби бўйича илмий изланишлар билан шуғалланади. Кейинги йилларда кўпроқ Исломий билимлар олиб, фиқҳ ва ақоидда мустаҳкам билимга эга бўлди. Диний олим ва журналист Ражаб Ўзкан билан турмуш қуриб, икки фарзанднинг онаси бўлади.  Омина Шенликўғли 1985 йилдан бери "Мактуб" номли журналнинг нашр ишлари бошқарувчиси бўлиб ишлаб келмоқда.
        `,
        bookPrice : "25 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "143",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/8dd48d6a2e2cad213179a3992c0be53c2021060416491314436zFM6ZKB5DC.jpg.webp",
        bookName : "Miryám",
        bookRating : 5,
        bookPage : 288,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Кириллица",
        bookInfo : `
        Сизга “Насроний атиргули”, “Виждон азоби”, “Имомнинг манекен қизи”, “Дор остидаги аёл”, “Жоҳилистон келини” каби асарлари билан таниш бўлган туркиялик адиб Омина Шенликўғлининг яна бир машҳур асарини — “Мария” китобини ўзбек тилида тақдим этмоқдамиз.`,
        
        bookInfoTwo : `
  
        Бу адибнинг қайси асарини ўқиманг, ҳаммасида инсонни камолотга чорлайдиган, эътиқодни мустаҳкамлайдиган панд-насиҳатларни учратасиз. Айниқса, қўлингиздаги асарни — “МАРИЯ”ни ҳеч бир муболағасиз эътиқод улуғланган буюк обида дейишингиз аниқ. Ушбу асарни адиб ҳаётий воқеа асосида — бош қаҳрамоннинг ҳикояси бўйича ёзган. Асар воқеалари Германия ва Туркияда бўлиб ўтган. Асарнинг асосий қаҳрамони насроний қиз — Мария асар бошида ирқчи ва ҳатто миллатчи шахс сифатида кўзга ташланади. Лекин вақт ўтиши билан бошқа ирқ ва миллат вакиллари ҳам ўзлари каби инсон эканлигини англайди.
        `,
        bookPrice : "49 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "144",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/fb2e203234df6dee15934e448ee889712021122120093310159Ljkt6fzQov.jpg.webp",
        bookName : "Ishqqa yengilmayman",
        bookRating : 5,
        bookPage : 272,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Кириллица",
        bookInfo : `
        Дунёга келишининг ўзи курашдан иборат бўлган одам боласи то умри охирлагунига қадар мудом икки қутб ўртасида муаллақ яшайди. Қайси томонни танлашига қараб у яхши, ёмон, ноинсоф, виждонли, манфаатпараст, олижаноб шу каби сифатлар билан танилади.`,
        
        bookInfoTwo : `
  
        Қўлингиздаги асар ҳам инсон қийматини белгилайдиган танлов ҳақида. Бош қаҳрамон - Юнус худосизликдан то Аллоҳни танишгача бўлган йўлга чиқади. Сафар давомида жуда кўп қадриятлари, ишонган ва таянган ҳақиқатларини қайта кўриб чиқади, ўзини таниш изтироби ва лаззатидан баҳраманд бўлади. Онаси ва суйган қизи Асуман унинг ҳаётидаги асосий аёл инсонлардир. Бири Юнусни енгил, аммо худосиз яшашга ундаса, иккинчиси мураккаб, аммо Яратганни таниш ва иймон келтириш бахти билан шарафланган ҳаётга чорлайди.
        `,
        bookPrice : "49 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "145",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/07042ac7d03d3b9911a00da43ce0079a2021100615291775507jRqVXHfC86.jpg.webp",
        bookName : "Mingboshining qizi",
        bookRating : 5,
        bookPage : 224,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Кириллица",
        bookInfo : `
        Мазкур романдаги тасвирланган ҳаёт- миллионлаб одамларнинг кўзимиз ўнгида кечирган ҳаётларидир. Афсуски, керакли ишларни қила олмадик. Айрим халқлар ўз итларининг муаммоларини ҳам дунёга кўтариб чиқишди. Бизлар эса биродарларимизнинг дарду ҳасратларини дунёга эълон қилиш нима эканлигини билишга ҳам қодир бўлолмадик.`,
        
        bookInfoTwo : `
  
        Ёки воқеаларнинг зиммамизга юклайдиган масъулият кучини "оҳу воҳ"лар билан ўтказиб юбордик. "Мингбошининг қизи" асари ҳақиқий ҳаётдан огоҳлантиришдир. 1996-йили Қоҳирада ёзилган. 10 йилдан сўнг қайта кўриб чиқилган ҳамда мавжуд хатолар тузатилган. Шу даражада ҳаққонийки, ким аниқ қарашни билса, бу ҳаёт узра ҳамон туманларнинг борлигини кўра олади. "Ушбу роман шу қадар ҳақиқатки, агар тарих тўғри ёзилганида эди, унинг дунёга қараш учун юзи бўлмас эди"
        `,
        bookPrice : "45 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },

  {
    id : "146",
    name : "Mixail",
    lastName : "Bulgakov",
    born : 1891,  
    bornDate : 15,
    bornMonth : "May",
    died : 1940,
    diedDate : 10,
    diedMonth : "March ",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQHKuqvWAqmst9Bkd0ZOaBu8Dz8H_y3AK2UyOgCc6PoOKsPuSKb6jv_g0NN_ouHdSrV",
    desc : "Mikhail Afanasyevich Bulgakov was a Soviet writer, medical doctor, and playwright active in the first half of the 20th century. He is best known for his novel The Master and Margarita, published posthumously, which has been called one of the masterpieces of the 20th century.",
    jobs : "He is also known for his novel The White Guard; his plays Ivan Vasilievich, Flight (also called The Run), and The Days of the Turbins; and other works of the 1920s and 1930s. He wrote mostly about the horrors of the Russian Civil War and about the fate of Russian intellectuals and officers of the Tsarist Army caught up in revolution and Civil War.",
    location : "Kyiv, Ukraine",
    bookObj : [
      {
        bookId : "147",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5b112ff4b5bb1ff96595eadf48d07ce52020070415161428933kzrjaVcHgE.jpg.webp",
        bookName : "Ityurak",
        bookRating : 5,
        bookPage : 144,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Aksariyat yozuvchilar hayot haqiqatlarini aytishda ramziylikdan foydalanadilar. Bulgakovning mazkur asarini o'qirkanmiz, sho'ro jamiyatining kirdikorlari fantastika tarzida fosh etilganiga guvoh bo'lamiz. Olim Preobrajenskiy itga odam miyasini ko'chirib o'tqazadi va jonivor Sharikov deb nom qo'yilgan odamsifat maxluqqa - ongli, ammo ityurak bir mavjudotga aylanadi.`,
        
        bookInfoTwo : `
  
        O'sha davrda bu obrazni aslida bolsheviklar '' dohiy''- sining timsoli, deb baholashgan. Hozirgi zamonda esa ''ilm-fan yutuqlari''ning-sun'iy urchitish yo'li bilan turli jonivorlar va hattoki inson klonini yaratishga urunishlarning oqibatida yuzaga keladigan halokat - har xil zombi-yu manqurtlar, mutantlar paydo bo'lishi mumkinligi anglashiladi. Asarni dastlabki mutolaada tushunmaslik va Bulgakov maqsadiga yetb bormaslik tabiiy. Kitobni qayta qo'limizga olarkanmiz, undagi ba'zi obrazlarni atrofimzda ko'ramiz. Kim edig-u, kim bo'ldik yoki kim bo'lamiz- hec bo'lmaganda o'zimizga taftish qilish payti keldi..
        `,
        bookPrice : "25 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "148",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bfe53b0ac.jpg.webp",
        bookName : "Usta va Margarita",
        bookRating : 0,
        bookPage : 384,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "O`zbekiston milliy ensiklopediyasi",
        bookInfo : `
        "Ўзбекистон Миллий Энциклопедияси" нашриёти. 380 бет.`,
        
        bookInfoTwo : `
  
        Mixail Afanasevich Bulgakov (1891.3(15). 5, Kiev - 1940.10.3, Moskva) — rus yozuvchisi. Kiev universitetining tibbiyot fakultetini tamomlagan (1916). Ilk to‘plami «Iblisnoma»da (1925) jamlangan hajviyoti o‘sha davr matbuotida katta shov-shuvga sabab bo‘ladi. «Oq gvardiya» (1925— 27) tugallanmagan romani mavzui asosida «Turbinlar kuni» pesasini yozadi (1926 yilda sahnalashtirilgan). Bu asarlarida «Qochish» (1926-28; 1957 yilda sahnalashtirilgan) pesasidagi kabi eski rus ziyolilari kayfiyatidagi keskin o‘zgarish, «oqlar» harakati g‘oyasi, muhojirlik yo‘lining samarasizligi aks etgan.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "149",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/89d4402dc03d3b7318bbac10203034ab2022040121100654971aEm38HyUEV.jpg.webp",
        bookName : "Yosh vrach kundaligi",
        bookRating : 5,
        bookPage : 128,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Shifokorda bilim va tajriba uyg‘un bo‘lsagina muvaffaqiyatga erisha oladi. Mixail Bulgakovning «Yosh vrach kundaligi» asarini mutolaa qilar ekansiz, shifokorda ana shu ikki omil bilan birga qatʼiyat, jasorat va o‘z vaqtida to‘g‘ri qaror qabul qila olish ko‘nikmasining shakllanishi birlamchi ahamiyat kasb etishiga amin bo‘lasiz.`,
        
        bookInfoTwo : `
  
        Asarda XX asr boshida rus jamiyatidagi oddiy odamlar qiyofasi butun bo‘y-basti bilan namoyon bo‘ladi: sodda, ishonuvchan, samimiy. Shuningdek, kamchiliklar ham ro‘y-rost qalamga olingan. Ko‘prik ostida ko‘zi yorigan ayolni shifokor: «Farzandingni dunyoga keltirish uchun shu yerdan boshqa joy topa olmadingmi?» deb koyiganida, ayol: «Dard tutib turganida qaynotam ot-arava bermadi, vrachlik punkti unchalik uzoq emas, piyoda yetib ol», deb aytdi, deya javob beradi. Bu turmush tarzining yigirmanchi asrga xos ko‘rinishlaridan biri edi. Muxtasar aytganda, fan-texnika va axborot texnologiyalari taraqqiyoti virtual va ayni damda soxtakor munosabatlarni avj oldirgan bugungi kunda samimiy munosabatlarga qurilgan ushbu asarni o‘qish kishiga o‘zgacha maroq va kayfiyat beradi!
        `,
        bookPrice : "20 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "150",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bf1b31655.jpg.webp",
        bookName : "Usta va Margarita",
        bookRating : 5,
        bookPage : 376,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        «Уста ва Маргарита» романи ғаройиб биносининг бунёд этилишида Булгаков истеъдодининг уч тури баб-баравар ёинки деярли баб-баравар хизмат кўрсатди`,
        
        bookInfoTwo : `
  
        Уларнинг ҳар жиҳатдан чатишиб, ягона дарё оқимига қўшилуви асарнинг энг яхши саҳифаларини ташкил қилганким, бу айни вақтнинг ўзида нафақат романнинг, умуман олганда Булгаков бадиий сўз санъатининг улкан ютуғидир.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },

  {
    id : "151",
    name : "Artur",
    lastName : "Doyl",
    born : 1859,  
    bornDate : 22,
    bornMonth : "May",
    died : 1930,
    diedDate : 7,
    diedMonth : "July",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Conan_doyle.jpg/1200px-Conan_doyle.jpg",
    desc : "Sir Arthur Ignatius Conan Doyle KStJ DL was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are milestones in the field of crime fiction.",
    jobs : "Doyle was a prolific writer; other than Holmes stories, his works include fantasy and science fiction stories about Professor Challenger and humorous stories about the Napoleonic soldier Brigadier Gerard, as well as plays, romances, poetry, non-fiction, and historical novels.",
    location : "Edinburgh, United Kingdom",
    bookObj : [
      {
        bookId : "152",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/86a1793f65aeef4aeef4b479fc9b2bca2022050416353211659Le8cSbRMpT.jpg.webp",
        bookName : "Baskervillar iti",
        bookRating : 5,
        bookPage : 528,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Китоб",
        bookInfo : `
        Бош қаҳрамони изкувар Шерлок Холмс бўлган детектив жанрдаги «Тўртлар белгиси» (1890), «Баскервиллар ити» (1901 – 1902). «Даҳшатлар водийси» (1914 – 1915) саргузашт қиссалари ва «Шерлок Холмс саргузаштлари» (1891 – 1892), «Шерзо Холмс ҳақида хотиралар» (1892-1893) ҳикоялар тўпламлари деярли бутун жаҳон тилларига таржима қилинган.`,
        
        bookInfoTwo : `
  
        Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Тўпламда ёзувчининг машҳур изқувар Шерлок Холмсга бағишланган энг сара икки қиссаси ва Конан Дойлнинг ўзи энг яхши асарларидан 3-рақамлиси деб атаган «Раққос одамчалар» асари, шунингдек, бошқа сара ҳикоялари танлаб олинган.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "153",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15be25d83c2.jpg.webp",
        bookName : "Boskom vodiysining siri",
        bookRating : 0,
        bookPage : 160,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Aртур Конан Дойлнинг «Шерлок Холмс ҳақида ҳикоялар»и нафақат Европада, балки бутун дунёга машҳур. Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Бу биринчи тўпламда ёзувчининг детектив, илмий фантастика, саргузашт воқеалар ҳаётий далилларга бой ҳикоя ва қиссалари жой олган. «Боском водийсининг сири» ҳикоясидаги сирли воқеалар одамларни даҳшатга солади.`,
        
        bookInfoTwo : `
  
        Фақат бугина эмас, машҳур изқуварлар Шерлок Холмс ва доктор Уотсоннинг қатор жиноятларни фош қилишдаги бир-биридан қизиқарли саргузаштларини мазкур китобдан билиб олишингиз мумкин. Детектив воқеаларга бой мазкур тўплам Сиз азиз китобхонлар илтимосига кўра кичик ҳажмда 3 том кўринишда тўлиқ вариантда чоп этилмоқда. Қўлингиздаги мазкур китоб биз туҳфа этмоқчи бўлган тўпламнинг илк томи, яъни сиз кутган ҳикояларнинг дебочасидир. Ўйлаймизки, мазкур тўплам сизга манзур бўлади
        `,
        bookPrice : "25 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "154",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c262944fb.jpg.webp",
        bookName : "Internatda sodir bo‘lgan voqea",
        bookRating : 0,
        bookPage : 160,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Давр-Пресс",
        bookInfo : `
        Артур Дойлнинг "Шерлок Холмс ҳақида ҳикоялар"и нафақат Европада, балки бутун дунёда машҳур. Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Бу иккинчи тўпламда ёзувчининг детектив, илмий фантастика, саргузашт воқеалар, ҳаётий далилларга бой ҳикоя ва қиссалари жой олган. Бу тўпламдан ўрин олган "Интернатда содир бўлган воқеа" ҳикоясидаги қизиқ ва ажабтовур воқеалар кишиларни интернетнинг сирларидан воқиф қилгандек гўё.`,
        
        bookInfoTwo : `
  
        Фақат бугина эмас, машҳур изқуварлар Шерлок Холмс ва доктор Уотсоннинг қатор жиноятларни фош қилишдаги бир-биридан қизиқарли ҳаётий саргузаштларини мазкур китобдан билиб олишингиз мумкин. Детектив воқеаларга бой мазкур тўплам Сиз азиз китобхонлар илтимосига кўра, кичик ҳажмдаги 3 та китоб шаклида чоп этилмоқда. Қўлингиздаги мазкур китоб биз туҳфа этиб келаётган тўпламнинг иккинчиси, яъни сиз интиқ кутган ҳикояларнинг мантиқий давомидир.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "155",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15be25a3d9a.jpg.webp",
        bookName : "Sherlok Xolms o‘lim to‘shagida",
        bookRating : 5,
        bookPage : 176,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Давр-Пресс",
        bookInfo : `
        Артур Конан Дойлнинг "Шерлок Холмс ҳақидаги ҳикоялари"и нафақат Европада, балки бутун дунёга машҳур. Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Бу учинчи тўпламда ёзувчининг детектив, илмий фантастика, саргузашт воқеалар ҳаётий далилларга бой ҳикоя ва қиссалари жой олган.`,
        
        bookInfoTwo : `
  
        "Шерлок Холмс ўлим тўшагида" ҳикоясидаги сирли воқеалар одамларни даҳшатга солади. Фақат бугина эмас, машҳур изқувар Шерлок Холмс ва доктор Уотсоннинг қатор жиноятларни фош қилишдаги бир-биридан қизиқарли саргузаштларини мазкур китобдан билиб олишингиз мумкин. Детектив воқеаларга бой мазкур тўплам Сиз азиз китобхонлар илтимосига кўра кичик ҳажмда 3 том кўринишда тўлиқ вариантда чоп этилмоқда. Қўлингиздаги мазкур китоб биз туҳфа этмоқчи бўлган тўпламнинг сўнгги томи, яъни сиз кутган ҳикояларнинг охиридир. Ўйлаймизки, тўплам сизга манзур бўлади. 
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },

  {
    id : "156",
    name : "Ahmad",
    lastName : "Qozonchi",
    born :  1936,  
    bornDate : 5,
    bornMonth : "Aug",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://ziyouz.uz/wp-content/uploads/2019/02/ahmadt-lutfi.jpg",
    desc : "Аҳмад Лутфий Қозончи (Prof. Dr. Ahmet Lütfi Kazancı) 1936 йили Туркиянинг Чурум туманида туғилган. Бошланғич мактабни ва имом-хатиб лицейини шу туманда битирган. 1964 йили Истанбул Олий Ислом институтини муваффақиятли тамомлаб, Чурум, Сиирт, Испарта шаҳар ва туманларида дин хизматларида ишлаган. 1977 йили Бурса Олий Ислом институтига араб тили ва адабиёти бўйича асистент бўлиб ишга кирган. Ҳозир Бурсадаги Улудоғ университетининг Илоҳиёт факултетида Ислом тарихи бўлимида хизмат қилаётир. Профессор.",
    jobs : "Дин тарихига, диний масалаларга, ҳазрати Пайғамбар (с.а.в.) ва саҳобаларининг ҳаётларига бағшланган йигирмадан ортиқ номдаги (30 жилдга яқин) китобларнинг муаллифидир. Булардан ташқари яна тўртта роман ҳам ёзган.",
    location : "Istanbul, Turkey",
    bookObj : [
      {
        bookId : "157",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/044ffea3713f482873e2d5fe094620662020051316451661444gtAsiIJXus.jpg.webp",
        bookName : "Saodat asri qissalari",
        bookRating : 5,
        bookPage : 376,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Saodat yoʼlining eng ulugʼ va eng soʼnggi rahbari, Olloh taoloning eng sevgili quli va elchisi hazrati Muxammad Mustafo sollallohu alayhi vasallam (s.a.v.) janoblariiing goʼzal, barkamol, oʼrnakli hayotlarini butun borligʼicha aynan tasvirlash, ashobining unga nisbatan muhabbatini, vafodorlik tuygʼularini mukammal koʼrsatish, dushmanlarining kin va hasadga toʼla xatti-harakatlarini toʼlasicha ifodalab berish, fikrimizcha, hech bir insonning qoʼlidan kelmaydi.`,
        
        bookInfoTwo : `
  
        Masalan, Аbu Bakr hazratlarining Janobi Rasulullohga (s.a.v.) boʼlgan mehr-muhabbati, Аbu Jahldagi kin va hasad ummon kabi cheksiz-chegarasizdir. Hozirga qadar aytilgan gaplar ham, aytilajak gaplar xam shu ummondan bir necha qatradir, xolos.
        Yuz yillarcha davom etgan tussiz, masʼuliyatsiz hayot, bu hayot ichidagi yaxshi-yomon, ibrat olish mumkin boʼlgan eʼtiqod, axloq, odat va anʼanalar... undan keyin ilohiy amr xilpiratgan Tavhid sanjogʼi va haq bilan botil orasida yuzaga kelgan buyuk kurash...
        Qoʼlingizdagi kitob Sarvari anbiyo janoblariniig (s.a.v.) tugʼilishdan to oʼlimlariga qadar kechgan hayotlarini aks ettiradi. Undan keyingi — nubuvvat va risolat vazifasini olgandan to Parvardigoriga qovushgunlariga qadar oʼtgan vaqt «Saodat davri» deyiladi.
        `,
        bookPrice : "249 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "158",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/a226e450e214f350856e2980b6e55ac920220224212707842711PD2UOc7G6.jpg.webp",
        bookName : "Hazrati Abu Bakr",
        bookRating : 4.3,
        bookPage : 304,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ushbu kitob orqali siz Nabiy sollallohu alayhi va sallamning suyukli do‘stlari, ulug‘ sahobalardan biri Abu Bakr Siddiq roziyallohu anhuning ibratli hayotlari bilan yaqindan tanishasiz.`,
        
        bookInfoTwo : `
  
        U zotning Islomni yoyishda Rasululloh alayhissalomga Allohning izni ila ko‘mak berishlari, o‘z davrida sahobalar va keyingilarga o‘rnak bo‘lishlari tahsinga sazovordir. To‘g‘riso‘z va halol bo‘lganliklari uchun “Siddiq” cufatiga munosib ko‘rilgan Abu Bakr roziyallohu anhuning vafotlariga qadar kechgan muhim voqea-hodisalar ushbu kitobning mazmun-mohiyatini tashkil etadi.
        `,
        bookPrice : "89 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "159",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/a87ff679a2f3e71d9181a67b7542122c2021051111123884567MSasAjM5Je.jpg.webp",
        bookName : "So‘nggi to‘fon",
        bookRating : 5,
        bookPage : 208,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Ахмад Лутфи Козончи аввалги асарларида бўлгани син гари «Сўнгти туфон» романида хам мактаб ўқувчиси Хасан ва унинг муштипар онасининг бошидан кечирганлари оркали Аллох хар бир бандасига хамиша мехрибон эканлигини таъкид лайди. Жабрдийда онанинг, бегунох боланинг илтижоси изсиз кетмаслиги Лутфуллох амаки инг улар кўрсатиши оркали гавдалантиради.`,
        
        bookInfoTwo : `
  
        беминнат мурувват«Сунгги туфон рамзий-мажозий маънони англатади. Роман да Турсунга ўхшаган ёвуз, мехрсиз кимсалар ҳар бир хонадон учун, жамият учун бамисоли гуфон дейилади.Инсонга чукур эхтиром билан битилган «Сунгги туфон» романини ўқиган хар бир кишининг калбини инсоний туйгу дар, уйлар камраб олади.
        `,
        bookPrice : "19 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "160",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/39dcaf7a053dc372fbc391d4e6b5d69320211207223220250207sboQ07Xjr.jpg.webp",
        bookName : "O'gay ona",
        bookRating : 5,
        bookPage : 176,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Nega endi o'n sakkizga kirgan, husni odobi beqiyos go'zal bo'lgan qiz ko'plab sovchilar orasida xotini o'lgan ikki bolali erkakni tanlaydi va unga turmushga chiqdi?`,
        
        bookInfoTwo : `
  
        Ahmad Lutfiy Qozonchining "O'gay ona " asarida mana shu haqida hikoya qilinadi. Butun oilsi, qarindosh-urug'i qizni bu qaroridan qaytarishga urinishadi. Nega aynan ikki bolali erkak. Balki yigitning katta boyligi bordir, balki qiz uni ko'rib yoqtirib qolgandir. Yo'q asl sabab boshqa...
        `,
        bookPrice : "19 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },

  {
    id : "161",
    name : "Joanna",
    lastName : "Rouling",
    born : 1965,  
    bornDate : 31,
    bornMonth : "July",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80",
    desc : "Joanne Rowling CH OBE HonFRSE FRCPE FRSL, also known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote a seven-volume children's fantasy series, Harry Potter, published from 1997 to 2007.",
    jobs : "Born in Yate, Rowling graduated with a degree in French from the University of Exeter in 1987 and began working temp jobs as a bilingual secretary. In 1990, the idea for the characters of Harry Potter came to her while she waited on a delayed train; later that year, her mother died of multiple sclerosis.",
    location : "Yate, United Kingdom",
    bookObj : [
      {
        bookId : "162",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/586f9b4035e5997f77635b13cc04984c2022050413390782248fkpwdXX3zG.jpg.webp",
        bookName : "Garri Potter va afsonaviy tosh",
        bookRating : 5,
        bookPage : 368,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Адабиёт учқунлари",
        bookInfo : `
        Жоанна Кетлин Роулинг: Гарри Поттер ва афсонавий тош`,
        
        bookInfoTwo : `
  
        Ona tilimizda bitilgan bolalar adabiyotini boyitish ishlariga qo'ldan kelgancha hissa qo'shish maqsadida jahon adabiyotining durdonalari sanaladigan ayrim asarlarni о 'zbek tiliga tarjima qilib borishga ahd qildim va ishni Buyuk Britaniyalik bolalar yozuvchisi Joanna Ketlin Rouling qalamiga mansub yetti qismli «Garri Potter» asaridan boshladim. Ushbu asar juda mashhur bo'lib, ko'plab jahon tillariga tarjima qilinganidan xabaringiz bor, albatta. Shunday ekan, yoshlarimizning o'z zamondoshlaridan ortda qolishiga yo'l qo'yib bo'lmasligi haqida о’ylab, Mariya Viktorovna Spivak tomonidan rus tiliga tarjima qilingan «Garri Potter» romanlar turkumini davlat tilimizga, о'zbek tiliga о'girdim.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "163",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bf0e7d0ab.jpg.webp",
        bookName : "Garri Potter va maxfiy xona",
        bookRating : 5,
        bookPage : 376,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Асарни ўқир экансиз машиналар учадиган, дарахтлар уришадиган, ўргимчаклар гапирадиган, хатлар қичқирадиган ушбу ўқув йилида рўй берган кўплаб ташвишли воқеалар гувоҳи бўласиз... "Адад плюс" МЧЖ. 398 бет.`,
        
        bookInfoTwo : `
  
        Harry Potter va maxfiy hujra (boshqa nomi Harry Potter va maxfiy xona; inglizcha: Harry Potter and the Chamber of Secrets) ingliz yozuvchisi J. K. Rowling qalamiga mansub fentezi janrdagi roman boʻlib, Harry Potter romanlar turkumining ikkinchi qismidir. Roman voqealari Harryning „Hogwarts jodugarlik va afsungarlik maktabi“dagi ikkinchi yiliga toʻgʻri keladi hamda shu vaqt mobaynida maktab koridorlari devorlarida „maxfiy hujra“ ochiqligi va „Slytherinning merosxoʻri“ barcha oʻquvchilarni oʻldirishi toʻgʻrisida ogohlantiruvchi xabarlar ketma-ketligini oʻz ichiga oladi.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "164",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c04c99683.jpg.webp",
        bookName : "Garri Potter va azkaban mahbusi",
        bookRating : 5,
        bookPage : 432,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Адабиёт учқунлари",
        bookInfo : `
        Жоанна Кетлин Роулинг: Гарри Поттер ва азкабан маҳбуси`,
        
        bookInfoTwo : `
  
        Sirius Blek ismli hammaga ma'lum jinoyatchi sehrgarlar olamidagi mudhish qamoqxona - Azkabanda o'n ikki yil o'tirdi. O'n uch kishining qotili sifatida ayblangan ushbu mahbusni hamma Lord Voldemortning sadoqatli xizmatkori deb biladi.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "165",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c167e6240.jpg.webp",
        bookName : "Garri Potter va olov kuboki",
        bookRating : 5,
        bookPage : 720,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Kamalak",
        bookInfo : `
        "Гарри Поттер" романлар туркумининг ушбу қисмида бу йил "Хогварс" да Уч сеҳргар беллашуви бўлиб ўтади. Сеҳргарлар оламида ниҳоятда қизиқарли саналадиган ушбу тадбирда Европадаги учта йирик мактаб: "Хогварс", "Белстек" ва "Дурмштранг" ўқувчилари орасидан саралаб олинган чемпионликка даъвогарлар иштирок этади. Бу беллашувнинг оқибатлари ҳақида эса асарни ўқиш давомида билиб оласиз.`,
        
        bookInfoTwo : `
  
        Harry Potter va Alanga kubogi (boshqa nomi Harry Potter va Olov kubogi; inglizcha: Harry Potter and the Goblet of Fire) ingliz yozuvchisi J. K. Rowling qalamiga mansub fentezi janridagi roman boʻlib, Harry Potter romanlari turkumiga mansub toʻrtinchi kitobdir. Roman „Hogwarts jodugarlik va afsungarlik maktabi“da toʻrtinchi yil sifatida tahsil olayotgan yosh sehrgar hisoblanmish Harry Potterning Triwizard turnirida ishtirok etishga majbur boʻlganligi bilan bogʻliq voqealar haqida hikoya qiladi.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]  
  },

  {
    id: "166",
    name: "Muhammad Sodiq",
    lastName: "Muhammad Yusuf",
    born: 1952,
    bornDate: 15,
    bornMonth: "April",
    died: 2015,
    diedDate: 10,
    diedMonth: "March",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "http://sammuslim.uz/uploads/rasm/1014754656.jpg",
    desc: `1952-yil 15-aprelda Andijon viloyati Asaka tumani, Niyozbotir qishlogʻida tugʻilgan.
    1970-yilda Buxorodagi Mir Arab madrasasiga oʻqishga qabul qilindi. Keyinchalik Toshkent islom institutida tahsil olib, 1975-yilda tamomladi.
    1976-yilda Liviyadagi Islom universitetiga qabul qilindi va 1980-yilda tamomladi.
    1980-1986 yillarda Oʻrta Osiyo va Qozogʻiston musulmonlari diniy boshqarmasi xalqaro aloqalar boʻlimi xodimi va Toshkent islom instituti oʻqituvchisi boʻlgan.
    1986-1989 - Toshkent islom instituti rektori.
    1989-1993 - Oʻrta Osiyo va Qozogʻiston musulmonlari diniy boshqarmasi raisi, Oliy Sovet deputati.
    1993-2001 - Liviyadagi Islom universiteti oʻqituvchisi.
    2001-2015 - Oʻzbekiston musulmonlari idorasi ulamolar kengashi aʼzosi.
    2015-yil 10-mart kuni yurak infarktidan vafot etdi
    `,

    jobs: `1993-2001 - Liviyadagi Islom universiteti oʻqituvchisi.
    qori, tarjimon
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "167",
        bookImg: "https://imgur.com/qmxuZi2.png",
        bookName: "Xilol",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 376,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Қуръонни инсоният учун қиёматгача боқий ҳидоят маёғи, барчани ожиз қолдирувчи баёни ва икки дунё саодатига элтувчи дастурул амал қилиб нозил этган Аллоҳ таолога беадад ҳамду санолар бўлсин!`,

        bookInfoTwo: `

      Қуръонни Роббул оламиндан қабул қилиб олган, уни бутун оламларга омонат ила етказган, ҳам ўқишни, ҳам уқишни ўргатган, ҳаётга тамомила татбиқ этиб кўрсатган севимли Пайғамбаримиз, Аллоҳ таолонинг ҳабиби Муҳаммад Аминга энг пок ва энг юксак салавоту дурудлар бўлсин!
      `,
        bookPrice: "6 000 so’m",
        audioTime: "4:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "168",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/Halol-harom_750-500_web-500x750.jpg",
        bookName: "Xalol ochiq oydin Xarom ochiq oydin",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Бандаларига Расулуллоҳ соллаллоҳу алайҳи васалламнинг ҳадисларини Исломнинг иккинчи масдари қилиб берган Аллоҳ таолога битмас-туганмас ҳамду санолар бўлсин!
        Умматларига ҳадис нималигини батафсил тушунтириб, ундаги таълимотлар қандай амалга оширилишини кўрсатиб берган маҳбуб Пайғамбаримиз Муҳаммад Мустафога мукаммал ва батамом салавоту дурудлар бўлсин!`,

        bookInfoTwo: `
        Аммо баъду: «Исломнинг мадори бўлган ҳадислар» деган умумий номдаги силсиламизнинг биринчи қисмида Набий соллаллоҳу алайҳи васалламнинг «Албатта, амаллар ниятларга боғлиқдир» деган ҳадислари хусусида ожизона сўз юритдик. 
        Энди мазкур силсиланинг иккинчи қисмида Расулуллоҳ соллаллоҳу алайҳи васалламнинг «Албатта, ҳалол очиқ-ойдиндир» деган ҳадиси шарифлари ҳақида яна ожизона баҳс қилиш ниятидамиз. Бу ишни Аллоҳ таолонинг Ўзи бизга осон ва равон, файз-баракотли ҳамда унумли ва хайрли қилсин!
      `,
        bookPrice: "15 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "169",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/001_hilol_nashr/001_diniy/baxtiyor-oila-lotin-web-500x750.png",
        bookName: "Baxtiyor oila",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitob Islom dinining oilaviy munosabatlarga oid ahkomlarining keng va batafsil sharhi bo‘lib, musulmon kishi oilaviy hayotga oid bilishi lozim bo‘lgan barcha masalalarni ao‘z ichiga oladi. Kitobda insonga ikki dunyo saodati yo‘lini ko‘rsatib bergan Islom dinining baxtli, saodatli oila qurish, er-xotinning huquqlari, burch va majburiyatlari, ota-onaga, qaynota-qaynonaga munosabat, kelin va kuyov tanlash, aqiyqa, farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.`,

        bookInfoTwo: `
        Ushbu kitob Islom dinining oilaviy munosabatlarga oid ahkomlarining keng va batafsil sharhi bo‘lib, musulmon kishi oilaviy hayotga oid bilishi lozim bo‘lgan barcha masalalarni ao‘z ichiga oladi. Kitobda insonga ikki dunyo saodati yo‘lini ko‘rsatib bergan Islom dinining baxtli, saodatli oila qurish, er-xotinning huquqlari, burch va majburiyatlari, ota-onaga, qaynota-qaynonaga munosabat, kelin va kuyov tanlash, aqiyqa, farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "170",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/Din_nasixat_500-750-500x750.jpg",
        bookName:
          "Дин насиҳатдир. Беҳуда ишларни тарк қилиш киши исломининг ҳуснидандир",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 176,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиламизнинг биринчи ва иккинчи рисолаларида Мужтаҳид уламолар томонидан Исломнинг мадори деб тан олинган Набий соллаллоҳу алайҳи васалламнинг иккита ҳадиси шарифларини имконимиз борича ўрганган эдик. Ушбу рисолада Аллоҳ таолонинг Ўзидан ёрдам сўраган ҳолимизда аввал бошлаган ишимизни баҳоли қудрат давом эттириш ниятидамиз. Бу ожизона ишимизда Ҳақ субҳанаҳу ва таолонинг Ўзи мададкор бўлсин!`,
        bookInfoTwo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиланинг аввалги икки рисоласида «Албатта, амаллар ниятларга боғлиқдир» ва «Ҳалол очиқ-ойдиндир» ҳадислари ба қадри имкон шарҳ қилинди. Мазкур икки ҳадиси шариф ҳам ўзида мусулмон банда ҳаётининг жуда кўп соҳаларини қамраб олгани учун уларда фиқҳ, руҳий тарбия ва бошқа соҳаларда сўз юритишга тўғри келди. Жамият ҳаётидаги турли ҳолатларга оид масалалар юзасидан баҳслар олиб борилди. Ушбу рисоламиздан ўрин оладиган ва сиз азизлар билан бирга ўрганмоқчи бўлиб турган ҳадиси шарифлардаги баҳс юритиладиган мавзулар аҳамият жиҳатидан аввалги икки ҳадиси шарифнинг савиясига яқин бўлса ҳам, қамров жиҳатидан ҳар бир ҳадиснинг мавзуси билан чекланади. Мисол учун, ушбу рисоладаги биринчи ҳадис насиҳатга, яъни холисликка бағишланган. Бошқалари ҳам шунга ўхшаш.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
  
  {
    id: "171",
    name: "Imom Abu Homid Muhammad",
    lastName: "ibn Muhammad al-G‘azzoliy",
    born: 1058,
    bornDate: 2,
    bornMonth: "July",
    died: 1111,
    diedDate: 10,
    diedMonth: "March",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://static10.tgstat.ru/channels/_0/e5/e50befff6f58906ba4812c6dc56833cf.jpg",
    desc: `
    "Gʻazzoliy" taxallusi haqida turli fikr bor. Baʼzi olimlar gʻazzol (ip yigiruvchi) oilasida tugʻilgan, shu sababdan Gʻazzoliy taxallusini olgan desa, boshqalari esa Gʻazola (Tus yaqinidagi qishloq)da tugʻilgan, shuning uchun taxallusi Gʻazoliy deb hisoblaydilar. Nishopur (Sharqiy Eron) va Bagʻdodda taʼlim olgan. "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
    `,

    jobs: `
    Gʻazzoliy oʻz asarlarida islom ilohiyotini falsafiy jihatdan asoslashga harakat qilgan. Gʻazzoliy xudoni aql orqali anglash mumkin emas, uni maxsus ruhiy, jismoniy harakatlar — sigʻinish va ibodatlar orqali anglash mumkin deb hisobladi. Sunniylik aqidalarini tasavvuf ideallari bilan birga qoʻshib talqin qilgan. Gʻ. fikricha, insonning Alloh buyurgan amallardan oʻziga maqbulini tanlab olishi oʻz ixtiyo-ridadir, shu bois mazkur xatti-hara-katlari oldindan belgilab qoʻyili-shiga qaramay ular uchun aynan in-sonning oʻzi masʼuldir. Gʻazzoliyga koʻra, jon xudo singari fazodan tashqari-da, olam xudo tomonidan yaratilgan. Gʻ.ning diniy tizimi tasavvufni anʼanaviy islom bilan birlashtirdi. Gʻazzoliy gʻoyalari islom tafakkuriga va oʻrta asr Yevropa falsafasiga taʼsir koʻrsatdi. Gʻazzoliyni zamondoshlari "Hujjat ul-islom" ("Islom dalili") deb ulugʻlashgan.
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "172",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/Hilol_Nashr_boshqa/ey-farzand-web-500x750.jpg",
        bookName: "Ey farzand",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `

        «Айюҳал валад» жумласи «Эй фарзанд!» деб таржима қилинади. «Нима учун шогирдга «фарзанд», деб мурожаат қилинмоқда?» деган саволга жавоб шуки, шогирд устозга нисбатан фарзанд мақомидадир. Устоз эса шогирдга нисбатан ота мақомидадир. Буни Имом Ғаззолий ўзининг машҳур «Иҳёу улумиддин» асарида шундай тасдиқлайди: «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "13 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "173",
        bookImg:
          "https://assets.asaxiy.uz/product/items/desktop/90dff152c5d140d9b424846b6efc2bdb2020102712203352028z5YW3HgCEn.jpg.webp",
        bookName: "TAVBA KITOBI",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Jamiki maxluqoti ichra insonni mukarram etib yaratgan, insonlar ichida bizni musulmonlar jumlasidan qilgan Alloh taologa hamdlar bo‘lsin!
        Insonni jaholatdan ma’rifatg‘a. zulmdan adolatga, halokatdan iajotga boshlagan hidoyat elchisi Payg‘ambarimiz Muhammad alayhissalomga durud va salovotlar aytamiz.
        "Odam farzandlarining barchasi ko‘p xato qilguvchidir. Xato qilguvchilarning yaxshisi tavba qiluvchilaridir",- deb marhamat qiladi so‘zlaguvchilarining eng rostgo‘yi Rasululloh sallAllohu alayhi vasallam.
        Demak, xato qilish, adashish bandaga xos tabiat. Undan qochib qutilishning iloji yo‘q.
        `,

        bookInfoTwo: `  
        Jamiki maxluqoti ichra insonni mukarram etib yaratgan, insonlar ichida bizni musulmonlar jumlasidan qilgan Alloh taologa hamdlar bo‘lsin!
        Insonni jaholatdan ma’rifatg‘a. zulmdan adolatga, halokatdan iajotga boshlagan hidoyat elchisi Payg‘ambarimiz Muhammad alayhissalomga durud va salovotlar aytamiz.
        "Odam farzandlarining barchasi ko‘p xato qilguvchidir. Xato qilguvchilarning yaxshisi tavba qiluvchilaridir",- deb marhamat qiladi so‘zlaguvchilarining eng rostgo‘yi Rasululloh sallAllohu alayhi vasallam.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "174",
        bookImg:
          "https://kitobxon.com/img_knigi/3102.jpg",
        bookName: "Qalblar kashfiyot",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
         Farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.`,

        bookInfoTwo: `
        Kelin va kuyov tanlash, aqiyqa, farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "175",
        bookImg:
          "https://olcha.uz/image/340x340/products/S9jLh590TqpVNU7RZz0Hqx7RC1JwLg3ZzBdJrxTRHDkbNvnULtjTxC6Jjeyu.jpeg",
        bookName:
          "Abu homid g'azzoliy",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 176,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиламизнинг биринчи ва иккинчи рисолаларида Мужтаҳид уламолар томонидан Исломнинг мадори деб тан олинган Набий соллаллоҳу алайҳи васалламнинг иккита ҳадиси шарифларини имконимиз борича ўрганган эдик. Ушбу рисолада Аллоҳ таолонинг Ўзидан ёрдам сўраган ҳолимизда аввал бошлаган ишимизни баҳоли қудрат давом эттириш ниятидамиз. Бу ожизона ишимизда Ҳақ субҳанаҳу ва таолонинг Ўзи мададкор бўлсин!`,
        bookInfoTwo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиланинг аввалги икки рисоласида «Албатта, амаллар ниятларга боғлиқдир» ва «Ҳалол очиқ-ойдиндир» ҳадислари ба қадри имкон шарҳ қилинди. Мазкур икки ҳадиси шариф ҳам ўзида мусулмон банда ҳаётининг жуда кўп соҳаларини қамраб олгани учун уларда фиқҳ, руҳий тарбия ва бошқа соҳаларда сўз юритишга тўғри келди. Жамият ҳаётидаги турли ҳолатларга оид масалалар юзасидан баҳслар олиб борилди. Ушбу рисоламиздан ўрин оладиган ва сиз азизлар билан бирга ўрганмоқчи бўлиб турган ҳадиси шарифлардаги баҳс юритиладиган мавзулар аҳамият жиҳатидан аввалги икки ҳадиси шарифнинг савиясига яқин бўлса ҳам, қамров жиҳатидан ҳар бир ҳадиснинг мавзуси билан чекланади. Мисол учун, ушбу рисоладаги биринчи ҳадис насиҳатга, яъни холисликка бағишланган. Бошқалари ҳам шунга ўхшаш.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },

  {
    id: "176",
    name: "Mubashshir",
    lastName: "Ahmad",
    born: 1058,
    bornDate: 2,
    bornMonth: "July",
    died: 1111,
    diedDate: 10,
    diedMonth: "March",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://yt3.ggpht.com/s9C_tQwcccN7PmoZ_1Zme1rWHiFqpPfxUDBXEpsZxV153AscOp6dKgeR7-dk-R8Y9TdqT8DVQAs=s900-c-k-c0x00ffffff-no-rj",
    desc: `
    Mubashshir Ahmad 1974-yil Namangan shahrida tug'ilgan. 1991-1996 yillarda Toshkent islom instituti va Misrdagi “Al-Azhar” universitetlarida ta'lim olgan. “O'zbekiston musulmonlari” (hozirgi “Hidoyat”), “Fikrat” jurnallarida va “Islom nuri” gazetasida xizmat qilgan. 1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "177",
        bookImg:
          "https://assets.asaxiy.uz/product/items/desktop/602d1305678a8d5fdb372271e980da6a2021092616434177567LtzPlZuLQW.jpg.webp",
        bookName: "Olim, odam va olam",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
         «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "178",
        bookImg:
          "https://imgur.com/RUdsbVE.png",
        bookName: "Elous sunan",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hanafiy fiqhida oʻzining moʻtabarligi bilan alohida ajralib turadigan kitoblardan biri, hindistonlik mashhur ulamo “Hakimul umma”, yaʼni “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,

        bookInfoTwo: `  
        Mazkur kitob 22 jilddan iborat boʻlib, unda fiqhiy masalalarning barchasi qamrab olingan. Nashriyotimiz mazkur kitobning toʻrt juzini chop etib, siz azizlarning hukmingizga havola qilish arafasida turibdi.
        Mazkur kitoblarning taqdimoti 16-aprel kuni soat 11:00 da “Mezana” ilm markazi Yunusobod filialida  boʻlib oʻtadi. Tadbirda loyiha rahbari ustoz Mubashshir Ahmad va tarjimonlar guruhi rahbari ustoz Abdulhodiy Gʻiyos domlalar ishtirok etishad.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "179",
        bookImg:
          "https://imgur.com/0YhMuhg.png",
        bookName: "Ey komil inson",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "180",
        bookImg:
          "https://imgur.com/K5CkKCi.png",
        bookName:
          "Oylada sevgi subhatlari",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        Bu ezgu niyatingiz amalga oshishi uchun ushbu kitobdan har kuni bor-yo'g'i 15 daqiqa oilangiz davrasida mutolaani yo'lga qo'ysangiz bas.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
  
  {
    id: "181",
    name: "Abdumannon",
    lastName: "Abdulloh",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://i.ytimg.com/vi/CHuEVn9NTTM/maxresdefault.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "182",
        bookImg:
          "https://imgur.com/J6bNZ2H.png",
        bookName: "Tijorat",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
         «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "183",
        bookImg:
          "https://imgur.com/h28NpbI.png",
        bookName: "Nafs tarbiyasi",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hanafiy fiqhida oʻzining moʻtabarligi bilan alohida ajralib turadigan kitoblardan biri, hindistonlik mashhur ulamo “Hakimul umma”, yaʼni “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,

        bookInfoTwo: `  
        Mazkur kitob 22 jilddan iborat boʻlib, unda fiqhiy masalalarning barchasi qamrab olingan. Nashriyotimiz mazkur kitobning toʻrt juzini chop etib, siz azizlarning hukmingizga havola qilish arafasida turibdi.
        Mazkur kitoblarning taqdimoti 16-aprel kuni soat 11:00 da “Mezana” ilm markazi Yunusobod filialida  boʻlib oʻtadi. Tadbirda loyiha rahbari ustoz Mubashshir Ahmad va tarjimonlar guruhi rahbari ustoz Abdulhodiy Gʻiyos domlalar ishtirok etishad.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "184",
        bookImg:
          "https://imgur.com/fJ2h0CC.png",
        bookName: "Rasululloh Sollallohu Alayhi Vasallam suhbatdoshlari",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "185",
        bookImg:
          "https://imgur.com/70zfY1F.png",
        bookName:
          "Rasululloh s.a.v ahli ayollari",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        Bu ezgu niyatingiz amalga oshishi uchun ushbu kitobdan har kuni bor-yo'g'i 15 daqiqa oilangiz davrasida mutolaani yo'lga qo'ysangiz bas.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
  
  {
    id: "186",
    name: "Alixonto'ra",
    lastName: "Sog'uniy",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://ziyouz.uz/wp-content/uploads/2013/10/alixontora-soguniy.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "187",
        bookImg:
          "https://imgur.com/dNEGnp9.png",
        bookName: "Tarixi Muhammadiy",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
         «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "188",
        bookImg:
          "https://imgur.com/rQmYjhZ.png",
        bookName: "Rosululloh sollallohu alayhi vasallam suhbatdoshlari",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        Mazkur kitob 22 jilddan iborat boʻlib, unda fiqhiy masalalarning barchasi qamrab olingan. Nashriyotimiz mazkur kitobning toʻrt juzini chop etib, siz azizlarning hukmingizga havola qilish arafasida turibdi.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "189",
        bookImg:
          "https://imgur.com/ollx5ey.png",
        bookName: "Hikmat muminning yoqotkanidur",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "190",
        bookImg:
          "https://imgur.com/xvWYIYF.png",
        bookName:
          "Rasululloh sollallohu alayhi va sallamning to'rt vorisi",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        Bu ezgu niyatingiz amalga oshishi uchun ushbu kitobdan har kuni bor-yo'g'i 15 daqiqa oilangiz davrasida mutolaani yo'lga qo'ysangiz bas.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
  
  {
    id: "191",
    name: "Sunatulloh",
    lastName: "Abdulbosit",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://i.ytimg.com/vi/RTA1yGwS6RQ/maxresdefault.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "192",
        bookImg:
          "https://imgur.com/zBfBUuu.png",
        bookName: "Maktuboti Rabboniy",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
        «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "193",
        bookImg:
          "https://imgur.com/xY27olM.png",
        bookName: "Avrodi Qur'oniy",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "194",
        bookImg:
          "https://imgur.com/OdG7Tb0.png",
        bookName: "Hanna",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "195",
        bookImg:
          "https://imgur.com/807ej59.png",
        bookName:
          "Gunohi kabiralar",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        qoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
  
  {
    id: "196",
    name: "Shayx Zulfiqor",
    lastName: "Ahmad Naqshbandiy",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://i.ytimg.com/vi/ikzS9usGC04/hqdefault.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "197",
        bookImg:
          "https://imgur.com/jp98CpY.png",
        bookName: "Ilohiy ishq",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
        «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "198",
        bookImg:
          "https://imgur.com/jwL1m9t.png",
        bookName: "Qazo nomozlar oyid masalalar",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "199",
        bookImg:
          "https://imgur.com/7uFxzB4.png",
        bookName: "Hazrati Oisha",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "200",
        bookImg:
          "https://imgur.com/CwFWJtX.png",
        bookName:
          "Seni jannatda kutaman",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        qoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
  
  {
    id: "201",
    name: "Elif",
    lastName: "Shafaq",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Elif_Shafak_photo.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "202",
        bookImg:
          "https://imgur.com/G0k2pDX.png",
        bookName: "Yuz haromdan bir halol yaxshi",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
        «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "203",
        bookImg:
          "https://imgur.com/1QOVmWL.png",
        bookName: "Sharaf",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "204",
        bookImg:
          "https://imgur.com/id1L5Pn.png",
        bookName: "Mo'minlarning onalari",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "205",
        bookImg:
          "https://imgur.com/JzCrn6d.png",
        bookName:
          "Rosululloh sollallohu alayhi vasallam ayollari",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        qoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
 
  {
    id: "206",
    genre: "uzbek",
    img: "https://imgur.com/fWybOkT.jpg",
    name: "O'tkir",
    lastName: "Hoshimov",
    born : 1941,  
    bornDate : 5,
    bornMonth : "Avg",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    lived: "1941-2013",
    books: 34,
    audio: 12,
    desc: `
        O'tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Do'mbiravot mavzeida tug'ildi. O'. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi O'zbekiston Milliy universiteti)ning jurnalistika kulliyotida o'qish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryo'lchi”, “Qizil O'zbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon bo'lib ishladi. So'ng “Toshkent haqiqati” gazetasida adabiy xodim (1963-1966), “Toshkent oqshomi” gazetasida bo'lim mudiri (1966-1982), G'. G'ulom nomidagi Adabiyot va san'at nashriyotida bosh muharrir o'rinbosari (1982-1985) bo'ldi. 1985-1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha O'zbekiston Respublikasi Oliy Majlisining Matbuot va axborot qo'mitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir bo'lib ishladi.
    `,
    jobs: `
        Yozuvchining ilk asari 1962-yilda „Po'lat chavandoz“ nomida ocherklar to'plami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi bo'ldi.
    `,
    location: 'Toshkent, Uzbekistan',
    bookObj: [
        {
            bookId: "207",
            bookImg: 'https://imgur.com/fKlnpaS.png',
            bookName: 'Dunyoning ishlari',
            bookRating : 4.9,
            bookGenre : "uzbek",
            bookPage : 336,
            published : 2005,
            bookSenario : "Memuar, qissa",
            nashriyot : "Sharq nashriyoti",  
            bookInfo: `
                Jonli va hayotiy tasvirlar, o'zbekona yondashuv va xarakter, qahramonlar o'rtasidagi suhbatlar mutolaa tasirini kuchaytiradi. 
            `,
            bookInfoTwo: `
                Asar adibning bolalik davridagi voqealari asosida qurilgan. Sovet davridagi oddiy qishloq oilalaru, odamlar turmush tarzi adibning onasi bilan uyg'unlashtirib tasvirlangan. O'tkir Hoshimov shu kichik asarida ham dunyoning ishlarini mujassamlashtirgan.
                O'zbekiston xalq yozuvchisi Said Ahmad qissani shunday tariflagan : "„Dunyoning ishlari“ asarini qissa emas, doston deb atashni istardim. U qo'shiqday o'qiladi. Uni o'qib turib, o'z onalarimizni o'ylab ketamiz. Shu mushfiq, shu jafokash onalarimiz oldidagi bir umr uzib bo'lmas qarzlarimizning aqalli bittasini uza oldikmi, degan bir andisha, bir savol ko'z oldimizda ko'ndalang turib oladi. Qissa bizni insofga, insonni qadrlashga, hurmat qilishga chaqiradi"
            `,
            bookPrice : "25 000 so'm",
            audioTime : "6:23 soat",
            electron : "pdf, epub"

        },
        {
            bookId: "208",
            bookImg: 'https://imgur.com/YiZJ8ov.png',
            bookName: 'Ikki eshik orasi',
            bookRating : 4.3,
            bookGenre : "uzbek",
            bookPage : 624,
            published : 2012,
            bookSenario : "roman",
            nashriyot : "Sharq nashriyoti",  
            bookInfo: `
                Asarda insonlar taqdiri va inson umrining murakkabligini mahorat bilan tasvirlangan. Adib, birinchi navbatda, tinchlikka rahna solgan urushni tilga oladi. Ayniqsa, urush voqeligining har bir ota-ona qalbini jarohatlagani, ko'ngillariga ozor yetkazgani romanning umuminsoniy pafosini tashkil etadi.
            `,
            bookInfoTwo: `
                Adib qalamga olgan obrazlari oddiy odamlarning fazilatlari — mardligi, matonati, vatanparvarligi va sabr-bardoshini haqida so'zlaydi. Tajribali yozuvchi roman hodisalarini teran o'rgangani uchun har bir epizod o'quvchini qalbiga jiddiy ta'sir qiladi. Asarda tasvirlangan hayot manzaralari, insonlararo munosabatlar shuningdek, yozuvchining o'ziga xos badiiy uslubi juda tabiiy hamda samimiyligi bilan ajralib turadi. Yetti qism, qirq yetti bobdan tarkib topgan roman kompozitsion qurilishi jihatidan ham o'ziga xosligi bilan ajralib turadi.[2] Undagi voqea-hodisalar bayonida qatnashgan to'qqizta personaj hikoyalarini adib bir-biriga ustalik bilan bog'lagan.
            `,
            bookPrice : "29 000 so'm",
            audioTime : "9:23 soat",
            electron : "pdf, epub"

        },
        {
            bookId: "209",
            bookImg: 'https://imgur.com/JXstREO.png',
            bookName: 'Tushda kechgan umrlar',
            bookRating : 4.3,
            bookGenre : "uzbek",
            bookPage : 335,
            published : 1994,
            bookSenario : "roman",
            nashriyot : "Sharq nashriyoti", 
            bookInfo: `
                Yigirmanchi asr o'zbek adabiyotiga katta hissa qo'shgan adiblardan biri O'tkir Hoshimovdir. Uning ''Ikki eshik  orasi '', ''Dunyoning ishlari'' Bahor qaytmaydi kabi asarlari kitobxonlarning qalbidan joy olgan. Xuddi shunday asarlardan biri ''Tushda kechgan umrlar'' romanidir. Asar 1991-1992 yillarda yozilgan. Ilk bor Sharq yulduzi jurnalida e'lon qilingan. 
            `,
            bookInfoTwo: `
                Asar o'ziga xos tuzilishiga ega. Unda Rustamning kundaligidan lavhalar va tergov hujjatlaridan ma'lumotlar  keltirilgan. Voqealar kuz tasviri bilan boshlanadi va oxirida ham shu tasvir keltiriladi: Kuz o'lim tushagida yotgan bemorga o'xshaydi. Oyoq ostida kasalmand hazonlar ingraydi... Shuncha  urinishlari zoye ketganini tushunib olamga ma'yus boqadi. Yer-ko'kni kafandek oppoq tuman chulg'aydi. Oq zulmat orasidan qarg'alarning xosiyatsiz fig'oni eshitiladi.''  Kuzning o'lim to'shagida yotgan bemorga o'xshatilishi, hazonlarning ingrashi, yer-u ko'kni kafandek oppoq tuman qoplashi, qarg'alarning bexosiyat fig'oni asarda qandaydir nohush vaziyatlar bo'lishiga ishora qiladi.  
            `,
            bookPrice : "19 000 so'm",
            audioTime : "9:23 soat",
            electron : "pdf, epub"
        },
        {
            bookId: "210",
            bookImg: 'https://imgur.com/KdQmEHm.png',
            bookName: 'Bahor qaytmaydi',
            bookRating : 4.3,
            bookGenre : "uzbek",
            bookPage : 135,
            published : 1994,
            bookSenario : "qissa",
            nashriyot : "Sharq nashriyoti", 
            bookInfo: `
                Òtkir  Hoshimovning  ,,Bahor  qaytmaydi”qissasidagi  har  bir  qahramon  va  tasvirning  asardagi  òrni beqiyosdir.Yozuvchi  asarning  nomidanoq  kimlar  uchundir  bahor  endi  hech  qachon  qaytmasligini voqealar  timsolida  kòrsatib  beradi.Asar  boshlanmasida  tòģridan-tòģri  asar  qahramonlari  haqida ma'lumot beribgina qolmay,kitobxonni asar voqealariga zimdan tayyorlab boradi.
          `,
            bookInfoTwo: `
                Buni birgina,, Bòston qishloģiga  ogir-vazmin  qadamlar  bilan  kuz  kirib  keldi”gapi  misolida  kòrishimiz  mumkin.Yozuvchi oddiygina  tarzda  kuz  kirib  keldi  deb  aytmasdan,  ,,oģir  vazmin  qadamlar  bilan”birikmasi  orqali qahramonlarning hayotidagi yuz berishi kutilayotgan  voqealarning oddiy emas,ayni damda qiyin va ziddiyatli jarayonlarda yuz berishini va mana shu jarayonda qaysi qahramonlar òz muvozanatini saqlay olishi-yu, qaysilari saqlay olmasligini anglatmoqchi bòladi.   
            `,
            bookPrice : "19 000 so'm",
            audioTime : "4:23 soat",
            electron : "pdf, epub"
        },
      ]
  },

  {
      id: "211",
      genre: "uzbek",
      img: "https://imgur.com/Lk5moun.jpg",
      name: "Said",
      lastName: "Ahmad",
      born : 1920,  
      bornDate : 10,
      bornMonth : "Iyun",
      died : 2007,
      diedDate : 5,
      diedMonth : "Dec",
      books: 34,
      audio: 12,
      desc: `
          1920-yilning 10-iyunida Toshkent shahrining Samarqand darvoza mahallasida tug'ilgan. Uning bolaligi Elbek, Oybek, G'afur G'ulom singari adiblar davrasida o'tdi. Tabiatan qiziquvchan, tinib-tinchimas Said Ahmad adabiyotga kirib kelguncha juda ko'p sohalarda o'zini sinab ko'rdi: agitplakatlar yozdi, artist bo'lishga urinib ko'rdi, doktorlik maktabida o'qidi, qurilish texnikumida tahsil oldi, rassomlik maktabiga qatnadi, mashhur fotochi Rensonga shogird tushdi, gazetalarga xabarlar yozdi. U Nizomiy nomidagi pedinstitutda bir muddat o'qigach, 1941-yilda „Mushtum“ jurnalida ishladi. 1942-1943-yillarda respublika radiosida, 1943-1947-yillarda „Qizil O'zbekiston“ gazetasida, 1948-1950-yillarda „Sharq yulduzi“ jurnalida mehnat qildi. 50-yillar boshida millatchi sifatida bir necha yil qamalib ham chiqdi. Milliy istiqlol yo'lidagi xizmatlari uchun Said Ahmad 1999-yilda O'zbekiston Qahramoni unvoniga sazovor bo'lgan.
      `,
      jobs: `
          Said Ahmad hikoyanavis sifatida tanilgan. Uning „Cho'l burguti“, „Lochin“, „Bo'ston“, „To'yboshi“, „Jimjitlik“, „Turnalar“, „Hayqiriq“, „Alla“, „Muhabbatning tug'ilishi“, „Qorako'z Majnun“ singari o'nlab hikoyalarida sadoqat, mehr, odamgarchilik, ishonch, e'tiqod singari ma'naviy qadriyatlar ta'sirchan aks ettirilgan. Adib hikoyalarida inson ruhiyati tovlanishlarini ko'rsatishga katta e'tibor berganligi uchun ham bitganlari zavq bilan o'qiladi va u prozaning shoiri hisoblanadi. Yozuvchi hajviy hikoyalar yaratish bo'yicha Qahhor an'analarini davom ettirgan ijodkordir. Uning „Sobiq“, „Qoplon“, „O'rik domla“, „Mening do'stim Babbaev“, „Muzey“, „Bo'ri ovi“, „Xandonpista“ kabi ko'plab hajviyalarida inson tabiatidagi qusurlar badiiy tadqiq etiladi. Said Ahmad hajviy so'z jilolarini nozik payqaydi va undan mohirona foydalanadi.
      `,
      location: 'Toshkent, Uzbekistan',
      bookObj: [
          {
              bookId: "212",
              bookImg: 'https://imgur.com/1xHGiUn.jpg',
              bookName: 'Ufq',
              bookRating : 4.3,
              bookGenre : "uzbek",
              bookPage : 680,
              published : 2019,
              bookSenario : "Roman, trilogiya",
              nashriyot : "Sano standart nashriyoti",  
              bookInfo: `
                  Ufq trilogiyasi- O'zbekiston xalq yozuvchisi Said Ahmad (asl ism-sharifi — Saidahmad Husanxo'jayev ) qalamiga mansub 1964-1974-yillar oralig'ida yozilgan uch qismdan iborat roman. Ilk marotaba 1976-yilda G'afur G'ulom nomidagi adabiyot va san'at nashriyoti tomonidan 60000 nusxali qattiq muqovada nashr etilgan. Trilogiya ikkinchi jaxon urushi, urush va urushdan keyingi yillardagi o'zbek millati hayoti va Katta Farg'ona kanali qazilgan davrdagi voqealarini o'z ichiga oladi.
              `,
              bookInfoTwo: `
                  Roman O'zbekiston mustaqilligi yillarida boshqa nashriyotlar tomonidan ham ko'p bora qayta nashr etildi. 2015-yilda Yangi asr avlodi nashriyoti tomonidan 912 betli qattiq muqovada chop etildi.[1] 2019-yilda yozuvchining qizi Nodira Xusanxo'jayeva muharrirligi ostida Sano satandar nashriyoti tomonidan 680 betli qattiq muqovada, lotin yozuvida nashr etildi.
                  Romanda davrga xos qiyinchiliklar, mashaqqatlar ichida urush va mehnat frontiga safarbar qilingan yoshlar: Azizxon va Lutfinisa, Nizomjon va Dildor, Tursunboy va Zebixon kabi tutashgan taqdirlar hayotidagi fojialar tasvirlangan.
              `,
              bookPrice : "55 000 so'm",
              audioTime : "8:12 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "213",
              bookImg: 'https://imgur.com/nZYirJr.png',
              bookName: 'Jimjitlik',
              bookRating : 4.9,
              bookGenre : "uzbek",
              bookPage : 336,
              published : 2016,
              bookSenario : "roman",
              nashriyot : "Sano standart nashriyoti",  
              bookInfo: `
                  "Jimjitlik" — O'zbekiston xalq yozuvchisi Said Ahmad ijodiga mansub bo'lgan roman. Roman yovuzlik bilan ezgulikning abadiy kurashiga bag'ishlangan. Ilk bora 1986-1987-yillarda „Sharq yulduzi“ jurnalida davomli e'lon qilingan. G'afur G'ulom nomidagi Adabiyot va san'at nashriyoti asarni1989-yillarda 150 000 nusxada bosib chiqardi.
              `,
              bookInfoTwo: `
                  Jimjitlik romanida sovet davridagi rahbarlarning chirkin hayoti, ezilgan oddiy xalqning turmush tarzi, uzoq yillar rahbarlar taziyqi ostida Afrikada yashagan, ayoli va farzandidan ayrilib uyiga qaytgan Tolibjon, boylik va mansab uchun har qanday jirkanchlikka tayyor xotinboz rais Mirvali, otasi o'ldirilib, onasi Mirlvali tomonidan tortib olingan Azizbek kabi insonlar taqdiri hikoya qilinadi. Asarda turg'unlik davri illatlari mukammal tarzda ochib berilgan.
                  Romanida sirtdan tinch, sokin ko'ringan sho'ro davrining ichki dramalari, tuzum inqirozi butun keskinligi, shiddati bilan ko'rsatilgan. Asardagi deyarli barcha yetakchi personajlar fojiyaviy qismat egalaridir. Roman o'zining asov, „bebosh“ ifoda tarzi bilan jozibalidir.
              `,
              bookPrice : "30 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "214",
              bookImg: 'https://kitobxon.com/img_knigi/s7433.jpg',
              bookName: "Yo'qotganlarim va topganlarim",
              bookRating : 4.9,
              bookGenre : "uzbek",
              bookPage : 336,
              published : 2016,
              bookSenario : "roman",
              nashriyot : "Sano standart nashriyoti",  
              bookInfo: `
                  "Jimjitlik" — O'zbekiston xalq yozuvchisi Said Ahmad ijodiga mansub bo'lgan roman. Roman yovuzlik bilan ezgulikning abadiy kurashiga bag'ishlangan. Ilk bora 1986-1987-yillarda „Sharq yulduzi“ jurnalida davomli e'lon qilingan. G'afur G'ulom nomidagi Adabiyot va san'at nashriyoti asarni1989-yillarda 150 000 nusxada bosib chiqardi.
              `,
              bookInfoTwo: `
                  Jimjitlik romanida sovet davridagi rahbarlarning chirkin hayoti, ezilgan oddiy xalqning turmush tarzi, uzoq yillar rahbarlar taziyqi ostida Afrikada yashagan, ayoli va farzandidan ayrilib uyiga qaytgan Tolibjon, boylik va mansab uchun har qanday jirkanchlikka tayyor xotinboz rais Mirvali, otasi o'ldirilib, onasi Mirlvali tomonidan tortib olingan Azizbek kabi insonlar taqdiri hikoya qilinadi. Asarda turg'unlik davri illatlari mukammal tarzda ochib berilgan.
                  Romanida sirtdan tinch, sokin ko'ringan sho'ro davrining ichki dramalari, tuzum inqirozi butun keskinligi, shiddati bilan ko'rsatilgan. Asardagi deyarli barcha yetakchi personajlar fojiyaviy qismat egalaridir. Roman o'zining asov, „bebosh“ ifoda tarzi bilan jozibalidir.
              `,
              bookPrice : "30 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "215",
              bookImg: 'https://kitobxon.com/img_knigi/s5182.jpg',
              bookName: "Qorako'z majnun",
              bookRating : 4.9,
              bookGenre : "uzbek",
              bookPage : 34,
              published : 2016,
              bookSenario : "hikoya",
              nashriyot : "Sano standart nashriyoti",  
              bookInfo: `
                  Qur'oni karimdan:
                  «Sizlardan qaysi biringiz o'z dinidan qaytsa va shu kofirligicha o'lsa, bas, ana o'shalarning (qilgan savobli) amallari xabata (bekor) bo'lur, ular do'zax ahlidurlar va u yerda mangu qolurlar».
                  (Baqara surasi, 217-oyat.)
              `,
              bookInfoTwo: `
                  Hadisi sharifdan:
                  «Jannatga kiradigan o'n nafar hayvondan biri bu «Ashobi kahfning vafodor iti dir». (Al-jome al-Kabir.)
              `,
              bookPrice : "15 000 so'm",
              audioTime : "1:45 soat",
              electron : "pdf, epub"

          },
      ]
  },

  {
      id: "216",
      genre: "uzbek",
      img: "https://imgur.com/pmxR6iI.jpg",
      name: "Abdulla",
      lastName: "Qahhor",
      born : 1903,  
      bornDate : 25,
      bornMonth : "May",
      died : 1966,
      diedDate : 17,
      diedMonth : "Sen",
      books: 45,
      audio: 12,
      desc: `
          Abdulla Qahhor (1907.17.9, Qo'qon — 1968.25.5, Moskva) — O'zbekiston xalq yozuvchisi (1967). Temirchi oilasida tug'ilgan. Bolaligi Qo'qon va uning atrofidagi qishloqlarda o'tdi. Oqqo'rg'on qishlog'idagi Mamajon qorining usuli savtiya maktabida tahsil ko'rdi. Oilasi Qo'qonga ko'chib kelgach „Istiqlol“ nomli sho'ro maktabiga o'qishga kiradi, undan internat, „Kommuna“, „Namuna“ maktablarida, so'ng bilim yurtida tahsil ko'radi. Bilim yurtining „Adib“ qo'lyozma jurnalida dastlabki mashqlari bilan qatnashadi. Toshkentdagi „Qizil O'zbekiston“ gazetasi tahririyatining „Ishchi-batrak maktublari“ varaqasiga muharrirlik qildi (1925). U gazetada ishlash jarayonida O'rta Osiyo davlat universitetining ishchilar fakultetini tamomlaydi (1928). Abdulla Qahhor yana Qo'qonga borib, dastlab o'qituvchilarni qayta tayyorlash kursida muallimlik qiladi; ko'p o'tmay „Yangi Farg'ona“ viloyat gazetasiga kotib va „Chig'iriq“ hajviy bo'limiga mudir etib tayinlanadi (1929). Abdulla Qahhorning „Oy kuyganda“ ilk hajviy she'ri „Mushtum“ jurnalida Norin shilpiq taxallusi ostida bosildi (1924). So'ng uning bir qancha hajviy she'r va hikoyalari „Mushtum“, „Yangi yo'l“ jurnallari va „Qizil O'zbekiston“ gazetasida Mavlon kufur, Gulyor, Nish, Erkaboy, E-voy kabi taxalluslar ostida e'lon qilindi. Abdulla Qahhor 30-yillarda yana Toshkentga qaytadi va O'rta Osiyo davlat universitetining pedagogika fakultetiga o'qishga kiradi (1930), ayni paytda „Sovet adabiyoti“ jurnalida mas'ul kotib vazifasini bajaradi. O'zdavnashrda muharrir va tarjimon (1935-1953). 1954-1956-yillarda O'zbekiston yozuvchilari uyushmasi boshqaruvining raisi. Abdulla Qahhor umrining oxirlarida davolanish uchun Moskvaga boradi va o'sha yerda vafot etadi. Toshkentdagi Chig'atoy qabristoniga dafn etiladi.
      `,
      jobs: `
          Abdulla Qahhor ijodi she'riyat bilan boshlangan bo'lsada, uning adabiy merosi negizini nasriy asarlar tashkil etadi. „Boshsiz odam“ (1929) hikoyasi chop etilgan vaqtdan boshlab umrining oxirigacha hikoya, ocherk, publitsistika, qissa va roman janrlarida samarali ijod qildi. Abdulla Qahhorning dastlabki ijodidagi „Qishloq hukm ostida“ qissasi (1932) sho'ro mafkurasi asosida yozilgan. Uning „Boshsiz odam“ hikoyasi bilan boshlangan hikoyanavislik faoliyatida esa tarixiy o'tmish aks ettirilgan. „Ko'shchinor chiroqlari“ (1951) romanida (dastlabki varianti „Qo'shchinor“, 1946) jamoalashtirish davrining voqealari badiiy tasvirlangan.
      `,
      location: "Toshkent, Uzbekistan",
      bookObj: [
          {
              bookId: "217",
              bookImg: 'https://imgur.com/sEFproO.jpg',
              bookName: 'Sarob',
              bookRating : 4.3,
              bookGenre : "uzbek",
              bookPage : 240,
              published : 1995,
              bookSenario : "Roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  „Sarob (roman)“ — o'zbek yozuvchisi Abdulla Qahhor qalamiga mansub roman. Muallif bu qissani 1934-yil yozgan. Roman shu kungacha bir necha marta nashr qilingan. Ushbu kitob 1995-yil Toshkent shahrida „Sharq nashriyot-matbaa konsernining Bosh tahririyati“da chop etilgan.
              `,
              bookInfoTwo: `
                  Kitobni nashrga tayyorlovchi va bosh muharrir Mashrab Boboyev. Tahrir hay'ati: Islom Shog'ulomov - hay'at raisi, Bobur Alimov - hay'at raisi o'rinbosari, Muzaffar A'lamov, Said Ahmad, Ahror Ahmedov, Mashrab Boboyev, Naim Karimov, Tohir Malik, Omon Muxtor, Umarali Normatov, Anvar Obidjon, Shuhrat Rizayev, Nozir Fozilov, Shukur Xolmirzayev, Barnobek Eshpo'latov - hay'at kotibi, Begali Qosimov, O'tkir Xoshimov.
                  Asarni nashrga tayyorlashda quyidagi shaxslar ishtirok etgan: Sh. Ergasheva, G. Zokirova — muharrir, M. Samoylov — rassom, M. A'lamov - badiiy muharrir, E. Lukyanova — texnik muharrir, U. Madaminova, Z. Solihova — musahhih. Kitob adadi — 25 000 nusxa.
              `,
              bookPrice : "35 000 so'm",
              audioTime : "8:12 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "218",
              bookImg: 'https://imgur.com/3yDYazy.jpg',
              bookName: "O'tmishdan ertaklar",
              bookRating : 2.4,
              bookGenre : "uzbek",
              bookPage : 143,
              published : 1976,
              bookSenario : "qissa, hikoya",
              nashriyot : "Yosh Gvardiya nashriyoti",  
              bookInfo: `
                  „O'tmishdan ertaklar“ — o'zbek yozuvchisi Abdulla Qahhor qalamiga mansub qissa va hikoyalar to'plami. Muallif bu qissani 1965-yil yozgan. To'plam shu kungacha bir necha marta nashr qilingan. [1]Ushbu kitob 1976-yil Toshkent shahrida „Yosh gvardiya nashriyoti“da chop etilgan.
              `,
              bookInfoTwo: `
                  To'plamni chop etishda, 1967-yilda chop etilgan Asarlar to'plamining |-||-tomlaridan foydalanilgan. Kitobga: „Ko'k konvert“, „Dahshat“, „Yillar“, „Bemor“, „O'qri“, „Anor“, „Asror bobo“ kabi yozuvchining mashhur hikoyalari hamda „O'tmishdan ertaklar“ nomli qissasi kiritilgan.
                  „O'tmishdan ertaklar“ qissasida yozuvchining bolalik davri, o'tgan asr boshlaridagi bolalarning mashaqqatli hayoti xususida so'z yuritilgan. Shuningdek katta avlodning savodsizligi, davr fojialari haqida ochiq-oydin yozilgan.
                  Asarni nashrga tayyorlashda quyidagi shaxslar ishtirok etgan: M. Mirzayev — muharrir, K. Aliyev — rassom, L. Jixarskaya — texnik muharrir, Sh. Shoumarova — musahhih. Kitob adadi — 60 000 nusxa.
              `,
              bookPrice : "30 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "219",
              bookImg: 'https://imgur.com/XxVLDxB.jpg',
              bookName: "Sinchalak",
              bookRating : 2.4,
              bookGenre : "uzbek",
              bookPage : 143,
              published : 1958,
              bookSenario : "qissa",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  „Sinchalak“ — o'zbek yozuvchisi Abdulla Qahhor qalamiga mansub qissa. Muallif bu qissani 1958-yil yozgan. Qissa shu kungacha bir necha marta nashr qilingan. Qissa o'quvchilar hamda tanqidchilar tomonidan yaxshi kutib olingan. Asarni Konstantin Simonov rus tiliga, Rosen Trinkov bolgar tiliga tarjima qilgan.
              `,
              bookInfoTwo: `
                  Asar Saida ismli „o'zi kichkina, nimjon bo'lsa ham osmonni ko'tragulik quvvati, g'ayrati bor“ qiz haqidadir. Adabiyotshunos Ozod Sharafiddinovning yozishicha, Qahhor „Saida obrazida hozirgi ilg'or o'zbek ayollarining xarakterli, tipik sifatlarini umumlashtiradi“.
              `,
              bookPrice : "30 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "220",
              bookImg: 'https://kitobxon.com/img_knigi/2082.jpg',
              bookName: "Muhabbat",
              bookRating : 2.4,
              bookGenre : "uzbek",
              bookPage : 80,
              published : 1969,
              bookSenario : "qissa",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  „Muhabbat“ — o'zbek yozuvchisi Abdulla Qahhor qalamiga mansub qissa. Muallif bu qissani 1968-yil yozgan. Asar kitob sifatida ilk bor 1969-yil Toshkent shahrida G'afur G'ulom nomidagi adabiyot va san'at nashriyotida chop etilgan.
              `,
              bookInfoTwo: `
                  „Muhabbat“ Qahhor tirikligida yozgan so'nggi asardir. Qissada ikki yoshning o'z muhabbati uchun kurashi haqida so'z yuritiladi.
                  Asarni nashrga tayyorlashda quyidagi shaxslar ishtirok etgan: X. Ergashev - muharrir, N. Xoliqov - rassom, Yu. Pavlov - rasmlar muharriri, A. Boboxonov - texnik muharrir, Sh. Zuhriddinov - musahhih. Kitob adadi - 75 000 nusxa.
              `,
              bookPrice : "30 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },

      ]
  
  },

  {
      id: "221",
      genre: "uzbek",
      img: "https://imgur.com/Lnmh2kj.jpg",
      name: "Oybek",
      lastName: "Musa",
      born : 1905,  
      bornDate : 10,
      bornMonth : "Yan",
      died : 1968,
      diedDate : 1,
      diedMonth : "Iyn",
      books: 34,
      audio: 12,
      desc: `
          Oybek (taxallusi; asl ism-sharifi Musa Toshmuhammad o'g'li; 1905.10.1 — Toshkent — 1968.1.7) — shoir, yozuvchi, adabiyotshunos olim va jamoat arbobi. O'zbekiston xalq yozuvchisi (1965), O'zbekiston Fanlar akademiyasi akademigi (1943). Oybek hunarmand-bo'zchi oilasida tug'ilgan. Dastlab Oqmasjid mahallasidagi eski maktabda (1911-1917), so'ng Munavvarqori Abdurashidxonov tashkil etgan „Namuna“ maktabida (1918-1921) boshlang'ich ma'lumot oladi. Shundan keyin Navoiy nomidagi ta'lim va tarbiya texnikum-internatida tahsil olgach (1921-1925), Toshkent unversitetining ijtimoiy fanlar fakultetida (1925-1927), Leningrad xalq xo'jaligi institutida (1927-1929) o'qiydi va og'ir xastalikka chalingani sababli yana Toshkentga qaytib, Toshkent unversitetida o'qishni tugatadi (1930).
          Kambag'al oiladan chiqqanligi va internatda tarbiyalanganligi tufayli qatag'ondan omon qolgan Oybek 1938-yil oxiridagina O'zbekiston o'quv-pedagogika nashriyotiga tarjimon-muharrir sifatida ishga qabul qilinadi. 1941-1945-yillar urushining boshlanishi bilan u yana nomatlub shaxs sifatida quvg'inga uchraydi. O'zbekiston Fanlar akademiyasining tashkil etilishi bilan akademiyaning gumanitar bo'limiga (1935-1951), Hamid Olimjon vafotidan keyin esa O'zbekiston yozuvchilari uyushmasi hay'atiga rais, „Sharq yulduzi“ jurnaliga bosh muharrir (1945-1959) etib tayinlanadi; Til va adabiyot institutining direktori (1950-1952) hamda „O'zbek tili va adabiyoti“ jurnalining bosh muharriri (1958-1968) vazifasini bajaradi. 50-yillar avvalida yana qatag'on to'lqinining boshlanishi bilan Oybek insult xastaligiga uchraydi va uzoq, davom etgan xastalik oqibatida vafot etadi.
      `,
      jobs: `
          Oybek adabiy faoliyatini shoir sifatida boshlagan. „Cholg'u tovushi“ degan birinchi she'ri 1922-yil „Armug'on“ jurnalida bosilgan. Bu vaqtda u Cho'lpon, shuningdek, „yosh usmonlilar“ she'riyati ta'sirida bo'lib, ular ruhidagi she'rlaridan iborat „Tuyg'ular“ (1926) va „Ko'ngil naylari“ (1929) to'plamlarini e'lon qilgan.
          Bir tomondan, lirik harorat, ikkinchi tomondan, epik ko'lam Oybek she'riyatiga xos xususiyatlardir. U lirik she'riyat bilan bir qatorda dostonnavislik sohasida ham izlanishlar olib borib, „Dilbar — davr qizi“ (1932), „O'ch“ (1933), „Baxtigul va Sog'indiq“ (1934), „Qahramon qiz“ (1936), „Gulnoz“, „Kamonchi“, „Navoiy“ (1937) singari dostonlarni yozdi.
          Oybekning nasriy merosi 5 roman („Qutlug' qon“, „Navoiy“, „Oltin vodiydan shabadalar“, „Quyosh qoraymas“ va „Ulug' yo'l“), 4 qissa („Shonli yo'l“, „Hyp qidirib“, „Bolalik xotiralarim“ va „Bola Alisher“) hamda bir qancha hikoya va ocherklardan iborat.
      `,
      location: "Toshkent, Uzbekistan",
      bookObj: [
          {
              bookId: "222",
              bookImg: 'https://kitobxon.com/img_knigi/1857.jpg',
              bookName: 'Navoiy romani',
              bookRating : 6.3,
              bookGenre : "uzbek",
              bookPage : 528,
              published : 1944,
              bookSenario : "Tarixiy roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  „Navoiy“ romani— 1942-yilda O'zbekiston xalq yozuvchisi Muso Toshmuhammad o'g'li Oybek tomonidan yozilgan tarixiy roman.Oybekning ushbu romanida Navoiyning hayot yo'li, o'sha davrdagi hayot va murakkab siyosiy voqealar aks ettirilgan. Roman turli qarama-qarshiliklar va muhokamalardan so'ng ilk marotaba 1944-yilda nashr etilgan.
              `,
              bookInfoTwo: `
                  „Navoiy“ tarixiy-biografik roman janrining nodir namunasidir. Roman voqealari 18 yoshli yigit — Alisher Navoiyning Samarqanddan Hirotga qaytishi bilan boshlanadi va Navoiy hayotining eng samarali va eng sermazmun davrlarini qamrab oladi. Asar voqealari Navoiyning o'limini aks ettirish bilan yakunlanadi. Asarda Navoiy tarjimai holining asosiy bosqichlari hayot haqiqatiga mos holda yorqin tasvirlangan. Asarda Navoiyning olijanob fazilatlari, ajoyib xislatlari, Vatan, xalq va adabiyot oldidagi buyuk xizmatlari birin-ketin ochilib boradi. Romanda Husayn Boyqaro, Xadicha begim, Mo'min Mirzo, Darveshali, Binoiy, Majididdin singari tarixiy shaxslar obrazi ham berilgan. Ustalik bilan yaratilgan bu obrazlar bosh qahramon Navoiy xarakterini ochishda muhim o'rin tutadi. „Navoiy“ romani o'zbek tarixiy romanchiligi tilining shakllanishida ham muhim rol o'ynaydi. Asar tili o'tmish davrning jonli tilini yaratish namunalaridan biri bo'lib qoldi, unda besh yuz yil avval yashagan tarixiy qahramonlarning tili hozirgi kitobxonlarga tushunarli qilib qayta shakllantiriladi.
              `,
              bookPrice : "30 000 so'm",
              audioTime : "8:12 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "223",
              bookImg: 'https://imgur.com/ITZzM03.jpg',
              bookName: "Qutlug' qon",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 336,
              published : 1940,
              bookSenario : "Roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  «Qutlug' qon» romani syujet va kompozitsiya jihatdan ham tahsinga loyiqdir. Unda asar g'oyasini va obrazlar xarakterini ochishga xizmat qilmaydigan tasvirlar, oshiqcha voqea va epizodlar yo'q. Yozuvchi voqealar tasvirini ortiqcha cho'zmaydi. Voqeadan voqea chiqarish va ularni tabiiy tarzda bir-biri bilan bog'lash orqali asosiy syujet chizig'ini vujudga keltiadi. Shu bilan birga, syujetni xarakter yaratish ishiga mohirona xizmat qildiradi.
              `,
              bookInfoTwo: `
                  1940 - yilda chop etilgan «Qutlug' qon» romani - badiiy jihatdan yetuk asar. Una mamlakat o'tmishidagi hayot haqiqati mohirona ko'rsatilgan. O'zbek xalqining 1917 - yil to'ntarish arafasidagi og'ir hayoti, ozodlik yo'lida olib borgan kurashlari keng va atroflicha tasvirlangan.
                  Oybekda bunday g'oyaviy-tematik asos dastlab asar qahramonlari sifatida xalqning ilg'or vakillarini tanlashda ko'rindi. Qahramonlarning rivojlanishiga, olg'a qarab harakat qilishda tasvirlash ham mana shu g'oyaviy yo'nalishdan kelib chiqadi. Oybekni birinchi galda xalq ichidan chiqqan kishilar harakterida asta-sekin, evolyutsion suratda maydonga chiqib. Ma'lum vaqtdan so'ng shu kishilarni ozodlik uchun kurashuvchilarga aylantirgan o'zgarishlar qiziqtiradi. Oybek xarakterlar o'sishi va shakllanishini o'tkir qarama-qarshiliklar kurashining natijasi sifatida beradi. Demak, «Qutlug' qon»da harakterlar ta'sirida muallifni asosan ikki masala bo'lib qahramonlarning xarakterlarida yuz bergan yangi sifat o'zgarishlari; ikkinchisi - oqibat natijasida qahramonlarning xarakterlaridagi o'zgarishlarni vujudga keltiradigan qarama-qarshi kuchlar kurashidir. Abdurauf Fitrat ta'kidlaganidek, “Adabiyot - fikr, tuyg'ularimizdagi to'lqinlarni so'zlar, gaplar yordami bilan tasvir qilib, boshqalarda ham xuddi shu to'lqinlarni yaratmoqdir.”
              `,
              bookPrice : "28 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "224",
              bookImg: 'https://imgur.com/2f1PRWl.jpg',
              bookName: "Quyosh qoraymas",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 653,
              published : 1977,
              bookSenario : "Roman",
              nashriyot : "Yangi asr avlodi nashriyoti",  
              bookInfo: `
                  "Quyosh qoraymas" — O'zbekiston xalq yozuvchisi, akademik Muso Toshmuhammad o'g'li Oybek ijodiga mansub 1943-1957-yillarda yozilgan roman. Adib „Quyosh qoraymas“ romanida Bektemir ismli askar va uning ikki do'sti misolida SSSRning tayyorgarliksiz urushga kirgani va rahbarlarning qo'pol xatolari tufayli turli xalqlardan bo'lgan millionlab kishilar, shu jumladan, o'zbek jangchilarining „to'p yemi“ bo'lgani haqidagi haqiqatni badiiy mujassamlantirib bergan.
              `,
              bookInfoTwo: `
                  Oybek 1942-yil dekabridan 1943-yilning mart oyiga qadar G'arbiy frontda, Moskva, Voronej, Kursk, Belgorod uchun bo'lgan janglarda o'zbek jangchilari orasida bo'lib, ularning jasorati, qahramonliklari haqida material to'pladi.
                  Adib xotiralarida shunday yozgandi: "Og'ir urush yillarida men „Quyosh qoraymas“ degan yangi roman ustida ish boshladim. Ulug' Vatan urushi frontlaridagi o'zbek jangchilarini ko'rsatishga harakat qildim. Men artistlar brigadasi bilan frontga borgan bo'lsam ham, u yerda brigadadan ajralib qoldim. Chunki faqat sharoitni, kishilarni chuqur o'rganibgina jangchi va komandirlarning qahramonligi haqida asar yozish mumkinligini angladim va frontda uch oy qolib ketdim".
              `,
              bookPrice : "35 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "225",
              bookImg: 'https://imgur.com/gUaUV6c.jpg',
              bookName: "Oltin vodiydan shabadalar",
              bookRating : 4.4,
              bookGenre : "uzbek",
              bookPage : 528,
              published : 1976,
              bookSenario : "Roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  Oltin vodiydan shabadalar —O'zbekiston xalq yozuvchisi Muso Toshmuhammad o'g'li Oybek qalamiga mansub roman. Ilk marotaba Qizil O'zbekiston gazetasining 1949-yil 6-noyabrdagi sonida romandan parchalar e'lon qilingan. To'liq tarzda esa 1959-yilda Oybekning to'rt tomlik Tanlangan asarlari bilan birga nashr etilgan. Roman 1971-yil G'afur G'ulom nomidagi adabiyot va san'at nashriyoti tomonidan 528 betli qattiq muqovada, 1976-yilda Fan nashriyotida 544 betli qattiq muqovada 5000 nusxada nashr etigan. So'nggi marotaba 2019-yil Yangi Asr Avlodi nashriyotida lotin yozuvida chop etildi
              `,
              bookInfoTwo: `
                  Oltin vodiydan shabadalar Oybekning zamonaviy mavzuga bag'ishlangan birinchi yirik asaridir.Yozuvchi o'zining bu asarini yaratishga ikkinchi jahon urushining so'nggi yillarida taraddud ko'ra boshlagan edi. Adibning 1944-1949-yillar orasida yozgan o'zbek paxtakorlarning urushdan keyingi hayotiga bagishlangan qator maqolalari shundan dalolat beradi.
                  Oltin vodiydan shabadalar qisqa vaqt ichida, olti oyda yozilgan.Shunga qaramay roman bir nechta qoralama va oqlama qo'lyozma nusxalariga ega. Romanning qoralama nusxasi 12 va 24 varaqlik maktab daftarlariga hamda standart yozuv qog'oziga arab yozuvida qora qalam va binafsha siyoh bilan yozilgan.
              `,
              bookPrice : "35 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
      ]
  }, 

  {
      id: "226",
      genre: "uzbek",
      img: "https://milliycha.uz/wp-content/uploads/2021/11/ulmas-umarbekov.jpg",
      name: "O'lmas",
      lastName: "Umarbekov",
      born : 1934,  
      bornDate : 25,
      bornMonth : "Yan",
      died : 1994,
      diedDate : 10,
      diedMonth : "Noy",
      books: 34,
      audio: 12,
      desc: `
          O'lmas Umarbekov (1934.25.1 Toshkent — 1994.10.11) — O'zbekiston xalq yozuvchisi (1992). O'zbekistonda xizmat ko'rsatgan san'at arbobi (1984). Urta Osiyo universitetining filol. fakultetini tugatgan (1956). Respublika televideniye va radioeshittirish davlat qo'mitasida muharrir, bosh muharrir (1956 —71), O'zbekiston K.P MKda sektor mudiri (1971—74), "O'zbekfilm" kinostudiyasi direktori (1971—81), O'zbekiston Madaniyat ishlari vazirining birinchi o'rinbosari (1982—86), vaziri (1987—89), O'zbekiston Yozuvchilar uyushmasi raisi (1985—89), O'zbekiston Respublikasi Bosh vazirining o'rinbosari (1989—91).
          Hayotning botiniy qatlamlarini chuqur o'rganish va taxlil etish, inson taqdirida ro'y bergan ziddiyat va holatlarni, belgilarni umumlashtirish, badiiy tafakkur tarozisiga qo'yish, lirizmga moyillik, inson xarakterini uning ruhiy holati, histuyg'ulari orqali ochib berish U.ning ijodiy uslubiga xos xususiyatlardir. Asarlari xorijiy tillarga tarjima qilingan. Hamza nomidagi O'zbekiston Davlat mukofoti laureati (1980).
      `,
      jobs: `
          Ilk kitobi — "Hikoyalar" (1958). "Xatingni kutaman", "Yurak so'zlari" (1960); "Boboyong'oq" (1961), "Yulduzlar", "Menga ishonmaysanmi?" (1962), "Hayot abadiy" (1964), "Charos" (1966), "Ko'prik" (1968), "Bolgar qo'shiklari", "Oltin yaproqlar" (1972), "Qiyomat qarz" kabi hikoyalarida kishilarning ma'naviyaxloqiy go'zalligini tasvirlashga, insonning jamiyat va tabiat oldidagi burchini, mas'uliyatini ko'rsatishga alohida e'tibor bergan. "Bolgar qo'shiqlari" (1972) turkum hikoyalari ham ixchamligi, dramatizmga boyligi, she'riyritmik xususiyatlari bilan ajralib turadi. U.ning "Sevgilim — sevgilim" (1963), "Kimning tashvishi yo'q" (1965), "Urush farzandi" (1972), "Yoz yomg'iri" (1973), "Oq qaldirg'och" (1974) va boshqa qissalari janriy rangbarangligi, qahramonlar ruhiy olamining teranligi, badiiy tasvir usullarining takrorlanmasligi bilan diqqatga sazovor. "Odam bo'lish qiyin" (1970) va "Fotima va Zuhra" (1994) romanlarida yoshlar, kishilarning xulq-atvorida ko'ringan salbiy jihatlarni tasvirlash orkali sovet davri ma'naviyatidagi kamchiliklar haqqoniy ochib berilgan.
      `,
      location: "Toshkent, Uzbekistan",
      bookObj: [
          {
              bookId: "227",
              bookImg: 'https://imgur.com/eQlGyVX.jpg',
              bookName: "Odam bo'lish qiyin",
              bookRating : 3.3,
              bookGenre : "uzbek",
              bookPage : 352,
              published : 1970,
              bookSenario : "Roman",
              nashriyot : "Yosh gvardiya nashriyoti",  
              bookInfo: `
                  "Odam bo'lish qiyin"— O'zbekiston xalq yozuvchisi O'lmas Umarbekov qalamiga mansub roman. Asar adibning ilk romani bo'lib 1969-yilda yozilgan.[1] U yozuvchining ilk katta asari bo'lsada, yaxshi muvaffaqiyat qozondi va ellik yildan beri qayta-qayta nashr etilmoqda. Asar sovet va undan keyingi davrlarda bir qancha tillarga tarjima qilinib nashr etilgan. Ilk bora 1970-yilda „Yosh Gvardiya“ nashriyoti tomonidan nashr etildi.
              `,
              bookInfoTwo: `
                  O'lmas Umarbekovning „Odam bo'lish qiyin“ romanida hayot, hayotning haqiqatga to'la nafasi ufurib turadi. Asar tilining soddaligi, voqealarining jonliligi etiborga loyiq. O'tgan asrning ikkinchi yarmidagi o'zbek nasri rivojida O'lmas Umarbekovning o'ziga xos o'rni bor. Uning „Odam bo'lish qiyin“ romani yoshlar hayoti, ma'naviy-axloqiy muammolar, insonlarning murakkab munosabatlari haqida yaratilgan va bugungi kunda ham ko'p o'qiladigan asarlar sirasiga kiradi.
                  Unda O'zbek ayolini yaqqol namoyon etgan Hojar buvi (Zavod aya yoki „Otinbibi“), kuni faqat qora mehnatda o'tadigan qo'llaridan har doim benzin isi alqab turadigan Obid aka, o'zining jonkuyar mehnati uchun „Qahramon unvoni“ni olgan qishloqning oldi odami Yusuf aka, Maktabda yaxshi xulqi va a'lo baholar bilan o'qib kelayotgan Abdulla va Qishloqning aqlli qizi Gulchehraning hayotidan hikoya qilingan.
              `,
              bookPrice : "25 000 so'm",
              audioTime : "4:12 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "228",
              bookImg: 'https://kitobxon.com/img_knigi/4581.jpg',
              bookName: "Fotima va Zuhra",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 336,
              published : 1994,
              bookSenario : "Roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  O'lmas Umarbekovning "Fotima va Zuhra" nomli asari didektiv yo'nalishda yozilgan bo'lib, ushbu asar mustaqillik yillarida , ya'ni 1994 - yil nashr etilgan. 
                  Asar qahramonlari " Shifokor " jamoa xo'jaligi raisi  Sultonov , mayor aliyev , Fotima va Zuhra, Abdulla  , Hamidulla , Odamboy, Shohida , Sanobar va shu kabilar.
              `,
              bookInfoTwo: `
                  Asarda mustaqillikdan oldin respublikamizda ildiz otayotgan mafiya va uni qo'llab quvvatlayotgan rahbarlar , ularning kirdikorlari, ularga qarshi kurashayotgan qonun posbonlari, bir oilaning butunlay barbod bo'lishi tavsilotlari aks etgan. 
                  Asar didektiv yo'nalishda bo'lgani sababli voqealar juda qiziqarli , kitobxonni zeriktirmaydi, bir biriga zanjirdek bog'langan jinoyat izidan borib , uni fosh qilishgacha bo'lgan jarayonlar , voqea hodisalar o'quvchini asarga qiziqishini yana ham oshiradi.
                  Bosh qahramonlardan biri bo'lgan Zuhra timsolida mard, jasur, qiz bola bo'lishiga qaramay, jinoyatchilarni tutishga katta yordam bergan o'ta matonatli qiz va uning sarguzashtlari aks etgan.
                  Ushbu asar orqali yozuvchi jinoyat javobsiz qolmasligi, bir kun kelib jinoyatchilar jazosini olishi va qonun oldida javob berishini bayon qiladi. 
              `,
              bookPrice : "25 000 so'm",
              audioTime : "7:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "229",
              bookImg: 'https://imgur.com/2hvysd4.jpg',
              bookName: "Sevgim-sevgilim",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 198,
              published : 1963,
              bookSenario : "Qissa",
              nashriyot : "Yangi asr avlodi nashriyoti",  
              bookInfo: `
                  O'tkan asr o'zbek adabiyotiga o'z asarlari bilan yangilik kiritgan O'lmas Umarbekovning bu qissasi 1963-yil yozgandi. 
                  Inson o'qigani, uqigani emas, tanasidan o'tkazgan borini sinovlarda namoyon etadi.
              `,
              bookInfoTwo: `
                  Oypupuk fe'li - Gohida shunday insonlar bo'ladiki, ular uchun osmon to'la oppoq bulut bo'lib ko'rinadi. Osmonga qarasang, qarayversang, oqlikni, soflikni ko'raverib, ko'zing oqlikka o'rganadi. Xuddi kishi qop-qorong'u yerdan quyoshga chiqsa, ko'zi moslashishi kerak bo'lgandek, aynan Oypopukning fe'li, hayoti umuman barcha-barcha auristikasi(ichkiyoti) oppoq bulutlar bilan to'lgan edi, u shuning uchun ham urush, ayriliq va azoblardan qo'rqar edi, chunki ularda oqlik mavjud emas. Aynan O'ktamdagi bir so'zda u qora narsani ko'rdi va, va ko'ziga hech narsa ko'rinmadi, chunki u zotan shunday fe'l sohibi edi. Balki onasi bo'lganda, uning osmoniga kamalak qo'shilardi hamda u hozirgi fe'liga o'xshamasdi. Oypopuk qayerda adashgan yoki kamchil fe'lchalari bor bo'lsa, ko'pi onasi sabab.
              `,
              bookPrice : "23 000 so'm",
              audioTime : "3:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "230",
              bookImg: 'https://kitobxon.com/img_knigi/3557.jpg',
              bookName: "Yoz yomg'iri",
              bookRating : 5.7,
              bookGenre : "uzbek",
              bookPage : 528,
              published : 1993,
              bookSenario : "Qissa",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  O'lmas Umarbekov bir qator ajoyib qissalarida janrning yangi qirralarini kashf etadi. Bunga “Yoz yomg'iri” qissasini misol qilib keltirish mumkin. O'zbek adabiyotida bu vaqtda detektiv janr deyarli shakllanmagan edi. O'lmas Umarbekovning “Yoz yomg'iri” qissasi syujet to'qimasining murakkabligi, favqulodda voqealarning keskinligi, sarguzasht xarakteri bilan e'tiborni o'ziga tortadi. Qissa qizg'in bahslarga sabab bo'ldi.
              `,
              bookInfoTwo: `
                  “Yoz yomg'iri” qissasidagi voqealar tramvay haydovchisi bilan bir yo'lovchining butalar orasida oyog'i ko'rinib yotgan o'likni tasodifan ko'rib qolishidan boshlanadi. Ana shu sirli jinoyat sabablarini ochish, fojia manbalarini o'rganish va uni kitobxon muhokamasi vositasida umumiylashtirish qissadan hissa chiqarishga yetaklaydi. Ham asar janrini, ham unda yozuvchi tomonidan ilgari surilgan ma'naviy-axloqiy muammolar yechimini topishga chorlaydi. Qiziqarli syujet va detallar asosida voqealar rivojini ochib beradi.
              `,
              bookPrice : "25 000 so'm",
              audioTime : "5:45 soat",
              electron : "pdf, epub"

          },
      ]
  }, 

  {
      id: "231",
      genre: "uzbek",
      img: "https://imgur.com/tJ0zO8U.jpg",
      name: "Shuhrat",
      lastName: "Alimov",
      born : 1918,  
      bornDate : 19,
      bornMonth : "Apr",
      died : 1990,
      diedDate : 20,
      diedMonth : "Iyn",
      books: 34,
      audio: 12,
      desc: `
          Shuhrat (taxallusi; asl nomi Alimov G'ulom Aminjonovich) (1918.19.4 — Toshkent — 1993.20.6) — O'zbekiston xalq yozuvchisi (1986). O'zbekistonda xizmat ko'rsatgan madaniyat xodimi (1978). Transport texnikumi (1932-1933), O'rta Osiyo transport injenerlari tayyorlash instituti (1934-1936) va Nizomiy nomidagi Toshkent pedagogika instituti (1936-1940)da o'qigan.)
          Ikkinchi jahon urushi qatnashchisi (1941-1943). O'zbekiston yozuvchilari uyushmasining maslahat byurosida kotib (1934-1936), adabiy maslahatchi (1955-1958; 1960-1970), Adabiyot jamg'armasida direktor (1958), yoshlar gazetasida bo'lim mudiri (1945-1948), „Sharq yulduzi“ jurnalida bo'lim mudiri (1948-1950), mas'ul kotib (196-1970). Shuhrat 1951-yilda qatag'on qilinib, qamoq lagerlarida bo'lgan. 1955-yilda oqlangan.
      `,
      jobs: `
          Dastlabki asari — „Mehrol“ (ertakdoston, 1940). Shuhrat urushdan qaytgach, badiiy ijod bilan samarali shug'ullangan va ko'plab she'riy („Bizning ko'cha“, 1947; „Hayot nafasi“, 1948; „Qardoshlar“, 1950; „Balladalar“, 1958; „Sening sevging“, 1961; „Ishqingda yonib“, 1964; „Buyuk muhabbat“, 1966; „Lirika“, 1973; „Shaydo ko'ngil“, 1976; „Hali tun uzoq“, 1984 va boshqalar) va nasriy („Oila“, 1946; „Rustam“, 1947; „Balog'at“, 1958; „Bir kecha fojiasi“, 1976 va boshqalar) to'plamlarini e'lon qilgan. 60-70-yillarda yana doston janriga qaytib, „Mardlik afsonasi“ (1959), „Guldursin“ (1960), „So'lmas chechaklar“, „Jamila“ (1962), „Quvg'indi“ (1963) singari dostonlar yozgan.
      `,
      location: "Toshkent, Uzbekistan",
      bookObj: [
          {
              bookId: "232",
              bookImg: 'https://imgur.com/Uf9jf4d.jpg',
              bookName: "Shinnelli yillar",
              bookRating : 3.3,
              bookGenre : "uzbek",
              bookPage : 592,
              published : 1975,
              bookSenario : "Roman",
              nashriyot : "G'afur G'ulom nashriyoti",  
              bookInfo: `
                  "Shinelli yillar" — o'zbek adabiyotining yirik namoyondasi Shuhrat qalamiga mansub roman.Bu adibning ilk romani bo'lib 1947-1957-yillar oralig'ida yozilgan. Adib asarida ikkinchi jahon urushi frontlarida orttirgan katta hayotiy tajribasi asosida xalqimizning urush davridagi jangovar hayoti, qahramonligi, vatanparvarligi, qiyinchiliklarga bardoshi, kelajakka umidi haqida hikoya qiladi.
              `,
              bookInfoTwo: `
                  Asar 1975-yilda G'afur G'ulom nomidagi nashriyot-matbaa ijodiy uyi tomonidan 592 betli qattiq muqovada 60 000 nusxada nashr etilgan. So'nggi marta 2019-yilda Adabiyot uchqunlari nashriyotida 720 betli yumshoq muqovada nashr etildi
                  „Shinelli yillar“ romanida bosh qahramon o'zbek yigiti Elmurodning hayoti misolida urushning boshidan oxirigacha bo'lgan davrdagi xarakterli voqealar tasvirlangan. Roman voqeasi O'zbekistonda boshlanib, Volga bo'ylarida, Kavkazda. Ukrainada va chet ellarda davom etadi. Voqea fashistlar Germaniyasi tor-mor qilingach, Elmurodning o'z uyiga, tinch hayotga qaytishi bilan tugaydi. Asarda o'zbek jangchisining insoniyat oldidagi tarixiy xizmatlari ko'rsatilgan.
              `,
              bookPrice : "35 000 so'm",
              audioTime : "6:12 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "233",
              bookImg: 'https://imgur.com/d7NQv3O.jpg',
              bookName: "Oltin zanglamas",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 400,
              published : 1995,
              bookSenario : "Roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  Oltin zanglamas— O'zbekiston xalq yozuvchisi Shuhrat tomonidan 1963-1965-yillarda yozilgan roman. Ilk marotaba 1967-yilda nashr etilgan. Oltin Zanglamas romanida urushdan oldingi va keyingi davrda mudhish qatag'onlarga duchor etilgan halol, imon-e'tiqodli kishilarning fojiali qismati badiiy tasvirlangan.
              `,
              bookInfoTwo: `
                  Roman sovet va mustaqillik davrlarida ko'p marotaba nashr etilgan. 1995-yilda Sharq nashriyot-matbaa aksiyadorlik kompaniyasi bosh tahririyati romanni 400 betli qattiq muqovada 25 000 nusxada nashr etdi. 2018-yilda esa Yangi Asr Avlodi nashriyotida 480 betli qattiq muqovada krill alifbosida chop etildi. Roman so'nggi marta 2021-yilda G'afur G'ulom nomidagi adabiyot va sanat nashriyotida 520 betli qattiq muqovada lotin yozuvida nashr etildi.
                  Asarning bosh qahramoni Sodiq ismli halol, vijdonli to'g'riso'z o'qituvchi. U maktab direktori sifatida juda faol va atrofidagilarga nisbatan talabchan, qattiqqo'l. Uning ana shu xususiyatlari maktabdosh ayrim dangasa, xulqi buzuq, saviyasi past xodimlarga yoqmaydi. Atrofda hech sababsiz „qama-qama“lar avj olgan vaziyat bundaylarga juda qo'l keladi va ular sofdil Sodiqni ham „chaquv“ bilan qamatishga muvaffaq bo'lishadi.
              `,
              bookPrice : "35 000 so'm",
              audioTime : "9:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "234",
              bookImg: 'https://imgur.com/OkqLE2E.jpg',
              bookName: "Jannat qidirganlar",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 198,
              published : 1963,
              bookSenario : "Qissa",
              nashriyot : "Yangi asr avlodi nashriyoti",  
              bookInfo: `
                  O'tkan asr o'zbek adabiyotiga o'z asarlari bilan yangilik kiritgan O'lmas Umarbekovning bu qissasi 1963-yil yozgandi. 
                  Inson o'qigani, uqigani emas, tanasidan o'tkazgan borini sinovlarda namoyon etadi.
              `,
              bookInfoTwo: `
                  Oypupuk fe'li - Gohida shunday insonlar bo'ladiki, ular uchun osmon to'la oppoq bulut bo'lib ko'rinadi. Osmonga qarasang, qarayversang, oqlikni, soflikni ko'raverib, ko'zing oqlikka o'rganadi. Xuddi kishi qop-qorong'u yerdan quyoshga chiqsa, ko'zi moslashishi kerak bo'lgandek, aynan Oypopukning fe'li, hayoti umuman barcha-barcha auristikasi(ichkiyoti) oppoq bulutlar bilan to'lgan edi, u shuning uchun ham urush, ayriliq va azoblardan qo'rqar edi, chunki ularda oqlik mavjud emas. Aynan O'ktamdagi bir so'zda u qora narsani ko'rdi va, va ko'ziga hech narsa ko'rinmadi, chunki u zotan shunday fe'l sohibi edi. Balki onasi bo'lganda, uning osmoniga kamalak qo'shilardi hamda u hozirgi fe'liga o'xshamasdi. Oypopuk qayerda adashgan yoki kamchil fe'lchalari bor bo'lsa, ko'pi onasi sabab.
              `,
              bookPrice : "35 000 so'm",
              audioTime : "6:45 soat",
              electron : "pdf, epub"

          },
      ]
  }, 

  {
      id: "235",
      genre: "uzbek",
      img: "https://imgur.com/tJ0zO8U.jpg",
      name: "Tog'ay",
      lastName: "Murod",
      born : 1948,  
      bornDate : 3,
      bornMonth : "Fev",
      died : 2003,
      diedDate : 27,
      diedMonth : "May",
      books: 34,
      audio: 12,
      desc: `
          Tog'ay murod (taxallusi; asl ism-sharifi Mengnorov Tog'aymurod) (1948.3.2. — Surxondaryo viloyati Denov tumani Xo'jasoat qishlog'i — 2003.27.5, Toshkent) — O'zbekiston xalq yozuvchisi (1999).
          Qishlog'idagi 43-maktabni bitirgach (1966), Toshkent Davlat universiteti (hozirgi O'zMU)ning jurnalistika fakultetida o'qigan (1966-1972). U respublika radiosida muharrir (1972-1976), „O'zbekiston fizkulturachsi“ gazetasida tarjimon (1976-1978), „Fan va turmush“ jurnalida bo'lim muharriri (1982-1984) bo'lgan. 1985-1987-yillarda Moskvadagi Adabiyot institutida o'qigan.
      `,
      jobs: `
          Dastlab kichik hikoyalari, ocherklari e'lon qilingan. 1976-yilda bosilgan „Yulduzlar mangu yonadi“ nomli ilk qissasi bilan yaxshi yozuvchi sifatida tanildi. 1979-yilda „Ot kishnagan oqshom“, 1980-yilda „Oydinda yurgan odamlar“, 1985-yilda yozuvchining „Momo yer qo'shig'i“ qissalari chop etildi. Keyingi qissasi uchun yozuvchi Oybek nomidagi mukofot bilan taqdirlandi. Ularda halol, oqko'ngil, to'g'riso'z, mard o'zbek kishilarining betakror obrazlari yaratilgan. O'zbek adabiyotining yutug'i sifatida e'tirof etilgan bu qissalar tilining shoirona jozibadorligi, xarakterlarning yorqinligi, milliy ruhi bilan ajralib turadi. Tog'ay Murod o'zbek va jahon adabiyotining eng yaxshi an'analarini muvaffaqiyat bilan davom ettirgan.
      `,
      location: "Surxondaryo, Uzbekistan",
      bookObj: [
          {
              bookId: "236",
              bookImg: 'https://imgur.com/5P7nvu9.jpg',
              bookName: "Otamdan qolgan dalalar",
              bookRating : 5,
              bookGenre : "uzbek",
              bookPage : 360,
              published : 2018,
              bookSenario : "Roman",
              nashriyot : "O'zbekiston nashriyoti",  
              bookInfo: `
                  Otamdan qolgan dalalar—O'zbekiston xalq yozuvchisi Tog'ay Murod qalamiga mansub 1986-1991-yillarda yozilgan ramziy roman. Ilk marotaba „Yoshlik“ jurnalining 1993-yildagi sonida qisman elon qilingan. To'liq tarzda 1994-yilda Sharq nashriyot-matbaa konsernining bosh tahiriryati tominidan 272 betli qattiq muqovada 75000 nusxada nashr etilgan. So'nggi marta 2018-yilda O'zbekiston nashriyot-matbaa ijodiy uyi tomonidan 360 betli 5000 nusxali qattiq muqovada nashr etildi.
              `,
              bookInfoTwo: `
                  O'zbek adabiyotshunoslarining tahlilicha Tog'ay Murodning ilk romani „Otamdan qolgan dalalar“ o'zbek milliy adabiyoti tarixida muhim hodisa bo'lgan. Asarni yozishga kirishar ekan, yozuvchi o'zini, o'zining hayot haqidagi bilim, tasavvurlarini qayta tanqidiy taftishdan o'tkazadi. Shu paytga qadar amal qilgan ijodiy aqidalariga sodiq qolgan holda qishloq hayoti, oddiy odamlar turmushini o'zgacha nigoh bilan anglash yo'lini tutadi.
                  Mustabid tuzum sharoitida oddiy zahmatkash mehnat ahli ayni o'sha noyob fazilatlari — to'g'riso'zligi, mehnatkashligi, halolligi, odob-andishasi tufayli xor bo'layotganligini adib chuqur alam-iztirob, nadomatlar bilan tasvirlaydi. Asarda ijtimoiy ruh — pafos keng ko'lam kasb etadi. Roman markazida Dehqonqul taqdiri turadi. Asar voqealari hayoti, taqdir-qismati, ruhiy dunyosi, ona-yer, kindik qoni to'kilgan muqaddas tuproq bilan mustahkam bog'liq, o'zbekning ramzi degulik mehnatkash inson — bosh qahramon Dehqonqul tilidan so'zlab beriladi.
              `,
              bookPrice : "45 000 so'm",
              audioTime : "4:96 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "237",
              bookImg: 'https://uz.wikipedia.org/wiki/Ot_kishnagan_oqshom#/media/Fayl:Ot_kishnagan_oqshom.jpg',
              bookName: "Ot kishnagan oqshom",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 464,
              published : 1994,
              bookSenario : "Roman",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  Ot kishnagan oqshom - Tog'ay Murod qissalari, “Sharq” nashriyot-matbaa konsernining Bosh tahririyati tomonidan 1994-yilda chop etilgan.   Mazkur kitobda Yulduzlar mangu yonadi, Ot kishnagan oqshom, Oydinda yurgan odamlar, Momo yer qo'shig'i qissalari jamlangan.   
              `,
              bookInfoTwo: `
                  Bu qissalar ne bir kunlarni ko'rmadi!
                  Zoti nomard bo'ldi, ushbu qissalar yoqasidan oldi. Og'zi buzuq bo'ldi, ushbu qissalarga tupugini sochdi. Qo'li nopok bo'ldi, ushbu qissalardan butun-butun boblarni o'chirib tashladi.
                  Oqibat, ushbu qissalar o'z vaqtida pati yulinmish tovuq misol chop etildi.
                  Alqissa, dorilomon kunlar keldi. «Ot kishnagan oqshom»dagi Ziyodulla chavandozchasiga aytar bo'lsak... uloq Tog'ay Murodda ketdi!
              `,
              bookPrice : "35 000 so'm",
              audioTime : "9:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "238",
              bookImg: 'https://kitobxon.com/img_knigi/7740.jpg',
              bookName: "Bu dunyoda o'lib bo'lmaydi",
              bookRating : 5.4,
              bookGenre : "uzbek",
              bookPage : 460,
              published : 1963,
              bookSenario : "Roman",
              nashriyot : "Yangi asr avlodi nashriyoti",  
              bookInfo: ` 
                  Istedodli adibning “Bu dunyoda o'lib bo'lmaydi” romanini ham inson xarakteri uning ichki kechinmalari, ayanchli hayoti Botir Firqa obrazida o'z ifodasini topgan. Anashu nuqtai nazardan mustaqil ishining keyingi sahifalarida Botir Firqa xarakterining tasviri, adibning xarakter yaratish mahorati, asar syujeti, badiiy konflikt ya'ni poetik xususiyatlar hamda yozuvchi uslubi haqida fikr yuritamiz.
              `,
              bookInfoTwo: `
                  Bugungi kunda jahon romanchiligi bilan bahsga kirishayotgan romanchiligimiz taraqqiyoti yo'lida yozuvchilarimiz olib borayotgan ijodiy izlanishlar, badiiy talqinlar o'z yo'lini topish uchun urunishlar, izlanishlr o'zining samarasini bermoqda. yangi o'zbek romanini yaratishda Tog'at Murodning alohida o'rnini qayd etish zarur. O'zbek romanchiligida yangi badiiy-estetik tamoyillar yuzaga kelishi va shakkalanib ma'lum bir ijobiy shakl shamoyilga ega bo'lishi uchun o'n yilliklar juda qisqadir. Xuddi shu qisqa fursatda yozuvchilarimiz milliy romanchiligimiz taraqqiy etish uchun o'z individual uslublariga ega bo'lishi yillar davomida tazyiq ostida yashagan ong ozod bo'lishi krrakligini to'liq anglab etganligi ozi nihoyatda sezilarli holdir.
                  Asarning bosh qahramoni ya'ni xarakter darajasiiga ko'tarilgan obreaz Botir Esanovdir. “Tagi ko'rmanda gilam bitmasin Qodiqqulni chevarasi, Xolmat malayni nevarasi, Eson xizmatkorning bolasi Botir Qushchi tumandan aynib keldi. Qo'shchi kalandimog-kalandimog qadam bosdi. kibar-kibar quloch otdi, kermaqosh-kqrmaqosh otdi.
              `,
              bookPrice : "29 000 so'm",
              audioTime : "7:20 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "239",
              bookImg: 'https://imgur.com/sdoBarL.jpg',
              bookName: "Oydinda yurgan odamlar",
              bookRating : 3,
              bookGenre : "uzbek",
              bookPage : 400,
              published : 1980,
              bookSenario : "Qissa",
              nashriyot : "Sharq nashriyoti",  
              bookInfo: `
                  Qissa qahramoni Ziyodulla oddiy bir cho'pon. Uning o'z oti Tarlonga bo'lgan mehri - insonning tabiatga qo'ygan mehriday sof. Tarlon tabiat timsoli bo'lgani uchun ham yozuvchi uni yorqin bir obraz darajasiga ko'tarib tasvirlaydi.
              `,
              bookInfoTwo: `
                  Tog'ay Murodning 1980-yili chop etilgan «Oydinda yurgan odamlar» qissasi adibninggina emas, o'zbek milliy adabiyotining noyob namunasi hisoblanadi. Bu asar yozuvchining eng dilbar va muallifning o'z so'zi bilan aytganda, ,,ne kunlarni ko'rmagan”, eng murakkab taqdirli qissasidir. Bu kitob O'zbekiston Yozuvchilar uyushmasining Oybek nomidagi mukofoti bilan taqdirlangan. Ushbu qissa nomini o'qishingiz bilanoq sizni allaqanday sirli-sehrli oydin kecha bag'riga oladi. Ichingizga ajib bir nur o'rmalab kiradi. Dil-dilingizni yoritib yuboradi. Qissa qahramonlari Qoplon va Oymomo farzand orzu-ilinjida kun, oy, yillarni bir-biriga ulab yashashadi. Hali tug'ilmagan bolaning bobosi, momosi bo'lib zurriyotni, bir-birlarini ardoqlashadi. Tog'ay Murod chol kampir hayotini g'oyat nozik, g'oyat shoirona tasvirlaydi. Chol-kampirning o'zaro mehr-muhabbatini qo'shiqdek kuylab beradi. Tog'ay Murod bir-birini Bobosi, Momosi, deya atab umr o'tkazayotgan bir juft pokiza insonni oydindagi oy nuriga o'rab tasvirlaydi. Oqibatda, ushbu juftning o'zi ham, so'zi ham, turish-turmushi ham oyning kumush nurlariga yo'g'rilib ketadi. Asar qahramonlari fojeasi umid va yorug'likka to'la mungli, hazin qo'shiq qilib kuylanadi.
              `,
              bookPrice : "25 000 so'm",
              audioTime : "5:45 soat",
              electron : "pdf, epub"

          },
      ]
  }, 

  {
      id: "240",
      genre: "uzbek",
      img: "https://arboblar.uz/upload/people/n/389ac7371fece8a9be69645de259de470528.jpg",
      name: "Mirkarim",
      lastName: "Osim",
      born : 1907,  
      bornDate : 3,
      bornMonth : "Fev",
      died : 1984,
      diedDate : 27,
      diedMonth : "May",
      books: 34,
      audio: 12,
      desc: `
          Mirkarim Osim (1907 — Toshkent — 1984) — yozuvchi va tarjimon. O'zbekistonda xizmat ko'rsatgan o'qituvchi (1944), O'zbekistonda xizmat ko'rsatgan madaniyat xodimi (1977). Dastlab eski maktabda, so'ngra „Shams ul-urfon“ boshlang'ich maktabi (1917—20), Narimonov nomidagi ta'lim va tarbiya texnikumi (1921—24)datahsil olgan. Moskvadagi Bubnov nomidagi pedagogika intini tugatgan (1926—30). Samarqandda o'qituvchilar tayyorlash kursida dars bergan (1930). Davlat nashriyotida muharrir (1931), Toshkent Ped. fanlari i. t. intida ilmiy xodim (1932— 49), G'afur G'ulom nomidagi Adabiyot va san'at nashriyotida muharrir,
          Mirkarim Osimning tarixiy qissa va hikoyalariga xos asosiy fazilatlar ularda tarixiy haqiqat bilan badiiy to'qimaning o'zaro o'yg'unligi, tarixiy shaxs obrazining tarixiy davr fonida yaratilganligi, xalqparvarlik va vatanparvarlik g'oyalarining bu asarlar osha „kizil ip“ o'laroq o'tganligi hamda badiiy til va uslubning soddaligi, shiraliligi, o'zbekonaligidir.
          M.Sholohovning „Tinch oqar Don“ (2-kitob), S. Borodinning „Yeldirim Boyazid“ romanlari va L.G.Batning „hayot bo'stoni“ qissasi va boshqa asarlarni o'zbek tiliga tarjima qilgan. „Buyuk xizmatlari uchun“ ordeni bilan mukofotlangan (2002).
      `,
      jobs: `
          „Yangi ariq“ ilk qissasi (1925) Qo'qon xonligini ideallashtirgan asar sifatida bosilmay qolgan. Mirkarim Osim 1935—36 yillarga kelib she'r yoza boshlagan. Dastlabki yirik asari — „Astrobod“ tarixiy qissasi Alisher Navoiy hayotiga bag'ishlangan. Shundan keyin u Navoiy haqida turkum qissa va hikoyalar yozgan (1937—40). Mirkarim Osim O'rta Osiyo xalqlari tarixining eng qad. davridan 1917 yilga qadar kechgan vaqt ichida o'tgan muhim tarixiy voqealarni va shu davrda yashagan o'zbek xalqi ulug' siymolari hayotini aks ettiruvchi o'nlab qissa va hikoyalar muallifi.
      `,
      location: "Toshkent, Uzbekistan",
      bookObj: [
          {
              bookId: "241",
              bookImg: 'https://imgur.com/SMF85SD.jpg',
              bookName: "To'maris",
              bookRating : 6.1,
              bookGenre : "uzbek",
              bookPage : 140,
              published : 2016,
              bookSenario : "Qissa",
              nashriyot : "Yangi asr avlodi nashriyoti",  
              bookInfo: `
                  Ajdodlarimizning bosqinchilarga qarshi mardonavor kurashlari bir necha ming yillar oldin mag'rib va mashriqda afsonalarga aylangan, ular haqida ko'plab asarlar yozilgan. Ushbu kitobda Mirkarim Osimning mazkur mavzuga oid eng sara asarlari jamlandi.
                  Aziz kitobxon, Vatanni sevgan, forslardan uni himoya qilgan, tinchligiga pospon bo'lgan massagetlar podsho - hokimasi To'masir, cho'pon Shiroq, mo'g'illarga qarshi kurashgan yengilmas bahodir Temur Malik jasoratida hikoya qiluvchi qissalarni mutolaaasiga shoshiling. 
              `,
              bookInfoTwo: `
                  Cho'l bahor kelinchagi oyog'i ostiga chechaklar bilan bezalgan yashil poyandozini yoyib tashlagan. To'rg'aylar havoda pirillab ko'klamga madhiya o'qimoqda. Rango-rang kapalaklar chechaklarning xushbo'y hididan mast. Allaqanday uzun oyoqli qushlar o'tlar orasida dumlarini likillatib, katta-katta bosib yuradi, toshbaqalar burishib ketgan xunuk bo'yinlarini o'tlarga cho'zadi, qo'ng'izlar esa orqalariga qarab yurib, tezakdan yasagan qumaloqlarini allaqayoqqa yumalatadi. Qizg'ish-qo'ng'ir bir ilon o't orasidan o'rmalab kelib, atrofni tomosha qilayotgandek qaqqayib qolgan yumronqoziqqa tashlanadi, qushlarga o'xshab chirqillab turgan kaltakesaklar qo'rqib ketib oyoqlari bilan qumloq yerni ikki yonlariga chiqarib, tuproq ostiga yashirinadi. Ba'zan ovullar yaqnnidan ko'kraklari oppoq sayg'oqlar gala-gala bo'lib chopib o'tadi, yer gumburlab ketadi.
              `,
              bookPrice : "25 000 so'm",
              audioTime : "4:96 soat",
              electron : "pdf, epub"
  
          },
          {
              bookId: "242",
              bookImg: 'https://kitobxon.com/img_knigi/2703.jpg',
              bookName: "Aljabrning tug'ilishi",
              bookRating : 3.7,
              bookGenre : "uzbek",
              bookPage : 144,
              published : 2019,
              bookSenario : "Qissa",
              nashriyot : "«Yangi asr avlodi» nashriyoti",  
              bookInfo: `
                  Mazkur kitob tarixchi-yozuvchi Mirkarim Osimning eng mashhur ikki asaridan tarkib topgan. “Aljabrning tug'ilishi” va “Karvon yollarida# deb nomlangan har ikkala asar bugungi davr o'quvchisi o'qishi shart bo'lgan kitoblar sirasiga kiradi.    
              `,
              bookInfoTwo: `
                  Millatimizning buyuk dahosi bo'lmish al-Xorazmiy haqidagi afsona va rivoyatlarga asoslangan “Aljabrning tug'ilishi” qissasi o'quvchining ham tarixiy, ham ma'naviy bilimini boyitadi. Unda nafaqat buyuk olimning ilmiy faoliyati, balki davrga xos ijtimoiy va siyosiy voqealar, umuminsoniy fazilatlar, tuyg'ular o'rtasidagi qarama-qarshiliklar jonli va rangli tasvirlarda ifodalanadi. Feruz va Yoqutoy o'rtasidagi go'zal sevgi hamda ularning muhabbatiga raxna soluvchi qora kuchlar bilan o'quvchi asar mutolaasi davomida tanishadi.“Karvon yo'llarida” asarida Buxoro xoni Abdullaxon davrida jamiyatda hukm surgan vaziyat hamda siyosiy jarayonlar tarixiy faktlar asosida ifodalanadi. Asar qahramonlaridan biri, jabrdiyda Zahro obrazi o'quvchi qalbini junbishga keltiradi. Asira qizning go'zalligi xonlar va elchilar orasida tilga tushganligi bois, uning taqdiri ayanchli tus oladi...
              `,
              bookPrice : "15 000 so'm",
              audioTime : "1:45 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "243",
              bookImg: 'https://imgur.com/d9au3aF.jpg',
              bookName: "Singan Setor",
              bookRating : 3,
              bookGenre : "uzbek",
              bookPage : 200,
              published : 1996,
              bookSenario : "Qissa",
              nashriyot : "Yangi asr avlodi nashriyoti",  
              bookInfo: ` 
                  Istedodli adibning “Bu dunyoda o'lib bo'lmaydi” romanini ham inson xarakteri uning ichki kechinmalari, ayanchli hayoti Botir Firqa obrazida o'z ifodasini topgan. Anashu nuqtai nazardan mustaqil ishining keyingi sahifalarida Botir Firqa xarakterining tasviri, adibning xarakter yaratish mahorati, asar syujeti, badiiy konflikt ya'ni poetik xususiyatlar hamda yozuvchi uslubi haqida fikr yuritamiz.
              `,
              bookInfoTwo: `
                  Bugungi kunda jahon romanchiligi bilan bahsga kirishayotgan romanchiligimiz taraqqiyoti yo'lida yozuvchilarimiz olib borayotgan ijodiy izlanishlar, badiiy talqinlar o'z yo'lini topish uchun urunishlar, izlanishlr o'zining samarasini bermoqda. yangi o'zbek romanini yaratishda Tog'at Murodning alohida o'rnini qayd etish zarur. O'zbek romanchiligida yangi badiiy-estetik tamoyillar yuzaga kelishi va shakkalanib ma'lum bir ijobiy shakl shamoyilga ega bo'lishi uchun o'n yilliklar juda qisqadir. Xuddi shu qisqa fursatda yozuvchilarimiz milliy romanchiligimiz taraqqiy etish uchun o'z individual uslublariga ega bo'lishi yillar davomida tazyiq ostida yashagan ong ozod bo'lishi krrakligini to'liq anglab etganligi ozi nihoyatda sezilarli holdir.
                  Asarning bosh qahramoni ya'ni xarakter darajasiiga ko'tarilgan obreaz Botir Esanovdir. “Tagi ko'rmanda gilam bitmasin Qodiqqulni chevarasi, Xolmat malayni nevarasi, Eson xizmatkorning bolasi Botir Qushchi tumandan aynib keldi. Qo'shchi kalandimog-kalandimog qadam bosdi. kibar-kibar quloch otdi, kermaqosh-kqrmaqosh otdi.
              `,
              bookPrice : "22 000 so'm",
              audioTime : "4:20 soat",
              electron : "pdf, epub"

          },
          {
              bookId: "244",
              bookImg: 'https://kitobxon.com/img_knigi/s7686.jpg',
              bookName: "Zulmat ichra nur",
              bookRating : 6,
              bookGenre : "uzbek",
              bookPage : 150,
              published : 1980,
              bookSenario : "Qissa",
              nashriyot : "O'zbekiston nashriyoti",  
              bookInfo: `
                  Alisher tong otib, quyosh qiziganda uyg'onadi. Qarasa, poyonsiz sahro, atrofida hech kim yo'q. Yolg'iz otigina yovshan ildizlarini chimtib turibdi. O'n yoshli bola o'zini qo'lga oladi. Otini minib, zehn bilan yo'lni topib ilgari yuradi. Kun qizib, chanqoqlik boshlanadi. Shu payt uzoqdan bir narsa qorayib ko'rinadi. U suv to'la mesh ekan, Ollohga shukuronalar aytib, Alisher yo'lini davom ettiradi. Uning ota-onasi manzilga yetgach, o'g'illlarini yo'qligini biladilar va mulozimni shoshilinch orqaga qaytaradilar. Mulozim ko'p yurmay, Alisherga duch keladi. Alisherni, go'yo u qayta tug'ilganday, quvonch bilan kutib oladilar.
              `,
              bookInfoTwo: `
                  Alisher cho'kkalab olib xontaxta ustidagi kattakon bir kitobni varaqlab, surat ko'rib o'tirar edi. Ov va jang manzaralari uni shu qadar qiziqtirgan, xayolini shu qadar o'g'irlagan ediki, otasi kelib eshik oldida kavush yechayotganini ham payqamadi. Kichkina Bahodir deb nom chiqargan G'iyosiddin endi to'rt yoshga kirgan o'g'li Alisherga kulimsirab qarab turdi. «Shul yoshdin kitobga muhabbat qo'ysa, ulg'aygach, albatta kitobni ilkidan ayirmay o'zi bila asrab yurg'ay», deb o'yladi ota shiringina, do'mboq o'g'lidan ko'zini uzolmay.
              `,
              bookPrice : "18 000 so'm",
              audioTime : "1:45 soat",
              electron : "pdf, epub"

          },
      ]
  }, 
]
  

export {users}
