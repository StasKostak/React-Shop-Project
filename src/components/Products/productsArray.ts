type ProductsProps = {
    title:string
    desc:string
    type:string
    capacity:string
    price:number
}


const productsArray:ProductsProps []= [
    {
        title:"iPhone X",
        desc: "this is iPhone X",
        type: "6.4",
        capacity:"64",
        price: 500,
    },
    {
        title:"iPhone XS",
        desc: "this is iPhone XS",
        type: "6",
        capacity:"128",
        price: 1000,
    },
    {
        title:"Samsung s21",
        desc: "this is Samsung s21",
        type: "6.6",
        capacity:"512",
        price: 1500,
    },
    {
        title:"iPhone XR",
        desc: "this is iPhone XR",
        type: "6.1",
        capacity:"256",
        price: 700,
    },
    {
        title:"Xiaomi",
        desc: "this is readmi 5",
        type: "6.1",
        capacity:"256",
        price: 700,
    },{
        title:"Nokia",
        desc: "this is 3310",
        type: "2",
        capacity:"2",
        price: 7000,
    },
]

export default productsArray
