import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import AccommodationSheet from "../AccommodationSheet/AccommodationSheet";
import {ROUTES} from './routes'

export default function Router () {
	return (
		<Routes>
			<Route path={ROUTES.home} element={<Home />} />
			<Route path={ROUTES.about} element={<About />} />
			<Route path={ROUTES.accommodationSheet()}  element={<AccommodationSheet />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};