import { IRedirectButtonProps } from './redirectButtonTypes';
import { Button } from './styles';

function RedirectButton(props: IRedirectButtonProps): JSX.Element {
	return (
		<Button type="button" onClick={props.onClick}>
			{props.text}
		</Button>
	);
}

export { RedirectButton };
