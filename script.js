const shareEl = document.querySelector('.share')
const shareBtn = document.querySelector('.share-btn')
const shareBtnDark = document.querySelector('.share-btn--dark')

shareBtn.addEventListener('click', () => {
  shareEl.classList.add('active')
})

shareBtnDark.addEventListener('click', () => {
  shareEl.classList.remove('active')
})
