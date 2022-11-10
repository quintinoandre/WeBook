import { api } from '../../lib';
import {
	IBook,
	IDeleteBookResponse,
	IInsertBook,
	IUpdateBook,
} from './bookServiceTypes';

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

async function updateBook(
	bookId: number,
	updatedBook: IUpdateBook
): Promise<IBook> {
	const response = await api.put(`/api/book/${bookId}`, updatedBook);

	const book: IBook = response.data.data;

	return book;
}

async function deleteBook(bookId: number): Promise<IDeleteBookResponse> {
	const response = await api.delete(`/api/book/${bookId}`);

	return response.data;
}

export { getAllBooks, getBookById, insertNewBook, updateBook, deleteBook };
