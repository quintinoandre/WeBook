import { useNavigate } from 'react-router-dom';

import { NavBar, LoginButton, NavBarWithLogin, ProfilePick } from './styles';

function Navbar(): JSX.Element {
	const navigate = useNavigate();

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	function handleClickProfileButton(): void {
		navigate('/login');
	}

	return (
		<>
			{/* <NavBar>
				<h1>
					<a href="">WEBOOK</a>
				</h1>
				<LoginButton onClick={handleClickLoginButton}>
					Login
				</LoginButton>
			</NavBar> */}
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
		</>
	);
}

export { Navbar };
