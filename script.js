fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{
    rendorUi(data);
}).catch(err => console.log(err));

function rendorUi(data){
   /* const products=data.products;
    const title=products[0].title;
    const brand=products[0].brand;
    const category=products[0].category;
    const image=products[0].images;
    const price=products[0].price;
    console.log(title);
    console.log(brand);
    console.log(category);
    console.log(price);
    console.log(image);
    */
    const rootEle=document.getElementById("container");
    const product1 = data.products[0]; 

    const card = `
        <h3>${product1.title}</h3>
        <img src="${product1.thumbnail}" alt="${product1.title}">
        <p><strong>Brand:</strong> ${product1.brand}</p>
        <p><strong>Category:</strong> ${product1.category}</p>
        <p><strong>Price:</strong> ${product1.price}</p>
    `;
    rootEle.innerHTML = card;
    
}
