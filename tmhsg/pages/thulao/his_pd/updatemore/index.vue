<template>
  <v-card-text>
    <h2 style="color: black">Sửa hàng loạt theo hạng bác sĩ</h2>
    <v-col
      cols="12"
      style="
        position: sticky;
        top: 64px;
        z-index: 100;
        display: flex;
        justify-content: end;
      "
    >
      <v-btn class="mx-2" fab :color="'blue'" @click="clickSave">
        <v-icon dark> mdi-content-save-all </v-icon>
      </v-btn>
    </v-col>
    <v-container>
      <v-row class="mb-4">
        <v-col
          ><v-text-field v-model="editItems.hang" label="Hạng"></v-text-field
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
              v-model="editItems.gayme_bh"
              label="Gây mê TMH (BH)"
              type="number"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-text-field
              v-model="editItems.gayme_kl"
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
  </v-card-text>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      apiUrl: process.env.API_BASE_URL,
      dialogMessage: '',
      alertshow: false,

      editItems: {
        //nhanvien_id: '',
        //tennhanvien: '',
        hang: '',
        //chucvu: '',
        //chuyenkhoa: '',
        remuneration_created: null,
        remuneration_updatedate: null,
        update_by: '',
        chidinh_cls: null,
        chidinh_nsth: null,
        chidinh_toandien: null,
        chidinh_phauthuat: null,
        gioithieungoai: null,
        khamtoandien: null,
        ngoaigio_bv: null,
        dodakygiacngu: null,
        kham_db: null,
        kham_bh: null,
        kham_kl: null,
        taikham_db: null,
        taikham_bh: null,
        taikham_kl: null,
        thcls_db: null,
        thcls_bh: null,
        thcls_kl: null,
        thcls_ngoaigio_db: null,
        thcls_ngoaigio_bh: null,
        thcls_ngoaigio_kl: null,
        thuthuat_db: null,
        thuthuat_bh: null,
        thuthuat_kl: null,
        dientim_hh_db: null,
        dientim_hh_bh: null,
        dientim_hh_kl: null,
        sieuam_db: null,
        sieuam_bh: null,
        sieuam_kl: null,
        xquang_db: null,
        xquang_bh: null,
        xquang_kl: null,
        doloangxuong_db: null,
        doloangxuong_bh: null,
        doloangxuong_kl: null,
        gayme_db: null,
        gayme_bh: null,
        gayme_kl: null,
        gayme_tmh_db: null,
        gayme_tmh_bh: null,
        gayme_tmh_kl: null,
        gayme_th_db: null,
        gayme_th_bh: null,
        gayme_th_kl: null,
        implant_1: null,
        implant_2: null,
        phauthuat_de: null,
        phauthuat_trungbinh: null,
        phauthuat_kho: null,
        phauthuat_bsphu: null,
        phauthuat_trubaohiem: null,
        phauthuat_trubncu: null,
        phauthuat_trudanbenh: null,
        dieutrinoitru_db: null,
        dieutrinoitru_bh: null,
        dieutrinoitru_kl: null,
        dieutrinoitru_dongia: null,
        chamsocsauphauthuat_db: null,
        chamsocsauphauthuat_bh: null,
        chamsocsauphauthuat_kl: null,
        ksk_congkham_tongquat_hd1: null,
        ksk_congkham_tongquat_hd2: null,
        ksk_congkham_tongquat_hd3: null,
        ksk_congkham_chuyenkhoa_hd1: null,
        ksk_congkham_chuyenkhoa_hd2: null,
        ksk_congkham_chuyenkhoa_hd3: null,
        ksk_cls_hd1: null,
        ksk_cls_hd2: null,
        ksk_cls_hd3: null,
        ksk_sieuamdv1_hd1: null,
        ksk_sieuamdv1_hd2: null,
        ksk_sieuamdv1_hd3: null,
        ksk_sieuamdv234_hd1: null,
        ksk_sieuamdv234_hd2: null,
        ksk_sieuamdv234_hd3: null,
        ksk_khamphukhoa_hd1: null,
        ksk_khamphukhoa_hd2: null,
        ksk_khamphukhoa_hd3: null,
        ksk_noisoiphukhoa_hd1: null,
        ksk_noisoiphukhoa_hd2: null,
        ksk_noisoiphukhoa_hd3: null,
        ksk_soinhuomphukhoa_hd1: null,
        ksk_soinhuomphukhoa_hd2: null,
        ksk_soinhuomphukhoa_hd3: null,
        ksk_dientim_hd1: null,
        ksk_dientim_hd2: null,
        ksk_dientim_hd3: null,
        ksk_hohap_hd1: null,
        ksk_hohap_hd2: null,
        ksk_hohap_hd3: null,
        ksk_ct_hd1: null,
        ksk_ct_hd2: null,
        ksk_ct_hd3: null,
        ksk_doloangxuong_hd1: null,
        ksk_doloangxuong_hd2: null,
        ksk_doloangxuong_hd3: null,
        ksk_xquang_hd1: null,
        ksk_xquang_hd2: null,
        ksk_xquang_hd3: null,
        ksk_thinhhoc_hd1: null,
        ksk_thinhhoc_hd2: null,
        ksk_thinhhoc_hd3: null,
        ksk_sieuamtim_hd1: null,
        ksk_sieuamtim_hd2: null,
        ksk_sieuamtim_hd3: null,
        ksk_sieuammachmau_hd1: null,
        ksk_sieuammachmau_hd2: null,
        ksk_sieuammachmau_hd3: null,
        ksk_mrhm_hd1: null,
        ksk_mrhm_hd2: null,
        ksk_mrhm_hd3: null,
        ksk_chupnhuanh_hd1: null,
        ksk_chupnhuanh_hd2: null,
        ksk_chupnhuanh_hd3: null,
        ksk_noisoinbi_hd1: null,
        ksk_noisoinbi_hd2: null,
        ksk_noisoinbi_hd3: null,
        ksk_khamtieuhoa_hd1: null,
        ksk_khamtieuhoa_hd2: null,
        ksk_khamtieuhoa_hd3: null,
        ksk_noisoidaday_hd1: null,
        ksk_noisoidaday_hd2: null,
        ksk_noisoidaday_hd3: null,
        ksk_noisoidaitrang_hd1: null,
        ksk_noisoidaitrang_hd2: null,
        ksk_noisoidaitrang_hd3: null,
        ksk_noisoidadaypolype_hd1: null,
        ksk_noisoidadaypolype_hd2: null,
        ksk_noisoidadaypolype_hd3: null,
        ksk_noisoidaitrangpolype_hd1: null,
        ksk_noisoidaitrangpolype_hd2: null,
        ksk_noisoidaitrangpolype_hd3: null,
        ksk_gaymenoisoidaday_hd1: null,
        ksk_gaymenoisoidaday_hd2: null,
        ksk_gaymenoisoidaday_hd3: null,
        ksk_gaymenoisoidaitrang_hd1: null,
        ksk_gaymenoisoidaitrang_hd2: null,
        ksk_gaymenoisoidaitrang_hd3: null,
        ksk_gaymenoisoidadaypolype_hd1: null,
        ksk_gaymenoisoidadaypolype_hd2: null,
        ksk_gaymenoisoidadaypolype_hd3: null,
        ksk_gaymenoisoidaitrangpolype_hd1: null,
        ksk_gaymenoisoidaitrangpolype_hd2: null,
        ksk_gaymenoisoidaitrangpolype_hd3: null,
        ksk_tongkethoso_4to: null,
        ksk_tongkethoso_1to: null,
        ksk_tongkethoso_pru: null,
        ksk_dieuduonglamhoso_1to: null,
        ksk_dieuduonglamhoso_4to: null,
        dd_dungcu: null,

        created_by: '',
        tamngung: null,
        kham_q7_db: null,
        kham_q7_bh: null,
        kham_q7_kl: null,
        thuthuat_q7_db: null,
        thuthuat_q7_bh: null,
        thuthuat_q7_kl: null,
        ksk_khamvisa_hd1: null,
        ksk_khamvisa_hd2: null,
        ksk_khamvisa_hd3: null,
        ksk_clsvisa_hd1: null,
        ksk_clsvisa_hd2: null,
        ksk_clsvisa_hd3: null,
      },
    }
  },
  methods: {
    clickSave() {
      this.saveEditMore()
    },
    async saveEditMore() {
      try {
        this.editItems.update_by = this.$store.state.auth.user.Name

        const response = await axios.put(
          `${this.apiUrl}/update-remuneration-hang/${this.editItems.hang}`,
          this.editItems,
          { validateStatus: false }
        )
        if (response.status === 200) {
          const successMessage = response.data.message

          this.dialogMessage = successMessage
          this.alertshow = true
        } else {
          const errorMessage = response.data.error
          this.dialogMessage = errorMessage
          this.alertshow = true
        }
      } catch (error) {
        console.error('Lỗi khi cập nhật thông tin:', error)
        this.dialogMessage = error.message
        this.alertshow = true
      }
    },
  },
}
</script>
<style></style>
