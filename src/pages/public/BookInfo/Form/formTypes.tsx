interface IComment {
	key: number;
	name: string;
	profile_picture?: string;
	comment: string;
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

export type { IComment, IUserProfile };
