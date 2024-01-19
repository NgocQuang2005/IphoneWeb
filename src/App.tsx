
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Home from './component/Pages/Home'
import Iphone from './component/Pages/Iphone'
import Mac from './component/Pages/Mac'
import Ipad from './component/Pages/Ipad'
import Wacth from './component/Pages/Wacth'
import AirPods from './component/Pages/AirPods'
import Phukien from './component/Pages/Phukien'
import Suachua from './component/Pages/Suachua'
import Tuvan from './component/Pages/Tuvan'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Iphone'  element={<Iphone/>}/>
          <Route path='/Mac' element={<Mac/>}/>
          <Route path='/Ipad' element={<Ipad/>}/>
          <Route path='/Watch' element={<Wacth/>}/>
          <Route path='/AirPods' element={<AirPods/>}/>
          <Route path='/PhuKien' element={<Phukien/>}/>
          <Route path='/SuaChua' element={<Suachua/>}/>
          <Route path='/TuVan' element={<Tuvan/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    
  )
}
export default App
