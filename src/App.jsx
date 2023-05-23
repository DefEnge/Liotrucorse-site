import React from 'react'
import {Main, NewsPage, Contactmain, ProjectPage, JoinUsPage} from './components'

import {HashRouter, Route, Routes} from 'react-router-dom' ; 


const App = () => (
  <HashRouter basename='/'>
    <Routes>
      <Route exact path ="/" Component={Main}></Route>
      <Route exact path ="/News" Component={NewsPage}></Route>
      <Route exact path ="/Project" Component={ProjectPage}></Route>
      <Route exact path ="/JoinUs" Component={JoinUsPage}></Route>
  </Routes>
  </HashRouter>
)

export default App 