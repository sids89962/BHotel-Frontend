import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { HotelProvider } from './context/HotelContext';
import Header from './components/headers/Header';
import Pages from './components/mainPages/Pages';

function App() {
  return (
   
    <UserProvider>
      <HotelProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Pages />
        </div>
      </BrowserRouter>
      </HotelProvider>
    </UserProvider>
   

  );
}

export default App;
