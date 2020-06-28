let rate_cards = document.querySelectorAll(".rate-cards");
let url = window.location != window.parent.location ? document.referrer : document.location.href;
// Should have done this using css itself using radio's
rate_cards.forEach((rate_card) => {
  rate_card.addEventListener("click", () => {
    rate_cards.forEach((rate_card) => rate_card.classList.remove("active"));
    rate_card.classList.add("active");
    
    window.parent.postMessage(rate_card.querySelector('.rate').innerText, url);
  });
});
