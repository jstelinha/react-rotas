import {
  IconAddressBook,
  IconBrandReact,
  IconHome,
  IconInfoCircle,
  IconMessage2Cog,
  IconMessageDown,
  IconMessageUp,
  IconRouteAltLeft,
  IconSquareRoundedNumber1,
  IconSquareRoundedNumber2,
  IconSquareRoundedNumber3,
  IconSquareRoundedNumber4,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {
  const getEstilo = (props) => {
    let estilo = `
      flex items-center gap-3
      px-3 py-2 w-full
      text-sm text-white 
      hover:bg-zinc-900 `;
    let ativo = "border-r-4 border-solid border-slate-800 ";
    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-black min-w-72">
      <header
        className={`
          flex justify-center items-center gap-2
          bg-black text-zinc-50 
          px-1 py-5 h-16          
          text-2xl font-black
        `}
      >
        <IconBrandReact />
        <span className="font-bold">React Rotas</span>
      </header>

      <nav
        className={`
          flex flex-col justify-start items-start gap-2    
               
        `}
      >
        <NavLink to="home" className={getEstilo}>
          <IconHome />
          Home
        </NavLink>
        <NavLink to="contato" className={getEstilo}>
          <IconAddressBook />
          Contato
        </NavLink>
        <NavLink to="sobre" className={getEstilo}>
          <IconInfoCircle />
          Sobre
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Estado</span>

        <NavLink to="semEstado" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Sem Estado
        </NavLink>

        <NavLink to="comEstado" className={getEstilo}>
          <IconSquareRoundedNumber2 />
          Com Estado
        </NavLink>

        <NavLink to="campoTexto" className={getEstilo}>
          <IconSquareRoundedNumber3 />
          Campo Texto
        </NavLink>

        <NavLink to="contador" className={getEstilo}>
          <IconSquareRoundedNumber4 />
          Contador
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Comunicação</span>

        <NavLink to="comunicacao-direta" className={getEstilo}>
          <IconMessageDown />
          Comunicação Direta
        </NavLink>

        <NavLink to="comunicacao-indireta" className={getEstilo}>
          <IconMessageUp />
          Comunicação Indireta
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Hooks Básicos</span>
        <NavLink to="useRef" className={getEstilo}>
          <IconMessageUp />
          UseRef
        </NavLink>

        <NavLink to="useEffect" className={getEstilo}>
          <IconMessageUp />
          UseEffect
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Tradutor</span>
        <NavLink to="tradutor" className={getEstilo}>
          <IconMessage2Cog />
          Tradutor
        </NavLink>

      </nav>
    </aside>
  );
}
