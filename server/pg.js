const { pgClient } = require("./connect.js");
const express = require("express");
var cors = require("cors");
const { Client } = require("pg");

const router = express.Router();
router.use(cors());
router.use(express.json());

router.get("/tonghopdvbhytnewhis", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopdv_bhyt_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopdv_bhyt_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/get_chamsocsaupt_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_chamsocsaupt_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_chamsocsaupt_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/get_dieutrinoitru_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_dieutrinoitru_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_dieutrinoitru_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});
router.get("/get_chidinh_ekpi_phauthuat_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_chidinh_ekpi_phauthuat_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_chidinh_ekpi_phauthuat_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/tonghopdvnewhis", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopdv_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopdv_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/tonghopksknewhis", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopksk_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopksk_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/get_tonghopksk_visa_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopksk_visa_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopksk_visa_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/get_tonghopksk_bs_ketluan_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopksk_bs_ketluan_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopksk_bs_ketluan_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});
router.get("/get_tonghopksk_dd_ketluan_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopksk_dd_ketluan_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopksk_dd_ketluan_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/get_tonghopksk_ngoaivien_2024", (req, res) => {
  let { TuNgay, DenNgay, NhanVien_Id } = req.query;
  TuNgay += " 00:00:00";
  DenNgay += " 23:59:59";
  let sql;

  if (NhanVien_Id === "null") {
    sql = `select * from get_tonghopksk_ngoaivien_2024('${TuNgay}','${DenNgay}',idnhanvien := ${NhanVien_Id});`;
  } else {
    sql = `select * from get_tonghopksk_ngoaivien_2024('${TuNgay}','${DenNgay}',idnhanvien := '${NhanVien_Id}');`;
  }

  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/getthulao", (req, res) => {
  //let sql = `select ROW_NUMBER() OVER (ORDER BY a.remuneration_id) AS STT,* from (SELECT * FROM remuneration)a`;
  let sql = `SELECT
        ROW_NUMBER() OVER (ORDER BY remuneration_id) AS STT,
        *,
        remuneration_created AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Ho_Chi_Minh' AS remuneration_created,
        remuneration_updatedate AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Ho_Chi_Minh' AS remuneration_updatedate

      FROM remuneration where tamngung = 0`;
  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/getnhanvienpg", async (req, res) => {
  //let sql = `select ROW_NUMBER() OVER (ORDER BY a.remuneration_id) AS STT,* from (SELECT * FROM remuneration)a`;

  let sql = `select id,full_name from employee`;
  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

router.get("/gettennhanvien/:id", async (req, res) => {
  const nhanvien_id = req.params.id;

  const sql = `select id,full_name from employee where id = '${nhanvien_id}'`;
  try {
    pgClient.query(sql, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
      } else {
        res.send(result.rows);
        // Sau khi đã sử dụng xong kết nối, gọi client.end()
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
  }
});

function getCurrentDateTimeISO() {
  const now = new Date();
  const timezoneOffset = 7 * 60; // Múi giờ Việt Nam là UTC+7

  const localTime = new Date(now.getTime() + timezoneOffset * 60 * 1000);
  return localTime.toISOString().slice(0, 19) + "+07:00";
}
router.post("/insert-remuneration", async (req, res) => {
  const {
    nhanvien_id,
    tennhanvien,
    hang,
    chucvu,
    chuyenkhoa,
    remuneration_created,
    remuneration_updatedate,
    update_by,
    chidinh_cls,
    chidinh_nsth,
    chidinh_toandien,
    chidinh_phauthuat,
    gioithieungoai,
    khamtoandien,
    ngoaigio_bv,
    dodakygiacngu,
    kham_db,
    kham_bh,
    kham_kl,
    taikham_db,
    taikham_bh,
    taikham_kl,
    thcls_db,
    thcls_bh,
    thcls_kl,
    thcls_ngoaigio_db,
    thcls_ngoaigio_bh,
    thcls_ngoaigio_kl,
    thuthuat_db,
    thuthuat_bh,
    thuthuat_kl,
    dientim_hh_db,
    dientim_hh_bh,
    dientim_hh_kl,
    sieuam_db,
    sieuam_bh,
    sieuam_kl,
    xquang_db,
    xquang_bh,
    xquang_kl,
    doloangxuong_db,
    doloangxuong_bh,
    doloangxuong_kl,
    gayme_db,
    gayme_bh,
    gayme_kl,
    gayme_tmh_db,
    gayme_tmh_bh,
    gayme_tmh_kl,
    gayme_th_db,
    gayme_th_bh,
    gayme_th_kl,
    implant_1,
    implant_2,
    phauthuat_de,
    phauthuat_trungbinh,
    phauthuat_kho,
    phauthuat_bsphu,
    phauthuat_trubaohiem,
    phauthuat_trubncu,
    phauthuat_trudanbenh,
    dieutrinoitru_db,
    dieutrinoitru_bh,
    dieutrinoitru_kl,
    dieutrinoitru_dongia,
    chamsocsauphauthuat_db,
    chamsocsauphauthuat_bh,
    chamsocsauphauthuat_kl,
    ksk_congkham_tongquat_hd1,
    ksk_congkham_tongquat_hd2,
    ksk_congkham_tongquat_hd3,
    ksk_congkham_chuyenkhoa_hd1,
    ksk_congkham_chuyenkhoa_hd2,
    ksk_congkham_chuyenkhoa_hd3,
    ksk_cls_hd1,
    ksk_cls_hd2,
    ksk_cls_hd3,
    ksk_sieuamdv1_hd1,
    ksk_sieuamdv1_hd2,
    ksk_sieuamdv1_hd3,
    ksk_sieuamdv234_hd1,
    ksk_sieuamdv234_hd2,
    ksk_sieuamdv234_hd3,
    ksk_khamphukhoa_hd1,
    ksk_khamphukhoa_hd2,
    ksk_khamphukhoa_hd3,
    ksk_noisoiphukhoa_hd1,
    ksk_noisoiphukhoa_hd2,
    ksk_noisoiphukhoa_hd3,
    ksk_soinhuomphukhoa_hd1,
    ksk_soinhuomphukhoa_hd2,
    ksk_soinhuomphukhoa_hd3,
    ksk_dientim_hd1,
    ksk_dientim_hd2,
    ksk_dientim_hd3,
    ksk_hohap_hd1,
    ksk_hohap_hd2,
    ksk_hohap_hd3,
    ksk_ct_hd1,
    ksk_ct_hd2,
    ksk_ct_hd3,
    ksk_doloangxuong_hd1,
    ksk_doloangxuong_hd2,
    ksk_doloangxuong_hd3,
    ksk_xquang_hd1,
    ksk_xquang_hd2,
    ksk_xquang_hd3,
    ksk_thinhhoc_hd1,
    ksk_thinhhoc_hd2,
    ksk_thinhhoc_hd3,
    ksk_sieuamtim_hd1,
    ksk_sieuamtim_hd2,
    ksk_sieuamtim_hd3,
    ksk_sieuammachmau_hd1,
    ksk_sieuammachmau_hd2,
    ksk_sieuammachmau_hd3,
    ksk_mrhm_hd1,
    ksk_mrhm_hd2,
    ksk_mrhm_hd3,
    ksk_chupnhuanh_hd1,
    ksk_chupnhuanh_hd2,
    ksk_chupnhuanh_hd3,
    ksk_noisoinbi_hd1,
    ksk_noisoinbi_hd2,
    ksk_noisoinbi_hd3,
    ksk_khamtieuhoa_hd1,
    ksk_khamtieuhoa_hd2,
    ksk_khamtieuhoa_hd3,
    ksk_noisoidaday_hd1,
    ksk_noisoidaday_hd2,
    ksk_noisoidaday_hd3,
    ksk_noisoidaitrang_hd1,
    ksk_noisoidaitrang_hd2,
    ksk_noisoidaitrang_hd3,
    ksk_noisoidadaypolype_hd1,
    ksk_noisoidadaypolype_hd2,
    ksk_noisoidadaypolype_hd3,
    ksk_noisoidaitrangpolype_hd1,
    ksk_noisoidaitrangpolype_hd2,
    ksk_noisoidaitrangpolype_hd3,
    ksk_gaymenoisoidaday_hd1,
    ksk_gaymenoisoidaday_hd2,
    ksk_gaymenoisoidaday_hd3,
    ksk_gaymenoisoidaitrang_hd1,
    ksk_gaymenoisoidaitrang_hd2,
    ksk_gaymenoisoidaitrang_hd3,
    ksk_gaymenoisoidadaypolype_hd1,
    ksk_gaymenoisoidadaypolype_hd2,
    ksk_gaymenoisoidadaypolype_hd3,
    ksk_gaymenoisoidaitrangpolype_hd1,
    ksk_gaymenoisoidaitrangpolype_hd2,
    ksk_gaymenoisoidaitrangpolype_hd3,
    ksk_tongkethoso_4to,
    ksk_tongkethoso_1to,
    ksk_tongkethoso_pru,
    ksk_dieuduonglamhoso_1to,
    ksk_dieuduonglamhoso_4to,
    dd_dungcu,
    created_by,
    tamngung,
    kham_q7_db,
    kham_q7_bh,
    kham_q7_kl,
    thuthuat_q7_db,
    thuthuat_q7_bh,
    thuthuat_q7_kl,
    ksk_khamvisa_hd1,
    ksk_khamvisa_hd2,
    ksk_khamvisa_hd3,
    ksk_clsvisa_hd1,
    ksk_clsvisa_hd2,
    ksk_clsvisa_hd3,
  } = req.body;
  const createdDate = remuneration_created || getCurrentDateTimeISO();
  // Nếu remuneration_updatedate không có trong req.body, gán thời gian hiện tại
  const updatedDate = remuneration_updatedate || null;
  if (!nhanvien_id || !tennhanvien) {
    res
      .status(400)
      .json({ message: "Vui lòng cung cấp đầy đủ NhanVien_Id và TenNhanVien" });
    return;
  }
  const hangUpper = String(hang).toUpperCase();
  try {
    const insertQuery = `
        INSERT INTO remuneration (
          nhanvien_id,
tennhanvien,
hang,
chucvu,
chuyenkhoa,
remuneration_created,
remuneration_updatedate,
update_by,
chidinh_cls,
chidinh_nsth,
chidinh_toandien,
chidinh_phauthuat,
gioithieungoai,
khamtoandien,
ngoaigio_bv,
dodakygiacngu,
kham_db,
kham_bh,
kham_kl,
taikham_db,
taikham_bh,
taikham_kl,
thcls_db,
thcls_bh,
thcls_kl,
thcls_ngoaigio_db,
thcls_ngoaigio_bh,
thcls_ngoaigio_kl,
thuthuat_db,
thuthuat_bh,
thuthuat_kl,
dientim_hh_db,
dientim_hh_bh,
dientim_hh_kl,
sieuam_db,
sieuam_bh,
sieuam_kl,
xquang_db,
xquang_bh,
xquang_kl,
doloangxuong_db,
doloangxuong_bh,
doloangxuong_kl,
gayme_db,
gayme_bh,
gayme_kl,
gayme_tmh_db,
gayme_tmh_bh,
gayme_tmh_kl,
gayme_th_db,
gayme_th_bh,
gayme_th_kl,
implant_1,
implant_2,
phauthuat_de,
phauthuat_trungbinh,
phauthuat_kho,
phauthuat_bsphu,
phauthuat_trubaohiem,
phauthuat_trubncu,
phauthuat_trudanbenh,
dieutrinoitru_db,
dieutrinoitru_bh,
dieutrinoitru_kl,
dieutrinoitru_dongia,
chamsocsauphauthuat_db,
chamsocsauphauthuat_bh,
chamsocsauphauthuat_kl,
ksk_congkham_tongquat_hd1,
ksk_congkham_tongquat_hd2,
ksk_congkham_tongquat_hd3,
ksk_congkham_chuyenkhoa_hd1,
ksk_congkham_chuyenkhoa_hd2,
ksk_congkham_chuyenkhoa_hd3,
ksk_cls_hd1,
ksk_cls_hd2,
ksk_cls_hd3,
ksk_sieuamdv1_hd1,
ksk_sieuamdv1_hd2,
ksk_sieuamdv1_hd3,
ksk_sieuamdv234_hd1,
ksk_sieuamdv234_hd2,
ksk_sieuamdv234_hd3,
ksk_khamphukhoa_hd1,
ksk_khamphukhoa_hd2,
ksk_khamphukhoa_hd3,
ksk_noisoiphukhoa_hd1,
ksk_noisoiphukhoa_hd2,
ksk_noisoiphukhoa_hd3,
ksk_soinhuomphukhoa_hd1,
ksk_soinhuomphukhoa_hd2,
ksk_soinhuomphukhoa_hd3,
ksk_dientim_hd1,
ksk_dientim_hd2,
ksk_dientim_hd3,
ksk_hohap_hd1,
ksk_hohap_hd2,
ksk_hohap_hd3,
ksk_ct_hd1,
ksk_ct_hd2,
ksk_ct_hd3,
ksk_doloangxuong_hd1,
ksk_doloangxuong_hd2,
ksk_doloangxuong_hd3,
ksk_xquang_hd1,
ksk_xquang_hd2,
ksk_xquang_hd3,
ksk_thinhhoc_hd1,
ksk_thinhhoc_hd2,
ksk_thinhhoc_hd3,
ksk_sieuamtim_hd1,
ksk_sieuamtim_hd2,
ksk_sieuamtim_hd3,
ksk_sieuammachmau_hd1,
ksk_sieuammachmau_hd2,
ksk_sieuammachmau_hd3,
ksk_mrhm_hd1,
ksk_mrhm_hd2,
ksk_mrhm_hd3,
ksk_chupnhuanh_hd1,
ksk_chupnhuanh_hd2,
ksk_chupnhuanh_hd3,
ksk_noisoinbi_hd1,
ksk_noisoinbi_hd2,
ksk_noisoinbi_hd3,
ksk_khamtieuhoa_hd1,
ksk_khamtieuhoa_hd2,
ksk_khamtieuhoa_hd3,
ksk_noisoidaday_hd1,
ksk_noisoidaday_hd2,
ksk_noisoidaday_hd3,
ksk_noisoidaitrang_hd1,
ksk_noisoidaitrang_hd2,
ksk_noisoidaitrang_hd3,
ksk_noisoidadaypolype_hd1,
ksk_noisoidadaypolype_hd2,
ksk_noisoidadaypolype_hd3,
ksk_noisoidaitrangpolype_hd1,
ksk_noisoidaitrangpolype_hd2,
ksk_noisoidaitrangpolype_hd3,
ksk_gaymenoisoidaday_hd1,
ksk_gaymenoisoidaday_hd2,
ksk_gaymenoisoidaday_hd3,
ksk_gaymenoisoidaitrang_hd1,
ksk_gaymenoisoidaitrang_hd2,
ksk_gaymenoisoidaitrang_hd3,
ksk_gaymenoisoidadaypolype_hd1,
ksk_gaymenoisoidadaypolype_hd2,
ksk_gaymenoisoidadaypolype_hd3,
ksk_gaymenoisoidaitrangpolype_hd1,
ksk_gaymenoisoidaitrangpolype_hd2,
ksk_gaymenoisoidaitrangpolype_hd3,
ksk_tongkethoso_4to,
ksk_tongkethoso_1to,
ksk_tongkethoso_pru,
ksk_dieuduonglamhoso_1to,
ksk_dieuduonglamhoso_4to,
dd_dungcu,
created_by,
tamngung,
kham_q7_db,
kham_q7_bh,
kham_q7_kl,
thuthuat_q7_db,
thuthuat_q7_bh,
thuthuat_q7_kl,
ksk_khamvisa_hd1,
      ksk_khamvisa_hd2,
      ksk_khamvisa_hd3,
      ksk_clsvisa_hd1,
      ksk_clsvisa_hd2,
      ksk_clsvisa_hd3

        ) VALUES (
          $1, $2, $3, $4, $5, $6, 
          $7, $8, $9, $10, 
          $11, $12, $13, $14, 
          $15, $16, $17, $18, $19, $20, 
          $21, $22, $23, $24, $25, 
          $26, $27, $28, $29, 
          $30, $31, $32, $33, 
          $34, $35, $36, $37, $38, 
          $39, $40, $41, $42, 
          $43, $44, $45, $46, $47, 
          $48, $49, $50, $51, $52, 
          $53, $54, $55, $56, $57, 
          $58, $59, $60, 
          $61, $62, $63, 
          $64, $65, $66, 
          $67, $68, $69, $70, 
          $71, $72, $73, 
          $74, $75, $76, 
          $77, $78, $79, 
          $80, $81, $82, 
          $83, $84, $85, 
          $86, $87, $88, 
          $89, $90, $91, 
          $92, $93, $94, 
          $95, $96, $97, 
          $98, $99, $100, 
          $101, $102, $103, 
          $104, $105, $106, 
          $107, $108, $109, 
          $110, $111, $112, 
          $113, $114, $115, 
          $116, $117, $118, 
          $119, $120, $121, 
          $122, $123, $124, 
          $125, $126, $127, 
          $128, $129, $130, 
          $131, $132, $133, 
          $134, $135, $136, 
          $137, $138, $139, 
          $140, $141, $142, 
          $143, $144, $145, 
          $146, $147, $148, 
          $149, $150, $151, 
          $152, $153, $154, 
          $155, $156, $157, $158, $159,
          $160, $161, $162, $163, $164, $165,$166,$167,$168,$169,$170,$171,$172
        )
      `;

    const values = [
      nhanvien_id,
      tennhanvien,
      hangUpper,
      chucvu,
      chuyenkhoa,
      createdDate,
      updatedDate,
      update_by,
      chidinh_cls,
      chidinh_nsth,
      chidinh_toandien,
      chidinh_phauthuat,
      gioithieungoai,
      khamtoandien,
      ngoaigio_bv,
      dodakygiacngu,
      kham_db,
      kham_bh,
      kham_kl,
      taikham_db,
      taikham_bh,
      taikham_kl,
      thcls_db,
      thcls_bh,
      thcls_kl,
      thcls_ngoaigio_db,
      thcls_ngoaigio_bh,
      thcls_ngoaigio_kl,
      thuthuat_db,
      thuthuat_bh,
      thuthuat_kl,
      dientim_hh_db,
      dientim_hh_bh,
      dientim_hh_kl,
      sieuam_db,
      sieuam_bh,
      sieuam_kl,
      xquang_db,
      xquang_bh,
      xquang_kl,
      doloangxuong_db,
      doloangxuong_bh,
      doloangxuong_kl,
      gayme_db,
      gayme_bh,
      gayme_kl,
      gayme_tmh_db,
      gayme_tmh_bh,
      gayme_tmh_kl,
      gayme_th_db,
      gayme_th_bh,
      gayme_th_kl,
      implant_1,
      implant_2,
      phauthuat_de,
      phauthuat_trungbinh,
      phauthuat_kho,
      phauthuat_bsphu,
      phauthuat_trubaohiem,
      phauthuat_trubncu,
      phauthuat_trudanbenh,
      dieutrinoitru_db,
      dieutrinoitru_bh,
      dieutrinoitru_kl,
      dieutrinoitru_dongia,
      chamsocsauphauthuat_db,
      chamsocsauphauthuat_bh,
      chamsocsauphauthuat_kl,
      ksk_congkham_tongquat_hd1,
      ksk_congkham_tongquat_hd2,
      ksk_congkham_tongquat_hd3,
      ksk_congkham_chuyenkhoa_hd1,
      ksk_congkham_chuyenkhoa_hd2,
      ksk_congkham_chuyenkhoa_hd3,
      ksk_cls_hd1,
      ksk_cls_hd2,
      ksk_cls_hd3,
      ksk_sieuamdv1_hd1,
      ksk_sieuamdv1_hd2,
      ksk_sieuamdv1_hd3,
      ksk_sieuamdv234_hd1,
      ksk_sieuamdv234_hd2,
      ksk_sieuamdv234_hd3,
      ksk_khamphukhoa_hd1,
      ksk_khamphukhoa_hd2,
      ksk_khamphukhoa_hd3,
      ksk_noisoiphukhoa_hd1,
      ksk_noisoiphukhoa_hd2,
      ksk_noisoiphukhoa_hd3,
      ksk_soinhuomphukhoa_hd1,
      ksk_soinhuomphukhoa_hd2,
      ksk_soinhuomphukhoa_hd3,
      ksk_dientim_hd1,
      ksk_dientim_hd2,
      ksk_dientim_hd3,
      ksk_hohap_hd1,
      ksk_hohap_hd2,
      ksk_hohap_hd3,
      ksk_ct_hd1,
      ksk_ct_hd2,
      ksk_ct_hd3,
      ksk_doloangxuong_hd1,
      ksk_doloangxuong_hd2,
      ksk_doloangxuong_hd3,
      ksk_xquang_hd1,
      ksk_xquang_hd2,
      ksk_xquang_hd3,
      ksk_thinhhoc_hd1,
      ksk_thinhhoc_hd2,
      ksk_thinhhoc_hd3,
      ksk_sieuamtim_hd1,
      ksk_sieuamtim_hd2,
      ksk_sieuamtim_hd3,
      ksk_sieuammachmau_hd1,
      ksk_sieuammachmau_hd2,
      ksk_sieuammachmau_hd3,
      ksk_mrhm_hd1,
      ksk_mrhm_hd2,
      ksk_mrhm_hd3,
      ksk_chupnhuanh_hd1,
      ksk_chupnhuanh_hd2,
      ksk_chupnhuanh_hd3,
      ksk_noisoinbi_hd1,
      ksk_noisoinbi_hd2,
      ksk_noisoinbi_hd3,
      ksk_khamtieuhoa_hd1,
      ksk_khamtieuhoa_hd2,
      ksk_khamtieuhoa_hd3,
      ksk_noisoidaday_hd1,
      ksk_noisoidaday_hd2,
      ksk_noisoidaday_hd3,
      ksk_noisoidaitrang_hd1,
      ksk_noisoidaitrang_hd2,
      ksk_noisoidaitrang_hd3,
      ksk_noisoidadaypolype_hd1,
      ksk_noisoidadaypolype_hd2,
      ksk_noisoidadaypolype_hd3,
      ksk_noisoidaitrangpolype_hd1,
      ksk_noisoidaitrangpolype_hd2,
      ksk_noisoidaitrangpolype_hd3,
      ksk_gaymenoisoidaday_hd1,
      ksk_gaymenoisoidaday_hd2,
      ksk_gaymenoisoidaday_hd3,
      ksk_gaymenoisoidaitrang_hd1,
      ksk_gaymenoisoidaitrang_hd2,
      ksk_gaymenoisoidaitrang_hd3,
      ksk_gaymenoisoidadaypolype_hd1,
      ksk_gaymenoisoidadaypolype_hd2,
      ksk_gaymenoisoidadaypolype_hd3,
      ksk_gaymenoisoidaitrangpolype_hd1,
      ksk_gaymenoisoidaitrangpolype_hd2,
      ksk_gaymenoisoidaitrangpolype_hd3,
      ksk_tongkethoso_4to,
      ksk_tongkethoso_1to,
      ksk_tongkethoso_pru,
      ksk_dieuduonglamhoso_1to,
      ksk_dieuduonglamhoso_4to,
      dd_dungcu,
      created_by,
      tamngung,
      kham_q7_db,
      kham_q7_bh,
      kham_q7_kl,
      thuthuat_q7_db,
      thuthuat_q7_bh,
      thuthuat_q7_kl,
      ksk_khamvisa_hd1,
      ksk_khamvisa_hd2,
      ksk_khamvisa_hd3,
      ksk_clsvisa_hd1,
      ksk_clsvisa_hd2,
      ksk_clsvisa_hd3,
    ];

    const result = await pgClient.query(insertQuery, values);

    if (result.rowCount > 0) {
      res.status(201).json({ message: "Thêm bác sĩ thành công" });
    } else {
      res.status(401).json({ message: "Thêm bác sĩ KHÔNG thành công" });
    }
    //await pgClient.end();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
});

router.put("/update-remuneration/:nhanvien_id", async (req, res) => {
  const {
    tennhanvien,
    hang,
    chucvu,
    chuyenkhoa,
    remuneration_created,
    remuneration_updatedate,
    update_by,
    chidinh_cls,
    chidinh_nsth,
    chidinh_toandien,
    chidinh_phauthuat,
    gioithieungoai,
    khamtoandien,
    ngoaigio_bv,
    dodakygiacngu,
    kham_db,
    kham_bh,
    kham_kl,
    taikham_db,
    taikham_bh,
    taikham_kl,
    thcls_db,
    thcls_bh,
    thcls_kl,
    thcls_ngoaigio_db,
    thcls_ngoaigio_bh,
    thcls_ngoaigio_kl,
    thuthuat_db,
    thuthuat_bh,
    thuthuat_kl,
    dientim_hh_db,
    dientim_hh_bh,
    dientim_hh_kl,
    sieuam_db,
    sieuam_bh,
    sieuam_kl,
    xquang_db,
    xquang_bh,
    xquang_kl,
    doloangxuong_db,
    doloangxuong_bh,
    doloangxuong_kl,
    gayme_db,
    gayme_bh,
    gayme_kl,
    gayme_tmh_db,
    gayme_tmh_bh,
    gayme_tmh_kl,
    gayme_th_db,
    gayme_th_bh,
    gayme_th_kl,
    implant_1,
    implant_2,
    phauthuat_de,
    phauthuat_trungbinh,
    phauthuat_kho,
    phauthuat_bsphu,
    phauthuat_trubaohiem,
    phauthuat_trubncu,
    phauthuat_trudanbenh,
    dieutrinoitru_db,
    dieutrinoitru_bh,
    dieutrinoitru_kl,
    dieutrinoitru_dongia,
    chamsocsauphauthuat_db,
    chamsocsauphauthuat_bh,
    chamsocsauphauthuat_kl,
    ksk_congkham_tongquat_hd1,
    ksk_congkham_tongquat_hd2,
    ksk_congkham_tongquat_hd3,
    ksk_congkham_chuyenkhoa_hd1,
    ksk_congkham_chuyenkhoa_hd2,
    ksk_congkham_chuyenkhoa_hd3,
    ksk_cls_hd1,
    ksk_cls_hd2,
    ksk_cls_hd3,
    ksk_sieuamdv1_hd1,
    ksk_sieuamdv1_hd2,
    ksk_sieuamdv1_hd3,
    ksk_sieuamdv234_hd1,
    ksk_sieuamdv234_hd2,
    ksk_sieuamdv234_hd3,
    ksk_khamphukhoa_hd1,
    ksk_khamphukhoa_hd2,
    ksk_khamphukhoa_hd3,
    ksk_noisoiphukhoa_hd1,
    ksk_noisoiphukhoa_hd2,
    ksk_noisoiphukhoa_hd3,
    ksk_soinhuomphukhoa_hd1,
    ksk_soinhuomphukhoa_hd2,
    ksk_soinhuomphukhoa_hd3,
    ksk_dientim_hd1,
    ksk_dientim_hd2,
    ksk_dientim_hd3,
    ksk_hohap_hd1,
    ksk_hohap_hd2,
    ksk_hohap_hd3,
    ksk_ct_hd1,
    ksk_ct_hd2,
    ksk_ct_hd3,
    ksk_doloangxuong_hd1,
    ksk_doloangxuong_hd2,
    ksk_doloangxuong_hd3,
    ksk_xquang_hd1,
    ksk_xquang_hd2,
    ksk_xquang_hd3,
    ksk_thinhhoc_hd1,
    ksk_thinhhoc_hd2,
    ksk_thinhhoc_hd3,
    ksk_sieuamtim_hd1,
    ksk_sieuamtim_hd2,
    ksk_sieuamtim_hd3,
    ksk_sieuammachmau_hd1,
    ksk_sieuammachmau_hd2,
    ksk_sieuammachmau_hd3,
    ksk_mrhm_hd1,
    ksk_mrhm_hd2,
    ksk_mrhm_hd3,
    ksk_chupnhuanh_hd1,
    ksk_chupnhuanh_hd2,
    ksk_chupnhuanh_hd3,
    ksk_noisoinbi_hd1,
    ksk_noisoinbi_hd2,
    ksk_noisoinbi_hd3,
    ksk_khamtieuhoa_hd1,
    ksk_khamtieuhoa_hd2,
    ksk_khamtieuhoa_hd3,
    ksk_noisoidaday_hd1,
    ksk_noisoidaday_hd2,
    ksk_noisoidaday_hd3,
    ksk_noisoidaitrang_hd1,
    ksk_noisoidaitrang_hd2,
    ksk_noisoidaitrang_hd3,
    ksk_noisoidadaypolype_hd1,
    ksk_noisoidadaypolype_hd2,
    ksk_noisoidadaypolype_hd3,
    ksk_noisoidaitrangpolype_hd1,
    ksk_noisoidaitrangpolype_hd2,
    ksk_noisoidaitrangpolype_hd3,
    ksk_gaymenoisoidaday_hd1,
    ksk_gaymenoisoidaday_hd2,
    ksk_gaymenoisoidaday_hd3,
    ksk_gaymenoisoidaitrang_hd1,
    ksk_gaymenoisoidaitrang_hd2,
    ksk_gaymenoisoidaitrang_hd3,
    ksk_gaymenoisoidadaypolype_hd1,
    ksk_gaymenoisoidadaypolype_hd2,
    ksk_gaymenoisoidadaypolype_hd3,
    ksk_gaymenoisoidaitrangpolype_hd1,
    ksk_gaymenoisoidaitrangpolype_hd2,
    ksk_gaymenoisoidaitrangpolype_hd3,
    ksk_tongkethoso_4to,
    ksk_tongkethoso_1to,
    ksk_tongkethoso_pru,
    ksk_dieuduonglamhoso_1to,
    ksk_dieuduonglamhoso_4to,
    dd_dungcu,
    kham_q7_db,
    kham_q7_bh,
    kham_q7_kl,
    thuthuat_q7_db,
    thuthuat_q7_bh,
    thuthuat_q7_kl,
    ksk_khamvisa_hd1,
    ksk_khamvisa_hd2,
    ksk_khamvisa_hd3,
    ksk_clsvisa_hd1,
    ksk_clsvisa_hd2,
    ksk_clsvisa_hd3,
  } = req.body;
  const nhanvien_id = req.params.nhanvien_id;
  const updatedDate = getCurrentDateTimeISO();

  if (!nhanvien_id) {
    res.status(400).json({ error: "Vui lòng cung cấp nhanvien_id" });
    return;
  }
  const hangUpper = String(hang).toUpperCase();
  try {
    const updateQuery = `
      UPDATE remuneration
      SET 
        tennhanvien = $1,
        hang = $2,
        chucvu = $3,
        chuyenkhoa = $4,
        remuneration_created = $5,
        remuneration_updatedate = $6,
        update_by = $7,
        chidinh_cls = $8,
        chidinh_nsth = $9,
        chidinh_toandien = $10,
        chidinh_phauthuat = $11,
        gioithieungoai = $12,
        khamtoandien = $13,
        ngoaigio_bv = $14,
        dodakygiacngu = $15,
        kham_db = $16,
        kham_bh = $17,
        kham_kl = $18,
        taikham_db = $19,
        taikham_bh = $20,
        taikham_kl = $21,
        thcls_db = $22,
        thcls_bh = $23,
        thcls_kl = $24,
        thcls_ngoaigio_db = $25,
        thcls_ngoaigio_bh = $26,
        thcls_ngoaigio_kl = $27,
        thuthuat_db = $28,
        thuthuat_bh = $29,
        thuthuat_kl = $30,
        dientim_hh_db = $31,
        dientim_hh_bh = $32,
        dientim_hh_kl = $33,
        sieuam_db = $34,
        sieuam_bh = $35,
        sieuam_kl = $36,
        xquang_db = $37,
        xquang_bh = $38,
        xquang_kl = $39,
        doloangxuong_db = $40,
        doloangxuong_bh = $41,
        doloangxuong_kl = $42,
        gayme_db = $43,
        gayme_bh = $44,
        gayme_kl = $45,
        gayme_tmh_db = $46,
        gayme_tmh_bh = $47,
        gayme_tmh_kl = $48,
        gayme_th_db = $49,
        gayme_th_bh = $50,
        gayme_th_kl = $51,
        implant_1 = $52,
        implant_2 = $53,
        phauthuat_de = $54,
        phauthuat_trungbinh = $55,
        phauthuat_kho = $56,
        phauthuat_bsphu = $57,
        phauthuat_trubaohiem = $58,
        phauthuat_trubncu = $59,
        phauthuat_trudanbenh = $60,
        dieutrinoitru_db = $61,
        dieutrinoitru_bh = $62,
        dieutrinoitru_kl = $63,
        dieutrinoitru_dongia = $64,
        chamsocsauphauthuat_db = $65,
        chamsocsauphauthuat_bh = $66,
        chamsocsauphauthuat_kl = $67,
        ksk_congkham_tongquat_hd1 = $68,
        ksk_congkham_tongquat_hd2 = $69,
        ksk_congkham_tongquat_hd3 = $70,
        ksk_congkham_chuyenkhoa_hd1 = $71,
        ksk_congkham_chuyenkhoa_hd2 = $72,
        ksk_congkham_chuyenkhoa_hd3 = $73,
        ksk_cls_hd1 = $74,
        ksk_cls_hd2 = $75,
        ksk_cls_hd3 = $76,
        ksk_sieuamdv1_hd1 = $77,
        ksk_sieuamdv1_hd2 = $78,
        ksk_sieuamdv1_hd3 = $79,
        ksk_sieuamdv234_hd1 = $80,
        ksk_sieuamdv234_hd2 = $81,
        ksk_sieuamdv234_hd3 = $82,
        ksk_khamphukhoa_hd1 = $83,
        ksk_khamphukhoa_hd2 = $84,
        ksk_khamphukhoa_hd3 = $85,
        ksk_noisoiphukhoa_hd1 = $86,
        ksk_noisoiphukhoa_hd2 = $87,
        ksk_noisoiphukhoa_hd3 = $88,
        ksk_soinhuomphukhoa_hd1 = $89,
        ksk_soinhuomphukhoa_hd2 = $90,
        ksk_soinhuomphukhoa_hd3 = $91,
        ksk_dientim_hd1 = $92,
        ksk_dientim_hd2 = $93,
        ksk_dientim_hd3 = $94,
        ksk_hohap_hd1 = $95,
        ksk_hohap_hd2 = $96,
        ksk_hohap_hd3 = $97,
        ksk_ct_hd1 = $98,
        ksk_ct_hd2 = $99,
        ksk_ct_hd3 = $100,
        ksk_doloangxuong_hd1 = $101,
        ksk_doloangxuong_hd2 = $102,
        ksk_doloangxuong_hd3 = $103,
        ksk_xquang_hd1 = $104,
        ksk_xquang_hd2 = $105,
        ksk_xquang_hd3 = $106,
        ksk_thinhhoc_hd1 = $107,
        ksk_thinhhoc_hd2 = $108,
        ksk_thinhhoc_hd3 = $109,
        ksk_sieuamtim_hd1 = $110,
        ksk_sieuamtim_hd2 = $111,
        ksk_sieuamtim_hd3 = $112,
        ksk_sieuammachmau_hd1 = $113,
        ksk_sieuammachmau_hd2 = $114,
        ksk_sieuammachmau_hd3 = $115,
        ksk_mrhm_hd1 = $116,
        ksk_mrhm_hd2 = $117,
        ksk_mrhm_hd3 = $118,
        ksk_chupnhuanh_hd1 = $119,
        ksk_chupnhuanh_hd2 = $120,
        ksk_chupnhuanh_hd3 = $121,
        ksk_noisoinbi_hd1 = $122,
        ksk_noisoinbi_hd2 = $123,
        ksk_noisoinbi_hd3 = $124,
        ksk_khamtieuhoa_hd1 = $125,
        ksk_khamtieuhoa_hd2 = $126,
        ksk_khamtieuhoa_hd3 = $127,
        ksk_noisoidaday_hd1 = $128,
        ksk_noisoidaday_hd2 = $129,
        ksk_noisoidaday_hd3 = $130,
        ksk_noisoidaitrang_hd1 = $131,
        ksk_noisoidaitrang_hd2 = $132,
        ksk_noisoidaitrang_hd3 = $133,
        ksk_noisoidadaypolype_hd1 = $134,
        ksk_noisoidadaypolype_hd2 = $135,
        ksk_noisoidadaypolype_hd3 = $136,
        ksk_noisoidaitrangpolype_hd1 = $137,
        ksk_noisoidaitrangpolype_hd2 = $138,
        ksk_noisoidaitrangpolype_hd3 = $139,
        ksk_gaymenoisoidaday_hd1 = $140,
        ksk_gaymenoisoidaday_hd2 = $141,
        ksk_gaymenoisoidaday_hd3 = $142,
        ksk_gaymenoisoidaitrang_hd1 = $143,
        ksk_gaymenoisoidaitrang_hd2 = $144,
        ksk_gaymenoisoidaitrang_hd3 = $145,
        ksk_gaymenoisoidadaypolype_hd1 = $146,
        ksk_gaymenoisoidadaypolype_hd2 = $147,
        ksk_gaymenoisoidadaypolype_hd3 = $148,
        ksk_gaymenoisoidaitrangpolype_hd1 = $149,
        ksk_gaymenoisoidaitrangpolype_hd2 = $150,
        ksk_gaymenoisoidaitrangpolype_hd3 = $151,
        ksk_tongkethoso_4to = $152,
        ksk_tongkethoso_1to = $153,
        ksk_tongkethoso_pru = $154,
        ksk_dieuduonglamhoso_1to = $155,
        ksk_dieuduonglamhoso_4to = $156,
        dd_dungcu = $157,
        kham_q7_db = $158,
        kham_q7_bh = $159,
        kham_q7_kl = $160,
        thuthuat_q7_db = $161,
        thuthuat_q7_bh = $162,
        thuthuat_q7_kl = $163,
        ksk_khamvisa_hd1 = $164,
      ksk_khamvisa_hd2 = $165,
      ksk_khamvisa_hd3 = $166,
      ksk_clsvisa_hd1 = $167,
      ksk_clsvisa_hd2 = $168,
      ksk_clsvisa_hd3 = $169
      WHERE nhanvien_id = $170 and tamngung = 0;
    `;

    const values = [
      tennhanvien,
      hangUpper,
      chucvu,
      chuyenkhoa,
      remuneration_created,
      updatedDate,
      update_by,
      chidinh_cls,
      chidinh_nsth,
      chidinh_toandien,
      chidinh_phauthuat,
      gioithieungoai,
      khamtoandien,
      ngoaigio_bv,
      dodakygiacngu,
      kham_db,
      kham_bh,
      kham_kl,
      taikham_db,
      taikham_bh,
      taikham_kl,
      thcls_db,
      thcls_bh,
      thcls_kl,
      thcls_ngoaigio_db,
      thcls_ngoaigio_bh,
      thcls_ngoaigio_kl,
      thuthuat_db,
      thuthuat_bh,
      thuthuat_kl,
      dientim_hh_db,
      dientim_hh_bh,
      dientim_hh_kl,
      sieuam_db,
      sieuam_bh,
      sieuam_kl,
      xquang_db,
      xquang_bh,
      xquang_kl,
      doloangxuong_db,
      doloangxuong_bh,
      doloangxuong_kl,
      gayme_db,
      gayme_bh,
      gayme_kl,
      gayme_tmh_db,
      gayme_tmh_bh,
      gayme_tmh_kl,
      gayme_th_db,
      gayme_th_bh,
      gayme_th_kl,
      implant_1,
      implant_2,
      phauthuat_de,
      phauthuat_trungbinh,
      phauthuat_kho,
      phauthuat_bsphu,
      phauthuat_trubaohiem,
      phauthuat_trubncu,
      phauthuat_trudanbenh,
      dieutrinoitru_db,
      dieutrinoitru_bh,
      dieutrinoitru_kl,
      dieutrinoitru_dongia,
      chamsocsauphauthuat_db,
      chamsocsauphauthuat_bh,
      chamsocsauphauthuat_kl,
      ksk_congkham_tongquat_hd1,
      ksk_congkham_tongquat_hd2,
      ksk_congkham_tongquat_hd3,
      ksk_congkham_chuyenkhoa_hd1,
      ksk_congkham_chuyenkhoa_hd2,
      ksk_congkham_chuyenkhoa_hd3,
      ksk_cls_hd1,
      ksk_cls_hd2,
      ksk_cls_hd3,
      ksk_sieuamdv1_hd1,
      ksk_sieuamdv1_hd2,
      ksk_sieuamdv1_hd3,
      ksk_sieuamdv234_hd1,
      ksk_sieuamdv234_hd2,
      ksk_sieuamdv234_hd3,
      ksk_khamphukhoa_hd1,
      ksk_khamphukhoa_hd2,
      ksk_khamphukhoa_hd3,
      ksk_noisoiphukhoa_hd1,
      ksk_noisoiphukhoa_hd2,
      ksk_noisoiphukhoa_hd3,
      ksk_soinhuomphukhoa_hd1,
      ksk_soinhuomphukhoa_hd2,
      ksk_soinhuomphukhoa_hd3,
      ksk_dientim_hd1,
      ksk_dientim_hd2,
      ksk_dientim_hd3,
      ksk_hohap_hd1,
      ksk_hohap_hd2,
      ksk_hohap_hd3,
      ksk_ct_hd1,
      ksk_ct_hd2,
      ksk_ct_hd3,
      ksk_doloangxuong_hd1,
      ksk_doloangxuong_hd2,
      ksk_doloangxuong_hd3,
      ksk_xquang_hd1,
      ksk_xquang_hd2,
      ksk_xquang_hd3,
      ksk_thinhhoc_hd1,
      ksk_thinhhoc_hd2,
      ksk_thinhhoc_hd3,
      ksk_sieuamtim_hd1,
      ksk_sieuamtim_hd2,
      ksk_sieuamtim_hd3,
      ksk_sieuammachmau_hd1,
      ksk_sieuammachmau_hd2,
      ksk_sieuammachmau_hd3,
      ksk_mrhm_hd1,
      ksk_mrhm_hd2,
      ksk_mrhm_hd3,
      ksk_chupnhuanh_hd1,
      ksk_chupnhuanh_hd2,
      ksk_chupnhuanh_hd3,
      ksk_noisoinbi_hd1,
      ksk_noisoinbi_hd2,
      ksk_noisoinbi_hd3,
      ksk_khamtieuhoa_hd1,
      ksk_khamtieuhoa_hd2,
      ksk_khamtieuhoa_hd3,
      ksk_noisoidaday_hd1,
      ksk_noisoidaday_hd2,
      ksk_noisoidaday_hd3,
      ksk_noisoidaitrang_hd1,
      ksk_noisoidaitrang_hd2,
      ksk_noisoidaitrang_hd3,
      ksk_noisoidadaypolype_hd1,
      ksk_noisoidadaypolype_hd2,
      ksk_noisoidadaypolype_hd3,
      ksk_noisoidaitrangpolype_hd1,
      ksk_noisoidaitrangpolype_hd2,
      ksk_noisoidaitrangpolype_hd3,
      ksk_gaymenoisoidaday_hd1,
      ksk_gaymenoisoidaday_hd2,
      ksk_gaymenoisoidaday_hd3,
      ksk_gaymenoisoidaitrang_hd1,
      ksk_gaymenoisoidaitrang_hd2,
      ksk_gaymenoisoidaitrang_hd3,
      ksk_gaymenoisoidadaypolype_hd1,
      ksk_gaymenoisoidadaypolype_hd2,
      ksk_gaymenoisoidadaypolype_hd3,
      ksk_gaymenoisoidaitrangpolype_hd1,
      ksk_gaymenoisoidaitrangpolype_hd2,
      ksk_gaymenoisoidaitrangpolype_hd3,
      ksk_tongkethoso_4to,
      ksk_tongkethoso_1to,
      ksk_tongkethoso_pru,
      ksk_dieuduonglamhoso_1to,
      ksk_dieuduonglamhoso_4to,
      dd_dungcu,
      kham_q7_db,
      kham_q7_bh,
      kham_q7_kl,
      thuthuat_q7_db,
      thuthuat_q7_bh,
      thuthuat_q7_kl,
      ksk_khamvisa_hd1,
      ksk_khamvisa_hd2,
      ksk_khamvisa_hd3,
      ksk_clsvisa_hd1,
      ksk_clsvisa_hd2,
      ksk_clsvisa_hd3,
      nhanvien_id,
    ];

    const result = await pgClient.query(updateQuery, values);

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Cập nhật thành công" });
    } else {
      res.status(404).json({ error: "Không tìm thấy nhân viên" });
    }
  } catch (error) {
    console.error("Lỗi cập nhật:", error);
    res.status(500).json({ error: "Lỗi cập nhật dữ liệu" });
  }
});

router.put("/update-remuneration-hang/:hang", async (req, res) => {
  const {
    tennhanvien,
    chucvu,
    chuyenkhoa,
    remuneration_created,
    remuneration_updatedate,
    update_by,
    chidinh_cls,
    chidinh_nsth,
    chidinh_toandien,
    chidinh_phauthuat,
    gioithieungoai,
    khamtoandien,
    ngoaigio_bv,
    dodakygiacngu,
    kham_db,
    kham_bh,
    kham_kl,
    taikham_db,
    taikham_bh,
    taikham_kl,
    thcls_db,
    thcls_bh,
    thcls_kl,
    thcls_ngoaigio_db,
    thcls_ngoaigio_bh,
    thcls_ngoaigio_kl,
    thuthuat_db,
    thuthuat_bh,
    thuthuat_kl,
    dientim_hh_db,
    dientim_hh_bh,
    dientim_hh_kl,
    sieuam_db,
    sieuam_bh,
    sieuam_kl,
    xquang_db,
    xquang_bh,
    xquang_kl,
    doloangxuong_db,
    doloangxuong_bh,
    doloangxuong_kl,
    gayme_db,
    gayme_bh,
    gayme_kl,
    gayme_tmh_db,
    gayme_tmh_bh,
    gayme_tmh_kl,
    gayme_th_db,
    gayme_th_bh,
    gayme_th_kl,
    implant_1,
    implant_2,
    phauthuat_de,
    phauthuat_trungbinh,
    phauthuat_kho,
    phauthuat_bsphu,
    phauthuat_trubaohiem,
    phauthuat_trubncu,
    phauthuat_trudanbenh,
    dieutrinoitru_db,
    dieutrinoitru_bh,
    dieutrinoitru_kl,
    dieutrinoitru_dongia,
    chamsocsauphauthuat_db,
    chamsocsauphauthuat_bh,
    chamsocsauphauthuat_kl,
    ksk_congkham_tongquat_hd1,
    ksk_congkham_tongquat_hd2,
    ksk_congkham_tongquat_hd3,
    ksk_congkham_chuyenkhoa_hd1,
    ksk_congkham_chuyenkhoa_hd2,
    ksk_congkham_chuyenkhoa_hd3,
    ksk_cls_hd1,
    ksk_cls_hd2,
    ksk_cls_hd3,
    ksk_sieuamdv1_hd1,
    ksk_sieuamdv1_hd2,
    ksk_sieuamdv1_hd3,
    ksk_sieuamdv234_hd1,
    ksk_sieuamdv234_hd2,
    ksk_sieuamdv234_hd3,
    ksk_khamphukhoa_hd1,
    ksk_khamphukhoa_hd2,
    ksk_khamphukhoa_hd3,
    ksk_noisoiphukhoa_hd1,
    ksk_noisoiphukhoa_hd2,
    ksk_noisoiphukhoa_hd3,
    ksk_soinhuomphukhoa_hd1,
    ksk_soinhuomphukhoa_hd2,
    ksk_soinhuomphukhoa_hd3,
    ksk_dientim_hd1,
    ksk_dientim_hd2,
    ksk_dientim_hd3,
    ksk_hohap_hd1,
    ksk_hohap_hd2,
    ksk_hohap_hd3,
    ksk_ct_hd1,
    ksk_ct_hd2,
    ksk_ct_hd3,
    ksk_doloangxuong_hd1,
    ksk_doloangxuong_hd2,
    ksk_doloangxuong_hd3,
    ksk_xquang_hd1,
    ksk_xquang_hd2,
    ksk_xquang_hd3,
    ksk_thinhhoc_hd1,
    ksk_thinhhoc_hd2,
    ksk_thinhhoc_hd3,
    ksk_sieuamtim_hd1,
    ksk_sieuamtim_hd2,
    ksk_sieuamtim_hd3,
    ksk_sieuammachmau_hd1,
    ksk_sieuammachmau_hd2,
    ksk_sieuammachmau_hd3,
    ksk_mrhm_hd1,
    ksk_mrhm_hd2,
    ksk_mrhm_hd3,
    ksk_chupnhuanh_hd1,
    ksk_chupnhuanh_hd2,
    ksk_chupnhuanh_hd3,
    ksk_noisoinbi_hd1,
    ksk_noisoinbi_hd2,
    ksk_noisoinbi_hd3,
    ksk_khamtieuhoa_hd1,
    ksk_khamtieuhoa_hd2,
    ksk_khamtieuhoa_hd3,
    ksk_noisoidaday_hd1,
    ksk_noisoidaday_hd2,
    ksk_noisoidaday_hd3,
    ksk_noisoidaitrang_hd1,
    ksk_noisoidaitrang_hd2,
    ksk_noisoidaitrang_hd3,
    ksk_noisoidadaypolype_hd1,
    ksk_noisoidadaypolype_hd2,
    ksk_noisoidadaypolype_hd3,
    ksk_noisoidaitrangpolype_hd1,
    ksk_noisoidaitrangpolype_hd2,
    ksk_noisoidaitrangpolype_hd3,
    ksk_gaymenoisoidaday_hd1,
    ksk_gaymenoisoidaday_hd2,
    ksk_gaymenoisoidaday_hd3,
    ksk_gaymenoisoidaitrang_hd1,
    ksk_gaymenoisoidaitrang_hd2,
    ksk_gaymenoisoidaitrang_hd3,
    ksk_gaymenoisoidadaypolype_hd1,
    ksk_gaymenoisoidadaypolype_hd2,
    ksk_gaymenoisoidadaypolype_hd3,
    ksk_gaymenoisoidaitrangpolype_hd1,
    ksk_gaymenoisoidaitrangpolype_hd2,
    ksk_gaymenoisoidaitrangpolype_hd3,
    ksk_tongkethoso_4to,
    ksk_tongkethoso_1to,
    ksk_tongkethoso_pru,
    ksk_dieuduonglamhoso_1to,
    ksk_dieuduonglamhoso_4to,
    dd_dungcu,
    kham_q7_db,
    kham_q7_bh,
    kham_q7_kl,
    thuthuat_q7_db,
    thuthuat_q7_bh,
    thuthuat_q7_kl,
    ksk_khamvisa_hd1,
    ksk_khamvisa_hd2,
    ksk_khamvisa_hd3,
    ksk_clsvisa_hd1,
    ksk_clsvisa_hd2,
    ksk_clsvisa_hd3,
  } = req.body;
  const hang = req.params.hang;
  const updatedDate = getCurrentDateTimeISO();

  if (!hang) {
    res.status(400).json({ error: "Vui lòng cung cấp hạng" });
    return;
  }

  try {
    const updateQuery = `
      UPDATE remuneration
      SET 
      tennhanvien = COALESCE($1,tennhanvien),
chucvu = COALESCE($2,chucvu),
chuyenkhoa = COALESCE($3,chuyenkhoa),
remuneration_created = COALESCE($4,remuneration_created),
remuneration_updatedate = COALESCE($5,remuneration_updatedate),
update_by = COALESCE($6,update_by),
chidinh_cls = COALESCE($7,chidinh_cls),
chidinh_nsth = COALESCE($8,chidinh_nsth),
chidinh_toandien = COALESCE($9,chidinh_toandien),
chidinh_phauthuat = COALESCE($10,chidinh_phauthuat),
gioithieungoai = COALESCE($11,gioithieungoai),
khamtoandien = COALESCE($12,khamtoandien),
ngoaigio_bv = COALESCE($13,ngoaigio_bv),
dodakygiacngu = COALESCE($14,dodakygiacngu),
kham_db = COALESCE($15,kham_db),
kham_bh = COALESCE($16,kham_bh),
kham_kl = COALESCE($17,kham_kl),
taikham_db = COALESCE($18,taikham_db),
taikham_bh = COALESCE($19,taikham_bh),
taikham_kl = COALESCE($20,taikham_kl),
thcls_db = COALESCE($21,thcls_db),
thcls_bh = COALESCE($22,thcls_bh),
thcls_kl = COALESCE($23,thcls_kl),
thcls_ngoaigio_db = COALESCE($24,thcls_ngoaigio_db),
thcls_ngoaigio_bh = COALESCE($25,thcls_ngoaigio_bh),
thcls_ngoaigio_kl = COALESCE($26,thcls_ngoaigio_kl),
thuthuat_db = COALESCE($27,thuthuat_db),
thuthuat_bh = COALESCE($28,thuthuat_bh),
thuthuat_kl = COALESCE($29,thuthuat_kl),
dientim_hh_db = COALESCE($30,dientim_hh_db),
dientim_hh_bh = COALESCE($31,dientim_hh_bh),
dientim_hh_kl = COALESCE($32,dientim_hh_kl),
sieuam_db = COALESCE($33,sieuam_db),
sieuam_bh = COALESCE($34,sieuam_bh),
sieuam_kl = COALESCE($35,sieuam_kl),
xquang_db = COALESCE($36,xquang_db),
xquang_bh = COALESCE($37,xquang_bh),
xquang_kl = COALESCE($38,xquang_kl),
doloangxuong_db = COALESCE($39,doloangxuong_db),
doloangxuong_bh = COALESCE($40,doloangxuong_bh),
doloangxuong_kl = COALESCE($41,doloangxuong_kl),
gayme_db = COALESCE($42,gayme_db),
gayme_bh = COALESCE($43,gayme_bh),
gayme_kl = COALESCE($44,gayme_kl),
gayme_tmh_db = COALESCE($45,gayme_tmh_db),
gayme_tmh_bh = COALESCE($46,gayme_tmh_bh),
gayme_tmh_kl = COALESCE($47,gayme_tmh_kl),
gayme_th_db = COALESCE($48,gayme_th_db),
gayme_th_bh = COALESCE($49,gayme_th_bh),
gayme_th_kl = COALESCE($50,gayme_th_kl),
implant_1 = COALESCE($51,implant_1),
implant_2 = COALESCE($52,implant_2),
phauthuat_de = COALESCE($53,phauthuat_de),
phauthuat_trungbinh = COALESCE($54,phauthuat_trungbinh),
phauthuat_kho = COALESCE($55,phauthuat_kho),
phauthuat_bsphu = COALESCE($56,phauthuat_bsphu),
phauthuat_trubaohiem = COALESCE($57,phauthuat_trubaohiem),
phauthuat_trubncu = COALESCE($58,phauthuat_trubncu),
phauthuat_trudanbenh = COALESCE($59,phauthuat_trudanbenh),
dieutrinoitru_db = COALESCE($60,dieutrinoitru_db),
dieutrinoitru_bh = COALESCE($61,dieutrinoitru_bh),
dieutrinoitru_kl = COALESCE($62,dieutrinoitru_kl),
dieutrinoitru_dongia = COALESCE($63,dieutrinoitru_dongia),
chamsocsauphauthuat_db = COALESCE($64,chamsocsauphauthuat_db),
chamsocsauphauthuat_bh = COALESCE($65,chamsocsauphauthuat_bh),
chamsocsauphauthuat_kl = COALESCE($66,chamsocsauphauthuat_kl),
ksk_congkham_tongquat_hd1 = COALESCE($67,ksk_congkham_tongquat_hd1),
ksk_congkham_tongquat_hd2 = COALESCE($68,ksk_congkham_tongquat_hd2),
ksk_congkham_tongquat_hd3 = COALESCE($69,ksk_congkham_tongquat_hd3),
ksk_congkham_chuyenkhoa_hd1 = COALESCE($70,ksk_congkham_chuyenkhoa_hd1),
ksk_congkham_chuyenkhoa_hd2 = COALESCE($71,ksk_congkham_chuyenkhoa_hd2),
ksk_congkham_chuyenkhoa_hd3 = COALESCE($72,ksk_congkham_chuyenkhoa_hd3),
ksk_cls_hd1 = COALESCE($73,ksk_cls_hd1),
ksk_cls_hd2 = COALESCE($74,ksk_cls_hd2),
ksk_cls_hd3 = COALESCE($75,ksk_cls_hd3),
ksk_sieuamdv1_hd1 = COALESCE($76,ksk_sieuamdv1_hd1),
ksk_sieuamdv1_hd2 = COALESCE($77,ksk_sieuamdv1_hd2),
ksk_sieuamdv1_hd3 = COALESCE($78,ksk_sieuamdv1_hd3),
ksk_sieuamdv234_hd1 = COALESCE($79,ksk_sieuamdv234_hd1),
ksk_sieuamdv234_hd2 = COALESCE($80,ksk_sieuamdv234_hd2),
ksk_sieuamdv234_hd3 = COALESCE($81,ksk_sieuamdv234_hd3),
ksk_khamphukhoa_hd1 = COALESCE($82,ksk_khamphukhoa_hd1),
ksk_khamphukhoa_hd2 = COALESCE($83,ksk_khamphukhoa_hd2),
ksk_khamphukhoa_hd3 = COALESCE($84,ksk_khamphukhoa_hd3),
ksk_noisoiphukhoa_hd1 = COALESCE($85,ksk_noisoiphukhoa_hd1),
ksk_noisoiphukhoa_hd2 = COALESCE($86,ksk_noisoiphukhoa_hd2),
ksk_noisoiphukhoa_hd3 = COALESCE($87,ksk_noisoiphukhoa_hd3),
ksk_soinhuomphukhoa_hd1 = COALESCE($88,ksk_soinhuomphukhoa_hd1),
ksk_soinhuomphukhoa_hd2 = COALESCE($89,ksk_soinhuomphukhoa_hd2),
ksk_soinhuomphukhoa_hd3 = COALESCE($90,ksk_soinhuomphukhoa_hd3),
ksk_dientim_hd1 = COALESCE($91,ksk_dientim_hd1),
ksk_dientim_hd2 = COALESCE($92,ksk_dientim_hd2),
ksk_dientim_hd3 = COALESCE($93,ksk_dientim_hd3),
ksk_hohap_hd1 = COALESCE($94,ksk_hohap_hd1),
ksk_hohap_hd2 = COALESCE($95,ksk_hohap_hd2),
ksk_hohap_hd3 = COALESCE($96,ksk_hohap_hd3),
ksk_ct_hd1 = COALESCE($97,ksk_ct_hd1),
ksk_ct_hd2 = COALESCE($98,ksk_ct_hd2),
ksk_ct_hd3 = COALESCE($99,ksk_ct_hd3),
ksk_doloangxuong_hd1 = COALESCE($100,ksk_doloangxuong_hd1),
ksk_doloangxuong_hd2 = COALESCE($101,ksk_doloangxuong_hd2),
ksk_doloangxuong_hd3 = COALESCE($102,ksk_doloangxuong_hd3),
ksk_xquang_hd1 = COALESCE($103,ksk_xquang_hd1),
ksk_xquang_hd2 = COALESCE($104,ksk_xquang_hd2),
ksk_xquang_hd3 = COALESCE($105,ksk_xquang_hd3),
ksk_thinhhoc_hd1 = COALESCE($106,ksk_thinhhoc_hd1),
ksk_thinhhoc_hd2 = COALESCE($107,ksk_thinhhoc_hd2),
ksk_thinhhoc_hd3 = COALESCE($108,ksk_thinhhoc_hd3),
ksk_sieuamtim_hd1 = COALESCE($109,ksk_sieuamtim_hd1),
ksk_sieuamtim_hd2 = COALESCE($110,ksk_sieuamtim_hd2),
ksk_sieuamtim_hd3 = COALESCE($111,ksk_sieuamtim_hd3),
ksk_sieuammachmau_hd1 = COALESCE($112,ksk_sieuammachmau_hd1),
ksk_sieuammachmau_hd2 = COALESCE($113,ksk_sieuammachmau_hd2),
ksk_sieuammachmau_hd3 = COALESCE($114,ksk_sieuammachmau_hd3),
ksk_mrhm_hd1 = COALESCE($115,ksk_mrhm_hd1),
ksk_mrhm_hd2 = COALESCE($116,ksk_mrhm_hd2),
ksk_mrhm_hd3 = COALESCE($117,ksk_mrhm_hd3),
ksk_chupnhuanh_hd1 = COALESCE($118,ksk_chupnhuanh_hd1),
ksk_chupnhuanh_hd2 = COALESCE($119,ksk_chupnhuanh_hd2),
ksk_chupnhuanh_hd3 = COALESCE($120,ksk_chupnhuanh_hd3),
ksk_noisoinbi_hd1 = COALESCE($121,ksk_noisoinbi_hd1),
ksk_noisoinbi_hd2 = COALESCE($122,ksk_noisoinbi_hd2),
ksk_noisoinbi_hd3 = COALESCE($123,ksk_noisoinbi_hd3),
ksk_khamtieuhoa_hd1 = COALESCE($124,ksk_khamtieuhoa_hd1),
ksk_khamtieuhoa_hd2 = COALESCE($125,ksk_khamtieuhoa_hd2),
ksk_khamtieuhoa_hd3 = COALESCE($126,ksk_khamtieuhoa_hd3),
ksk_noisoidaday_hd1 = COALESCE($127,ksk_noisoidaday_hd1),
ksk_noisoidaday_hd2 = COALESCE($128,ksk_noisoidaday_hd2),
ksk_noisoidaday_hd3 = COALESCE($129,ksk_noisoidaday_hd3),
ksk_noisoidaitrang_hd1 = COALESCE($130,ksk_noisoidaitrang_hd1),
ksk_noisoidaitrang_hd2 = COALESCE($131,ksk_noisoidaitrang_hd2),
ksk_noisoidaitrang_hd3 = COALESCE($132,ksk_noisoidaitrang_hd3),
ksk_noisoidadaypolype_hd1 = COALESCE($133,ksk_noisoidadaypolype_hd1),
ksk_noisoidadaypolype_hd2 = COALESCE($134,ksk_noisoidadaypolype_hd2),
ksk_noisoidadaypolype_hd3 = COALESCE($135,ksk_noisoidadaypolype_hd3),
ksk_noisoidaitrangpolype_hd1 = COALESCE($136,ksk_noisoidaitrangpolype_hd1),
ksk_noisoidaitrangpolype_hd2 = COALESCE($137,ksk_noisoidaitrangpolype_hd2),
ksk_noisoidaitrangpolype_hd3 = COALESCE($138,ksk_noisoidaitrangpolype_hd3),
ksk_gaymenoisoidaday_hd1 = COALESCE($139,ksk_gaymenoisoidaday_hd1),
ksk_gaymenoisoidaday_hd2 = COALESCE($140,ksk_gaymenoisoidaday_hd2),
ksk_gaymenoisoidaday_hd3 = COALESCE($141,ksk_gaymenoisoidaday_hd3),
ksk_gaymenoisoidaitrang_hd1 = COALESCE($142,ksk_gaymenoisoidaitrang_hd1),
ksk_gaymenoisoidaitrang_hd2 = COALESCE($143,ksk_gaymenoisoidaitrang_hd2),
ksk_gaymenoisoidaitrang_hd3 = COALESCE($144,ksk_gaymenoisoidaitrang_hd3),
ksk_gaymenoisoidadaypolype_hd1 = COALESCE($145,ksk_gaymenoisoidadaypolype_hd1),
ksk_gaymenoisoidadaypolype_hd2 = COALESCE($146,ksk_gaymenoisoidadaypolype_hd2),
ksk_gaymenoisoidadaypolype_hd3 = COALESCE($147,ksk_gaymenoisoidadaypolype_hd3),
ksk_gaymenoisoidaitrangpolype_hd1 = COALESCE($148,ksk_gaymenoisoidaitrangpolype_hd1),
ksk_gaymenoisoidaitrangpolype_hd2 = COALESCE($149,ksk_gaymenoisoidaitrangpolype_hd2),
ksk_gaymenoisoidaitrangpolype_hd3 = COALESCE($150,ksk_gaymenoisoidaitrangpolype_hd3),
ksk_tongkethoso_4to = COALESCE($151,ksk_tongkethoso_4to),
ksk_tongkethoso_1to = COALESCE($152,ksk_tongkethoso_1to),
ksk_tongkethoso_pru = COALESCE($153,ksk_tongkethoso_pru),
ksk_dieuduonglamhoso_1to = COALESCE($154,ksk_dieuduonglamhoso_1to),
ksk_dieuduonglamhoso_4to = COALESCE($155,ksk_dieuduonglamhoso_4to),
dd_dungcu = COALESCE($156,dd_dungcu),
kham_q7_db = COALESCE($157,kham_q7_db),
kham_q7_bh = COALESCE($158,kham_q7_bh),
kham_q7_kl = COALESCE($159,kham_q7_kl),
thuthuat_q7_db = COALESCE($160,thuthuat_q7_db),
thuthuat_q7_bh = COALESCE($161,thuthuat_q7_bh),
thuthuat_q7_kl = COALESCE($162,thuthuat_q7_kl),
ksk_khamvisa_hd1 = COALESCE($163,ksk_khamvisa_hd1),
      ksk_khamvisa_hd2 = COALESCE($164,ksk_khamvisa_hd2),
      ksk_khamvisa_hd3 = COALESCE($165,ksk_khamvisa_hd3),
      ksk_clsvisa_hd1 = COALESCE($166,ksk_clsvisa_hd1),
      ksk_clsvisa_hd2 = COALESCE($167,ksk_clsvisa_hd2),
      ksk_clsvisa_hd3 = COALESCE($168,ksk_clsvisa_hd3)


    WHERE UPPER(hang) = UPPER($169) and tamngung = 0;
    `;

    const values = [
      tennhanvien,
      chucvu,
      chuyenkhoa,
      remuneration_created,
      updatedDate,
      update_by,
      chidinh_cls,
      chidinh_nsth,
      chidinh_toandien,
      chidinh_phauthuat,
      gioithieungoai,
      khamtoandien,
      ngoaigio_bv,
      dodakygiacngu,
      kham_db,
      kham_bh,
      kham_kl,
      taikham_db,
      taikham_bh,
      taikham_kl,
      thcls_db,
      thcls_bh,
      thcls_kl,
      thcls_ngoaigio_db,
      thcls_ngoaigio_bh,
      thcls_ngoaigio_kl,
      thuthuat_db,
      thuthuat_bh,
      thuthuat_kl,
      dientim_hh_db,
      dientim_hh_bh,
      dientim_hh_kl,
      sieuam_db,
      sieuam_bh,
      sieuam_kl,
      xquang_db,
      xquang_bh,
      xquang_kl,
      doloangxuong_db,
      doloangxuong_bh,
      doloangxuong_kl,
      gayme_db,
      gayme_bh,
      gayme_kl,
      gayme_tmh_db,
      gayme_tmh_bh,
      gayme_tmh_kl,
      gayme_th_db,
      gayme_th_bh,
      gayme_th_kl,
      implant_1,
      implant_2,
      phauthuat_de,
      phauthuat_trungbinh,
      phauthuat_kho,
      phauthuat_bsphu,
      phauthuat_trubaohiem,
      phauthuat_trubncu,
      phauthuat_trudanbenh,
      dieutrinoitru_db,
      dieutrinoitru_bh,
      dieutrinoitru_kl,
      dieutrinoitru_dongia,
      chamsocsauphauthuat_db,
      chamsocsauphauthuat_bh,
      chamsocsauphauthuat_kl,
      ksk_congkham_tongquat_hd1,
      ksk_congkham_tongquat_hd2,
      ksk_congkham_tongquat_hd3,
      ksk_congkham_chuyenkhoa_hd1,
      ksk_congkham_chuyenkhoa_hd2,
      ksk_congkham_chuyenkhoa_hd3,
      ksk_cls_hd1,
      ksk_cls_hd2,
      ksk_cls_hd3,
      ksk_sieuamdv1_hd1,
      ksk_sieuamdv1_hd2,
      ksk_sieuamdv1_hd3,
      ksk_sieuamdv234_hd1,
      ksk_sieuamdv234_hd2,
      ksk_sieuamdv234_hd3,
      ksk_khamphukhoa_hd1,
      ksk_khamphukhoa_hd2,
      ksk_khamphukhoa_hd3,
      ksk_noisoiphukhoa_hd1,
      ksk_noisoiphukhoa_hd2,
      ksk_noisoiphukhoa_hd3,
      ksk_soinhuomphukhoa_hd1,
      ksk_soinhuomphukhoa_hd2,
      ksk_soinhuomphukhoa_hd3,
      ksk_dientim_hd1,
      ksk_dientim_hd2,
      ksk_dientim_hd3,
      ksk_hohap_hd1,
      ksk_hohap_hd2,
      ksk_hohap_hd3,
      ksk_ct_hd1,
      ksk_ct_hd2,
      ksk_ct_hd3,
      ksk_doloangxuong_hd1,
      ksk_doloangxuong_hd2,
      ksk_doloangxuong_hd3,
      ksk_xquang_hd1,
      ksk_xquang_hd2,
      ksk_xquang_hd3,
      ksk_thinhhoc_hd1,
      ksk_thinhhoc_hd2,
      ksk_thinhhoc_hd3,
      ksk_sieuamtim_hd1,
      ksk_sieuamtim_hd2,
      ksk_sieuamtim_hd3,
      ksk_sieuammachmau_hd1,
      ksk_sieuammachmau_hd2,
      ksk_sieuammachmau_hd3,
      ksk_mrhm_hd1,
      ksk_mrhm_hd2,
      ksk_mrhm_hd3,
      ksk_chupnhuanh_hd1,
      ksk_chupnhuanh_hd2,
      ksk_chupnhuanh_hd3,
      ksk_noisoinbi_hd1,
      ksk_noisoinbi_hd2,
      ksk_noisoinbi_hd3,
      ksk_khamtieuhoa_hd1,
      ksk_khamtieuhoa_hd2,
      ksk_khamtieuhoa_hd3,
      ksk_noisoidaday_hd1,
      ksk_noisoidaday_hd2,
      ksk_noisoidaday_hd3,
      ksk_noisoidaitrang_hd1,
      ksk_noisoidaitrang_hd2,
      ksk_noisoidaitrang_hd3,
      ksk_noisoidadaypolype_hd1,
      ksk_noisoidadaypolype_hd2,
      ksk_noisoidadaypolype_hd3,
      ksk_noisoidaitrangpolype_hd1,
      ksk_noisoidaitrangpolype_hd2,
      ksk_noisoidaitrangpolype_hd3,
      ksk_gaymenoisoidaday_hd1,
      ksk_gaymenoisoidaday_hd2,
      ksk_gaymenoisoidaday_hd3,
      ksk_gaymenoisoidaitrang_hd1,
      ksk_gaymenoisoidaitrang_hd2,
      ksk_gaymenoisoidaitrang_hd3,
      ksk_gaymenoisoidadaypolype_hd1,
      ksk_gaymenoisoidadaypolype_hd2,
      ksk_gaymenoisoidadaypolype_hd3,
      ksk_gaymenoisoidaitrangpolype_hd1,
      ksk_gaymenoisoidaitrangpolype_hd2,
      ksk_gaymenoisoidaitrangpolype_hd3,
      ksk_tongkethoso_4to,
      ksk_tongkethoso_1to,
      ksk_tongkethoso_pru,
      ksk_dieuduonglamhoso_1to,
      ksk_dieuduonglamhoso_4to,
      dd_dungcu,
      kham_q7_db,
      kham_q7_bh,
      kham_q7_kl,
      thuthuat_q7_db,
      thuthuat_q7_bh,
      thuthuat_q7_kl,
      ksk_khamvisa_hd1,
      ksk_khamvisa_hd2,
      ksk_khamvisa_hd3,
      ksk_clsvisa_hd1,
      ksk_clsvisa_hd2,
      ksk_clsvisa_hd3,
      hang,
    ];

    const result = await pgClient.query(updateQuery, values);

    if (result.rowCount > 0) {
      res.status(200).json({
        message: `Cập nhật thành công các bác sĩ hạng ${String(
          hang
        ).toUpperCase()}`,
      });
    } else {
      res.status(404).json({ error: "Không tìm thấy hạng cần update" });
    }
  } catch (error) {
    console.error("Lỗi cập nhật:", error);

    res.status(500).json({ error: "Lỗi cập nhật dữ liệu" });
  }
});

router.put("/delete-remuneration/:nhanvien_id", async (req, res) => {
  const { update_by, tamngung } = req.body;
  const nhanvien_id = req.params.nhanvien_id;
  const updatedDate = getCurrentDateTimeISO();

  if (!nhanvien_id) {
    res.status(400).json({ error: "Vui lòng cung cấp nhanvien_id" });
    return;
  }

  try {
    const updateQuery = `
      UPDATE remuneration
      SET 
        update_by = $1,
        tamngung = $2,
        remuneration_updatedate = $3

      WHERE nhanvien_id = $4;
    `;

    const values = [update_by, tamngung, updatedDate, nhanvien_id];
    const result = await pgClient.query(updateQuery, values);

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Xóa thành công" });
    } else {
      res.status(404).json({ error: "Không tìm thấy nhân viên" });
    }
  } catch (error) {
    console.error("Lỗi cập nhật:", error);
    res.status(500).json({ error: "Lỗi cập nhật dữ liệu" });
  }
});

// router.delete("/delete-remuneration/:id", async (req, res) => {

//   const nhanvien_id = req.params.id;

//   try {
//     const deleteQuery = `DELETE FROM remuneration WHERE nhanvien_id = '${nhanvien_id}'`;

//     const result = await pgClient.query(deleteQuery);

//     if (result.rowCount > 0) {
//       res.status(200).json({ message: "Xóa bác sĩ thành công" });
//     } else {
//       res.status(404).json({ message: "Không tìm thấy bác sĩ để xóa" });

//     }
//   } catch (error) {
//     console.error("Lỗi khi xóa bác sĩ:", error);
//     res.status(500).json({ error: "Lỗi khi cập nhật thông tin" });
//   }
// });
module.exports = router;
