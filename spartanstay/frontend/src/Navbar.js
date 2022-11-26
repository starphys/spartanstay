import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({token}) {
  console.log(token)
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        LikeHome
      </Link>
      <ul className="navbar-links">
        {token  ? "" : <CustomLink to="/sign-up">Sign up</CustomLink>}
        <CustomLink to="/">Search</CustomLink>
        <CustomLink to="/cancellations">Cancellation Policy</CustomLink>
        {token ? "" : <CustomLink to="/login">Log in</CustomLink>}
        {token ? <CustomLink to="/account">Account</CustomLink> : ""}
        {token ? <CustomLink to="/mybookings">MyBookings</CustomLink> : ""}
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
