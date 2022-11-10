import { useNavigate } from 'react-router-dom';

import { IBook } from './cardTypes';
import { Image, Overlay, CardContainer, Text } from './styles';

function Card(props: IBook): JSX.Element {
	const navigate = useNavigate();
	const { title, book_cover, year } = props;

	function handleClick(): void {
		const { id } = props;
		navigate(`/book-info/${id}`);
	}

	return (
		<CardContainer onClick={handleClick}>
			<Image src={book_cover} alt={title} />
			<Overlay>
				<Text>{title}</Text>
				<hr />
				<Text>{year}</Text>
			</Overlay>
		</CardContainer>
	);
}

export { Card };
