import {
	BookInfoContainterStyle,
	BookCoverAndTitle,
	BookDetailedInfo,
} from './styles';

function BookInfoContainter(): JSX.Element {
	return (
		<BookInfoContainterStyle>
			<BookCoverAndTitle>
				<h1>"A Game of Thrones"</h1>
				<img
					src="https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg"
					alt="BookCover"
				/>
			</BookCoverAndTitle>
			<BookDetailedInfo>
				<h2>
					Autor: <span>George R. R. Martin</span>
				</h2>
				<h2>
					Year: <span> 1996</span>
				</h2>
				<h2>
					Description:
					<p>
						<span>
							Long ago, in a time forgotten, a preternatural event
							threw the seasons out of balance. In a land where
							summers can last decades and winters a lifetime,
							trouble is brewing. The cold is returning, and in
							the frozen wastes to the north of Winterfell,
							sinister forces are massing beyond the kingdom’s
							protective Wall. To the south, the king’s powers are
							failing—his most trusted adviser dead under
							mysterious circumstances and his enemies emerging
							from the shadows of the throne. At the center of the
							conflict lie the Starks of Winterfell, a family as
							harsh and unyielding as the frozen land they were
							born to. Now Lord Eddard Stark is reluctantly
							summoned to serve as the king’s new Hand, an
							appointment that threatens to sunder not only his
							family but the kingdom itself.
						</span>
					</p>
				</h2>
			</BookDetailedInfo>
		</BookInfoContainterStyle>
	);
}

export { BookInfoContainter };
