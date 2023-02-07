import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live/Live';

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/:nickname', element: Profile },
    { path: '/live', element: Live },

    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/search', element: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
