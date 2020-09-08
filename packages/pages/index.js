import Root from './Root';
import userRoutes from './Users';

export default [
  {
    component: Root,
    routes: [...userRoutes],
  },
];
