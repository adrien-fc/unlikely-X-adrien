export default class MySlider {
  constructor(rootElement, images) {
    this.rootElement = rootElement
    this.images = images
    this.state = {
      currentSlide: 0
    }

    this.sliderElement = null
    this.prevButton = null
    this.nextButton = null
    this.mountButton = null
  }

  setState = newState => {
    this.state = newState
    this.updateSlider()
  }

  updateSlider = () => {
    const wrapper = this.sliderElement.querySelector('.slider__wrapper')
    wrapper.style.transform = `translateX(-${this.state.currentSlide * 100}%)`

    this.handleActiveClass()
  }

  handleActiveClass = () => {
    const allSlideItem = this.sliderElement.querySelectorAll('.slider__item')
    allSlideItem.forEach(item => {
      item.classList.remove('active')
      if (item === allSlideItem[this.state.currentSlide]) {
        item.classList.add('active')
      }
    })

    const allSlideFractionItem = this.sliderElement.querySelectorAll('.slider__fraction-item')
    allSlideFractionItem.forEach(item => {
      item.classList.remove('active')
      if (item === allSlideFractionItem[this.state.currentSlide]) {
        item.classList.add('active')
      }
    })
  }

  handlePrev = () => {
    const currentIndex = this.state.currentSlide
    const newIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1
    this.setState({ currentSlide: newIndex })
  }

  handleNext = () => {
    const currentIndex = this.state.currentSlide
    const newIndex = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1
    this.setState({ currentSlide: newIndex })
  }

  mount = () => {
    console.log('Mounting the slider')
    this.render()
    this.updateSlider()

    if (this.mountButton) {
      this.rootElement.removeChild(this.mountButton)
    }
  }

  unmount = () => {
    console.log('Unmounting the slider')
    this.prevButton.removeEventListener('click', () => this.handlePrev())
    this.nextButton.removeEventListener('click', () => this.handleNext())
    this.rootElement.removeChild(this.sliderElement)

    this.renderMountButton()
  }

  renderMountButton = () => {
    this.mountButton = document.createElement('button')
    this.mountButton.innerText = 'Mount'
    this.mountButton.classList.add('mount-button')
    this.mountButton.addEventListener('click', () => this.mount())
    this.rootElement.appendChild(this.mountButton)
  }

  render = () => {
    const sectionSlider = document.createElement('section')

    sectionSlider.innerHTML = `
      <div class="slider">
        <div class="slider__wrapper">
        ${this.images
          .map(
            (image, index) => `<div class="slider__item">
            <img src="${image}" class="slider__item-image" alt="descriptionimage-${index}" />
          </div>`
          )
          .join('')}
        </div>
      <div class="slider__controls">
        <button class="prev-button">Previous</button>
        <button class="next-button">Next</button>
      </div>
      <div class="slider__fraction">
      <div class="slider__fraction-wrapper">
      ${this.images
        .map((image, index) => `<span class="slider__fraction-item"> ${index + 1}</span> `)
        .join('')}
      </div>
        <span class="slider__fraction-separator">/</span>
        <span class="slider__fraction-total">${this.images.length}</span>
      </div>
      <button class="unmount-button">Unmount</button>
    `

    this.prevButton = sectionSlider.querySelector('.prev-button')
    this.nextButton = sectionSlider.querySelector('.next-button')
    const unmountButton = sectionSlider.querySelector('.unmount-button')

    this.prevButton.addEventListener('click', () => this.handlePrev())
    this.nextButton.addEventListener('click', () => this.handleNext())
    unmountButton.addEventListener('click', () => this.unmount())

    this.sliderElement = sectionSlider

    this.rootElement.appendChild(this.sliderElement)
  }
}
