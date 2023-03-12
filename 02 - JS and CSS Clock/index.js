
const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")




    setInterval(function(){
       const now = new Date()
        const second = now.getSeconds()
        const minute = now.getMinutes()
        const hour = now.getHours()
       
        secondHand.style.transform =`rotate(${(second*6)+90}deg)`
        minuteHand.style.transform =`rotate(${(minute*6)+90}deg)`
        hourHand.style.transform =`rotate(${(hour*30)+90}deg)`
    
      

console.log(second);
    },1000)

    // setInterval(function(){
        // if(b === 450){
        //     b = 90
        // }
    //     minuteHand.style.transform =`rotate(${b}deg)`
    //     b = b + 10
    // },1000)

    // setInterval(function(){
        // if(c === 450){
        //     c= 90
        // }
    //     hourHand.style.transform =`rotate(${c}deg)`
    //     c = c + 10
    // },1000)
