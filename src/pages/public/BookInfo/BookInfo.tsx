import { Carousel } from '../../../components/Carousel';
import { BookInfoContainter } from './BookContainer';
import { Form } from './Form';

function BookInfo(): JSX.Element {
	return (
		<>
			<BookInfoContainter />
			<Carousel />
			<Form />
			{/* <Footer/> */}
		</>
	);
}

export { BookInfo };
