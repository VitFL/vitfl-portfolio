import userRoutes from './user.routes';
import mainContentRoutes from './maincontent.routes';

const {
  env: { BASE_API_URL }
} = process;
const Router = app => {
  app.use(`${BASE_API_URL}/user`, userRoutes);
  app.use(`${BASE_API_URL}/maincontent`, mainContentRoutes);
};

export default Router;
