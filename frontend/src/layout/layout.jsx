import Cabecalho from "../components/cabecalho/cabecalho";
import Rodape from "../components/rodape/rodape";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  );
}
