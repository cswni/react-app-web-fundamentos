import { MdMenu, MdOutlinePersonPin } from 'react-icons/md';

type Props = {
  mostrar: number;
  setMostrar: any;
};

export const Header = (props: Props) => {
  const { mostrar, setMostrar } = props;

  return (
    <header className="flex items-center justify-between p-2 text-lg text-center text-white uppercase border-b-8 shadow-lg select-none bg-slate-700 border-rose-400 shadow-slate-400">
      <span
        onClick={() => setMostrar(1)}
        className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400">
        <MdMenu size={40} />
      </span>

      <div>
        <h1 className="font-bold">
          Reservaciones de eventos y compras en l&iacute;nea
        </h1>
        <p>Comercial "La econ&oacute;mica"</p>
      </div>

      <span>
        <MdOutlinePersonPin size={40} />
      </span>

      <div
        onClick={() => setMostrar(0)}
        className={`${
          mostrar ? 'fixed' : 'hidden'
        } inset-0 z-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm transition-all duration-500 ease-in-out`}></div>
    </header>
  );
};
