import styled from 'styled-components';

const BookInfoContainterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 650px;
	background: orange;
	color: blue;
`;

const BookCoverAndTitle = styled.div`
	background: green;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	h1 {
		font-size: 30px;
	}
	img {
		max-height: 400px;
		margin: 30px;
		background: purple;
	}
`;
const BookDetailedInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	background: yellow;
	height: 300px;
	h2 {
		color: purple;
	}
	span {
		color: black;
		font-size: 15px;
	}
`;

/* -------------SOMETHING TO DELETE--------------------- */
/* -------------SOMETHING TO DELETE--------------------- */
const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	height: 80px;
	background-color: green;
	box-shadow: 0px 3px 19px -7px rgba(0, 0, 0, 0.75);
	h1 a {
		color: black;
		text-decoration: none;
	}
`;
const LoginButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	padding: 1rem;
	border-radius: 8px;
	background: ${({ theme }) => theme['green-700']};
	color: ${({ theme }) => theme['gray-100']};
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme['green-500']};
	}
`;

export {
	NavBar,
	BookInfoContainterStyle,
	LoginButton,
	BookCoverAndTitle,
	BookDetailedInfo,
};
