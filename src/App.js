// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AlbumProvider } from './components/AlbumContext';
import { Header } from './layouts';
import { Album, Albums, Artists, Artist, Home, NotFound } from './pages';



function App() {
  return (
    <div>
      <AlbumProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="artists" element={<Artists />}>
            <Route path=":artist" element={<Artist />}></Route>
          </Route>
          <Route path="albums" element={<Albums />}>
            <Route path=":name" element={<Album />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </AlbumProvider>

    </div>
  );
}

export default App;
