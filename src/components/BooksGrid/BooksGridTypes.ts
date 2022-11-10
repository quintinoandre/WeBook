import { MouseEvent } from 'react';

interface ICustomClickEvent extends MouseEvent<HTMLElement> {
	preventDefault: () => void;
}

interface IBookGridProps {
	userId?: number;
}

interface IBook {
	id: number;
	title: string;
	year: number;
	description: string;
	book_cover: string;
}

export type { ICustomClickEvent, IBookGridProps, IBook };
