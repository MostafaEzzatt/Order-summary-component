import { useState } from "react";
import { useGlobalContext } from "../context";

/* Icons from react-icon */
import { IoIosArrowDown } from "react-icons/io";

function FilterInput() {
  const [open, setOpen] = useState(false);
  const data = useGlobalContext();
  const regionList = [
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
    "Antarctic Ocean",
    "Antarctic",
  ];

  const handleChangeRegion = (region) => {
    data.setRegion(region);
    setOpen(false);
  };

  return (
    <div className="input-filter">
      <span className="arrow-down">
        <IoIosArrowDown />
      </span>
      <div className="input-filter__dropdown">
        <span className="pointer" onClick={() => setOpen(!open)}>
          {data.region || "Filter by Region"}
        </span>
        <ul className={`input-filter__dropdown__list ${open && "open"}`}>
          {regionList.map((r) => {
            return (
              <li
                className="input-filter__dropdown__list__item pointer"
                onClick={() => handleChangeRegion(r)}
              >
                {r}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FilterInput;
