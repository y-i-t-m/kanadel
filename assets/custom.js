/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


//　外部のサイトへ飛ぶ際は、target="_blank"になるように設定
let links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}

const fadeSection = document.getElementById("fadeSection");
const options = {
  root: null,
  rootMargin: "0px 0px -30%",
  threshold: 0
}

const fadeIn = (target) => {
  target.classList.add('op');
};

const observeUse = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeIn(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observeUse, options);
observer.observe(fadeSection);