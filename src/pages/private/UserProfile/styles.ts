import styled from 'styled-components';

const ProfileStyle = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	margin: 2.5% 5%;
	border-radius: 20px;
	height: 500px;
	background: rgba(245, 245, 245, 0.2);
`;

const ProfilePictureAndButton = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 100px;
    
	img {
        border-radius: 50%;
		width: 300px;
		height: 300px;
        padding: 10px;
        
	}
	button {
        font-family: 'Roboto';
		border-radius: ${({ theme }) => theme['borderRadius-10']};
		border: 0;
		margin-left: 30%;
		margin-top: 20px;
		width: 114px;
		background: ${({ theme }) => theme.backGroundColor};
		color: ${({ theme }) => theme['white-100']};
        
        &:hover {
            background: ${({ theme }) => theme['backGroundColor-light']};
        }
        &:active{
            background: ${({ theme }) => theme.backGroundColor};
        }
        `;

const ProfileDetails = styled.ul`
	padding: 50px;
	display: flex;
	flex-direction: column;
	height: 300px;
	margin-top: 20px;
	margin-left: 20px;
	gap: 30px;
	font-family: 'Roboto';
	font-size: normal;
	font-weight: bold;
	list-style-type: circle;
	border-left: 2px solid lightgray;
	color: lightgray;
	list-style: none;
	span {
		margin-bottom: 10px;
		font-weight: normal;
		font-style: italic;
	}
`;

const LineDivider = styled.div`
	background: black;
	flex-direction: column;
	height: 1%;
`;

const AddButton = styled.button`
	font-size: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 80%;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: 2px solid #044480;

	&:hover {
		background: ${({ theme }) => theme['backGroundColor-light']};
	}
	&:active {
		position: absolute;
		padding-top: 25px;
		padding-bottom: 25px;
		padding-left: 25px;
		padding-right: 25px;
	}
`;

export {
	ProfileStyle,
	ProfilePictureAndButton,
	ProfileDetails,
	LineDivider,
	AddButton,
};
