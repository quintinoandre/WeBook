import './style.css';
import {
	RiFacebookCircleLine,
	RiInstagramLine,
	RiWhatsappLine,
	RiTwitterLine,
	RiYoutubeLine,
} from 'react-icons/ri';

const facebook = 'https://www.facebook.com';
const instagram = 'https://www.instagram.com';
const whatsapp = 'https://whatsapp.com';
const twitter = 'https://www.twitter.com';
const youtube = 'https://www.youtube.com';

function Icons(): JSX.Element {
	return (
		<div>
			<h1>Follow us on Social Media</h1>
			<div>
				<a href={facebook}>
					<RiFacebookCircleLine className="link"></RiFacebookCircleLine>
				</a>
				<a href={instagram}>
					<RiInstagramLine className="link"></RiInstagramLine>
				</a>
				<a href={whatsapp}>
					<RiWhatsappLine className="link"></RiWhatsappLine>
				</a>
				<a href={twitter}>
					<RiTwitterLine className="link"></RiTwitterLine>
				</a>
				<a href={youtube}>
					<RiYoutubeLine className="link"></RiYoutubeLine>
				</a>
			</div>
		</div>
	);
}

export { Icons };
