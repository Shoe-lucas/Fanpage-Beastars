import Cabecalho from "../components/cabecalho/cabecalho";
import Rodape from "../components/rodape/rodape";

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main>{children}</main>
      <Rodape />
    </>
  );
}
