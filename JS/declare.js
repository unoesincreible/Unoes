// MAIN INDEX
const hfavbtn = document.getElementById("favbtnn");
const htitle = document.querySelector("#home #title");
const hartist = document.querySelector("#home #artist");
const hcover = document.querySelector("#home #cover");
const hex = document.querySelector("#home #ex");
const hpro = document.querySelector("#home #progressbar");
const hminuteplayed = document.querySelector("#home #minuteplayed");
const hminuteleft = document.querySelector("#home #minuteleft");



// MUSIC PLAYERRRR
// id yang sama dipakai di #home (mini player) dan #musicplayer (full player),
// jadi harus di-scope supaya tidak selalu mengambil elemen pertama saja.
const title = document.querySelector("#musicplayer #title");
const artist = document.querySelector("#musicplayer #artist");
const cover = document.querySelector("#musicplayer #cover");
const au = document.getElementById("music");
const pro = document.querySelector("#musicplayer #progressbar");
const lyrics = document.getElementById("lyrics");
const b1 = document.getElementById("blob1");
const b2 = document.getElementById("blob2");
const b3 = document.getElementById("blob3");
const b4 = document.getElementById("blob4");
const b5 = document.getElementById("blob5");
const b6 = document.getElementById("blob6");
const b7 = document.getElementById("blob7");
const b8 = document.getElementById("blob8");
const b9 = document.getElementById("blob9");
const b10 = document.getElementById("blob10");
const musicplayer = document.getElementById("musicplayer");
const ex = document.querySelector("#musicplayer #ex");
const minuteplayed = document.querySelector("#musicplayer #minuteplayed");
const minuteleft = document.querySelector("#musicplayer #minuteleft");
const favbtnn = document.getElementById("favbtnn");
const volume = document.getElementById("volume");
const volume2 = document.getElementById("volume2");
const vicon = document.getElementById("vicon");
const vicon2 = document.getElementById("vicon2");
const lyricsbtnt = document.getElementById("lyricsbtntoggle");
const rsect = document.getElementById("rsect");
const lsectt = document.getElementById("lsectt");


// controler

const homeply = document.querySelector("#home #playy");
const homeprev = document.querySelector("#home #prevbtn");
const homenext = document.querySelector("#home #nextbtn");
const homeloop = document.querySelector("#home #loopbtn");
const homeshuffle = document.querySelector("#home #shuffle");


const ply = document.querySelector("#musicplayer #playy");
const prevbtn = document.querySelector("#musicplayer #prevbtn");
const nextbtn = document.querySelector("#musicplayer #nextbtn");
const loopbtn = document.querySelector("#musicplayer #loopbtn");
const shufflebtn = document.querySelector("#musicplayer #shuffle");