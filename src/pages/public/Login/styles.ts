import styled from 'styled-components';

const LoginForm = styled.form`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 26.125rem;
	height: 36.875rem;
	background: ${({ theme }) => theme['white-100']};
	margin-left: calc(50vw - 26.125rem / 2);
	margin-top: calc(50vh - 36.875rem / 2);
	border-radius: ${({ theme }) => theme['borderRadius-10']};
`;

const FieldsContainer = styled.div`
	width: 13.5rem;
	margin: 0 auto;
`;

const LoginTitle = styled.span`
	display: flex;
	justify-content: center;
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 1.75rem;
	color: ${({ theme }) => theme['blue-100']};
	margin-top: 3.5rem;
	margin-bottom: 2.3125rem;
`;

const ErrorMessage = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme['red-100']};
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	border-radius: ${({ theme }) => theme['borderRadius-10']};
	font-size: 0.75rem;
	line-height: 0.875rem;
	margin-left: 1rem;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

export { LoginForm, FieldsContainer, LoginTitle, ErrorMessage };
