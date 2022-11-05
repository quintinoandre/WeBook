import { api } from '../../lib';
import { IUserProfile } from './usersServiceTypes';

async function getUserProfile(): Promise<IUserProfile> {
	const { data: userProfile }: { data: IUserProfile } = await api.get(
		'/api/user/profile'
	);

	return userProfile;
}

export { getUserProfile };
