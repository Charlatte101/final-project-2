console.log ('hello world')

let currentImgIndex = 0 

const images = ['images/Pic1.jpeg', 'images/Pic4.jpeg', 'images/Pic5.jpeg', 'images/Pic6.jpeg']


const mainImage = document.getElementById('mainImage')

mainImage.setAttribute('src', images[0])

const next = document.querySelector ('.next')

next.addEventListener('click', () => {
    if(currentImgIndex >= images.length - 1){
        currentImgIndex = 0
    } else {
        currentImgIndex += 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
  })

  const prev = document.querySelector ('.prev')

  prev.addEventListener('click', () => {
    if(currentImgIndex <= 0){
        currentImgIndex = images.length - 1 
    } else {
        currentImgIndex -= 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
  })

//   === Sign up form ==== //


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyGjrO4huxZmrMYT_YLYbFoXDEBBP6AU0yUejimQ8bvjW9h5k0/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code
        const email = document.getElementById('email')
        email.value = ""



            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})
