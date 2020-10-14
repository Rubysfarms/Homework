import React from 'react';
import './Products.css';
import products from '../state/ShopItems'

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
      // <ShopContext.Consumer>
      //   {context => (
      //     <React.Fragment>
      //       <MainNavigation
      //         cartItemNumber={context.cart.reduce((count, curItem) => {
      //           return count + curItem.quantity;
      //         }, 0)}
      //       />
      //       <main className="products">
      //         <ul>
      //           {context.products.map(product => (                  
      //             <li key={product.id}>
      //               <div className='itemImage' style={{backgroundImage: `url('${product.image}')`}}/>
      //               <div>
      //                 <strong>{product.title}</strong> - ${product.price}
      //               </div>
      //               <div>
      //                 <button
      //                   onClick={context.addProductToCart.bind(this, product)}
      //                 >
      //                   Add to Cart
      //                 </button>
      //               </div>
      //             </li>
      //           ))}
      //         </ul>
      //       </main>
      //     </React.Fragment>
      //   )}
      // </ShopContext.Consumer>
    );  
}
export default ProductsPage;
