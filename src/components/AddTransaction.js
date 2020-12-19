import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: + amount
    }

    addTransaction(newTransaction)
  }
  return (
    <>
      <h3>Adicionar nova transação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Descrição</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Montante<br /> (negativo - despesa, positivo - renda)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Digite o montante" />
        </div>
        <button className="btn">Adicione a transação</button>
      </form>
    </>
  )
}
