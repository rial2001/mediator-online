import { usersCollection } from '@db-test/usersCollection';
import { worksCollection } from '@db-test/worksCollections';

export const db = {
  collections: {
    users: usersCollection,
    works: worksCollection,
  },
};
