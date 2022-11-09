interface IBookDetails {
	status: boolean;
	message: string;
	errors: string;
	data: {
		id: number;
		title: string;
		cover: string;
		author: string;
		year: number;
		description: string;
	};
}

export type { IBookDetails };
