let lazyImages= [...document.querySelectorAll(".b-lazy")]
let inAdvance = 300;
function lazyLoad() {
  // console.log(lazyImages.length)
  lazyImages.forEach(image => {
    if(image.offsetTop < window.innerHeight + window.pageYOffset + 300){
      image.src = image.dataset.src;
    }
  })
}

lazyLoad();

window.addEventListener("scroll",_.throttle(lazyLoad,50));
window.addEventListener("resize",_.throttle(lazyLoad,50));

// numbers
let numbers = [...document.querySelectorAll(".number")]
function formatNumbers() {
  numbers.forEach(num => {
    const val = num.innerHTML;
    num.innerHTML  = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(val)
  })
}
formatNumbers();
// const option = {
//   root: document.querySelector('.section-padding'),
//   rootMargin: '0px 0px 200px 0px'
// }
// /**
//   Function
// **/
// function onInterSection(imagesEntities) {
//   imagesEntities.forEach(image => {
//     if(image.isIntersecting){
//       observer.unoberve(image.target);
//       image.target.src = image.target.dataset.src;
//     }
//   })
// }
//
// let observer = new IntersectionObserver(onInterSection, option)
//
// lazyImages.forEach(image => observer.observe(image));
