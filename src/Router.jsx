import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Carrinho } from "./components/Carrinho";

import { Home } from "./pages/Home";
import { Sobrenos } from "./pages/Sobrenos";
import { Produtos } from "./pages/Produtos";
import { Contato } from "./pages/Contato";
import { Maes } from "./pages/Maes";

export function Router() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/maes" element={<Maes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}
