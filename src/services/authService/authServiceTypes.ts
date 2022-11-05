interface IUser {
	status: boolean;
	message: string;
	errors: string;
	data: {
		id: number;
		name: string;
		email: string;
		profile_picture: string;
		token: string;
	};
}

export type { IUser };
