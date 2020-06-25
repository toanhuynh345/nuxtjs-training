export const state = () => ({
    current_route: ""
})

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },
    getProfile(state) {
        return state.auth.user
    },
    getRouter(state){
        return state.current_route
    }
}
export const mutations = {
    CURRENT_ROUTE: function (state, route) {
         state.current_route = route;
         return state.current_route
    }
}

export const actions = {
    getCurrentRoute({commit}, route){
        console.log(route);
        commit('CURRENT_ROUTE', route);
    }
}