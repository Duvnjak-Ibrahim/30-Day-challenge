
const keyArray = [65,83,68,70,71,72 ,74 , 75, 76,]
window.addEventListener("click",function(e){
    const key = e.target.parentElement.dataset.key
    
    this.document.querySelectorAll("audio").forEach( function (sound){ 
        
        if(sound.dataset.key === key){
            e.target.parentElement.classList.add("playing") 
            setTimeout(function(){
                e.target.parentElement.classList.remove("playing") 

            },100)
          sound.play()
        }

        // ************* keys

})





})
window.addEventListener("keydown",function(e){
    // clikced key
    const sound = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!sound) return;
    sound.currentTime = 0
    sound.play()
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")
    setTimeout(() => {
        key.classList.remove("playing")
    }, 100);

    }   )