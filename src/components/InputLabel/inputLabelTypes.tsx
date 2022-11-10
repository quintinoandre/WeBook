import { ChangeEvent } from 'react';

interface IInputLabelProps {
	htmlFor: string;
	labelText: string;
	type: string;
	value: string | number;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	labelMarginTop?: string;
	labelMarginBottom?: string;
	inputMarginTop?: string;
	inputMarginBottom?: string;
}

export type { IInputLabelProps };
