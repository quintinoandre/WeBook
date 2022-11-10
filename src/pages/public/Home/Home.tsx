import styled from 'styled-components';

import { BooksGrid } from '../../../components/BooksGrid/BooksGrid';
import { Carousel } from '../../../components/Carousel';
import { ArrayQuotes } from './Quotes';

function Home(): JSX.Element {
	const randomQuotes =
		ArrayQuotes[Math.floor(Math.random() * ArrayQuotes.length)];

	return (
		<>
			<Quotes>
				<h3>{randomQuotes.comment}</h3>
				<p>{randomQuotes.author}</p>
			</Quotes>
			<Carousel />
			{/* <div>Home</div> */}
			<BooksGrid />
			{/* <LoginButton onClick={handleClickLoginButton}>Login</LoginButton> */}
			{/* <br /> */}
			{/* <div>Book Info</div> */}
			{/* <LoginButton onClick={handleClickBookInfoButton}>
				Book Info
			</LoginButton> */}
		</>
	);
}

const Quotes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 400px;
	color: white;
	h3 {
		font-weight: lighter;
		width: 100%;
	}
	p {
		width: 40%;
		margin: 10px;
		text-align: right;
	}
`;

export { Home };
