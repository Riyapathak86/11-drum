        var numberOfDrumButtons = document.querySelectorAll(".drum").length;
        console.log(`no of length is ${numberOfDrumButtons}`);
        for (var i = 0; i < numberOfDrumButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML; 
        var audio;
        var button = this;
        button.style.color = "white";
        switch (buttonInnerHTML) {
        case "w":
        audio = new Audio('sounds/tom-1.mp3');
        break;
        case "a":
        audio = new Audio('sounds/tom-2.mp3'); 
        break;
        case "s":
        audio = new Audio('sounds/tom-3.mp3'); 
        break;
        case "d":
        audio = new Audio('sounds/tom-4.mp3'); 
        break;
        case "j":
        audio = new Audio('sounds/snare.mp3'); 
        break;
        case "k":
        audio = new Audio('sounds/kick-bass.mp3'); 
        break;
        case "l":
        audio = new Audio('sounds/crash.mp3'); 
        break;
        default:
        console.log("No sound assigned for this button");
        
        audio.play();
        return;
        }

        audio.play();
    });
}
