function setCookie(
	name: string,
	value: string,
	expirationInSeconds: number
): void {
	const date = new Date();

	date.setTime(date.getTime() + expirationInSeconds * 1000);

	const expires = `expires=${date.toUTCString()}`;

	document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export { setCookie };
