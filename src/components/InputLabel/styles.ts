import styled from 'styled-components';

interface ILabel {
	labelMarginTop?: string;
	labelMarginBottom?: string;
}

interface IInput {
	inputMarginTop?: string;
	inputMarginBottom?: string;
}

const Label = styled.label.attrs((props: ILabel) => ({
	labelMarginTop: props.labelMarginTop,
	labelMarginBottom: props.labelMarginBottom,
}))<ILabel>`
	display: flex;
	justify-content: center;
	font-size: 0.75rem;
	line-height: 0.875rem;
	color: ${({ theme }) => theme.black};
	margin-top: ${(props) => props.labelMarginTop ?? '0rem'};
	margin-bottom: ${(props) => props.labelMarginBottom ?? '0rem'};
`;

const Input = styled.input.attrs((props: IInput) => ({
	inputMarginTop: props.inputMarginTop,
	inputMarginBottom: props.inputMarginBottom,
}))<IInput>`
	border-radius: ${({ theme }) => theme['borderRadius-10']};
	border: none;
	width: 100%;
	background-color: ${({ theme }) => theme['gray-100']};
	height: 1.375rem;
	padding: 0.5rem;
	font-size: 0.75rem;
	line-height: 0.875rem;
	margin-top: ${(props) => props.inputMarginTop ?? '0rem'};
	margin-bottom: ${(props) => props.inputMarginBottom ?? '0rem'};
`;

export { Label, Input };
