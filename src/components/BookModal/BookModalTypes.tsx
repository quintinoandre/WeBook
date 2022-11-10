import { MouseEvent } from 'react';

interface IBook {
	id?: number;
	title: string;
	year: number;
	description: string;
	book_cover: string;
}

interface IBookModalProps {
	title: string;
	setIsOpen: (isOpen: boolean) => void;
	bookId?: number;
	bookTitle?: string;
	year?: number;
	description?: string;
	book_cover?: string;
	edit: boolean;
}

interface ICustomClickEvent extends MouseEvent<HTMLElement> {
	preventDefault: () => void;
}

export type { IBookModalProps, IBook, ICustomClickEvent };
