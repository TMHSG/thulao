// store/thulao.js
export const state = () => ({
  isThulaoVisible: false
});

export const mutations = {
  toggleThulaoVisibility(state) {
    state.isThulaoVisible = !state.isThulaoVisible;
  }
};
