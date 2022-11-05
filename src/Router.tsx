import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { UserProfile } from './pages/private';
import { Home, Login } from './pages/public';
import { getTokenFromCookies } from './utils';

interface IPrivateRouteProps {
	redirectPath: string;
}

function Router(): JSX.Element {
	function PrivateRoute({ redirectPath }: IPrivateRouteProps): JSX.Element {
		return getTokenFromCookies().length > 0 ? (
			<Outlet />
		) : (
			<Navigate to={redirectPath} replace />
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route element={<PrivateRoute redirectPath="/" />}>
				<Route path="/userprofile" element={<UserProfile />} />
			</Route>
		</Routes>
	);
}

export { Router };
