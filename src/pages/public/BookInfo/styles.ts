import styled from 'styled-components';

const BookInfoContainterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 650px;
	margin: 30px;
	background: rgba(245, 245, 245, 0.65);
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
		color: ${({ theme }) => theme['blue-100']};
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
	height: 300px;
	color: ${({ theme }) => theme['blue-100']};
	span {
		color: black;
		font-size: 15px;
	}
`;

export { BookInfoContainterStyle, BookCoverAndTitle, BookDetailedInfo };
