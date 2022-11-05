import { api } from '../../lib';
import { setCookie } from '../../utils';
import { IUser } from './authServiceTypes';

async function login(email: string, password: string): Promise<void> {
	const { data: user }: { data: IUser } = await api.post('/api/auth/login', {
		email,
		password,
	});

	const token = user.data.token;

	const { exp: expirationInSeconds }: { exp: number } = JSON.parse(
		window.atob(token.split('.')[1])
	);

	setCookie('token', token, expirationInSeconds);
}

export { login };
