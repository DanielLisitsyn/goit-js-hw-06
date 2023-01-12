const list = document.querySelector('#categories');

console.log(`Number of categories ${list.children.length}`)

const totalItems = [...document.querySelectorAll('.item')];
// console.log(totalItems)

totalItems.forEach((element) => {
   const title = element.querySelector('h2')
    console.log(`Categorie: ${title.textContent}`)
    
    const elements = element.querySelector('ul') 
    console.log(`Elements: ${elements.children.length} `)
})




