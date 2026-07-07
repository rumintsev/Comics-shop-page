import './footer.css'
import Logo from '../../../public/logo.svg'

export default function Footer() {
	return (
		<footer>
			<div className="footerContent">
				<div className="footerLinks">
					<ul>
						<li>CATALOG</li>
						<li><a href="#">Series</a></li>
						<li><a href="#">Popular</a></li>
						<li><a href="#">New Releases</a></li>
						<li><a href="#">Catalog</a></li>
					</ul>
					<ul>
						<li>HELP</li>
						<li><a href="#">Returns</a></li>
						<li><a href="#">Shipping</a></li>
						<li><a href="#">FAQ</a></li>
					</ul>
					<ul>
						<li>JOIN THE COMIX CLUB</li>
						<li>Get the latest news and drops</li>
						<li className="newsLetter">
							<input type="email" placeholder="Email" />
							<button>Sign up</button>
						</li>
					</ul>
				</div>
				<hr />
				<ul className="copyright">
					<li>Copyright &copy; 2026 Comics Shop. All rights reserved.</li>
					<li><a href="#">Terms of Use</a></li>
					<li><a href="#">Privacy Policy</a></li>
				</ul>
			</div>
		</footer>
	);
}
