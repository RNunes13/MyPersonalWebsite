
export default {
  init() {
    this.initializeApp();
  },

  initializeApp() {
    Personal.firebase.initializeApp({
      projectId: 'rodrigo-nunes',
    });

    Personal.firebase.db = Personal.firebase.firestore();
  },
};
