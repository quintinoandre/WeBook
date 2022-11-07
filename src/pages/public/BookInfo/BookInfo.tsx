import { Navbar } from '../Navbar';
import { BookInfoContainter } from './BookContainer';
import { Form } from './Form';

function BookInfo(): JSX.Element {
	return (
		<>
			<Navbar />
			<BookInfoContainter />
			<Form />
		</>
	);
}

export { BookInfo };


// Added book info, navbar and forom/comment section