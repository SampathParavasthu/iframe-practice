let text = document.querySelector('b');

window.addEventListener('message', (messageEvent) => {
  if (messageEvent.data && messageEvent.origin !== window.location.origin) {
    text.textContent = messageEvent.data;
  }
});
