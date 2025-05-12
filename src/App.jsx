import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <div>
      <h1>Lista prodotti</h1>
      <ul>
        {products.map((e, i) => {
          return <li key={i}>{e.name}: {e.price.toFixed(2)}€</li>
        }
        )}
      </ul>

    </div>
  )
}

export default App
