import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products,onAdd,onDelete}) => {
    const title = "Novi naslov proizvoda iz Products komponente!";
    const desc = "Novi opis proizvoda iz Products komponente!";

    const product = {
        title:"Naziv proizvoda iz Product kroz JS objekat!",
        description:"Naziv proizvoda iz Product kroz JS objekat!"
    }

    // const products = [
    //   {
    //     id:1,
    //     title:"Chocolate",
    //     description:"Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy!",
    //     amount:0
    //   },
    //   {
    //     id:2,
    //     title:"Lollypop",
    //     description:"Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
    //     amount:0,
    //   },
    //   {
    //     id:3,
    //     title:"Ice Cream",
    //     description:"Ice cream is a switened frozen food typically eaten as a snack or dessert."
    //   }
    // ]

  return (
    <div className='all-products'>
        {/* <OneProduct prodTitle={title} prodDesc={desc}></OneProduct>
        <OneProduct prodTitle={title} prodDesc={desc}></OneProduct>
        <OneProduct prodTitle={title} prodDesc={desc}></OneProduct> */}

        {/* <OneProduct product={product}></OneProduct>
        <OneProduct product={product}></OneProduct>
        <OneProduct product={product}></OneProduct>
         */}

            {/* <OneProduct product={products[0]}></OneProduct>
            <OneProduct product={products[1]}></OneProduct>
            <OneProduct product={products[2]}></OneProduct> */}

            {products.map((prod)=>{
                return <OneProduct product={prod} key={prod.id} onAdd={onAdd} onDelete={onDelete}></OneProduct>
            })}


    </div>
  )
}

export default Products