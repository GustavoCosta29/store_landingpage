let page = 0

async function getProducts() {
    
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`

    await fetch(url)
        .then(response => { response.json()
        .then(data => {
        listProducts(data.products)    
        }).catch (error => {
            console.log(error)
        })    
    })
    
    
    
}

getProducts()

function listProducts(products) {
    let textHtml = '' 

    for(let product of products) {
        textHtml += `
        <div class="productBox" id="${product.id}">
            <img src="${product.image}">
            <h3  class="name">${product.name}</h3>
            <p class="description">${product.description}</p>
            <span class="old_price">De: R$${(product.oldPrice).toFixed(2).replace('.',',')}</span>
            <span class="price">Por: R$${(product.price).toFixed(2).replace('.',',')}</span>
            <span>ou ${product.installments.count}x de R$${(product.installments.value).toFixed(2).replace('.',',')} </span>
            <button type="menu">Comprar</button>       
        </div> 
        `
        
    }

    document.querySelector('#section_two').innerHTML = textHtml
}

