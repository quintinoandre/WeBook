/* eslint-disable prettier/prettier */
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { Footer, Header } from './layouts';
import { UserProfile } from './pages/private';
import { Home, Login, BookInfo, SignIn } from './pages/public';
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
			<Route path="/login" element={<Login />} />
			<Route path="/signin" element={<SignIn />} />
			<Route
				path="/"
				element={
					<>
						<Header />
						<Footer />
					</>
				}
			>
				<Route path="/" element={<Home />} />
				<Route path="/book-info/:id" element={<BookInfo />} />
				<Route element={<PrivateRoute redirectPath="/" />}>
					<Route path="/userprofile" element={<UserProfile />} />
				</Route>
			</Route>
		</Routes>
	);
}

export { Router };
