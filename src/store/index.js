import Vue from "vue";
import Vuex from "vuex";
import routes from "@/router/routes";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allRoutes: [],
    dataChildren: []
  },
  mutations: {
    navigator: function(state) {
      state.allRoutes = []
      routes.forEach(data => {
        if (data.meta && data.meta.nav) {
          let item = {
            path: data.path,
            name: data.name,
            meta: data.meta
          };
          if (data.children) {
            Object.assign(item, { children: data.children });
            state.dataChildren.push(data.children);
          }
          state.allRoutes.push(item);
        }
      });
      return state.allRoutes;
    }
  },
  actions: {
    // async navigatorA({ state, commit }) {
    //   return new Promise(function (resolve) {
    //     commit('navigator', [...routes])
    //     resolve(state.allRoutes)
    //   },
    //   )
    // },
    // async navigatorB({ state, commit, dispatch }) {
    //   await dispatch("navigatorA");
    //   commit('navigator', state.dataChildren)
    // },
    // async navigatorC({ commit, dispatch }) {
    //   await dispatch("navigatorA")
    //   commit('navigator', routes.children)
    // },
  },
  modules: {}
});
