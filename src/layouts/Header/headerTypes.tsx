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

export type { IUserProfile };
