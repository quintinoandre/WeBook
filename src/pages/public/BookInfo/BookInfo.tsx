import { useNavigate } from 'react-router-dom';

import { BookInfoContainter } from './BookContainer';
import { NavBar, LoginButton } from './styles';

function BookInfo(): JSX.Element {
	const navigate = useNavigate();

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	return (
		<>
			<NavBar>
				<h1>
					<a href="">WEBOOK</a>
				</h1>
				<LoginButton onClick={handleClickLoginButton}>
					Login
				</LoginButton>
			</NavBar>
			<BookInfoContainter />
		</>
	);
}

export { BookInfo };
