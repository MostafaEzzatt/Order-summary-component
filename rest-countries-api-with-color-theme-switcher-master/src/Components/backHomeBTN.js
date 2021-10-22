import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackHomeBTN = () => {
  return (
    <>
      <div className="back-btn flex f-jc-c">
        <div className="container">
          <Link to="/" className="shadow">
            <BsArrowLeft />
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default BackHomeBTN;
