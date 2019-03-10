
export const database = {
  add(collection, data) {
    if (!Personal.firebase.db) throw new Error('Database not initialized.');

    const { db } = Personal.firebase;

    return db.collection(collection).add(data);
  },
};
