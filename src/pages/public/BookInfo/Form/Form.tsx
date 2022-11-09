import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserProfile } from '../../../../services';
import { ArrayComments } from './CommentFile';
import { IComment, ICustomFormSubmitEvent, IUserProfile } from './FormTypes';
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
	const [userProfile, setUserProfile] = useState({} as IUserProfile);

	function handleError(error: any): void {
		console.error(error.response ? error.response.data : error.message);
	}

	async function getUserDetails(): Promise<void> {
		try {
			const response = await getUserProfile();
			setUserProfile(response);
		} catch (error) {
			handleError(error);
		}
	}

	function handleSubmit(e: ICustomFormSubmitEvent): void {
		const count = 5;
		e.preventDefault();
		const username = userProfile.data.name;
		const profile_picture = userProfile.data.profile_picture;
		const comment = e.target.comment.value;
		const obj = {
			name: username,
			comment,
			profile_picture,
			key: count + 1,
		};
		setArrComments([...arrComments, obj]);
	}

	// useEffect(() => {
	// 	void getUserDetails();
	// }, []);

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
								profile_picture={elem.profile_picture}
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
	const { name, profile_picture, comment } = props;
	const navigate = useNavigate();
	function handleClickProfileButton(): void {
		navigate('/userprofile');
	}

	return (
		<CommentsContainer>
			<ProfilePick onClick={handleClickProfileButton}>
				<img src={profile_picture} alt="User Profile Pic" />
				<h1>{name}</h1>
			</ProfilePick>
			<div>
				<p>{comment}</p>
			</div>
		</CommentsContainer>
	);
}

export { Form };
