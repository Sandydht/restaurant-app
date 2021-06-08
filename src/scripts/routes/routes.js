/* eslint-disable linebreak-style */
import '../views/pages/home-pages';
import '../views/pages/favorite-pages';
import '../views/pages/detail-pages';

const routes = {
  '/': '<home-pages></home-pages>',
  '/home': '<home-pages></home-pages>',
  '/favorite': '<favorite-pages></favorite-pages>',
  '/detail/:id': '<detail-pages></-pages>',
};

export default routes;
