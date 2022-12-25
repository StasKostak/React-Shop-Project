type ProductsProps = {
    id:number
    title:string
    desc:string
    type:string
    capacity:string
    price:number
    image:string
}


const productsArray:ProductsProps []= [
    {
        id:1,
        title:"iPhone X",
        desc: "this is iPhone X",
        type: "6.4",
        capacity:"64",
        price: 500,
        image:"/images/phone1.jpg",
    },
    {
        id:2,
        title:"iPhone XS",
        desc: "this is iPhone XS",
        type: "6",
        capacity:"128",
        price: 1000,
        image:"/images/phone2.jpg",
    },
    {
        id:3,
        title:"Samsung s21",
        desc: "this is Samsung s21",
        type: "6.6",
        capacity:"512",
        price: 1500,
        image:"/images/s21.jpg",
    },
    {
        id:4,
        title:"iPhone XR",
        desc: "this is iPhone XR",
        type: "6.1",
        capacity:"256",
        price: 700,
        image:"/images/phone3.jpg",
    },
    {
        id:5,
        title:"Xiaomi",
        desc: "this is readmi 5",
        type: "6.1",
        capacity:"256",
        price: 700,
        image:"/images/mi10.jpg",
    },{
        id:6,
        title:"Nokia",
        desc: "this is 3310",
        type: "2",
        capacity:"2",
        price: 7000,
        image:"/images/n3310.jpg",
    },
]

export default productsArray
