// form validation
function formValidateData() {
    // value of the form element
    let name = document.getElementById('name').value; 
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let gender1 = document.querySelector('#gender1').checked 
    let gender2 = document.querySelector('#gender2').checked 
    let gender3 = document.querySelector('#gender3').checked
    let txtName = document.getElementById('txtName')
    let txtEmail = document.getElementById('txtEmail')
    let txtCpf = document.getElementById('txtCpf')
    let txtGenero = document.getElementById('txtGenero')    

    //variable of control
    let validation =  0
    
    // name validation 
    if (name.length > 0) {
      txtName.innerText = ('ok')
      txtName.classList.remove('spanValidationError')  
      validation++      
    }else{    
        txtName.innerText = ('* Preencher o campo corretamente!')
        txtName.classList.add('spanValidationError')  
    }

    // email validation
    if (email.indexOf('@') > -1 && email.indexOf('.') > -1 )  {
        txtEmail.innerText = ('ok')
        txtEmail.classList.remove('spanValidationError')   
        validation++ 
    }else{
        txtEmail.innerText = ('* Preencher o campo corretamente!')
        txtEmail.classList.add('spanValidationError') 
    }

    // cpf validation
    if (cpf.length === 11) {
        txtCpf.innerText = ('ok')
        txtCpf.classList.remove('spanValidationError') 
        validation++      
    }else{    
        txtCpf.innerText  = ('* Preencher o campo corretamente!')
        txtCpf.classList.add('spanValidationError') 
    }

    // gender validation
    if (gender1 != false || gender2 != false || gender3 != false) {
        txtGenero.innerText = ('ok')
        txtGenero.classList.remove('spanValidationError')
        validation++
    }else{
        txtGenero.innerText  = ('*')
        txtGenero.classList.add('spanValidationError') 
    }  

    // control variable validation and form submission 
    if (validation === 4) { 
        alert('Form accepted with success!')
        // frmCadastro.submit()      
    }else{
        console.log('error')
    }
}   

//variable of control
let page = 1

// fetch of API method GET
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
    .then(response => { response.json()
    .then(listProducts)
    
    }).catch (error => {
        console.log(error)
})    

// listing products coming from API
function listProducts(objeto) {
    let textHtml = document.querySelector('#sectionTwo')
    let produto = objeto.products.length
    const btn = document.querySelector('#buttonMoreProducts')

    for(let c = 0; c < produto; c++) {
        textHtml.innerHTML += ` 
        <div class="productBox" id="${objeto.products.id}">
            <div class="ProductImg" >
                <img src="${objeto.products[c].image}">
            </div>
            <div class="productInformation" >
                <h3  class="name">${objeto.products[c].name}</h3>
                <p class="description">${objeto.products[c].description}</p>
                <span class="oldPrice">De: R$${(objeto.products[c].oldPrice).toFixed(2).replace('.',',')}</span>
                <span class="price">Por: R$${(objeto.products[c].price).toFixed(2).replace('.',',')}</span>
                <span>ou ${objeto.products[c].installments.count}x de R$${(objeto.products[c].installments.value).toFixed(2).replace('.',',')} </span>
                <button type="menu">Comprar</button>       
            </div>
        </div> 
        `                    
    }

    if( page != 3 ) {
     page++      
        
    }else{
        btn.classList.add('hiddenButton')    
    }   
}

// fetch of API method GET next page
async function seeMoreProducts() {
    await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
    .then((response) => response.json())
    .then(listProducts)       
}   

// new friends form validation
function formValidateEmail() {
    // value of the form element
    let nameFriend = document.getElementById('nameFriend').value
    let emailFriend = document.getElementById('emailFriend').value
    let txtNameFriend = document.getElementById('txtNameFriend')
    let txtEmailFriend = document.getElementById('txtEmailFriend')

    //variable of control
    let validationFormEmail = 0

    // name validation
    if (nameFriend.length > 0) {
        txtNameFriend.innerText = ('ok')
        txtNameFriend.classList.remove('spanValidationError') 
        
        validationFormEmail++      
    }else{    
        txtNameFriend.innerText = ('* Preencher o campo corretamente!')
        txtNameFriend.classList.add('spanValidationError')  
    }

    // email validation
    if (emailFriend.indexOf('@') > -1 && emailFriend.indexOf('.') > -1 )  {
        txtEmailFriend.innerText = ('ok')
        txtEmailFriend.classList.remove('spanValidationError')
            
        validationFormEmail++ 
    }else{
        txtEmailFriend.innerText = ('* Preencher o campo corretamente!')
        txtEmailFriend.classList.add('spanValidationError') 
    }

    // control variable validation and form submission
    if (validationFormEmail === 2) { 
        alert('form accepted!')
        // formSectionThree.submit()

    }else {
        console.log('error')
    }
}