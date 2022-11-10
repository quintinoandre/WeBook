import styled from 'styled-components';

import { Icons } from './Icons';
import { Text } from './Text';

const StyledFooter = styled.div`
	color: white;
	height: 400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	font-family: 'source sans pro';
	font-size: 0.4em;
	letter-spacing: 1px;
	margin-left: 400px;
	margin-right: 400px;
	margin-top: 100px;
`;

function Footer(): JSX.Element {
	return (
		<StyledFooter>
			<Text></Text>
			<Icons></Icons>
		</StyledFooter>
	);
}

export default Footer;
