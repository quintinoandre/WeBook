import { Navbar } from '../../../components/Navbar';
import { BookInfoContainter } from './BookContainer';
import { Form } from './Form';

function BookInfo(): JSX.Element {
	return (
		<>
			<Navbar />
			<BookInfoContainter />
			{/* <Carousel/> */}
			<Form />
			{/* <Footer/> */}
		</>
	);
}

export { BookInfo };
