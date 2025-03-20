<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="Listbacsi"
      item-key="name"
      :search="search"
      :items-per-page="10"
      class="elevation-1"

    >
      <template v-slot:item.TenNhanVien="{ item }">
        <v-chip :style="{ 'min-width': '100px' }" light>
          {{ item.TenNhanVien }}
        </v-chip>
      </template>
      <template v-slot:item.NgoaiGio="{ item }">
        <span>{{ formatNumber(item.NgoaiGio) }}</span>
      </template>
      <template v-slot:item.ThuLaoChamSocSPT_DB="{ item }">
        <span>{{ formatNumber(item.ThuLaoChamSocSPT_DB) }}</span>
      </template>
      <template v-slot:item.ThuLaoChamSocSPT_BH="{ item }">
        <span>{{ formatNumber(item.ThuLaoChamSocSPT_BH) }}</span>
      </template>
      <template v-slot:item.ThuLaoChamSocSPT_KL="{ item }">
        <span>{{ formatNumber(item.ThuLaoChamSocSPT_KL) }}</span>
      </template>
      <template v-slot:item.DonGiaDTNTru="{ item }">
        <span>{{ formatNumber(item.DonGiaDTNTru) }}</span>
      </template>
      <template v-slot:top>
        <v-toolbar flat >
          <v-toolbar-title>Tỷ lệ thù lao BV</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>

          <v-btn color="light-blue" dark class="mb-4 mr-4" @click="addItem">
            Thêm bác sĩ
          </v-btn>

          <!-- <v-btn color="yellow darken-1" dark class="mb-4 mr-4" @click="Edit">
            Sửa hàng loạt
          </v-btn> -->
          <input type="file" ref="fileInput" @change="handleFileChange">
          <v-btn color="yellow darken-1" dark class="mb-4 mr-4" @click="uploadExcel">Sửa hàng loạt</v-btn>
          <v-btn dark class="mb-4 mr-4" color="cyan" @click="getNhanvien()"
            >Danh sách nhân viên</v-btn
          >
          <v-btn dark class="mb-4" color="teal" @click="exportToExcel()"
            >Xuất excel</v-btn
          >
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="openDeleteDialog(item)" color="red">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogAdd" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Thêm bác sĩ</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="mb-4">
              <v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NhanVien_Id"
                    label="Id nhân viên"
                    type="number"
                    @keypress.enter="fetchDoctorName"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.TenNhanVien"
                    label="Tên bác sĩ"
                    readonly
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col>
                <v-col
                  > <v-select
                  v-model="addItems.Hang_Bs"
                  :items="itemsHang"
                  label="Hạng"
                  @change="updateAddItems"
                ></v-select></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4">
                <v-col>
                  <h2>Màu xanh nhập phần trăm</h2>
                </v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4">
                <v-col>
                  <h2>Màu hồng nhập giá tiền</h2>
                </v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_DDKGN"
                  label="Đo đa ký giấc ngủ"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_ChiDinhCLS"
                  label="Chỉ định CLS"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="addItems.NgoaiGio"
                  label="Ngoài giờ"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_PT_ChiDinh"
                  label="Chỉ định phẫu thuật"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_PT_BSGioiThieuNgoai"
                  label="PT Giới thiệu ngoài"
                  type="number"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Khám bệnh</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_Kham_DB"
                    label="Khám bệnh (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_Kham_BH"
                    label="Khám bệnh (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_Kham_KL"
                    label="Khám bệnh (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Tái khám</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_TaiKham_DB"
                    label="Tái khám(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_TaiKham_BH"
                    label="Tái khám(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_TaiKham_KL"
                    label="Tái khám(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thủ thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ThuThuat_DB"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ThuThuat_BH"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ThuThuat_KL"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thực hiện CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ThucHienCLS_DB"
                    label="Thực hiện CLS(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ThucHienCLS_BH"
                    label="Thực hiện CLS(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ThucHienCLS_KL"
                    label="Thực hiện CLS(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Điện tim-HH</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ECGHH_DB"
                    label="Điện tim-HH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ECGHH_BH"
                    label="Điện tim-HH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_ECGHH_KL"
                    label="Điện tim-HH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê TMH</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GMTMH_DB"
                    label="Gây mê TMH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GMTMH_BH"
                    label="Gây mê TMH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GMTMH_KL"
                    label="Gây mê TMH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê TH</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GMTH_DB"
                    label="Gây mê TH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GMTH_BH"
                    label="Gây mê TH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GMTH_KL"
                    label="Gây mê TH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="blue lighten-4"
                ><h3 style="color: red">Phẫu thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PTChinh"
                    label="Dễ"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PTCungBsKhac"
                    label="Trung bình"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_Tru_PTKho"
                    label="Khó"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PTPhu"
                    label="Bs Phụ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4">
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PTChinh_TruBH"
                    label="Trừ bảo hiểm"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_MienGiam13"
                    label="Bệnh nhân cũ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_MienGiam2"
                    label="Trừ dẫn bệnh"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">ĐT nội trú</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_DTNT_DB"
                    label="ĐT nội trú(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_DTNT_BH"
                    label="ĐT nội trú(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_DTNT_KL"
                    label="ĐT nội trú(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col class="pink lighten-4"
                  ><v-text-field
                    v-model="addItems.DonGiaDTNTru"
                    label="Đơn Giá"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Chăm sóc sau PT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ThuLaoChamSocSPT_DB"
                    label="Chăm sóc sau PT(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ThuLaoChamSocSPT_BH"
                    label="Chăm sóc sau PT(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ThuLaoChamSocSPT_KL"
                    label="Chăm sóc sau PT(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">NGCLS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_NGCLS_DB"
                    label="NGCLS_DB"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_NGCLS_BH"
                    label="NGCLS_BH"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_NGCLS_KL"
                    label="NGCLS_KL"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAdd"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="saveAdd"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogEdit" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Sửa tỷ lệ</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="mb-4">
              <v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.TenNhanVien"
                    label="Tên bác sĩ"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col>
                <v-col
                  > <v-select
                  v-model="editItems.Hang_Bs"
                  :items="itemsHang"
                  label="Hạng"
                  @change="updateEditItems"


                ></v-select></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4">
                <v-col>
                  <h2>Màu xanh nhập phần trăm</h2>
                </v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4">
                <v-col>
                  <h2>Màu hồng nhập giá tiền</h2>
                </v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_DDKGN"
                  label="Đo đa ký giấc ngủ"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_ChiDinhCLS"
                  label="Chỉ định CLS"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="editItems.NgoaiGio"
                  label="Ngoài giờ"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_PT_ChiDinh"
                  label="Chỉ định phẫu thuật"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_PT_BSGioiThieuNgoai"
                  label="PT Giới thiệu ngoài"
                  type="number"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Khám bệnh</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_Kham_DB"
                    label="Khám bệnh (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_Kham_BH"
                    label="Khám bệnh (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_Kham_KL"
                    label="Khám bệnh (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Tái khám</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_TaiKham_DB"
                    label="Tái khám(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_TaiKham_BH"
                    label="Tái khám(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_TaiKham_KL"
                    label="Tái khám(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thủ thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ThuThuat_DB"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ThuThuat_BH"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ThuThuat_KL"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thực hiện CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ThucHienCLS_DB"
                    label="Thực hiện CLS(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ThucHienCLS_BH"
                    label="Thực hiện CLS(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ThucHienCLS_KL"
                    label="Thực hiện CLS(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Điện tim-HH</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ECGHH_DB"
                    label="Điện tim-HH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ECGHH_BH"
                    label="Điện tim-HH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_ECGHH_KL"
                    label="Điện tim-HH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê TMH</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GMTMH_DB"
                    label="Gây mê TMH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GMTMH_BH"
                    label="Gây mê TMH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GMTMH_KL"
                    label="Gây mê TMH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê TMH</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GMTH_DB"
                    label="Gây mê TH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GMTH_BH"
                    label="Gây mê TH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GMTH_KL"
                    label="Gây mê TH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="blue lighten-4"
                ><h3 style="color: red">Phẫu thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PTChinh"
                    label="Dễ"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PTCungBsKhac"
                    label="Trung bình"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_Tru_PTKho"
                    label="Khó"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PTPhu"
                    label="Bs Phụ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4">
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PTChinh_TruBH"
                    label="Trừ bảo hiểm"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_MienGiam13"
                    label="Bệnh nhân cũ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_MienGiam2"
                    label="Trừ dẫn bệnh"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">ĐT nội trú</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_DTNT_DB"
                    label="ĐT nội trú(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_DTNT_BH"
                    label="ĐT nội trú(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_DTNT_KL"
                    label="ĐT nội trú(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col class="pink lighten-4"
                  ><v-text-field
                    v-model="editItems.DonGiaDTNTru"
                    label="Đơn Giá"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Chăm sóc sau PT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ThuLaoChamSocSPT_DB"
                    label="Chăm sóc sau PT(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ThuLaoChamSocSPT_BH"
                    label="Chăm sóc sau PT(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ThuLaoChamSocSPT_KL"
                    label="Chăm sóc sau PT(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">NGCLS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_NGCLS_DB"
                    label="NGCLS_DB"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_NGCLS_BH"
                    label="NGCLS_BH"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_NGCLS_KL"
                    label="NGCLS_KL"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeEdit"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="saveEdit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="alertshow" max-width="300">
      <v-card>
        <v-card-title style="color: red">Thông báo</v-card-title>
        <v-card-text>
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="alertshow = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Dialog xác nhận xóa -->
    <v-dialog v-model="deleteDialog" max-width="300">
      <v-card>
        <v-card-title style="color: red">Xác nhận xóa</v-card-title>
        <v-card-text> Bạn có chắc muốn xóa bác sĩ này không? </v-card-text>
        <v-card-actions>
          <v-btn color="red darken-1" @click="deleteDialog = false"
            >Không</v-btn
          >
          <v-btn color="green darken-1" @click="deleteItem">Có</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogNhanvien" max-width="500">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="searchNhanVien"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>

          <v-btn icon @click="dialogNhanvien = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headersNhanvien"
            :items="Listnhanvien"
            :search="searchNhanVien"
            :items-per-page="10"
            class="elevation-1"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>


  </v-container>
