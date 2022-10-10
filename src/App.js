
import './App.css';
import Information from './Information';
import {Routes ,Route, BrowserRouter} from 'react-router-dom'
import FetchNews from './fetchNews';

function App() {
  return (
      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Information/>}/>
          <Route path='/news' element={<FetchNews/>}/>
        </Routes>
        </BrowserRouter>
        
        
      </div>
   
  );
}

export default App;
