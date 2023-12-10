function showInput() {
    const giveData = document.getElementById("giveData");
    console.log(giveData);
    if (giveData.classList.contains("hidden")) {
        giveData.classList.remove("hidden");
    } else {
        giveData.classList.add("hidden");
    }
}

function closeInput() {
    
    const giveData = document.getElementById("giveData");
    giveData.classList.add("hidden");
}

function removeFernImage() {
    const fernImage = document.getElementById("fernGif");
    fernImage.remove()
}


window.onload = function() {
    const fernImage = document.getElementById("fernGif");
    fernImage.src = "./Fern-4.gif?=" + Math.random();
    
}

window.setTimeout(removeFernImage, 6300);