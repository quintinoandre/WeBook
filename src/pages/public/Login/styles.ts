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

const Divider = styled.hr`
	border: 0.0625rem solid ${({ theme }) => theme.black};
`;

const BaseLabel = styled.label`
	display: flex;
	justify-content: center;
	font-size: 0.75rem;
	line-height: 0.875rem;
	color: ${({ theme }) => theme.black};
`;

const UsernameLabel = styled(BaseLabel)`
	margin-top: 1.1875rem;
`;

const PasswordLabel = styled(BaseLabel)`
	margin-top: 1.9375rem;
`;

const BaseInput = styled.input`
	border-radius: ${({ theme }) => theme['borderRadius-10']};
	border: none;
	width: 100%;
	background-color: ${({ theme }) => theme['gray-100']};
	height: 1.375rem;
	padding: 0.5rem;
	font-size: 0.75rem;
	line-height: 0.875rem;
`;

const UsernameInput = styled(BaseInput)`
	margin-top: 0.75rem;
`;

const PasswordInput = styled(BaseInput)`
	margin-top: 0.75rem;
	margin-bottom: 2.9375rem;
`;

const LoginButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	border-radius: ${({ theme }) => theme['borderRadius-10']};
	background: ${({ theme }) => theme.backGroundColor};
	color: ${({ theme }) => theme['white-100']};
	font-size: 0.75rem;
	line-height: 0.875rem;
	cursor: pointer;
	width: 100%;
	margin-top: 3.0625rem;
	margin-bottom: 4.8125rem;

	&:hover {
		background: ${({ theme }) => theme['backGroundColor-light']};
	}
`;

const SignInButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	background: transparent;
	width: 100%;
	margin-top: 2.75rem;
	font-size: 0.75rem;
	line-height: 0.875rem;
	cursor: pointer;
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

export {
	LoginForm,
	FieldsContainer,
	LoginTitle,
	Divider,
	UsernameLabel,
	PasswordLabel,
	UsernameInput,
	PasswordInput,
	LoginButton,
	SignInButton,
	ErrorMessage,
};
