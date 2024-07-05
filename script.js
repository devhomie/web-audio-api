//////////////////////////////////////////////////////////////////////
//           Instruments 
//////////////////////////////////////////////////////////////////////

function mkDrums(){
  let reverb = new Tone.Reverb({
    decay: 1,
    wet: 0.3
  }).toDestination();

  let hiHatFilter = new Tone.Filter(15000, "bandpass").connect(reverb);

  let hiHat = new Tone.NoiseSynth({
    envelope: {
      attack: 0.001, decay: 0.1, sustain: 0, release: 0
    },
    volume: -6
  }).connect(hiHatFilter);

  class Snare {
    constuctor(){
      this.noiseFilter = new Tone.Filter(5000, "bandpass").connect(reverb);
      this.noiseSynth = new Tone.NoiseSynth({
        envelope:{
          attack: 0.001, decay: 0.1, sustain: 0, release: 0
        },
        volume: -12
      }).connect(this.noiseFilter);
      
      this.synth = new Tone.Synth({
        envelope: {
          attack: 0.0001, decay: 0.1, sustain: 0, release: 0
        },
        oscillator: {type: "sine"},
        volume: -12
      }).connect(reverb);
    }
    
  }


  let snare = new Snare();

  let kick = new Tone.MembraneSynth({
    pitchDecay: 0.02,
    octaves: 6,
    volume: -9
  }).connect(reverb);
  
  return { hiHat, snare, kick};
}


let drums = mkDrums();




//////////////////////////////////////////////////////////////////////
//            Sequencing
//////////////////////////////////////////////////////////////////////

// Converts a string to an array of notes or nulls
// Dots in the string become nulls in the array and are silent.
function mkSequence(pattern){
  return pattern.split("").map(value =>{
    if (value == "."){
      return null;
    } else {
      return value;
    }
  });
}

let drumPattern = {
  kick: "x...x...",
  snare: "..x...x.",
  hiHat: "xxxxxxxx",
};

let hiHatSequence = new Tone.Sequence(time => {
  drums.hiHat.triggerAttackRelease("16n", time);
}, mkSequence(drumPattern.hiHat), "8n");

let snareSequence = new Tone.Sequence(time =>{
  drums.snare.triggerAttackRelease("16n", time);
}, mkSequence(drumPattern.snare), "8n");

let kickSequence = new Tone.Sequence(time => {
  drums.kick.triggerAttackRelease(50, "16n", time);
}, mkSequence(drumPattern.kick), "8n");

//////////////////////////////////////////////////////////////////////
//            Song  
//////////////////////////////////////////////////////////////////////

hiHatSequence.start("0:0:0").stop("44:0:0");
snareSequence.start("0:0:0").stop("44:0:0");
kickSequence.start("0:0:0").stop("44:0:0")


//////////////////////////////////////////////////////////////////////
//            Event Handling
//////////////////////////////////////////////////////////////////////

let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
  // Hide this button
  play.style = "display: none";
  playing.style = "";

  Tone.start();

  // Modify this to start playback at a different part of the song
  Tone.Transport.position = " 0:0:0";
  Tone.Transport.start();

});