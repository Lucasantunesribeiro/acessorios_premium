import ProdutoPage, { generateMetadata as generateProductMetadata } from "../[slug]/page";

export const generateMetadata = () =>
  generateProductMetadata({ params: { slug: "oculos-aurora-cateye" } });

export default function Page() {
  return <ProdutoPage params={{ slug: "oculos-aurora-cateye" }} />;
}
