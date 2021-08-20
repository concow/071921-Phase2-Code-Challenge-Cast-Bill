import React, { useState, useEffect } from "react";
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  //start here with your code for step one
  const API = "http://localhost:8002/bills";

  const [bills, setBills] = useState([]);
  
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setBills(json));
      //.then(json => console.log(json));
  }, []);

  function castBills(cast) {
    //console.log(id)
    setBills(bills.map(bill => bill.id === cast.id ? { ...bill, casted: true } : bill));
  }

  function removeBills(remove) {
    setBills(bills.map(bill => bill.id === remove.id ? { ...bill, casted: false } : bill));
  }

  function fireBill(fire) {
    //console.log(`FIRE`)
    setBills(bills.filter(bill => bill.id !== fire.id));
  }

  return (
    <div>
      <BillsCast bills={bills.filter(bill => bill.casted)} handleClick={removeBills} handleFire={fireBill} />
      <BillCollection bills={bills} handleClick={castBills} handleFire={fireBill} />
    </div>
  );
}
