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
        <CustomLink to="/search">Search</CustomLink>
        <CustomLink to="/payment">Payment</CustomLink>
        <CustomLink to="/cancellations">Cancellation Policy</CustomLink>
        {token ? "" : <CustomLink to="/login">Log in</CustomLink>}
        {token ? <CustomLink to="/account">{token.firstName}'s Account</CustomLink> : ""}
        {token ? <CustomLink to="/mybookings">{token.firstName}'s Bookings</CustomLink> : ""}
        <CustomLink to="/reservation">Reservation</CustomLink>
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
