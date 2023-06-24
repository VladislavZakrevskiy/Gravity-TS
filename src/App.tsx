import {Provider} from 'react-redux'
import { store } from "./store/store"
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Game from './pages/game'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
