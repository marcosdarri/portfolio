import ThemeController from "./ThemeController";

export default function HeaderMobile() {
  return (
    <div className="navbar-start w-full flex justify-between md:justify-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:text-white dark:bg-teal-900"
        >
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="pl-[10px] pt-[5px]">
            <ThemeController />
          </li>
        </ul>
      </div>
      <div>
        <a className="btn btn-ghost text-xl">Marcos Darricarrere</a>
      </div>
    </div>
  );
}
