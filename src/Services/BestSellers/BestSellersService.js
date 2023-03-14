const bestSeller =[
    {
        id:'9',
        title:'Cuadrado de frutilla',
        price:'600',
        description:'Masa de ojaldre relleno de crema, dulce de leche, frutilla,crema chantilly.',
        img: require('../../Img/pasteleria/strawberry-2103278_1920.png')
    },
    {
        id:'10',
        title:'Cheesecake New York',
        price:'600',
        description:'Base de masa sable rellena de queso crema con un topping de frutos rojos.',
        img: require('../../Img/pasteleria/patisserie-2658077_1920.png')
    },
    {
        id:'11',
        title:'Torta Red Velvet',
        price:'600',
        description:'Pastel de terciopelo rojo, con un relleno de frosting de queso, con glaseado.',
        img: require('../../Img/reposteria/red-velvet-cake-4917734_960_720.png')
    },  
    {
        id:'12',
        title:'Torta de Chocolate',
        price:'600',
        description:'Torta de chocolate, rellena de crema bariloche, decorada conchocolate.',
        img: require('../../Img/reposteria/sweets-4367937_1920.png')
    },
]
export const getBestSeller = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(bestSeller)
        },1500)
    })
}