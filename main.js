import './style.css'
import MySlider from './slider'

const imagesArray = [
  'https://images.unsplash.com/photo-1680428517644-0f6569346521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1679678691001-529c36fdfee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://plus.unsplash.com/premium_photo-1677288649820-a7bd079d102e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1659482633371-c51d3a02bc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

const appElement = document.getElementById('app')
const mySlider = new MySlider(appElement, imagesArray)

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('DOM is ready')
    mySlider.mount()
  } else {
    console.log('DOM is not ready, waiting ...')
  }
}
