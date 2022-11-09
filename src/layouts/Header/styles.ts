import styled from 'styled-components';

/* -------------NAVBAR NO LOGIN--------------------- */

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	height: 80px;
	background: rgba(245, 245, 245, 0.38);
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 20px;
	h1 a {
		color: ${({ theme }) => theme['blue-100']};
		text-decoration: none;
	}
`;

const LoginButton = styled.button`
	border: 0;
	padding: 5px 20px;
	border-radius: 8px;
	background: rgba(245, 245, 245, 0.75);
	color: ${({ theme }) => theme['blue-100']};
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme['gray-300']};
		border: 1px solid ${({ theme }) => theme['blue-100']};
	}
`;

/* -------------NAVBAR WITH LOGIN--------------------- */
const NavBarWithLogin = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	height: 80px;
	background: rgba(245, 245, 245, 0.38);
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 20px;
	h1 a {
		color: ${({ theme }) => theme['blue-100']};
		text-decoration: none;
	}
`;

const ProfilePick = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	border: 0;
	padding: 0;
	border-radius: 10px;
	color: ${({ theme }) => theme['blue-100']};
	font-weight: bold;
	cursor: pointer;
	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 5px 10px;
	}
`;

export { NavBar, NavBarWithLogin, LoginButton, ProfilePick };
