let lazyImages= [...document.querySelectorAll(".b-lazy")]
let inAdvance = 300;
let key = "roaec_985";
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

function messageUs(name, price) {
localStorage.setItem(key,JSON.stringify({name: name, price: price}))
}

function readLocalStorage() {
  if(localStorage.getItem(key)) {
    let = item = JSON.parse(localStorage.getItem(key));
    document.getElementById("product").value = item.name + " @ " + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(item.price);
  }
}
readLocalStorage();
