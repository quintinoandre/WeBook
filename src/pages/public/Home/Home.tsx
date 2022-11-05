import { useNavigate } from 'react-router-dom';

import { LoginButton } from './styles';

function Home(): JSX.Element {
	const navigate = useNavigate();

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	return (
		<>
			<div>Home</div>
			<LoginButton onClick={handleClickLoginButton}>Login</LoginButton>
		</>
	);
}

export { Home };
