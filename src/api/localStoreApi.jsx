const localStoreApi = {
  get: () => {
    return fetch(`/storeLocation.json`).then((res) => res.json());
  },

  contact: (form) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
      });
      // reject({
      //   error: "Something wrong, please try again!",
      // });
    });
  },
};
export default localStoreApi;
