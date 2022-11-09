import { Outlet, useNavigate } from 'react-router-dom';

import { getTokenFromCookies } from '../../utils';
import { LoginButton, NavBar, NavBarWithLogin, ProfilePick } from './styles';

function Header(): JSX.Element {
	const navigate = useNavigate();

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	function handleClickProfileButton(): void {
		navigate('/userprofile');
	}

	return (
		<>
			{getTokenFromCookies().length > 0 ? (
				<NavBarWithLogin>
					<h1>
						<a href="">WEBOOK</a>
					</h1>
					<ProfilePick onClick={handleClickProfileButton}>
						<img
							src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"
							alt="User Profile Pic"
						/>
						<h4>Brad Pitt</h4>
					</ProfilePick>
				</NavBarWithLogin>
			) : (
				<NavBar>
					<h1>
						<a href="">WEBOOK</a>
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
