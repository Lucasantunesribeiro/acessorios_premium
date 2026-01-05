import ProdutoPage, { generateMetadata as generateProductMetadata } from "../[slug]/page";

export const generateMetadata = () =>
  generateProductMetadata({ params: { slug: "relogio-noir-legacy" } });

export default function Page() {
  return <ProdutoPage params={{ slug: "relogio-noir-legacy" }} />;
}
