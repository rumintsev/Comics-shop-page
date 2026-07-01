import './page.css'
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
	return (
		<div className="homePage">
			<Header />
			<main>
				<section className="heroSection">
					<h1 className="headline">Discover new worlds in every story</h1>
					<p>From futuristic cyberpunk to space adventures and
						mystical forests — a collection of original comics for
						every mood.</p>
					<a>Go to calalog</a>
					<div className="imageContainer">
						<img src="/comics.png" alt="Comics" />
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
								<h3>Whispers of the Forgotten Forest #3</h3>
								<p>Following mysterious lights into the
									marshlands, Elara encounters a feared
									witch whose secrets may change the fate of
									the forest forever.</p>
								<h3>$8.99</h3>
							</div>
						</div>
						<div className="comic">
							<img src="/comic2.png" alt="Comic 2" />
							<div className="comicInfo">
								<h3>Neo-Tokyo Chronicles #4. The Final Issue</h3>
								<p>As Neo-Tokyo burns beneath a crimson sunset,
									Kai and Rei make one final stand atop the city's
									highest tower to decide humanity's future.</p>
								<h3>$5.99</h3>
							</div>
						</div>
					</div>
				</section>
				<div className="orangeContainer">
					<img src="/orangeBottom.svg" className='orangeBlock' />
				</div>
				<section className='popularSeries'>
					<div className="popularSeriesContent">
						<h2 className="headline">This Month's Most Popular Series</h2>
						<div className="seriesInfo">
							<h3>Whispers of the Forgotten Forest</h3>
							<h4>2026 Forest Comics</h4>
						</div>
						<p>A dark folk fantasy in the style of classic
							ink-and-watercolor illustrations. The story follows
							a young warrior’s perilous journey through a cursed
							forest.</p>
						<div className="comicsContainerOfThree">
							<div className="comic">
								<img src="/comic3.png" alt="Comic 1" />
								<div className="comicInfo">
									<p>Issue #1: The young heroine steps into the
										misty thicket. An amulet guides her forward,
										to where the secret of her past lies hidden.</p>
									<h4>$7.99</h4>
								</div>
							</div>
							<div className="comic">
								<img src="/comic4.png" alt="Comic 2" />
								<div className="comicInfo">
									<p>Issue #2: Their rest by the campfire is
										interrupted by the Wood Spirit, who shows no
										mercy to those who disturb his peace.</p>
									<h4>$7.99</h4>
								</div>
							</div>
							<div className="comic">
								<img src="/comic1.png" alt="Comic 3" />
								<div className="comicInfo">
									<p>Issue #3: In the treacherous marshes, a witch
										weaves forbidden spells. She jealously guards what
										she once stole.</p>
									<h4>$8.99</h4>
								</div>
							</div>
						</div>
						<a>View All Issues</a>
					</div>
				</section>
				<section className="anniversary">
					<img src="/anniversary.png" alt="anniversaryPhoto" />
					<div className="anniversaryInfo">
						<p>The daring Captain Galaxy saves the universe from the terrifying Star Horde, battling monsters and fleets in the magnificent retro style of the golden age of science fiction!</p>
						<h3>20% off all issues in the series</h3>
						<a>Explore the Series</a>
					</div>
				</section>
			</main>
			<Footer />
		</div >
	);
}
