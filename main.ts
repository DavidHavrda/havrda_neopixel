let stripe: neopixel.Strip = neopixel.create(DigitalPin.P8, 24, NeoPixelMode.RGB)
let logopressed: boolean = false
let min: number = 0
let max: number = 99
let impnumber: number = 0
let rotspeed: number = 0
let x: number = 1
let paused: number = 1000
let sekundy: number = 0
stripe.showRainbow(5,355)

while(true) {
    stripe.rotate(x)
    stripe.show()
    basic.pause(paused)

    

    if (input.buttonIsPressed(Button.A) && rotspeed <= max) {
        rotspeed += 1
        impnumber += 1
         x += 1/25
         paused -= 10
         
       
    }

    if (input.buttonIsPressed(Button.B) && rotspeed > min) {
        rotspeed -= 1
        impnumber -= 1
        x -= 1/25
        paused += 10
       
       
    }

    if (input.logoIsPressed() && !logopressed) {
        rotspeed = rotspeed * -1  
        impnumber = impnumber * -1
        logopressed = true  
    }
    if (!input.logoIsPressed() && logopressed) {
        logopressed = false  
    }
    whaleysans.showNumber(impnumber)
}