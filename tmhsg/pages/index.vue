<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height bg"
        :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
        fluid
      >
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-card class="elevation-6">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 blue--text text--accent-3"
                        >
                          Đăng Nhập
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">-------------</h4>
                        <v-form>
                          <v-text-field
                            label="Tài khoản"
                            v-model="taikhoan"
                            prepend-icon="mdi-account"
                            type="text"
                            color="blue darken-3"
                            @keypress.enter="signIn"
                          />

                          <v-text-field
                            label="Mật khẩu"
                            :append-icon="
                              showpassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :type="showpassword ? 'text' : 'password'"
                            @click:append="showpassword = !showpassword"
                            v-model="matkhau"
                            prepend-icon="mdi-lock"
                            color="blue darken-3"
                            @keypress.enter="signIn"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          color="blue darken-3"
                          dark
                          @click="signIn"
                          >Đăng nhập</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="400">
          <v-card>
            <v-card-title class="headline">Thông báo</v-card-title>
            <v-card-text>
              {{ dialogMessage }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="green accent-4" @click="dialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'login',

  data: () => ({
    step: 1,
    taikhoan: '',
    matkhau: '',
    showpassword: false,
    dialog: false,
    dialogMessage: '',
    backgroundImages: [],
    // Initial background image
    backgroundImg: '',
  }),
  props: {
    source: String,
  },
  async created() {
    // Load all images from the /static/bg directory
    await this.loadBackgroundImages()
    // Set a random background image when the component is created
    this.setRandomBackground()
  },
  methods: {
    async loadBackgroundImages() {
      try {
        const context = require.context('~/static/bg', false, /\.(jpg)$/)
        this.backgroundImages = context
          .keys()
          .map((key) => key.replace('./', ''))
      } catch (error) {
        console.error('Error loading background images:', error)
      }
    },
    setRandomBackground() {
      // Randomly select a background image from the array
      const randomIndex = Math.floor(
        Math.random() * this.backgroundImages.length
      )
      this.backgroundImg = require(`~/static/bg/${this.backgroundImages[randomIndex]}`)
    },
    async signIn() {
      const apiUrl = process.env.API_BASE_URL
      try {
        const response = await this.$axios.post(
          `${apiUrl}/login`,
          {
            username: this.taikhoan, // sử dụng tên tài khoản từ dữ liệu Vue
            password: this.matkhau, // sử dụng mật khẩu từ dữ liệu Vue
          },
          { validateStatus: false }
        )
        if (response.status === 401) {
          const message = response.data.message
          // Xử lý thông báo lỗi ở đây (hiển thị trong dialog, alert, vv.)
          this.dialogMessage = message
          this.dialog = true
          setTimeout(() => {
            this.dialog = false
          }, 3000)
          return
        }
        if (response.status === 400) {
          const errorMessage = response.data.error
          // Xử lý thông báo lỗi ở đây (hiển thị trong dialog, alert, vv.)
          this.dialogMessage = errorMessage
          this.dialog = true
          setTimeout(() => {
            this.dialog = false
          }, 3000)
          return
        }
        if (response.status === 200) {
          const userInfo = response.data

          this.$store.commit('auth/SET_USER_INFO', userInfo)
          // Gọi mutation để cập nhật thông tin người dùng vào Vuex

          //  this.dialogMessage = "Đăng nhập thành công";
          // this.dialog = true;
          // setTimeout(() => {
          //   this.dialog = false;
          // }, 1000);

          this.$router.push('/apptmhsg')
        }
        // Xử lý dữ liệu nhận được sau khi đăng nhập thành công
        // Chuyển hướng hoặc xử lý dữ liệu nhận được từ server sau khi đăng nhập thành công
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error)
      }
    },
  },
}
</script>
<style scoped>
.bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
