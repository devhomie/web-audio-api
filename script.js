let play = document.querySelector("#play");
let playing = document.querySelector("#playing");
play.addEventListener("click", () => {
  //Hide this button
  play.style = "display: none";
  playing.style = "";

Tone.start();

let synth = new Tone.Synth({
  oscillator: { type: "square"},
  envelope: { attack: 0.8, decay: 0.3, sustain: 0.8, release: 1},
  volume: -6
}).toDestination();

synth.triggerAttackRelease("A4", 2, 0)


});
