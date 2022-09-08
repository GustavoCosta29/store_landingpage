let page = 0

fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
    .then(response => { response.json()
    .then(listProducts)
    
    }).catch (error => {
        console.log(error)
})    


    
    




function listProducts(objeto) {
    let textHtml = document.querySelector('#section_two')
    let produto = objeto.products.length
    const btn = document.querySelector('#buttonMoreProducts')
    

    
    
    if( page === 3) {
        btn.classList.add('hiddenButton')    
    }else{
        for(let c = 0; c < produto; c++) {
            textHtml.innerHTML += ` 
            <div class="productBox" id="${objeto.products.id}">
            <img src="${objeto.products[c].image}">
            <h3  class="name">${objeto.products[c].name}</h3>
            <p class="description">${objeto.products[c].description}</p>
            <span class="old_price">De: R$${(objeto.products[c].oldPrice).toFixed(2).replace('.',',')}</span>
            <span class="price">Por: R$${(objeto.products[c].price).toFixed(2).replace('.',',')}</span>
            <span>ou ${objeto.products[c].installments.count}x de R$${(objeto.products[c].installments.value).toFixed(2).replace('.',',')} </span>
            <button type="menu">Comprar</button>       
            </div> 
            `  
              
        }
        page ++
        console.log(page)
    }
    
    
    
    

    
}




async function seeMoreProducts() {




await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
    .then((response) => response.json())
    .then(listProducts)
    
}

/* pagination e index */ 