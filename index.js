import style from './src/assets/style/index.styl';

// show lirics
if(window.isSong) {
  let showLirics = document.querySelector('.show-lirics');
  let liricsBlock = document.querySelector('.song-lirics');
  let liricsText = document.querySelector('.song-lirics-text');
  
  showLirics.addEventListener('click', function(){
    event.preventDefault();
    liricsText.classList.toggle('full-lirics');
    liricsBlock.classList.toggle('remove-shadow');
    if(liricsText.classList.contains('full-lirics')) {
      showLirics.innerHTML = 'Скрыть слова'
    } else {
      showLirics.innerHTML = 'Показать слова'
    }
  });
}

// player

let audioPlayer = new MediaElementPlayer('#audio-player', {
  alwaysShowControls: true,
  audioVolume: 'horizontal',
  audioWidth: 400,
  audioHeight: 120,
  features: ['playpause','volume','progress'],
  success: function(media, node, player) {
    $('.play-btn').on('click', function( event ) {
      if(media.src.substring(21) != $(this).attr("data-url") ) {
        $('.cover').attr("src", $(this).siblings(".tag-item-cover")[0].src);
        $('.player-title').text($(this).attr("data-title"));
        media.setSrc($(this).attr("data-url"));
      }
      if (media.paused) {
        $('.play-btn').removeClass('item-playing')
          media.play();
          $(this).addClass('item-playing')
      } 
      else {
        media.pause();
        $(this).removeClass('item-playing')
      }
      event.preventDefault();
    });
    media.addEventListener('ended', function(e){
      // player.src = 'media/somefile.mp4';
      // player.load();
      // player.play();
      alert(1)
    });
    $('.mejs-button').on('click', function( event ) {
      if($('.mejs-button').hasClass('mejs-pause')) {
        $('.item-playing').removeClass('item-playing')
      }
    });
  }
});



  // let playerCover = document.querySelector('.cover');
  // let monetochka = document.querySelector('.monetochka');
  // let monetochkaPlay = document.querySelector('.monetochka-play');

  // monetochkaPlay.addEventListener('click', function(){
  //     audioPlayer.setSrc('./static/mediaplayer/monetochka.mp3');
  //     playerCover.setAttribute('src', './static/mediaplayer/monetochka.jpeg');
      // monetochkaPlay.classList.add('item-playing');
      // audioPlayer.play();
    // if(audioPlayer.media.paused) {
    //   console.log(1)
    //   audioPlayer.setSrc('./static/mediaplayer/monetochka.mp3');
    //   playerCover.setAttribute('src', './static/mediaplayer/monetochka.jpeg');
    //   monetochkaPlay.classList.add('item-playing');
    //   audioPlayer.play();
    // }
    // if(audioPlayer.media.played) {
    //   console.log(2)
    //   audioPlayer.setSrc('./static/mediaplayer/monetochka.mp3');
    //   playerCover.setAttribute('src', './static/mediaplayer/monetochka.jpeg');
    //   monetochkaPlay.classList.add('item-playing');
    //   audioPlayer.play();
    // }
    // else {
    //   console.log(3)
    //   monetochkaPlay.classList.remove('item-playing');
    //   audioPlayer.pause();
    // }
  // });
