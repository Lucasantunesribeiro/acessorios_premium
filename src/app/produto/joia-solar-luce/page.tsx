import ProdutoPage, { generateMetadata as generateProductMetadata } from "../[slug]/page";

export const generateMetadata = () =>
  generateProductMetadata({ params: { slug: "joia-solar-luce" } });

export default function Page() {
  return <ProdutoPage params={{ slug: "joia-solar-luce" }} />;
}
