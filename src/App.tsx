import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root')

export function App() {


  return (
    <>
      <Header />
      <Dashboard />

      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
