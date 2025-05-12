import { useState } from 'react'

function App() {
  const [addedProducts, setAddedProducts] = useState([])

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const addToCart = (product) => {
    const addedProduct = addedProducts.find(e => e.name === product.name)
    if(addedProduct){
      updateProductQuantity(addedProduct.name, addedProduct.quantity + 1)
      return
    }
      setAddedProducts(curr => [...curr, {
        ...product,
        quantity: 1
      }])
  }

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts(curr => curr.map(p => p.name === name ? {...p, quantity} : p))
  }

  const removeFromCart = product => {
    setAddedProducts(curr => curr.filter(p => p.name !== product.name))
  }

  const totale = addedProducts.reduce((acc, element) => {
    return acc + (element.price * element.quantity)
  }, 0)

  return (
    <>
    <div>
      <h1>Lista prodotti</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>{product.name}: {product.price.toFixed(2)}€
              <button
              onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </li>
          )
        }
        )}
      </ul>
    </div>
    
    <div>
      <h1>Carrello</h1>
      <ul>
      {addedProducts.map((element, index) => {
        return (
          <li key={index}>{element.quantity} x {element.name} - {element.price.toFixed(2)}€
          <button onClick={() => removeFromCart(element)}>Rimuovi dal carrello</button>
          </li>
        )
      })}
      <h2>Totale: {totale.toFixed(2)}€</h2>
      </ul>
    </div>
    </>
    
  )
}

export default App
