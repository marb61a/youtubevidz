$(document).ready(function(){
    document.addEventListener('deviceready', onDeviceReady, false);
});

function onDeviceReady(){
    var channel = '';
    
    getPlayList(channel);
}

function getPlaylist(channel){
    $('#vidlist').html('');
    
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
            
        }
        );
}

function getVideos(playlistId, maxResults){
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
            
        }
        );
}