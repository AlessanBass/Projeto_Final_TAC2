import Image from "next/image";
import { Inter } from "next/font/google";
import ProdutoList from "@/components/ProdutoList";
import Venda from "@/components/Venda";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
        <h1>Lista de produtos</h1>
        <Venda/>
    </main>
  );
}
