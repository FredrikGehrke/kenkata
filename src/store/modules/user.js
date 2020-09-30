import { auth } from '../../main';

export default {
    state: {
        user: null
    },
    getters: {
        user: state => state.user
    },
    mutations: {
        SET_USER: (state, u) => {
            state.user = u
        }
    },
    actions: {
        setUser: ({commit}) => {
            auth.onAuthStateChanged(u => {
                    commit('SET_USER', u)
                    if(u){
                        console.log('User ', u.email, ' with id:', u.uid, ' is logged in', )
                    } else {
                        console.log('User is logged out')
                    }
            })
        }
    }




}