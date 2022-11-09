import { IBook } from './CardTypes';
import { Image, Overlay, CardContainer, Text } from './styles';

function Card(props: IBook): JSX.Element {
	const { title, book_cover, year } = props;

	return (
		<CardContainer>
			<Image src={book_cover} alt={title} />
			<Overlay>
				<Text>{title}</Text>
				<Text>{year}</Text>
			</Overlay>
		</CardContainer>
	);
}

export default Card;
