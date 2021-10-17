import GallaryStyled from "./styled/Gallary.Styled";

import LeftCart from "../images/icon-previous.svg";
import RightCart from "../images/icon-next.svg";

function gallary({ images, selectedImage, setSelectedImage }) {
  const handleImage = (i) => {
    const fullLength = Object.keys(images.thumb).length - 1;
    if (i == "next") {
      const currentState = selectedImage + 1;
      const next = currentState > fullLength ? 0 : currentState;
      setSelectedImage(next);
    } else if (i == "prev") {
      const currentState = selectedImage - 1;
      const prev = currentState < 0 ? fullLength : currentState;
      setSelectedImage(prev);
    }
  };

  return (
    <>
      <GallaryStyled>
        <span onClick={() => handleImage("prev")}>{<LeftCart />}</span>
        <div className="selected-image">
          <img src={images.full[selectedImage]} alt="" />
        </div>
        <div className="gallary-items__container">
          {Object.keys(images.thumb).map((img, index) => {
            return (
              <div className="item" key={index}>
                <img
                  src={
                    selectedImage == index
                      ? images.thumb[img]
                      : images.thumb[img]
                  }
                  alt={img}
                  onClick={() => setSelectedImage(index)}
                  className={selectedImage == index ? "border-orange" : ""}
                />
              </div>
            );
          })}
        </div>
        <span onClick={() => handleImage("next")}>{<RightCart />}</span>
      </GallaryStyled>
    </>
  );
}

export default gallary;
