import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            onClickHandler={handleClick}
            name="company"
            value=""
            title="All Products"
          />
          <Button
            onClickHandler={handleClick}
            name="company"
            value="Nike"
            title="Nike"
          />
          <Button
            onClickHandler={handleClick}
            name="company"
            value="Adidas"
            title="Adidas"
          />
          <Button
            onClickHandler={handleClick}
            name="company"
            value="Puma"
            title="Puma"
          />
          <Button
            onClickHandler={handleClick}
            name="company"
            value="Vans"
            title="Vans"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
