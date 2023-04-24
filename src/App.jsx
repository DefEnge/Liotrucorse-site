import React from 'react'
import {Main, Page_Elettronica, Page_Informatica, Page_Meccanica, Page_Management} from './components'

import {HashRouter, Route, Routes} from 'react-router-dom' ; 


const App = () => (
  <HashRouter basename='/'>
    <Routes>
      <Route exact path ="/" Component={Main}></Route>
      <Route exact path ="/DivisioneElettronica" Component={Page_Elettronica}></Route>
      <Route exact path ="/DivisioneInformatica" Component={Page_Informatica}></Route>
      <Route exact path ="/DivisioneMeccanica" Component={Page_Meccanica}></Route>
      <Route exact path ="/DivisioneManagement" Component={Page_Management}></Route>
  </Routes>
  </HashRouter>
)

export default App 