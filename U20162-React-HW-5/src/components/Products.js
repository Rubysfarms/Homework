import React from 'react';
import './Products.css';
import products from '../state/ShopItems';

const ProductsPage = ({dispatch}) => {   
    return (
      <main className="products">
        <ul>
          {products.map(product => (                  
          <li key={product.id}>
                    <div className='itemImage' style={{backgroundImage: `url('${product.image}')`}}/>
                    <div>
                      <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                      <button onClick={() => dispatch({type: 'add', id:product.id})}>Add to Cart</button>
                    </div>
                  </li>
                ))}
              </ul>
      </main>      
    );  
}
export default ProductsPage;
