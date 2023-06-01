import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="productlist">
      <div className="pl-texts">
        <h1 className="pl-title">Exceptional User Experience Across a Variety of Products</h1>
        <p className="pl-description">
        Discover my accomplished portfolio as a seasoned Product Manager, highlighting a wide range of successful projects. From innovative mobile applications and advanced e-commerce platforms to robust SaaS solutions, my portfolio exemplifies my expertise in driving product strategy, leading cross-functional teams, and delivering exceptional user experiences. Gain confidence in my capabilities as you explore my proven track record of delivering impactful results.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;