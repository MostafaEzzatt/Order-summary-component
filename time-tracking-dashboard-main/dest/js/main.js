const main = document.querySelector(".main");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

const fetchData = async () => {
  const allData = await fetch("../../data.json").then((res) => res.json());

  return allData;
};

function getData(period) {
  const freg = document.createDocumentFragment();
  fetchData().then((allData) => {
    for (const data of allData) {
      // console.log(data.timeframes[period]);
      // console.log(data.title);
      const mainItem = createBlock(
        data.title,
        data.timeframes[period].current,
        data.timeframes[period].previous
      );

      freg.appendChild(mainItem);
    }
    main.innerHTML = "";
    main.appendChild(freg);
  });
}

// getData("daily");

function createBlock(type, current, lastWeek) {
  const item = document.createElement("div");
  const itemHeading = document.createElement("div");
  const itemHeadingTitle = document.createElement("h3");
  const itemHeadingMenu = document.createElement("div");
  const itemInfo = document.createElement("div");
  const itemInfoCurrent = document.createElement("div");
  const itemInfoLastWeek = document.createElement("div");

  item.setAttribute(
    "class",
    `main__item ${type.replace(" ", "-").toLowerCase()}`
  );

  // itemHeading Elem
  itemHeading.setAttribute(
    "class",
    "main__item__heading flex f-jc-between f-ai-center"
  );

  itemHeadingTitle.setAttribute("class", "main__item__heading__title");
  itemHeadingTitle.textContent = type;
  itemHeadingMenu.setAttribute("class", "main__item__heading__menu");

  itemHeading.appendChild(itemHeadingTitle);

  for (let i = 0; i < 3; i++) {
    const itemHeadingMenuCircle = document.createElement("span");
    itemHeadingMenuCircle.setAttribute(
      "class",
      "main__item__heading__menu__circle"
    );

    itemHeadingMenu.appendChild(itemHeadingMenuCircle);
  }
  itemHeading.appendChild(itemHeadingMenu);

  // itemInfo Elem
  itemInfo.setAttribute(
    "class",
    "main__item__info flex f-jc-between f-ai-center"
  );
  itemInfoCurrent.setAttribute("class", "main__item__info__current");
  itemInfoLastWeek.setAttribute("class", "main__item__info__last__week");

  itemInfoCurrent.textContent = `${current}hrs`;
  itemInfoLastWeek.textContent = `Last Week - ${lastWeek}hrs`;
  itemInfo.appendChild(itemInfoCurrent);
  itemInfo.appendChild(itemInfoLastWeek);

  item.appendChild(itemHeading);
  item.appendChild(itemInfo);
  return item;
}

// addactive
function removeActive(e) {
  const activeElems =
    e.target.parentElement.parentElement.querySelectorAll(".active");

  activeElems.forEach((e) => {
    e.classList.remove("active");
  });

  e.target.classList.add("active");
}

// Events

daily.addEventListener("click", (e) => {
  getData("daily");
  removeActive(e);
});
weekly.addEventListener("click", (e) => {
  getData("weekly");
  removeActive(e);
});
monthly.addEventListener("click", (e) => {
  getData("monthly");
  removeActive(e);
});

// Start

getData("daily");
