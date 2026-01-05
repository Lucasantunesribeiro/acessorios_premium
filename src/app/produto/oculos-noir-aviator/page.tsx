import ProdutoPage, { generateMetadata as generateProductMetadata } from "../[slug]/page";

export const generateMetadata = () =>
  generateProductMetadata({ params: { slug: "oculos-noir-aviator" } });

export default function Page() {
  return <ProdutoPage params={{ slug: "oculos-noir-aviator" }} />;
}
