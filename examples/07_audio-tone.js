var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.setValueAtTime(220, context.currentTime);
oscillator.connect(context.destination);
oscillator.start(0);

