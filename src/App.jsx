import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Buttons'
import Alert from './Alerts'

import React from 'react';

function App() {
  return (
    <div className="p-10 bg-slate-600">
      <h1 className="text-2xl font-bold mb-5">Buttons</h1>

      
      <Button size="small" color="green" text="Small Green" disabled={true}/>
      <Button size="small" color="red" text="Small Red"/>
      <Button size="large" color="green" text="Large Green" />


      <h1 className="text-2xl font-bold mt-5">Alerts</h1>
      <Alert color="red" icons="brightness" text="brightness"/> 
      <Alert color="green" icons="brightness" text="brightness"/> 
      <Alert color="green" icons="anchor" text="anchor"/> 
      
      
      
           </div>
  );
}

export default App;

