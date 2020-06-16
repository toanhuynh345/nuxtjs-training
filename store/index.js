export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    getProfile(state) {
        return state.auth.user
    }
}
