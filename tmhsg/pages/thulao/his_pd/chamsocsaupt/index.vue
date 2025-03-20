<template>
  <v-row>
    <v-col cols="12" sm="8" md="4"></v-col>
    <v-col cols="12" sm="8" md="4" style="text-align: center; color: black"
      ><h2>CHĂM SÓC SAU PT</h2></v-col
    >
    <v-col cols="12" sm="8" md="4"></v-col>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="8" md="4">
      <v-menu
        v-model="TuNgayMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formatTuNgay"
            label="Từ Ngày"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="TuNgay"
          @input="TuNgayMenu = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="DenNgayMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formatDenNgay"
            label="Đến Ngày"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="DenNgay"
          @input="DenNgayMenu = false"
        ></v-date-picker> </v-menu
    ></v-col>
    <v-col cols="12" sm="8" md="4">
      <v-combobox
        label="Nhân viên"
        clearable
        v-model="selectedNhanVien"
        :items="ListNhanVien"
        item-text="full_name"
        :value="NhanVien_Id"
        dense
        outlined
        style="bottom: -11px"
      ></v-combobox
    ></v-col>

    <v-spacer></v-spacer>
    <v-col cols="12" sm="8" md="4"
      ><v-btn
        color="aqua"
        elevation="3"
        class="light-blue accent-2"
        block
        @click="getData()"
        >Tìm kiếm</v-btn
      ></v-col
    >
    <v-col cols="12" sm="6" md="4">
      <v-btn
        color="aqua"
        elevation="3"
        class="teal lighten-3"
        block
        @click="exportToExcel()"
        >Xuất excel</v-btn
      ></v-col
    >
    <v-col cols="12" sm="8" md="4">
      <h2 style="color: black; text-align: center">
        Tổng thù lao:
        {{
          new Number(totalThuLao)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }}
      </h2>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="thuthuat"
        :items-per-page="5"
        class="elevation-1"
      >
      <template v-slot:item.thoigianhoanthanh="{ item }">
        {{
          new Date(item.thoigianhoanthanh).toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit' // Sử dụng định dạng 24 giờ
          })
        }}
      </template>
        <template v-slot:item.bnchitra="{ item }">
          {{
            new Number(item.bnchitra)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }}
        </template>
        <template v-slot:item.thulao="{ item }">
          {{
            new Number(item.thulao)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }}
        </template>
      </v-data-table>
      <div
        v-if="isLoading"
        class="loading-message"
        style="color: black; text-align: center"
      >
        <h2>Vui lòng chờ...</h2>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

import ExcelJS from 'exceljs'

