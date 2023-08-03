import './css/estilos.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Inicio } from './pages/Inicio';
import { Eventos } from './pages/Eventos';
import { Sedes } from './pages/Sedes';
import { Promociones } from './pages/Promociones';
import { Ayuda } from './pages/Ayuda';
import { Header } from './components/Header';
import { Aside } from './components/Aside';

export default function App() {
  const [mostrar, setMostrar] = useState(0);
  return (
    <>
      <Header
        mostrar={mostrar}
        setMostrar={setMostrar}
      />
      <Aside
        mostrar={mostrar}
        setMostrar={setMostrar}
      />



      <main className='p-4 mt-4'>
        <section className="container p-4 m-auto shadow-lg">
          <Routes>
            <Route
              path="/"
              element={<Inicio />}></Route>
            <Route
              path="/eventos"
              element={<Eventos />}></Route>
            <Route
              path="/sedes"
              element={<Sedes />}></Route>
            <Route
              path="/promociones"
              element={<Promociones />}></Route>
            <Route
              path="/ayuda"
              element={<Ayuda />}></Route>
          </Routes>

        </section>
      </main>

      <footer className='fixed bottom-0 left-0 right-0 h-auto text-white border-t-4 border-rose-500 bg-slate-500'>
        <div className="container p-4 m-auto">
          <p className="text-center">Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}
