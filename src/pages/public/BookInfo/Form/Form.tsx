import {
	FormContainerStyle,
	TextArea,
	SubmitButton,
	ProfilePick,
	CommentsContainer,
} from './styles';

function Form(): void {
	return (
		<>
			<FormContainerStyle>
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
			<Comments />
		</>
	);
}

function Comments(props) {
	const { comment } = props;
	return (
		<CommentsContainer>
			<ProfilePick>
				<img
					src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"
					alt="User Profile Pic"
				/>
				<h1>Brad Pitt</h1>
			</ProfilePick>
			<div>
				<p>{comment}</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum debitis ab alias id veritatis quos modi, ratione ut aspernatur pariatur facilis cumque quae consectetur consequatur odio ex ullam temporibus.</p>
			</div>
		</CommentsContainer>
	);
}

export { Form };
