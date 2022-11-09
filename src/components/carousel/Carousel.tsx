import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

import * as bookService from '../../services/bookService';
import Card from './components/Card';
import { IBook } from './components/CardTypes';

function Carousel(props: ICarouselProps): JSX.Element {
	const date = Date.now();
	const dateBefore = new Date(date);
	dateBefore.setFullYear(dateBefore.getFullYear() - 2);

	const filteredBooks = props.data.filter(
		(item) => item.year >= dateBefore.getFullYear()
	);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: filteredBooks.length > 6 ? 6 : filteredBooks.length,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		initialSlide: 0,
	};

	const [books, setBooks] = useState<IBook[]>([]);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	async function getAllBooks(): Promise<void> {
		try {
			const response = await bookService.getAllBooks();

			setBooks([...response]);
		} catch (error) {
			handleError(error);
		}
	}

	useEffect(() => {
		void getAllBooks();
	}, []);

	return (
		<StyledCarousel>
			<Slider {...settings}>
				{filteredBooks.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						book_cover={item.book_cover}
						year={item.year}
						id={item.id}
					></Card>
				))}
			</Slider>
		</StyledCarousel>
	);
}

const StyledCarousel = styled.div`
	margin: 0% 10%;
`;

export { Carousel };
