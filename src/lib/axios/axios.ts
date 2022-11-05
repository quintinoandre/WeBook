import axios from 'axios';

import { enableCors, getTokenFromCookies } from '../../utils';

const { VITE_API_URL: baseURL } = import.meta.env;

const api = axios.create({ baseURL });

api.interceptors.request.use(
	(config) => {
		enableCors();

		const token = getTokenFromCookies();

		config.headers = { Authorization: token };

		return config;
	},
	async (error) => {
		return await Promise.reject(error);
	}
);

export { api };
