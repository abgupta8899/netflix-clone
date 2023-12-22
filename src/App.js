
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { MoviePage } from './pages/MoviePage'
import { Player } from './pages/Player'
import { TvShow } from './pages/TvShow'
import { Netflix } from './pages/Netflix'







function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/signup' element={<SignUpPage/>}/>
          <Route exact path='/movie' element={<MoviePage/>}/>
          <Route exact path='/player' element={<Player/>}/>
          <Route exact path='/tvshow' element={<TvShow/>}/>
          <Route exact path='/' element={<Netflix/>}/>
          
         </Routes>
         

    </BrowserRouter>
  );
}

export default App;
