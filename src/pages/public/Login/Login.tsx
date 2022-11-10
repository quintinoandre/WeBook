import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	AuthButton,
	Divider,
	InputLabel,
	RedirectButton,
} from '../../../components';
import * as authService from '../../../services/authService';
import { LoginMessages } from './LoginMessages';
import { ICustomClickEvent, IUserCredentials } from './loginTypes';
import { ErrorMessage, FieldsContainer, LoginForm, LoginTitle } from './styles';

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
			return setError(LoginMessages.FILL_ALL_DATA);
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
				<InputLabel
					htmlFor="username"
					labelText="Username"
					type="email"
					value={userCredentials.username}
					labelMarginTop="1.1875rem"
					inputMarginTop="0.75rem"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<InputLabel
					htmlFor="password"
					labelText="Password"
					type="password"
					value={userCredentials.password}
					labelMarginTop="1.9375rem"
					inputMarginTop="0.75rem"
					inputMarginBottom="2.9375rem"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<Divider />
				<AuthButton
					text="Login"
					disabled={isLoading}
					marginTop="3.0625rem"
					marginBottom="4.8125rem"
					onClick={(event: ICustomClickEvent) =>
						handleClickLoginButton(event)
					}
				/>
				<Divider />
				<RedirectButton
					text="or Sign in"
					onClick={handleClickSignInButton}
				/>
			</FieldsContainer>
			{error ? <ErrorMessage>{error}</ErrorMessage> : <></>}
		</LoginForm>
	);
}

export { Login };
