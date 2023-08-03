import {Link} from 'react-router-dom';
import {
    MdArrowBack,
    MdHome,
    MdQueueMusic,
    MdLocationOn,
    MdOutlineInsertEmoticon,
    MdHelp,
  } from 'react-icons/md';

type Props = {
    mostrar: number;
    setMostrar: any;
}

export const Aside = (props: Props) => {

    const {mostrar, setMostrar} = props;
    
  return (
    <>
    <aside
          className={`h-screen w-11/12 lg:w-1/4 p-4 fixed
        top-0 left-0 bottom-0 bg-white
        shadow-lg shadow-gray-500 text-rose-500 z-30 transition duration-500 ease-in-out
        ${mostrar ? 'translate-x-0' : '-translate-x-full'}`}>
          <h2 className="flex items-center justify-between text-2xl font-bold">
            <span>
              <MdArrowBack
                size={40}
                onClick={() => setMostrar(0)}
                className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400"
              />
            </span>
            <span>Men&uacute;</span>
          </h2>
          <ul id="menu">
            <li>
              <Link to={"/"} onClick={() => setMostrar(0)}>
                <span className="icono">
                  <MdHome size={36} />
                </span>
                <span className="texto">Inicio</span>
              </Link>
            </li>
            <li>
              <Link to={"/eventos"} onClick={() => setMostrar(0)}>
                <span className="icono">
                  <MdQueueMusic size={36} />
                </span>
                <span className="texto">Eventos</span>
              </Link>
            </li>
            <li>
              <Link to={"/sedes"} onClick={() => setMostrar(0)}>
                <span className="icono">
                  <MdLocationOn size={36} />
                </span>
                <span className="texto">Sedes</span>
              </Link>
            </li>
            <li>
              <Link to={"/promociones"} onClick={() => setMostrar(0)}>
                <span className="icono">
                  <MdOutlineInsertEmoticon size={36} />
                </span>
                <span className="texto">Promociones</span>
              </Link>
            </li>
            <li>
              <Link to={"/ayuda"} onClick={() => setMostrar(0)}>
                <span className="icono">
                  <MdHelp size={36} />
                </span>
                <span className="texto">Ayuda</span>
              </Link>
            </li>
          </ul>
        </aside>
    </>
  )
}