$(document).ready(function() {
    var links = [
        {
            name: 'Sikes',
            link: 'https://sikes.pw/'
        },
    ];
 
    for(var i in links) {
        var link = links[i];

        $('#marquee2').append('<a href="' + link.link + '">' + link.name + '</a>');

        var link = $('#marquee2').children('a').last();
    
        link.mouseover(function() {
            $('#hover')[0].play();
        });

        link.mousedown(function() {
            $('#click')[0].play();
        });

        link.mouseup(function() {
            $('#release')[0].play();
        });
        
        if(i != links.length - 1) {
            $('#marquee2').append(' · ');
        }
    }

    $('#marquee2').marquee2({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });

    /*
    var audio = $('#audio');
    audio.volume = 0.75;
    */
});