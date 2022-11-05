import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../../services/authService';
import { UserProfileButton } from './styles';

function Login(): JSX.Element {
	const navigate = useNavigate();

	const [error, setError] = useState<string>('');

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);

		setError(error.response ? error.response.data : error.message);
	}

	async function login(): Promise<void> {
		try {
			await authService.login('csoares@ufp.edu.pt', 'password');
		} catch (error) {
			handleError(error);
		}
	}

	useEffect(() => {
		void login();
	}, []);

	function handleClickUserProfileButton(): void {
		navigate('/userProfile');
	}

	return (
		<>
			<div>Login</div>
			<UserProfileButton onClick={handleClickUserProfileButton}>
				User Profile
			</UserProfileButton>
		</>
	);
}

export { Login };
