import "./header.css";
import Search from "../../../public/search.svg"

export default function Header() {
	return (
		<header>
			<div className="headerContent">
				<img src="/logo.svg" alt="Logo" className="logo" />
				<div className="searchContainer">
					<input type="text" placeholder="Find..." />
					<Search className="searchIcon" aria-label="Search" />
				</div>
				<nav>
					<div className="navLinks">
						<a href="#">Catalog</a>
						<a href="#">New Releases</a>
						<a href="#">Popular</a>
						<a href="#">Series</a>
					</div>
					<a className="menuButton">
						<img src="/burger.svg" alt="Menu" className="icon" />
					</a>
					<a className="cartBlock">
						<img src="/cart.svg" alt="Cart" className="icon" />
						<span className="cartCount">2</span>
					</a>
					<a href="#">
						<img src="/profile.svg" alt="Profile" className="icon" />
					</a>
				</nav>
			</div>
		</header>
	);
}
