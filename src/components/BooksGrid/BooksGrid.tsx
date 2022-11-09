import styled from 'styled-components';

import Card from '../Card/Card';
import { IBookGridProps } from './BooksGridTypes';

const Grid = styled.div`
	height: 50rem;
	width: 100%;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(6, 1fr);
	width: 80%;
	margin: 0 auto;
	gap: 10px;
	margin-top: 200px;
`;

function BooksGrid(props: IBookGridProps): JSX.Element {
	return (
		<Grid>
			{props.data.map((item) => (
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
