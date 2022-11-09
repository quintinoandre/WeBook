import { ReactNode } from 'react';

interface IBook {
	id: number;
	title: string;
	year: number;
	description: string;
	book_cover: string;
	user: {
		id: number;
		name: string;
		email: string;
		profile_picture: string;
	};
}

interface IBooksContextType {
	books: IBook[];
}

interface IBooksProviderProps {
	children: ReactNode;
}

export type { IBook, IBooksContextType, IBooksProviderProps };
