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

interface IInsertBook {
	title: string;
	year: number;
	description: string;
	book_cover: string;
}

interface IUpdateBook {
	title: string;
	year: number;
	description: string;
	book_cover: string;
}

interface IBooksContextType {
	books: IBook[];
	insertNewBook: (newBook: IInsertBook) => Promise<void>;
	updateBook: (bookId: number, updatedBook: IUpdateBook) => Promise<void>;
	deleteBook: (bookId: number) => Promise<void>;
}

interface IBooksProviderProps {
	children: ReactNode;
}

export type {
	IBook,
	IBooksContextType,
	IBooksProviderProps,
	IInsertBook,
	IUpdateBook,
};
