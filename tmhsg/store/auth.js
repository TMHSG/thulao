export const state = () => ({
  user: {
    userName: '',
    userPassword:'',
    role: '',
    Name:''

  },
  isLoggedIn: false,

});

export const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.user.userName = userInfo.userName;
    state.user.userPassword = userInfo.userPassword;
    state.user.role = userInfo.role;
    state.user.Name = userInfo.Name;
    state.isLoggedIn = true;
  },
  SET_LOGOUT_STATUS(state, status) {
    state.isLoggedIn = status;
    if (!status) {
      state.user = {
        userName: '',
        userPassword: '',
        role: '',
        Name:''
      };
    }
  },
};


export const actions = {

  async login({ commit }, { userName, userPassword, role, name }) {
    try {
      const response = await this.$axios.post("/login", { userName, userPassword, role, name });
      if (response.status === 200) {
        const {userName, userPassword, role } = response.data;

        // Gọi mutation để cập nhật thông tin người dùng vào Vuex
        commit('SET_USER_INFO', { userName, userPassword, role,name });
        commit('SET_LOGOUT_STATUS', false); // Đặt isLoggedIn thành true
      } else {
        // Xử lý khi đăng nhập không thành công
      }
    } catch (error) {
      // Xử lý lỗi
    }
  },
};
