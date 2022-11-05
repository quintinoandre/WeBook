import styled from 'styled-components';

const UserProfileButton = styled.button`
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

export { UserProfileButton };
