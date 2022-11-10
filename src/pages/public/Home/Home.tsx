import { BooksGrid } from '../../../components/BooksGrid/BooksGrid';
import { Carousel } from '../../../components/Carousel';
import { ArrayQuotes } from './Quotes';
import { Quotes } from './styles';

function Home(): JSX.Element {
	const randomQuotes =
		ArrayQuotes[Math.floor(Math.random() * ArrayQuotes.length)];

	return (
		<>
			<Quotes>
				<h3>{randomQuotes.comment}</h3>
				<p>{randomQuotes.author}</p>
			</Quotes>
			<Carousel />
			<BooksGrid />
		</>
	);
}

export { Home };
