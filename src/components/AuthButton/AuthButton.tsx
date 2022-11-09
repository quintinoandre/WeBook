import { IAuthButtonProps, ICustomClickEvent } from './AuthButtonTypes';
import { Button } from './styles';

function AuthButton(props: IAuthButtonProps): JSX.Element {
	return (
		<Button
			disabled={props.disabled}
			marginTop={props.marginTop}
			marginBottom={props.marginBottom}
			onClick={(event: ICustomClickEvent) => props.onClick(event)}
		>
			{props.text}
		</Button>
	);
}

export { AuthButton };
