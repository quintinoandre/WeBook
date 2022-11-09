import styled from 'styled-components';

interface IButton {
	marginTop?: string;
	marginBottom?: string;
}

const Button = styled.button.attrs((props: IButton) => ({
	marginTop: props.marginTop,
	marginBottom: props.marginBottom,
}))<IButton>`
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
	margin-top: ${(props) => props.marginTop ?? '0rem'};
	margin-bottom: ${(props) => props.marginBottom ?? '0rem'};
	transition: background-color 0.3s;

	&:hover {
		background: ${({ theme }) => theme['backGroundColor-light']};
	}

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

export { Button };
