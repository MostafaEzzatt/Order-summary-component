import { useState } from "react";
import FilterInput from "./filterInput";
import { useGlobalContext } from "../context";

/* Icons from react-icon */
import { BsSearch } from "react-icons/bs";

function CountryInput() {
  const data = useGlobalContext();

  return (
    <div className="input flex f-jc-c">
      <div className="container">
        <div className="input__country shadow">
          <span>
            <BsSearch />
          </span>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Search for a country..."
            value={data.country}
            onChange={(e) => data.setCountry(e.target.value)}
          />
        </div>

        <FilterInput />
      </div>
    </div>
  );
}

export default CountryInput;
