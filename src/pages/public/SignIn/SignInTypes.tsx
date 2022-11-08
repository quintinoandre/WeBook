import { MouseEvent } from 'react';

interface IUserData {
	email: string;
	password: string;
	confirmPassword: string;
	name: string;
	profile_picture: string;
}

interface ICustomClickEvent extends MouseEvent<HTMLElement> {
	preventDefault: () => void;
}

export type { IUserData, ICustomClickEvent };
