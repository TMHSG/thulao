<template>
  <div class="random-background">
    <!-- Nội dung chính của trang ở đây -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgrounds: [
        '/static/bg1.jpg',
        '/static/bg2.jpg',
        '/static/bg3.jpg',
        // Thêm các đường dẫn hình ảnh khác nếu cần
      ],
      currentBackground: null,
    };
  },
  methods: {
    changeBackground() {
  const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
  const randomBackground = this.backgrounds[randomIndex];
  console.log('Đường dẫn đến hình ảnh:', randomBackground);
  this.$refs.randomBackground.$el.style.backgroundImage = `url(${randomBackground})`;
},
  },
  watch: {
    backgrounds() {
      // Theo dõi thay đổi trong backgrounds và thay đổi background khi có sự thay đổi
      this.changeBackground();
    },
  },
  mounted() {
    // Thay đổi background khi component được tạo
    this.changeBackground();

    // (Tùy chọn) Cập nhật background sau mỗi khoảng thời gian nào đó
    setInterval(() => {
      this.changeBackground();
    }, 3000); // Thay đổi background sau mỗi 5 giây
  },
};
</script>

<style scoped>
.random-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background-image 0.5s ease;
  background-size: cover; /* Đảm bảo ảnh nền che hết diện tích của phần tử */
}

.random-background::before {
  /* Tạo một lớp overlay mờ nếu bạn muốn */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
</style>
