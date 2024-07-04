## Playing More Notes in Sequence
- Note frequencies in Tone.js can be given in Hz or with note names, like A4.
- This note names correspond to keys on a keyboard.
    - [ C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4]
    - C4 is known as _middle_ C and is located enar the middle of most piano keyboards
    - Each octave on the keyboard from each C to the B above is a given number. 
    - For example, the leftmost key is C3, and an octave above that is C4.


## The Tone.js -> Transport
  - You could program a whole song by specifying the timing of every single note, as you did to play a scale in the last 
  few examples, this technique quickly gets tedious

  - Fortunately, Tone.js has a concept called the **transport** that makes writing songs much easier.
  - The **transport** keeps track of the current position in the song, as measure in **bars** and **beats**.
    - This lets you schedule notes to play at certain points in the song in a musically intuitive way.
    - The transport also allows you to have looped sequences of notes that start playing at a certain point
    along the transport and repeat over and over until you tell them to stop.

  - Western music tends to be structured around **bars** and **beats**, and it's most common to have *four* **beats** in a **bar**.
    - The speed of the music is given in *beats per minute* (BPM).
    - The default Tone.js BPM is 120
      - which means a **beat** every 0.5 seconds
    - **Beats** are also known as **quarter notes**
      - This is because when there are ***four beats*** in a bar, one **beat** is a quarter of a **bar**
      - **Eighth notes** are half the duration of a quarter note, **sixteenth notes** are half the duration of 
      an eighth note, so there are four sixteenth notes per **quarter note**.
    
    ### Positions
    -  **Positions** along the *transport* are given as ***strings*** of three numbers separarted by colons, like "0:0:0"
      - The three numbers correspond to the current bar number, the current beat within that bar, and the current sixteenth
      note within that beat, respectively. 
      - Everything is **zero-indexed**
        - This means, for example, that "0:0:0" represents the beginning of the first bar,
        "1:1:0" represents the second beat of the second bar, and
        "6:3:2" refers to the third sixteenth note of the fourth beat in the seventh bar.
      - We refer to these strings as **bars:quarters:sixteenths notation**.
    ## Tone.Loop
    - The Tone.js transport gives us an easy way to define musical loops, including when they start and when they finish.
    - The simplest of these, Tone.Loop, defines a way to constantly produce new notes.

  