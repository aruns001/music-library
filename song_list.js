//song list
let All_song = [
    {
      name: "Arabic Kuthu-Beast",
      path: "music/1.mp3",
      img: "images/1.jpg",
      singer: "Anirudh Ravichander-Jonita Gandhi"
    },
    {
      name: "Adiye-Bachelor",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "Dhibu Ninan Thomas-Kapil Kapilan"
    },
    {
      name: "Srivalli-Pushpa",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Sid Sriram"
    },
    {
      name: "Jalabulajangu-Don",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Anirudh Ravichander-Rokesh"
    },
    {
      name: "Summa surrunu-ET",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "Armaan Malik-Nikhita Gandgi-D.Imman"
    },
    {
     name: "Mudhal Nee Mudivum Nee-Mudhal Nee Mudivum Nee",
     path: "music/6.mp3",
     img: "images/6.jpg",
     singer: "Sid Sriram"
    },
    {
      name: "Naan Pizhai-Kathuvaakula Rendu Kadhal",
      path: "music/7.mp3",
      img: "images/7.jpg",
      singer: "Anirudh Ravichander-Ravi G-Shashaa Tirupati"
    },
    {
     name: "Bae-Don",
      path: "music/8.mp3",
      img: "images/8.jpg",
      singer: "Anirudh Ravichander-Adithya RK"
    },
    {
      name: "Naanga Vera Maari-Valimai",
       path: "music/9.mp3",
       img: "images/9.jpg",
       singer: "Yuvan Shankar Raja-Anurga Kulkarni"
     },
     {
      name: "Chellamma-Doctor",
       path: "music/10.mp3",
       img: "images/10.jpg",
       singer: "Anirudh Ravichander-Jonita Gandhi"
     },
     {
      name: "Per Vachaalum Vaikkaama-Dikilona",
       path: "music/11.mp3",
       img: "images/11.jpg",
       singer: "Yuvan Shankar Raja-Illaiyaraja-Malaysia Vasudevan-S Janaki"
     },
     {
      name: "Kutty Pattas",
       path: "music/12.mp3",
       img: "images/12.jpg",
       singer: "Santhosh Dhayanidhi-Rakshita Suresh"
     },
     {
      name: "Two Two Two-Kathuvaakula Rendu Kadhal",
       path: "music/13.mp3",
       img: "images/13.jpg",
       singer: "Anirudh Ravichander"
     },
     {
      name: "Meherezylaa",
       path: "music/14.mp3",
       img: "images/14.jpg",
       singer: "Yuvan Shankar Raja"
     },
     {
      name: "Bodhai Kaname-Oh Manapenne",
       path: "music/15.mp3",
       img: "images/15.jpg",
       singer: "Vishal Chanrashekhar"
     },
     {
      name: "Adi penne",
       path: "music/16.mp3",
       img: "images/16.jpg",
       singer: "Stephen Zecharaih"
     },
     {
      name: "Nenjame-Doctor",
       path: "music/17.mp3",
       img: "images/17.jpg",
       singer: "Anirudh Ravichander"
     },{
      name: "Vaathi Coming-Master",
       path: "music/18.mp3",
       img: "images/18.jpg",
       singer: "Gana Balachandar"
     },
     {
      name: "So Baby-Doctor",
       path: "music/19.mp3",
       img: "images/19.jpg",
       singer: "Anirudh Ravichander"
     },
     {
      name: "Kaattu Payale",
       path: "music/20.mp3",
       img: "images/20.jpg",
       singer: "Dhee"
     },
     
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/