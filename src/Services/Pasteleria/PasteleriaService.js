const pasteleria = [
    {
        id:'1',
        title:'Pie de Arandanos',
        price:'600',
        description:'Pie de Arandanos con una base de masa quebrada y un rellenode crema pastelera',
        img:'../../Img/pasteleria/blueberries-3946230_1280.png'
    },
    {
        id:'2',
        title:'Tota Opera',
        price:'600',
        description:'Bizcochuelo de vainilla relleno con crema de cafe y chocolate,cubierto de ganache.',
        img:'../../Img/pasteleria/cake-1775964_1920.png'
    },
    {
        id:'3',
        title:'Tarta Multifruta',
        price:'600',
        description:'Masa sable rellena de crema diplomata cubierta de crema chantilly, frutas de estación.',
        img:'../../Img/pasteleria/cake-4910417_1280.png'
    },  
    {
        id:'4',
        title:'Petit Fours',
        price:'600',
        description:'Mini torta de vainilla rellena de crema chantilly,frutillas frescas,en distintas presentaciones.',
        img:'../../Img/pasteleria/dessert-352475_1280.png'
    },
    {
        id:'5',
        title:'Macarrones',
        price:'600',
        description:'Postre hecho con clara de huevo,harina de almendras,diversos rellenosy presentaciones.',
        img:'../../Img/pasteleria/macarons.jpg'
    },
    {
        id:'6',
        title:'Profiteroles',
        price:'600',
        description:'Masa pasta choux rellena de crema pastelera y vainilla o de chocolate,cubierto con caramelo.',
        img:'../../Img/pasteleria/patisserie-1023501_1920.png'
    },
    {
        id:'7',
        title:'Mini Gateaux',
        price:'600',
        description:'Mini postres a base de masa sable, o bizcochuelode sabores surtidos, frutilla, chocolate.',
        img:'../../Img/pasteleria/sweets-in-the-window-4962134_1920.png'
    },
    {
        id:'8',
        title:'Cuadrado de frutilla',
        price:'600',
        description:'Masa de ojaldre relleno de crema, dulce de lechefrutilla, y crema chantilly saborizada.',
        img:'../../Img/pasteleria/strawberry-2103278_1920.png'
    },
]
export const getPasteleria = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(pasteleria)
        },1500)
    })
}