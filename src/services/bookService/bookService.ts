import { api } from '../../lib';
import { IBook } from './bookServiceTypes';

async function getAllBooks(): Promise<IBook> {
	const { data: books }: { data: IBook } = await api.get(
		'/api/book/?sort_by=year&order_by=desc'
	);

	return books;
}

export { getAllBooks };
