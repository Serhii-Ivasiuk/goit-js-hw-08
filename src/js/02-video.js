import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

updatePlayerTime();

player.on('timeupdate', _throttle(onPalyerTimeUpdate, 1000));

function onPalyerTimeUpdate(evt) {
  localStorage.setItem(LOCAL_STORAGE_KEY, evt.seconds);
}

function updatePlayerTime() {
  const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
