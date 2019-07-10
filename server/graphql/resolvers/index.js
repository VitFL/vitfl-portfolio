// graphql/resolvers/index.js
import * as authHandlers from "./handlerGenerators/auth";
import * as contentHandlers from "./handlerGenerators/content";
export default {
  ...authHandlers,
  ...contentHandlers
};
