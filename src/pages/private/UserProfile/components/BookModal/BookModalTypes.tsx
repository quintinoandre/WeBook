import { MouseEvent } from 'react';

interface IBook {
	title: string;
	year: number;
	description: string;
	book_cover: string;
}

interface IBookModalProps {
	title: string;
	setIsOpen: (isOpen: boolean) => void;
}

interface ICustomClickEvent extends MouseEvent<HTMLElement> {
	preventDefault: () => void;
}

export type { IBookModalProps, IBook, ICustomClickEvent };
