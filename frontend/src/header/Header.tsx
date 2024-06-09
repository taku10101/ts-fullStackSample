import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import { AvatarComponent } from "../components/AvatarComponent";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/timeline">Timeline</a>
            </li>
            <li>
              <AvatarComponent icon={""} />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
