const shareEl = document.querySelector('.share')
const shareBtn = document.querySelector('.share-toggle-btn')

shareBtn.addEventListener('click', () => {
  shareEl.classList.toggle('active')
})
