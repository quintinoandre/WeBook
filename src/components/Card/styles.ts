import styled from 'styled-components';

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
	scale: 100%;
	transition: 0.5s ease-in;
	height: 300px;
`;

const Overlay = styled.div`
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 1rem;
	overflow: hidden;
	transition: 0.5s ease;
	height: 0%;
`;

const CardContainer = styled.div`
	position: relative;
	cursor: pointer;
	margin: 10px;

	&:hover ${Image} {
		filter: brightness(30%);
		scale: 105%;
		transition: 0.5s ease;
	}
	&:hover ${Overlay} {
		height: 40%;
	}
`;

const Text = styled.h1`
	font-size: 0.9rem;
	font-family: 'roboto';
	color: rgb(246, 248, 248);
	width: 100%;
	text-align: center;
	font-family: 'raleway';
	font-weight: normal;
	font-size: large;
	letter-spacing: 1px;
`;

export { Image, Overlay, CardContainer, Text };
