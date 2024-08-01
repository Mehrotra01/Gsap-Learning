window.addEventListener("wheel",function(e){
    if(e.deltaY>0){
        console.log("sidha");
        gsap.to(".marque",{
            transform:"translateX(-200%)",
            ease:"none",
            duration:4,
            repeat:-1
        })
        gsap.to(".marque img",{
            rotate:-180
        })
    }else{
        console.log("ulta");
        gsap.to(".marque",{
            transform:"translateX(-10%)",
            ease:"none",
            duration:4,
            repeat:-1
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }
})

