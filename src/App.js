import "./App.css"
import { useState } from "react"

function App() {
  // const [total, action] = useState(0)
  const [num1, updateNum1] = useState('0')
  const [num2, updateNum2] = useState('0')
  const [operator, updateOperator] = useState('+')
  const [total, updateTotal] = useState(0)

  function handleNum1(event) {
    if (num1 === '0') {
      updateNum1(event.target.innerText)
      return
    }
    else {
      updateNum1(num1 + event.target.innerText)
      // console.log(num1)
    }
  }
  function handleNum2(event) {
    if(num2 === '0'){
      updateNum2(event.target.innerText)
    }
    else{
      updateNum2(num2 + event.target.innerText)
    }
  }
  function handleOperator(event) {

    updateOperator(event.target.innerText)
  }
  function clearNum1() {
    updateNum1(0)
  }
  function clearNum2() {
    updateNum2(0)
  }

  function calculate() {
    // let subtotal = 0
    if (operator === '+') {
      updateTotal(Number(num1) + Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '-') {
      updateTotal(Number(num1) - Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '*') {
      updateTotal(Number(num1) * Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '÷') {
      updateTotal(Number(num1) / Number(num2))
      clearNum1()
      clearNum2()
      return
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={handleNum1}>1</button>
          <button onClick={handleNum1}>2</button>
          <button onClick={handleNum1}>3</button>
          <button onClick={handleNum1}>4</button>
          <button onClick={handleNum1}>5</button>
          <button onClick={handleNum1}>6</button>
          <button onClick={handleNum1}>7</button>
          <button onClick={handleNum1}>8</button>
          <button onClick={handleNum1}>9</button>
          <button onClick={handleNum1}>0</button>
          <button onClick={clearNum1}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperator}>+</button>
          <button onClick={handleOperator}>-</button>
          <button onClick={handleOperator}>*</button>
          <button onClick={handleOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          <button onClick={handleNum2}>1</button>
          <button onClick={handleNum2}>3</button>
          <button onClick={handleNum2}>2</button>
          <button onClick={handleNum2}>4</button>
          <button onClick={handleNum2}>5</button>
          <button onClick={handleNum2}>6</button>
          <button onClick={handleNum2}>7</button>
          <button onClick={handleNum2}>8</button>
          <button onClick={handleNum2}>9</button>
          <button onClick={handleNum2}>0</button>
          <button onClick={clearNum2}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
