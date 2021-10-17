import { useState } from "react";
import CounterInputStyled from "./styled/CounterInput.styled";

import MinusIcon from "../images/icon-minus.svg";
import PlusIcon from "../images/icon-plus.svg";

const CounterInput = () => {
  const [count, setCount] = useState(0);

  function handleClick(clickCase) {
    if (clickCase == "minus") {
      const currentState = count - 1;
      const final = currentState < 0 ? 0 : currentState;
      setCount(final);
    } else if (clickCase == "plus") {
      setCount(count + 1);
    }
  }

  return (
    <>
      <CounterInputStyled className="flex f-ai-c f-jc-c">
        <MinusIcon onClick={() => handleClick("minus")} className="pointer" />
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          disabled
        />
        <PlusIcon onClick={() => handleClick("plus")} className="pointer" />
      </CounterInputStyled>
    </>
  );
};

export default CounterInput;
