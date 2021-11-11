const shareEl = document.querySelector('.share')
const shareBtn = document.querySelector('.share-toggle-btn')

shareBtn.addEventListener('click', () => {
  if (shareEl.classList.contains('active')) {
    shareEl.classList.remove('active')
  } else {
    shareEl.classList.add('active')
  }
})
