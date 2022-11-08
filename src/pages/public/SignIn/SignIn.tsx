import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../../services/authService';
import { SignInMessages } from './SignInMessages';
import { ICustomClickEvent, IUserData } from './SignInTypes';
import {
	ConfirmPasswordInput,
	ConfirmPasswordLabel,
	Divider,
	EmailInput,
	EmailLabel,
	ErrorMessage,
	FieldsContainer,
	LoginButton,
	NameInput,
	NameLabel,
	PasswordInput,
	PasswordLabel,
	SignInButton,
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
				<NameLabel htmlFor="name">Name</NameLabel>
				<NameInput
					id="name"
					type="text"
					value={userData.name}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<EmailLabel htmlFor="email">Email</EmailLabel>
				<EmailInput
					id="email"
					type="email"
					value={userData.email}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<PasswordLabel htmlFor="password">Password</PasswordLabel>
				<PasswordInput
					id="password"
					type="password"
					value={userData.password}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<ConfirmPasswordLabel htmlFor="confirmPassword">
					Confirm Password
				</ConfirmPasswordLabel>
				<ConfirmPasswordInput
					id="confirmPassword"
					type="password"
					value={userData.confirmPassword}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						handleChangeInput(event)
					}
				/>
				<Divider />
				<SignInButton
					disabled={isLoading}
					onClick={(event: ICustomClickEvent) =>
						handleClickSignInButton(event)
					}
				>
					Sign In
				</SignInButton>
				<LoginButton onClick={handleClickLoginButton}>
					or Login
				</LoginButton>
			</FieldsContainer>
			{error ? <ErrorMessage>{error}</ErrorMessage> : <></>}
		</SignInForm>
	);
}

export { SignIn };
