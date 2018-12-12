$(document).ready(function() {
    var links = [
        {
            name: 'BoostedsilveR',
            link: 'http://boostedsilver.xyz/'
        },
		{
            name: 'Atila1337',
            link: 'https://vk.com/atila1337'
        },
		{
            name: 'tigeRxSpeaker',
            link: 'http://Steamcommunity.com/id/tigeRxspeaker/'
        },
		{
            name: 'Exoze',
            link: 'https://vk.com/hvhgod'
        },
		{
            name: 'Chaykovsky',
            link: 'http://Chaykovsky.pw/'
        },
		{
            name: 'Sarkis1337',
            link: 'http://sark1s.xyz/'
        },
    ];
 
    for(var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();
    
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
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
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