import merge from 'lodash.merge';
import buildTypeDefinitions from './utils';
import {postResolver, postSchema} from './models/Post';
import {userResolver, userSchema} from './models/User';

const resolvers = merge(
  postResolver,
  userResolver
);

const typeDefs = buildTypeDefinitions([
  ...postSchema,
  ...userSchema
]);

module.exports = {
  resolvers,
  typeDefs
};
