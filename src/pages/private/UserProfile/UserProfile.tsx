import { useEffect, useState } from 'react';

import { BookModal, BooksGrid } from '../../../components';
import * as usersService from '../../../services/usersService';
import { getUserIdFromCookies } from '../../../utils';
import {
	ProfileStyle,
	ProfilePictureAndButton,
	ProfileDetails,
	AddButton,
} from './styles';
import { IUserProfile } from './UserProfileTypes';

function UserProfile(): JSX.Element {
	const [error, setError] = useState<string>('');
	const [userProfile, setUserProfile] = useState({} as IUserProfile);
	const [isOpen, setIsOpen] = useState<boolean>(false);

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

	// useEffect(() => {
	// 	void getUserProfile();
	// }, []);

	return (
		<>
			<ProfileStyle>
				<ProfilePictureAndButton>
					<img src={userProfile.data?.profile_picture}></img>
					<button type="button">Edit</button>
				</ProfilePictureAndButton>
				<ProfileDetails>
					<li>Name: </li>
					<span>{userProfile.data?.name}</span>
					<li>Email: </li>
					<span>{userProfile.data?.email}</span>
				</ProfileDetails>
			</ProfileStyle>
			<AddButton type="button" onClick={() => setIsOpen(true)}>
				+
			</AddButton>
			<BooksGrid userId={getUserIdFromCookies()} />
			{isOpen && (
				<BookModal
					title="Create Book"
					setIsOpen={setIsOpen}
					edit={false}
				/>
			)}
			{/* <pre>{JSON.stringify(userProfile)}</pre> */}
		</>
	);
}

export { UserProfile };
