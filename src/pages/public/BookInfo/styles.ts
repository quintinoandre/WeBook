import styled from 'styled-components';

const BookInfoContainterStyle = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	height: 650px;
	margin: 2.5% 5%;
	background: rgba(245, 245, 245, 0.2);
	border-radius: 20px;
`;

const BookCoverAndTitle = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	margin: 20px;
	h1 {
		color: lightgray;
		font-size: 30px;
	}
	img {
		max-height: 400px;
		margin: 30px;
	}
`;
const BookDetailedInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	height: 300px;
	margin-right: 20px;
	color: lightgray;
	span {
		padding: 10px;
		color: black;
		font-size: 15px;
	}
`;

export { BookInfoContainterStyle, BookCoverAndTitle, BookDetailedInfo };
