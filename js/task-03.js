const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


let markup = '';

const ulElem = document.querySelector('.gallery')

images.forEach(element => {
  markup += `<li><img src=${element.url} width = 700px alt='${element.alt}'></li>`
  
})
ulElem.insertAdjacentHTML('beforeend', markup)

ulElem.style.display = 'flex'
ulElem.style.gap = '30px'
ulElem.style.justifyContent = 'center'



console.log(ulElem)


console.log(markup)