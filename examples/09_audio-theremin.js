var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
var volume = context.createGain();
var active = false;

volume.gain.setValueAtTime(0, context.currentTime);

oscillator.connect(volume).connect(context.destination);
oscillator.start(0);

document.addEventListener('mousedown',function(e){on(e)})
document.addEventListener('mousemove',function(e){play(e)})
document.addEventListener('mouseup',function(e){off(e)})

function on(e){
    active = true;
    e.preventDefault()
    oscillator.frequency.setValueAtTime(~~(1000*(1-((e.clientY)/window.innerHeight))), context.currentTime);
    volume.gain.setValueAtTime(~~(e.clientX/window.innerWidth*100)/100, context.currentTime);
}


function play(e){
    e.preventDefault()
    if(active){
        oscillator.frequency.setValueAtTime(~~(1000*(1-((e.clientY)/window.innerHeight))), context.currentTime);
        volume.gain.setValueAtTime(~~(e.clientX/window.innerWidth*100)/100, context.currentTime);
    }
}

function off(e){
    active = false;
    volume.gain.setValueAtTime(0, context.currentTime);
}

