import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {

    return (
        <header>
            <nav>
                <Link to={"/"}>
                    <h3>AO</h3>
                </Link>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/skills">Skills</CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </nav>
        </header>
    );
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
      <li className={isActive ? "active" : "" }>
        <Link to={to} aria-label={children} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Nav;