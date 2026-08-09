import Link from "next/link";

const Navbar = () => {
    const links = () =><>
    <Link href={"/"}>Home</Link>
    <Link href={"/"}>About</Link>
    <Link href={"/"}>Skills</Link>
    <Link href={"/"}>Projects</Link>
    <Link href={"/"}>Contact</Link>
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                {links()}
              </li>
            </ul>
          </div>
          <a className="btn btn-accent text-xl">K</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="flex flex-row">
                {links()}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-accent">Hire Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
