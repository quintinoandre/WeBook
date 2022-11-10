import styled from 'styled-components';

const Image = styled.img`
	object-fit: cover;
	border-radius: 10px;
	transition: 0.5s ease-in;
	height: 350px;
	width: 100%;
	min-width: 200px;
`;

const Overlay = styled.div`
	width: 90%;
	text-align: center;
	position: absolute;
	bottom: 5px;
	overflow: hidden;
	transition: 0.5s ease;
	height: 0%;
`;

const CardContainer = styled.div`
	position: relative;
	cursor: pointer;

	&:hover ${Image} {
		filter: brightness(30%);
		scale: 105%;
		transition: 0.5s ease;
	}
	&:hover ${Overlay} {
		height: 25%;
	}
	hr {
		width: 50%;
		margin: auto;
	}
`;

const Text = styled.h1`
	color: white;
	text-align: center;
	font-family: 'raleway';
	font-weight: normal;
	font-size: large;
	letter-spacing: 1px;
`;

export { Image, Overlay, CardContainer, Text };
