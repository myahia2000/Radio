jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        tracklistarrowimageheight:16,
        showtime:false,
        titleinbarwidth:80,
        showprogress:false,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        loopimage:"loop-24-24-0.png",
        prevnextimage:"prevnext-90-90-0.png",
        showinfo:false,
        imageheight:100,
        skin:"ThreeLargeButtons",
        responsive:true,
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:90,
        infoformat:"By %ARTIST% %ALBUM%<br />%INFO%",
        tracklistbackgroundimage:"",
        showloading:false,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:true,
        showvolumebar:true,
        imagefullwidth:false,
        width:90,
        showimage:false,
        showloop:false,
        volumeimage:"volume-24-24-0.png",
        playpauseimagewidth:90,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:90,
        titleinbarwidthmode:"fixed",
        forceflash:false,
        tracklistarrowimagewidth:48,
        playpauseimageheight:90,
        showbackgroundimage:false,
        stopimage:"stop-24-24-0.png",
        showvolume:false,
        playpauseimage:"playpause-90-90-0.png",
        forcehtml5:false,
        showprevnext:true,
        backgroundimage:"",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:false,
        titleinbarscroll:true,
        showtitle:false,
        defaultvolume:-1,
        showtitleinbar:false,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:false,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:80,
        noncontinous:false,
        stopotherplayers:true,
        showbarbackgroundimage:false,
        volumebarpadding:8,
        imagewidth:100,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        fullwidth:false,
        loop:1,
        tracklistitem:10
    });
});