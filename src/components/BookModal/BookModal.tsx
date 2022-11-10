import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { BooksContext } from '../../contexts';
import { InputLabel } from '../InputLabel';
import { BookModalMessages } from './BookModalMessages';
import { IBook, IBookModalProps, ICustomClickEvent } from './bookModalTypes';
import {
	ActionsContainer,
	CancelBtn,
	Centered,
	CloseBtn,
	DarkBG,
	ErrorMessage,
	Heading,
	Modal,
	ModalActions,
	ModalContent,
	ModalHeader,
	SaveBtn,
} from './styles';

const DEFAULT_BOOK: IBook = {
	title: '',
	year: 0,
	description: '',
	book_cover: '',
} as const;

function BookModal(props: IBookModalProps): JSX.Element {
	const { insertNewBook, updateBook } = useContext(BooksContext);

	const [book, setBook] = useState<IBook>({ ...DEFAULT_BOOK });
	const [error, setError] = useState<string>('');

	function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
		setError('');

		setBook((previousState) => ({
			...previousState,
			[event.target.id]: event.target.value,
		}));
	}

	async function insertBook(event: ICustomClickEvent): Promise<void> {
		event.preventDefault();

		if (
			!book.title ||
			book.year === 0 ||
			!book.description ||
			!book.book_cover
		) {
			return setError(BookModalMessages.FILL_ALL_DATA);
		}

		await insertNewBook({
			title: book.title,
			year: Number(book.year),
			description: book.description,
			book_cover: book.book_cover,
		});

		props.setIsOpen(false);
	}

	async function editBook(event: ICustomClickEvent): Promise<void> {
		event.preventDefault();

		if (
			!book.title ||
			book.year === 0 ||
			!book.description ||
			!book.book_cover
		) {
			return setError(BookModalMessages.FILL_ALL_DATA);
		}

		await updateBook(Number(book.id), {
			title: book.title,
			year: Number(book.year),
			description: book.description,
			book_cover: book.book_cover,
		});

		props.setIsOpen(false);
	}

	function handleClickSaveButton(event: ICustomClickEvent): void {
		if (props.edit) {
			void editBook(event);
		} else {
			void insertBook(event);
		}
	}

	useEffect(() => {
		if (props.edit) {
			setBook({
				id: props.bookId ?? 0,
				title: props.bookTitle ?? '',
				year: props.year ?? 0,
				description: props.description ?? '',
				book_cover: props.book_cover ?? '',
			});
		}
	}, []);

	return (
		<>
			<DarkBG onClick={() => props.setIsOpen(false)}>BookModal</DarkBG>
			<Centered>
				<Modal>
					<ModalHeader>
						<Heading>{props.title}</Heading>
					</ModalHeader>
					<CloseBtn onClick={() => props.setIsOpen(false)}>
						<RiCloseLine style={{ marginBottom: '-3px' }} />
					</CloseBtn>
					<ModalContent>
						<InputLabel
							htmlFor="title"
							labelText="Title"
							type="text"
							value={book.title}
							onChange={(event: ChangeEvent<HTMLInputElement>) =>
								handleChangeInput(event)
							}
							labelMarginBottom="0.5rem"
							inputMarginBottom="1rem"
						/>
						<InputLabel
							htmlFor="year"
							labelText="Year"
							type="number"
							value={book.year}
							onChange={(event: ChangeEvent<HTMLInputElement>) =>
								handleChangeInput(event)
							}
							labelMarginBottom="0.5rem"
							inputMarginBottom="1rem"
						/>
						<InputLabel
							htmlFor="description"
							labelText="Description"
							type="text"
							value={book.description}
							onChange={(event: ChangeEvent<HTMLInputElement>) =>
								handleChangeInput(event)
							}
							labelMarginBottom="0.5rem"
							inputMarginBottom="1rem"
						/>
						<InputLabel
							htmlFor="book_cover"
							labelText="Book Cover"
							type="text"
							value={book.book_cover}
							onChange={(event: ChangeEvent<HTMLInputElement>) =>
								handleChangeInput(event)
							}
							labelMarginBottom="0.5rem"
						/>
					</ModalContent>
					<ModalActions>
						<ActionsContainer>
							<SaveBtn
								onClick={(event: ICustomClickEvent) =>
									handleClickSaveButton(event)
								}
							>
								Save
							</SaveBtn>
							<CancelBtn onClick={() => props.setIsOpen(false)}>
								Cancel
							</CancelBtn>
						</ActionsContainer>
					</ModalActions>
					{error ? <ErrorMessage>{error}</ErrorMessage> : <></>}
				</Modal>
			</Centered>
		</>
	);
}

export { BookModal };
