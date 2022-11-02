// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './layouts';
import { Album, Albums, Artists, Home, NotFound } from './pages';



function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artists" element={<Artists/>}></Route>
        <Route path="albums" element={<Albums/>}>
          <Route path=":album" elemen={<Album />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
