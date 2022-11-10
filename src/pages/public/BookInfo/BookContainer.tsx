import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBookById } from '../../../services/bookService';
import { IBook } from './bookTypes';
import {
	BookInfoContainerStyle,
	BookCoverAndTitle,
	BookDetailedInfo,
} from './styles';

function BookInfoContainer(): JSX.Element {
	const { id } = useParams();
	const [bookDetails, setBookDetails] = useState({} as IBook);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	async function getBookDetails(): Promise<void> {
		try {
			const response = await getBookById(Number(id));
			setBookDetails(response);
		} catch (error) {
			handleError(error);
		}
	}

	useEffect(() => {
		void getBookDetails();
	}, []);

	return (
		<BookInfoContainerStyle>
			<BookCoverAndTitle>
				<h1>{bookDetails.title}</h1>
				<img src={bookDetails.book_cover} alt="Book Cover" />
			</BookCoverAndTitle>
			<BookDetailedInfo>
				<h2>
					Title:
					<span>{bookDetails.title}</span>
				</h2>
				<h2>
					Year:
					<span>{bookDetails.year}</span>
				</h2>
				<h2>
					Description:
					<p>
						<span>{bookDetails.description}</span>
					</p>
				</h2>
			</BookDetailedInfo>
		</BookInfoContainerStyle>
	);
}

export { BookInfoContainer };
