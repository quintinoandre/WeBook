import { api } from '../../lib';
import { IBook } from './bookServiceTypes';

async function getAllBooks(): Promise<IBook[]> {
	const response = await api.get('/api/book/?sort_by=year&order_by=desc');

	const books: IBook[] = response.data.data;

	return books;
}

export { getAllBooks };
