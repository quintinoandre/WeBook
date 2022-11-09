import { ChangeEvent, useContext, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { InputLabel } from '../../../../../components';
import { BooksContext } from '../../../../../contexts';
import { BookModalMessages } from './BookModalMessages';
import { IBook, IBookModalProps, ICustomClickEvent } from './BookModalTypes';
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
	const { insertNewBook } = useContext(BooksContext);

	const [book, setBook] = useState<IBook>({ ...DEFAULT_BOOK });
	const [error, setError] = useState<string>('');

	function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
		setError('');

		setBook((previousState) => ({
			...previousState,
			[event.target.id]: event.target.value,
		}));
	}

	async function handleClickSaveButton(event: ICustomClickEvent): void {
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
							{/* <DeleteBtn onClick={() => props.setIsOpen(false)}>
								Delete
							</DeleteBtn> */}
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
