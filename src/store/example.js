async function methods({commit},payload) {
    commit('clearError');
    commit('setLoading', true);
    try{
        //done logic
        commit('setLoading', false)
    }catch(error){
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
    }
}