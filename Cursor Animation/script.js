var main =document.querySelector("#main");
var cursor =document.querySelector("#cursor");
var img = document.querySelector("#img")

main.addEventListener("mousemove",function(e){
    // console.log("mouse moved x:"+e.x+" y: "+e.y);
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1,
        ease:"elastic.out"
    })
})
img.addEventListener("mouseenter",function(e){
gsap.to(cursor,{
    scale:3,
    duration:0.7,
    opacity:0.45
})})

img.addEventListener("mouseleave",function(e){
gsap.to(cursor,{
    scale:1,
    duration:1,
})})
