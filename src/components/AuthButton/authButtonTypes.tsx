import { MouseEvent } from 'react';

interface ICustomClickEvent extends MouseEvent<HTMLElement> {
	preventDefault: () => void;
}

interface IAuthButtonProps {
	text: string;
	disabled: boolean;
	onClick: (event: ICustomClickEvent) => void;
	marginTop?: string;
	marginBottom?: string;
}

export type { ICustomClickEvent, IAuthButtonProps };
