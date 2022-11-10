import { api } from '../../lib';
import { IBook, IInsertBook } from './bookServiceTypes';

async function getAllBooks(): Promise<IBook[]> {
	const response = await api.get('/api/book/?sort_by=year&order_by=desc');

	const books: IBook[] = response.data.data;

	return books;
}

async function getBookById(bookId: number): Promise<IBook> {
	const response = await api.get(`/api/book/${bookId}`);

	const book: IBook = response.data.data;

	return book;
}

async function insertNewBook(newBook: IInsertBook): Promise<IBook> {
	const response = await api.post('/api/book', newBook);

	const book: IBook = response.data.data;

	return book;
}

export { getAllBooks, getBookById, insertNewBook };