export default {
  name: 'TongHop',
  components: {},
  data: () => ({
    thuthuat: [],
    TuNgay: new Date().toISOString().substr(0, 10),
    DenNgay: new Date().toISOString().substr(0, 10),
    TuNgayMenu: false,
    DenNgayMenu: false,
    isLoading: false,
    apiUrl: process.env.API_BASE_URL,
    selectedNhanVien: null,
    NhanVien_Id: null,
    ListNhanVien: [],
    totalThuLao:0,

    headers: [
      {
        text: 'Stt  ',
        align: 'start',
        sortable: true,
        value: 'stt',
      },
      {
        text: 'Mã y tế',
        value: 'mayte',
      },
      {
        text: 'Mã khám',
        value: 'makham',
      },
      {
        text: 'Tên bệnh nhân',
        value: 'tenbn',
      },
      {
        text: 'Ngày hoàn thành',
        value: 'thoigianhoanthanh',
      },
      {
        text: 'Loại bệnh án',
        value: 'ba',
      },
      {
        text: 'Bác sĩ',
        value: 'bsth',
      },
      {
        text: 'Thù lao',
        value: 'thulao',
      },
    ],
  }),
  computed: {
    formatTuNgay() {
      return this.formatDate(this.TuNgay)
    },
    formatDenNgay() {
      return this.formatDate(this.DenNgay)
    },
    // tongThuLao() {
    //   // // Tính tổng cột "ThuLao" dựa trên dữ liệu trong biến "thuthuat"
    //   return this.thuthuat.reduce((total, item) => {
    //     return total + (item.thulao || 0)
    //   }, 0)
    // },
  },

  created() {
    this.getListNhanVien() // Gọi hàm này khi trang được tải lên
  },
 watch: {
    thuthuat(newValue) {

      if (Array.isArray(newValue) && newValue.length > 0) {
        this.calculateTongThuLao();
      }
    }
  },
  methods: {
    calculateTongThuLao() {
  this.totalThuLao = this.thuthuat.reduce((total, item) => {
    const thuLao = parseFloat(item.thulao) || 0; // Chuyển đổi thành số và xử lý trường hợp không có giá trị
    //console.log(`ThuLao: ${thuLao}, Total: ${total}`);
    return total + thuLao;
  }, 0);

  // Định dạng totalThuLao
  this.totalThuLaoFormatted = this.totalThuLao.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Định dạng với dấu phẩy và hai chữ số thập phân
},
    formatDateTime(dateTimeString) {
      const originalDateTime = new Date(dateTimeString)

      // Giảm giá trị giờ đi 7 giờ
      const adjustedDateTime = new Date(
        originalDateTime.getTime() - 7 * 60 * 60 * 1000
      )

      // Định dạng theo múi giờ Việt Nam
      const formattedDateTime = adjustedDateTime.toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
      })

      return formattedDateTime
    },
    async getListNhanVien() {
      try {
        const response = await axios.get(`${this.apiUrl}/getnhanvienpg`)
        this.ListNhanVien = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async getData() {
      this.isLoading = true
      const self = this
      let url = ''
      if (
        this.selectedNhanVien === null ||
        this.selectedNhanVien === undefined
      ) {
        url = `${this.apiUrl}/get_chamsocsaupt_2024?TuNgay=${this.TuNgay}&DenNgay=${this.DenNgay}&NhanVien_Id=${this.selectedNhanVien}`

        this.thuthuat = await axios
          .get(url)
          .then(function (response) {
            return response.data

          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .finally(function () {
            self.isLoading = false
          })

        return
      } else {
        console.log('chay ok')
        url = `${this.apiUrl}/get_chamsocsaupt_2024?TuNgay=${this.TuNgay}&DenNgay=${this.DenNgay}&NhanVien_Id=${this.selectedNhanVien.id}`

          // Xử lý trường hợp selectedNhanVien không phải là số
          this.thuthuat = await axios
            .get(url)
            .then(function (response) {
              return response.data
            })
            .catch(function (error) {
              // handle error
              console.log(error)
            })
            .finally(function () {
              self.isLoading = false
            })


      }
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },

    async exportToExcel() {
      const fileName = `Newhis_CSS_PT_${this.formatDate(
        this.TuNgay
      )}_${this.formatDate(this.DenNgay)}.xlsx`
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet('Sheet1')

      // Định dạng phông chữ

      // Định dạng ngày thành "dd/MM/yyyy"
      const dateFormat = 'dd/MM/yyyy'
      worksheet.getColumn('E').numFmt = dateFormat


      // Định dạng số thành "##,###"
      const numberFormat = '##,###'
      worksheet.getColumn('H').numFmt = numberFormat
      worksheet.getColumn('L').numFmt = numberFormat
      worksheet.addRow([
        'STT',
        'Mã y tế',
        'Mã khám',
        'Tên bệnh nhân',
        'Ngày hoàn thành',
        'Loại bệnh án',
        'Bác sĩ',
        'Thù lao',
      ])
      const font = { name: 'Times New Roman', size: 11 }

      // Áp dụng định dạng phông chữ cho toàn bộ worksheet
      worksheet.getRow(1).font = font
      // Thêm dữ liệu từ this.congkham vào tệp Excel
      this.thuthuat.forEach((item) => {
        const ngayKhamDate = new Date(item.thoigianhoanthanh)
        const NgayYeuCauFormatted = ngayKhamDate.toLocaleDateString("vi-VN", {
          year: 'numeric',
            month: '2-digit',
            day: '2-digit'
    });
    const day = String(ngayKhamDate.getDate()).padStart(2, '0');
const month = String(ngayKhamDate.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
const year = ngayKhamDate.getFullYear();
const hours = String(ngayKhamDate.getHours()).padStart(2, '0');
const minutes = String(ngayKhamDate.getMinutes()).padStart(2, '0');
const seconds = String(ngayKhamDate.getSeconds()).padStart(2, '0');

// Định dạng lại theo kiểu dd/mm/yyyy hh:mm:ss
//const NgayYeuCauFormatted = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    const bnchitraFormatted = new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2 // Tối đa 2 chữ số sau dấu thập phân
  }).format(item.bnchitra);;
  const thuloaFormatted = new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(item.thulao);
        const row = worksheet.addRow([
          item.stt,
          item.mayte,
          item.makham,
          item.tenbn,
          NgayYeuCauFormatted,
          item.ba,
          item.bsth,
          item.thulao,
        ])
        row.font = font
      })

      // Tạo một tệp Excel và lưu nó
      const buffer = await workbook.xlsx.writeBuffer()
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      a.click()
    },
  },
}
</script>
<style>
.elevation-1 {
  & tbody tr:nth-child(even) {
    background-color: #f2f2f2; /* Màu nền cho dòng chẵn */
  }

  & tbody tr:nth-child(odd) {
    background-color: #ffffff; /* Màu nền cho dòng lẻ */
  }
}

.elevation-1 tbody tr:hover {
  background-color: #ffffff; /* Thay đổi màu nền khi hover (sử dụng mã màu xanh lá cây như ví dụ trước) */
  color: #40c4ff !important; /* Thay đổi màu văn bản khi hover (màu trắng trong trường hợp này) */
}
.elevation-1 th {
  background-color: rgb(255, 255, 255); /* Màu sắc của header */
  color: rgb(0, 0, 0) !important; /* Màu sắc của văn bản trong header */
  font-weight: bold !important; /* In đậm chữ trong header */
  font-size: 0.99rem !important; /* Đặt cỡ chữ cho header */
}
</style>
