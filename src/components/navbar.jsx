import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <>
        <nav className="nav">
            <Link to="/" className="site-title">
                Simon Stålenhag
            </Link>
            <ul>
                <li className="link">
                    <a href="https://www.salomonssonagency.se/simon-stalenhag" >About</a>
                </li>
                <li className="link">
                    <a href="https://twitter.com/simonstalenhag">Socials</a>
                </li>
                <li className="link">
                    <a href="https://www.amazon.com/s?i=stripbooks&rh=p_27%3ASimon+St%C3%A5lenhag&s=relevancerank&text=Simon+St%C3%A5lenhag&ref=dp_byline_sr_book_1">Books</a>
                </li>
                <li className="link">
                    <a href="https://www.redbubble.com/people/simonstalenhag/shop">Prints</a>
                </li>
            </ul>
        </nav>
        <div className="page">
            <ul>
                <li>
                    <CustomLink to="/Electric">The Electric State</CustomLink>
                </li>
                <li>
                    <CustomLink to="/Flood">Things From the Flood</CustomLink>
                </li>
                <li>
                    <CustomLink to="/Labyrinth">The Labyrinth</CustomLink>
                </li>
                <li>
                    <CustomLink to="/Tales">Tales from the Loop</CustomLink>  
                </li>
            </ul>
        </div>
    </>
)}

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