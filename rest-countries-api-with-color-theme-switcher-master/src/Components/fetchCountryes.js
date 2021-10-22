import { useState, useEffect } from "react";
import URLS from "../API/api.config";
import { Context, useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Loading from "./loading";

const FetchCountryes = () => {
  return (
    <>
      <div className="country flex f-jc-c">
        <div className="container">
          <Country />
        </div>
      </div>
    </>
  );
};

const Country = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const contextData = useGlobalContext();

  useEffect(() => {
    fetch(URLS.all())
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw r;
      })
      .then((r) => {
        setData(r);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      {data.map((country) => {
        const regex = `.*${contextData.country.toLowerCase()}.*.`;
        const finalReg = new RegExp(regex, "g");
        const countryRegSearch = country.name.toLowerCase().match(finalReg);
        if (
          contextData.country &&
          countryRegSearch &&
          (contextData.region == "All" || contextData.region == country.region)
        ) {
          return <Box country={country} />;
        } else if (
          !contextData.country &&
          (contextData.region == "All" || contextData.region == country.region)
        ) {
          return <Box country={country} />;
        }
      })}
    </>
  );
};

const Box = ({ country }) => {
  const fullLink = `/country/${country.name}`;
  return (
    <div className="country__box shadow">
      <Link to={fullLink}>
        <div className="country__box__flag">
          <img src={country.flags.png} alt="flag" />
        </div>
        <div className="country__box__info">
          <h3>{country.name}</h3>
          <ul>
            <li>
              <span>Population: </span>
              {country.population}
            </li>
            <li>
              <span>Region: </span>
              {country.region}
            </li>
            <li>
              <span>Capital: </span>
              {country.capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};
export default FetchCountryes;
