<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="Listbacsi"
      :search="search"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:item.tennhanvien="{ item }">
        <v-chip :style="{ 'min-width': '100px' }" light>
          {{ item.tennhanvien }}
        </v-chip>
      </template>
      <template v-slot:item.remuneration_created="{ item }">
        <span>{{ formatDate(item.remuneration_created) }}</span>
      </template>
      <template v-slot:item.remuneration_updatedate="{ item }">
        <span>{{ formatDate(item.remuneration_updatedate) }}</span>
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

      <template v-slot:item.KSK_KetHoSo_4To="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_4To) }}</span> </template
      ><template v-slot:item.KSK_KetHoSo_1To="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_1To) }}</span> </template
      ><template v-slot:item.KSK_KetHoSo_Pru="{ item }">
        <span>{{ formatNumber(item.KSK_KetHoSo_Pru) }}</span>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Tỷ lệ thù lao New His</v-toolbar-title>

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

          <v-btn
            color="yellow darken-1"
            dark
            class="mb-4 mr-4"
            :to="'/thulao/his_pd/updatemore'"
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
              <v-row>
                <v-col>
                  <v-col
                    ><v-text-field
                      v-model="addItems.nhanvien_id"
                      label="Id nhân viên"
                      @keypress.enter="fetchDoctorName"
                    ></v-text-field
                  ></v-col>
                </v-col>
                <v-col>
                  <v-col
                    ><v-text-field
                      v-model="addItems.tennhanvien"
                      label="Tên bác sĩ"
                      readonly
                    ></v-text-field
                  ></v-col>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  ><v-text-field
                    v-model="addItems.hang"
                    label="Hạng"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.chucvu"
                    label="Chức vụ"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.chuyenkhoa"
                    label="Chuyên khoa"
                  ></v-text-field
                ></v-col>
              </v-row>
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
                  v-model="addItems.chidinh_cls"
                  label="Chỉ định CLS"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.chidinh_nsth"
                  label="Chỉ định nội soi tiêu hóa"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.chidinh_toandien"
                  label="Chỉ định khám toàn diện"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.chidinh_phauthuat"
                  label="Chỉ định phẫu thuật"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.gioithieungoai"
                  label="PT giới thiệu ngoài"
                  type="number"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="addItems.khamtoandien"
                  label="Khám toàn diện"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="addItems.ngoaigio_bv"
                  label="Ngoài giờ BV"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="addItems.dodakygiacngu"
                  label="Đo đa ký"
                  type="number"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Khám bệnh</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.kham_db"
                    label="Khám bệnh (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.kham_bh"
                    label="Khám bệnh (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.kham_kl"
                    label="Khám bệnh (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Tái khám</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.taikham_db"
                    label="Tái khám (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.taikham_bh"
                    label="Tái khám (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.taikham_kl"
                    label="Tái khám (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thực hiện CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.thcls_db"
                    label="Thực hiện CLS(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thcls_bh"
                    label="Thực hiện CLS(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thcls_kl"
                    label="Thực hiện CLS(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">THCLS ngoài giờ BV</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.thcls_ngoaigio_db"
                    label="THCLS ngoài giờ(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thcls_ngoaigio_bh"
                    label="THCLS ngoài giờ(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thcls_ngoaigio_kl"
                    label="THCLS ngoài giờ(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thủ thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.thuthuat_db"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thuthuat_bh"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thuthuat_kl"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Điện tim-HH</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.dientim_hh_db"
                    label="Điện tim-HH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.dientim_hh_bh"
                    label="Điện tim-HH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.dientim_hh_kl"
                    label="Điện tim-HH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Siêu âm</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.sieuam_db"
                    label="Siêu âm (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.sieuam_bh"
                    label="Siêu âm (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.sieuam_kl"
                    label="Siêu âm (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">X-Quang</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.xquang_db"
                    label="X-Quang (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.xquang_bh"
                    label="X-Quang (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.xquang_kl"
                    label="X-Quang (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Đo loãng xương</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.doloangxuong_db"
                    label="Đo loãng xương (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.doloangxuong_bh"
                    label="Đo loãng xương (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.doloangxuong_kl"
                    label="Đo loãng xương (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_db"
                    label="Gây mê (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_bh"
                    label="Gây mê (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_kl"
                    label="Gây mê (KL)"
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
                    v-model="addItems.gayme_tmh_db"
                    label="Gây mê TMH (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_tmh_bh"
                    label="Gây mê TMH (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_tmh_kl"
                    label="Gây mê TMH (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê tiêu hóa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_th_db"
                    label="Gây mê TH (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_th_bh"
                    label="Gây mê TH (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.gayme_th_kl"
                    label="Gây mê TH (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Implant</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.implant_1"
                    label="Implant 1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.implant_2"
                    label="Implant 2"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="blue lighten-4"
                ><h3 style="color: red">Phẫu thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_de"
                    label="Dễ"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_trungbinh"
                    label="Trung bình"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_kho"
                    label="Khó"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_bsphu"
                    label="Bs Phụ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4">
                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_trubaohiem"
                    label="Trừ bảo hiểm"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_trubncu"
                    label="Bệnh nhân cũ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.phauthuat_trudanbenh"
                    label="Trừ dẫn bệnh"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">ĐT nội trú</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.dieutrinoitru_db"
                    label="ĐT nội trú(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.dieutrinoitru_bh"
                    label="ĐT nội trú(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.dieutrinoitru_kl"
                    label="ĐT nội trú(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col class="pink lighten-4"
                  ><v-text-field
                    v-model="addItems.dieutrinoitru_dongia"
                    label="Đơn Giá"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Chăm sóc sau PT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.chamsocsauphauthuat_db"
                    label="Chăm sóc sau PT(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.chamsocsauphauthuat_bh"
                    label="Chăm sóc sau PT(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.chamsocsauphauthuat_kl"
                    label="Chăm sóc sau PT(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK công khám tổng quát</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_congkham_tongquat_hd1"
                    label="Công khám tổng quát HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_congkham_tongquat_hd2"
                    label="Công khám tổng quát HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_congkham_tongquat_hd3"
                    label="Công khám tổng quát HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK công khám chuyên khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_congkham_chuyenkhoa_hd1"
                    label="Công khám chuyên khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_congkham_chuyenkhoa_hd2"
                    label="Công khám chuyên khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_congkham_chuyenkhoa_hd3"
                    label="Công khám chuyên khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_cls_hd1"
                    label="KSK CLS HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_cls_hd2"
                    label="KSK CLS HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_cls_hd3"
                    label="KSK CLS HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm DV1</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamdv1_hd1"
                    label="Siêu âm DV1 HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamdv1_hd2"
                    label="Siêu âm DV1 HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamdv1_hd3"
                    label="Siêu âm DV1 HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm DV2</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamdv234_hd1"
                    label="Siêu âm DV234 HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamdv234_hd2"
                    label="Siêu âm DV234 HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamdv234_hd3"
                    label="Siêu âm DV234 HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK khám phụ khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamphukhoa_hd1"
                    label="Khám phụ khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamphukhoa_hd2"
                    label="Khám phụ khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamphukhoa_hd3"
                    label="Khám phụ khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK 3 BS</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoiphukhoa_hd1"
                    label="Nội soi phụ khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoiphukhoa_hd2"
                    label="Nội soi phụ khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoiphukhoa_hd3"
                    label="Nội soi phụ khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK soi nhuộm phụ khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_soinhuomphukhoa_hd1"
                    label="Soi nhuộm phụ khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_soinhuomphukhoa_hd2"
                    label="Soi nhuộm phụ khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_soinhuomphukhoa_hd3"
                    label="Soi nhuộm phụ khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK điện tim</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_dientim_hd1"
                    label="Điện tim HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_dientim_hd2"
                    label="Điện tim HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_dientim_hd3"
                    label="Điện tim HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK hô hấp</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_hohap_hd1"
                    label="Hô hấp HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_hohap_hd2"
                    label="Hô hấp HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_hohap_hd3"
                    label="Hô hấp HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK CT</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_ct_hd1"
                    label="CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_ct_hd2"
                    label="CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_ct_hd3"
                    label="CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK đo loãng xương</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_doloangxuong_hd1"
                    label="Đo loãng xương HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_doloangxuong_hd2"
                    label="Đo loãng xương HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_doloangxuong_hd3"
                    label="Đo loãng xương HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK X-Quang</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_xquang_hd1"
                    label="X-quang HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_xquang_hd2"
                    label="X-quang HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_xquang_hd3"
                    label="X-quang HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK thính học</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_thinhhoc_hd1"
                    label="Thính học HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_thinhhoc_hd2"
                    label="Thính học HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_thinhhoc_hd3"
                    label="Thính học HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm tim</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamtim_hd1"
                    label="Siêu âm tim HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamtim_hd2"
                    label="Siêu âm tim HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuamtim_hd3"
                    label="Siêu âm tim HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm mạch máu</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuammachmau_hd1"
                    label="Siêu âm mạch máu HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuammachmau_hd2"
                    label="Siêu âm mạch máu HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_sieuammachmau_hd3"
                    label="Siêu âm mạch máu HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK RHM</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_mrhm_hd1"
                    label="Răng hàm mặt HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_mrhm_hd2"
                    label="Răng hàm mặt HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_mrhm_hd3"
                    label="Răng hàm mặt HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK chụp nhũ ảnh</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_chupnhuanh_hd1"
                    label="Chụp nhũ ảnh HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_chupnhuanh_hd2"
                    label="Chụp nhũ ảnh HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_chupnhuanh_hd3"
                    label="Chụp nhũ ảnh HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi NBI</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoinbi_hd1"
                    label="Nội soi NBI HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoinbi_hd2"
                    label="Nội soi NBI HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoinbi_hd3"
                    label="Nội soi NBI HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK khám tiêu hóa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamtieuhoa_hd1"
                    label="Khám tiêu hóa HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamtieuhoa_hd2"
                    label="Khám tiêu hóa HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamtieuhoa_hd3"
                    label="Khám tiêu hóa HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi dạ dày</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaday_hd1"
                    label="Nội soi dạ dày HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaday_hd2"
                    label="Nội soi dạ dày HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaday_hd3"
                    label="Nội soi dạ dày HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi đại tràng</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaitrang_hd1"
                    label="Nội soi đại tràng HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaitrang_hd2"
                    label="Nội soi đại tràng HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaitrang_hd3"
                    label="Nội soi đại tràng HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi dạ dày polype</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidadaypolype_hd1"
                    label="Nội soi dạ dày polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidadaypolype_hd2"
                    label="Nội soi dạ dày polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidadaypolype_hd3"
                    label="Nội soi dạ dày polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi đại tràng polype</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaitrangpolype_hd1"
                    label="Nội soi đại tràng polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaitrangpolype_hd2"
                    label="Nội soi đại tràng polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_noisoidaitrangpolype_hd3"
                    label="Nội soi đại tràng polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê dạ dày</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaday_hd1"
                    label="Gây mê dạ dày HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaday_hd2"
                    label="Gây mê dạ dày HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaday_hd3"
                    label="Gây mê dạ dày HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê đại tràng</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaitrang_hd1"
                    label="Gây mê đại tràng HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaitrang_hd2"
                    label="Gây mê đại tràng HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaitrang_hd3"
                    label="Gây mê đại tràng HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê dạ dày polype</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidadaypolype_hd1"
                    label="Gây mê dạ dày polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidadaypolype_hd2"
                    label="Gây mê dạ dày polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidadaypolype_hd3"
                    label="Gây mê dạ dày polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê đại tràng polype</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaitrangpolype_hd1"
                    label="Gây mê đại tràng polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaitrangpolype_hd2"
                    label="Gây mê đại tràng polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_gaymenoisoidaitrangpolype_hd3"
                    label="Gây mê đại tràng polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Tổng kết hồ sơ</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_tongkethoso_4to"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_tongkethoso_1to"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_tongkethoso_pru"
                    label="Pru"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Điều dưỡng làm hồ sơ</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_dieuduonglamhoso_4to"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_dieuduonglamhoso_1to"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col class="mr-3 blue lighten-4"
                  ><v-text-field
                    v-model="addItems.dd_dungcu"
                    label="DD dụng cụ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Khám bệnh Q7</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.kham_q7_db"
                    label="Khám bệnh (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.kham_q7_bh"
                    label="Khám bệnh (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.kham_q7_kl"
                    label="Khám bệnh (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thủ thuật Q7</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.thuthuat_q7_db"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thuthuat_q7_bh"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.thuthuat_q7_kl"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK khám Visa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamvisa_hd1"
                    label="Khám Visa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamvisa_hd2"
                    label="Khám Visa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_khamvisa_hd3"
                    label="Khám Visa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK CLS Visa</h3>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_clsvisa_hd1"
                    label="CLS visa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_clsvisa_hd2"
                    label="CLS visa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="addItems.ksk_clsvisa_hd3"
                    label="CLS visa HĐ3"
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
              <v-col
                ><v-text-field
                  v-model="editItems.tennhanvien"
                  label="Tên bác sĩ"
                ></v-text-field
              ></v-col>

              <v-col
                ><v-text-field
                  v-model="editItems.hang"
                  label="Hạng"
                ></v-text-field
              ></v-col>
              <v-col
                ><v-text-field
                  v-model="editItems.chucvu"
                  label="Chức vụ"
                ></v-text-field
              ></v-col>
              <v-col
                ><v-text-field
                  v-model="editItems.chuyenkhoa"
                  label="Chuyên khoa"
                ></v-text-field
              ></v-col>
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
                  v-model="editItems.chidinh_cls"
                  label="Chỉ định CLS"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.chidinh_nsth"
                  label="Chỉ định nội soi tiêu hóa"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.chidinh_toandien"
                  label="Chỉ định khám toàn diện"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.chidinh_phauthuat"
                  label="Chỉ định phẫu thuật"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.gioithieungoai"
                  label="PT giới thiệu ngoài"
                  type="number"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="editItems.khamtoandien"
                  label="Khám toàn diện"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 pink lighten-4"
                ><v-text-field
                  v-model="editItems.ngoaigio_bv"
                  label="Ngoài giờ BV"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col class="mr-3 blue lighten-4"
                ><v-text-field
                  v-model="editItems.dodakygiacngu"
                  label="Đo đa ký"
                  type="number"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Khám bệnh</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.kham_db"
                    label="Khám bệnh (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.kham_bh"
                    label="Khám bệnh (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.kham_kl"
                    label="Khám bệnh (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Tái khám</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.taikham_db"
                    label="Tái khám (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.taikham_bh"
                    label="Tái khám (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.taikham_kl"
                    label="Tái khám (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thực hiện CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.thcls_db"
                    label="Thực hiện CLS(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thcls_bh"
                    label="Thực hiện CLS(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thcls_kl"
                    label="Thực hiện CLS(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">THCLS ngoài giờ BV</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.thcls_ngoaigio_db"
                    label="THCLS ngoài giờ(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thcls_ngoaigio_bh"
                    label="THCLS ngoài giờ(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thcls_ngoaigio_kl"
                    label="THCLS ngoài giờ(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thủ thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.thuthuat_db"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thuthuat_bh"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thuthuat_kl"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Điện tim-HH</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.dientim_hh_db"
                    label="Điện tim-HH(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.dientim_hh_bh"
                    label="Điện tim-HH(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.dientim_hh_kl"
                    label="Điện tim-HH(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Siêu âm</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.sieuam_db"
                    label="Siêu âm (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.sieuam_bh"
                    label="Siêu âm (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.sieuam_kl"
                    label="Siêu âm (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">X-Quang</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.xquang_db"
                    label="X-Quang (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.xquang_bh"
                    label="X-Quang (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.xquang_kl"
                    label="X-Quang (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Đo loãng xương</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.doloangxuong_db"
                    label="Đo loãng xương (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.doloangxuong_bh"
                    label="Đo loãng xương (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.doloangxuong_kl"
                    label="Đo loãng xương (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_db"
                    label="Gây mê (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_bh"
                    label="Gây mê (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_kl"
                    label="Gây mê (KL)"
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
                    v-model="editItems.gayme_tmh_db"
                    label="Gây mê TMH (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_tmh_bh"
                    label="Gây mê TMH (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_tmh_kl"
                    label="Gây mê TMH (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Gây mê tiêu hóa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_th_db"
                    label="Gây mê TH (DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_th_bh"
                    label="Gây mê TH (BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.gayme_th_kl"
                    label="Gây mê TH (KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Implant</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.implant_1"
                    label="Implant 1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.implant_2"
                    label="Implant 2"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="blue lighten-4"
                ><h3 style="color: red">Phẫu thuật</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_de"
                    label="Dễ"
                    type="number"
                  ></v-text-field
                ></v-col>

                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_trungbinh"
                    label="Trung bình"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_kho"
                    label="Khó"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_bsphu"
                    label="Bs Phụ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 blue lighten-4">
                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_trubaohiem"
                    label="Trừ bảo hiểm"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_trubncu"
                    label="Bệnh nhân cũ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.phauthuat_trudanbenh"
                    label="Trừ dẫn bệnh"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">ĐT nội trú</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.dieutrinoitru_db"
                    label="ĐT nội trú(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.dieutrinoitru_bh"
                    label="ĐT nội trú(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.dieutrinoitru_kl"
                    label="ĐT nội trú(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col class="pink lighten-4"
                  ><v-text-field
                    v-model="editItems.dieutrinoitru_dongia"
                    label="Đơn Giá"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Chăm sóc sau PT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.chamsocsauphauthuat_db"
                    label="Chăm sóc sau PT(dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.chamsocsauphauthuat_bh"
                    label="Chăm sóc sau PT(bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.chamsocsauphauthuat_kl"
                    label="Chăm sóc sau PT(khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK công khám tổng quát</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_congkham_tongquat_hd1"
                    label="Công khám tổng quát HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_congkham_tongquat_hd2"
                    label="Công khám tổng quát HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_congkham_tongquat_hd3"
                    label="Công khám tổng quát HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK công khám chuyên khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_congkham_chuyenkhoa_hd1"
                    label="Công khám chuyên khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_congkham_chuyenkhoa_hd2"
                    label="Công khám chuyên khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_congkham_chuyenkhoa_hd3"
                    label="Công khám chuyên khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK CLS</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_cls_hd1"
                    label="KSK CLS HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_cls_hd2"
                    label="KSK CLS HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_cls_hd3"
                    label="KSK CLS HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm DV1</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamdv1_hd1"
                    label="Siêu âm DV1 HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamdv1_hd2"
                    label="Siêu âm DV1 HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamdv1_hd3"
                    label="Siêu âm DV1 HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm DV2</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamdv234_hd1"
                    label="Siêu âm DV234 HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamdv234_hd2"
                    label="Siêu âm DV234 HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamdv234_hd3"
                    label="Siêu âm DV234 HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK khám phụ khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamphukhoa_hd1"
                    label="Khám phụ khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamphukhoa_hd2"
                    label="Khám phụ khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamphukhoa_hd3"
                    label="Khám phụ khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Nội soi phụ khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoiphukhoa_hd1"
                    label="Nội soi phụ khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoiphukhoa_hd2"
                    label="Nội soi phụ khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoiphukhoa_hd3"
                    label="Nội soi phụ khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK soi nhuộm phụ khoa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_soinhuomphukhoa_hd1"
                    label="Soi nhuộm phụ khoa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_soinhuomphukhoa_hd2"
                    label="Soi nhuộm phụ khoa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_soinhuomphukhoa_hd3"
                    label="Soi nhuộm phụ khoa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK điện tim</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_dientim_hd1"
                    label="Điện tim HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_dientim_hd2"
                    label="Điện tim HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_dientim_hd3"
                    label="Điện tim HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK hô hấp</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_hohap_hd1"
                    label="Hô hấp HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_hohap_hd2"
                    label="Hô hấp HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_hohap_hd3"
                    label="Hô hấp HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK CT</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_ct_hd1"
                    label="CT HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_ct_hd2"
                    label="CT HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_ct_hd3"
                    label="CT HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK đo loãng xương</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_doloangxuong_hd1"
                    label="Đo loãng xương HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_doloangxuong_hd2"
                    label="Đo loãng xương HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_doloangxuong_hd3"
                    label="Đo loãng xương HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK X-Quang</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_xquang_hd1"
                    label="X-quang HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_xquang_hd2"
                    label="X-quang HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_xquang_hd3"
                    label="X-quang HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK thính học</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_thinhhoc_hd1"
                    label="Thính học HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_thinhhoc_hd2"
                    label="Thính học HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_thinhhoc_hd3"
                    label="Thính học HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm tim</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamtim_hd1"
                    label="Siêu âm tim HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamtim_hd2"
                    label="Siêu âm tim HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuamtim_hd3"
                    label="Siêu âm tim HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK siêu âm mạch máu</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuammachmau_hd1"
                    label="Siêu âm mạch máu HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuammachmau_hd2"
                    label="Siêu âm mạch máu HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_sieuammachmau_hd3"
                    label="Siêu âm mạch máu HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK RHM</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_mrhm_hd1"
                    label="Răng hàm mặt HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_mrhm_hd2"
                    label="Răng hàm mặt HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_mrhm_hd3"
                    label="Răng hàm mặt HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK chụp nhũ ảnh</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_chupnhuanh_hd1"
                    label="Chụp nhũ ảnh HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_chupnhuanh_hd2"
                    label="Chụp nhũ ảnh HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_chupnhuanh_hd3"
                    label="Chụp nhũ ảnh HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi NBI</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoinbi_hd1"
                    label="Nội soi NBI HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoinbi_hd2"
                    label="Nội soi NBI HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoinbi_hd3"
                    label="Nội soi NBI HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK khám tiêu hóa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamtieuhoa_hd1"
                    label="Khám tiêu hóa HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamtieuhoa_hd2"
                    label="Khám tiêu hóa HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamtieuhoa_hd3"
                    label="Khám tiêu hóa HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi dạ dày</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaday_hd1"
                    label="Nội soi dạ dày HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaday_hd2"
                    label="Nội soi dạ dày HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaday_hd3"
                    label="Nội soi dạ dày HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi đại tràng</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaitrang_hd1"
                    label="Nội soi đại tràng HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaitrang_hd2"
                    label="Nội soi đại tràng HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaitrang_hd3"
                    label="Nội soi đại tràng HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi dạ dày polype</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidadaypolype_hd1"
                    label="Nội soi dạ dày polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidadaypolype_hd2"
                    label="Nội soi dạ dày polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidadaypolype_hd3"
                    label="Nội soi dạ dày polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK nội soi đại tràng polype</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaitrangpolype_hd1"
                    label="Nội soi đại tràng polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaitrangpolype_hd2"
                    label="Nội soi đại tràng polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_noisoidaitrangpolype_hd3"
                    label="Nội soi đại tràng polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê dạ dày</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaday_hd1"
                    label="Gây mê dạ dày HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaday_hd2"
                    label="Gây mê dạ dày HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaday_hd3"
                    label="Gây mê dạ dày HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê đại tràng</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaitrang_hd1"
                    label="Gây mê đại tràng HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaitrang_hd2"
                    label="Gây mê đại tràng HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaitrang_hd3"
                    label="Gây mê đại tràng HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê dạ dày polype</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidadaypolype_hd1"
                    label="Gây mê dạ dày polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidadaypolype_hd2"
                    label="Gây mê dạ dày polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidadaypolype_hd3"
                    label="Gây mê dạ dày polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK gây mê đại tràng polype</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaitrangpolype_hd1"
                    label="Gây mê đại tràng polype HD1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaitrangpolype_hd2"
                    label="Gây mê đại tràng polype HD2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_gaymenoisoidaitrangpolype_hd3"
                    label="Gây mê đại tràng polype HD3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Tổng kết hồ sơ</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_tongkethoso_4to"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_tongkethoso_1to"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_tongkethoso_pru"
                    label="Pru"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">Điều dưỡng làm hồ sơ</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_dieuduonglamhoso_4to"
                    label="4 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_dieuduonglamhoso_1to"
                    label="1 tờ"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col class="mr-3 blue lighten-4"
                  ><v-text-field
                    v-model="editItems.dd_dungcu"
                    label="DD dụng cụ"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Khám bệnh Q7</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.kham_q7_db"
                    label="Khám bệnh (dẫn bệnh)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.kham_q7_bh"
                    label="Khám bệnh (bảo hiểm)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.kham_q7_kl"
                    label="Khám bệnh (khách lẻ)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 blue lighten-4"
                ><h3 style="color: red">Thủ thuật Q7</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.thuthuat_q7_db"
                    label="Thủ thuật(DB)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thuthuat_q7_bh"
                    label="Thủ thuật(BH)"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.thuthuat_q7_kl"
                    label="Thủ thuật(KL)"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>
              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK khám Visa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamvisa_hd1"
                    label="Khám Visa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamvisa_hd2"
                    label="Khám Visa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_khamvisa_hd3"
                    label="Khám Visa HĐ3"
                    type="number"
                  ></v-text-field
                ></v-col>
              </v-col>

              <v-col class="mr-3 pink lighten-4"
                ><h3 style="color: red">KSK CLS Visa</h3>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_clsvisa_hd1"
                    label="CLS visa HĐ1"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_clsvisa_hd2"
                    label="CLS visa HĐ2"
                    type="number"
                  ></v-text-field
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="editItems.ksk_clsvisa_hd3"
                    label="CLS visa HĐ3"
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
    <v-dialog v-model="dialogNhanvien" max-width="1000">
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
import { vnDateTimeFormat } from '~/utils/formatday.js'
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
      { text: 'STT  ', align: 'start', sortable: true, value: 'stt' },
      { text: 'Remunera Id  ', value: 'remuneration_id' },
      { text: 'Tên nhân viên', value: 'tennhanvien' },
      { text: 'Hạng', value: 'hang' },
      { text: 'Chức vụ', value: 'chucvu' },
      { text: 'Chuyên khoa', value: 'chuyenkhoa' },
      { text: 'Ngày tạo', value: 'remuneration_created' },
      { text: 'Người tạo', value: 'created_by' },
      { text: 'Ngày cập nhật', value: 'remuneration_updatedate' },
      { text: 'Người cập nhật', value: 'update_by' },
      { text: 'Chỉ định CLS', value: 'chidinh_cls' },
      { text: 'Chỉ định NSTH', value: 'chidinh_nsth' },
      { text: 'Chỉ định toàn diện', value: 'chidinh_toandien' },
      { text: 'Chỉ định phẫu thuật', value: 'chidinh_phauthuat' },
      { text: 'Giới thiệu ngoài', value: 'gioithieungoai' },
      { text: 'Khám toàn diện', value: 'khamtoandien' },
      { text: 'Ngoài giờ BV', value: 'ngoaigio_bv' },
      { text: 'Đo đa ký giấc ngủ', value: 'dodakygiacngu' },
      { text: 'Khám bệnh (dẫn bệnh)', value: 'kham_db' },
      { text: 'Khám bệnh (bảo hiểm)', value: 'kham_bh' },
      { text: 'Khám bệnh (khách lẻ)', value: 'kham_kl' },
      { text: 'Tái khám (dẫn bệnh)', value: 'taikham_db' },
      { text: 'Tái khám (bảo hiểm)', value: 'taikham_bh' },
      { text: 'Tái khám (khách lẻ)', value: 'taikham_kl' },
      { text: 'THCLS (dẫn bệnh)', value: 'thcls_db' },
      { text: 'THCLS (bảo hiểm)', value: 'thcls_bh' },
      { text: 'THCLS (khách lẻ)', value: 'thcls_kl' },
      { text: 'THCLS ngoài giờ (dẫn bệnh)', value: 'thcls_ngoaigio_db' },
      { text: 'THCLS ngoài giờ (bảo hiểm)', value: 'thcls_ngoaigio_bh' },
      { text: 'THCLS ngoài giờ (khách lẻ)', value: 'thcls_ngoaigio_kl' },
      { text: 'Thủ thuật (dẫn bệnh)', value: 'thuthuat_db' },
      { text: 'Thủ thuật (bảo hiểm)', value: 'thuthuat_bh' },
      { text: 'Thủ thuật (khách lẻ)', value: 'thuthuat_kl' },
      { text: 'Điện tim (dẫn bệnh)', value: 'dientim_hh_db' },
      { text: 'Điện tim (bảo hiểm)', value: 'dientim_hh_bh' },
      { text: 'Điện tim (khách lẻ)', value: 'dientim_hh_kl' },
      { text: 'Siêu âm (dẫn bệnh)', value: 'sieuam_db' },
      { text: 'Siêu âm (bảo hiểm)', value: 'sieuam_bh' },
      { text: 'Siêu âm (khách lẻ)', value: 'sieuam_kl' },
      { text: 'X-quang (dẫn bệnh)', value: 'xquang_db' },
      { text: 'X-quang (bảo hiểm)', value: 'xquang_bh' },
      { text: 'X-quang (khách lẻ)', value: 'xquang_kl' },
      { text: 'Đo loãng xương (dẫn bệnh)', value: 'doloangxuong_db' },
      { text: 'Đo loãng xương (bảo hiểm)', value: 'doloangxuong_bh' },
      { text: 'Đo loãng xương (khách lẻ)', value: 'doloangxuong_kl' },
      { text: 'Gây mê (dẫn bệnh)', value: 'gayme_db' },
      { text: 'Gây mê (bảo hiểm)', value: 'gayme_bh' },
      { text: 'Gây mê (khách lẻ)', value: 'gayme_kl' },
      { text: 'Gây mê TMH (dẫn bệnh)', value: 'gayme_tmh_db' },
      { text: 'Gây mê TMH (bảo hiểm)', value: 'gayme_tmh_bh' },
      { text: 'Gây mê TMH (khách lẻ)', value: 'gayme_tmh_kl' },
      { text: 'Gây mê tiêu hóa (dẫn bệnh)', value: 'gayme_th_db' },
      { text: 'Gây mê tiêu hóa (bảo hiểm)', value: 'gayme_th_bh' },
      { text: 'Gây mê tiêu hóa (khách lẻ)', value: 'gayme_th_kl' },
      { text: 'Implant 1', value: 'implant_1' },
      { text: 'Implant 2', value: 'implant_2' },
      { text: 'Phẫu thuật dễ', value: 'phauthuat_de' },
      { text: 'Phẫu thuật trung bình', value: 'phauthuat_trungbinh' },
      { text: 'Phẫu thuật khó', value: 'phauthuat_kho' },
      { text: 'Phẫu thuật BS phụ', value: 'phauthuat_bsphu' },
      { text: 'Phẫu thuật (trừ bảo hiểm)', value: 'phauthuat_trubaohiem' },
      { text: 'Phẫu thuật (trừ BN cũ)', value: 'phauthuat_trubncu' },
      { text: 'Phẫu thuật (trừ dẫn bệnh)', value: 'phauthuat_trudanbenh' },
      { text: 'Điều trị nội trú (dẫn bệnh)', value: 'dieutrinoitru_db' },
      { text: 'Điều trị nội trú (bảo hiểm)', value: 'dieutrinoitru_bh' },
      { text: 'Điều trị nội trú (khách lẻ)', value: 'dieutrinoitru_kl' },
      { text: 'Điều trị nội trú đơn giá', value: 'dieutrinoitru_dongia' },
      { text: 'Chăm sóc sau PT (dẫn bệnh)', value: 'chamsocsauphauthuat_db' },
      { text: 'Chăm sóc sau PT (bảo hiểm)', value: 'chamsocsauphauthuat_bh' },
      { text: 'Chăm sóc sau PT (khách lẻ)', value: 'chamsocsauphauthuat_kl' },
      { text: 'KSK tổng quát HĐ1', value: 'ksk_congkham_tongquat_hd1' },
      { text: 'KSK tổng quát HĐ2', value: 'ksk_congkham_tongquat_hd2' },
      { text: 'KSK tổng quát HĐ3', value: 'ksk_congkham_tongquat_hd3' },
      { text: 'KSK chuyên khoa HĐ1', value: 'ksk_congkham_chuyenkhoa_hd1' },
      { text: 'KSK chuyên khoa HĐ2', value: 'ksk_congkham_chuyenkhoa_hd2' },
      { text: 'KSK chuyên khoa HĐ3', value: 'ksk_congkham_chuyenkhoa_hd3' },
      { text: 'KSK CLS HĐ1', value: 'ksk_cls_hd1' },
      { text: 'KSK CLS HĐ2', value: 'ksk_cls_hd2' },
      { text: 'KSK CLS HĐ3', value: 'ksk_cls_hd3' },
      { text: 'KSK siêu âm DV1 HĐ1', value: 'ksk_sieuamdv1_hd1' },
      { text: 'KSK siêu âm DV1 HĐ2', value: 'ksk_sieuamdv1_hd2' },
      { text: 'KSK siêu âm DV1 HĐ3', value: 'ksk_sieuamdv1_hd3' },
      { text: 'KSK siêu âm DV2 HĐ1', value: 'ksk_sieuamdv234_hd1' },
      { text: 'KSK siêu âm DV2 HĐ2', value: 'ksk_sieuamdv234_hd2' },
      { text: 'KSK siêu âm DV2 HĐ3', value: 'ksk_sieuamdv234_hd3' },
      { text: 'KSK khám phụ khoa HĐ1', value: 'ksk_khamphukhoa_hd1' },
      { text: 'KSK khám phụ khoa HĐ2', value: 'ksk_khamphukhoa_hd2' },
      { text: 'KSK khám phụ khoa HĐ3', value: 'ksk_khamphukhoa_hd3' },
      { text: 'KSK nội soi phụ khoa HĐ1', value: 'ksk_noisoiphukhoa_hd1' },
      { text: 'KSK nội soi phụ khoa HĐ2', value: 'ksk_noisoiphukhoa_hd2' },
      { text: 'KSK nội soi phụ khoa HĐ3', value: 'ksk_noisoiphukhoa_hd3' },
      { text: 'KSK soi nhuộm phụ khoa HĐ1', value: 'ksk_soinhuomphukhoa_hd1' },
      { text: 'KSK soi nhuộm phụ khoa HĐ2', value: 'ksk_soinhuomphukhoa_hd2' },
      { text: 'KSK soi nhuộm phụ khoa HĐ3', value: 'ksk_soinhuomphukhoa_hd3' },
      { text: 'KSK điện tim HĐ1', value: 'ksk_dientim_hd1' },
      { text: 'KSK điện tim HĐ2', value: 'ksk_dientim_hd2' },
      { text: 'KSK điện tim HĐ3', value: 'ksk_dientim_hd3' },
      { text: 'KSK hô hấp HĐ1', value: 'ksk_hohap_hd1' },
      { text: 'KSK hô hấp HĐ2', value: 'ksk_hohap_hd2' },
      { text: 'KSK hô hấp HĐ3', value: 'ksk_hohap_hd3' },
      { text: 'KSK CT HĐ1', value: 'ksk_ct_hd1' },
      { text: 'KSK CT HĐ2', value: 'ksk_ct_hd2' },
      { text: 'KSK CT HĐ3', value: 'ksk_ct_hd3' },
      { text: 'KSK ĐLX HĐ1', value: 'ksk_doloangxuong_hd1' },
      { text: 'KSK ĐLX HĐ2', value: 'ksk_doloangxuong_hd2' },
      { text: 'KSK ĐLX HĐ3', value: 'ksk_doloangxuong_hd3' },
      { text: 'KSK X-quang HĐ1', value: 'ksk_xquang_hd1' },
      { text: 'KSK X-quang HĐ2', value: 'ksk_xquang_hd2' },
      { text: 'KSK X-quang HĐ3', value: 'ksk_xquang_hd3' },
      { text: 'KSK thính học HĐ1', value: 'ksk_thinhhoc_hd1' },
      { text: 'KSK thính học HĐ2', value: 'ksk_thinhhoc_hd2' },
      { text: 'KSK thính học HĐ3', value: 'ksk_thinhhoc_hd3' },
      { text: 'KSK siêu âm tim HĐ1', value: 'ksk_sieuamtim_hd1' },
      { text: 'KSK siêu âm tim HĐ2', value: 'ksk_sieuamtim_hd2' },
      { text: 'KSK siêu âm tim HĐ3', value: 'ksk_sieuamtim_hd3' },
      { text: 'KSK siêu âm mạch máu HĐ1', value: 'ksk_sieuammachmau_hd1' },
      { text: 'KSK siêu âm mạch máu HĐ2', value: 'ksk_sieuammachmau_hd2' },
      { text: 'KSK siêu âm mạch máu HĐ3', value: 'ksk_sieuammachmau_hd3' },
      { text: 'KSK RHM HĐ1', value: 'ksk_mrhm_hd1' },
      { text: 'KSK RHM HĐ2', value: 'ksk_mrhm_hd2' },
      { text: 'KSK RHM HĐ3', value: 'ksk_mrhm_hd3' },
      { text: 'KSK chụp nhũ ảnh HĐ1', value: 'ksk_chupnhuanh_hd1' },
      { text: 'KSK chụp nhũ ảnh HĐ2', value: 'ksk_chupnhuanh_hd2' },
      { text: 'KSK chụp nhũ ảnh HĐ3', value: 'ksk_chupnhuanh_hd3' },
      { text: 'KSK nội soi NBI HĐ1', value: 'ksk_noisoinbi_hd1' },
      { text: 'KSK nội soi NBI HĐ2', value: 'ksk_noisoinbi_hd2' },
      { text: 'KSK nội soi NBI HĐ3', value: 'ksk_noisoinbi_hd3' },
      { text: 'KSK khám tiêu hóa HĐ1', value: 'ksk_khamtieuhoa_hd1' },
      { text: 'KSK khám tiêu hóa HĐ2', value: 'ksk_khamtieuhoa_hd2' },
      { text: 'KSK khám tiêu hóa HĐ3', value: 'ksk_khamtieuhoa_hd3' },
      { text: 'KSK nội soi dạ dày HĐ1', value: 'ksk_noisoidaday_hd1' },
      { text: 'KSK nội soi dạ dày HĐ2', value: 'ksk_noisoidaday_hd2' },
      { text: 'KSK nội soi dạ dày HĐ3', value: 'ksk_noisoidaday_hd3' },
      { text: 'KSK nội soi đại tràng HĐ1', value: 'ksk_noisoidaitrang_hd1' },
      { text: 'KSK nội soi đại tràng HĐ2', value: 'ksk_noisoidaitrang_hd2' },
      { text: 'KSK nội soi đại tràng HĐ3', value: 'ksk_noisoidaitrang_hd3' },
      {
        text: 'KSK nội soi dạ dày polype HĐ1',
        value: 'ksk_noisoidadaypolype_hd1',
      },
      {
        text: 'KSK nội soi dạ dày polype HĐ2',
        value: 'ksk_noisoidadaypolype_hd2',
      },
      {
        text: 'KSK nội soi dạ dày polype HĐ3',
        value: 'ksk_noisoidadaypolype_hd3',
      },
      {
        text: 'KSK nội soi đại tràng polype HĐ1',
        value: 'ksk_noisoidaitrangpolype_hd1',
      },
      {
        text: 'KSK nội soi đại tràng polype HĐ2',
        value: 'ksk_noisoidaitrangpolype_hd2',
      },
      {
        text: 'KSK nội soi đại tràng polype HĐ3',
        value: 'ksk_noisoidaitrangpolype_hd3',
      },
      {
        text: 'KSK gây mê nội soi dạ dày HĐ1',
        value: 'ksk_gaymenoisoidaday_hd1',
      },
      {
        text: 'KSK gây mê nội soi dạ dày HĐ2',
        value: 'ksk_gaymenoisoidaday_hd2',
      },
      {
        text: 'KSK gây mê nội soi dạ dày HĐ3',
        value: 'ksk_gaymenoisoidaday_hd3',
      },
      {
        text: 'KSK gây mê nội soi đại tràng HĐ1',
        value: 'ksk_gaymenoisoidaitrang_hd1',
      },
      {
        text: 'KSK gây mê nội soi đại tràng HĐ2',
        value: 'ksk_gaymenoisoidaitrang_hd2',
      },
      {
        text: 'KSK gây mê nội soi đại tràng HĐ3',
        value: 'ksk_gaymenoisoidaitrang_hd3',
      },
      {
        text: 'KSK gây mê nội soi dạ dày polype HĐ1',
        value: 'ksk_gaymenoisoidadaypolype_hd1',
      },
      {
        text: 'KSK gây mê nội soi dạ dày polype HĐ2',
        value: 'ksk_gaymenoisoidadaypolype_hd2',
      },
      {
        text: 'KSK gây mê nội soi dạ dày polype HĐ3',
        value: 'ksk_gaymenoisoidadaypolype_hd3',
      },
      {
        text: 'KSK gây mê nội soi đại tràng polype HĐ1',
        value: 'ksk_gaymenoisoidaitrangpolype_hd1',
      },
      {
        text: 'KSK gây mê nội soi đại tràng polype HĐ2',
        value: 'ksk_gaymenoisoidaitrangpolype_hd2',
      },
      {
        text: 'KSK gây mê nội soi đại tràng polype HĐ3',
        value: 'ksk_gaymenoisoidaitrangpolype_hd3',
      },
      { text: 'Tổng kết hồ sơ 4 tờ', value: 'ksk_tongkethoso_4to' },
      { text: 'Tổng kểt hồ sơ 1 tờ', value: 'ksk_tongkethoso_1to' },
      { text: 'Tổng kết hồ sơ Pru', value: 'ksk_tongkethoso_pru' },
      { text: 'DD làm hồ sơ 4 tờ', value: 'ksk_dieuduonglamhoso_4to' },
      { text: 'DD làm hồ sơ 1 tờ', value: 'ksk_dieuduonglamhoso_1to' },
      { text: 'DD dụng cụ', value: 'dd_dungcu' },

      { text: 'Khám Q7 DB', value: 'kham_q7_db' },
      { text: 'Khám Q7 BH', value: 'kham_q7_bh' },
      { text: 'Khám Q7 KL', value: 'kham_q7_kl' },
      { text: 'Thủ thuật Q7 DB', value: 'thuthuat_q7_db' },
      { text: 'Thủ thuật Q7 BH', value: 'thuthuat_q7_bh' },
      { text: 'Thủ thuật Q7 KL', value: 'thuthuat_q7_kl' },
      { text: 'Khám Visa HĐ1', value: 'ksk_khamvisa_hd1' },
      { text: 'Khám Visa HĐ2', value: 'ksk_khamvisa_hd2' },
      { text: 'Khám Visa HĐ3', value: 'ksk_khamvisa_hd3' },
      { text: 'CLS Visa HĐ1', value: 'ksk_clsvisa_hd1' },
      { text: 'CLS Visa HĐ2', value: 'ksk_clsvisa_hd2' },
      { text: 'CLS Visa HĐ3', value: 'ksk_clsvisa_hd3' },

      // Thêm các cột khác nếu cần
    ],
    headersNhanvien: [
      { text: 'Id nhân viên', value: 'id' },
      { text: 'Tên bác sĩ', value: 'full_name' },
    ],
    dialogEdit: false,
    dialogAdd: false,
    defaultItems: {
      nhanvien_id: null,
      tennhanvien: '',
      hang: '',
      chucvu: '',
      chuyenkhoa: '',
      remuneration_created: null,
      remuneration_updatedate: null,
      update_by: null,
      chidinh_cls: 0,
      chidinh_nsth: 0,
      chidinh_toandien: 0,
      chidinh_phauthuat: 0,
      gioithieungoai: 0,
      khamtoandien: 0,
      ngoaigio_bv: 0,
      dodakygiacngu: 0,
      kham_db: 0,
      kham_bh: 0,
      kham_kl: 0,
      taikham_db: 0,
      taikham_bh: 0,
      taikham_kl: 0,
      thcls_db: 0,
      thcls_bh: 0,
      thcls_kl: 0,
      thcls_ngoaigio_db: 0,
      thcls_ngoaigio_bh: 0,
      thcls_ngoaigio_kl: 0,
      thuthuat_db: 0,
      thuthuat_bh: 0,
      thuthuat_kl: 0,
      dientim_hh_db: 0,
      dientim_hh_bh: 0,
      dientim_hh_kl: 0,
      sieuam_db: 0,
      sieuam_bh: 0,
      sieuam_kl: 0,
      xquang_db: 0,
      xquang_bh: 0,
      xquang_kl: 0,
      doloangxuong_db: 0,
      doloangxuong_bh: 0,
      doloangxuong_kl: 0,
      gayme_db: 0,
      gayme_bh: 0,
      gayme_kl: 0,
      gayme_tmh_db: 0,
      gayme_tmh_bh: 0,
      gayme_tmh_kl: 0,
      gayme_th_db: 0,
      gayme_th_bh: 0,
      gayme_th_kl: 0,
      implant_1: 0,
      implant_2: 0,
      phauthuat_de: 0,
      phauthuat_trungbinh: 0,
      phauthuat_kho: 0,
      phauthuat_bsphu: 0,
      phauthuat_trubaohiem: 0,
      phauthuat_trubncu: 0,
      phauthuat_trudanbenh: 0,
      dieutrinoitru_db: 0,
      dieutrinoitru_bh: 0,
      dieutrinoitru_kl: 0,
      dieutrinoitru_dongia: 0,
      chamsocsauphauthuat_db: 0,
      chamsocsauphauthuat_bh: 0,
      chamsocsauphauthuat_kl: 0,
      ksk_congkham_tongquat_hd1: 0,
      ksk_congkham_tongquat_hd2: 0,
      ksk_congkham_tongquat_hd3: 0,
      ksk_congkham_chuyenkhoa_hd1: 0,
      ksk_congkham_chuyenkhoa_hd2: 0,
      ksk_congkham_chuyenkhoa_hd3: 0,
      ksk_cls_hd1: 0,
      ksk_cls_hd2: 0,
      ksk_cls_hd3: 0,
      ksk_sieuamdv1_hd1: 0,
      ksk_sieuamdv1_hd2: 0,
      ksk_sieuamdv1_hd3: 0,
      ksk_sieuamdv234_hd1: 0,
      ksk_sieuamdv234_hd2: 0,
      ksk_sieuamdv234_hd3: 0,
      ksk_khamphukhoa_hd1: 0,
      ksk_khamphukhoa_hd2: 0,
      ksk_khamphukhoa_hd3: 0,
      ksk_noisoiphukhoa_hd1: 0,
      ksk_noisoiphukhoa_hd2: 0,
      ksk_noisoiphukhoa_hd3: 0,
      ksk_soinhuomphukhoa_hd1: 0,
      ksk_soinhuomphukhoa_hd2: 0,
      ksk_soinhuomphukhoa_hd3: 0,
      ksk_dientim_hd1: 0,
      ksk_dientim_hd2: 0,
      ksk_dientim_hd3: 0,
      ksk_hohap_hd1: 0,
      ksk_hohap_hd2: 0,
      ksk_hohap_hd3: 0,
      ksk_ct_hd1: 0,
      ksk_ct_hd2: 0,
      ksk_ct_hd3: 0,
      ksk_doloangxuong_hd1: 0,
      ksk_doloangxuong_hd2: 0,
      ksk_doloangxuong_hd3: 0,
      ksk_xquang_hd1: 0,
      ksk_xquang_hd2: 0,
      ksk_xquang_hd3: 0,
      ksk_thinhhoc_hd1: 0,
      ksk_thinhhoc_hd2: 0,
      ksk_thinhhoc_hd3: 0,
      ksk_sieuamtim_hd1: 0,
      ksk_sieuamtim_hd2: 0,
      ksk_sieuamtim_hd3: 0,
      ksk_sieuammachmau_hd1: 0,
      ksk_sieuammachmau_hd2: 0,
      ksk_sieuammachmau_hd3: 0,
      ksk_mrhm_hd1: 0,
      ksk_mrhm_hd2: 0,
      ksk_mrhm_hd3: 0,
      ksk_chupnhuanh_hd1: 0,
      ksk_chupnhuanh_hd2: 0,
      ksk_chupnhuanh_hd3: 0,
      ksk_noisoinbi_hd1: 0,
      ksk_noisoinbi_hd2: 0,
      ksk_noisoinbi_hd3: 0,
      ksk_khamtieuhoa_hd1: 0,
      ksk_khamtieuhoa_hd2: 0,
      ksk_khamtieuhoa_hd3: 0,
      ksk_noisoidaday_hd1: 0,
      ksk_noisoidaday_hd2: 0,
      ksk_noisoidaday_hd3: 0,
      ksk_noisoidaitrang_hd1: 0,
      ksk_noisoidaitrang_hd2: 0,
      ksk_noisoidaitrang_hd3: 0,
      ksk_noisoidadaypolype_hd1: 0,
      ksk_noisoidadaypolype_hd2: 0,
      ksk_noisoidadaypolype_hd3: 0,
      ksk_noisoidaitrangpolype_hd1: 0,
      ksk_noisoidaitrangpolype_hd2: 0,
      ksk_noisoidaitrangpolype_hd3: 0,
      ksk_gaymenoisoidaday_hd1: 0,
      ksk_gaymenoisoidaday_hd2: 0,
      ksk_gaymenoisoidaday_hd3: 0,
      ksk_gaymenoisoidaitrang_hd1: 0,
      ksk_gaymenoisoidaitrang_hd2: 0,
      ksk_gaymenoisoidaitrang_hd3: 0,
      ksk_gaymenoisoidadaypolype_hd1: 0,
      ksk_gaymenoisoidadaypolype_hd2: 0,
      ksk_gaymenoisoidadaypolype_hd3: 0,
      ksk_gaymenoisoidaitrangpolype_hd1: 0,
      ksk_gaymenoisoidaitrangpolype_hd2: 0,
      ksk_gaymenoisoidaitrangpolype_hd3: 0,
      ksk_tongkethoso_4to: 0,
      ksk_tongkethoso_1to: 0,
      ksk_tongkethoso_pru: 0,
      ksk_dieuduonglamhoso_1to: 0,
      ksk_dieuduonglamhoso_4to: 0,
      dd_dungcu: 0,
      kham_q7_db: 0,
      kham_q7_bh: 0,
      kham_q7_kl: 0,
      thuthuat_q7_db: 0,
      thuthuat_q7_bh: 0,
      thuthuat_q7_kl: 0,
      ksk_khamvisa_hd1: 0,
      ksk_khamvisa_hd2: 0,
      ksk_khamvisa_hd3: 0,
      ksk_clsvisa_hd1: 0,
      ksk_clsvisa_hd2: 0,
      ksk_clsvisa_hd3: 0,
    },
    addItems: {
      nhanvien_id: '',
      tennhanvien: '',
      hang: '',
      chucvu: '',
      chuyenkhoa: '',
      remuneration_created: '',
      remuneration_updatedate: '',
      update_by: '',
      chidinh_cls: 0,
      chidinh_nsth: 0,
      chidinh_toandien: 0,
      chidinh_phauthuat: 0,
      gioithieungoai: 0,
      khamtoandien: 0,
      ngoaigio_bv: 0,
      dodakygiacngu: 0,
      kham_db: 0,
      kham_bh: 0,
      kham_kl: 0,
      taikham_db: 0,
      taikham_bh: 0,
      taikham_kl: 0,
      thcls_db: 0,
      thcls_bh: 0,
      thcls_kl: 0,
      thcls_ngoaigio_db: 0,
      thcls_ngoaigio_bh: 0,
      thcls_ngoaigio_kl: 0,
      thuthuat_db: 0,
      thuthuat_bh: 0,
      thuthuat_kl: 0,
      dientim_hh_db: 0,
      dientim_hh_bh: 0,
      dientim_hh_kl: 0,
      sieuam_db: 0,
      sieuam_bh: 0,
      sieuam_kl: 0,
      xquang_db: 0,
      xquang_bh: 0,
      xquang_kl: 0,
      doloangxuong_db: 0,
      doloangxuong_bh: 0,
      doloangxuong_kl: 0,
      gayme_db: 0,
      gayme_bh: 0,
      gayme_kl: 0,
      gayme_tmh_db: 0,
      gayme_tmh_bh: 0,
      gayme_tmh_kl: 0,
      gayme_th_db: 0,
      gayme_th_bh: 0,
      gayme_th_kl: 0,
      implant_1: 0,
      implant_2: 0,
      phauthuat_de: 0,
      phauthuat_trungbinh: 0,
      phauthuat_kho: 0,
      phauthuat_bsphu: 0,
      phauthuat_trubaohiem: 0,
      phauthuat_trubncu: 0,
      phauthuat_trudanbenh: 0,
      dieutrinoitru_db: 0,
      dieutrinoitru_bh: 0,
      dieutrinoitru_kl: 0,
      dieutrinoitru_dongia: 0,
      chamsocsauphauthuat_db: 0,
      chamsocsauphauthuat_bh: 0,
      chamsocsauphauthuat_kl: 0,
      ksk_congkham_tongquat_hd1: 0,
      ksk_congkham_tongquat_hd2: 0,
      ksk_congkham_tongquat_hd3: 0,
      ksk_congkham_chuyenkhoa_hd1: 0,
      ksk_congkham_chuyenkhoa_hd2: 0,
      ksk_congkham_chuyenkhoa_hd3: 0,
      ksk_cls_hd1: 0,
      ksk_cls_hd2: 0,
      ksk_cls_hd3: 0,
      ksk_sieuamdv1_hd1: 0,
      ksk_sieuamdv1_hd2: 0,
      ksk_sieuamdv1_hd3: 0,
      ksk_sieuamdv234_hd1: 0,
      ksk_sieuamdv234_hd2: 0,
      ksk_sieuamdv234_hd3: 0,
      ksk_khamphukhoa_hd1: 0,
      ksk_khamphukhoa_hd2: 0,
      ksk_khamphukhoa_hd3: 0,
      ksk_noisoiphukhoa_hd1: 0,
      ksk_noisoiphukhoa_hd2: 0,
      ksk_noisoiphukhoa_hd3: 0,
      ksk_soinhuomphukhoa_hd1: 0,
      ksk_soinhuomphukhoa_hd2: 0,
      ksk_soinhuomphukhoa_hd3: 0,
      ksk_dientim_hd1: 0,
      ksk_dientim_hd2: 0,
      ksk_dientim_hd3: 0,
      ksk_hohap_hd1: 0,
      ksk_hohap_hd2: 0,
      ksk_hohap_hd3: 0,
      ksk_ct_hd1: 0,
      ksk_ct_hd2: 0,
      ksk_ct_hd3: 0,
      ksk_doloangxuong_hd1: 0,
      ksk_doloangxuong_hd2: 0,
      ksk_doloangxuong_hd3: 0,
      ksk_xquang_hd1: 0,
      ksk_xquang_hd2: 0,
      ksk_xquang_hd3: 0,
      ksk_thinhhoc_hd1: 0,
      ksk_thinhhoc_hd2: 0,
      ksk_thinhhoc_hd3: 0,
      ksk_sieuamtim_hd1: 0,
      ksk_sieuamtim_hd2: 0,
      ksk_sieuamtim_hd3: 0,
      ksk_sieuammachmau_hd1: 0,
      ksk_sieuammachmau_hd2: 0,
      ksk_sieuammachmau_hd3: 0,
      ksk_mrhm_hd1: 0,
      ksk_mrhm_hd2: 0,
      ksk_mrhm_hd3: 0,
      ksk_chupnhuanh_hd1: 0,
      ksk_chupnhuanh_hd2: 0,
      ksk_chupnhuanh_hd3: 0,
      ksk_noisoinbi_hd1: 0,
      ksk_noisoinbi_hd2: 0,
      ksk_noisoinbi_hd3: 0,
      ksk_khamtieuhoa_hd1: 0,
      ksk_khamtieuhoa_hd2: 0,
      ksk_khamtieuhoa_hd3: 0,
      ksk_noisoidaday_hd1: 0,
      ksk_noisoidaday_hd2: 0,
      ksk_noisoidaday_hd3: 0,
      ksk_noisoidaitrang_hd1: 0,
      ksk_noisoidaitrang_hd2: 0,
      ksk_noisoidaitrang_hd3: 0,
      ksk_noisoidadaypolype_hd1: 0,
      ksk_noisoidadaypolype_hd2: 0,
      ksk_noisoidadaypolype_hd3: 0,
      ksk_noisoidaitrangpolype_hd1: 0,
      ksk_noisoidaitrangpolype_hd2: 0,
      ksk_noisoidaitrangpolype_hd3: 0,
      ksk_gaymenoisoidaday_hd1: 0,
      ksk_gaymenoisoidaday_hd2: 0,
      ksk_gaymenoisoidaday_hd3: 0,
      ksk_gaymenoisoidaitrang_hd1: 0,
      ksk_gaymenoisoidaitrang_hd2: 0,
      ksk_gaymenoisoidaitrang_hd3: 0,
      ksk_gaymenoisoidadaypolype_hd1: 0,
      ksk_gaymenoisoidadaypolype_hd2: 0,
      ksk_gaymenoisoidadaypolype_hd3: 0,
      ksk_gaymenoisoidaitrangpolype_hd1: 0,
      ksk_gaymenoisoidaitrangpolype_hd2: 0,
      ksk_gaymenoisoidaitrangpolype_hd3: 0,
      ksk_tongkethoso_4to: 0,
      ksk_tongkethoso_1to: 0,
      ksk_tongkethoso_pru: 0,
      ksk_dieuduonglamhoso_1to: 0,
      ksk_dieuduonglamhoso_4to: 0,
      dd_dungcu: 0,
      created_by: '',
      tamngung: 0,
      kham_q7_db: 0,
      kham_q7_bh: 0,
      kham_q7_kl: 0,
      thuthuat_q7_db: 0,
      thuthuat_q7_bh: 0,
      thuthuat_q7_kl: 0,
      ksk_khamvisa_hd1: 0,
      ksk_khamvisa_hd2: 0,
      ksk_khamvisa_hd3: 0,
      ksk_clsvisa_hd1: 0,
      ksk_clsvisa_hd2: 0,
      ksk_clsvisa_hd3: 0,
    },

    editItems: {
      //nhanvien_id: '',
      tennhanvien: '',
      hang: '',
      chucvu: '',
      chuyenkhoa: '',
      remuneration_created: null,
      remuneration_updatedate: null,
      update_by: '',
      chidinh_cls: 0,
      chidinh_nsth: 0,
      chidinh_toandien: 0,
      chidinh_phauthuat: 0,
      gioithieungoai: 0,
      khamtoandien: 0,
      ngoaigio_bv: 0,
      dodakygiacngu: 0,
      kham_db: 0,
      kham_bh: 0,
      kham_kl: 0,
      taikham_db: 0,
      taikham_bh: 0,
      taikham_kl: 0,
      thcls_db: 0,
      thcls_bh: 0,
      thcls_kl: 0,
      thcls_ngoaigio_db: 0,
      thcls_ngoaigio_bh: 0,
      thcls_ngoaigio_kl: 0,
      thuthuat_db: 0,
      thuthuat_bh: 0,
      thuthuat_kl: 0,
      dientim_hh_db: 0,
      dientim_hh_bh: 0,
      dientim_hh_kl: 0,
      sieuam_db: 0,
      sieuam_bh: 0,
      sieuam_kl: 0,
      xquang_db: 0,
      xquang_bh: 0,
      xquang_kl: 0,
      doloangxuong_db: 0,
      doloangxuong_bh: 0,
      doloangxuong_kl: 0,
      gayme_db: 0,
      gayme_bh: 0,
      gayme_kl: 0,
      gayme_tmh_db: 0,
      gayme_tmh_bh: 0,
      gayme_tmh_kl: 0,
      gayme_th_db: 0,
      gayme_th_bh: 0,
      gayme_th_kl: 0,
      implant_1: 0,
      implant_2: 0,
      phauthuat_de: 0,
      phauthuat_trungbinh: 0,
      phauthuat_kho: 0,
      phauthuat_bsphu: 0,
      phauthuat_trubaohiem: 0,
      phauthuat_trubncu: 0,
      phauthuat_trudanbenh: 0,
      dieutrinoitru_db: 0,
      dieutrinoitru_bh: 0,
      dieutrinoitru_kl: 0,
      dieutrinoitru_dongia: 0,
      chamsocsauphauthuat_db: 0,
      chamsocsauphauthuat_bh: 0,
      chamsocsauphauthuat_kl: 0,
      ksk_congkham_tongquat_hd1: 0,
      ksk_congkham_tongquat_hd2: 0,
      ksk_congkham_tongquat_hd3: 0,
      ksk_congkham_chuyenkhoa_hd1: 0,
      ksk_congkham_chuyenkhoa_hd2: 0,
      ksk_congkham_chuyenkhoa_hd3: 0,
      ksk_cls_hd1: 0,
      ksk_cls_hd2: 0,
      ksk_cls_hd3: 0,
      ksk_sieuamdv1_hd1: 0,
      ksk_sieuamdv1_hd2: 0,
      ksk_sieuamdv1_hd3: 0,
      ksk_sieuamdv234_hd1: 0,
      ksk_sieuamdv234_hd2: 0,
      ksk_sieuamdv234_hd3: 0,
      ksk_khamphukhoa_hd1: 0,
      ksk_khamphukhoa_hd2: 0,
      ksk_khamphukhoa_hd3: 0,
      ksk_noisoiphukhoa_hd1: 0,
      ksk_noisoiphukhoa_hd2: 0,
      ksk_noisoiphukhoa_hd3: 0,
      ksk_soinhuomphukhoa_hd1: 0,
      ksk_soinhuomphukhoa_hd2: 0,
      ksk_soinhuomphukhoa_hd3: 0,
      ksk_dientim_hd1: 0,
      ksk_dientim_hd2: 0,
      ksk_dientim_hd3: 0,
      ksk_hohap_hd1: 0,
      ksk_hohap_hd2: 0,
      ksk_hohap_hd3: 0,
      ksk_ct_hd1: 0,
      ksk_ct_hd2: 0,
      ksk_ct_hd3: 0,
      ksk_doloangxuong_hd1: 0,
      ksk_doloangxuong_hd2: 0,
      ksk_doloangxuong_hd3: 0,
      ksk_xquang_hd1: 0,
      ksk_xquang_hd2: 0,
      ksk_xquang_hd3: 0,
      ksk_thinhhoc_hd1: 0,
      ksk_thinhhoc_hd2: 0,
      ksk_thinhhoc_hd3: 0,
      ksk_sieuamtim_hd1: 0,
      ksk_sieuamtim_hd2: 0,
      ksk_sieuamtim_hd3: 0,
      ksk_sieuammachmau_hd1: 0,
      ksk_sieuammachmau_hd2: 0,
      ksk_sieuammachmau_hd3: 0,
      ksk_mrhm_hd1: 0,
      ksk_mrhm_hd2: 0,
      ksk_mrhm_hd3: 0,
      ksk_chupnhuanh_hd1: 0,
      ksk_chupnhuanh_hd2: 0,
      ksk_chupnhuanh_hd3: 0,
      ksk_noisoinbi_hd1: 0,
      ksk_noisoinbi_hd2: 0,
      ksk_noisoinbi_hd3: 0,
      ksk_khamtieuhoa_hd1: 0,
      ksk_khamtieuhoa_hd2: 0,
      ksk_khamtieuhoa_hd3: 0,
      ksk_noisoidaday_hd1: 0,
      ksk_noisoidaday_hd2: 0,
      ksk_noisoidaday_hd3: 0,
      ksk_noisoidaitrang_hd1: 0,
      ksk_noisoidaitrang_hd2: 0,
      ksk_noisoidaitrang_hd3: 0,
      ksk_noisoidadaypolype_hd1: 0,
      ksk_noisoidadaypolype_hd2: 0,
      ksk_noisoidadaypolype_hd3: 0,
      ksk_noisoidaitrangpolype_hd1: 0,
      ksk_noisoidaitrangpolype_hd2: 0,
      ksk_noisoidaitrangpolype_hd3: 0,
      ksk_gaymenoisoidaday_hd1: 0,
      ksk_gaymenoisoidaday_hd2: 0,
      ksk_gaymenoisoidaday_hd3: 0,
      ksk_gaymenoisoidaitrang_hd1: 0,
      ksk_gaymenoisoidaitrang_hd2: 0,
      ksk_gaymenoisoidaitrang_hd3: 0,
      ksk_gaymenoisoidadaypolype_hd1: 0,
      ksk_gaymenoisoidadaypolype_hd2: 0,
      ksk_gaymenoisoidadaypolype_hd3: 0,
      ksk_gaymenoisoidaitrangpolype_hd1: 0,
      ksk_gaymenoisoidaitrangpolype_hd2: 0,
      ksk_gaymenoisoidaitrangpolype_hd3: 0,
      ksk_tongkethoso_4to: 0,
      ksk_tongkethoso_1to: 0,
      ksk_tongkethoso_pru: 0,
      ksk_dieuduonglamhoso_1to: 0,
      ksk_dieuduonglamhoso_4to: 0,
      dd_dungcu: 0,
      created_by: '',
      tamngung: 0,
      kham_q7_db: 0,
      kham_q7_bh: 0,
      kham_q7_kl: 0,
      thuthuat_q7_db: 0,
      thuthuat_q7_bh: 0,
      thuthuat_q7_kl: 0,
      ksk_khamvisa_hd1: 0,
      ksk_khamvisa_hd2: 0,
      ksk_khamvisa_hd3: 0,
      ksk_clsvisa_hd1: 0,
      ksk_clsvisa_hd2: 0,
      ksk_clsvisa_hd3: 0,
    },
    deleteItems: {
      nhanvien_id: '',
      tennhanvien: '',
      hang: '',
      chucvu: '',
      chuyenkhoa: '',
      remuneration_created: null,
      remuneration_updatedate: null,
      update_by: null,
      chidinh_cls: 0,
      chidinh_nsth: 0,
      chidinh_toandien: 0,
      chidinh_phauthuat: 0,
      gioithieungoai: 0,
      khamtoandien: 0,
      ngoaigio_bv: 0,
      dodakygiacngu: 0,
      kham_db: 0,
      kham_bh: 0,
      kham_kl: 0,
      taikham_db: 0,
      taikham_bh: 0,
      taikham_kl: 0,
      thcls_db: 0,
      thcls_bh: 0,
      thcls_kl: 0,
      thcls_ngoaigio_db: 0,
      thcls_ngoaigio_bh: 0,
      thcls_ngoaigio_kl: 0,
      thuthuat_db: 0,
      thuthuat_bh: 0,
      thuthuat_kl: 0,
      dientim_hh_db: 0,
      dientim_hh_bh: 0,
      dientim_hh_kl: 0,
      sieuam_db: 0,
      sieuam_bh: 0,
      sieuam_kl: 0,
      xquang_db: 0,
      xquang_bh: 0,
      xquang_kl: 0,
      doloangxuong_db: 0,
      doloangxuong_bh: 0,
      doloangxuong_kl: 0,
      gayme_db: 0,
      gayme_bh: 0,
      gayme_kl: 0,
      gayme_tmh_db: 0,
      gayme_tmh_bh: 0,
      gayme_tmh_kl: 0,
      gayme_th_db: 0,
      gayme_th_bh: 0,
      gayme_th_kl: 0,
      implant_1: 0,
      implant_2: 0,
      phauthuat_de: 0,
      phauthuat_trungbinh: 0,
      phauthuat_kho: 0,
      phauthuat_bsphu: 0,
      phauthuat_trubaohiem: 0,
      phauthuat_trubncu: 0,
      phauthuat_trudanbenh: 0,
      dieutrinoitru_db: 0,
      dieutrinoitru_bh: 0,
      dieutrinoitru_kl: 0,
      dieutrinoitru_dongia: 0,
      chamsocsauphauthuat_db: 0,
      chamsocsauphauthuat_bh: 0,
      chamsocsauphauthuat_kl: 0,
      ksk_congkham_tongquat_hd1: 0,
      ksk_congkham_tongquat_hd2: 0,
      ksk_congkham_tongquat_hd3: 0,
      ksk_congkham_chuyenkhoa_hd1: 0,
      ksk_congkham_chuyenkhoa_hd2: 0,
      ksk_congkham_chuyenkhoa_hd3: 0,
      ksk_cls_hd1: 0,
      ksk_cls_hd2: 0,
      ksk_cls_hd3: 0,
      ksk_sieuamdv1_hd1: 0,
      ksk_sieuamdv1_hd2: 0,
      ksk_sieuamdv1_hd3: 0,
      ksk_sieuamdv234_hd1: 0,
      ksk_sieuamdv234_hd2: 0,
      ksk_sieuamdv234_hd3: 0,
      ksk_khamphukhoa_hd1: 0,
      ksk_khamphukhoa_hd2: 0,
      ksk_khamphukhoa_hd3: 0,
      ksk_noisoiphukhoa_hd1: 0,
      ksk_noisoiphukhoa_hd2: 0,
      ksk_noisoiphukhoa_hd3: 0,
      ksk_soinhuomphukhoa_hd1: 0,
      ksk_soinhuomphukhoa_hd2: 0,
      ksk_soinhuomphukhoa_hd3: 0,
      ksk_dientim_hd1: 0,
      ksk_dientim_hd2: 0,
      ksk_dientim_hd3: 0,
      ksk_hohap_hd1: 0,
      ksk_hohap_hd2: 0,
      ksk_hohap_hd3: 0,
      ksk_ct_hd1: 0,
      ksk_ct_hd2: 0,
      ksk_ct_hd3: 0,
      ksk_doloangxuong_hd1: 0,
      ksk_doloangxuong_hd2: 0,
      ksk_doloangxuong_hd3: 0,
      ksk_xquang_hd1: 0,
      ksk_xquang_hd2: 0,
      ksk_xquang_hd3: 0,
      ksk_thinhhoc_hd1: 0,
      ksk_thinhhoc_hd2: 0,
      ksk_thinhhoc_hd3: 0,
      ksk_sieuamtim_hd1: 0,
      ksk_sieuamtim_hd2: 0,
      ksk_sieuamtim_hd3: 0,
      ksk_sieuammachmau_hd1: 0,
      ksk_sieuammachmau_hd2: 0,
      ksk_sieuammachmau_hd3: 0,
      ksk_mrhm_hd1: 0,
      ksk_mrhm_hd2: 0,
      ksk_mrhm_hd3: 0,
      ksk_chupnhuanh_hd1: 0,
      ksk_chupnhuanh_hd2: 0,
      ksk_chupnhuanh_hd3: 0,
      ksk_noisoinbi_hd1: 0,
      ksk_noisoinbi_hd2: 0,
      ksk_noisoinbi_hd3: 0,
      ksk_khamtieuhoa_hd1: 0,
      ksk_khamtieuhoa_hd2: 0,
      ksk_khamtieuhoa_hd3: 0,
      ksk_noisoidaday_hd1: 0,
      ksk_noisoidaday_hd2: 0,
      ksk_noisoidaday_hd3: 0,
      ksk_noisoidaitrang_hd1: 0,
      ksk_noisoidaitrang_hd2: 0,
      ksk_noisoidaitrang_hd3: 0,
      ksk_noisoidadaypolype_hd1: 0,
      ksk_noisoidadaypolype_hd2: 0,
      ksk_noisoidadaypolype_hd3: 0,
      ksk_noisoidaitrangpolype_hd1: 0,
      ksk_noisoidaitrangpolype_hd2: 0,
      ksk_noisoidaitrangpolype_hd3: 0,
      ksk_gaymenoisoidaday_hd1: 0,
      ksk_gaymenoisoidaday_hd2: 0,
      ksk_gaymenoisoidaday_hd3: 0,
      ksk_gaymenoisoidaitrang_hd1: 0,
      ksk_gaymenoisoidaitrang_hd2: 0,
      ksk_gaymenoisoidaitrang_hd3: 0,
      ksk_gaymenoisoidadaypolype_hd1: 0,
      ksk_gaymenoisoidadaypolype_hd2: 0,
      ksk_gaymenoisoidadaypolype_hd3: 0,
      ksk_gaymenoisoidaitrangpolype_hd1: 0,
      ksk_gaymenoisoidaitrangpolype_hd2: 0,
      ksk_gaymenoisoidaitrangpolype_hd3: 0,
      ksk_tongkethoso_4to: 0,
      ksk_tongkethoso_1to: 0,
      ksk_tongkethoso_pru: 0,
      ksk_dieuduonglamhoso_1to: 0,
      ksk_dieuduonglamhoso_4to: 0,
      dd_dungcu: 0,
      created_by: '',
      tamngung: 0,
      kham_q7_db: 0,
      kham_q7_bh: 0,
      kham_q7_kl: 0,
      thuthuat_q7_db: 0,
      thuthuat_q7_bh: 0,
      thuthuat_q7_kl: 0,
      ksk_khamvisa_hd1: 0,
      ksk_khamvisa_hd2: 0,
      ksk_khamvisa_hd3: 0,
      ksk_clsvisa_hd1: 0,
      ksk_clsvisa_hd2: 0,
      ksk_clsvisa_hd3: 0,
    },
  }),

  created() {
    this.getListbacsi()
    this.editItems.update_by = this.$store.state.auth.user.Name
    this.addItems.created_by = this.$store.state.auth.user.Name
    console.log(this.editItems.update_by)
  },
  methods: {
    formatDate(date) {
      return vnDateTimeFormat(date)
    },
    handleFileChange() {
      this.selectedFile = this.$refs.fileInput.files[0]
    },
    async fetchDoctorName() {
      try {
        const response = await axios.get(
          `${this.apiUrl}/gettennhanvien/${this.addItems.nhanvien_id}`
        )
        const doctor = response.data
        console.log(response.data)
        console.log(doctor[0].full_name)

        if (doctor) {
          // Nếu tìm thấy bác sĩ, cập nhật tên vào addItems.TenNhanVien
          this.addItems.tennhanvien = doctor[0].full_name
        } else {
          // Nếu không tìm thấy, có thể đặt tên về rỗng hoặc thông báo khác
          this.addItems.tennhanvien = ''
        }
      } catch (error) {
        console.error('Error fetching doctor information:', error)
        this.addItems.tennhanvien = ''
        // Xử lý lỗi nếu có
      }

      // Các phương thức khác của bạn...
    },
    async getListbacsi() {
      try {
        const response = await axios.get(`${this.apiUrl}/getthulao`)
        this.Listbacsi = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async getListnhanvien() {
      try {
        const response = await axios.get(`${this.apiUrl}/getnhanvienpg`)
        this.Listnhanvien = response.data
        console.log(this.Listnhanvien)
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
          `${this.apiUrl}/insert-remuneration`,
          this.addItems,
          { validateStatus: false }
        )

        console.log(response)
        if (response.status === 201) {
          const successMessage = response.data.message

          this.dialogMessage = successMessage
          this.alertshow = true

          this.addItems = { ...this.addItems }
          this.getListbacsi()
          this.dialogAdd = false

          //this.sendLogToServer('add', this.addItems)
        } else if (response.status === 400) {
          const successMessage = response.data.message
          this.dialogMessage = successMessage
          this.alertshow = true
        } else if (response.status === 500) {
          const successMessage = response.data.error
          this.dialogMessage = successMessage
          this.alertshow = true
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          const successMessage = error.response.data.error
          this.dialogMessage = successMessage
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
        console.log(this.editItems.nhanvien_id)
      }
      // Hiển thị dialogEdit
      this.dialogEdit = true
      // Hiển thị dialogEdit
    },
    async saveEdit() {
      try {
        this.editItems.update_by = this.$store.state.auth.user.Name
        const response = await axios.put(
          `${this.apiUrl}/update-remuneration/${this.editItems.nhanvien_id}`,
          this.editItems,
          { validateStatus: false }
        )
        // In ra kết quả từ endpoint sau khi gọi thành công
        this.dialogEdit = false // Đóng dialog sau khi gửi request thành công
        if (response.status === 200) {
          const successMessage = response.data.message
          console.log(response)
          this.dialogMessage = successMessage
          this.alertshow = true
          this.getListbacsi()
        } else {
          // Xử lý thông báo lỗi nếu có
          const successMessage = response.data.error
          this.dialogMessage = successMessage
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
      this.editItems = { ...item }
      for (let key in this.editItems) {
        if (!this.editItems[key]) {
          this.editItems[key] = 0
        }
        console.log(this.editItems.nhanvien_id)
      }
      this.deleteDialog = true
    },
    async deleteItem() {
      try {
        // Xóa mục từ server
        this.editItems.tamngung = 1
        this.editItems.update_by = this.$store.state.auth.user.Name
        console.log(this.editItems.update_by)
        console.log(this.editItems.tamngung)
        const deleteResponse = await axios.put(
          `${this.apiUrl}/delete-remuneration/${this.editItems.nhanvien_id}`,
          this.editItems,
          { validateStatus: false }
        )
        if (deleteResponse.status === 200) {
          const successMessage = deleteResponse.data.message

          this.dialogMessage = successMessage
          this.alertshow = true
          this.getListbacsi()
          this.deleteDialog = false
          this.selectedNhanVienId = null

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
        { header: 'Remunera Id ', key: 'remuneration_id' },
        { header: 'Tên nhân viên', key: 'tennhanvien' },
        { header: 'Hạng', key: 'hang' },
        { header: 'Chức vụ', key: 'chucvu' },
        { header: 'Chuyên khoa', key: 'chuyenkhoa' },
        { header: 'Ngày tạo', key: 'remuneration_created' },
        { header: 'Người tạo', key: 'created_by' },
        { header: 'Ngày cập nhật', key: 'remuneration_updatedate' },
        { header: 'Người cập nhật', key: 'update_by' },
        { header: 'Chỉ định CLS', key: 'chidinh_cls' },
        { header: 'Chỉ định NSTH', key: 'chidinh_nsth' },
        { header: 'Chỉ định toàn diện', key: 'chidinh_toandien' },
        { header: 'Chỉ định phẫu thuật', key: 'chidinh_phauthuat' },
        { header: 'Giới thiệu ngoài', key: 'gioithieungoai' },
        { header: 'Khám toàn diện', key: 'khamtoandien' },
        { header: 'Ngoài giờ BV', key: 'ngoaigio_bv' },
        { header: 'Đo đa ký giấc ngủ', key: 'dodakygiacngu' },
        { header: 'Khám bệnh (dẫn bệnh)', key: 'kham_db' },
        { header: 'Khám bệnh (bảo hiểm)', key: 'kham_bh' },
        { header: 'Khám bệnh (khách lẻ)', key: 'kham_kl' },
        { header: 'Tái khám (dẫn bệnh)', key: 'taikham_db' },
        { header: 'Tái khám (bảo hiểm)', key: 'taikham_bh' },
        { header: 'Tái khám (khách lẻ)', key: 'taikham_kl' },
        { header: 'THCLS (dẫn bệnh)', key: 'thcls_db' },
        { header: 'THCLS (bảo hiểm)', key: 'thcls_bh' },
        { header: 'THCLS (khách lẻ)', key: 'thcls_kl' },
        { header: 'THCLS ngoài giờ (dẫn bệnh)', key: 'thcls_ngoaigio_db' },
        { header: 'THCLS ngoài giờ (bảo hiểm)', key: 'thcls_ngoaigio_bh' },
        { header: 'THCLS ngoài giờ (khách lẻ)', key: 'thcls_ngoaigio_kl' },
        { header: 'Thủ thuật (dẫn bệnh)', key: 'thuthuat_db' },
        { header: 'Thủ thuật (bảo hiểm)', key: 'thuthuat_bh' },
        { header: 'Thủ thuật (khách lẻ)', key: 'thuthuat_kl' },
        { header: 'Điện tim (dẫn bệnh)', key: 'dientim_hh_db' },
        { header: 'Điện tim (bảo hiểm)', key: 'dientim_hh_bh' },
        { header: 'Điện tim (khách lẻ)', key: 'dientim_hh_kl' },
        { header: 'Siêu âm (dẫn bệnh)', key: 'sieuam_db' },
        { header: 'Siêu âm (bảo hiểm)', key: 'sieuam_bh' },
        { header: 'Siêu âm (khách lẻ)', key: 'sieuam_kl' },
        { header: 'X-quang (dẫn bệnh)', key: 'xquang_db' },
        { header: 'X-quang (bảo hiểm)', key: 'xquang_bh' },
        { header: 'X-quang (khách lẻ)', key: 'xquang_kl' },
        { header: 'Đo loãng xương (dẫn bệnh)', key: 'doloangxuong_db' },
        { header: 'Đo loãng xương (bảo hiểm)', key: 'doloangxuong_bh' },
        { header: 'Đo loãng xương (khách lẻ)', key: 'doloangxuong_kl' },
        { header: 'Gây mê (dẫn bệnh)', key: 'gayme_db' },
        { header: 'Gây mê (bảo hiểm)', key: 'gayme_bh' },
        { header: 'Gây mê (khách lẻ)', key: 'gayme_kl' },
        { header: 'Gây mê TMH (dẫn bệnh)', key: 'gayme_tmh_db' },
        { header: 'Gây mê TMH (bảo hiểm)', key: 'gayme_tmh_bh' },
        { header: 'Gây mê TMH (khách lẻ)', key: 'gayme_tmh_kl' },
        { header: 'Gây mê tiêu hóa (dẫn bệnh)', key: 'gayme_th_db' },
        { header: 'Gây mê tiêu hóa (bảo hiểm)', key: 'gayme_th_bh' },
        { header: 'Gây mê tiêu hóa (khách lẻ)', key: 'gayme_th_kl' },
        { header: 'Implant 1', key: 'implant_1' },
        { header: 'Implant 2', key: 'implant_2' },
        { header: 'Phẫu thuật dễ', key: 'phauthuat_de' },
        { header: 'Phẫu thuật trung bình', key: 'phauthuat_trungbinh' },
        { header: 'Phẫu thuật khó', key: 'phauthuat_kho' },
        { header: 'Phẫu thuật BS phụ', key: 'phauthuat_bsphu' },
        { header: 'Phẫu thuật (trừ bảo hiểm)', key: 'phauthuat_trubaohiem' },
        { header: 'Phẫu thuật (trừ BN cũ)', key: 'phauthuat_trubncu' },
        { header: 'Phẫu thuật (trừ dẫn bệnh)', key: 'phauthuat_trudanbenh' },
        { header: 'Điều trị nội trú (dẫn bệnh)', key: 'dieutrinoitru_db' },
        { header: 'Điều trị nội trú (bảo hiểm)', key: 'dieutrinoitru_bh' },
        { header: 'Điều trị nội trú (khách lẻ)', key: 'dieutrinoitru_kl' },
        { header: 'Điều trị nội trú đơn giá', key: 'dieutrinoitru_dongia' },
        { header: 'Chăm sóc sau PT (dẫn bệnh)', key: 'chamsocsauphauthuat_db' },
        { header: 'Chăm sóc sau PT (bảo hiểm)', key: 'chamsocsauphauthuat_bh' },
        { header: 'Chăm sóc sau PT (khách lẻ)', key: 'chamsocsauphauthuat_kl' },
        { header: 'KSK tổng quát HĐ1', key: 'ksk_congkham_tongquat_hd1' },
        { header: 'KSK tổng quát HĐ2', key: 'ksk_congkham_tongquat_hd2' },
        { header: 'KSK tổng quát HĐ3', key: 'ksk_congkham_tongquat_hd3' },
        { header: 'KSK chuyên khoa HĐ1', key: 'ksk_congkham_chuyenkhoa_hd1' },
        { header: 'KSK chuyên khoa HĐ2', key: 'ksk_congkham_chuyenkhoa_hd2' },
        { header: 'KSK chuyên khoa HĐ3', key: 'ksk_congkham_chuyenkhoa_hd3' },
        { header: 'KSK CLS HĐ1', key: 'ksk_cls_hd1' },
        { header: 'KSK CLS HĐ2', key: 'ksk_cls_hd2' },
        { header: 'KSK CLS HĐ3', key: 'ksk_cls_hd3' },
        { header: 'KSK siêu âm DV1 HĐ1', key: 'ksk_sieuamdv1_hd1' },
        { header: 'KSK siêu âm DV1 HĐ2', key: 'ksk_sieuamdv1_hd2' },
        { header: 'KSK siêu âm DV1 HĐ3', key: 'ksk_sieuamdv1_hd3' },
        { header: 'KSK siêu âm DV2 HĐ1', key: 'ksk_sieuamdv234_hd1' },
        { header: 'KSK siêu âm DV2 HĐ2', key: 'ksk_sieuamdv234_hd2' },
        { header: 'KSK siêu âm DV2 HĐ3', key: 'ksk_sieuamdv234_hd3' },
        { header: 'KSK khám phụ khoa HĐ1', key: 'ksk_khamphukhoa_hd1' },
        { header: 'KSK khám phụ khoa HĐ2', key: 'ksk_khamphukhoa_hd2' },
        { header: 'KSK khám phụ khoa HĐ3', key: 'ksk_khamphukhoa_hd3' },
        { header: 'KSK nội soi phụ khoa HĐ1', key: 'ksk_noisoiphukhoa_hd1' },
        { header: 'KSK nội soi phụ khoa HĐ2', key: 'ksk_noisoiphukhoa_hd2' },
        { header: 'KSK nội soi phụ khoa HĐ3', key: 'ksk_noisoiphukhoa_hd3' },
        {
          header: 'KSK soi nhuộm phụ khoa HĐ1',
          key: 'ksk_soinhuomphukhoa_hd1',
        },
        {
          header: 'KSK soi nhuộm phụ khoa HĐ2',
          key: 'ksk_soinhuomphukhoa_hd2',
        },
        {
          header: 'KSK soi nhuộm phụ khoa HĐ3',
          key: 'ksk_soinhuomphukhoa_hd3',
        },
        { header: 'KSK điện tim HĐ1', key: 'ksk_dientim_hd1' },
        { header: 'KSK điện tim HĐ2', key: 'ksk_dientim_hd2' },
        { header: 'KSK điện tim HĐ3', key: 'ksk_dientim_hd3' },
        { header: 'KSK hô hấp HĐ1', key: 'ksk_hohap_hd1' },
        { header: 'KSK hô hấp HĐ2', key: 'ksk_hohap_hd2' },
        { header: 'KSK hô hấp HĐ3', key: 'ksk_hohap_hd3' },
        { header: 'KSK CT HĐ1', key: 'ksk_ct_hd1' },
        { header: 'KSK CT HĐ2', key: 'ksk_ct_hd2' },
        { header: 'KSK CT HĐ3', key: 'ksk_ct_hd3' },
        { header: 'KSK ĐLX HĐ1', key: 'ksk_doloangxuong_hd1' },
        { header: 'KSK ĐLX HĐ2', key: 'ksk_doloangxuong_hd2' },
        { header: 'KSK ĐLX HĐ3', key: 'ksk_doloangxuong_hd3' },
        { header: 'KSK X-quang HĐ1', key: 'ksk_xquang_hd1' },
        { header: 'KSK X-quang HĐ2', key: 'ksk_xquang_hd2' },
        { header: 'KSK X-quang HĐ3', key: 'ksk_xquang_hd3' },
        { header: 'KSK thính học HĐ1', key: 'ksk_thinhhoc_hd1' },
        { header: 'KSK thính học HĐ2', key: 'ksk_thinhhoc_hd2' },
        { header: 'KSK thính học HĐ3', key: 'ksk_thinhhoc_hd3' },
        { header: 'KSK siêu âm tim HĐ1', key: 'ksk_sieuamtim_hd1' },
        { header: 'KSK siêu âm tim HĐ2', key: 'ksk_sieuamtim_hd2' },
        { header: 'KSK siêu âm tim HĐ3', key: 'ksk_sieuamtim_hd3' },
        { header: 'KSK siêu âm mạch máu HĐ1', key: 'ksk_sieuammachmau_hd1' },
        { header: 'KSK siêu âm mạch máu HĐ2', key: 'ksk_sieuammachmau_hd2' },
        { header: 'KSK siêu âm mạch máu HĐ3', key: 'ksk_sieuammachmau_hd3' },
        { header: 'KSK RHM HĐ1', key: 'ksk_mrhm_hd1' },
        { header: 'KSK RHM HĐ2', key: 'ksk_mrhm_hd2' },
        { header: 'KSK RHM HĐ3', key: 'ksk_mrhm_hd3' },
        { header: 'KSK chụp nhũ ảnh HĐ1', key: 'ksk_chupnhuanh_hd1' },
        { header: 'KSK chụp nhũ ảnh HĐ2', key: 'ksk_chupnhuanh_hd2' },
        { header: 'KSK chụp nhũ ảnh HĐ3', key: 'ksk_chupnhuanh_hd3' },
        { header: 'KSK nội soi NBI HĐ1', key: 'ksk_noisoinbi_hd1' },
        { header: 'KSK nội soi NBI HĐ2', key: 'ksk_noisoinbi_hd2' },
        { header: 'KSK nội soi NBI HĐ3', key: 'ksk_noisoinbi_hd3' },
        { header: 'KSK khám tiêu hóa HĐ1', key: 'ksk_khamtieuhoa_hd1' },
        { header: 'KSK khám tiêu hóa HĐ2', key: 'ksk_khamtieuhoa_hd2' },
        { header: 'KSK khám tiêu hóa HĐ3', key: 'ksk_khamtieuhoa_hd3' },
        { header: 'KSK nội soi dạ dày HĐ1', key: 'ksk_noisoidaday_hd1' },
        { header: 'KSK nội soi dạ dày HĐ2', key: 'ksk_noisoidaday_hd2' },
        { header: 'KSK nội soi dạ dày HĐ3', key: 'ksk_noisoidaday_hd3' },
        { header: 'KSK nội soi đại tràng HĐ1', key: 'ksk_noisoidaitrang_hd1' },
        { header: 'KSK nội soi đại tràng HĐ2', key: 'ksk_noisoidaitrang_hd2' },
        { header: 'KSK nội soi đại tràng HĐ3', key: 'ksk_noisoidaitrang_hd3' },
        {
          header: 'KSK nội soi dạ dày polype HĐ1',
          key: 'ksk_noisoidadaypolype_hd1',
        },
        {
          header: 'KSK nội soi dạ dày polype HĐ2',
          key: 'ksk_noisoidadaypolype_hd2',
        },
        {
          header: 'KSK nội soi dạ dày polype HĐ3',
          key: 'ksk_noisoidadaypolype_hd3',
        },
        {
          header: 'KSK nội soi đại tràng polype HĐ1',
          key: 'ksk_noisoidaitrangpolype_hd1',
        },
        {
          header: 'KSK nội soi đại tràng polype HĐ2',
          key: 'ksk_noisoidaitrangpolype_hd2',
        },
        {
          header: 'KSK nội soi đại tràng polype HĐ3',
          key: 'ksk_noisoidaitrangpolype_hd3',
        },
        {
          header: 'KSK gây mê nội soi dạ dày HĐ1',
          key: 'ksk_gaymenoisoidaday_hd1',
        },
        {
          header: 'KSK gây mê nội soi dạ dày HĐ2',
          key: 'ksk_gaymenoisoidaday_hd2',
        },
        {
          header: 'KSK gây mê nội soi dạ dày HĐ3',
          key: 'ksk_gaymenoisoidaday_hd3',
        },
        {
          header: 'KSK gây mê nội soi đại tràng HĐ1',
          key: 'ksk_gaymenoisoidaitrang_hd1',
        },
        {
          header: 'KSK gây mê nội soi đại tràng HĐ2',
          key: 'ksk_gaymenoisoidaitrang_hd2',
        },
        {
          header: 'KSK gây mê nội soi đại tràng HĐ3',
          key: 'ksk_gaymenoisoidaitrang_hd3',
        },
        {
          header: 'KSK gây mê nội soi dạ dày polype HĐ1',
          key: 'ksk_gaymenoisoidadaypolype_hd1',
        },
        {
          header: 'KSK gây mê nội soi dạ dày polype HĐ2',
          key: 'ksk_gaymenoisoidadaypolype_hd2',
        },
        {
          header: 'KSK gây mê nội soi dạ dày polype HĐ3',
          key: 'ksk_gaymenoisoidadaypolype_hd3',
        },
        {
          header: 'KSK gây mê nội soi đại tràng polype HĐ1',
          key: 'ksk_gaymenoisoidaitrangpolype_hd1',
        },
        {
          header: 'KSK gây mê nội soi đại tràng polype HĐ2',
          key: 'ksk_gaymenoisoidaitrangpolype_hd2',
        },
        {
          header: 'KSK gây mê nội soi đại tràng polype HĐ3',
          key: 'ksk_gaymenoisoidaitrangpolype_hd3',
        },
        { header: 'Tổng kết hồ sơ 4 tờ', key: 'ksk_tongkethoso_4to' },
        { header: 'Tổng kểt hồ sơ 1 tờ', key: 'ksk_tongkethoso_1to' },
        { header: 'Tổng kết hồ sơ Pru', key: 'ksk_tongkethoso_pru' },
        { header: 'DD làm hồ sơ 4 tờ', key: 'ksk_dieuduonglamhoso_4to' },
        { header: 'DD làm hồ sơ 1 tờ', key: 'ksk_dieuduonglamhoso_1to' },
        { header: 'DD dụng cụ', key: 'dd_dungcu' },
        { header: 'Khám Q7 DB', key: 'kham_q7_db' },
        { header: 'Khám Q7 BH', key: 'kham_q7_bh' },
        { header: 'Khám Q7 KL', key: 'kham_q7_kl' },
        { header: 'Thủ thuật Q7 DB', key: 'thuthuat_q7_db' },
        { header: 'Thủ thuật Q7 BH', key: 'thuthuat_q7_bh' },
        { header: 'Thủ thuật Q7 KL', key: 'thuthuat_q7_kl' },

        // Thêm các cột khác nếu cần
      ]

      // Thêm header vào worksheet
      worksheet.columns = columns

      // Thêm dữ liệu từ Listbacsi vào worksheet
      this.Listbacsi.forEach((item, index) => {
        const row = {
          STT: index + 1,
          remuneration_id: item.remuneration_id,
          tennhanvien: item.tennhanvien,
          hang: item.hang,
          chucvu: item.chucvu,
          chuyenkhoa: item.chuyenkhoa,
          remuneration_created: item.remuneration_created,
          created_by: item.created_by,
          remuneration_updatedate: item.remuneration_updatedate,
          update_by: item.update_by,
          chidinh_cls: item.chidinh_cls,
          chidinh_nsth: item.chidinh_nsth,
          chidinh_toandien: item.chidinh_toandien,
          chidinh_phauthuat: item.chidinh_phauthuat,
          gioithieungoai: item.gioithieungoai,
          khamtoandien: item.khamtoandien,
          ngoaigio_bv: item.ngoaigio_bv,
          dodakygiacngu: item.dodakygiacngu,
          kham_db: item.kham_db,
          kham_bh: item.kham_bh,
          kham_kl: item.kham_kl,
          taikham_db: item.taikham_db,
          taikham_bh: item.taikham_bh,
          taikham_kl: item.taikham_kl,
          thcls_db: item.thcls_db,
          thcls_bh: item.thcls_bh,
          thcls_kl: item.thcls_kl,
          thcls_ngoaigio_db: item.thcls_ngoaigio_db,
          thcls_ngoaigio_bh: item.thcls_ngoaigio_bh,
          thcls_ngoaigio_kl: item.thcls_ngoaigio_kl,
          thuthuat_db: item.thuthuat_db,
          thuthuat_bh: item.thuthuat_bh,
          thuthuat_kl: item.thuthuat_kl,
          dientim_hh_db: item.dientim_hh_db,
          dientim_hh_bh: item.dientim_hh_bh,
          dientim_hh_kl: item.dientim_hh_kl,
          sieuam_db: item.sieuam_db,
          sieuam_bh: item.sieuam_bh,
          sieuam_kl: item.sieuam_kl,
          xquang_db: item.xquang_db,
          xquang_bh: item.xquang_bh,
          xquang_kl: item.xquang_kl,
          doloangxuong_db: item.doloangxuong_db,
          doloangxuong_bh: item.doloangxuong_bh,
          doloangxuong_kl: item.doloangxuong_kl,
          gayme_db: item.gayme_db,
          gayme_bh: item.gayme_bh,
          gayme_kl: item.gayme_kl,
          gayme_tmh_db: item.gayme_tmh_db,
          gayme_tmh_bh: item.gayme_tmh_bh,
          gayme_tmh_kl: item.gayme_tmh_kl,
          gayme_th_db: item.gayme_th_db,
          gayme_th_bh: item.gayme_th_bh,
          gayme_th_kl: item.gayme_th_kl,
          implant_1: item.implant_1,
          implant_2: item.implant_2,
          phauthuat_de: item.phauthuat_de,
          phauthuat_trungbinh: item.phauthuat_trungbinh,
          phauthuat_kho: item.phauthuat_kho,
          phauthuat_bsphu: item.phauthuat_bsphu,
          phauthuat_trubaohiem: item.phauthuat_trubaohiem,
          phauthuat_trubncu: item.phauthuat_trubncu,
          phauthuat_trudanbenh: item.phauthuat_trudanbenh,
          dieutrinoitru_db: item.dieutrinoitru_db,
          dieutrinoitru_bh: item.dieutrinoitru_bh,
          dieutrinoitru_kl: item.dieutrinoitru_kl,
          dieutrinoitru_dongia: item.dieutrinoitru_dongia,
          chamsocsauphauthuat_db: item.chamsocsauphauthuat_db,
          chamsocsauphauthuat_bh: item.chamsocsauphauthuat_bh,
          chamsocsauphauthuat_kl: item.chamsocsauphauthuat_kl,
          ksk_congkham_tongquat_hd1: item.ksk_congkham_tongquat_hd1,
          ksk_congkham_tongquat_hd2: item.ksk_congkham_tongquat_hd2,
          ksk_congkham_tongquat_hd3: item.ksk_congkham_tongquat_hd3,
          ksk_congkham_chuyenkhoa_hd1: item.ksk_congkham_chuyenkhoa_hd1,
          ksk_congkham_chuyenkhoa_hd2: item.ksk_congkham_chuyenkhoa_hd2,
          ksk_congkham_chuyenkhoa_hd3: item.ksk_congkham_chuyenkhoa_hd3,
          ksk_cls_hd1: item.ksk_cls_hd1,
          ksk_cls_hd2: item.ksk_cls_hd2,
          ksk_cls_hd3: item.ksk_cls_hd3,
          ksk_sieuamdv1_hd1: item.ksk_sieuamdv1_hd1,
          ksk_sieuamdv1_hd2: item.ksk_sieuamdv1_hd2,
          ksk_sieuamdv1_hd3: item.ksk_sieuamdv1_hd3,
          ksk_sieuamdv234_hd1: item.ksk_sieuamdv234_hd1,
          ksk_sieuamdv234_hd2: item.ksk_sieuamdv234_hd2,
          ksk_sieuamdv234_hd3: item.ksk_sieuamdv234_hd3,
          ksk_khamphukhoa_hd1: item.ksk_khamphukhoa_hd1,
          ksk_khamphukhoa_hd2: item.ksk_khamphukhoa_hd2,
          ksk_khamphukhoa_hd3: item.ksk_khamphukhoa_hd3,
          ksk_noisoiphukhoa_hd1: item.ksk_noisoiphukhoa_hd1,
          ksk_noisoiphukhoa_hd2: item.ksk_noisoiphukhoa_hd2,
          ksk_noisoiphukhoa_hd3: item.ksk_noisoiphukhoa_hd3,
          ksk_soinhuomphukhoa_hd1: item.ksk_soinhuomphukhoa_hd1,
          ksk_soinhuomphukhoa_hd2: item.ksk_soinhuomphukhoa_hd2,
          ksk_soinhuomphukhoa_hd3: item.ksk_soinhuomphukhoa_hd3,
          ksk_dientim_hd1: item.ksk_dientim_hd1,
          ksk_dientim_hd2: item.ksk_dientim_hd2,
          ksk_dientim_hd3: item.ksk_dientim_hd3,
          ksk_hohap_hd1: item.ksk_hohap_hd1,
          ksk_hohap_hd2: item.ksk_hohap_hd2,
          ksk_hohap_hd3: item.ksk_hohap_hd3,
          ksk_ct_hd1: item.ksk_ct_hd1,
          ksk_ct_hd2: item.ksk_ct_hd2,
          ksk_ct_hd3: item.ksk_ct_hd3,
          ksk_doloangxuong_hd1: item.ksk_doloangxuong_hd1,
          ksk_doloangxuong_hd2: item.ksk_doloangxuong_hd2,
          ksk_doloangxuong_hd3: item.ksk_doloangxuong_hd3,
          ksk_xquang_hd1: item.ksk_xquang_hd1,
          ksk_xquang_hd2: item.ksk_xquang_hd2,
          ksk_xquang_hd3: item.ksk_xquang_hd3,
          ksk_thinhhoc_hd1: item.ksk_thinhhoc_hd1,
          ksk_thinhhoc_hd2: item.ksk_thinhhoc_hd2,
          ksk_thinhhoc_hd3: item.ksk_thinhhoc_hd3,
          ksk_sieuamtim_hd1: item.ksk_sieuamtim_hd1,
          ksk_sieuamtim_hd2: item.ksk_sieuamtim_hd2,
          ksk_sieuamtim_hd3: item.ksk_sieuamtim_hd3,
          ksk_sieuammachmau_hd1: item.ksk_sieuammachmau_hd1,
          ksk_sieuammachmau_hd2: item.ksk_sieuammachmau_hd2,
          ksk_sieuammachmau_hd3: item.ksk_sieuammachmau_hd3,
          ksk_mrhm_hd1: item.ksk_mrhm_hd1,
          ksk_mrhm_hd2: item.ksk_mrhm_hd2,
          ksk_mrhm_hd3: item.ksk_mrhm_hd3,
          ksk_chupnhuanh_hd1: item.ksk_chupnhuanh_hd1,
          ksk_chupnhuanh_hd2: item.ksk_chupnhuanh_hd2,
          ksk_chupnhuanh_hd3: item.ksk_chupnhuanh_hd3,
          ksk_noisoinbi_hd1: item.ksk_noisoinbi_hd1,
          ksk_noisoinbi_hd2: item.ksk_noisoinbi_hd2,
          ksk_noisoinbi_hd3: item.ksk_noisoinbi_hd3,
          ksk_khamtieuhoa_hd1: item.ksk_khamtieuhoa_hd1,
          ksk_khamtieuhoa_hd2: item.ksk_khamtieuhoa_hd2,
          ksk_khamtieuhoa_hd3: item.ksk_khamtieuhoa_hd3,
          ksk_noisoidaday_hd1: item.ksk_noisoidaday_hd1,
          ksk_noisoidaday_hd2: item.ksk_noisoidaday_hd2,
          ksk_noisoidaday_hd3: item.ksk_noisoidaday_hd3,
          ksk_noisoidaitrang_hd1: item.ksk_noisoidaitrang_hd1,
          ksk_noisoidaitrang_hd2: item.ksk_noisoidaitrang_hd2,
          ksk_noisoidaitrang_hd3: item.ksk_noisoidaitrang_hd3,
          ksk_noisoidadaypolype_hd1: item.ksk_noisoidadaypolype_hd1,
          ksk_noisoidadaypolype_hd2: item.ksk_noisoidadaypolype_hd2,
          ksk_noisoidadaypolype_hd3: item.ksk_noisoidadaypolype_hd3,
          ksk_noisoidaitrangpolype_hd1: item.ksk_noisoidaitrangpolype_hd1,
          ksk_noisoidaitrangpolype_hd2: item.ksk_noisoidaitrangpolype_hd2,
          ksk_noisoidaitrangpolype_hd3: item.ksk_noisoidaitrangpolype_hd3,
          ksk_gaymenoisoidaday_hd1: item.ksk_gaymenoisoidaday_hd1,
          ksk_gaymenoisoidaday_hd2: item.ksk_gaymenoisoidaday_hd2,
          ksk_gaymenoisoidaday_hd3: item.ksk_gaymenoisoidaday_hd3,
          ksk_gaymenoisoidaitrang_hd1: item.ksk_gaymenoisoidaitrang_hd1,
          ksk_gaymenoisoidaitrang_hd2: item.ksk_gaymenoisoidaitrang_hd2,
          ksk_gaymenoisoidaitrang_hd3: item.ksk_gaymenoisoidaitrang_hd3,
          ksk_gaymenoisoidadaypolype_hd1: item.ksk_gaymenoisoidadaypolype_hd1,
          ksk_gaymenoisoidadaypolype_hd2: item.ksk_gaymenoisoidadaypolype_hd2,
          ksk_gaymenoisoidadaypolype_hd3: item.ksk_gaymenoisoidadaypolype_hd3,
          ksk_gaymenoisoidaitrangpolype_hd1:
            item.ksk_gaymenoisoidaitrangpolype_hd1,
          ksk_gaymenoisoidaitrangpolype_hd2:
            item.ksk_gaymenoisoidaitrangpolype_hd2,
          ksk_gaymenoisoidaitrangpolype_hd3:
            item.ksk_gaymenoisoidaitrangpolype_hd3,
          ksk_tongkethoso_4to: item.ksk_tongkethoso_4to,
          ksk_tongkethoso_1to: item.ksk_tongkethoso_1to,
          ksk_tongkethoso_pru: item.ksk_tongkethoso_pru,
          ksk_dieuduonglamhoso_4to: item.ksk_dieuduonglamhoso_4to,
          ksk_dieuduonglamhoso_1to: item.ksk_dieuduonglamhoso_1to,
          dd_dungcu: item.dd_dungcu,
          kham_q7_db: item.kham_q7_db,
          kham_q7_bh: item.kham_q7_bh,
          kham_q7_kl: item.kham_q7_kl,
          thuthuat_q7_db: item.thuthuat_q7_db,
          thuthuat_q7_bh: item.thuthuat_q7_bh,
          thuthuat_q7_kl: item.thuthuat_q7_kl,
          ksk_khamvisa_hd1: 0,
          ksk_khamvisa_hd2: 0,
          ksk_khamvisa_hd3: 0,
          ksk_clsvisa_hd1: 0,
          ksk_clsvisa_hd2: 0,
          ksk_clsvisa_hd3: 0,
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
        a.download = 'DanhsachbacsiNewHis.xlsx'
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
