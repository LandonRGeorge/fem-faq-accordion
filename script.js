let collapsibleItemEls = document.querySelectorAll('.collapsible-item')

collapsibleItemEls.forEach(el => {
    let imgEl = el.querySelector('img');
    el.addEventListener('click', () => {
      el.classList.toggle('plus')
      if (el.classList.contains('plus')) {
        imgEl.setAttribute('src', './assets/images/icon-plus.svg')
      } else {
        imgEl.setAttribute('src', './assets/images/icon-minus.svg')
      }
    })
  }
)