const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

/**
 * Utilizes async await to eliminate the callback hell of the previous iteration
 * The '.finished' property returns a promise which resolves when the current animation is finished
 *    playing, thus making the next animation execute only when the current animation has completed.
 */
async function animateElement() {
  if (alice10 && alice20 && alice30) {
    try {
      await alice10.animate(aliceTumbling1, aliceTiming1).finished;
      await alice20.animate(aliceTumbling1, aliceTiming1).finished;
      await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    } catch (error) {
      alert(`Error when promising ... ${error}`);
    }
  } else{
    console.warn("#alice not found");
  }
}

animateElement();

/*if(alice10 && alice20 && alice30) {
  // Promise chain  
  alice10.animate(aliceTumbling1, aliceTiming1).finished  
    .then(() => {
        return alice20
                .animate(aliceTumbling1, aliceTiming1)
                .finished;     
    })
    .then(() => {
      return alice30
              .animate(aliceTumbling1, aliceTiming1)
              .finished;
    })
    .catch((err) => alert(`Error when promising ... ${err.message}`));
}
else{
  console.warn("#alice not found");
}*/

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  