import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { BooksContext } from '../../contexts';
import { Card } from '../Card';

function Carousel(): JSX.Element {
	const { books } = useContext(BooksContext);

	const date = Date.now();
	const dateBefore = new Date(date);
	dateBefore.setFullYear(dateBefore.getFullYear() - 2);

	const filteredBooks = books.filter(
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
