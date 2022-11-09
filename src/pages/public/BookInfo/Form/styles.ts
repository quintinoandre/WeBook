import styled from 'styled-components';

// --------------FORM STYLE-----------------------

const FormContainerStyle = styled.form`
	display: flex;
	flex-direction: column;
	padding: 20px;
	h1 {
		padding: 0px 10px;
		color: ${({ theme }) => theme['blue-100']};
	}
`;

const TextArea = styled.textarea`
	resize: none;
	background: rgba(245, 245, 245, 0.38);
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	margin: 10px;
	font-size: 17px;
`;

const SubmitButton = styled.button`
	margin: 0px 10px;
	border: 0;
	border-radius: 10px;
	width: 150px;
	height: 40px;
	background: rgba(245, 245, 245, 0.38);
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	font-size: 17px;
	color: ${({ theme }) => theme['blue-100']};

	&:hover {
		background: ${({ theme }) => theme['gray-200']};
		border: 2px solid ${({ theme }) => theme['blue-100']};
	}
`;

// --------------COMMENT STYLE-----------------------

const CommentsContainer = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	height: 130px;
	width: 900px;
	margin: 25px;
	background: rgba(245, 245, 245, 0.38);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	ul {
		margin: 10px;
	}
	p {
		padding: 10px;
	}
`;

const ProfilePick = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
	border: 0;
	padding: 0;
	margin: 10px;
	border-radius: 10px;
	color: ${({ theme }) => theme['blue-100']};
	font-weight: bold;

	img {
		cursor: pointer;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 5px 10px;
	}
	h1 {
		margin: 5px 5px;
		top: 0;
		font-size: 15px;
		width: 100px;
	}
`;

export {
	FormContainerStyle,
	TextArea,
	SubmitButton,
	ProfilePick,
	CommentsContainer,
};
