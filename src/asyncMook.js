const products = [
    {id:'1', name:'Iphone 14', price: 485000, category: 'Iphone', img:'/images/Iphone14.jpg', stock: 10, description:'Iphone 14 128GB - Purple'},
    {id:'2', name:'Iphone 13', price: 386790, category: 'Iphone', img:'/images/Iphone13.jpg', stock: 20, description:'Iphone 13 256GB - Midnight, Blue'},
    {id:'3', name:'Iphone 12', price: 251790, category: 'Iphone', img:'/images/Iphone12.jpg', stock: 30, description:'Iphone 12 128GB - Midnight, Blue'},
    {id:'4', name:'Macbook Air', price: 299999, category: 'Macbook', img:'/images/Macbook.jpg', stock: 10, description:'Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Oro'},
    {id:'5', name:'Ipad Air', price: 143000, category: 'Ipad', img:'/images/Ipad.jpg', stock: 20, description:' iPad Air de 10.9" WI-FI 64GB Gris espacial (4ª generación)'}
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === idCategory))
        }, 500)
    })
}