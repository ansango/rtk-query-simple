import { Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/security",
    name: "Security",
  },
];

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
