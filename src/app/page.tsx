import './page.css'
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
	return (
		<div className="homePage">
			<Header />
			<main>
				<section className="heroSection">
					<h1 className="headline">Now Available to Read Online</h1>
					<p>Start reading our digital collection with 32 comics
						available right now, with more issues coming soon.</p>
					<div className='buttonContainer'>
						<a>Browse digital comics</a>
						<div className='buttonBack' />
					</div>
					<div className="imageContainer">
						<img src="/hero.png" alt="Comics" />
					</div>
				</section>
				<div className="orangeContainer">
					<img src="/orangeTop.svg" className='orangeBlock' />
				</div>
				<section className="newReleases">
					<h2 className="headline">New Releases</h2>
					<a>View All
						<img src="/arrow.svg" alt="Arrow" />
					</a>
					<div className="comicsContainer">
						<div className="comic">
							<img src="/comic1.png" alt="Comic 1" />
							<div className="comicInfo">
								<div className='price'>
									<h4>$8.99</h4>
								</div>
								<h3>Whispers of the Forgotten Forest #3</h3>
							</div>
						</div>
						<div className="comic">
							<img src="/comic5.png" alt="Comic 5" />
							<div className="comicInfo">
								<div className='price'>
									<h4>$3.99</h4>
									<span>$4.99</span>
								</div>
								<h3>Neo-Tokyo Chronicles #4. The Final Issue</h3>
							</div>
						</div>
						<div className="comic">
							<img src="/comic6.png" alt="Comic 6" />
							<div className="comicInfo">
								<div className='price'>
									<h4>$5.99</h4>
								</div>
								<h3>Neo-Tokyo Chronicles #4. The Final Issue</h3>
							</div>
						</div>
						<div className="comic">
							<img src="/comic2.png" alt="Comic 2" />
							<div className="comicInfo">
								<div className='price'>
									<h4>$5.99</h4>
								</div>
								<h3>Neo-Tokyo Chronicles #4. The Final Issue</h3>
							</div>
						</div>
					</div>
				</section>
				<div className="orangeContainer">
					<img src="/orangeBottom.svg" className='orangeBlock' />
				</div>
				<section className='popularSeries'>
					<div className="popularSeriesContent">
						<h2 className="headline">Series Premiere:<br />Whispers of the Forgotten Forest</h2>
						<p>A dark folk fantasy from Forest Comics.
							The story follows a young warrior’s dangerous
							and thrilling journey through a cursed forest to
							find an ancient artifact that
							will help her people.</p>
						<div className="comicsContainerOfThree">
							<div className="comic">
								<img src="/comic3.png" alt="Comic 1" />
								<div className="comicInfo">
									<div className='price'>
										<h4>$6.99</h4>
										<span>$7.99</span>
									</div>
									<h3>Whispers of the Forgotten Forest #1</h3>
								</div>
							</div>
							<div className="comic">
								<img src="/comic4.png" alt="Comic 2" />
								<div className="comicInfo">
									<div className='price'>
										<h4>$7.99</h4>
									</div>
									<h3>Whispers of the Forgotten Forest #2</h3>
								</div>
							</div>
							<div className="comic">
								<img src="/comic1.png" alt="Comic 3" />
								<div className="comicInfo">
									<div className='price'>
										<h4>$8.99</h4>
									</div>
									<h3>Whispers of the Forgotten Forest #3</h3>
								</div>
							</div>
						</div>
						<div className='buttonContainer'>
							<a>Explore the series</a>
							<div className='buttonBack' />
						</div>
					</div>
				</section>
				<section className="anniversary">
					<div className='anniversaryBigBlock'>
						<h2 className="headline">30th Anniversary: <br />
							the golden age <br />is back</h2>
						<img src="/anniversary.png" alt="anniversaryPhoto" />
						<p><b>Captain Galaxy & The Star Horde:</b> Captain
							Galaxy battles the terrifying Star Horde to save the universe in a retro golden-age sci-fi adventure!</p>
						<p>Discount on all issues: <b>20%</b></p>
						<div className='buttonContainer'>
							<a>Explore the series</a>
							<div className='buttonBack' />
						</div>
					</div>
					<img src="/anniversary.png" alt="anniversaryPhoto" />
				</section>
			</main>
			<Footer />
		</div >
	);
}
