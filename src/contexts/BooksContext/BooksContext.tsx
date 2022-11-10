import { createContext, useCallback, useEffect, useState } from 'react';

import * as bookService from '../../services/bookService';
import {
	IBook,
	IBooksContextType,
	IBooksProviderProps,
	IInsertBook,
	IUpdateBook,
} from './booksContextTypes';

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

	const insertNewBook = useCallback(
		async function (newBook: IInsertBook): Promise<void> {
			try {
				const book = await bookService.insertNewBook(newBook);

				if (book) {
					setBooks((previousState) => [...previousState, book]);
				}
			} catch (error) {
				handleError(error);
			}
		},
		[books]
	);

	const updateBook = useCallback(
		async function (
			bookId: number,
			updatedBook: IUpdateBook
		): Promise<void> {
			try {
				const book = await bookService.updateBook(bookId, updatedBook);

				if (book) {
					const bookIndex = books.findIndex(
						(book) => book.id === bookId
					);

					const updatedBooks = [...books];

					updatedBooks.splice(bookIndex, 1, book);

					setBooks([...updatedBooks]);
				}
			} catch (error) {
				handleError(error);
			}
		},
		[books]
	);

	const deleteBook = useCallback(
		async function (bookId: number): Promise<void> {
			try {
				const response = await bookService.deleteBook(bookId);

				if (response) {
					const bookIndex = books.findIndex(
						(book) => book.id === bookId
					);

					const updatedBooks = [...books];

					updatedBooks.splice(bookIndex, 1);

					setBooks([...updatedBooks]);
				}
			} catch (error) {
				handleError(error);
			}
		},
		[books]
	);

	useEffect(() => {
		void getAllBooks();
	}, []);

	return (
		<BooksContext.Provider
			value={{ books, insertNewBook, updateBook, deleteBook }}
		>
			{children}
		</BooksContext.Provider>
	);
}

export { BooksProvider, BooksContext };
