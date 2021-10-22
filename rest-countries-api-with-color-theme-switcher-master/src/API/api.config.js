const URLS = {
  base: "https://restcountries.com/v2/",
  all: () => {
    return `${URLS.base}/all?fields=name,capital,region,population,flags`;
  },
  name: (country) => {
    return `${URLS.base}/name/${country}`;
  },
};

export default URLS;
