import React ,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from 'Application./Components/entry/Login';

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}