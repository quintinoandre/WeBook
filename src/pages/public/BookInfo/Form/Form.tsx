import { useState } from 'react';

import { ArrayComments } from './CommentFile';
import { IComment, ICustomFormSubmitEvent } from './FormTypes';
import {
	FormContainerStyle,
	TextArea,
	SubmitButton,
	ProfilePick,
	CommentsContainer,
} from './styles';

function Form(): JSX.Element {
	const [arrComments, setArrComments] = useState<IComment[]>([
		...ArrayComments,
	]);

	function handleSubmit(e: ICustomFormSubmitEvent): void {
		const count = 5;
		e.preventDefault();
		const username = e.target.name.value;
		const comment = e.target.comment.value;
		const obj = { name: username, comment, key: count + 1 };
		setArrComments([...arrComments, obj]);
	}

	return (
		<>
			<FormContainerStyle
				onSubmit={(event: ICustomFormSubmitEvent) =>
					handleSubmit(event)
				}
			>
				<h1>Comments:</h1>
				<label>
					<TextArea
						cols={100}
						rows={5}
						maxLength={300}
						name="comment"
						placeholder=" Leave a Comment"
					/>
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
								url={elem.url}
								comment={elem.comment}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}

function Comments(props: IComment): JSX.Element {
	const { name, url, comment } = props;

	return (
		<CommentsContainer>
			<ProfilePick>
				<img src={url} alt="User Profile Pic" />
				<h1>{name}</h1>
			</ProfilePick>
			<div>
				<p>{comment}</p>
			</div>
		</CommentsContainer>
	);
}

export { Form };