</template>

<script>
import axios from 'axios'
import ExcelJS from 'exceljs'
export default {
  data: () => ({
    itemsHang: [],
    Listbacsi: [],
    Listnhanvien: [],
    //singleSelect: false,
    //selected: [],
    //nhanVienSelect: [],
    search: '',
    //search1: '',
    apiUrl: process.env.API_BASE_URL,
    searchNhanVien: '',
    alertshow: false,
    dialogMessage: '',
    deleteDialog: false,
    dialogHangBacSi: false,
    dialogNhanvien: false,

    selectedNhanVienId: null,
    headers: [
      { text: 'Actions', value: 'actions', sortable: false },
      { text: 'Stt  ', align: 'start', sortable: true, value: 'STT' },
      { text: 'Id', value: 'NhanVien_Id' },
      { text: 'Tên bác sĩ', value: 'TenNhanVien', width: '50%' },
      {text: 'Hạng', value: 'Hang_Bs'},
      { text: 'Khám bệnh (dẫn bệnh)', value: 'PhanTram_Kham_DB' },
      { text: 'Khám bệnh (bảo hiểm)', value: 'PhanTram_Kham_BH' },
      { text: 'Khám bệnh (khách lẻ)', value: 'PhanTram_Kham_KL' },
      { text: 'Tái khám(dẫn bệnh)', value: 'PhanTram_TaiKham_DB' },
      { text: 'Tái khám(bảo hiểm)', value: 'PhanTram_TaiKham_BH' },
      { text: 'Tái khám(khách lẻ)', value: 'PhanTram_TaiKham_KL' },
      { text: 'Chỉ định CLS', value: 'PhanTram_ChiDinhCLS' },
      { text: 'Thực hiện CLS(DB)', value: 'PhanTram_ThucHienCLS_DB' },
      { text: 'Thực hiện CLS(BH)', value: 'PhanTram_ThucHienCLS_BH' },
      { text: 'Thực hiện CLS(KL)', value: 'PhanTram_ThucHienCLS_KL' },
      { text: 'Điện tim-HH(DB)', value: 'PhanTram_ECGHH_DB' },
      { text: 'Điện tim-HH(BH)', value: 'PhanTram_ECGHH_BH' },
      { text: 'Điện tim-HH(KL)', value: 'PhanTram_ECGHH_KL' },
      { text: 'Thủ thuật(DB)', value: 'PhanTram_ThuThuat_DB' },
      { text: 'Thủ thuật(BH)', value: 'PhanTram_ThuThuat_BH' },
      { text: 'Thủ thuật(KL)', value: 'PhanTram_ThuThuat_KL' },
      { text: 'Gây mê TMH(DB)', value: 'PhanTram_GMTMH_DB' },
      { text: 'Gây mê TMH(BH)', value: 'PhanTram_GMTMH_BH' },
      { text: 'Gây mê TMH(KL)', value: 'PhanTram_GMTMH_KL' },
      { text: 'Gây mê TH(DB)', value: 'PhanTram_GMTH_DB' },
      { text: 'Gây mê TH(BH)', value: 'PhanTram_GMTH_BH' },
      { text: 'Gây mê TH(KL)', value: 'PhanTram_GMTH_KL' },
      { text: 'Ngoài giờ', value: 'NgoaiGio' },
      { text: 'Bs Chính', value: 'PhanTram_PTChinh' },
      { text: 'Bs Phụ', value: 'PhanTram_PTPhu' },
      { text: 'PT cùng Bs khác', value: 'PhanTram_PTCungBsKhac' },
      { text: 'PT Giới thiệu ngoài', value: 'PhanTram_PT_BSGioiThieuNgoai' },
      { text: 'Chỉ định phẫu thuật', value: 'PhanTram_PT_ChiDinh' },
      { text: 'Trừ bảo hiểm', value: 'PhanTram_PTChinh_TruBH' },
      { text: 'Chăm sóc sau PT(dẫn bệnh)', value: 'ThuLaoChamSocSPT_DB' },
      { text: 'Chăm sóc sau PT(bảo hiểm)', value: 'ThuLaoChamSocSPT_BH' },
      { text: 'Chăm sóc sau PT(khách lẻ)', value: 'ThuLaoChamSocSPT_KL' },
      { text: 'Trừ phẫu thuật khó', value: 'PhanTram_Tru_PTKho' },
      { text: 'Đơn Giá', value: 'DonGiaDTNTru' },
      { text: 'ĐT nội trú(dẫn bệnh)', value: 'PhanTram_DTNT_DB' },
      { text: 'ĐT nội trú(bảo hiểm)', value: 'PhanTram_DTNT_BH' },
      { text: 'ĐT nội trú(khách lẻ)', value: 'PhanTram_DTNT_KL' },
      { text: 'Bn cũ/người nhà bn cũ', value: 'PhanTram_MienGiam13' },
      { text: '2 người nhà PT 1 ngày', value: 'PhanTram_MienGiam2' },
      { text: 'Đo đa ký giấc ngủ', value: 'PhanTram_DDKGN' },
      { text: 'NGCLS_DB', value: 'PhanTram_NGCLS_DB' },
      { text: 'NGCLS_BH', value: 'PhanTram_NGCLS_BH' },
      { text: 'NGCLS_KL', value: 'PhanTram_NGCLS_KL' },

      // Thêm các cột khác nếu cần
    ],
    headersNhanvien: [
      { text: 'Id nhân viên', value: 'NhanVien_Id' },
      { text: 'Tên bác sĩ', value: 'TenNhanVien', width: '50%' },
    ],
    dialogEdit: false,
    dialogAdd: false,
    dialogEditNhieu: false,
    defaultItems: {
      NhanVien_Id: null,
      TenNhanVien: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_TaiKham_DB: 0,
      PhanTram_TaiKham_BH: 0,
      PhanTram_TaiKham_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_ThucHienCLS_DB: 0,
      PhanTram_ThucHienCLS_BH: 0,
      PhanTram_ThucHienCLS_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      PhanTram_ThuThuat_DB: 0,
      PhanTram_ThuThuat_BH: 0,
      PhanTram_ThuThuat_KL: 0,
      PhanTram_GMTMH_DB: 0,
      PhanTram_GMTMH_BH: 0,
      PhanTram_GMTMH_KL: 0,
      PhanTram_GMTH_DB: 0,
      PhanTram_GMTH_BH: 0,
      PhanTram_GMTH_KL: 0,
      NgoaiGio: 0,
      PhanTram_PTChinh: 0,
      PhanTram_PTPhu: 0,
      PhanTram_PTCungBsKhac: 0,
      PhanTram_PT_BSGioiThieuNgoai: 0,
      PhanTram_PT_ChiDinh: 0,
      PhanTram_PTChinh_TruBH: 0,
      ThuLaoChamSocSPT_DB: 0,
      ThuLaoChamSocSPT_BH: 0,
      ThuLaoChamSocSPT_KL: 0,
      PhanTram_Tru_PTKho: 0,
      DonGiaDTNTru: 0,
      PhanTram_DTNT_DB: 0,
      PhanTram_DTNT_BH: 0,
      PhanTram_DTNT_KL: 0,
      PhanTram_MienGiam13: 0,
      PhanTram_MienGiam2: 0,
      PhanTram_DDKGN: 0,
      PhanTram_NGCLS_DB: 0,
      PhanTram_NGCLS_BH: 0,
      PhanTram_NGCLS_KL: 0,
    },
    addItems: {
      NhanVien_Id: null,
      TenNhanVien: '',
      Hang_Bs: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_TaiKham_DB: 0,
      PhanTram_TaiKham_BH: 0,
      PhanTram_TaiKham_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_ThucHienCLS_DB: 0,
      PhanTram_ThucHienCLS_BH: 0,
      PhanTram_ThucHienCLS_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      PhanTram_ThuThuat_DB: 0,
      PhanTram_ThuThuat_BH: 0,
      PhanTram_ThuThuat_KL: 0,
      PhanTram_GMTMH_DB: 0,
      PhanTram_GMTMH_BH: 0,
      PhanTram_GMTMH_KL: 0,
      PhanTram_GMTH_DB: 0,
      PhanTram_GMTH_BH: 0,
      PhanTram_GMTH_KL: 0,
      NgoaiGio: 0,
      PhanTram_PTChinh: 0,
      PhanTram_PTPhu: 0,
      PhanTram_PTCungBsKhac: 0,
      PhanTram_PT_BSGioiThieuNgoai: 0,
      PhanTram_PT_ChiDinh: 0,
      PhanTram_PTChinh_TruBH: 0,
      ThuLaoChamSocSPT_DB: 0,
      ThuLaoChamSocSPT_BH: 0,
      ThuLaoChamSocSPT_KL: 0,
      PhanTram_Tru_PTKho: 0,
      DonGiaDTNTru: 0,
      PhanTram_DTNT_DB: 0,
      PhanTram_DTNT_BH: 0,
      PhanTram_DTNT_KL: 0,
      PhanTram_MienGiam13: 0,
      PhanTram_MienGiam2: 0,
      PhanTram_DDKGN: 0,
      PhanTram_NGCLS_DB: 0,
      PhanTram_NGCLS_BH: 0,
      PhanTram_NGCLS_KL: 0,
    },
    editItems: {
      NhanVien_Id: '',
      TenNhanVien: '',
      Hang_Bs: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_TaiKham_DB: 0,
      PhanTram_TaiKham_BH: 0,
      PhanTram_TaiKham_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_ThucHienCLS_DB: 0,
      PhanTram_ThucHienCLS_BH: 0,
      PhanTram_ThucHienCLS_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      PhanTram_ThuThuat_DB: 0,
      PhanTram_ThuThuat_BH: 0,
      PhanTram_ThuThuat_KL: 0,
      PhanTram_GMTMH_DB: 0,
      PhanTram_GMTMH_BH: 0,
      PhanTram_GMTMH_KL: 0,
      PhanTram_GMTH_DB: 0,
      PhanTram_GMTH_BH: 0,
      PhanTram_GMTH_KL: 0,
      NgoaiGio: 0,
      PhanTram_PTChinh: 0,
      PhanTram_PTPhu: 0,
      PhanTram_PTCungBsKhac: 0,
      PhanTram_PT_BSGioiThieuNgoai: 0,
      PhanTram_PT_ChiDinh: 0,
      PhanTram_PTChinh_TruBH: 0,
      ThuLaoChamSocSPT_DB: 0,
      ThuLaoChamSocSPT_BH: 0,
      ThuLaoChamSocSPT_KL: 0,
      PhanTram_Tru_PTKho: 0,
      DonGiaDTNTru: 0,
      PhanTram_DTNT_DB: 0,
      PhanTram_DTNT_BH: 0,
      PhanTram_DTNT_KL: 0,
      PhanTram_MienGiam13: 0,
      PhanTram_MienGiam2: 0,
      PhanTram_DDKGN: 0,
      PhanTram_NGCLS_DB: 0,
      PhanTram_NGCLS_BH: 0,
      PhanTram_NGCLS_KL: 0,
    },
    deleteItems: {
      NhanVien_Id: '',
      TenNhanVien: '',
      Hang_Bs: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_TaiKham_DB: 0,
      PhanTram_TaiKham_BH: 0,
      PhanTram_TaiKham_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_ThucHienCLS_DB: 0,
      PhanTram_ThucHienCLS_BH: 0,
      PhanTram_ThucHienCLS_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      PhanTram_ThuThuat_DB: 0,
      PhanTram_ThuThuat_BH: 0,
      PhanTram_ThuThuat_KL: 0,
      PhanTram_GMTMH_DB: 0,
      PhanTram_GMTMH_BH: 0,
      PhanTram_GMTMH_KL: 0,
      PhanTram_GMTH_DB: 0,
      PhanTram_GMTH_BH: 0,
      PhanTram_GMTH_KL: 0,
      NgoaiGio: 0,
      PhanTram_PTChinh: 0,
      PhanTram_PTPhu: 0,
      PhanTram_PTCungBsKhac: 0,
      PhanTram_PT_BSGioiThieuNgoai: 0,
      PhanTram_PT_ChiDinh: 0,
      PhanTram_PTChinh_TruBH: 0,
      ThuLaoChamSocSPT_DB: 0,
      ThuLaoChamSocSPT_BH: 0,
      ThuLaoChamSocSPT_KL: 0,
      PhanTram_Tru_PTKho: 0,
      DonGiaDTNTru: 0,
      PhanTram_DTNT_DB: 0,
      PhanTram_DTNT_BH: 0,
      PhanTram_DTNT_KL: 0,
      PhanTram_MienGiam13: 0,
      PhanTram_MienGiam2: 0,
      PhanTram_DDKGN: 0,
      PhanTram_NGCLS_DB: 0,
      PhanTram_NGCLS_BH: 0,
      PhanTram_NGCLS_KL: 0,
    },
  }),

  created() {
    this.getListbacsi()
    this.getHangbs()
  //  console.log("Selected items:", this.selected);

  },
//    watch: {
//   selected: function(newVal, oldVal) {
//     this.nhanVienSelect = []
//     for(let index = 0; index < newVal.length; index++)
//     {
//    this.nhanVienSelect.push(newVal[index].NhanVien_Id);

//    }
//     console.log(this.nhanVienSelect);
//    }

// },
  methods: {
    async getHangbs() {
  try {
    const response = await axios.get(`${this.apiUrl}/hangbs`);
    const data = response.data.result;

    // Khởi tạo mảng để chứa các giá trị của trường "Hang"
    const hangs = [];

    // Duyệt qua mảng data và lấy giá trị của trường "Hang" từ mỗi đối tượng
    data.forEach(item => {
      hangs.push(item.Hang);
    });

    // Cập nhật mảng itemsHang với các giá trị của trường "Hang"
    this.itemsHang = hangs;

    // Gán initialized thành true sau khi mảng được cập nhật
    this.initialized = true;
  } catch (error) {
    console.error('Error fetching items:', error);
  }
},
async updateAddItems() {
    try {
      // Gọi API để lấy các giá trị tương ứng với giá trị đã chọn từ v-select
      const response = await axios.get(`${this.apiUrl}/hangbsitem/${this.addItems.Hang_Bs}`);
      const data = response.data.result[0];

      // Cập nhật các thuộc tính trong addItems với các giá trị từ API
      this.addItems = { ...this.addItems, ...data };
    } catch (error) {
      console.error('Error updating addItems:', error);
    }
},
async updateEditItems() {
    try {
      // Gọi API để lấy các giá trị tương ứng với giá trị đã chọn từ v-select
      const response = await axios.get(`${this.apiUrl}/hangbsitem/${this.editItems.Hang_Bs}`);
      const data = response.data.result[0];

      // Cập nhật các thuộc tính trong addItems với các giá trị từ API
      this.editItems = { ...this.editItems, ...data };
    } catch (error) {
      console.error('Error updating addItems:', error);
    }
},
    handleFileChange() {
      this.selectedFile = this.$refs.fileInput.files[0];

    },
    async uploadExcel() {
     if (!this.selectedFile) {
    alert('Vui lòng chọn tệp Excel để upload.');
    return;
  }
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try {
        const response =  await axios.post(`${this.apiUrl}/uploadExcel`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.getListbacsi()
        const logContents = response.data.logContents

        this.sendLogToServer('upload', logContents)
        this.selectedFile = undefined;
        alert('Upload successful');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload file');
      }
    },
    async fetchDoctorName() {
      try {
        const response = await axios.get(
          `${this.apiUrl}/tennhanvien/${this.addItems.NhanVien_Id}`
        )
        const doctor = response.data


        if (doctor) {
          // Nếu tìm thấy bác sĩ, cập nhật tên vào addItems.TenNhanVien
          this.addItems.TenNhanVien = doctor.TenNhanVien
        } else {
          // Nếu không tìm thấy, có thể đặt tên về rỗng hoặc thông báo khác
          this.addItems.TenNhanVien = ''
        }
      } catch (error) {
        console.error('Error fetching doctor information:', error)
        this.addItems.TenNhanVien = ''
        // Xử lý lỗi nếu có
      }

      // Các phương thức khác của bạn...
    },
    async getListbacsi() {
      try {
        const response = await axios.get(`${this.apiUrl}/tylethulao`)
        this.Listbacsi = response.data.result
      } catch (error) {
        console.error(error)
      }
    },
    async getListnhanvien() {
      try {
        const response = await axios.get(`${this.apiUrl}/listnhanvien`)
        this.Listnhanvien = response.data.result
      } catch (error) {
        console.error(error)
      }
    },
    getNhanvien() {
      this.getListnhanvien()
      this.dialogNhanvien = true
    },
    async saveAdd() {
      try {
        const response = await axios.post(
          `${this.apiUrl}/insertbacsi`,
          this.addItems,
          { validateStatus: false }
        )

        if (response.status === 201) {
          const successMessage = response.data.message

          this.dialogMessage = successMessage
          this.alertshow = true

          this.addItems = { ...this.addItems }
          this.getListbacsi()
          this.dialogAdd = false
          this.addItems = this.defaultItems
          this.sendLogToServer('add', this.addItems)
        } else if (response.status === 400) {
          const errorMessage = response.data.error
          this.dialogMessage = errorMessage
          this.alertshow = true
        } else if (response.status === 500) {
          const errorMessage = response.data.error
          this.dialogMessage = errorMessage
          this.alertshow = true
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          const errorMessage = error.response.data.error
          this.dialogMessage = errorMessage
          this.alertshow = true
        }
      }
    },
    addItem() {
      this.dialogAdd = true
    },
    Edit() {
      this.dialogEditNhieu = true
    },
    editItem(item) {
      this.editItems = { ...item }
      for (let key in this.editItems) {
        if (!this.editItems[key]) {
          this.editItems[key] = 0
        }
      }
      // Hiển thị dialogEdit
      this.dialogEdit = true
      // Hiển thị dialogEdit
    },
    async saveEdit() {
      try {
        const response = await axios.put(
          `${this.apiUrl}/updatebacsi/${this.editItems.NhanVien_Id}`,
          this.editItems,
          { validateStatus: false }
        )
        // In ra kết quả từ endpoint sau khi gọi thành công
        this.dialogEdit = false // Đóng dialog sau khi gửi request thành công
        if (response.status === 200) {
          const successMessage = response.data.message

          this.dialogMessage = successMessage
          this.alertshow = true
          this.getListbacsi()
          this.sendLogToServer('edit', this.editItems)
        } else {
          // Xử lý thông báo lỗi nếu có
          const errorMessage = response.data.error
          this.dialogMessage = errorMessage
        }
      } catch (error) {
        console.error('Lỗi khi cập nhật thông tin:', error)
        const successMessage = error

        this.dialogMessage = successMessage
        this.alertshow = true
        // Xử lý lỗi tại đây (hiển thị thông báo, log, ...)
      }
    },
    closeAdd() {
      this.dialogAdd = false
      this.addItems = this.defaultItems
    },
    closeEdit() {
      this.dialogEdit = false
    },
    formatNumber(num) {
      if (num !== null && num !== undefined) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      } else {
        // Handle the case where num is null or undefined
        return '' // or any other default value or message
      }
    },
    openDeleteDialog(item) {
      this.selectedNhanVienId = item.NhanVien_Id
      this.deleteItems = item
      this.deleteDialog = true
    },
    async deleteItem() {
      try {
        // Xóa mục từ server
        const deleteResponse = await axios.delete(
          `${this.apiUrl}/xoabacsi/${this.selectedNhanVienId}`
        )
        if (deleteResponse.status === 200) {
          const successMessage = deleteResponse.data.message

          this.dialogMessage = successMessage
          this.alertshow = true
          this.getListbacsi()
          this.deleteDialog = false
          this.selectedNhanVienId = null
          this.sendLogToServer('delete', this.deleteItems)
          this.searchNhanVien = ''
          // Xử lý thông báo hoặc cập nhật UI sau khi xóa và cập nhật danh sách từ server thành công
        } else {
          // Xử lý thông báo lỗi nếu có khi xóa
        }
      } catch (error) {
        console.error('Lỗi khi xóa bác sĩ:', error)
        // Xử lý lỗi tại đây (hiển thị thông báo, log, ...)
      }
    },
    async sendLogToServer(actionType, data) {
      const logEntry = {
        username: this.$store.state.auth.user.userName,
        actionType: actionType,
        actionDetails: JSON.stringify(data),
        timestamp: new Date().toISOString(),
      }
      await axios.post(`${this.apiUrl}/insertlog`, logEntry)
    },
    exportToExcel() {
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet('Bacsi Data')

      // Tạo header cho tệp Excel
      const columns = [
        // Các cột của bạn ở đây, sử dụng headers từ bạn đã định nghĩa trong data
        // Ví dụ:
        { header: 'Stt', key: 'STT', width: 5 },
        { header: 'Id', key: 'NhanVien_Id', width: 10 },
        { header: 'Tên bác sĩ', key: 'TenNhanVien', width: 30 },
        { header: 'Hạng', key: 'Hang_Bs'},

        { header: 'Khám bệnh (dẫn bệnh)', key: 'PhanTram_Kham_DB' },
        { header: 'Khám bệnh (bảo hiểm)', key: 'PhanTram_Kham_BH' },
        { header: 'Khám bệnh (khách lẻ)', key: 'PhanTram_Kham_KL' },
        { header: 'Tái khám(dẫn bệnh)', key: 'PhanTram_TaiKham_DB' },
        { header: 'Tái khám(bảo hiểm)', key: 'PhanTram_TaiKham_BH' },
        { header: 'Tái khám(khách lẻ)', key: 'PhanTram_TaiKham_KL' },
        { header: 'Chỉ định CLS', key: 'PhanTram_ChiDinhCLS' },
        { header: 'Thực hiện CLS(DB)', key: 'PhanTram_ThucHienCLS_DB' },
        { header: 'Thực hiện CLS(BH)', key: 'PhanTram_ThucHienCLS_BH' },
        { header: 'Thực hiện CLS(KL)', key: 'PhanTram_ThucHienCLS_KL' },
        { header: 'Điện tim-HH(DB)', key: 'PhanTram_ECGHH_DB' },
        { header: 'Điện tim-HH(BH)', key: 'PhanTram_ECGHH_BH' },
        { header: 'Điện tim-HH(KL)', key: 'PhanTram_ECGHH_KL' },
        { header: 'Thủ thuật(DB)', key: 'PhanTram_ThuThuat_DB' },
        { header: 'Thủ thuật(BH)', key: 'PhanTram_ThuThuat_BH' },
        { header: 'Thủ thuật(KL)', key: 'PhanTram_ThuThuat_KL' },
        { header: 'Gây mê TMH(DB)', key: 'PhanTram_GMTMH_DB' },
        { header: 'Gây mê TMH(BH)', key: 'PhanTram_GMTMH_BH' },
        { header: 'Gây mê TMH(KL)', key: 'PhanTram_GMTMH_KL' },
        { header: 'Gây mê TH(DB)', key: 'PhanTram_GMTH_DB' },
        { header: 'Gây mê TH(BH)', key: 'PhanTram_GMTH_BH' },
        { header: 'Gây mê TH(KL)', key: 'PhanTram_GMTH_KL' },
        { header: 'Ngoài giờ', key: 'NgoaiGio' },
        { header: 'PT dễ', key: 'PhanTram_PTChinh' },
        { header: 'PT trung bình', key: 'PhanTram_PTCungBsKhac' },
        { header: 'PT khó', key: 'PhanTram_Tru_PTKho' },
        { header: 'Bs Phụ', key: 'PhanTram_PTPhu' },
        { header: 'Trừ bảo hiểm', key: 'PhanTram_PTChinh_TruBH' },
        { header: 'Bệnh nhân cũ', key: 'PhanTram_MienGiam13' },
        { header: 'Trừ dẫn bệnh', key: 'PhanTram_MienGiam2' },
        { header: 'PT Giới thiệu ngoài', key: 'PhanTram_PT_BSGioiThieuNgoai' },
        { header: 'Chỉ định phẫu thuật', key: 'PhanTram_PT_ChiDinh' },
        { header: 'Chăm sóc sau PT(dẫn bệnh)', key: 'ThuLaoChamSocSPT_DB' },
        { header: 'Chăm sóc sau PT(bảo hiểm)', key: 'ThuLaoChamSocSPT_BH' },
        { header: 'Chăm sóc sau PT(khách lẻ)', key: 'ThuLaoChamSocSPT_KL' },
        { header: 'Đơn Giá', key: 'DonGiaDTNTru' },
        { header: 'ĐT nội trú(dẫn bệnh)', key: 'PhanTram_DTNT_DB' },
        { header: 'ĐT nội trú(bảo hiểm)', key: 'PhanTram_DTNT_BH' },
        { header: 'ĐT nội trú(khách lẻ)', key: 'PhanTram_DTNT_KL' },

        { header: 'Đo đa ký giấc ngủ', key: 'PhanTram_DDKGN' },
        { header: 'NGCLS_DB', key: 'PhanTram_NGCLS_DB' },
        { header: 'NGCLS_BH', key: 'PhanTram_NGCLS_BH' },
        { header: 'NGCLS_KL', key: 'PhanTram_NGCLS_KL' },

        // Thêm các cột khác nếu cần
      ]

      // Thêm header vào worksheet
      worksheet.columns = columns

      // Thêm dữ liệu từ Listbacsi vào worksheet
      this.Listbacsi.forEach((item, index) => {
        const row = {
          STT: index + 1,
          NhanVien_Id: item.NhanVien_Id,
          TenNhanVien: item.TenNhanVien,
          Hang_Bs: item.Hang_Bs,
          PhanTram_Kham_DB: item.PhanTram_Kham_DB,
          PhanTram_Kham_BH: item.PhanTram_Kham_BH,
          PhanTram_Kham_KL: item.PhanTram_Kham_KL,
          PhanTram_TaiKham_DB: item.PhanTram_TaiKham_DB,
          PhanTram_TaiKham_BH: item.PhanTram_TaiKham_BH,
          PhanTram_TaiKham_KL: item.PhanTram_TaiKham_KL,
          PhanTram_ChiDinhCLS: item.PhanTram_ChiDinhCLS,
          PhanTram_ThucHienCLS_DB: item.PhanTram_ThucHienCLS_DB,
          PhanTram_ThucHienCLS_BH: item.PhanTram_ThucHienCLS_BH,
          PhanTram_ThucHienCLS_KL: item.PhanTram_ThucHienCLS_KL,
          PhanTram_ECGHH_DB: item.PhanTram_ECGHH_DB,
          PhanTram_ECGHH_BH: item.PhanTram_ECGHH_BH,
          PhanTram_ECGHH_KL: item.PhanTram_ECGHH_KL,
          PhanTram_ThuThuat_DB: item.PhanTram_ThuThuat_DB,
          PhanTram_ThuThuat_BH: item.PhanTram_ThuThuat_BH,
          PhanTram_ThuThuat_KL: item.PhanTram_ThuThuat_KL,
          PhanTram_GMTMH_DB: item.PhanTram_GMTMH_DB,
          PhanTram_GMTMH_BH: item.PhanTram_GMTMH_BH,
          PhanTram_GMTMH_KL: item.PhanTram_GMTMH_KL,
          PhanTram_GMTH_DB: item.PhanTram_GMTH_DB,
          PhanTram_GMTH_BH: item.PhanTram_GMTH_BH,
          PhanTram_GMTH_KL: item.PhanTram_GMTH_KL,
          NgoaiGio: item.NgoaiGio,
          PhanTram_PTChinh: item.PhanTram_PTChinh,
          PhanTram_PTPhu: item.PhanTram_PTPhu,
          PhanTram_PTCungBsKhac: item.PhanTram_PTCungBsKhac,
          PhanTram_PT_BSGioiThieuNgoai: item.PhanTram_PT_BSGioiThieuNgoai,
          PhanTram_PT_ChiDinh: item.PhanTram_PT_ChiDinh,
          PhanTram_PTChinh_TruBH: item.PhanTram_PTChinh_TruBH,
          ThuLaoChamSocSPT_DB: item.ThuLaoChamSocSPT_DB,
          ThuLaoChamSocSPT_BH: item.ThuLaoChamSocSPT_BH,
          ThuLaoChamSocSPT_KL: item.ThuLaoChamSocSPT_KL,
          PhanTram_Tru_PTKho: item.PhanTram_Tru_PTKho,
          DonGiaDTNTru: item.DonGiaDTNTru,
          PhanTram_DTNT_DB: item.PhanTram_DTNT_DB,
          PhanTram_DTNT_BH: item.PhanTram_DTNT_BH,
          PhanTram_DTNT_KL: item.PhanTram_DTNT_KL,
          PhanTram_MienGiam13: item.PhanTram_MienGiam13,
          PhanTram_MienGiam2: item.PhanTram_MienGiam2,
          PhanTram_DDKGN: item.PhanTram_DDKGN,
          PhanTram_NGCLS_DB: item.PhanTram_NGCLS_DB,
          PhanTram_NGCLS_BH: item.PhanTram_NGCLS_BH,
          PhanTram_NGCLS_KL: item.PhanTram_NGCLS_KL,

          // Thêm các trường dữ liệu khác tương ứng với header đã định nghĩa
        }
        worksheet.addRow(row)
      })

      // Xuất tệp Excel
      workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'DanhsachbacsiBV.xlsx'
        a.click()
        window.URL.revokeObjectURL(url)
      })
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


.scroll {

}
</style>
