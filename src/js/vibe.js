/* eslint-env es6 */
// some phrases
const vibes = [
    ' ... and you are awesome!',
    ' ... have a greate day!',
    ' ... and you\'ve got this!',
    ' ... and so is this puppy! (o^o)'
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

var vibeEl = document.querySelector(".vibe");
if (vibeEl) vibeEl.append(vibe);