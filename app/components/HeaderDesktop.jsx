import ThemeController from "./ThemeController";

export default function HeaderDesktop() {
  return (
    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <ThemeController />
        </li>
      </ul>
    </div>
  );
}
