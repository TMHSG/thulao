<template>
  <v-row>
    <v-col cols="12" sm="8" md="4"></v-col>
    <v-col cols="12" sm="8" md="4" style="text-align: center; color: black"
      ><h2>THỦ THUẬT</h2></v-col
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
        item-text="TenNhanVien"
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
          new Number(tongThuLao)
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
        <template v-slot:item.NgayYeuCau="{ item }">
          {{
            new Date(item.NgayYeuCau).toLocaleDateString('vi-VN', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          }}
        </template>
        <template v-slot:item.PhiThu="{ item }">
          {{
            new Number(item.PhiThu)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }}
        </template>
        <template v-slot:item.ThuLao="{ item }">
          {{
            new Number(item.ThuLao)
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
  name: 'ThuThuat',
  components: {},
  data: () => ({
    thuthuat: [],
    TuNgay: new Date().toISOString().substr(0, 10),
    DenNgay: new Date().toISOString().substr(0, 10),
    TuNgayMenu: false,
    DenNgayMenu: false,
    isLoading: false,
    selectedNhanVien: null,
    apiUrl: process.env.API_BASE_URL,
    NhanVien_Id: null,
    ListNhanVien: [],

    headers: [
      {
        text: 'Stt  ',
        align: 'start',
        sortable: true,
        value: 'STT',
      },
      {
        text: 'Mã y tế',
        value: 'MaYTe',
      },
      {
        text: 'Tên bệnh nhân',
        value: 'TenBenhNhan',
      },
      {
        text: 'Ngày yêu cầu',
        value: 'NgayYeuCau',
      },
      {
        text: 'Tên dịch vụ',
        value: 'TenDichVu',
      },
      {
        text: 'Số phiếu',
        value: 'SoPhieuYeuCau',
      },
      {
        text: 'Bệnh án',
        value: 'LoaiBenhAn',
      },
      {
        text: 'Chỉ định',
        value: 'ChiDinh',
      },
      {
        text: 'Bác sĩ',
        value: 'TenNhanVien',
      },
      {
        text: 'Đơn giá',
        value: 'PhiThu',
      },
      {
        text: 'Thù lao',
        value: 'ThuLao',
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
    tongThuLao() {
      // Tính tổng cột "ThuLao" dựa trên dữ liệu trong biến "thuthuat"
      return this.thuthuat.reduce((total, item) => {
        return total + (item.ThuLao || 0)
      }, 0)
    },
  },
  created() {
    this.getListNhanVien() // Gọi hàm này khi trang được tải lên
  },
  watch: {},
  methods: {
    async getListNhanVien() {
      try {
        const response = await axios.get(`${this.apiUrl}/nhanvienq7`)
        this.ListNhanVien = response.data.result
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
        url = `${this.apiUrl}/thuthuatq7?TuNgay=${this.TuNgay}&DenNgay=${this.DenNgay}&NhanVien_Id=${this.selectedNhanVien}`

        this.thuthuat = await axios
          .get(url)
          .then(function (response) {
            return response.data.result
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
        url = `${this.apiUrl}/thuthuatq7?TuNgay=${this.TuNgay}&DenNgay=${this.DenNgay}&NhanVien_Id=${this.selectedNhanVien.NhanVien_Id}`
        if (!isNaN(this.selectedNhanVien.NhanVien_Id)) {
          // Xử lý trường hợp selectedNhanVien không phải là số
          this.thuthuat = await axios
            .get(url)
            .then(function (response) {
              return response.data.result
            })
            .catch(function (error) {
              // handle error
              console.log(error)
            })
            .finally(function () {
              self.isLoading = false
            })
          return
        }
      }
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },

    async exportToExcel() {
      const fileName = `Q7_ThuThuat_${this.formatDate(
        this.TuNgay
      )}_${this.formatDate(this.DenNgay)}.xlsx`
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet('Sheet1')

      // Định dạng phông chữ

      // Định dạng ngày thành "dd/MM/yyyy"
      const dateFormat = 'dd/MM/yyyy'
      worksheet.getColumn('D').numFmt = dateFormat

      // Định dạng số thành "##,###"
      const numberFormat = '##,###'
      worksheet.getColumn('J').numFmt = numberFormat
      worksheet.getColumn('K').numFmt = numberFormat
      worksheet.addRow([
        'STT',
        'Mã y tế',
        'Tên bệnh nhân',
        'Ngày khám',
        'Tên dịch vụ',
        'Số phiếu',
        'Bệnh án',
        'Chỉ định',
        'Bác sĩ',
        'Đơn giá',
        'Thù lao',
      ])
      const font = { name: 'Times New Roman', size: 11 }

      // Áp dụng định dạng phông chữ cho toàn bộ worksheet
      worksheet.getRow(1).font = font
      // Thêm dữ liệu từ this.congkham vào tệp Excel
      this.thuthuat.forEach((item) => {
        const ngayKhamDate = new Date(item.NgayYeuCau)
        const ngayKhamFormatted = ngayKhamDate.toLocaleDateString('vi-VN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        const row = worksheet.addRow([
          item.STT,
          item.MaYTe,
          item.TenBenhNhan,
          ngayKhamFormatted,
          item.TenDichVu,
          item.SoPhieuYeuCau,
          item.LoaiBenhAn,
          item.ChiDinh,
          item.TenNhanVien,
          item.PhiThu,
          item.ThuLao,
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
