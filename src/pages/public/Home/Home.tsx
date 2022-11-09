import { useNavigate } from 'react-router-dom';
import { Carousel } from '../../../components/carousel';

import { LoginButton } from './styles';

function Home(): JSX.Element {
	const navigate = useNavigate();

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	function handleClickBookInfoButton(): void {
		navigate('/book-info');
	}

	return (
		<>
			<Carousel></Carousel>
			<div>Home</div>
			<LoginButton onClick={handleClickLoginButton}>Login</LoginButton>
			<br />
			<div>Book Info</div>
			<LoginButton onClick={handleClickBookInfoButton}>
				Book Info
			</LoginButton>
		</>
	);
}

export { Home };
