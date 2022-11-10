import { Carousel } from '../../../components/Carousel';
import { BookInfoContainer } from './BookContainer';
import { Form } from './Form';

function BookInfo(): JSX.Element {
	return (
		<>
			<BookInfoContainer />
			<Carousel />
			<Form />
		</>
	);
}

export { BookInfo };
