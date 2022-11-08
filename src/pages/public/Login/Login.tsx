import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../../services/authService';
import { ICustomClickEvent, IUserCredentials } from './LoginTypes';
import {
	Divider,
	ErrorMessage,
	FieldsContainer,
	LoginButton,
	LoginForm,
	LoginTitle,
	PasswordInput,
	PasswordLabel,
	SignInButton,
	UsernameInput,
	UsernameLabel,
} from './styles';

const DEFAULT_USER_CREDENTIALS = {
	username: '',
	password: '',
} as const;

function Login(): JSX.Element {
	const navigate = useNavigate();

	const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
		...DEFAULT_USER_CREDENTIALS,
	});

	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);

		setError(error.response ? error.response.data.message : error.message);
	}

	async function login(username: string, password: string): Promise<void> {
		try {
			setIsLoading(true);

			const user = await authService.login(username, password);

			if (user) {
				navigate('/');
			}
		} catch (error) {
			handleError(error);

			setIsLoading(false);

			setUserCredentials({ ...DEFAULT_USER_CREDENTIALS });
		}
	}

	function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
		setError('');

		setUserCredentials((previousState) => ({
			...previousState,
			[event.target.id]: event.target.value,
		}));
	}

	function handleClickLoginButton(event: ICustomClickEvent): void {
		event.preventDefault();

		if (!userCredentials.username || !userCredentials.password) {
			return setError('Please fill in all the data');
		}

		void login(userCredentials.username, userCredentials.password);
	}

	function handleClickSignInButton(): void {
		navigate('/signin');
	}

	return (
		<LoginForm>
			<FieldsContainer>
				<LoginTitle>Login</LoginTitle>
				<Divider />
				<UsernameLabel htmlFor="username">Username</UsernameLabel>
				<UsernameInput
					id="username"
					type="email"
					value={userCredentials.username}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<PasswordLabel htmlFor="password">Password</PasswordLabel>
				<PasswordInput
					id="password"
					type="password"
					value={userCredentials.password}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<Divider />
				<LoginButton
					disabled={isLoading}
					onClick={(event: ICustomClickEvent) =>
						handleClickLoginButton(event)
					}
				>
					Login
				</LoginButton>
				<Divider />
				<SignInButton onClick={handleClickSignInButton}>
					or Sign in
				</SignInButton>
			</FieldsContainer>
			{error ? <ErrorMessage>{error}</ErrorMessage> : <></>}
		</LoginForm>
	);
}

export { Login };
