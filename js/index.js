const images = document.querySelectorAll('.image')
const btns = document.querySelectorAll('.btn i')
const dotsContainer = document.querySelector('.dots')

let imageNumber = 0
let currentImage = 0

images[currentImage].classList.add('active-image')

const addDataAttribute = (img) => {
    img.setAttribute('data-id', imageNumber)
    imageNumber += 1
}

const createDots = () => {
    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div')
        const dot = document.createElement('i')
        const dotActive = document.createElement('i')

        div.classList.add('dot')
        div.setAttribute('data-dot', i)
        dot.classList.add('fa-regular')
        dot.classList.add('fa-circle')
        dotActive.classList.add('fa-solid')
        dotActive.classList.add('fa-circle')
        dot.classList.add('active-dot')

        div.appendChild(dot)
        div.appendChild(dotActive)
        dotsContainer.appendChild(div)
    }
}

createDots()

const dots = document.querySelectorAll('.dot')
dots[currentImage].firstChild.classList.remove('active-dot')
dots[currentImage].lastChild.classList.add('active-dot')

const changeImage = (e) => {
    const btnPressed = e.target.getAttribute('data-btn')
    if (btnPressed) {
        dotPrev()
        images[currentImage].classList.remove('active-image')
        btnPressed === 'right' ? currentImage += 1 : null
        btnPressed === 'left' ? currentImage -= 1 : null
        currentImage === images.length ? currentImage = 0 : null
        currentImage < 0 ? currentImage = images.length - 1 : null
        images[currentImage].classList.add('active-image')
        dotNext()
    }
}

const changeDot = (e) => {
    const dotPressed = e.target.parentElement.getAttribute('data-dot')
    if (dotPressed) {
        for (let i = 0; i < images.length; i++) {
            if (parseInt(dotPressed) === i) {
                dotPrev()
                images[currentImage].classList.remove('active-image')
                currentImage = i
                images[currentImage].classList.add('active-image')
                dotNext()
            }
        }
    }
}

const dotPrev = () => {
    dots[currentImage].firstChild.classList.add('active-dot')
    dots[currentImage].lastChild.classList.remove('active-dot')
}

const dotNext = () => {
    dots[currentImage].firstChild.classList.remove('active-dot')
    dots[currentImage].lastChild.classList.add('active-dot')
}

images.forEach((image) => addDataAttribute(image))
btns.forEach((btn) => btn.addEventListener('click', changeImage))
dots.forEach((dot) => dot.addEventListener('click', changeDot))
changeDot()