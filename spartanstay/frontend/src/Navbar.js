import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({token}) {
  console.log(token)
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        SpartanStay
      </Link>
      <ul>
        {token  ? "" : <CustomLink to="/sign-up">SignUp</CustomLink>}
        <CustomLink to="/search">Search</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {token ? "" : <CustomLink to="/login">LogIn</CustomLink>}
        {token ? <CustomLink to="/account">{token.firstName}'s Account</CustomLink> : ""}
      </ul>
    </nav>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
