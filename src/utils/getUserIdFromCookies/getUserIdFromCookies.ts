import { getTokenFromCookies } from '../getTokenFromCookies';

function getUserIdFromCookies(): number {
	const token = getTokenFromCookies();

	const { user_id } = JSON.parse(window.atob(token.split('.')[1]));

	return Number(user_id);
}

export { getUserIdFromCookies };
