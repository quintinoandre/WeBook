import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Carousel } from '../../../components/Carousel';
import * as bookService from '../../../services/bookService/bookService';
import { IBook } from '../../../services/bookService/bookServiceTypes';
import { BooksGrid } from '../../../components/BooksGrid/BooksGrid';
import { LoginButton } from './styles';

function Home(): JSX.Element {
	const navigate = useNavigate();

	function handleClickLoginButton(): void {
		navigate('/login');
	}

	function handleClickBookInfoButton(): void {
		navigate('/book-info');
	}
	const [books, setBooks] = useState<IBook[]>([]);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	async function getAllBooks(): Promise<void> {
		try {
			const response = await bookService.getAllBooks();

			setBooks([...response]);
		} catch (error) {
			handleError(error);
		}
	}

	useEffect(() => {
		void getAllBooks();
	}, []);

	return (
		<>
			<Carousel data={books}></Carousel>
			<div>Home</div>
			<BooksGrid data={books}></BooksGrid>
			<LoginButton onClick={handleClickLoginButton}>Login</LoginButton>
			<br />
			<div>Book Info</div>
			<LoginButton onClick={handleClickBookInfoButton}>
				Book Info
			</LoginButton>
		</>
	);
}

export { Home };
