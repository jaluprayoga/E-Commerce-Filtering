import "./Product.css";

const Products = ({ result }) => {
  return (
    <>
      {/* <h1>Hallo</h1> */}
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
