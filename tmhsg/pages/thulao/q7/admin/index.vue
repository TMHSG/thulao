<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="Listbacsi"
      :search="search"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:item.TenNhanVien="{ item }">
        <v-chip :style="{ 'min-width': '100px' }" light>
          {{ item.TenNhanVien }}
        </v-chip>
      </template>
      <template v-slot:item.KhamToanDien="{ item }">
        <span>{{ formatNumber(item.KhamToanDien) }}</span>
      </template>

      <template v-slot:item.PhanTram_CLSKSKDK_HD3="{ item }">
        <span>{{ formatNumber(item.PhanTram_CLSKSKDK_HD3) }}</span>
      </template><template v-slot:item.PhanTram_CLSKSKDK_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_CLSKSKDK_HD2) }}</span>
      </template><template v-slot:item.PhanTram_CLSKSKDK_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_CLSKSKDK_HD1) }}</span>
      </template>

      <template v-slot:item.PhanTram_SieuAmCT_HD3="{ item }">
        <span>{{ formatNumber(item.PhanTram_SieuAmCT_HD3) }}</span>
      </template><template v-slot:item.PhanTram_SieuAmCT_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_SieuAmCT_HD2) }}</span>
      </template><template v-slot:item.PhanTram_SieuAmCT_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_SieuAmCT_HD1) }}</span>
      </template>

      <template v-slot:item.PhanTram_PhuKhoaCT_HD3="{ item }">
        <span>{{ formatNumber(item.PhanTram_PhuKhoaCT_HD3) }}</span>
      </template><template v-slot:item.PhanTram_PhuKhoaCT_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_PhuKhoaCT_HD2) }}</span>
      </template><template v-slot:item.PhanTram_PhuKhoaCT_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_PhuKhoaCT_HD1) }}</span>
      </template>

      <template v-slot:item.PhanTram_XNPhuKhoaCT_HD3="{ item }">
        <span>{{ formatNumber(item.PhanTram_XNPhuKhoaCT_HD3) }}</span>
      </template><template v-slot:item.PhanTram_XNPhuKhoaCT_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_XNPhuKhoaCT_HD2) }}</span>
      </template><template v-slot:item.PhanTram_XNPhuKhoaCT_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_XNPhuKhoaCT_HD1) }}</span>
      </template>

      <template v-slot:item.KSKCTyGC2_2BS_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_2BS_HD1) }}</span>
      </template><template v-slot:item.KSKCTyGC2_2BS_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_2BS_HD2) }}</span>
      </template><template v-slot:item.KSKCTyGC2_2BS_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_2BS_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTyGC2_3BS_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_3BS_HD1) }}</span>
      </template><template v-slot:item.KSKCTyGC2_3BS_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_3BS_HD2) }}</span>
      </template><template v-slot:item.KSKCTyGC2_3BS_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_3BS_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTyGC2_4BS_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_4BS_HD1) }}</span>
      </template><template v-slot:item.KSKCTyGC2_4BS_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_4BS_HD2) }}</span>
      </template><template v-slot:item.KSKCTyGC2_4BS_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_4BS_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTy_Duoi4CK_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTy_Duoi4CK_HD1) }}</span>
      </template><template v-slot:item.KSKCTy_Duoi4CK_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTy_Duoi4CK_HD2) }}</span>
      </template><template v-slot:item.KSKCTy_Duoi4CK_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTy_Duoi4CK_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTy_PhuKhoaKSK_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTy_PhuKhoaKSK_HD1) }}</span>
      </template><template v-slot:item.KSKCTy_PhuKhoaKSK_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTy_PhuKhoaKSK_HD2) }}</span>
      </template><template v-slot:item.KSKCTy_PhuKhoaKSK_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTy_PhuKhoaKSK_HD3) }}</span>
      </template>

      <template v-slot:item.KSK_KetHoSo_4To="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_4To) }}</span>
      </template><template v-slot:item.KSK_KetHoSo_1To="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_1To) }}</span>
      </template><template v-slot:item.KSK_KetHoSo_Pru="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_Pru) }}</span>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Tỷ lệ thù lao Q7</v-toolbar-title>

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
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="addItems.KhamToanDien"
                  label="Khám toàn diện"
                  type="number"
                  te
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_ChiDinhCLS"
                  label="Chỉ định CLS"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_ChiDinhNSTH"
                  label="Chỉ định nội soi tiêu hóa"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_ChiDinh_KTD"
                  label="Chỉ định khám toàn diện"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.PhanTram_GioiThieuNgoai"
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
                ><h3 style="color: red">Thủ thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_TT_DB"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_TT_BH"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_TT_KL"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thực hiện CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_CLS_DB"
                    label="Thực hiện CLS(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_CLS_BH"
                    label="Thực hiện CLS(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_CLS_KL"
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
                ><h3 style="color: red">Gây mê</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GM_DB"
                    label="Gây mê (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GM_BH"
                    label="Gây mê (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_GM_KL"
                    label="Gây mê (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Siêu âm</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAm_DB"
                    label="Siêu âm (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAm_BH"
                    label="Siêu âm (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAm_KL"
                    label="Siêu âm (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">X-Quang</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XQuang_DB"
                    label="X-Quang (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XQuang_BH"
                    label="X-Quang (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XQuang_KL"
                    label="X-Quang (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Đo loãng xương</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_DoLoangXuong_DB"
                    label="Đo loãng xương (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_DoLoangXuong_BH"
                    label="Đo loãng xương (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_DoLoangXuong_KL"
                    label="Đo loãng xương (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">CLS KSK DK</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_CLSKSKDK_HD3"
                    label="CLS KSKDK HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_CLSKSKDK_HD2"
                    label="CLS KSKDK HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_CLSKSKDK_HD1"
                    label="CLS KSKDK HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Siêu âm CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT_HD3"
                    label="Siêu âm CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT_HD2"
                    label="Siêu âm CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT_HD1"
                    label="Siêu âm CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PhuKhoaCT_HD3"
                    label="Phụ khoa CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PhuKhoaCT_HD2"
                    label="Phụ khoa CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PhuKhoaCT_HD1"
                    label="Phụ khoa CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">XN phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XNPhuKhoaCT_HD3"
                    label="XN phụ khoa HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XNPhuKhoaCT_HD2"
                    label="XN phụ khoa HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XNPhuKhoaCT_HD1"
                    label="XN phụ khoa HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 2 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_2BS_HD1"
                    label="KSK 2 BS HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_2BS_HD2"
                    label="KSK 2 BS HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_2BS_HD3"
                    label="KSK 2 BS HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 3 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_3BS_HD1"
                    label="KSK 3 BS HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_3BS_HD2"
                    label="KSK 3 BS HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_3BS_HD3"
                    label="KSK 3 BS HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 4 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_4BS_HD1"
                    label="KSK 4 BS HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_4BS_HD2"
                    label="KSK 4 BS HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTyGC2_4BS_HD3"
                    label="KSK 4 BS HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK dưới 4 CK</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTy_Duoi4CK_HD1"
                    label="KSK dưới 4 CK HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTy_Duoi4CK_HD2"
                    label="KSK dưới 4 CK HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTy_Duoi4CK_HD3"
                    label="KSK dưới 4 CK HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK phụ khoa ksk</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTy_PhuKhoaKSK_HD1"
                    label="KSK phụ khoa ksk HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTy_PhuKhoaKSK_HD2"
                    label="KSK phụ khoa ksk HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSKCTy_PhuKhoaKSK_HD3"
                    label="KSK phụ khoa ksk HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Tổng kết hồ sơ</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSK_KetHoSo_4To"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSK_KetHoSo_1To"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.KSK_KetHoSo_Pru"
                    label="Pru"
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
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="editItems.KhamToanDien"
                  label="Khám toàn diện"
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
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_ChiDinhNSTH"
                  label="Chỉ định nội soi tiêu hóa"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_ChiDinh_KTD"
                  label="Chỉ định khám toàn diện"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.PhanTram_GioiThieuNgoai"
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
                ><h3 style="color: red">Thủ thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_TT_DB"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_TT_BH"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_TT_KL"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thực hiện CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_CLS_DB"
                    label="Thực hiện CLS(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_CLS_BH"
                    label="Thực hiện CLS(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_CLS_KL"
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
                ><h3 style="color: red">Gây mê</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GM_DB"
                    label="Gây mê (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GM_BH"
                    label="Gây mê (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_GM_KL"
                    label="Gây mê (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Siêu âm</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAm_DB"
                    label="Siêu âm (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAm_BH"
                    label="Siêu âm (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAm_KL"
                    label="Siêu âm (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">X-Quang</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XQuang_DB"
                    label="X-Quang (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XQuang_BH"
                    label="X-Quang (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XQuang_KL"
                    label="X-Quang (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Đo loãng xương</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_DoLoangXuong_DB"
                    label="Đo loãng xương (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_DoLoangXuong_BH"
                    label="Đo loãng xương (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_DoLoangXuong_KL"
                    label="Đo loãng xương (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">CLS KSK DK</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_CLSKSKDK_HD3"
                    label="CLS KSKDK HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_CLSKSKDK_HD2"
                    label="CLS KSKDK HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_CLSKSKDK_HD1"
                    label="CLS KSKDK HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Siêu âm CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT_HD3"
                    label="Siêu âm CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT_HD2"
                    label="Siêu âm CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT_HD1"
                    label="Siêu âm CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PhuKhoaCT_HD3"
                    label="Phụ khoa CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PhuKhoaCT_HD2"
                    label="Phụ khoa CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PhuKhoaCT_HD1"
                    label="Phụ khoa CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">XN phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XNPhuKhoaCT_HD3"
                    label="XN phụ khoa HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XNPhuKhoaCT_HD2"
                    label="XN phụ khoa HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XNPhuKhoaCT_HD1"
                    label="XN phụ khoa HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 2 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_2BS_HD1"
                    label="KSK 2 BS HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_2BS_HD2"
                    label="KSK 2 BS HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_2BS_HD3"
                    label="KSK 2 BS HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 3 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_3BS_HD1"
                    label="KSK 3 BS HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_3BS_HD2"
                    label="KSK 3 BS HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_3BS_HD3"
                    label="KSK 3 BS HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 4 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_4BS_HD1"
                    label="KSK 4 BS HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_4BS_HD2"
                    label="KSK 4 BS HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTyGC2_4BS_HD3"
                    label="KSK 4 BS HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK dưới 4 CK</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTy_Duoi4CK_HD1"
                    label="KSK dưới 4 CK HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTy_Duoi4CK_HD2"
                    label="KSK dưới 4 CK HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTy_Duoi4CK_HD3"
                    label="KSK dưới 4 CK HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK phụ khoa ksk</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTy_PhuKhoaKSK_HD1"
                    label="KSK phụ khoa ksk HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTy_PhuKhoaKSK_HD2"
                    label="KSK phụ khoa ksk HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSKCTy_PhuKhoaKSK_HD3"
                    label="KSK phụ khoa ksk HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Tổng kết hồ sơ</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSK_KetHoSo_4To"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSK_KetHoSo_1To"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.KSK_KetHoSo_Pru"
                    label="Pru"
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
    Listbacsi: [],
    Listnhanvien: [],
    search: '',
    apiUrl: process.env.API_BASE_URL,
    searchNhanVien: '',
    alertshow: false,
    dialogMessage: '',
    deleteDialog: false,
    dialogNhanvien: false,
    selectedNhanVienId: null,
    headers: [
      { text: 'Actions', value: 'actions', sortable: false },
      { text: 'Stt  ', align: 'start', sortable: true, value: 'STT' },
      { text: 'Id', value: 'NhanVien_Id' },
      { text: 'Tên bác sĩ', value: 'TenNhanVien', width: '50%' },
      { text: 'Khám bệnh (DB))', value: 'PhanTram_Kham_DB' },
      { text: 'Khám bệnh (BH)', value: 'PhanTram_Kham_BH' },
      { text: 'Khám bệnh (khách lẻ)', value: 'PhanTram_Kham_KL' },
      { text: 'Thực hiện CLS (DB)', value: 'PhanTram_CLS_DB' },
      { text: 'Thực hiện CLS (BH)', value: 'PhanTram_CLS_BH' },
      { text: 'Thực hiện CLS (KL)', value: 'PhanTram_CLS_KL' },
      { text: 'Thủ thuật (DB)', value: 'PhanTram_TT_DB' },
      { text: 'Thủ thuật (BH)', value: 'PhanTram_TT_BH' },
      { text: 'Thủ thuật (KL)', value: 'PhanTram_TT_KL' },
      { text: 'Chỉ định CLS', value: 'PhanTram_ChiDinhCLS' },
      { text: 'Gây mê (DB)', value: 'PhanTram_GM_DB' },
      { text: 'Gây mê (BH)', value: 'PhanTram_GM_BH' },
      { text: 'Gây mê (KL)', value: 'PhanTram_GM_KL' },
      { text: 'Chỉ định KTD', value: 'PhanTram_ChiDinh_KTD' },
      { text: 'PT Giới thiệu ngoài', value: 'PhanTram_GioiThieuNgoai' },
      { text: 'Siêu âm (DB)', value: 'PhanTram_SieuAm_DB' },
      { text: 'Siêu âm (BH)', value: 'PhanTram_SieuAm_BH' },
      { text: 'Siêu âm (KL)', value: 'PhanTram_SieuAm_KL' },
      { text: 'CLS KSKDK HD3', value: 'PhanTram_CLSKSKDK_HD3' },
      { text: 'CLS KSKDK HD2', value: 'PhanTram_CLSKSKDK_HD2' },
      { text: 'CLS KSKDK HD1', value: 'PhanTram_CLSKSKDK_HD1' },
      { text: 'Siêu âm CT HD3', value: 'PhanTram_SieuAmCT_HD3' },
      { text: 'Siêu âm CT HD2', value: 'PhanTram_SieuAmCT_HD2' },
      { text: 'Siêu âm CT HD1', value: 'PhanTram_SieuAmCT_HD1' },
      { text: 'Phụ khoa CT HD3', value: 'PhanTram_PhuKhoaCT_HD3' },
      { text: 'Phụ khoa CT HD2', value: 'PhanTram_PhuKhoaCT_HD2' },
      { text: 'Phụ khoa CT HD1', value: 'PhanTram_PhuKhoaCT_HD1' },
      { text: 'XN phụ khoa CT HD3', value: 'PhanTram_XNPhuKhoaCT_HD3' },
      { text: 'XN phụ khoa CT HD2', value: 'PhanTram_XNPhuKhoaCT_HD2' },
      { text: 'XN phụ khoa CT HD1', value: 'PhanTram_XNPhuKhoaCT_HD1' },
      { text: 'Tổng kết hồ sơ 4 tờ', value: 'KSK_KetHoSo_4To' },
      { text: 'Tổng kết hồ sơ 1 tờ', value: 'KSK_KetHoSo_1To' },
      { text: 'Tổng kết hồ Pru', value: 'KSK_KetHoSo_Pru' },
      { text: 'X-Quang (DB)', value: 'PhanTram_XQuang_DB' },
      { text: 'X-Quang (BH)', value: 'PhanTram_XQuang_BH' },
      { text: 'X-Quang (KL)', value: 'PhanTram_XQuang_KL' },
      { text: 'Đo loãng xương (DB)', value: 'PhanTram_DoLoangXuong_DB' },
      { text: 'Đo loãng xương (BH)', value: 'PhanTram_DoLoangXuong_BH' },
      { text: 'Đo loãng xương (KL)', value: 'PhanTram_DoLoangXuong_KL' },
      { text: 'Đo điện tim (DB)', value: 'PhanTram_ECGHH_DB' },
      { text: 'Đo điện tim (BH)', value: 'PhanTram_ECGHH_BH' },
      { text: 'Đo điện tim (KL)', value: 'PhanTram_ECGHH_KL' },
      { text: 'Khám toàn diện', value: 'KhamToanDien' },
      { text: 'Chỉ định NSTH', value: 'PhanTram_ChiDinhNSTH' },

      // Thêm các cột khác nếu cần
    ],
    headersNhanvien: [
      { text: 'Id nhân viên', value: 'NhanVien_Id' },
      { text: 'Tên bác sĩ', value: 'TenNhanVien', width: '50%' },
    ],
    dialogEdit: false,
    dialogAdd: false,
    defaultItems: {
      NhanVien_Id: null,
      TenNhanVien: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_CLS_DB: 0,
      PhanTram_CLS_BH: 0,
      PhanTram_CLS_KL: 0,
      PhanTram_TT_DB: 0,
      PhanTram_TT_BH: 0,
      PhanTram_TT_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_GM_DB: 0,
      PhanTram_GM_BH: 0,
      PhanTram_GM_KL: 0,
      PhanTram_ChiDinh_KTD: 0,
      PhanTram_GioiThieuNgoai: 0,
      PhanTram_SieuAm_DB: 0,
      PhanTram_SieuAm_BH: 0,
      PhanTram_SieuAm_KL: 0,
      PhanTram_CLSKSKDK_HD3: 0,
      PhanTram_CLSKSKDK_HD2: 0,
      PhanTram_CLSKSKDK_HD1: 0,
      PhanTram_SieuAmCT_HD3: 0,
      PhanTram_SieuAmCT_HD2: 0,
      PhanTram_SieuAmCT_HD1: 0,
      PhanTram_PhuKhoaCT_HD3: 0,
      PhanTram_PhuKhoaCT_HD2: 0,
      PhanTram_PhuKhoaCT_HD1: 0,
      PhanTram_XNPhuKhoaCT_HD3: 0,
      PhanTram_XNPhuKhoaCT_HD2: 0,
      PhanTram_XNPhuKhoaCT_HD1: 0,
      KSK_KetHoSo_4To: 0,
      KSK_KetHoSo_1To: 0,
      KSK_KetHoSo_Pru: 0,
      PhanTram_XQuang_DB: 0,
      PhanTram_XQuang_BH: 0,
      PhanTram_XQuang_KL: 0,
      PhanTram_DoLoangXuong_DB: 0,
      PhanTram_DoLoangXuong_BH: 0,
      PhanTram_DoLoangXuong_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      KhamToanDien: 0,
      PhanTram_ChiDinhNSTH: 0,
    },
    addItems: {
      NhanVien_Id: null,
      TenNhanVien: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_CLS_DB: 0,
      PhanTram_CLS_BH: 0,
      PhanTram_CLS_KL: 0,
      PhanTram_TT_DB: 0,
      PhanTram_TT_BH: 0,
      PhanTram_TT_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_GM_DB: 0,
      PhanTram_GM_BH: 0,
      PhanTram_GM_KL: 0,
      PhanTram_ChiDinh_KTD: 0,
      PhanTram_GioiThieuNgoai: 0,
      PhanTram_SieuAm_DB: 0,
      PhanTram_SieuAm_BH: 0,
      PhanTram_SieuAm_KL: 0,
      PhanTram_CLSKSKDK_HD3: 0,
      PhanTram_CLSKSKDK_HD2: 0,
      PhanTram_CLSKSKDK_HD1: 0,
      PhanTram_SieuAmCT_HD3: 0,
      PhanTram_SieuAmCT_HD2: 0,
      PhanTram_SieuAmCT_HD1: 0,
      PhanTram_PhuKhoaCT_HD3: 0,
      PhanTram_PhuKhoaCT_HD2: 0,
      PhanTram_PhuKhoaCT_HD1: 0,
      PhanTram_XNPhuKhoaCT_HD3: 0,
      PhanTram_XNPhuKhoaCT_HD2: 0,
      PhanTram_XNPhuKhoaCT_HD1: 0,
      KSKCTyGC2_2BS_HD1: 0,
      KSKCTyGC2_2BS_HD2: 0,
      KSKCTyGC2_2BS_HD3: 0,
      KSKCTyGC2_3BS_HD1: 0,
      KSKCTyGC2_3BS_HD2: 0,
      KSKCTyGC2_3BS_HD3: 0,
      KSKCTyGC2_4BS_HD1: 0,
      KSKCTyGC2_4BS_HD2: 0,
      KSKCTyGC2_4BS_HD3: 0,
      KSKCTy_Duoi4CK_HD1: 0,
      KSKCTy_Duoi4CK_HD2: 0,
      KSKCTy_Duoi4CK_HD3: 0,
      KSKCTy_PhuKhoaKSK_HD1: 0,
      KSKCTy_PhuKhoaKSK_HD2: 0,
      KSKCTy_PhuKhoaKSK_HD3: 0,
      KSK_KetHoSo_4To: 0,
      KSK_KetHoSo_1To: 0,
      KSK_KetHoSo_Pru: 0,
      PhanTram_XQuang_DB: 0,
      PhanTram_XQuang_BH: 0,
      PhanTram_XQuang_KL: 0,
      PhanTram_DoLoangXuong_DB: 0,
      PhanTram_DoLoangXuong_BH: 0,
      PhanTram_DoLoangXuong_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      KhamToanDien: 0,
      PhanTram_ChiDinhNSTH: 0,
    },
    editItems: {
      NhanVien_Id: '',
      TenNhanVien: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_CLS_DB: 0,
      PhanTram_CLS_BH: 0,
      PhanTram_CLS_KL: 0,
      PhanTram_TT_DB: 0,
      PhanTram_TT_BH: 0,
      PhanTram_TT_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_GM_DB: 0,
      PhanTram_GM_BH: 0,
      PhanTram_GM_KL: 0,
      PhanTram_ChiDinh_KTD: 0,
      PhanTram_GioiThieuNgoai: 0,
      PhanTram_SieuAm_DB: 0,
      PhanTram_SieuAm_BH: 0,
      PhanTram_SieuAm_KL: 0,
      PhanTram_CLSKSKDK_HD3: 0,
      PhanTram_CLSKSKDK_HD2: 0,
      PhanTram_CLSKSKDK_HD1: 0,
      PhanTram_SieuAmCT_HD3: 0,
      PhanTram_SieuAmCT_HD2: 0,
      PhanTram_SieuAmCT_HD1: 0,
      PhanTram_PhuKhoaCT_HD3: 0,
      PhanTram_PhuKhoaCT_HD2: 0,
      PhanTram_PhuKhoaCT_HD1: 0,
      PhanTram_XNPhuKhoaCT_HD3: 0,
      PhanTram_XNPhuKhoaCT_HD2: 0,
      PhanTram_XNPhuKhoaCT_HD1: 0,
      KSK_KetHoSo_4To: 0,
      KSK_KetHoSo_1To: 0,
      KSK_KetHoSo_Pru: 0,
      PhanTram_XQuang_DB: 0,
      PhanTram_XQuang_BH: 0,
      PhanTram_XQuang_KL: 0,
      PhanTram_DoLoangXuong_DB: 0,
      PhanTram_DoLoangXuong_BH: 0,
      PhanTram_DoLoangXuong_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      KhamToanDien: 0,
      PhanTram_ChiDinhNSTH: 0,
    },
    deleteItems: {
      NhanVien_Id: '',
      TenNhanVien: '',
      PhanTram_Kham_DB: 0,
      PhanTram_Kham_BH: 0,
      PhanTram_Kham_KL: 0,
      PhanTram_CLS_DB: 0,
      PhanTram_CLS_BH: 0,
      PhanTram_CLS_KL: 0,
      PhanTram_TT_DB: 0,
      PhanTram_TT_BH: 0,
      PhanTram_TT_KL: 0,
      PhanTram_ChiDinhCLS: 0,
      PhanTram_GM_DB: 0,
      PhanTram_GM_BH: 0,
      PhanTram_GM_KL: 0,
      PhanTram_ChiDinh_KTD: 0,
      PhanTram_GioiThieuNgoai: 0,
      PhanTram_SieuAm_DB: 0,
      PhanTram_SieuAm_BH: 0,
      PhanTram_SieuAm_KL: 0,
      PhanTram_CLSKSKDK_HD3: 0,
      PhanTram_CLSKSKDK_HD2: 0,
      PhanTram_CLSKSKDK_HD1: 0,
      PhanTram_SieuAmCT_HD3: 0,
      PhanTram_SieuAmCT_HD2: 0,
      PhanTram_SieuAmCT_HD1: 0,
      PhanTram_PhuKhoaCT_HD3: 0,
      PhanTram_PhuKhoaCT_HD2: 0,
      PhanTram_PhuKhoaCT_HD1: 0,
      PhanTram_XNPhuKhoaCT_HD3: 0,
      PhanTram_XNPhuKhoaCT_HD2: 0,
      PhanTram_XNPhuKhoaCT_HD1: 0,
      KSK_KetHoSo_4To: 0,
      KSK_KetHoSo_1To: 0,
      KSK_KetHoSo_Pru: 0,
      PhanTram_XQuang_DB: 0,
      PhanTram_XQuang_BH: 0,
      PhanTram_XQuang_KL: 0,
      PhanTram_DoLoangXuong_DB: 0,
      PhanTram_DoLoangXuong_BH: 0,
      PhanTram_DoLoangXuong_KL: 0,
      PhanTram_ECGHH_DB: 0,
      PhanTram_ECGHH_BH: 0,
      PhanTram_ECGHH_KL: 0,
      KhamToanDien: 0,
      PhanTram_ChiDinhNSTH: 0,
    },
  }),

  created() {
    this.getListbacsi()
  },
  methods: {
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
        const response =  await axios.post(`${this.apiUrl}/uploadExcelQ7`, formData, {
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
          `${this.apiUrl}/tennhanvienq7/${this.addItems.NhanVien_Id}`
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
        const response = await axios.get(`${this.apiUrl}/tylethulaoq7`)
        this.Listbacsi = response.data.result
      } catch (error) {
        console.error(error)
      }
    },
    async getListnhanvien() {
      try {
        const response = await axios.get(`${this.apiUrl}/listnhanvienq7`)
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
          `${this.apiUrl}/insertbacsiq7`,
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
          `${this.apiUrl}/updatebacsiq7/${this.editItems.NhanVien_Id}`,
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
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      } else {
        // Handle the case where num is null or undefined
        return ''; // or any other default value or message
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
          `${this.apiUrl}/xoabacsiq7/${this.selectedNhanVienId}`
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
      await axios.post(`${this.apiUrl}/insertlogq7`, logEntry)
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
        { header: 'Khám bệnh (dẫn bệnh)', key: 'PhanTram_Kham_DB' },
        { header: 'Khám bệnh (bảo hiểm)', key: 'PhanTram_Kham_BH' },
        { header: 'Khám bệnh (khách lẻ)', key: 'PhanTram_Kham_KL' },
        { header: 'Thực hiện CLS (DB)', key: 'PhanTram_CLS_DB' },
        { header: 'Thực hiện CLS (BH)', key: 'PhanTram_CLS_BH' },
        { header: 'Thực hiện CLS (KL)', key: 'PhanTram_CLS_KL' },
        { header: 'Thủ thuật (DB)', key: 'PhanTram_TT_DB' },
        { header: 'Thủ thuật (BH)', key: 'PhanTram_TT_BH' },
        { header: 'Thủ thuật (KL)', key: 'PhanTram_TT_KL' },
        { header: 'Chỉ định CLS', key: 'PhanTram_ChiDinhCLS' },
        { header: 'Gây mê (DB)', key: 'PhanTram_GM_DB' },
        { header: 'Gây mê (BH)', key: 'PhanTram_GM_BH' },
        { header: 'Gây mê (KL)', key: 'PhanTram_GM_KL' },
        { header: 'Chỉ định KTD', key: 'PhanTram_ChiDinh_KTD' },
        { header: 'PT Giới thiệu ngoài', key: 'PhanTram_GioiThieuNgoai' },
        { header: 'Siêu âm (DB)', key: 'PhanTram_SieuAm_DB' },
        { header: 'Siêu âm (BH)', key: 'PhanTram_SieuAm_BH' },
        { header: 'Siêu âm (KL)', key: 'PhanTram_SieuAm_KL' },
        { header: 'CLS KSKDK HD3', key: 'PhanTram_CLSKSKDK_HD3' },
        { header: 'CLS KSKDK HD2', key: 'PhanTram_CLSKSKDK_HD2' },
        { header: 'CLS KSKDK HD1', key: 'PhanTram_CLSKSKDK_HD1' },
        { header: 'Siêu âm CT HD3', key: 'PhanTram_SieuAmCT_HD3' },
        { header: 'Siêu âm CT HD2', key: 'PhanTram_SieuAmCT_HD2' },
        { header: 'Siêu âm CT HD1', key: 'PhanTram_SieuAmCT_HD1' },
        { header: 'Phụ khoa CT HD3', key: 'PhanTram_PhuKhoaCT_HD3' },
        { header: 'Phụ khoa CT HD2', key: 'PhanTram_PhuKhoaCT_HD2' },
        { header: 'Phụ khoa CT HD1', key: 'PhanTram_PhuKhoaCT_HD1' },
        { header: 'XN phụ khoa CT HD3', key: 'PhanTram_XNPhuKhoaCT_HD3' },
        { header: 'XN phụ khoa CT HD2', key: 'PhanTram_XNPhuKhoaCT_HD2' },
        { header: 'XN phụ khoa CT HD1', key: 'PhanTram_XNPhuKhoaCT_HD1' },
        { header: 'Tổng kết hồ sơ 4 tờ', key: 'KSK_KetHoSo_4To' },
        { header: 'Tổng kết hồ sơ 1 tờ', key: 'KSK_KetHoSo_1To' },
        { header: 'Tổng kết hồ Pru', key: 'KSK_KetHoSo_Pru' },
        { header: 'X-Quang (DB)', key: 'PhanTram_XQuang_DB' },
        { header: 'X-Quang (BH)', key: 'PhanTram_XQuang_BH' },
        { header: 'X-Quang (KL)', key: 'PhanTram_XQuang_KL' },
        { header: 'Đo loãng xương (DB)', key: 'PhanTram_DoLoangXuong_DB' },
        { header: 'Đo loãng xương (BH)', key: 'PhanTram_DoLoangXuong_BH' },
        { header: 'Đo loãng xương (KL)', key: 'PhanTram_DoLoangXuong_KL' },
        { header: 'Đo điện tim (DB)', key: 'PhanTram_ECGHH_DB' },
        { header: 'Đo điện tim (BH)', key: 'PhanTram_ECGHH_BH' },
        { header: 'Đo điện tim (KL)', key: 'PhanTram_ECGHH_KL' },
        { header: 'Khám toàn diện', key: 'KhamToanDien' },
        { header: 'Chỉ định NSTH', key: 'PhanTram_ChiDinhNSTH' },

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
          PhanTram_Kham_DB: item.PhanTram_Kham_DB,
          PhanTram_Kham_BH: item.PhanTram_Kham_BH,
          PhanTram_Kham_KL: item.PhanTram_Kham_KL,
          PhanTram_CLS_DB: item.PhanTram_CLS_DB,
          PhanTram_CLS_BH: item.PhanTram_CLS_BH,
          PhanTram_CLS_KL: item.PhanTram_CLS_KL,
          PhanTram_TT_DB: item.PhanTram_TT_DB,
          PhanTram_TT_BH: item.PhanTram_TT_BH,
          PhanTram_TT_KL: item.PhanTram_TT_KL,
          PhanTram_ChiDinhCLS: item.PhanTram_ChiDinhCLS,
          PhanTram_GM_DB: item.PhanTram_GM_DB,
          PhanTram_GM_BH: item.PhanTram_GM_BH,
          PhanTram_GM_KL: item.PhanTram_GM_KL,
          PhanTram_ChiDinh_KTD: item.PhanTram_ChiDinh_KTD,
          PhanTram_GioiThieuNgoai: item.PhanTram_GioiThieuNgoai,
          PhanTram_SieuAm_DB: item.PhanTram_SieuAm_DB,
          PhanTram_SieuAm_BH: item.PhanTram_SieuAm_BH,
          PhanTram_SieuAm_KL: item.PhanTram_SieuAm_KL,
          PhanTram_CLSKSKDK_HD3: item.PhanTram_CLSKSKDK_HD3,
          PhanTram_CLSKSKDK_HD2: item.PhanTram_CLSKSKDK_HD2,
          PhanTram_CLSKSKDK_HD1: item.PhanTram_CLSKSKDK_HD1,
          PhanTram_SieuAmCT_HD3: item.PhanTram_SieuAmCT_HD3,
          PhanTram_SieuAmCT_HD2: item.PhanTram_SieuAmCT_HD2,
          PhanTram_SieuAmCT_HD1: item.PhanTram_SieuAmCT_HD1,
          PhanTram_PhuKhoaCT_HD3: item.PhanTram_PhuKhoaCT_HD3,
          PhanTram_PhuKhoaCT_HD2: item.PhanTram_PhuKhoaCT_HD2,
          PhanTram_PhuKhoaCT_HD1: item.PhanTram_PhuKhoaCT_HD1,
          PhanTram_XNPhuKhoaCT_HD3: item.PhanTram_XNPhuKhoaCT_HD3,
          PhanTram_XNPhuKhoaCT_HD2: item.PhanTram_XNPhuKhoaCT_HD2,
          PhanTram_XNPhuKhoaCT_HD1: item.PhanTram_XNPhuKhoaCT_HD1,
          KSK_KetHoSo_4To: item.KSK_KetHoSo_4To,
          KSK_KetHoSo_1To: item.KSK_KetHoSo_1To,
          KSK_KetHoSo_Pru: item.KSK_KetHoSo_Pru,
          PhanTram_XQuang_DB: item.PhanTram_XQuang_DB,
          PhanTram_XQuang_BH: item.PhanTram_XQuang_BH,
          PhanTram_XQuang_KL: item.PhanTram_XQuang_KL,
          PhanTram_DoLoangXuong_DB: item.PhanTram_DoLoangXuong_DB,
          PhanTram_DoLoangXuong_BH: item.PhanTram_DoLoangXuong_BH,
          PhanTram_DoLoangXuong_KL: item.PhanTram_DoLoangXuong_KL,
          PhanTram_ECGHH_DB: item.PhanTram_ECGHH_DB,
          PhanTram_ECGHH_BH: item.PhanTram_ECGHH_BH,
          PhanTram_ECGHH_KL: item.PhanTram_ECGHH_KL,
          KhamToanDien: item.KhamToanDien,
          PhanTram_ChiDinhNSTH: item.PhanTram_ChiDinhNSTH,

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
        a.download = 'Danhsachbacsiq7.xlsx'
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
</style>
