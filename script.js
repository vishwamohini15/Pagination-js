const products=[
     {
          id:1,
          image:'images/1.webp',
          title:'girls shirt',
          price:120,
          category:'cloth'
     },
     {
          id:1,
          image:'images/2.webp',
          title:'girls kurti collection',
          price:80,
          category:'cloth'
     }, 
     {
          id:1,
          image:'images/3.webp',
          title:'Winter collection',
          price:60,
          category:'cloth'
     },
     {
          id:2,
          image:'images/4.webp',
          title:'girls footwear',
          price:60,
          category:'shoes'
     },{
          id:2,
          image:'images/5.webp',
          title:'girl with shoes',
          price:60,
          category:'mobile'
     },{
          id:2,
          image:'images/6.jpg',
          title:'mobile colection',
          price:60,
          category:'mobile'
     },{
          id:3,
          image:'images/7.webp',
          title:'hotel decoration',
          price:1000,
          category:'decration'
     },{
          id:3,
          image:'images/8.webp',
          title:'cup-plate Set',
          price:160,
          category:'plate'
     },{
          id:3,
          image:'images/9.webp',
          title:'smart watch',
          price:600,
          category:'watch'
     },
]

const categories=[...new Set(products.map((item)=>
     {return item}
))]

const displayItem=(items)=>{
     document.getElementById("root").innerHTML=items.map((item)=>
          {
           var {image,title,price}=item;
           return(
               `<div class='box'>
               <div class='img-box'>
               <img class='images' src=${image}></img>
               </div>
               <div class='bottom'>
               <p> ${title}</p>
               <h2>$ ${price}.00</h2>
               <button>Add to cart</button>
               </div>
               </div>`
           )

     }).join('');
};

const filterfirstcategories= categories.filter(item);
function item(value){
     if(value.id==1){
          return(
               value.id
          )
     }
}
displayItem(filterfirstcategories)

const btns=[
     {
          id:1,
          name:'<<'
     },
     {
          id:1,
          name:'1'
     },
     {
          id:2,
          name:'2'
     },
     {
          id:3,
          name:'3'
     },
     {
          id:3,
          name:'>>',
     },
]

const filters=[...new Set(btns.map((btn)=>
    { return btn}
))]

document.getElementById("btns").innerHTML=filters.map((btn)=>{
     var {name,id}=btn;
     return(
         "<button class='fill-p' onclick='filterItems("+ (id) + ")'>"+(name)+ "</button>"

)
}).join('')

const filterItems=(a)=>{
     const filtercategories=categories.filter(item)
     function item(value){
          if(value.id==a){
               return(
                    value.id
               )
          }
     }
     displayItem(filtercategories)
}




