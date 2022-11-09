import { useContext } from 'react';
import styled from 'styled-components';

import { BooksContext } from '../../contexts';
import { Card } from '../Card';
import { IBookGridProps } from './BooksGridTypes';

const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(6, 1fr);
	width: 80%;
	margin: 0 auto;
	gap: 10px;
	margin-top: 200px;
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
