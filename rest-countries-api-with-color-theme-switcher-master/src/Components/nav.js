import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Nav() {
  const data = useGlobalContext();
  if (data.darkTheme) {
    document.querySelector("body").classList.add("dark");
  } else if (!data.darkTheme) {
    document.querySelector("body").classList.remove("dark");
  }
  return (
    <nav className="nav flex f-jc-c shadow">
      <div className="container flex f-ai-c f-jc-b">
        <h1 className="nav__logo">Where in the world?</h1>
        <button
          className="nav__theme-mode pointer"
          onClick={() => data.setDarkTheme(!data.darkTheme)}
        >
          <FaMoon viewBox="0 0 550 550" /> Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Nav;
