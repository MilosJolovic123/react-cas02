import React from 'react'
import {ImPlus, ImMinus} from 'react-icons/im'
// const OneProduct = (props) => {
// const OneProduct = ({prodTitle,prodDesc}) => {
const OneProduct = ({product, onAdd,onDelete}) => {
    const design = {margin:10,borderStyle:"dashed"}
    const title = "Novi naslov proizvoda";
    const desc = "Novi opis proizvoda";

    // function onAdd(title){
    //     console.log("Dodat proizvod u korpu: " + title)
    // }
  return (
    <div className='card' style={design}>
        <img src="https://picsum.photos/200" alt="Slika proizvoda" className='card-img-top' />
        <div className='card-body'>
            {/* <h3 className="card-title">{title}</h3>
            <p className="card-text">{desc}</p> */}
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <button className='btn' onClick={()=>onAdd(product.title)}><ImPlus></ImPlus></button>
            <button className='btn' onClick={()=>onDelete(product.title)}><ImMinus></ImMinus></button>

        </div>
    </div>
  )
}

export default OneProduct