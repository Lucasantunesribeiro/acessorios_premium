import ProdutoPage, { generateMetadata as generateProductMetadata } from "../[slug]/page";

export const generateMetadata = () =>
  generateProductMetadata({ params: { slug: "bolsa-lumina-cross" } });

export default function Page() {
  return <ProdutoPage params={{ slug: "bolsa-lumina-cross" }} />;
}
