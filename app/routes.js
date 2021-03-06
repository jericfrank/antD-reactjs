// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

import UserIsAuthenticated from './components/Middleware';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb, hoc) => (componentModule) => {
  if (hoc) {
    cb(null, hoc(componentModule.default));
  } else {
    cb(null, componentModule.default);
  }
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb, UserIsAuthenticated);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/register',
      name: 'register',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Register/reducer'),
          import('containers/Register/sagas'),
          import('containers/Register'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('register', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/test',
      name: 'test',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Test/reducer'),
          import('containers/Test/sagas'),
          import('containers/Test'),
        ]);

        const renderRoute = loadModule(cb, UserIsAuthenticated);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('test', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/logout',
      name: 'logout',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Logout/reducer'),
          import('containers/Logout/sagas'),
          import('containers/Logout'),
        ]);

        const renderRoute = loadModule(cb, UserIsAuthenticated);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('logout', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/uploader',
      name: 'uploader',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Uploader/reducer'),
          import('containers/Uploader/sagas'),
          import('containers/Uploader'),
        ]);

        const renderRoute = loadModule(cb, UserIsAuthenticated);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('uploader', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/videos',
      name: 'videos',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Videos/reducer'),
          import('containers/Videos/sagas'),
          import('containers/Videos'),
        ]);

        const renderRoute = loadModule(cb, UserIsAuthenticated);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('videos', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
