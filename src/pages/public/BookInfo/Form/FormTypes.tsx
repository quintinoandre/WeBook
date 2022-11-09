import { FormEvent } from 'react';

interface IComment {
	key: number;
	name: string;
	url?: string;
	comment: string;
}

interface ICustomFormSubmitEvent extends FormEvent<HTMLFormElement> {
	event: {
		target: {
			name: {
				value: string;
			};
			comment: {
				value: string;
			};
		};
	};
}

export type { IComment, ICustomFormSubmitEvent };
