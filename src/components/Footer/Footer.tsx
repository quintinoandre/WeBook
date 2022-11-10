import styled from 'styled-components';

import { Icons } from './Icons';
import { Text } from './Text';

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	color: white;
	font-family: 'source sans pro';
	font-size: 0.4em;
	letter-spacing: 1px;
	margin: 2% 20%;
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
