$(document).ready(function() {
  var track = document.querySelector('audio');
	track.volume = 0.45
  track.play()
});
$('#soundMute').on('click', function(){
  var track = document.querySelector('audio');
  if (track.paused) {
    track.play()
    $(this).removeClass('muted')
  } else {
    track.pause();
    $(this).addClass('muted')
  }
})
