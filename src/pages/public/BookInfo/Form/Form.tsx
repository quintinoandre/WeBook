import { useState } from 'react';

import { ArrayComments } from './CommentFile';
import { IComment } from './IForm';
import {
	FormContainerStyle,
	TextArea,
	SubmitButton,
	ProfilePick,
	CommentsContainer,
} from './styles';

function Form(): void {
	const [arrComments, setArrComments] = useState<IComment[]>([
		...ArrayComments,
	]);

	function handleSubmit(e: React.FormEventHandler<HTMLFormElement>): void {
		const count = 5;
		e.preventDefault();
		const username = e.target.name.value;
		const comment = e.target.comment.value;
		const obj = { name: username, comment, key: count + 1 };
		setArrComments([...arrComments, obj]);
	}

	return (
		<>
			<FormContainerStyle onSubmit={handleSubmit} state={arrComments}>
				<h1>Comments:</h1>
				<label>
					<TextArea
						cols="100"
						rows="5"
						maxLength="300"
						name="comment"
						placeholder=" Leave a Comment"
					></TextArea>
				</label>
				<SubmitButton type="submit">Submit</SubmitButton>
			</FormContainerStyle>
			<ul>
				{arrComments.map((elem, count) => {
					return (
						<li key={count}>
							<Comments
								key={elem.key}
								name={elem.name}
								comment={elem.comment}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}

function Comments(props): JSX.Element {
	const { name, comment } = props;

	return (
		<CommentsContainer>
			<ProfilePick>
				<img
					src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"
					alt="User Profile Pic"
				/>
				<h1>{name}</h1>
			</ProfilePick>
			<div>
				<p>{comment}</p>
			</div>
		</CommentsContainer>
	);
}

export { Form };
