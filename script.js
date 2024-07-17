



function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation();

var tl=gsap.timeline();

tl.from("#loadtxt h1",{
    y:200,
    duration:0.6,
    stagger:0.6,
    delay:0.5
})

tl.from("#timer , #loadtxt h2",{
    opacity:0,
    duartion:2
})

tl.to("#loader",{
    opacity:0,
    delay:3
})

tl.from("#maintxt h1",{
    y:200,
    duration:0.6,
    delay:0.6,
    stagger:0.3
})



var tl4=gsap.timeline({
  scrollTrigger:{
    trigger:"#pagehighlight1",
    scroller:"#main",
    start:"top 10%",
    end:"top 8%",
    scrub:3,
  }
})

tl4.to("#main",{
  backgroundColor:"#0D0907",
})



var tl5=gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 10%",
    end:"top 8%",
    scrub:3,
  }
})

tl5.to("#main",{
  backgroundColor:"white"
})

tl5.from("#page2 h1",{
  y:200,
  duration:2
})



var tl6=gsap.timeline({
  scrollTrigger:{
    trigger:"#fakepage",
    scroller:"#main",
    start:"top 0%",
    end:"top -100%",
    scrub:3,
  }
})

tl6.to("#main",{
  backgroundColor:"purple",
})


gsap.to("#fakepage h1",{
  transform:"translateX(-75%)",
  scrollTrigger:{
    trigger:"#fakepage",
    scroller:"#main",
    start:"top 0%",
    end:"top -200%",
    scrub:5,
    pin:true,
  }
})

var tl7=gsap.timeline({
  scrollTrigger:{
    trigger:"#smallinfo h1",
    scroller:"#main",
    scrub:3,
  }
})

tl7.to("#main",{
  backgroundColor:"#F9E076",
  
})



var tl8=gsap.timeline({
  scrollTrigger:{
    trigger:"#pagezoom",
    scroller:"#main",
    scrub:3,
    pin:true
  }
})

tl8.from("#pagezoom",{
  scale:0
})



tl8.to("#pagezoom",{
  backgroundColor:"black"
})

tl8.to("#main",{
  backgroundColor:"#010101",
})


var t20=gsap.timeline();

t20.from("#finalhead h1",{
  duration:2,
  X:-200,
  opacity:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 10%",
    end:"top 8%",
    scrub:2,
  }
})

t20.from(".abcd",{
  duration:2,
  y:200,
  stagger:0.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 10%",
    end:"top 8%",
    scrub:2,
  }
})






var timer=document.querySelector("#increment")
var grow=0;
setInterval(function(){
    if(grow<100){
        timer.innerHTML=grow++;
    }

    else{
        timer.innerHTML=grow;
    }
},50);



var txt=document.querySelectorAll("#smallinfo h1");
txt.forEach(function(el){
    var line=el.textContent;
    var splitted=line.split("");
    var clutter="";
    splitted.forEach(function(x){
        clutter+=`<span>${x}</span>`;
    })
    el.innerHTML=clutter;
    console.log(clutter);
})

gsap.to("#smallinfo h1 span",{
    color:"black",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#smallinfo h1",
        start:"top 40%",
        end:"top -20%",
        scroller:"#main",
        scrub:1
    }
})

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("#top-left h2" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

function sheryAnimations(){

    Shery.imageEffect("#one",{
      style:4,
      config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":5,"range":[0,5]},"uFrequency":{"value":0.61,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666865348816},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    })
    Shery.imageEffect("#two", {
        style:2,
        gooey:true,
        config:{"uColor":{"value":false},"uSpeed":{"value":0.73,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666865348816},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.67,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.47,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}}
      });

    Shery.imageEffect("#three3",{
      style:4,
      config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":5,"range":[0,5]},"uFrequency":{"value":0.61,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666865348816},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    })

    Shery.imageEffect("#four", {
      style:2,
      gooey:true,
      config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":3},"modeA":{"value":1},"modeN":{"value":3},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.32,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    });


    Shery.makeMagnet("#top-left" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }





sheryAnimations();


  
  

