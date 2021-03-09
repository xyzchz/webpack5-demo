setTimeout(() => {
  history.pushState({}, '', '#322')
  window.dispatchEvent(e)
}, 1000);

const e = new Event('urlChange')

console.log(e)

setTimeout(() => {
  window.location.hash = 456
  window.dispatchEvent(e)
}, 2000);

window.addEventListener('urlChange', function(event) {
  console.log(window.location)
})