import { ChangeEvent } from 'react';

import { IInputLabelProps } from './inputLabelTypes';
import { Input, Label } from './styles';

function InputLabel(props: IInputLabelProps): JSX.Element {
	return (
		<>
			<Label
				htmlFor={props.htmlFor}
				labelMarginTop={props.labelMarginTop}
				labelMarginBottom={props.labelMarginBottom}
			>
				{props.labelText}
			</Label>
			<Input
				id={props.htmlFor}
				type={props.type}
				value={props.value}
				inputMarginTop={props.inputMarginTop}
				inputMarginBottom={props.inputMarginBottom}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					props.onChange(event)
				}
			/>
		</>
	);
}

export { InputLabel };
