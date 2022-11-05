import { Route, Routes } from 'react-router-dom';

import { UserProfile } from './pages/private';
import { Home, Login } from './pages/public';

function Router(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/userprofile" element={<UserProfile />} />
		</Routes>
	);
}

export { Router };
