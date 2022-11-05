import { useEffect, useState } from 'react';

import * as usersService from '../../../services/usersService';
import { IUserProfile } from './UserProfileTypes';

function UserProfile(): JSX.Element {
	const [error, setError] = useState<string>('');
	const [userProfile, setUserProfile] = useState({} as IUserProfile);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);

		setError(error.response ? error.response.data : error.message);
	}

	async function getUserProfile(): Promise<void> {
		try {
			const response = await usersService.getUserProfile();

			setUserProfile({ ...response });
		} catch (error) {
			handleError(error);
		}
	}

	useEffect(() => {
		void getUserProfile();
	}, []);

	return (
		<>
			<div>UserProfile</div>
			<pre>{JSON.stringify(userProfile)}</pre>
		</>
	);
}

export { UserProfile };
