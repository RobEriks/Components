import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Buttons'
import Alert from './Alerts'
import Badge from './Badge'
import Card from './Card'
import React from 'react';

function App() {
  return (
    <div className="p-10 bg-slate-600">

      <h1 className="text-3xl font-bold mb-5">Buttons</h1>
      <Button size="small" color="green" text="Small Green" disabled={true}/>
      <Button size="small" color="red" text="Small Red"/>
      <Button size="large" color="green" text="Large Green" />


      <h1 className="text-3xl font-bold mt-12 mb-5">Alerts</h1>
      <Alert color="red" icon="warning" text="Warning"/> 
      <Alert color="green" icon="warning" text="Warning"/> 
      <Alert color="blue" icon="anchor" text="anchor"/> 
      
      
      <h1 className="text-3xl font-bold mt-12 mb-5">Badges</h1>
      <Badge size="small" color="red" icon="airplane"/>
      <Badge size="small" color="green" icon="balloon"/>
      <Badge size="small" color="blue" icon="barbell"/>


      <h1 className="text-3xl font-bold mt-12 mb-5">Cards</h1>
      
        <Card href="#" imgSrc="https://via.placeholder.com/500" imgAlt="Placeholder Image"/>
        <Card href="#" imgSrc="https://via.placeholder.com/300" imgAlt="Placeholder Image"/>
        <Card href="#" imgSrc="https://via.placeholder.com/200" imgAlt="Placeholder Image"/>
         
        



           </div>
  );
}

export default App;

