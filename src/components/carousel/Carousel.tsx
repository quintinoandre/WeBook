import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

import Card from './components/Card';
import { ICarouselProps } from './components/CardTypes';

function Carousel(props: ICarouselProps): JSX.Element {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		initialSlide: 0,
	};

	const StyledCarousel = styled.div`
		width: 70%;
		margin: 0 auto;
		margin-top: 150px;
	`;

	return (
		<StyledCarousel>
			<Slider {...settings}>
				{props.data.map((item) => (
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

export { Carousel };
