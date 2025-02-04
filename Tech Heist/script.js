var tl = gsap.timeline()

tl.from(".main-heading .title",{
    x:-300,
    opacity:0,
    duration:1,
    delay:1
})
tl.from(".main-heading .subtitle",{
    x:300,
    opacity:0,
    duration:1,
})
tl.from(".login-form",{
    y:100,
    opacity:0,
    duration:1,
    delay:1
})