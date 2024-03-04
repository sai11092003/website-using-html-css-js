
const wrapper=document.querySelector(".sliderWrapper");
const menuitems=document.querySelectorAll(".menuitem");
const cc=document.querySelectorAll(".color");
const ss=document.querySelectorAll(".size");
const close=document.querySelector(".close");
const pp=document.querySelector(".productButton");
const pay=document.querySelector(".payment");

const product=[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"air.png"
            },
            {
                code:"darkblue",
                img:"air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "jordan.png",
          },
          {
            code: "green",
            img: "jordan2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "blazer.png",
          },
          {
            code: "green",
            img: "blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "crater.png",
          },
          {
            code: "lightgray",
            img: "crater2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "hippie.png",
          },
          {
            code: "black",
            img: "hippie2.png",
          },
        ],
      },
];
let choosen_product=product[0];
const crntproducttitle=document.querySelector(".productTitle")
const crntproductimg=document.querySelector(".productImg")
const crntproductPrice=document.querySelector(".productPrice")
const crntproductcolor=document.querySelectorAll(".color")
const crntproductsizes=document.querySelectorAll(".size")

menuitems.forEach((item,index) => {
    item.addEventListener("click",() => {
        wrapper.style.transform=`translateX(${index*-100}vw)`;
        choosen_product=product[index];
        crntproductimg.src=choosen_product.colors[0].img;
        crntproducttitle.textContent=choosen_product.title;
        crntproductPrice.textContent="$"+choosen_product.price;
        crntproductcolor.forEach((color,ind)=>{
            color.style.backgroundColor=choosen_product.colors[ind].code;
        })

    });
});
cc.forEach((ii,index)=>{
ii.addEventListener("click",()=>{
    crntproductimg.src=choosen_product.colors[index].img;
});
});
ss.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        crntproductsizes.forEach((size)=>{
                size.style.backgroundColor = "white";
                size.style.color = "black";
        });
            size.style.backgroundColor = "black";
            size.style.color = "white";
    });
});
pay.style.display="none";
pp.addEventListener("click",()=>
{
    pay.style.display="flex";
});
close.addEventListener("click",()=>
{
    pay.style.display="none";
});