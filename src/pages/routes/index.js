import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Intro from '~/pages/Intro';
import Live from '~/pages/Live';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/layout';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/intro',
        component: Intro,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/intro/:name',
        component: Intro,
    },
    {
        path: '/live',
        component: Live,
    },
];

export const privateRoutes = [];
