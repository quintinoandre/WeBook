import { MouseEvent } from 'react';

interface IUserCredentials {
	username: string;
	password: string;
}

interface ICustomClickEvent extends MouseEvent<HTMLElement> {
	preventDefault: () => void;
}

export type { IUserCredentials, ICustomClickEvent };
