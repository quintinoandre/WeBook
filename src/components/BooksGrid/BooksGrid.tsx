import { useContext } from 'react';
import styled from 'styled-components';

import { BooksContext } from '../../contexts';
import { Card } from '../Card';
import { IBookGridProps } from './BooksGridTypes';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 186px);
	grid-gap: 0% 3%;
	margin: 10% 15%;
`;

function BooksGrid(props: IBookGridProps): JSX.Element {
	const { books } = useContext(BooksContext);

	return (
		<Grid>
			{books
				.filter((item) =>
					props.userId ? item.user.id === props.userId : item
				)
				.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						book_cover={item.book_cover}
						year={item.year}
						id={item.id}
					></Card>
				))}
		</Grid>
	);
}

export { BooksGrid };
