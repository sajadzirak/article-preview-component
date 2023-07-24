const sharebtn = document.querySelector('#share-btn')
const shareOptions = document.querySelector('#share-options')
const info = document.querySelector('#info')
const author = document.querySelector('#author')


sharebtn.addEventListener('click', () => {
    shareOptions.classList.toggle('hidden')
    info.classList.toggle('hidden')
    if(!shareOptions.classList.contains('hidden')) {
        author.style.backgroundColor = 'hsl(217, 19%, 35%)'
    }
    else {
        author.style.backgroundColor = 'white'
    }
})