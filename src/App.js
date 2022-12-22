import React from 'react'
import Form from './components/form/Form'
import Header from './components/header/Header'
import List from './components/List/List'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import ListLink from './components/Pages/listLink/ListLink'
import Routers from './components/Router/Router'
const App = () => {
  const [list, setList] = useState([])
  return (
    <>
      <Routers/>
    </>
  )
}

export default App