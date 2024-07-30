function breakText(){
    var h1 = document.querySelector("#main h2")
    var splitedText= h1.textContent.split("")
    var half =Math.floor( splitedText.length/2)
    var clutter=""

    splitedText.forEach(function(e,i){
        if(i<half){
        clutter+= `<span class="a">${e}</span>`}
    else{
        clutter+=`<span class="b">${e}</span>`
    }})
    h1.innerHTML=clutter
}   
breakText();

gsap.from(".a",{
    y:50,
    stagger:0.12,
    duration:0.8,
    delay:0.3,
    opacity:0,
    scale:0.4
})
gsap.from(".b",{
    y:50,
    stagger:-0.12,
    duration:0.8,
    delay:0.35,
    opacity:0,
    scale:0.4
})
