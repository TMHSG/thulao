<template>
  <v-app>
    <v-navigation-drawer app color="#0d47a1!important" permanent>
      <v-list-item link to="/apptmhsg" style="padding: 0">
        <img
          src="http://192.168.1.250/_nuxt/img/logo-taimuihongsg.70ce818.jpg"
          height="120"
          width="100%"
          alt="logo"
          style="padding: 4px"
        />
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-group v-if="activeButton === 'benhvien'">
        <v-list class="custom-title">
          <v-list-item link to="/thulao/benhvien/congkham">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao công khám</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/cdcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao CĐ CLS</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/gayme">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao gây mê</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/thcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao TH CLS</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/thuthuat">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao Thủ Thuật</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/cdpt">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao chỉ định phẫu thuật</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/phauthuat">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao phẫu thuật</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/chamsocsaupt">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao chăm sóc sau PT</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/dieutrinoitru">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao điều trị nội trú</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/ngoaigio">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao ngoài giờ</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/benhvien/tonghop">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao tổng hợp</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item
            v-if="showAdminListItem"
            link
            to="/thulao/benhvien/admin"
          >
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tỷ Lệ Thù Lao</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-if="showAdminListItem"
            link
            to="/thulao/benhvien/hangbs"
          >
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Hạng bác sĩ</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-list-item-group>

      <v-list-item-group v-if="activeButton === 'quan7'">
        <v-list class="custom-title">
          <v-list-item link to="/thulao/q7/congkham">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao công khám</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/q7/thuthuat">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao thủ thuật</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link to="/thulao/q7/cdcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao CĐ CLS</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link to="/thulao/q7/thcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao TH CLS</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link to="/thulao/q7/gayme">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao gây mê</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/q7/tonghop">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù Lao Tổng hợp</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-if="showAdminListItem" link to="/thulao/q7/admin">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tỷ Lệ Thù Lao</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-list-item-group>

      <v-list-item-group v-if="activeButton === '9-15'">
        <v-list class="custom-title">
          <v-list-item link to="/thulao/915/congkham">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao công khám</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/thuthuat">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao thủ thuật</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/cdcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao CĐ CLS</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/thcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao TH CLS</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/gayme">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao gây mê</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/ngoaigio">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao ngoài giờ</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/clskskdk">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao CLSKSKDK</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/gaymeksk">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao gây mê ksk</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/congkhamkskdk">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao công khám kskdk</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/ksktd">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao KSK toàn diện</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/tongkeths">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao tổng kết hs</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/tonghopdv">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao tổng hợp DV</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/tonghopksk">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao tổng hợp KSK</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/ngoaivien">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >KSK ngoại viện</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/ngoaivienvaonoivien">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Ngoại viện vào nội viện</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/915/dieuduonglamhsksk">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >ĐD làm HSKSK</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-if="showAdminListItem" link to="/thulao/915/admin">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tỷ Lệ Thù Lao</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-list-item-group>
      <v-list-item-group v-if="activeButton === '6-8'">
        <v-list class="custom-title">
          <v-list-item link to="/thulao/68/congkham">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao công khám</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/congkhambh">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao công khám (BH)</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/thuthuat">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao thủ thuật</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/thuthuatbh">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao thủ thuật (BH)</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/thcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao TH CLS</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/thclsbh">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao TH CLS (BH)</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/gayme">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao gây mê</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/gaymebh">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao gây mê (BH)</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/cdcls">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù lao CĐ CLS</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/68/tonghop">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Thù Lao Tổng hợp</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-if="showAdminListItem" link to="/thulao/68/admin">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tỷ Lệ Thù Lao</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-list-item-group>

      <v-list-item-group v-if="activeButton === 'newhis'">
        <v-list class="custom-title">
          <v-list-item link to="/thulao/his_pd/tonghopdv_bhyt">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp DV BHYT</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/his_pd/tonghopdv">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp DV</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/his_pd/chidinhekipphauthuat">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Chỉ định/Ekip PT</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/his_pd/chamsocsaupt">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Chăm sóc sau PT</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link to="/thulao/his_pd/dieutrinoitru">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Điều trị nội trú</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link to="/thulao/his_pd/tonghopksk">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp KSK</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link to="/thulao/his_pd/tonghopksk_visa">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp KSK Visa</v-list-item-title
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item link to="/thulao/his_pd/tonghopksk_ngoaivien">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp KSK ngoại viện
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/his_pd/tonghopksk_bsketluan">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp BS kết luận</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/thulao/his_pd/tonghopksk_ddketluan">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tổng hợp DD kết luận</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-if="showAdminListItem" link to="/thulao/his_pd/admin">
            <v-list-item-icon>
              <v-icon>mdi-chart-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="custom-title"
              >Tỷ Lệ Thù Lao</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar app id="app-bar" color="#0d47a1!important">
      <v-btn
        v-if="showThulao"
        text
        class="mr-4"
        :style="{
          backgroundColor:
            activeButton === 'benhvien' ? '#03A9F4' : 'transparent',
        }"
        @click="showList('benhvien')"
        color="white"
      >
        Bệnh Viện
      </v-btn>
      <v-btn
        v-if="showThulao"
        text
        class="mr-4"
        :style="{
          backgroundColor: activeButton === '9-15' ? '#03A9F4' : 'transparent',
        }"
        @click="showList('9-15')"
        color="white"
      >
        9-15
      </v-btn>
      <v-btn
        v-if="showThulao"
        text
        class="mr-4"
        :style="{
          backgroundColor: activeButton === '6-8' ? '#03A9F4' : 'transparent',
        }"
        @click="showList('6-8')"
        color="white"
      >
        6-8
      </v-btn>

      <v-btn
        v-if="showThulao"
        text
        class="mr-4"
        :style="{
          backgroundColor: activeButton === 'quan7' ? '#03A9F4' : 'transparent',
        }"
        @click="showList('quan7')"
        color="white"
      >
        Quận 7
      </v-btn>
      <v-btn
        v-if="showThulao"
        text
        class="mr-4"
        :style="{
          backgroundColor:
            activeButton === 'newhis' ? '#03A9F4' : 'transparent',
        }"
        @click="showList('newhis')"
        color="white"
      >
        New His
      </v-btn>
      <v-menu offset-y v-if="isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="ml-auto" style="color: white">
            {{ userName }}
          </v-btn>
        </template>
        <v-list-item-group>
          <v-list-item @click="changePassword">
            <v-list-item-title class="not-selected"
              >Thông tin tài khoản</v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="showAdministratorItem" @click="taotaikhoan">
            <v-list-item-title class="not-selected"
              >Tạo tài khoản</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title class="not-selected"
              >Đăng xuất</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-menu>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      showAdminListItem: false,
      showAdministratorItem: false,
      activeButton: '',
      userName: '',
      isLoggedIn: this.$store.state.auth.isLoggedIn,
    }
  },
  computed: {
    showThulao() {
      return this.$store.state.showThulao.isThulaoVisible
    },
  },
  created() {
    const isLoggedIn = this.$store.state.auth.isLoggedIn
    const userRole = this.$store.state.auth.user.role
    if (isLoggedIn && userRole === 'Administrator') {
      this.showAdminListItem = true
      this.showAdministratorItem = true
      this.userName = this.$store.state.auth.user.Name
    }
    if (isLoggedIn && userRole === 'Admin') {
      this.showAdminListItem = true
      this.userName = this.$store.state.auth.user.Name
    }
    if (!isLoggedIn) {
      this.$router.push('/')
    } else {
      this.$router.push('/apptmhsg')
      this.userName = this.$store.state.auth.user.Name
    }
    // Kiểm tra trạng thái ban đầu của route khi component được tạo
  },
  methods: {
    taotaikhoan() {
      this.$router.push('/taotaikhoan')
    },
    showList(button) {
      this.activeButton = button
    },
    changePassword() {
      this.$router.push('/thongtintaikhoan')
    },
    logout() {
      this.$router.push('/')
    },
  },
}
</script>
<style>
.v-application {
  font-family: 'Times New Roman', Times, serif;

  font-weight: 200;
  display: flex;
  position: relative;
}
html {
  font-size: 14px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.v-menu__content {
  z-index: 999 !important;
  background: white !important;
}
</style>
<style scoped>
#app {
  /* Set the background color to white */
  color: white;
}

#app-bar,
#navigation {
  background-color: #0d47a1 !important;
  color: white;
}
.custom-title {
  color: white;
}
.not-selected {
  color: black !important;
}
</style>
