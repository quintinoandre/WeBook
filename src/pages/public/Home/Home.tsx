import { BooksGrid } from '../../../components/BooksGrid/BooksGrid';
import { Carousel } from '../../../components/Carousel';

function Home(): JSX.Element {
	return (
		<>
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

export { Home };
