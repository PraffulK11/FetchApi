
let searchInput = document.getElementById('search-bar');
const container=document.createElement('div');
container.id="main";
let products = [];
let filteredProducts=[];
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
    products=data.products;
    console.log(products);
    display(products);
    
});



function display(products){
        container.innerHTML = ''; // clearing container
        products.forEach(element => {

        const cardContainer=document.createElement('div');
        cardContainer.classList.add("main-card");
        cardContainer.innerHTML='';
        const cards=`
          <h2>${element.title}</h2>
          <img src=${element.images[0]}>
          <p>${element.description}</p>
          <h3>Category:${element.category}</h3>
          <h3>Price:${element.price}</h3>
          <h4>rating:${element.rating}</h4>
        `;
        cardContainer.innerHTML=cards;
        /*
        const header=document.createElement('h2');
        header.innerText=element.title;
        cardContainer.appendChild(header);
        const image=document.createElement('img');
        image.src=element.images[0];
        cardContainer.appendChild(image);
        const desc=document.createElement('p');
        desc.innerText=element.description;
        cardContainer.appendChild(desc);
        const category=document.createElement('h2');
        category.innerText=`Category: ${element.category}`;
        cardContainer.appendChild(category);
        const price=document.createElement('h2');
        price.innerText=`Price: ${element.price}`;
        cardContainer.appendChild(price);
        const rating=document.createElement('h4');
        rating.innerText=`Rating: ${element.rating}`;
        cardContainer.appendChild(rating);
        */


        container.appendChild(cardContainer);
    });

    document.body.appendChild(container);
}

const showProducts = () => {
    let searchValue = searchInput.value.toLowerCase();
    console.log(searchValue);
    console.log(products);

    if (searchValue === "") {
        display(products); 
    } else {
        filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchValue)|| product.category.toLowerCase().includes(searchValue)
        );
        display(filteredProducts);
    }
}

searchInput.addEventListener('input', showProducts);


/*
***********************************************************************************************************************
var searchInput = document.getElementById('search-bar');
const container = document.createElement('div');
container.id = "main";
let products = [];
let filteredProducts = [];

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        products = data.products;
        //console.log(products);
        display(products);
    });

function display(products) {
    // Clear the container before displaying new products
    container.innerHTML = '';

    products.forEach(element => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add("main-card");
        const cards = `
          <h2>${element.title}</h2>
          <img src=${element.images[0]}>
          <p>${element.description}</p>
          <h3>Category:${element.category}</h3>
          <h3>Price:${element.price}</h3>
          <h4>Rating:${element.rating}</h4>
        `;
        cardContainer.innerHTML = cards;
        container.appendChild(cardContainer);
    });

    document.body.appendChild(container);
}

const showProducts = () => {
    let searchValue = searchInput.value.toLowerCase();
    console.log(searchValue);
    console.log(products);

    if (searchValue === "") {
        display(products); // If search input is empty, display all products
    } else {
        filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchValue)|| product.category.toLowerCase().includes(searchValue)
        );
        display(filteredProducts);
    }
}

// Call showProducts when search input changes
searchInput.addEventListener('input', showProducts);
*******************************************************************************************************************************
*/
