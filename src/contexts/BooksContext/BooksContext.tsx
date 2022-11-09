import { createContext, useCallback, useEffect, useState } from 'react';

import * as bookService from '../../services/bookService';
import {
	IBook,
	IBooksContextType,
	IBooksProviderProps,
} from './BooksContextTypes';

const BooksContext = createContext({} as IBooksContextType);

function BooksProvider({ children }: IBooksProviderProps): JSX.Element {
	const [books, setBooks] = useState([] as IBook[]);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	const getAllBooks = useCallback(async () => {
		try {
			const response = await bookService.getAllBooks();

			setBooks([...response]);
		} catch (error) {
			handleError(error);
		}
	}, []);

	useEffect(() => {
		void getAllBooks();
	}, []);

	return (
		<BooksContext.Provider value={{ books }}>
			{children}
		</BooksContext.Provider>
	);
}

export { BooksProvider, BooksContext };