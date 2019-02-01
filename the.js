var text = ['kaioneill coming soon', 'maybe'];
var which = true;
window.onclick = function(e) {
  e.preventDefault();
  document.querySelector('#greeting').innerHTML = text[(which ? 1 : 0)];
  which = !which;
}
