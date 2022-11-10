import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.2rem;
	margin-bottom: 1rem;
`;

const BaseButton = styled.button`
	width: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	padding: 0.375rem;
	border-radius: ${({ theme }) => theme['borderRadius-10']};
	color: ${({ theme }) => theme['white-100']};
	font-size: 0.75rem;
	line-height: 0.875rem;
	cursor: pointer;
	/* width: ; */

	transition: background-color 0.3s;
`;

const EditButton = styled(BaseButton)`
	background: ${({ theme }) => theme.backGroundColor};

	&:hover {
		background: ${({ theme }) => theme['backGroundColor-light']};
	}
`;

const DeleteButton = styled(BaseButton)`
	background: #ff3e4e;

	&:hover {
		background: #ff7d7d;
	}
`;

export { CardContainer, ButtonContainer, EditButton, DeleteButton };
