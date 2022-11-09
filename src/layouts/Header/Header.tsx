import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { getUserProfile } from '../../services';
import { getTokenFromCookies } from '../../utils';
import { IUserProfile } from './HeaderTypes';
import { LoginButton, NavBar, NavBarWithLogin, ProfilePick } from './styles';

function Header(): JSX.Element {
	const navigate = useNavigate();
	const [userProfile, setUserProfile] = useState({} as IUserProfile);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	async function getUserDetails(): Promise<void> {
		try {
			const response = await getUserProfile();

			setUserProfile(response);
		} catch (error) {
			handleError(error);
		}
	}

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	function handleClickProfileButton(): void {
		navigate('/userprofile');
	}

	function handleHomePageButton(): void {
		navigate('/');
	}

	// useEffect(() => {
	// 	void getUserDetails();
	// }, []);
	return (
		<>
			{getTokenFromCookies().length > 0 ? (
				<NavBarWithLogin>
					<h1>
						<a onClick={handleHomePageButton}>WEBOOK</a>
					</h1>
					<ProfilePick onClick={handleClickProfileButton}>
						<img
							// src={userProfile.data.profile_picture}
							src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"
							alt="User Profile Pic"
						/>
						<h4>Brad Pitt</h4>
						{/* <h4>{userProfile.data.name}</h4> */}
					</ProfilePick>
				</NavBarWithLogin>
			) : (
				<NavBar>
					<h1>
						<a onClick={handleHomePageButton}>WEBOOK</a>
					</h1>
					<LoginButton onClick={handleClickLoginButton}>
						Login
					</LoginButton>
				</NavBar>
			)}
			<Outlet />
		</>
	);
}

export { Header };
