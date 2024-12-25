let collapsibleItemEls = document.querySelectorAll('.collapsible-item')
let collapsibleDescriptionItems = document.querySelectorAll('.collapsible-item p')
console.log(collapsibleItemEls)


collapsibleItemEls.forEach(el => {
    let pEl = el.querySelector('p')
    pEl.hidden = true;
    el.addEventListener('click', () => {
      pEl.hidden = !pEl.hidden
    })
  }
)