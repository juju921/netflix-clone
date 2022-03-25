import Vuex from 'vuex';

export const state = () => ({
    posts:[],
    token: "",
    user: null,
});

export const mutations = {

    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user){
        state.user = user;
    },

};
export const actions = {
    async authenticateUser({commit}, userPayload){

        try{
            const authUserData = await this.$axios.$post('/register/',userPayload);
            const user = {email:authUserData.email, avatar};

            commit('setUser', user);
            commit('setToken', authUserData.idToken);
        }catch(err){
        }
    },
   async signInWithEmail({ commit }, { email, password }) {
        //return auth.signInWithEmailAndPassword(email, password)
        console.log("strted");
        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );
          this.$router.push("/afterlogin");
        } catch (e) {
          console.log(e);
        }
      },

}
export const getters = {
    authenticated: state => !!state.token,
    user: state => state.user,

    isAuthenticated(state) {
        return state.auth.loggedIn
      },

      loggedInUser(state) {
        return state.auth.user
      }
};
