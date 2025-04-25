import React, { useState } from 'react';

const ProductForm = ({addProduct}) => {
    const [error, setError] = useState('')

    const handleProductOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const qty = e.target.qty.value;

        // console.log(name, price, qty);

        if(name.length === 0){
            setError('Name Error');
            return;
        }
        else if(price.length === 0 || price < 0){
            setError('Price Error');
            return;
        }
        else if(qty.length === 0){
            setError('Qty Error')
            return;
        }
        else{
            setError('')
        }

        

        const newProduct = {
            name,
            price,
            qty
        }
        // console.log(newProduct);
        if(!error){
            addProduct(newProduct)
        }
    }

    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductOnSubmit}>
                <input type="text" name='name' placeholder='Product Name' /> <br />
                <input type="text" name='price' placeholder='Product price' /> <br />
                <input type="text" name='qty' placeholder='Product qty' /> <br />
                <input type="submit" value='Submit' />
            </form>

            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ProductForm;