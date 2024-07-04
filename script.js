let play = document.querySelector("#play");
let playing = document.querySelector("#playing");
play.addEventListener("click", () => {
  //Hide this button
  play.style = "display: none";
  playing.style = "";

Tone.start();

let synth = new Tone.Synth().toDestination();

new Tone.Loop(time =>{
  synth.triggerAttackRelease("C4", "16n", time);
}, "4n").start("0:0:0").stop("4:0:0");

Tone.Transport.start();
});
