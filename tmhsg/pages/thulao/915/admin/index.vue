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
        <span>{{ formatNumber(item.PhanTram_CLSKSKDK_HD3) }}</span> </template
      ><template v-slot:item.PhanTram_CLSKSKDK_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_CLSKSKDK_HD2) }}</span> </template
      ><template v-slot:item.PhanTram_CLSKSKDK_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_CLSKSKDK_HD1) }}</span>
      </template>

      <template v-slot:item.PhanTram_SieuAmCT_HD3="{ item }">
        <span>{{ formatNumber(item.PhanTram_SieuAmCT_HD3) }}</span> </template
      ><template v-slot:item.PhanTram_SieuAmCT_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_SieuAmCT_HD2) }}</span> </template
      ><template v-slot:item.PhanTram_SieuAmCT_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_SieuAmCT_HD1) }}</span>
      </template>

      <template v-slot:item.PhanTram_PhuKhoaCT_HD3="{ item }">
        <span>{{ formatNumber(item.PhanTram_PhuKhoaCT_HD3) }}</span> </template
      ><template v-slot:item.PhanTram_PhuKhoaCT_HD2="{ item }">
        <span>{{ formatNumber(item.PhanTram_PhuKhoaCT_HD2) }}</span> </template
      ><template v-slot:item.PhanTram_PhuKhoaCT_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_PhuKhoaCT_HD1) }}</span>
      </template>

      <template v-slot:item.PhanTram_XNPhuKhoaCT_HD3="{ item }">
        <span>{{
          formatNumber(item.PhanTram_XNPhuKhoaCT_HD3)
        }}</span> </template
      ><template v-slot:item.PhanTram_XNPhuKhoaCT_HD2="{ item }">
        <span>{{
          formatNumber(item.PhanTram_XNPhuKhoaCT_HD2)
        }}</span> </template
      ><template v-slot:item.PhanTram_XNPhuKhoaCT_HD1="{ item }">
        <span>{{ formatNumber(item.PhanTram_XNPhuKhoaCT_HD1) }}</span>
      </template>

      <template v-slot:item.KSKCTyGC2_2BS_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_2BS_HD1) }}</span> </template
      ><template v-slot:item.KSKCTyGC2_2BS_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_2BS_HD2) }}</span> </template
      ><template v-slot:item.KSKCTyGC2_2BS_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_2BS_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTyGC2_3BS_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_3BS_HD1) }}</span> </template
      ><template v-slot:item.KSKCTyGC2_3BS_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_3BS_HD2) }}</span> </template
      ><template v-slot:item.KSKCTyGC2_3BS_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_3BS_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTyGC2_4BS_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_4BS_HD1) }}</span> </template
      ><template v-slot:item.KSKCTyGC2_4BS_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_4BS_HD2) }}</span> </template
      ><template v-slot:item.KSKCTyGC2_4BS_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTyGC2_4BS_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTy_Duoi4CK_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTy_Duoi4CK_HD1) }}</span> </template
      ><template v-slot:item.KSKCTy_Duoi4CK_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTy_Duoi4CK_HD2) }}</span> </template
      ><template v-slot:item.KSKCTy_Duoi4CK_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTy_Duoi4CK_HD3) }}</span>
      </template>

      <template v-slot:item.KSKCTy_PhuKhoaKSK_HD1="{ item }">
        <span>{{ formatNumber(item.KSKCTy_PhuKhoaKSK_HD1) }}</span> </template
      ><template v-slot:item.KSKCTy_PhuKhoaKSK_HD2="{ item }">
        <span>{{ formatNumber(item.KSKCTy_PhuKhoaKSK_HD2) }}</span> </template
      ><template v-slot:item.KSKCTy_PhuKhoaKSK_HD3="{ item }">
        <span>{{ formatNumber(item.KSKCTy_PhuKhoaKSK_HD3) }}</span>
      </template>

      <template v-slot:item.KSK_KetHoSo_4To="{ item }"
        ><span>{{ formatNumber(item.KSK_KetHoSo_4To) }}</span></template
      >
      <template v-slot:item.KSK_KetHoSo_1To="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_1To) }}</span> </template
      ><template v-slot:item.KSK_KetHoSo_Pru="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_Pru) }}</span>
      </template>
      <template v-slot:item.DienTimCT_HD1="{ item }"
        ><span>{{ formatNumber(item.DienTimCT_HD1) }}</span></template
      >
      <template v-slot:item.DienTimCT_HD2="{ item }"
        ><span>{{ formatNumber(item.DienTimCT_HD2) }}</span></template
      >
      <template v-slot:item.DienTimCT_HD3="{ item }"
        ><span>{{ formatNumber(item.DienTimCT_HD3) }}</span></template
      >
      <template v-slot:item.HoHapCT_HD1="{ item }"
        ><span>{{ formatNumber(item.HoHapCT_HD1) }}</span></template
      >
      <template v-slot:item.HoHapCT_HD2="{ item }"
        ><span>{{ formatNumber(item.HoHapCT_HD2) }}</span></template
      >
      <template v-slot:item.HoHapCT_HD3="{ item }"
        ><span>{{ formatNumber(item.HoHapCT_HD3) }}</span></template
      >
      <template v-slot:item.CTCongTy_HD1="{ item }"
        ><span>{{ formatNumber(item.CTCongTy_HD1) }}</span></template
      >
      <template v-slot:item.CTCongTy_HD2="{ item }"
        ><span>{{ formatNumber(item.CTCongTy_HD2) }}</span></template
      >
      <template v-slot:item.CTCongTy_HD3="{ item }"
        ><span>{{ formatNumber(item.CTCongTy_HD3) }}</span></template
      >
      <template v-slot:item.DoLoangXuongCT_HD1="{ item }"
        ><span>{{ formatNumber(item.DoLoangXuongCT_HD1) }}</span></template
      >
      <template v-slot:item.DoLoangXuongCT_HD2="{ item }"
        ><span>{{ formatNumber(item.DoLoangXuongCT_HD2) }}</span></template
      >
      <template v-slot:item.DoLoangXuongCT_HD3="{ item }"
        ><span>{{ formatNumber(item.DoLoangXuongCT_HD3) }}</span></template
      >
      <template v-slot:item.XQuangCT_HD1="{ item }"
        ><span>{{ formatNumber(item.XQuangCT_HD1) }}</span></template
      >
      <template v-slot:item.XQuangCT_HD2="{ item }"
        ><span>{{ formatNumber(item.XQuangCT_HD2) }}</span></template
      >
      <template v-slot:item.XQuangCT_HD3="{ item }"
        ><span>{{ formatNumber(item.XQuangCT_HD3) }}</span></template
      >
      <template v-slot:item.ThinhHocCT_HD1="{ item }"
        ><span>{{ formatNumber(item.ThinhHocCT_HD1) }}</span></template
      >
      <template v-slot:item.ThinhHocCT_HD2="{ item }"
        ><span>{{ formatNumber(item.ThinhHocCT_HD2) }}</span></template
      >
      <template v-slot:item.ThinhHocCT_HD3="{ item }"
        ><span>{{ formatNumber(item.ThinhHocCT_HD3) }}</span></template
      >
      <template v-slot:item.SieuAmMachMauCT_HD1="{ item }"
        ><span>{{ formatNumber(item.SieuAmMachMauCT_HD1) }}</span></template
      >
      <template v-slot:item.SieuAmMachMauCT_HD2="{ item }"
        ><span>{{ formatNumber(item.SieuAmMachMauCT_HD2) }}</span></template
      >
      <template v-slot:item.SieuAmMachMauCT_HD3="{ item }"
        ><span>{{ formatNumber(item.SieuAmMachMauCT_HD3) }}</span></template
      >
      <template v-slot:item.MatRHMTMHCT_HD1="{ item }"
        ><span>{{ formatNumber(item.MatRHMTMHCT_HD1) }}</span></template
      >
      <template v-slot:item.MatRHMTMHCT_HD2="{ item }"
        ><span>{{ formatNumber(item.MatRHMTMHCT_HD2) }}</span></template
      >
      <template v-slot:item.MatRHMTMHCT_HD3="{ item }"
        ><span>{{ formatNumber(item.MatRHMTMHCT_HD3) }}</span></template
      >
      <template v-slot:item.ChupNhuAnhCT_HD1="{ item }"
        ><span>{{ formatNumber(item.ChupNhuAnhCT_HD1) }}</span></template
      >
      <template v-slot:item.ChupNhuAnhCT_HD2="{ item }"
        ><span>{{ formatNumber(item.ChupNhuAnhCT_HD2) }}</span></template
      >
      <template v-slot:item.ChupNhuAnhCT_HD3="{ item }"
        ><span>{{ formatNumber(item.ChupNhuAnhCT_HD3) }}</span></template
      >
      <template v-slot:item.NoiSoiCT_HD1="{ item }"
        ><span>{{ formatNumber(item.NoiSoiCT_HD1) }}</span></template
      >
      <template v-slot:item.NoiSoiCT_HD2="{ item }"
        ><span>{{ formatNumber(item.NoiSoiCT_HD2) }}</span></template
      >
      <template v-slot:item.NoiSoiCT_HD3="{ item }"
        ><span>{{ formatNumber(item.NoiSoiCT_HD3) }}</span></template
      >
      <template v-slot:item.SATimCT_HD1="{ item }"
        ><span>{{ formatNumber(item.SATimCT_HD1) }}</span></template
      >
      <template v-slot:item.SATimCT_HD2="{ item }"
        ><span>{{ formatNumber(item.SATimCT_HD2) }}</span></template
      >
      <template v-slot:item.SATimCT_HD3="{ item }"
        ><span>{{ formatNumber(item.SATimCT_HD3) }}</span></template
      >

      <template v-slot:item.PhanTram_SieuAmCT2_HD1="{ item }"
        ><span>{{ formatNumber(item.PhanTram_SieuAmCT2_HD1) }}</span></template
      >
      <template v-slot:item.PhanTram_SieuAmCT2_HD2="{ item }"
        ><span>{{ formatNumber(item.PhanTram_SieuAmCT2_HD2) }}</span></template
      >
      <template v-slot:item.PhanTram_SieuAmCT2_HD3="{ item }"
        ><span>{{ formatNumber(item.PhanTram_SieuAmCT2_HD3) }}</span></template
      >
      <template v-slot:item.PhanTram_SieuAmCT2_HD3="{ item }"
        ><span>{{ formatNumber(item.PhanTram_SieuAmCT2_HD3) }}</span></template
      >
      <template v-slot:item.NoiSoiDD_HD1="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDD_HD1) }}</span></template
      >
      <template v-slot:item.NoiSoiDD_HD2="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDD_HD2) }}</span></template
      >
      <template v-slot:item.NoiSoiDD_HD3="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDD_HD3) }}</span></template
      >
      <template v-slot:item.NoiSoiDT_HD1="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDT_HD1) }}</span></template
      >
      <template v-slot:item.NoiSoiDT_HD2="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDT_HD2) }}</span></template
      >
      <template v-slot:item.NoiSoiDT_HD3="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDT_HD3) }}</span></template
      >
      <template v-slot:item.NoiSoiDDPolype_HD1="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDDPolype_HD1) }}</span></template
      >
      <template v-slot:item.NoiSoiDDPolype_HD2="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDDPolype_HD2) }}</span></template
      >
      <template v-slot:item.NoiSoiDDPolype_HD3="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDDPolype_HD3) }}</span></template
      >
      <template v-slot:item.NoiSoiDTPolype_HD1="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDTPolype_HD1) }}</span></template
      >
      <template v-slot:item.NoiSoiDTPolype_HD2="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDTPolype_HD2) }}</span></template
      >
      <template v-slot:item.NoiSoiDTPolype_HD3="{ item }"
        ><span>{{ formatNumber(item.NoiSoiDTPolype_HD3) }}</span></template
      >
      <template v-slot:item.DD1To="{ item }"
        ><span>{{ formatNumber(item.DD1To) }}</span></template
      >
      <template v-slot:item.DD4To="{ item }"
        ><span>{{ formatNumber(item.DD4To) }}</span></template
      >

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Tỷ lệ thù lao 9-15</v-toolbar-title>

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
          <input type="file" ref="fileInput" @change="handleFileChange" />
          <v-btn
            color="yellow darken-1"
            dark
            class="mb-4 mr-4"
            @click="uploadExcel"
            >Sửa hàng loạt</v-btn
          >
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
              <v-col class="mr-3 pink lighten-4">
                <v-col>
                  <h4>Hợp đồng 1 (>40%)</h4>
                  <h4>Hợp đồng 2 (>30% & <40%)</h4>
                  <h4>Hợp đồng 3 (<30%)</h4>
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
                    v-model="addItems.PhanTram_CLSKSKDK_HD1"
                    label="CLS KSKDK HD1"
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
                    v-model="addItems.PhanTram_CLSKSKDK_HD3"
                    label="CLS KSKDK HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Siêu âm CT DV1</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT_HD1"
                    label="Siêu âm CT DV1 HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT_HD2"
                    label="Siêu âm CT DV1 HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT_HD3"
                    label="Siêu âm CT DV1 HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Siêu âm CT DV234</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT2_HD1"
                    label="Siêu Âm CT DV234 HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT2_HD2"
                    label="Siêu Âm CT DV234 HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_SieuAmCT2_HD3"
                    label="Siêu Âm CT DV234 HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Soi nhuộm phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XNPhuKhoaCT_HD1"
                    label="Soi nhuộm phụ khoa HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XNPhuKhoaCT_HD2"
                    label="Soi nhuộm phụ khoa HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_XNPhuKhoaCT_HD3"
                    label="Soi nhuộm phụ khoa HD3"
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

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Điện tim CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.DienTimCT_HD1"
                    label="Điện tim CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.DienTimCT_HD2"
                    label="Điện tim CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.DienTimCT_HD3"
                    label="Điện tim CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Hô hấp CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.HoHapCT_HD1"
                    label="Hô hấp CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.HoHapCT_HD2"
                    label="Hô hấp CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.HoHapCT_HD3"
                    label="Hô hấp CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">CT công ty</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.CTCongTy_HD1"
                    label="CT công ty HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.CTCongTy_HD2"
                    label="CT công ty HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.CTCongTy_HD3"
                    label="CT công ty HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">ĐLX CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.DoLoangXuongCT_HD1"
                    label="ĐLX CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.DoLoangXuongCT_HD2"
                    label="ĐLX CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.DoLoangXuongCT_HD3"
                    label="ĐLX CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">X-quang CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.XQuangCT_HD1"
                    label="X-quang CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.XQuangCT_HD2"
                    label="X-quang CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.XQuangCT_HD3"
                    label="X-quang CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Thính học CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ThinhHocCT_HD1"
                    label="Thính học CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ThinhHocCT_HD2"
                    label="Thính học CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ThinhHocCT_HD3"
                    label="Thính học CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">SÂ tim CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.SATimCT_HD1"
                    label="SÂ tim CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.SATimCT_HD2"
                    label="SÂ tim CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.SATimCT_HD3"
                    label="SÂ tim CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">SÂ mạch máu CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.SieuAmMachMauCT_HD1"
                    label="SÂ mạch máu CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.SieuAmMachMauCT_HD2"
                    label="SÂ mạch máu CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.SieuAmMachMauCT_HD3"
                    label="SÂ mạch máu CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Mắt RHM TMH</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.MatRHMTMHCT_HD1"
                    label="Mắt RHM TMH HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.MatRHMTMHCT_HD2"
                    label="Mắt RHM TMH HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.MatRHMTMHCT_HD3"
                    label="Mắt RHM TMH HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Chụp nhũ ảnh</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ChupNhuAnhCT_HD1"
                    label="Chụp nhũ ảnh HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ChupNhuAnhCT_HD2"
                    label="Chụp nhũ ảnh HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ChupNhuAnhCT_HD3"
                    label="Chụp nhũ ảnh HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiCT_HD1"
                    label="Nội soi CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiCT_HD2"
                    label="Nội soi CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiCT_HD3"
                    label="Nội soi CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">CLS ngoài giờ</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ClsNgoaiGio_DB"
                    label="CLS ngoài giờ (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ClsNgoaiGio_BH"
                    label="CLS ngoài giờ (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ClsNgoaiGio_KL"
                    label="CLS ngoài giờ (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Implant</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ImPlant_1"
                    label="Implant 1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ImPlant_2"
                    label="Implant 2"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PhuKhoaCT_HD1"
                    label="Nội soi phụ khoa CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PhuKhoaCT_HD2"
                    label="Nội soi phụ khoa CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.PhanTram_PhuKhoaCT_HD3"
                    label="Nội soi phụ khoa CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT DD</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDD_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDD_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDD_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT ĐT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDT_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDT_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDT_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT DDPolype</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDDPolype_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDDPolype_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDDPolype_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT DTPolype</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDTPolype_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDTPolype_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.NoiSoiDTPolype_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Điều dưỡng làm HSKSK</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.DD1To"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.DD4To"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê NSDD CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDD_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDD_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDD_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê NSDT CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDT_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDT_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDT_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê DDPolype CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDD_Polype_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDD_Polype_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDD_Polype_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê DTPolype CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDT_Polype_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDT_Polype_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.GayMeDT_Polype_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Công khám tiêu hóa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.CongKham_TieuHoa_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.CongKham_TieuHoa_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.CongKham_TieuHoa_HD3"
                    label="HD3"
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
              <v-col class="mr-3 pink lighten-4">
                <v-col>
                  <h4>Hợp đồng 1 (>40%)</h4>
                  <h4>Hợp đồng 2 (>30% & <40%)</h4>
                  <h4>Hợp đồng 3 (<30%)</h4>
                </v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="editItems.KhamToanDien"
                  label="Khám toàn diện"
                  type="number"
                  te
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
                    v-model="editItems.PhanTram_CLSKSKDK_HD1"
                    label="CLS KSKDK HD1"
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
                    v-model="editItems.PhanTram_CLSKSKDK_HD3"
                    label="CLS KSKDK HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Siêu âm CT DV1</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT_HD1"
                    label="Siêu âm CT DV1 HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT_HD2"
                    label="Siêu âm CT DV1 HD2"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT_HD3"
                    label="Siêu âm CT DV1 HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Siêu âm CT DV234</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT2_HD1"
                    label="Siêu Âm CT DV234 HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT2_HD2"
                    label="Siêu Âm CT DV234 HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_SieuAmCT2_HD3"
                    label="Siêu Âm CT DV234 HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Soi nhuộm phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XNPhuKhoaCT_HD1"
                    label="Soi nhuộm phụ khoa HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XNPhuKhoaCT_HD2"
                    label="Soi nhuộm phụ khoa HD2"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_XNPhuKhoaCT_HD3"
                    label="Soi nhuộm phụ khoa HD3"
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

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Điện tim CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.DienTimCT_HD1"
                    label="Điện tim CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.DienTimCT_HD2"
                    label="Điện tim CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.DienTimCT_HD3"
                    label="Điện tim CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Hô hấp CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.HoHapCT_HD1"
                    label="Hô hấp CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.HoHapCT_HD2"
                    label="Hô hấp CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.HoHapCT_HD3"
                    label="Hô hấp CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">CT công ty</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.CTCongTy_HD1"
                    label="CT công ty HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.CTCongTy_HD2"
                    label="CT công ty HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.CTCongTy_HD3"
                    label="CT công ty HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">ĐLX CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.DoLoangXuongCT_HD1"
                    label="ĐLX CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.DoLoangXuongCT_HD2"
                    label="ĐLX CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.DoLoangXuongCT_HD3"
                    label="ĐLX CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">X-quang CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.XQuangCT_HD1"
                    label="X-quang CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.XQuangCT_HD2"
                    label="X-quang CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.XQuangCT_HD3"
                    label="X-quang CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Thính học CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ThinhHocCT_HD1"
                    label="Thính học CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ThinhHocCT_HD2"
                    label="Thính học CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ThinhHocCT_HD3"
                    label="Thính học CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">SÂ tim CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.SATimCT_HD1"
                    label="SÂ tim CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.SATimCT_HD2"
                    label="SÂ tim CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.SATimCT_HD3"
                    label="SÂ tim CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">SÂ mạch máu CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.SieuAmMachMauCT_HD1"
                    label="SÂ mạch máu CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.SieuAmMachMauCT_HD2"
                    label="SÂ mạch máu CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.SieuAmMachMauCT_HD3"
                    label="SÂ mạch máu CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Mắt RHM TMH</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.MatRHMTMHCT_HD1"
                    label="Mắt RHM TMH HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.MatRHMTMHCT_HD2"
                    label="Mắt RHM TMH HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.MatRHMTMHCT_HD3"
                    label="Mắt RHM TMH HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Chụp nhũ ảnh</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ChupNhuAnhCT_HD1"
                    label="Chụp nhũ ảnh HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ChupNhuAnhCT_HD2"
                    label="Chụp nhũ ảnh HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ChupNhuAnhCT_HD3"
                    label="Chụp nhũ ảnh HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiCT_HD1"
                    label="Nội soi CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiCT_HD2"
                    label="Nội soi CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiCT_HD3"
                    label="Nội soi CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">CLS ngoài giờ</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ClsNgoaiGio_DB"
                    label="CLS ngoài giờ (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ClsNgoaiGio_BH"
                    label="CLS ngoài giờ (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ClsNgoaiGio_KL"
                    label="CLS ngoài giờ (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Implant</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ImPlant_1"
                    label="Implant 1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ImPlant_2"
                    label="Implant 2"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi phụ khoa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PhuKhoaCT_HD1"
                    label="Nội soi phụ khoa CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PhuKhoaCT_HD2"
                    label="Nội soi phụ khoa CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="editItems.PhanTram_PhuKhoaCT_HD3"
                    label="Nội soi phụ khoa CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT DD</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDD_HD1"
                    label="Nội soi CT DD HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDD_HD2"
                    label="Nội soi CT DD HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDD_HD3"
                    label="Nội soi CT DD HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT ĐT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDT_HD1"
                    label="Nội soi CT ĐT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDT_HD2"
                    label="Nội soi CT ĐT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDT_HD3"
                    label="Nội soi CT ĐT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT DDPolype</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDDPolype_HD1"
                    label="Nội soi CT DDPolype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDDPolype_HD2"
                    label="Nội soi CT DDPolype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDDPolype_HD3"
                    label="Nội soi CT DDPolype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi CT DTPolype</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDTPolype_HD1"
                    label="Nội soi CT DTPolype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDTPolype_HD2"
                    label="Nội soi CT DTPolype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.NoiSoiDTPolype_HD3"
                    label="Nội soi CT DTPolype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Điều dưỡng làm HSKSK</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.DD1To"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.DD4To"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê NSDD CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDD_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDD_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDD_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê NSDT CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDT_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDT_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDT_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê DDPolype CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDD_Polype_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDD_Polype_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDD_Polype_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Gây mê DTPolype CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDT_Polype_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDT_Polype_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.GayMeDT_Polype_HD3"
                    label="HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Công khám tiêu hóa CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.CongKham_TieuHoa_HD1"
                    label="HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.CongKham_TieuHoa_HD2"
                    label="HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.CongKham_TieuHoa_HD3"
                    label="HD3"
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
      { text: 'Khám bệnh (DB)', value: 'PhanTram_Kham_DB' },
      { text: 'Khám bệnh (BH)', value: 'PhanTram_Kham_BH' },
      { text: 'Khám bệnh (KL)', value: 'PhanTram_Kham_KL' },
      { text: 'Thực hiện CLS (DB)', value: 'PhanTram_CLS_DB' },
      { text: 'Thực hiện CLS (BH)', value: 'PhanTram_CLS_BH' },
      { text: 'Thực hiện CLS (KL)', value: 'PhanTram_CLS_KL' },
      { text: 'Thủ thuật(DB)', value: 'PhanTram_TT_DB' },
      { text: 'Thủ thuật(BH)', value: 'PhanTram_TT_BH' },
      { text: 'Thủ thuật(KL)', value: 'PhanTram_TT_KL' },
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
      { text: 'Siêu âm CT DV1 HD3', value: 'PhanTram_SieuAmCT_HD3' },
      { text: 'Siêu âm CT DV1 HD2', value: 'PhanTram_SieuAmCT_HD2' },
      { text: 'Siêu âm CT DV1 HD1', value: 'PhanTram_SieuAmCT_HD1' },
      { text: 'Nội soi Phụ khoa CT HD3', value: 'PhanTram_PhuKhoaCT_HD3' },
      { text: 'Nội soi Phụ khoa CT HD2', value: 'PhanTram_PhuKhoaCT_HD2' },
      { text: 'Nội soi Phụ khoa CT HD1', value: 'PhanTram_PhuKhoaCT_HD1' },
      { text: 'Soi nhuộm phụ khoa CT HD3', value: 'PhanTram_XNPhuKhoaCT_HD3' },
      { text: 'Soi nhuộm phụ khoa CT HD2', value: 'PhanTram_XNPhuKhoaCT_HD2' },
      { text: 'Soi nhuộm phụ khoa CT HD1', value: 'PhanTram_XNPhuKhoaCT_HD1' },
      { text: '2BS GC2 HD1', value: 'KSKCTyGC2_2BS_HD1' },
      { text: '2BS GC2 HD2', value: 'KSKCTyGC2_2BS_HD2' },
      { text: '2BS GC2 HD3', value: 'KSKCTyGC2_2BS_HD3' },
      { text: '3BS GC2 HD1', value: 'KSKCTyGC2_3BS_HD1' },
      { text: '3BS GC2 HD2', value: 'KSKCTyGC2_3BS_HD2' },
      { text: '3BS GC2 HD3', value: 'KSKCTyGC2_3BS_HD3' },
      { text: '4BS GC2 HD1', value: 'KSKCTyGC2_4BS_HD1' },
      { text: '4BS GC2 HD2', value: 'KSKCTyGC2_4BS_HD2' },
      { text: '4BS GC2 HD3', value: 'KSKCTyGC2_4BS_HD3' },
      { text: 'Dưới 4ck HD1', value: 'KSKCTy_Duoi4CK_HD1' },
      { text: 'Dưới 4ck HD2', value: 'KSKCTy_Duoi4CK_HD2' },
      { text: 'Dưới 4ck HD3', value: 'KSKCTy_Duoi4CK_HD3' },
      { text: 'Khám phụ khoa CT HD1', value: 'KSKCTy_PhuKhoaKSK_HD1' },
      { text: 'Khám phụ khoa CT HD2', value: 'KSKCTy_PhuKhoaKSK_HD2' },
      { text: 'Khám phụ khoa CT HD3', value: 'KSKCTy_PhuKhoaKSK_HD3' },
      { text: 'Kết hồ sơ 4tờ', value: 'KSK_KetHoSo_4To' },
      { text: 'Kết hồ sơ 1tờ', value: 'KSK_KetHoSo_1To' },
      { text: 'Kết hồ sơ Pru', value: 'KSK_KetHoSo_Pru' },
      { text: 'X-quang (DB)', value: 'PhanTram_XQuang_DB' },
      { text: 'X-quang (BH)', value: 'PhanTram_XQuang_BH' },
      { text: 'X-quang (KL)', value: 'PhanTram_XQuang_KL' },
      { text: 'Đo loãng xương (DB)', value: 'PhanTram_DoLoangXuong_DB' },
      { text: 'Đo loãng xương (BH)', value: 'PhanTram_DoLoangXuong_BH' },
      { text: 'Đo loãng xương (KL)', value: 'PhanTram_DoLoangXuong_KL' },
      { text: 'Điện tim-HH (DB)', value: 'PhanTram_ECGHH_DB' },
      { text: 'Điện tim-HH (BH)', value: 'PhanTram_ECGHH_BH' },
      { text: 'Điện tim-HH (KL)', value: 'PhanTram_ECGHH_KL' },
      { text: 'Khám toàn diện', value: 'KhamToanDien' },
      { text: 'Chỉ định NSTH', value: 'PhanTram_ChiDinhNSTH' },
      { text: 'Điện tim CT HD1', value: 'DienTimCT_HD1' },
      { text: 'Điện tim CT HD2', value: 'DienTimCT_HD2' },
      { text: 'Điện tim CT HD3', value: 'DienTimCT_HD3' },
      { text: 'Hô hấp CT HD1', value: 'HoHapCT_HD1' },
      { text: 'Hô hấp CT HD2', value: 'HoHapCT_HD2' },
      { text: 'Hô hấp CT HD3', value: 'HoHapCT_HD3' },
      { text: 'CT công ty HD1', value: 'CTCongTy_HD1' },
      { text: 'CT công ty HD2', value: 'CTCongTy_HD2' },
      { text: 'CT công ty HD3', value: 'CTCongTy_HD3' },
      { text: 'ĐLX CT HD1', value: 'DoLoangXuongCT_HD1' },
      { text: 'ĐLX CT HD2', value: 'DoLoangXuongCT_HD2' },
      { text: 'ĐLX CT HD3', value: 'DoLoangXuongCT_HD3' },
      { text: 'X-quang CT HD1', value: 'XQuangCT_HD1' },
      { text: 'X-quang CT HD2', value: 'XQuangCT_HD2' },
      { text: 'X-quang CT HD3', value: 'XQuangCT_HD3' },
      { text: 'Thính học CT HD1', value: 'ThinhHocCT_HD1' },
      { text: 'Thính học CT HD2', value: 'ThinhHocCT_HD2' },
      { text: 'Thính học CT HD3', value: 'ThinhHocCT_HD3' },
      { text: 'SA m.máu CT HD1', value: 'SieuAmMachMauCT_HD1' },
      { text: 'SA m.máu CT HD2', value: 'SieuAmMachMauCT_HD2' },
      { text: 'SA m.máu CT HD3', value: 'SieuAmMachMauCT_HD3' },
      { text: 'Mắt RHMTMH CT HD1', value: 'MatRHMTMHCT_HD1' },
      { text: 'Mắt RHMTMH CT HD2', value: 'MatRHMTMHCT_HD2' },
      { text: 'Mắt RHMTMH CT HD3', value: 'MatRHMTMHCT_HD3' },
      { text: 'Chụp nhũ ảnh CT HD1', value: 'ChupNhuAnhCT_HD1' },
      { text: 'Chụp nhũ ảnh CT HD2', value: 'ChupNhuAnhCT_HD2' },
      { text: 'Chụp nhũ ảnh CT HD3', value: 'ChupNhuAnhCT_HD3' },
      { text: 'Nội soi CT HD1', value: 'NoiSoiCT_HD1' },
      { text: 'Nội soi CT HD2', value: 'NoiSoiCT_HD2' },
      { text: 'Nội soi CT HD3', value: 'NoiSoiCT_HD3' },
      { text: 'SÂ tim CT HD1', value: 'SATimCT_HD1' },
      { text: 'SÂ tim CT HD2', value: 'SATimCT_HD2' },
      { text: 'SÂ tim CT HD3', value: 'SATimCT_HD3' },
      { text: 'CLS ngoài giờ (DB)', value: 'ClsNgoaiGio_DB' },
      { text: 'CLS ngoài giờ (BH)', value: 'ClsNgoaiGio_BH' },
      { text: 'CLS ngoài giờ (KL)', value: 'ClsNgoaiGio_KL' },
      { text: 'ImPlant 1', value: 'ImPlant_1' },
      { text: 'ImPlant 2', value: 'ImPlant_2' },
      { text: 'Siêu âm CT DV234 HD1', value: 'PhanTram_SieuAmCT2_HD1' },
      { text: 'Siêu âm CT DV234 HD2', value: 'PhanTram_SieuAmCT2_HD2' },
      { text: 'Siêu âm CT DV234 HD3', value: 'PhanTram_SieuAmCT2_HD3' },
      { text: 'Nội soi CT DD HD1', value: 'NoiSoiDD_HD1' },
      { text: 'Nội soi CT DD HD2', value: 'NoiSoiDD_HD2' },
      { text: 'Nội soi CT DD HD3', value: 'NoiSoiDD_HD3' },
      { text: 'Nội soi CT ĐT HD1', value: 'NoiSoiDT_HD1' },
      { text: 'Nội soi CT ĐT HD2', value: 'NoiSoiDT_HD2' },
      { text: 'Nội soi CT ĐT HD3', value: 'NoiSoiDT_HD3' },
      { text: 'Nội soi CT DD Polype HD1', value: 'NoiSoiDDPolype_HD1' },
      { text: 'Nội soi CT DD Polype HD2', value: 'NoiSoiDDPolype_HD2' },
      { text: 'Nội soi CT DD Polype HD3', value: 'NoiSoiDDPolype_HD3' },
      { text: 'Nội soi CT ĐT Polype HD1', value: 'NoiSoiDTPolype_HD1' },
      { text: 'Nội soi CT ĐT Polype HD2', value: 'NoiSoiDTPolype_HD2' },
      { text: 'Nội soi CT ĐT Polype HD3', value: 'NoiSoiDTPolype_HD3' },
      { text: 'Điều dưỡng HSKSK 1 Tờ', value: 'DD1To' },
      { text: 'Điều dưỡng HSKSK 4 Tờ', value: 'DD4To' },
      { text: 'Gây mê dạ dày HD1', value: 'GayMeDD_HD1' },
      { text: 'Gây mê dạ dày HD2', value: 'GayMeDD_HD2' },
      { text: 'Gây mê dạ dày HD3', value: 'GayMeDD_HD3' },
      { text: 'Gây mê đại tràng HD1', value: 'GayMeDT_HD1' },
      { text: 'Gây mê đại tràng HD2', value: 'GayMeDT_HD2' },
      { text: 'Gây mê đại tràng HD3', value: 'GayMeDT_HD3' },
      { text: 'Gây mê dạ dày polype HD1', value: 'GayMeDD_Polype_HD1' },
      { text: 'Gây mê dạ dày polype HD2', value: 'GayMeDD_Polype_HD2' },
      { text: 'Gây mê dạ dày polype HD3', value: 'GayMeDD_Polype_HD3' },
      { text: 'Gây mê đại tràng polype HD1', value: 'GayMeDT_Polype_HD1' },
      { text: 'Gây mê đại tràng polype HD2', value: 'GayMeDT_Polype_HD2' },
      { text: 'Gây mê đại tràng polype HD3', value: 'GayMeDT_Polype_HD3' },
      { text: 'Công khám tiêu hóa HD1', value: 'CongKham_TieuHoa_HD1' },
      { text: 'Công khám tiêu hóa HD2', value: 'CongKham_TieuHoa_HD2' },
      { text: 'Công khám tiêu hóa HD3', value: 'CongKham_TieuHoa_HD3' },
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
      DienTimCT_HD1: 0,
      DienTimCT_HD2: 0,
      DienTimCT_HD3: 0,
      HoHapCT_HD1: 0,
      HoHapCT_HD2: 0,
      HoHapCT_HD3: 0,
      CTCongTy_HD1: 0,
      CTCongTy_HD2: 0,
      CTCongTy_HD3: 0,
      DoLoangXuongCT_HD1: 0,
      DoLoangXuongCT_HD2: 0,
      DoLoangXuongCT_HD3: 0,
      XQuangCT_HD1: 0,
      XQuangCT_HD2: 0,
      XQuangCT_HD3: 0,
      ThinhHocCT_HD1: 0,
      ThinhHocCT_HD2: 0,
      ThinhHocCT_HD3: 0,
      SieuAmMachMauCT_HD1: 0,
      SieuAmMachMauCT_HD2: 0,
      SieuAmMachMauCT_HD3: 0,
      MatRHMTMHCT_HD1: 0,
      MatRHMTMHCT_HD2: 0,
      MatRHMTMHCT_HD3: 0,
      ChupNhuAnhCT_HD1: 0,
      ChupNhuAnhCT_HD2: 0,
      ChupNhuAnhCT_HD3: 0,
      NoiSoiCT_HD1: 0,
      NoiSoiCT_HD2: 0,
      NoiSoiCT_HD3: 0,
      SATimCT_HD1: 0,
      SATimCT_HD2: 0,
      SATimCT_HD3: 0,
      ClsNgoaiGio_DB: 0,
      ClsNgoaiGio_BH: 0,
      ClsNgoaiGio_KL: 0,
      ImPlant_1: 0,
      ImPlant_2: 0,
      PhanTram_SieuAmCT2_HD1: 0,
      PhanTram_SieuAmCT2_HD2: 0,
      PhanTram_SieuAmCT2_HD3: 0,
      NoiSoiDD_HD1: 0,
      NoiSoiDD_HD2: 0,
      NoiSoiDD_HD3: 0,
      NoiSoiDT_HD1: 0,
      NoiSoiDT_HD2: 0,
      NoiSoiDT_HD3: 0,
      NoiSoiDDPolype_HD1: 0,
      NoiSoiDDPolype_HD2: 0,
      NoiSoiDDPolype_HD3: 0,
      NoiSoiDTPolype_HD1: 0,
      NoiSoiDTPolype_HD2: 0,
      NoiSoiDTPolype_HD3: 0,
      DD1To: 0,
      DD4To: 0,
      GayMeDD_HD1: 0,
      GayMeDD_HD2: 0,
      GayMeDD_HD3: 0,
      GayMeDT_HD1: 0,
      GayMeDT_HD2: 0,
      GayMeDT_HD3: 0,
      GayMeDD_Polype_HD1: 0,
      GayMeDD_Polype_HD2: 0,
      GayMeDD_Polype_HD3: 0,
      GayMeDT_Polype_HD1: 0,
      GayMeDT_Polype_HD2: 0,
      GayMeDT_Polype_HD3: 0,
      CongKham_TieuHoa_HD1: 0,
      CongKham_TieuHoa_HD2: 0,
      CongKham_TieuHoa_HD3: 0,
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
      DienTimCT_HD1: 0,
      DienTimCT_HD2: 0,
      DienTimCT_HD3: 0,
      HoHapCT_HD1: 0,
      HoHapCT_HD2: 0,
      HoHapCT_HD3: 0,
      CTCongTy_HD1: 0,
      CTCongTy_HD2: 0,
      CTCongTy_HD3: 0,
      DoLoangXuongCT_HD1: 0,
      DoLoangXuongCT_HD2: 0,
      DoLoangXuongCT_HD3: 0,
      XQuangCT_HD1: 0,
      XQuangCT_HD2: 0,
      XQuangCT_HD3: 0,
      ThinhHocCT_HD1: 0,
      ThinhHocCT_HD2: 0,
      ThinhHocCT_HD3: 0,
      SieuAmMachMauCT_HD1: 0,
      SieuAmMachMauCT_HD2: 0,
      SieuAmMachMauCT_HD3: 0,
      MatRHMTMHCT_HD1: 0,
      MatRHMTMHCT_HD2: 0,
      MatRHMTMHCT_HD3: 0,
      ChupNhuAnhCT_HD1: 0,
      ChupNhuAnhCT_HD2: 0,
      ChupNhuAnhCT_HD3: 0,
      NoiSoiCT_HD1: 0,
      NoiSoiCT_HD2: 0,
      NoiSoiCT_HD3: 0,
      SATimCT_HD1: 0,
      SATimCT_HD2: 0,
      SATimCT_HD3: 0,
      ClsNgoaiGio_DB: 0,
      ClsNgoaiGio_BH: 0,
      ClsNgoaiGio_KL: 0,
      ImPlant_1: 0,
      ImPlant_2: 0,
      PhanTram_SieuAmCT2_HD1: 0,
      PhanTram_SieuAmCT2_HD2: 0,
      PhanTram_SieuAmCT2_HD3: 0,
      NoiSoiDD_HD1: 0,
      NoiSoiDD_HD2: 0,
      NoiSoiDD_HD3: 0,
      NoiSoiDT_HD1: 0,
      NoiSoiDT_HD2: 0,
      NoiSoiDT_HD3: 0,
      NoiSoiDDPolype_HD1: 0,
      NoiSoiDDPolype_HD2: 0,
      NoiSoiDDPolype_HD3: 0,
      NoiSoiDTPolype_HD1: 0,
      NoiSoiDTPolype_HD2: 0,
      NoiSoiDTPolype_HD3: 0,
      DD1To: 0,
      DD4To: 0,
      GayMeDD_HD1: 0,
      GayMeDD_HD2: 0,
      GayMeDD_HD3: 0,
      GayMeDT_HD1: 0,
      GayMeDT_HD2: 0,
      GayMeDT_HD3: 0,
      GayMeDD_Polype_HD1: 0,
      GayMeDD_Polype_HD2: 0,
      GayMeDD_Polype_HD3: 0,
      GayMeDT_Polype_HD1: 0,
      GayMeDT_Polype_HD2: 0,
      GayMeDT_Polype_HD3: 0,
      CongKham_TieuHoa_HD1: 0,
      CongKham_TieuHoa_HD2: 0,
      CongKham_TieuHoa_HD3: 0,
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
      DienTimCT_HD1: 0,
      DienTimCT_HD2: 0,
      DienTimCT_HD3: 0,
      HoHapCT_HD1: 0,
      HoHapCT_HD2: 0,
      HoHapCT_HD3: 0,
      CTCongTy_HD1: 0,
      CTCongTy_HD2: 0,
      CTCongTy_HD3: 0,
      DoLoangXuongCT_HD1: 0,
      DoLoangXuongCT_HD2: 0,
      DoLoangXuongCT_HD3: 0,
      XQuangCT_HD1: 0,
      XQuangCT_HD2: 0,
      XQuangCT_HD3: 0,
      ThinhHocCT_HD1: 0,
      ThinhHocCT_HD2: 0,
      ThinhHocCT_HD3: 0,
      SieuAmMachMauCT_HD1: 0,
      SieuAmMachMauCT_HD2: 0,
      SieuAmMachMauCT_HD3: 0,
      MatRHMTMHCT_HD1: 0,
      MatRHMTMHCT_HD2: 0,
      MatRHMTMHCT_HD3: 0,
      ChupNhuAnhCT_HD1: 0,
      ChupNhuAnhCT_HD2: 0,
      ChupNhuAnhCT_HD3: 0,
      NoiSoiCT_HD1: 0,
      NoiSoiCT_HD2: 0,
      NoiSoiCT_HD3: 0,
      SATimCT_HD1: 0,
      SATimCT_HD2: 0,
      SATimCT_HD3: 0,
      ClsNgoaiGio_DB: 0,
      ClsNgoaiGio_BH: 0,
      ClsNgoaiGio_KL: 0,
      ImPlant_1: 0,
      ImPlant_2: 0,
      PhanTram_SieuAmCT2_HD1: 0,
      PhanTram_SieuAmCT2_HD2: 0,
      PhanTram_SieuAmCT2_HD3: 0,
      NoiSoiDD_HD1: 0,
      NoiSoiDD_HD2: 0,
      NoiSoiDD_HD3: 0,
      NoiSoiDT_HD1: 0,
      NoiSoiDT_HD2: 0,
      NoiSoiDT_HD3: 0,
      NoiSoiDDPolype_HD1: 0,
      NoiSoiDDPolype_HD2: 0,
      NoiSoiDDPolype_HD3: 0,
      NoiSoiDTPolype_HD1: 0,
      NoiSoiDTPolype_HD2: 0,
      NoiSoiDTPolype_HD3: 0,
      DD1To: 0,
      DD4To: 0,
      GayMeDD_HD1: 0,
      GayMeDD_HD2: 0,
      GayMeDD_HD3: 0,
      GayMeDT_HD1: 0,
      GayMeDT_HD2: 0,
      GayMeDT_HD3: 0,
      GayMeDD_Polype_HD1: 0,
      GayMeDD_Polype_HD2: 0,
      GayMeDD_Polype_HD3: 0,
      GayMeDT_Polype_HD1: 0,
      GayMeDT_Polype_HD2: 0,
      GayMeDT_Polype_HD3: 0,
      CongKham_TieuHoa_HD1: 0,
      CongKham_TieuHoa_HD2: 0,
      CongKham_TieuHoa_HD3: 0,
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
      DienTimCT_HD1: 0,
      DienTimCT_HD2: 0,
      DienTimCT_HD3: 0,
      HoHapCT_HD1: 0,
      HoHapCT_HD2: 0,
      HoHapCT_HD3: 0,
      CTCongTy_HD1: 0,
      CTCongTy_HD2: 0,
      CTCongTy_HD3: 0,
      DoLoangXuongCT_HD1: 0,
      DoLoangXuongCT_HD2: 0,
      DoLoangXuongCT_HD3: 0,
      XQuangCT_HD1: 0,
      XQuangCT_HD2: 0,
      XQuangCT_HD3: 0,
      ThinhHocCT_HD1: 0,
      ThinhHocCT_HD2: 0,
      ThinhHocCT_HD3: 0,
      SieuAmMachMauCT_HD1: 0,
      SieuAmMachMauCT_HD2: 0,
      SieuAmMachMauCT_HD3: 0,
      MatRHMTMHCT_HD1: 0,
      MatRHMTMHCT_HD2: 0,
      MatRHMTMHCT_HD3: 0,
      ChupNhuAnhCT_HD1: 0,
      ChupNhuAnhCT_HD2: 0,
      ChupNhuAnhCT_HD3: 0,
      NoiSoiCT_HD1: 0,
      NoiSoiCT_HD2: 0,
      NoiSoiCT_HD3: 0,
      SATimCT_HD1: 0,
      SATimCT_HD2: 0,
      SATimCT_HD3: 0,
      ClsNgoaiGio_DB: 0,
      ClsNgoaiGio_BH: 0,
      ClsNgoaiGio_KL: 0,
      ImPlant_1: 0,
      ImPlant_2: 0,
      PhanTram_SieuAmCT2_HD1: 0,
      PhanTram_SieuAmCT2_HD2: 0,
      PhanTram_SieuAmCT2_HD3: 0,
      NoiSoiDD_HD1: 0,
      NoiSoiDD_HD2: 0,
      NoiSoiDD_HD3: 0,
      NoiSoiDT_HD1: 0,
      NoiSoiDT_HD2: 0,
      NoiSoiDT_HD3: 0,
      NoiSoiDDPolype_HD1: 0,
      NoiSoiDDPolype_HD2: 0,
      NoiSoiDDPolype_HD3: 0,
      NoiSoiDTPolype_HD1: 0,
      NoiSoiDTPolype_HD2: 0,
      NoiSoiDTPolype_HD3: 0,
      DD1To: 0,
      DD4To: 0,
      GayMeDD_HD1: 0,
      GayMeDD_HD2: 0,
      GayMeDD_HD3: 0,
      GayMeDT_HD1: 0,
      GayMeDT_HD2: 0,
      GayMeDT_HD3: 0,
      GayMeDD_Polype_HD1: 0,
      GayMeDD_Polype_HD2: 0,
      GayMeDD_Polype_HD3: 0,
      GayMeDT_Polype_HD1: 0,
      GayMeDT_Polype_HD2: 0,
      GayMeDT_Polype_HD3: 0,
      CongKham_TieuHoa_HD1: 0,
      CongKham_TieuHoa_HD2: 0,
      CongKham_TieuHoa_HD3: 0,
    },
  }),

  created() {
    this.getListbacsi()
  },
  methods: {
    handleFileChange() {
      this.selectedFile = this.$refs.fileInput.files[0]
    },
    async uploadExcel() {
      if (!this.selectedFile) {
        alert('Vui lòng chọn tệp Excel để upload.')
        return
      }
      const formData = new FormData()
      formData.append('file', this.selectedFile)
      try {
        const response = await axios.post(
          `${this.apiUrl}/uploadExcel915`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        this.getListbacsi()
        const logContents = response.data.logContents

        this.sendLogToServer('upload', logContents)
        this.selectedFile = undefined
        alert('Upload successful')
      } catch (error) {
        console.error('Error uploading file:', error)
        alert('Failed to upload file')
      }
    },
    async fetchDoctorName() {
      try {
        const response = await axios.get(
          `${this.apiUrl}/tennhanvien915/${this.addItems.NhanVien_Id}`
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
        const response = await axios.get(`${this.apiUrl}/tylethulao915`)
        this.Listbacsi = response.data.result
      } catch (error) {
        console.error(error)
      }
    },
    async getListnhanvien() {
      try {
        const response = await axios.get(`${this.apiUrl}/listnhanvien915`)
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
          `${this.apiUrl}/insertbacsi915`,
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
          `${this.apiUrl}/updatebacsi915/${this.editItems.NhanVien_Id}`,
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
          `${this.apiUrl}/xoabacsi915/${this.selectedNhanVienId}`
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
      await axios.post(`${this.apiUrl}/insertlog915`, logEntry)
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
        { header: 'Khám bệnh (DB)', key: 'PhanTram_Kham_DB' },
        { header: 'Khám bệnh (BH)', key: 'PhanTram_Kham_BH' },
        { header: 'Khám bệnh (KL)', key: 'PhanTram_Kham_KL' },
        { header: 'Thực hiện CLS (DB)', key: 'PhanTram_CLS_DB' },
        { header: 'Thực hiện CLS (BH)', key: 'PhanTram_CLS_BH' },
        { header: 'Thực hiện CLS (KL)', key: 'PhanTram_CLS_KL' },
        { header: 'Thủ thuật(DB)', key: 'PhanTram_TT_DB' },
        { header: 'Thủ thuật(BH)', key: 'PhanTram_TT_BH' },
        { header: 'Thủ thuật(KL)', key: 'PhanTram_TT_KL' },
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
        { header: 'Nội soi phụ khoa CT HD3', key: 'PhanTram_PhuKhoaCT_HD3' },
        { header: 'Nội soi phụ khoa CT HD2', key: 'PhanTram_PhuKhoaCT_HD2' },
        { header: 'Nội soi phụ khoa CT HD1', key: 'PhanTram_PhuKhoaCT_HD1' },
        {
          header: 'Soi nhuộm phụ khoa CT HD3',
          key: 'PhanTram_XNPhuKhoaCT_HD3',
        },
        {
          header: 'Soi nhuộm phụ khoa CT HD2',
          key: 'PhanTram_XNPhuKhoaCT_HD2',
        },
        {
          header: 'Soi nhuộm phụ khoa CT HD1',
          key: 'PhanTram_XNPhuKhoaCT_HD1',
        },
        { header: '2BS GC2 HD1', key: 'KSKCTyGC2_2BS_HD1' },
        { header: '2BS GC2 HD2', key: 'KSKCTyGC2_2BS_HD2' },
        { header: '2BS GC2 HD3', key: 'KSKCTyGC2_2BS_HD3' },
        { header: '3BS GC2 HD1', key: 'KSKCTyGC2_3BS_HD1' },
        { header: '3BS GC2 HD2', key: 'KSKCTyGC2_3BS_HD2' },
        { header: '3BS GC2 HD3', key: 'KSKCTyGC2_3BS_HD3' },
        { header: '4BS GC2 HD1', key: 'KSKCTyGC2_4BS_HD1' },
        { header: '4BS GC2 HD2', key: 'KSKCTyGC2_4BS_HD2' },
        { header: '4BS GC2 HD3', key: 'KSKCTyGC2_4BS_HD3' },
        { header: 'Dưới 4ck HD1', key: 'KSKCTy_Duoi4CK_HD1' },
        { header: 'Dưới 4ck HD2', key: 'KSKCTy_Duoi4CK_HD2' },
        { header: 'Dưới 4ck HD3', key: 'KSKCTy_Duoi4CK_HD3' },
        { header: 'Khám phụ khoa CT HD1', key: 'KSKCTy_PhuKhoaKSK_HD1' },
        { header: 'Khám phụ khoa CT HD2', key: 'KSKCTy_PhuKhoaKSK_HD2' },
        { header: 'Khám phụ khoa CT HD3', key: 'KSKCTy_PhuKhoaKSK_HD3' },
        { header: 'Kết hồ sơ 4tờ', key: 'KSK_KetHoSo_4To' },
        { header: 'Kết hồ sơ 1tờ', key: 'KSK_KetHoSo_1To' },
        { header: 'Kết hồ sơ Pru', key: 'KSK_KetHoSo_Pru' },
        { header: 'X-quang (DB)', key: 'PhanTram_XQuang_DB' },
        { header: 'X-quang (BH)', key: 'PhanTram_XQuang_BH' },
        { header: 'X-quang (KL)', key: 'PhanTram_XQuang_KL' },
        { header: 'Đo loãng xương (DB)', key: 'PhanTram_DoLoangXuong_DB' },
        { header: 'Đo loãng xương (BH)', key: 'PhanTram_DoLoangXuong_BH' },
        { header: 'Đo loãng xương (KL)', key: 'PhanTram_DoLoangXuong_KL' },
        { header: 'Điện tim-HH (DB)', key: 'PhanTram_ECGHH_DB' },
        { header: 'Điện tim-HH (BH)', key: 'PhanTram_ECGHH_BH' },
        { header: 'Điện tim-HH (KL)', key: 'PhanTram_ECGHH_KL' },
        { header: 'Khám toàn diện', key: 'KhamToanDien' },
        { header: 'Chỉ định NSTH', key: 'PhanTram_ChiDinhNSTH' },
        { header: 'Điện tim CT HD1', key: 'DienTimCT_HD1' },
        { header: 'Điện tim CT HD2', key: 'DienTimCT_HD2' },
        { header: 'Điện tim CT HD3', key: 'DienTimCT_HD3' },
        { header: 'Hô hấp CT HD1', key: 'HoHapCT_HD1' },
        { header: 'Hô hấp CT HD2', key: 'HoHapCT_HD2' },
        { header: 'Hô hấp CT HD3', key: 'HoHapCT_HD3' },
        { header: 'CT công ty HD1', key: 'CTCongTy_HD1' },
        { header: 'CT công ty HD2', key: 'CTCongTy_HD2' },
        { header: 'CT công ty HD3', key: 'CTCongTy_HD3' },
        { header: 'ĐLX CT HD1', key: 'DoLoangXuongCT_HD1' },
        { header: 'ĐLX CT HD2', key: 'DoLoangXuongCT_HD2' },
        { header: 'ĐLX CT HD3', key: 'DoLoangXuongCT_HD3' },
        { header: 'X-quang CT HD1', key: 'XQuangCT_HD1' },
        { header: 'X-quang CT HD2', key: 'XQuangCT_HD2' },
        { header: 'X-quang CT HD3', key: 'XQuangCT_HD3' },
        { header: 'Thính học CT HD1', key: 'ThinhHocCT_HD1' },
        { header: 'Thính học CT HD2', key: 'ThinhHocCT_HD2' },
        { header: 'Thính học CT HD3', key: 'ThinhHocCT_HD3' },
        { header: 'SA m.máu CT HD1', key: 'SieuAmMachMauCT_HD1' },
        { header: 'SA m.máu CT HD2', key: 'SieuAmMachMauCT_HD2' },
        { header: 'SA m.máu CT HD3', key: 'SieuAmMachMauCT_HD3' },
        { header: 'MắtRHMTMH CT HD1', key: 'MatRHMTMHCT_HD1' },
        { header: 'MắtRHMTMH CT HD2', key: 'MatRHMTMHCT_HD2' },
        { header: 'MắtRHMTMH CT HD3', key: 'MatRHMTMHCT_HD3' },
        { header: 'Chụp nhũ ảnh CT HD1', key: 'ChupNhuAnhCT_HD1' },
        { header: 'Chụp nhũ ảnh CT HD2', key: 'ChupNhuAnhCT_HD2' },
        { header: 'Chụp nhũ ảnh CT HD3', key: 'ChupNhuAnhCT_HD3' },
        { header: 'Nội soi CT HD1', key: 'NoiSoiCT_HD1' },
        { header: 'Nội soi CT HD2', key: 'NoiSoiCT_HD2' },
        { header: 'Nội soi CT HD3', key: 'NoiSoiCT_HD3' },
        { header: 'SÂ tim CT HD1', key: 'SATimCT_HD1' },
        { header: 'SÂ tim CT HD2', key: 'SATimCT_HD2' },
        { header: 'SÂ tim CT HD3', key: 'SATimCT_HD3' },
        { header: 'CLS ngoài giờ (DB)', key: 'ClsNgoaiGio_DB' },
        { header: 'CLS ngoài giờ (BH)', key: 'ClsNgoaiGio_BH' },
        { header: 'CLS ngoài giờ (KL)', key: 'ClsNgoaiGio_KL' },
        { header: 'ImPlant 1', key: 'ImPlant_1' },
        { header: 'ImPlant 2', key: 'ImPlant_2' },

        { header: 'Siêu âm CT 2,3,4 HD1', key: 'PhanTram_SieuAmCT2_HD1' },
        { header: 'Siêu âm CT 2,3,4 HD2', key: 'PhanTram_SieuAmCT2_HD2' },
        { header: 'Siêu âm CT 2,3,4 HD3', key: 'PhanTram_SieuAmCT2_HD3' },
        { header: 'Nội soi DD HD1', key: 'NoiSoiDD_HD1' },
        { header: 'Nội soi DD HD2', key: 'NoiSoiDD_HD2' },
        { header: 'Nội soi DD HD3', key: 'NoiSoiDD_HD3' },

        { header: 'Nội soi DT HD1', key: 'NoiSoiDT_HD1' },
        { header: 'Nội soi DT HD2', key: 'NoiSoiDT_HD2' },
        { header: 'Nội soi DT HD3', key: 'NoiSoiDT_HD3' },

        { header: 'Nội soi DD Polype HD1', key: 'NoiSoiDDPolype_HD1' },
        { header: 'Nội soi DD Polype HD2', key: 'NoiSoiDDPolype_HD2' },
        { header: 'Nội soi DD Polype HD3', key: 'NoiSoiDDPolype_HD3' },
        { header: 'Nội soi CT ĐT Polype HD1', key: 'NoiSoiDTPolype_HD1' },
        { header: 'Nội soi CT ĐT Polype HD2', key: 'NoiSoiDTPolype_HD2' },
        { header: 'Nội soi CT ĐT Polype HD3', key: 'NoiSoiDTPolype_HD3' },
        { header: 'Điều dưỡng HSKSK 1 Tờ', key: 'DD1To' },
        { header: 'Điều dưỡng HSKSK 4 Tờ', key: 'DD4To' },

        { header: 'Gây mê dạ dày HD1', key: 'GayMeDD_HD1' },
        { header: 'Gây mê dạ dày HD2', key: 'GayMeDD_HD2' },
        { header: 'Gây mê dạ dày HD3', key: 'GayMeDD_HD3' },
        { header: 'Gây mê đại tràng HD1', key: 'GayMeDT_HD1' },
        { header: 'Gây mê đại tràng HD2', key: 'GayMeDT_HD2' },
        { header: 'Gây mê đại tràng HD3', key: 'GayMeDT_HD3' },
        { header: 'Gây mê dạ dày polype HD1', key: 'GayMeDD_Polype_HD1' },
        { header: 'Gây mê dạ dày polype HD2', key: 'GayMeDD_Polype_HD2' },
        { header: 'Gây mê dạ dày polype HD3', key: 'GayMeDD_Polype_HD3' },
        { header: 'Gây mê đại tràng polype HD1', key: 'GayMeDT_Polype_HD1' },
        { header: 'Gây mê đại tràng polype HD2', key: 'GayMeDT_Polype_HD2' },
        { header: 'Gây mê đại tràng polype HD3', key: 'GayMeDT_Polype_HD3' },
        { header: 'Công khám tiêu hóa HD1', key: 'CongKham_TieuHoa_HD1' },
        { header: 'Công khám tiêu hóa HD2', key: 'CongKham_TieuHoa_HD3' },
        { header: 'Công khám tiêu hóa HD3', key: 'CongKham_TieuHoa_HD2' },

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
          KSKCTyGC2_2BS_HD1: item.KSKCTyGC2_2BS_HD1,
          KSKCTyGC2_2BS_HD2: item.KSKCTyGC2_2BS_HD2,
          KSKCTyGC2_2BS_HD3: item.KSKCTyGC2_2BS_HD3,
          KSKCTyGC2_3BS_HD1: item.KSKCTyGC2_3BS_HD1,
          KSKCTyGC2_3BS_HD2: item.KSKCTyGC2_3BS_HD2,
          KSKCTyGC2_3BS_HD3: item.KSKCTyGC2_3BS_HD3,
          KSKCTyGC2_4BS_HD1: item.KSKCTyGC2_4BS_HD1,
          KSKCTyGC2_4BS_HD2: item.KSKCTyGC2_4BS_HD2,
          KSKCTyGC2_4BS_HD3: item.KSKCTyGC2_4BS_HD3,
          KSKCTy_Duoi4CK_HD1: item.KSKCTy_Duoi4CK_HD1,
          KSKCTy_Duoi4CK_HD2: item.KSKCTy_Duoi4CK_HD2,
          KSKCTy_Duoi4CK_HD3: item.KSKCTy_Duoi4CK_HD3,
          KSKCTy_PhuKhoaKSK_HD1: item.KSKCTy_PhuKhoaKSK_HD1,
          KSKCTy_PhuKhoaKSK_HD2: item.KSKCTy_PhuKhoaKSK_HD2,
          KSKCTy_PhuKhoaKSK_HD3: item.KSKCTy_PhuKhoaKSK_HD3,
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
          DienTimCT_HD1: item.DienTimCT_HD1,
          DienTimCT_HD2: item.DienTimCT_HD2,
          DienTimCT_HD3: item.DienTimCT_HD3,
          HoHapCT_HD1: item.HoHapCT_HD1,
          HoHapCT_HD2: item.HoHapCT_HD2,
          HoHapCT_HD3: item.HoHapCT_HD3,
          CTCongTy_HD1: item.CTCongTy_HD1,
          CTCongTy_HD2: item.CTCongTy_HD2,
          CTCongTy_HD3: item.CTCongTy_HD3,
          DoLoangXuongCT_HD1: item.DoLoangXuongCT_HD1,
          DoLoangXuongCT_HD2: item.DoLoangXuongCT_HD2,
          DoLoangXuongCT_HD3: item.DoLoangXuongCT_HD3,
          XQuangCT_HD1: item.XQuangCT_HD1,
          XQuangCT_HD2: item.XQuangCT_HD2,
          XQuangCT_HD3: item.XQuangCT_HD3,
          ThinhHocCT_HD1: item.ThinhHocCT_HD1,
          ThinhHocCT_HD2: item.ThinhHocCT_HD2,
          ThinhHocCT_HD3: item.ThinhHocCT_HD3,
          SieuAmMachMauCT_HD1: item.SieuAmMachMauCT_HD1,
          SieuAmMachMauCT_HD2: item.SieuAmMachMauCT_HD2,
          SieuAmMachMauCT_HD3: item.SieuAmMachMauCT_HD3,
          MatRHMTMHCT_HD1: item.MatRHMTMHCT_HD1,
          MatRHMTMHCT_HD2: item.MatRHMTMHCT_HD2,
          MatRHMTMHCT_HD3: item.MatRHMTMHCT_HD3,
          ChupNhuAnhCT_HD1: item.ChupNhuAnhCT_HD1,
          ChupNhuAnhCT_HD2: item.ChupNhuAnhCT_HD2,
          ChupNhuAnhCT_HD3: item.ChupNhuAnhCT_HD3,
          NoiSoiCT_HD1: item.NoiSoiCT_HD1,
          NoiSoiCT_HD2: item.NoiSoiCT_HD2,
          NoiSoiCT_HD3: item.NoiSoiCT_HD3,
          SATimCT_HD1: item.SATimCT_HD1,
          SATimCT_HD2: item.SATimCT_HD2,
          SATimCT_HD3: item.SATimCT_HD3,
          ClsNgoaiGio_DB: item.ClsNgoaiGio_DB,
          ClsNgoaiGio_BH: item.ClsNgoaiGio_BH,
          ClsNgoaiGio_KL: item.ClsNgoaiGio_KL,
          ImPlant_1: item.ImPlant_1,
          ImPlant_2: item.ImPlant_2,

          PhanTram_SieuAmCT2_HD1: item.PhanTram_SieuAmCT2_HD1,
          PhanTram_SieuAmCT2_HD2: item.PhanTram_SieuAmCT2_HD2,
          PhanTram_SieuAmCT2_HD3: item.PhanTram_SieuAmCT2_HD3,
          NoiSoiDD_HD1: item.NoiSoiDD_HD1,
          NoiSoiDD_HD2: item.NoiSoiDD_HD2,
          NoiSoiDD_HD3: item.NoiSoiDD_HD3,
          NoiSoiDT_HD1: item.NoiSoiDT_HD1,
          NoiSoiDT_HD2: item.NoiSoiDT_HD2,
          NoiSoiDT_HD3: item.NoiSoiDT_HD3,
          NoiSoiDDPolype_HD1: item.NoiSoiDDPolype_HD1,
          NoiSoiDDPolype_HD2: item.NoiSoiDDPolype_HD2,
          NoiSoiDDPolype_HD3: item.NoiSoiDDPolype_HD3,
          NoiSoiDTPolype_HD1: item.NoiSoiDTPolype_HD1,
          NoiSoiDTPolype_HD2: item.NoiSoiDTPolype_HD2,
          NoiSoiDTPolype_HD3: item.NoiSoiDTPolype_HD3,
          DD1To: item.DD1To,
          DD4To: item.DD4To,
          GayMeDD_HD1: item.GayMeDD_HD1,
          GayMeDD_HD2: item.GayMeDD_HD2,
          GayMeDD_HD3: item.GayMeDD_HD3,
          GayMeDT_HD1: item.GayMeDT_HD1,
          GayMeDT_HD2: item.GayMeDT_HD2,
          GayMeDT_HD3: item.GayMeDT_HD3,
          GayMeDD_Polype_HD1: item.GayMeDD_Polype_HD1,
          GayMeDD_Polype_HD2: item.GayMeDD_Polype_HD2,
          GayMeDD_Polype_HD3: item.GayMeDD_Polype_HD3,
          GayMeDT_Polype_HD1: item.GayMeDT_Polype_HD1,
          GayMeDT_Polype_HD2: item.GayMeDT_Polype_HD2,
          GayMeDT_Polype_HD3: item.GayMeDT_Polype_HD3,
          CongKham_TieuHoa_HD1: item.CongKham_TieuHoa_HD1,
          CongKham_TieuHoa_HD3: item.CongKham_TieuHoa_HD3,
          CongKham_TieuHoa_HD2: item.CongKham_TieuHoa_HD2,

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
        a.download = 'Danhsachbacsi915.xlsx'
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
