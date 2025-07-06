import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  const gross = price - discount
  const vat = gross * 0.07

  return (
    <div className="container">
      <h1>VAT Calculator</h1>
      <div className="input-group">
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
      </div>
      <div className="input-group">
        <label>Discount</label>
        <input type="number" value={discount} onChange={(e) => setDiscount(+e.target.value)} />
      </div>
      <p>Gross Price: {gross}</p>
      <p>VAT (7%): {vat.toFixed(2)}</p>
    </div>
  )
}

export default App
