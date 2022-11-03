// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AlbumProvider } from './components/AlbumContext';
import { Header } from './layouts';
import { Albums, Artists, Artist, Home, NotFound, LedZeppelinI, LedZeppelinII, LedZeppelinIII, LedZeppelinIV } from './pages';




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
            <Route path="LedZeppelinI" element={<LedZeppelinI />}></Route>
            <Route path="LedZeppelinII" element={<LedZeppelinII />}></Route>
            <Route path="LedZeppelinIII" element={<LedZeppelinIII />}></Route>
            <Route path="LedZeppelinIV" element={<LedZeppelinIV />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </AlbumProvider>

    </div>
  );
}

export default App;
