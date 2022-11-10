import { FormEvent } from 'react';

interface IComment {
	key: number;
	name: string;
	profile_picture?: string;
	comment: string;
}

interface ICustomFormSubmitEvent extends FormEvent<HTMLFormElement> {
	event: {
		target: {
			name: {
				value: string;
			};
			profile_picture: {
				value: string;
			};
			comment: {
				value: string;
			};
		};
	};
}

interface IUserProfile {
	status: boolean;
	message: string;
	errors: string;
	data: {
		id: number;
		name: string;
		email: string;
		profile_picture: string;
	};
}

export type { IComment, ICustomFormSubmitEvent, IUserProfile };
