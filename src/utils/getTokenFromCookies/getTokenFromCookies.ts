function getTokenFromCookies(): string {
	return document.cookie.replace(/^.*token=/, '').replace(/;.*/, '');
}

export { getTokenFromCookies };
