import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import URLS from "../API/api.config";

import BackHomeBTN from "../Components/backHomeBTN";
import Loading from "../Components/loading";

const Country = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URLS.name(name))
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
      <BackHomeBTN />
      <div className="country-info">
        <div className="container">
          <div className="country-info__flag">
            <img src={data[0].flag} alt="Egypt" />
          </div>

          <div className="country-info__content">
            <h3 className="country-info__title">{data[0].name}</h3>

            <div className="country-info__content__list">
              <ul>
                <li>
                  <span>Pupulation:</span> {data[0].population}
                </li>
                <li>
                  <span>Region:</span> {data[0].region}
                </li>
                <li>
                  <span>Sub Region:</span> {data[0].subregion}
                </li>
                <li>
                  <span>Capital:</span> {data[0].capital}
                </li>
              </ul>

              <ul>
                <li>
                  <span>Top Level Domain:</span> {data[0].topLevelDomain}
                </li>
                {data[0].currencies && (
                  <li>
                    <span>currencies:</span> {data[0].currencies[0].code}
                  </li>
                )}
                <li>
                  <span>Languages:</span>{" "}
                  {data[0].languages.map((c, index) => {
                    return data[0].languages.length - 1 == index
                      ? `${c.name}`
                      : `${c.name}, `;
                  })}
                </li>
              </ul>
            </div>

            {data[0].borders && (
              <div className="border">
                <h5>Border Countries:</h5>
                <ul class="flex f-ai-c">
                  {data[0].borders.map((border, index) => {
                    return (
                      <li>
                        <div className="btn shadow">{border}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
