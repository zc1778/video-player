let videoTitle = document.getElementById("searchButton").onclick = function() {
    videoTitle = document.getElementById("videoTitle").value;
    console.log(videoTitle);
    if(videoTitle)
        window.location.href = "player.html";
}

document.getElementById("fruitninja").onclick = function() {
    window.location.href = "player.html";
}

// document.getElementById("vp").setAttribute("max-width: ");

const player = document.getElementById("vp");