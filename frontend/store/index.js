export const state = () => ({
  auth: {
    busy: false,
    loggedIn: false,
    strategy: "laravelSanctum",
    user: null,
  },
});

export const actions = {
  login({}, payload) {
    this.$auth
      .loginWith("laravelSanctum", { data: payload })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  logout() {
    this.$auth.logout();
  },
};

export const getters = {
  autenticated(state) {
    return state.auth.loggedIn;
  },
  user(state) {
    return state.auth.user;
  },
};
