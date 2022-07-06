import usersApi from "@/api/users"

export default {
  namespaced: true,

  state: {
    isLoading: false,
    users: [],
  },

  mutations: {
    SET_IS_LOADING: (state, isLoading) => state.isLoading = isLoading,
    SET_USERS: (state, users) => state.users = users,
  },

  actions: {
    fetchUsersFromApi({ commit }) {
      commit("SET_IS_LOADING", true)
      usersApi.fetchUsersFromApi()
        .then(commit.bind(this, "SET_USERS"))
        .then(commit.bind(this, "SET_IS_LOADING", false))
    },

    fetchUsersFromJson({ commit }) {
      commit("SET_IS_LOADING", true)
      usersApi.fetchUsersFromJson()
        .then(commit.bind(this, "SET_USERS"))
        .then(commit.bind(this, "SET_IS_LOADING", false))
    },
  },

  getters: {
    availableCountries: ({ users }) =>
      users.map(user => user.country),

    filterUsersByCountry: ({ users }) =>
      country => users.filter(user => user.country === country),
  },
}
