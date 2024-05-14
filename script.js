var arr = [
    {
    name:'Ayat AlKursi',
    url:'./QuraniAyat/Ayat-Alkursi.mp3',
    image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
     name:'Ayat Alkursi',
     url:'./QuraniAyat/AyatulKursiByAbdullah.mp3',
     image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Beautiful Surah',
        url:'./QuraniAyat/BeautifulShortSurahToReciteinSalahSurahAlAdiyat.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Best Surah for Depression, Stress and Anxiety',
        url:'./QuraniAyat/BestQuranSurahforDepressionAnxietyandStressSurahAdDuha.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlAdiyat',
        url:'../QuraniAyat/Quran100SurahAlAdiyat.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlQariah',
        url:'./QuraniAyat/Quran101SurahAlQariah.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'SurahAtTakathur',
        url:'./QuraniAyat/Quran102SurahAtTakathur.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlAsr',
        url:'./QuraniAyat/Quran103SurahAlAsr.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },

    {
        name:'Surah AlHumazah',
        url:'./QuraniAyat/Quran104SurahAlHumazah.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlFil',
        url:'./QuraniAyat/Quran105SurahAlFil.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    }, {
        name:'Surah AlQurayshQuraysh',
        url:'./QuraniAyat/Quran106SurahAlQurayshQuraysh.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlMaun',
        url:'./QuraniAyat/Quran107SurahAlMaun.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlKawther',
        url:'./QuraniAyat/Quran108SurahAlKawther.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlKafirun',
        url:'./QuraniAyat/Quran109SurahAlKafirun.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AnNasr',
        url:'./QuraniAyat/Quran110SurahAnNasr.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlMassad',
        url:'./QuraniAyat/Quran111SurahAlMassad.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlIkhlas',
        url:'./QuraniAyat/Quran112SurahAlIkhlas.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlFalaq',
        url:'./QuraniAyat/Quran113SurahAlFalaq.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AnNas',
        url:'./QuraniAyat/Quran114SurahAnNas.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surah AlFatihahT',
        url:'./QuraniAyat/Quran1SurahAlFatihahTheOpenerArabicandEnglishtranslationHD.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'SurahAzZalzalah',
        url:'./QuraniAyat/Quran99SurahAzZalzalah.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'SURAH ADDUHA',
        url:'./QuraniAyat/SURAHADDUHA.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
    {
        name:'Surat  AlFatihah',
        url:'./QuraniAyat/SuratAlFatihah.mp3',
        image:'photo-1587617425953-9075d28b8c46.avif'
    },
]

var AllAyatSurah = document.querySelector('#all-AyatsSurat');
var poster = document.querySelector('#left');
var audio = new Audio()

var selectedAya=0;

// console.log(arr)

function mainFunction(){
    var clutter='';
arr.forEach(function(elem,index){
   clutter += `
   <div class='surah-card' id=${index}>
    <div class='part1'>
    <img src='${elem.image}' alt=''>
    <h2>${elem.name}</h2>
    </div>
    <h6>3:56</h6>
   </div>
   `

})

AllAyatSurah.innerHTML= clutter;

audio.src = arr[selectedAya].url;

poster.style.backgroundImage=`url(${arr[selectedAya].image})`
}

mainFunction();

AllAyatSurah.addEventListener('click',function(details){
    selectedAya= details.target.id;
    mainFunction();
    play.innerHTML= `<i class="ri-pause-line"></i>`
    flag=1;
   audio.play();
})


var play = document.querySelector('#play');
var backward =  document.querySelector('#backward');
var forward =  document.querySelector('#forward');
// console.log(clutter)

var flag =   0;
play.addEventListener('click',function(){
    if(flag == 0)
        {
            play.innerHTML= `<i class="ri-pause-line"></i>`
            mainFunction();
            audio.play();
            flag = 1;
        }
        else
        {
            play.innerHTML= `<i class="ri-play-line"></i>`
            mainFunction();
            audio.pause();
            flag = 0;   
        } 
})


forward.addEventListener('click',function(){
    if(selectedAya < arr.length -1)
        {
            selectedAya++;
            mainFunction();
            audio.play();
            backward.style.opacity=1
            play.innerHTML= `<i class="ri-pause-line"></i>`
        }
        else
        {
            forward.style.opacity=0.4
        }
})


backward.addEventListener('click',function(){
    if(selectedAya > 0)
        {
            selectedAya--;
            mainFunction();
            audio.play();
            forward.style.opacity=1
            play.innerHTML= `<i class="ri-pause-line"></i>`
        }
        else
        {
            backward.style.opacity=0.4
        }
})