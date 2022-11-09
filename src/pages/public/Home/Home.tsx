import { useContext } from 'react';

import { BooksGrid } from '../../../components/BooksGrid/BooksGrid';
import { Carousel } from '../../../components/Carousel';
import { BooksContext } from '../../../contexts';

function Home(): JSX.Element {
	const { books } = useContext(BooksContext);

	return (
		<>
			<Carousel data={books}></Carousel>
			{/* <div>Home</div> */}
			<BooksGrid data={books}></BooksGrid>
			{/* <LoginButton onClick={handleClickLoginButton}>Login</LoginButton> */}
			{/* <br /> */}
			{/* <div>Book Info</div> */}
			{/* <LoginButton onClick={handleClickBookInfoButton}>
				Book Info
			</LoginButton> */}
		</>
	);
}

export { Home };
