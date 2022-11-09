import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	AuthButton,
	Divider,
	InputLabel,
	RedirectButton,
} from '../../../components';
import * as authService from '../../../services/authService';
import { SignInMessages } from './SignInMessages';
import { ICustomClickEvent, IUserData } from './SignInTypes';
import {
	ErrorMessage,
	FieldsContainer,
	SignInForm,
	SignInTitle,
} from './styles';

const DEFAULT_USER_DATA = {
	email: '',
	password: '',
	confirmPassword: '',
	name: '',
	profile_picture: '',
} as const;

function SignIn(): JSX.Element {
	const navigate = useNavigate();

	const [userData, setUserData] = useState<IUserData>({
		...DEFAULT_USER_DATA,
	});

	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);

		setError(error.response ? error.response.data.message : error.message);
	}

	async function register(
		email: string,
		password: string,
		name: string
	): Promise<void> {
		try {
			setIsLoading(true);

			const user = await authService.register(email, password, name);

			if (user) {
				navigate('/login');
			}
		} catch (error) {
			handleError(error);

			setIsLoading(false);

			setUserData({ ...DEFAULT_USER_DATA });
		}
	}

	function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
		setError('');

		setUserData((previousState) => ({
			...previousState,
			[event.target.id]: event.target.value,
		}));
	}

	function handleClickSignInButton(event: ICustomClickEvent): void {
		event.preventDefault();

		if (
			!userData.email ||
			!userData.password ||
			!userData.name ||
			!userData.confirmPassword
		) {
			return setError(SignInMessages.FILL_ALL_DATA);
		}

		if (
			(userData.password || userData.confirmPassword) &&
			userData.password !== userData.confirmPassword
		) {
			return setError(SignInMessages.PASSWORDS_MUST_BE_EQUALS);
		}

		void register(userData.email, userData.password, userData.name);
	}

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	return (
		<SignInForm>
			<FieldsContainer>
				<SignInTitle>Sign In</SignInTitle>
				<Divider />
				<InputLabel
					htmlFor="name"
					labelText="Name"
					type="text"
					value={userData.name}
					labelMarginTop="1.1875rem"
					inputMarginTop="1.0625rem"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<InputLabel
					htmlFor="email"
					labelText="Email"
					type="email"
					value={userData.email}
					labelMarginTop="1.1875rem"
					inputMarginTop="1.0625rem"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<InputLabel
					htmlFor="password"
					labelText="Password"
					type="password"
					value={userData.password}
					labelMarginTop="1.1875rem"
					inputMarginTop="1.0625rem"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<InputLabel
					htmlFor="confirmPassword"
					labelText="Confirm Password"
					type="password"
					value={userData.confirmPassword}
					labelMarginTop="1.1875rem"
					inputMarginTop="1.0625rem"
					inputMarginBottom="2.4375rem"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<Divider />
				<AuthButton
					text="Sign In"
					disabled={isLoading}
					marginTop="1.25rem"
					marginBottom="2.5rem"
					onClick={(event: ICustomClickEvent) =>
						handleClickSignInButton(event)
					}
				/>
				<RedirectButton
					text="or Login"
					onClick={handleClickLoginButton}
				/>
			</FieldsContainer>
			{error ? <ErrorMessage>{error}</ErrorMessage> : <></>}
		</SignInForm>
	);
}

export { SignIn };
