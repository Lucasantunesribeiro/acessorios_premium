import ProdutoPage, { generateMetadata as generateProductMetadata } from "../[slug]/page";

export const generateMetadata = () =>
  generateProductMetadata({ params: { slug: "relogio-aurum-imperial" } });

export default function Page() {
  return <ProdutoPage params={{ slug: "relogio-aurum-imperial" }} />;
}
