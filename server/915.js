var express = require("express");
var cors = require("cors");
const multer = require("multer");
const XLSX = require("xlsx");

const router = express.Router();
router.use(cors());
router.use(express.json());
const upload = multer({ dest: "uploads/" });
var { conn_Clinic_TMH } = require("./connect.js");

router.post("/uploadExcel915", upload.single("file"), async (req, res) => {
  try {
    const excelData = parseExcel(req.file.path);
    const logContents = await updateDatabase(excelData); // Lấy logContents từ hàm updateDatabase
    res.json({ message: "Upload successful", logContents: logContents });
  } catch (error) {
    console.error("Error uploading Excel file:", error);
    res.status(500).json({ error: "Failed to upload Excel file" });
  }
});

function parseExcel(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
}

async function updateDatabase(data) {
  var pool = await conn_Clinic_TMH; // Khởi tạo kết nối đến cơ sở dữ liệu
  const updatedData = data.slice(1);
  const logContents = [];
  for (const row of updatedData) {
    const nhanVienId = row["NhanVien_Id"];
    delete row["NhanVien_Id"]; // Xóa cột NhanVien_Id khỏi dữ liệu, vì chúng ta sẽ sử dụng nó trong điều kiện WHERE
    let setClause = Object.keys(row)
      .map((key) => `${key} = ${row[key]}`)
      .join(", ");
    const query = `UPDATE dbo.PhanTram_BS SET ${setClause} WHERE NhanVien_Id = ${nhanVienId}`;

    try {
      // Thực hiện truy vấn SQL để cập nhật cơ sở dữ liệu
      await pool.request().query(query);
      const logContent = { ...row };
      logContent["NhanVien_Id"] = nhanVienId;
      logContents.push(logContent);
    } catch (err) {
      console.error(err);
      throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
    }
  }
  return logContents;
}

router.get("/nhanvien915", async function (req, res) {
  var pool = await conn_Clinic_TMH;

  var sqlString = `SELECT NhanVien_Id,TenNhanVien FROM dbo.PhanTram_BS ORDER BY TenNhanVien ASC`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});

router.get(`/thuthuat915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoThuThuat_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/congkham915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoCongKham_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/cdcls915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoChiDinhCLS_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/thcls915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoTHCLS_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/gayme915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoGayMe_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/ngoaigio915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoKhamNgoaiGio_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/clskskdk915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoCLSKSKDK_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/gaymeksk915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoGayMeCLSDK_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/congkhamkskdk915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoKhamKSKDK_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/kskdalieungoaivien`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoKhamKSKDK_NgoaiVien_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/ksktd915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoKhamSucKhoeToanDien_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/tongkeths915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoTongKetHoSo_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/tonghopdv915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoTongHopDV_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/ngoaivienvaonoivien`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC ThuLaoNgoaiVienVaoNoiVien_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/tonghopksk915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoTongHopKSK_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get(`/dieuduonglamhsksk`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoDieuDuongLamHoSoKSK_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get("/listnhanvien915", async function (req, res) {
  var pool = await conn_Clinic_TMH;

  var sqlString = `SELECT NhanVien_Id,TenNhanVien FROM dbo.NhanVien WHERE TamNgung = 0 ORDER BY NgayTao ASC`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});

router.get(`/tylethulao915`, async function (req, res) {
  var pool = await conn_Clinic_TMH;

  var sqlString = `select ROW_NUMBER() OVER (ORDER BY a.PhanTram_Id) AS [STT],* from (SELECT * FROM dbo.PhanTram_BS)a`;

  try {
    // Simulate a delay of 500 milliseconds before processing the query
    setTimeout(async () => {
      const data = await pool.request().query(sqlString);
      res.send({ result: data.recordset });
    }, 0);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});

router.get("/tennhanvien915/:id", async function (req, res) {
  try {
    const pool = await conn_Clinic_TMH;
    const NhanVien_Id = req.params.id;

    const sqlString = `SELECT NhanVien_Id, TenNhanVien FROM dbo.NhanVien WHERE TamNgung = 0 AND NhanVien_Id = ${NhanVien_Id}`;
    const result = await pool
      .request()
      .input("NhanVien_Id", NhanVien_Id)
      .query(sqlString);
    if (result.recordset.length > 0) {
      res.send({ TenNhanVien: result.recordset[0].TenNhanVien });
    } else {
      res.status(404).send({ error: "Bác sĩ không tồn tại." });
    }
  } catch (err) {
    console.error("Error fetching doctor information:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.post("/insertlog915", async (req, res) => {
  var pool = await conn_Clinic_TMH;

  const { username, actionType, actionDetails } = req.body;

  try {
    // Tạo câu lệnh SQL INSERT tương ứng
    const insertQuery = `
      INSERT INTO dbo.CheckLogThuLao (Username, ActionType, ActionDetails, Timestamp) VALUES (N'${username}', N'${actionType}', N'${actionDetails}', GETDATE())`;

    // Thực hiện truy vấn chèn dữ liệu vào cơ sở dữ liệu
    const result = await pool.request().query(insertQuery);
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);

    res.status(500).json({
      error:
        "ID NHÂN VIÊN KHÔNG HỢP LỆ HOẶC BÁC SĨ ĐÃ TỒN TẠI TRONG BẢNG TỶ LỆ",
    });
  }
});

router.post("/insertbacsi915", async (req, res) => {
  var pool = await conn_Clinic_TMH;

  const {
    NhanVien_Id,
    TenNhanVien,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_CLS_DB,
    PhanTram_CLS_BH,
    PhanTram_CLS_KL,
    PhanTram_TT_DB,
    PhanTram_TT_BH,
    PhanTram_TT_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_GM_DB,
    PhanTram_GM_BH,
    PhanTram_GM_KL,
    PhanTram_ChiDinh_KTD,
    PhanTram_GioiThieuNgoai,
    PhanTram_SieuAm_DB,
    PhanTram_SieuAm_BH,
    PhanTram_SieuAm_KL,
    PhanTram_CLSKSKDK_HD3,
    PhanTram_CLSKSKDK_HD2,
    PhanTram_CLSKSKDK_HD1,
    PhanTram_SieuAmCT_HD3,
    PhanTram_SieuAmCT_HD2,
    PhanTram_SieuAmCT_HD1,
    PhanTram_PhuKhoaCT_HD3,
    PhanTram_PhuKhoaCT_HD2,
    PhanTram_PhuKhoaCT_HD1,
    PhanTram_XNPhuKhoaCT_HD3,
    PhanTram_XNPhuKhoaCT_HD2,
    PhanTram_XNPhuKhoaCT_HD1,
    KSKCTyGC2_2BS_HD1,
    KSKCTyGC2_2BS_HD2,
    KSKCTyGC2_2BS_HD3,
    KSKCTyGC2_3BS_HD1,
    KSKCTyGC2_3BS_HD2,
    KSKCTyGC2_3BS_HD3,
    KSKCTyGC2_4BS_HD1,
    KSKCTyGC2_4BS_HD2,
    KSKCTyGC2_4BS_HD3,
    KSKCTy_Duoi4CK_HD1,
    KSKCTy_Duoi4CK_HD2,
    KSKCTy_Duoi4CK_HD3,
    KSKCTy_PhuKhoaKSK_HD1,
    KSKCTy_PhuKhoaKSK_HD2,
    KSKCTy_PhuKhoaKSK_HD3,
    KSK_KetHoSo_4To,
    KSK_KetHoSo_1To,
    KSK_KetHoSo_Pru,
    PhanTram_XQuang_DB,
    PhanTram_XQuang_BH,
    PhanTram_XQuang_KL,
    PhanTram_DoLoangXuong_DB,
    PhanTram_DoLoangXuong_BH,
    PhanTram_DoLoangXuong_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    KhamToanDien,
    PhanTram_ChiDinhNSTH,
    DienTimCT_HD1,
    DienTimCT_HD2,
    DienTimCT_HD3,
    HoHapCT_HD1,
    HoHapCT_HD2,
    HoHapCT_HD3,
    CTCongTy_HD1,
    CTCongTy_HD2,
    CTCongTy_HD3,
    DoLoangXuongCT_HD1,
    DoLoangXuongCT_HD2,
    DoLoangXuongCT_HD3,
    XQuangCT_HD1,
    XQuangCT_HD2,
    XQuangCT_HD3,
    ThinhHocCT_HD1,
    ThinhHocCT_HD2,
    ThinhHocCT_HD3,
    SieuAmMachMauCT_HD1,
    SieuAmMachMauCT_HD2,
    SieuAmMachMauCT_HD3,
    MatRHMTMHCT_HD1,
    MatRHMTMHCT_HD2,
    MatRHMTMHCT_HD3,
    ChupNhuAnhCT_HD1,
    ChupNhuAnhCT_HD2,
    ChupNhuAnhCT_HD3,
    NoiSoiCT_HD1,
    NoiSoiCT_HD2,
    NoiSoiCT_HD3,
    SATimCT_HD1,
    SATimCT_HD2,
    SATimCT_HD3,
    ClsNgoaiGio_DB,
    ClsNgoaiGio_BH,
    ClsNgoaiGio_KL,
    ImPlant_1,
    ImPlant_2,
    PhanTram_SieuAmCT2_HD1,
    PhanTram_SieuAmCT2_HD2,
    PhanTram_SieuAmCT2_HD3,
    NoiSoiDD_HD1,
    NoiSoiDD_HD2,
    NoiSoiDD_HD3,
    NoiSoiDT_HD1,
    NoiSoiDT_HD2,
    NoiSoiDT_HD3,
    NoiSoiDDPolype_HD1,
    NoiSoiDDPolype_HD2,
    NoiSoiDDPolype_HD3,
    NoiSoiDTPolype_HD1,
    NoiSoiDTPolype_HD2,
    NoiSoiDTPolype_HD3,
    DD1To,
    DD4To,
    GayMeDD_HD1,
GayMeDD_HD2,
GayMeDD_HD3,
GayMeDT_HD1,
GayMeDT_HD2,
GayMeDT_HD3,
GayMeDD_Polype_HD1,
GayMeDD_Polype_HD2,
GayMeDD_Polype_HD3,
GayMeDT_Polype_HD1,
GayMeDT_Polype_HD2,
GayMeDT_Polype_HD3,
CongKham_TieuHoa_HD1,
CongKham_TieuHoa_HD2,
CongKham_TieuHoa_HD3,

  } = req.body;
  if (!NhanVien_Id || !TenNhanVien) {
    res
      .status(400)
      .json({ error: "Vui lòng cung cấp đầy đủ NhanVien_Id và TenNhanVien" });
    return;
  }
  try {
    // Tạo câu lệnh SQL INSERT tương ứng
    const insertQuery = `
          INSERT INTO dbo.PhanTram_BS
          (
              NhanVien_Id,
              TenNhanVien,
              PhanTram_Kham_DB,
              PhanTram_Kham_BH,
              PhanTram_Kham_KL,
              PhanTram_CLS_DB,
              PhanTram_CLS_BH,
              PhanTram_CLS_KL,
              PhanTram_TT_DB,
              PhanTram_TT_BH,
              PhanTram_TT_KL,
              PhanTram_ChiDinhCLS,
              PhanTram_GM_DB,
              PhanTram_GM_BH,
              PhanTram_GM_KL,
              PhanTram_ChiDinh_KTD,
              PhanTram_GioiThieuNgoai,
              PhanTram_SieuAm_DB,
              PhanTram_SieuAm_BH,
              PhanTram_SieuAm_KL,
              PhanTram_CLSKSKDK_HD3,
              PhanTram_CLSKSKDK_HD2,
              PhanTram_CLSKSKDK_HD1,
              PhanTram_SieuAmCT_HD3,
              PhanTram_SieuAmCT_HD2,
              PhanTram_SieuAmCT_HD1,
              PhanTram_PhuKhoaCT_HD3,
              PhanTram_PhuKhoaCT_HD2,
              PhanTram_PhuKhoaCT_HD1,
              PhanTram_XNPhuKhoaCT_HD3,
              PhanTram_XNPhuKhoaCT_HD2,
              PhanTram_XNPhuKhoaCT_HD1,
              KSKCTyGC2_2BS_HD1,
              KSKCTyGC2_2BS_HD2,
              KSKCTyGC2_2BS_HD3,
              KSKCTyGC2_3BS_HD1,
              KSKCTyGC2_3BS_HD2,
              KSKCTyGC2_3BS_HD3,
              KSKCTyGC2_4BS_HD1,
              KSKCTyGC2_4BS_HD2,
              KSKCTyGC2_4BS_HD3,
              KSKCTy_Duoi4CK_HD1,
              KSKCTy_Duoi4CK_HD2,
              KSKCTy_Duoi4CK_HD3,
              KSKCTy_PhuKhoaKSK_HD1,
              KSKCTy_PhuKhoaKSK_HD2,
              KSKCTy_PhuKhoaKSK_HD3,
              KSK_KetHoSo_4To,
              KSK_KetHoSo_1To,
              KSK_KetHoSo_Pru,
              PhanTram_XQuang_DB,
              PhanTram_XQuang_BH,
              PhanTram_XQuang_KL,
              PhanTram_DoLoangXuong_DB,
              PhanTram_DoLoangXuong_BH,
              PhanTram_DoLoangXuong_KL,
              PhanTram_ECGHH_DB,
              PhanTram_ECGHH_BH,
              PhanTram_ECGHH_KL,
              KhamToanDien,
              PhanTram_ChiDinhNSTH,
              DienTimCT_HD1,
              DienTimCT_HD2,
              DienTimCT_HD3,
              HoHapCT_HD1,
              HoHapCT_HD2,
              HoHapCT_HD3,
              CTCongTy_HD1,
              CTCongTy_HD2,
              CTCongTy_HD3,
              DoLoangXuongCT_HD1,
              DoLoangXuongCT_HD2,
              DoLoangXuongCT_HD3,
              XQuangCT_HD1,
              XQuangCT_HD2,
              XQuangCT_HD3,
              ThinhHocCT_HD1,
              ThinhHocCT_HD2,
              ThinhHocCT_HD3,
              SieuAmMachMauCT_HD1,
              SieuAmMachMauCT_HD2,
              SieuAmMachMauCT_HD3,
              MatRHMTMHCT_HD1,
              MatRHMTMHCT_HD2,
              MatRHMTMHCT_HD3,
              ChupNhuAnhCT_HD1,
              ChupNhuAnhCT_HD2,
              ChupNhuAnhCT_HD3,
              NoiSoiCT_HD1,
              NoiSoiCT_HD2,
              NoiSoiCT_HD3,
              SATimCT_HD1,
              SATimCT_HD2,
              SATimCT_HD3,
              ClsNgoaiGio_DB,
              ClsNgoaiGio_BH,
              ClsNgoaiGio_KL,
              ImPlant_1,
              ImPlant_2,
              PhanTram_SieuAmCT2_HD1,
              PhanTram_SieuAmCT2_HD2,
              PhanTram_SieuAmCT2_HD3,
              NoiSoiDD_HD1,
              NoiSoiDD_HD2,
              NoiSoiDD_HD3,
              NoiSoiDT_HD1,
              NoiSoiDT_HD2,
              NoiSoiDT_HD3,
              NoiSoiDDPolype_HD1,
              NoiSoiDDPolype_HD2,
              NoiSoiDDPolype_HD3,
              NoiSoiDTPolype_HD1,
              NoiSoiDTPolype_HD2,
              NoiSoiDTPolype_HD3,
              DD1To,
              DD4To,
              GayMeDD_HD1,
GayMeDD_HD2,
GayMeDD_HD3,
GayMeDT_HD1,
GayMeDT_HD2,
GayMeDT_HD3,
GayMeDD_Polype_HD1,
GayMeDD_Polype_HD2,
GayMeDD_Polype_HD3,
GayMeDT_Polype_HD1,
GayMeDT_Polype_HD2,
GayMeDT_Polype_HD3,
CongKham_TieuHoa_HD1,
CongKham_TieuHoa_HD2,
CongKham_TieuHoa_HD3                         
          )
            VALUES (${NhanVien_Id},
              N'${TenNhanVien}',
              ${PhanTram_Kham_DB},
              ${PhanTram_Kham_BH},
              ${PhanTram_Kham_KL},
              ${PhanTram_CLS_DB},
              ${PhanTram_CLS_BH},
              ${PhanTram_CLS_KL},
              ${PhanTram_TT_DB},
              ${PhanTram_TT_BH},
              ${PhanTram_TT_KL},
              ${PhanTram_ChiDinhCLS},
              ${PhanTram_GM_DB},
              ${PhanTram_GM_BH},
              ${PhanTram_GM_KL},
              ${PhanTram_ChiDinh_KTD},
              ${PhanTram_GioiThieuNgoai},
              ${PhanTram_SieuAm_DB},
              ${PhanTram_SieuAm_BH},
              ${PhanTram_SieuAm_KL},
              ${PhanTram_CLSKSKDK_HD3},
              ${PhanTram_CLSKSKDK_HD2},
              ${PhanTram_CLSKSKDK_HD1},
              ${PhanTram_SieuAmCT_HD3},
              ${PhanTram_SieuAmCT_HD2},
              ${PhanTram_SieuAmCT_HD1},
              ${PhanTram_PhuKhoaCT_HD3},
              ${PhanTram_PhuKhoaCT_HD2},
              ${PhanTram_PhuKhoaCT_HD1},
              ${PhanTram_XNPhuKhoaCT_HD3},
              ${PhanTram_XNPhuKhoaCT_HD2},
              ${PhanTram_XNPhuKhoaCT_HD1},
              ${KSKCTyGC2_2BS_HD1},
              ${KSKCTyGC2_2BS_HD2},
              ${KSKCTyGC2_2BS_HD3},
              ${KSKCTyGC2_3BS_HD1},
              ${KSKCTyGC2_3BS_HD2},
              ${KSKCTyGC2_3BS_HD3},
              ${KSKCTyGC2_4BS_HD1},
              ${KSKCTyGC2_4BS_HD2},
              ${KSKCTyGC2_4BS_HD3},
              ${KSKCTy_Duoi4CK_HD1},
              ${KSKCTy_Duoi4CK_HD2},
              ${KSKCTy_Duoi4CK_HD3},
              ${KSKCTy_PhuKhoaKSK_HD1},
              ${KSKCTy_PhuKhoaKSK_HD2},
              ${KSKCTy_PhuKhoaKSK_HD3},
              ${KSK_KetHoSo_4To},
              ${KSK_KetHoSo_1To},
              ${KSK_KetHoSo_Pru},
              ${PhanTram_XQuang_DB},
              ${PhanTram_XQuang_BH},
              ${PhanTram_XQuang_KL},
              ${PhanTram_DoLoangXuong_DB},
              ${PhanTram_DoLoangXuong_BH},
              ${PhanTram_DoLoangXuong_KL},
              ${PhanTram_ECGHH_DB},
              ${PhanTram_ECGHH_BH},
              ${PhanTram_ECGHH_KL},
              ${KhamToanDien},
              ${PhanTram_ChiDinhNSTH},
              ${DienTimCT_HD1},
              ${DienTimCT_HD2},
              ${DienTimCT_HD3},
              ${HoHapCT_HD1},
              ${HoHapCT_HD2},
              ${HoHapCT_HD3},
              ${CTCongTy_HD1},
              ${CTCongTy_HD2},
              ${CTCongTy_HD3},
              ${DoLoangXuongCT_HD1},
              ${DoLoangXuongCT_HD2},
              ${DoLoangXuongCT_HD3},
              ${XQuangCT_HD1},
              ${XQuangCT_HD2},
              ${XQuangCT_HD3},
              ${ThinhHocCT_HD1},
              ${ThinhHocCT_HD2},
              ${ThinhHocCT_HD3},
              ${SieuAmMachMauCT_HD1},
              ${SieuAmMachMauCT_HD2},
              ${SieuAmMachMauCT_HD3},
              ${MatRHMTMHCT_HD1},
              ${MatRHMTMHCT_HD2},
              ${MatRHMTMHCT_HD3},
              ${ChupNhuAnhCT_HD1},
              ${ChupNhuAnhCT_HD2},
              ${ChupNhuAnhCT_HD3},
              ${NoiSoiCT_HD1},
              ${NoiSoiCT_HD2},
              ${NoiSoiCT_HD3},
              ${SATimCT_HD1},
              ${SATimCT_HD2},
              ${SATimCT_HD3},
              ${ClsNgoaiGio_DB},
              ${ClsNgoaiGio_BH},
              ${ClsNgoaiGio_KL},
              ${ImPlant_1},
              ${ImPlant_2},
              ${PhanTram_SieuAmCT2_HD1},
              ${PhanTram_SieuAmCT2_HD2},
              ${PhanTram_SieuAmCT2_HD3},
              ${NoiSoiDD_HD1},
              ${NoiSoiDD_HD2},
              ${NoiSoiDD_HD3},
              ${NoiSoiDT_HD1},
              ${NoiSoiDT_HD2},
              ${NoiSoiDT_HD3},
              ${NoiSoiDDPolype_HD1},
              ${NoiSoiDDPolype_HD2},
              ${NoiSoiDDPolype_HD3},
              ${NoiSoiDTPolype_HD1},
              ${NoiSoiDTPolype_HD2},
              ${NoiSoiDTPolype_HD3},
              ${DD1To},
              ${DD4To},
              ${GayMeDD_HD1},
${GayMeDD_HD2},
${GayMeDD_HD3},
${GayMeDT_HD1},
${GayMeDT_HD2},
${GayMeDT_HD3},
${GayMeDD_Polype_HD1},
${GayMeDD_Polype_HD2},
${GayMeDD_Polype_HD3},
${GayMeDT_Polype_HD1},
${GayMeDT_Polype_HD2},
${GayMeDT_Polype_HD3},
${CongKham_TieuHoa_HD1},
${CongKham_TieuHoa_HD2},
${CongKham_TieuHoa_HD3}

              
            )
          `;

    // Thực hiện truy vấn chèn dữ liệu vào cơ sở dữ liệu
    const result = await pool.request().query(insertQuery);
    // Kiểm tra nếu có hàng được chèn thành công
    if (result.rowsAffected > 0) {
      res.status(201).json({ message: "Thêm bác sĩ thành công" });
    } else {
      res.status(401).json({ message: "Thêm bác sĩ KHÔNG thành công" });
    }
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);

    res.status(500).json({
      error:
        "ID NHÂN VIÊN KHÔNG HỢP LỆ HOẶC BÁC SĨ ĐÃ TỒN TẠI TRONG BẢNG TỶ LỆ",
    });
  }
});

router.put("/updatebacsi915/:id", async (req, res) => {
  var pool = await conn_Clinic_TMH;

  const NhanVien_Id = req.params.id;

  const {
    TenNhanVien,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_CLS_DB,
    PhanTram_CLS_BH,
    PhanTram_CLS_KL,
    PhanTram_TT_DB,
    PhanTram_TT_BH,
    PhanTram_TT_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_GM_DB,
    PhanTram_GM_BH,
    PhanTram_GM_KL,
    PhanTram_ChiDinh_KTD,
    PhanTram_GioiThieuNgoai,
    PhanTram_SieuAm_DB,
    PhanTram_SieuAm_BH,
    PhanTram_SieuAm_KL,
    PhanTram_CLSKSKDK_HD3,
    PhanTram_CLSKSKDK_HD2,
    PhanTram_CLSKSKDK_HD1,
    PhanTram_SieuAmCT_HD3,
    PhanTram_SieuAmCT_HD2,
    PhanTram_SieuAmCT_HD1,
    PhanTram_PhuKhoaCT_HD3,
    PhanTram_PhuKhoaCT_HD2,
    PhanTram_PhuKhoaCT_HD1,
    PhanTram_XNPhuKhoaCT_HD3,
    PhanTram_XNPhuKhoaCT_HD2,
    PhanTram_XNPhuKhoaCT_HD1,
    KSKCTyGC2_2BS_HD1,
    KSKCTyGC2_2BS_HD2,
    KSKCTyGC2_2BS_HD3,
    KSKCTyGC2_3BS_HD1,
    KSKCTyGC2_3BS_HD2,
    KSKCTyGC2_3BS_HD3,
    KSKCTyGC2_4BS_HD1,
    KSKCTyGC2_4BS_HD2,
    KSKCTyGC2_4BS_HD3,
    KSKCTy_Duoi4CK_HD1,
    KSKCTy_Duoi4CK_HD2,
    KSKCTy_Duoi4CK_HD3,
    KSKCTy_PhuKhoaKSK_HD1,
    KSKCTy_PhuKhoaKSK_HD2,
    KSKCTy_PhuKhoaKSK_HD3,
    KSK_KetHoSo_4To,
    KSK_KetHoSo_1To,
    KSK_KetHoSo_Pru,
    PhanTram_XQuang_DB,
    PhanTram_XQuang_BH,
    PhanTram_XQuang_KL,
    PhanTram_DoLoangXuong_DB,
    PhanTram_DoLoangXuong_BH,
    PhanTram_DoLoangXuong_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    KhamToanDien,
    PhanTram_ChiDinhNSTH,
    DienTimCT_HD1,
    DienTimCT_HD2,
    DienTimCT_HD3,
    HoHapCT_HD1,
    HoHapCT_HD2,
    HoHapCT_HD3,
    CTCongTy_HD1,
    CTCongTy_HD2,
    CTCongTy_HD3,
    DoLoangXuongCT_HD1,
    DoLoangXuongCT_HD2,
    DoLoangXuongCT_HD3,
    XQuangCT_HD1,
    XQuangCT_HD2,
    XQuangCT_HD3,
    ThinhHocCT_HD1,
    ThinhHocCT_HD2,
    ThinhHocCT_HD3,
    SieuAmMachMauCT_HD1,
    SieuAmMachMauCT_HD2,
    SieuAmMachMauCT_HD3,
    MatRHMTMHCT_HD1,
    MatRHMTMHCT_HD2,
    MatRHMTMHCT_HD3,
    ChupNhuAnhCT_HD1,
    ChupNhuAnhCT_HD2,
    ChupNhuAnhCT_HD3,
    NoiSoiCT_HD1,
    NoiSoiCT_HD2,
    NoiSoiCT_HD3,
    SATimCT_HD1,
    SATimCT_HD2,
    SATimCT_HD3,
    ClsNgoaiGio_DB,
    ClsNgoaiGio_BH,
    ClsNgoaiGio_KL,
    ImPlant_1,
    ImPlant_2,
    PhanTram_SieuAmCT2_HD1,
    PhanTram_SieuAmCT2_HD2,
    PhanTram_SieuAmCT2_HD3,
    NoiSoiDD_HD1,
    NoiSoiDD_HD2,
    NoiSoiDD_HD3,
    NoiSoiDT_HD1,
    NoiSoiDT_HD2,
    NoiSoiDT_HD3,
    NoiSoiDDPolype_HD1,
    NoiSoiDDPolype_HD2,
    NoiSoiDDPolype_HD3,
    NoiSoiDTPolype_HD1,
    NoiSoiDTPolype_HD2,
    NoiSoiDTPolype_HD3,
    DD1To,
      DD4To,
      GayMeDD_HD1,
GayMeDD_HD2,
GayMeDD_HD3,
GayMeDT_HD1,
GayMeDT_HD2,
GayMeDT_HD3,
GayMeDD_Polype_HD1,
GayMeDD_Polype_HD2,
GayMeDD_Polype_HD3,
GayMeDT_Polype_HD1,
GayMeDT_Polype_HD2,
GayMeDT_Polype_HD3,
CongKham_TieuHoa_HD1,
CongKham_TieuHoa_HD2,
CongKham_TieuHoa_HD3,

  } = req.body;

  try {
    // Tạo câu lệnh SQL UPDATE tương ứng
    const updateQuery = `
      UPDATE dbo.PhanTram_BS SET
      TenNhanVien=N'${TenNhanVien}',
      PhanTram_Kham_DB=${PhanTram_Kham_DB},
      PhanTram_Kham_BH=${PhanTram_Kham_BH},
      PhanTram_Kham_KL=${PhanTram_Kham_KL},
      PhanTram_CLS_DB=${PhanTram_CLS_DB},
      PhanTram_CLS_BH=${PhanTram_CLS_BH},
      PhanTram_CLS_KL=${PhanTram_CLS_KL},
      PhanTram_TT_DB=${PhanTram_TT_DB},
      PhanTram_TT_BH=${PhanTram_TT_BH},
      PhanTram_TT_KL=${PhanTram_TT_KL},
      PhanTram_ChiDinhCLS=${PhanTram_ChiDinhCLS},
      PhanTram_GM_DB=${PhanTram_GM_DB},
      PhanTram_GM_BH=${PhanTram_GM_BH},
      PhanTram_GM_KL=${PhanTram_GM_KL},
      PhanTram_ChiDinh_KTD=${PhanTram_ChiDinh_KTD},
      PhanTram_GioiThieuNgoai=${PhanTram_GioiThieuNgoai},
      PhanTram_SieuAm_DB=${PhanTram_SieuAm_DB},
      PhanTram_SieuAm_BH=${PhanTram_SieuAm_BH},
      PhanTram_SieuAm_KL=${PhanTram_SieuAm_KL},
      PhanTram_CLSKSKDK_HD3=${PhanTram_CLSKSKDK_HD3},
      PhanTram_CLSKSKDK_HD2=${PhanTram_CLSKSKDK_HD2},
      PhanTram_CLSKSKDK_HD1=${PhanTram_CLSKSKDK_HD1},
      PhanTram_SieuAmCT_HD3=${PhanTram_SieuAmCT_HD3},
      PhanTram_SieuAmCT_HD2=${PhanTram_SieuAmCT_HD2},
      PhanTram_SieuAmCT_HD1=${PhanTram_SieuAmCT_HD1},
      PhanTram_PhuKhoaCT_HD3=${PhanTram_PhuKhoaCT_HD3},
      PhanTram_PhuKhoaCT_HD2=${PhanTram_PhuKhoaCT_HD2},
      PhanTram_PhuKhoaCT_HD1=${PhanTram_PhuKhoaCT_HD1},
      PhanTram_XNPhuKhoaCT_HD3=${PhanTram_XNPhuKhoaCT_HD3},
      PhanTram_XNPhuKhoaCT_HD2=${PhanTram_XNPhuKhoaCT_HD2},
      PhanTram_XNPhuKhoaCT_HD1=${PhanTram_XNPhuKhoaCT_HD1},
      KSKCTyGC2_2BS_HD1=${KSKCTyGC2_2BS_HD1},
      KSKCTyGC2_2BS_HD2=${KSKCTyGC2_2BS_HD2},
      KSKCTyGC2_2BS_HD3=${KSKCTyGC2_2BS_HD3},
      KSKCTyGC2_3BS_HD1=${KSKCTyGC2_3BS_HD1},
      KSKCTyGC2_3BS_HD2=${KSKCTyGC2_3BS_HD2},
      KSKCTyGC2_3BS_HD3=${KSKCTyGC2_3BS_HD3},
      KSKCTyGC2_4BS_HD1=${KSKCTyGC2_4BS_HD1},
      KSKCTyGC2_4BS_HD2=${KSKCTyGC2_4BS_HD2},
      KSKCTyGC2_4BS_HD3=${KSKCTyGC2_4BS_HD3},
      KSKCTy_Duoi4CK_HD1=${KSKCTy_Duoi4CK_HD1},
      KSKCTy_Duoi4CK_HD2=${KSKCTy_Duoi4CK_HD2},
      KSKCTy_Duoi4CK_HD3=${KSKCTy_Duoi4CK_HD3},
      KSKCTy_PhuKhoaKSK_HD1=${KSKCTy_PhuKhoaKSK_HD1},
      KSKCTy_PhuKhoaKSK_HD2=${KSKCTy_PhuKhoaKSK_HD2},
      KSKCTy_PhuKhoaKSK_HD3=${KSKCTy_PhuKhoaKSK_HD3},
      KSK_KetHoSo_4To=${KSK_KetHoSo_4To},
      KSK_KetHoSo_1To=${KSK_KetHoSo_1To},
      KSK_KetHoSo_Pru=${KSK_KetHoSo_Pru},
      PhanTram_XQuang_DB=${PhanTram_XQuang_DB},
      PhanTram_XQuang_BH=${PhanTram_XQuang_BH},
      PhanTram_XQuang_KL=${PhanTram_XQuang_KL},
      PhanTram_DoLoangXuong_DB=${PhanTram_DoLoangXuong_DB},
      PhanTram_DoLoangXuong_BH=${PhanTram_DoLoangXuong_BH},
      PhanTram_DoLoangXuong_KL=${PhanTram_DoLoangXuong_KL},
      PhanTram_ECGHH_DB=${PhanTram_ECGHH_DB},
      PhanTram_ECGHH_BH=${PhanTram_ECGHH_BH},
      PhanTram_ECGHH_KL=${PhanTram_ECGHH_KL},
      KhamToanDien=${KhamToanDien},
      PhanTram_ChiDinhNSTH=${PhanTram_ChiDinhNSTH},
      DienTimCT_HD1=${DienTimCT_HD1},
      DienTimCT_HD2=${DienTimCT_HD2},
      DienTimCT_HD3=${DienTimCT_HD3},
      HoHapCT_HD1=${HoHapCT_HD1},
      HoHapCT_HD2=${HoHapCT_HD2},
      HoHapCT_HD3=${HoHapCT_HD3},
      CTCongTy_HD1=${CTCongTy_HD1},
      CTCongTy_HD2=${CTCongTy_HD2},
      CTCongTy_HD3=${CTCongTy_HD3},
      DoLoangXuongCT_HD1=${DoLoangXuongCT_HD1},
      DoLoangXuongCT_HD2=${DoLoangXuongCT_HD2},
      DoLoangXuongCT_HD3=${DoLoangXuongCT_HD3},
      XQuangCT_HD1=${XQuangCT_HD1},
      XQuangCT_HD2=${XQuangCT_HD2},
      XQuangCT_HD3=${XQuangCT_HD3},
      ThinhHocCT_HD1=${ThinhHocCT_HD1},
      ThinhHocCT_HD2=${ThinhHocCT_HD2},
      ThinhHocCT_HD3=${ThinhHocCT_HD3},
      SieuAmMachMauCT_HD1=${SieuAmMachMauCT_HD1},
      SieuAmMachMauCT_HD2=${SieuAmMachMauCT_HD2},
      SieuAmMachMauCT_HD3=${SieuAmMachMauCT_HD3},
      MatRHMTMHCT_HD1=${MatRHMTMHCT_HD1},
      MatRHMTMHCT_HD2=${MatRHMTMHCT_HD2},
      MatRHMTMHCT_HD3=${MatRHMTMHCT_HD3},
      ChupNhuAnhCT_HD1=${ChupNhuAnhCT_HD1},
      ChupNhuAnhCT_HD2=${ChupNhuAnhCT_HD2},
      ChupNhuAnhCT_HD3=${ChupNhuAnhCT_HD3},
      NoiSoiCT_HD1=${NoiSoiCT_HD1},
      NoiSoiCT_HD2=${NoiSoiCT_HD2},
      NoiSoiCT_HD3=${NoiSoiCT_HD3},
      SATimCT_HD1=${SATimCT_HD1},
      SATimCT_HD2=${SATimCT_HD2},
      SATimCT_HD3=${SATimCT_HD3},
      ClsNgoaiGio_DB=${ClsNgoaiGio_DB},
      ClsNgoaiGio_BH=${ClsNgoaiGio_BH},
      ClsNgoaiGio_KL=${ClsNgoaiGio_KL},
      ImPlant_1=${ImPlant_1},
      ImPlant_2=${ImPlant_2},
      PhanTram_SieuAmCT2_HD1=${PhanTram_SieuAmCT2_HD1},
      PhanTram_SieuAmCT2_HD2=${PhanTram_SieuAmCT2_HD2},
      PhanTram_SieuAmCT2_HD3=${PhanTram_SieuAmCT2_HD3},
      NoiSoiDD_HD1=${NoiSoiDD_HD1},
      NoiSoiDD_HD2=${NoiSoiDD_HD2},
      NoiSoiDD_HD3=${NoiSoiDD_HD3},
      NoiSoiDT_HD1=${NoiSoiDT_HD1},
      NoiSoiDT_HD2=${NoiSoiDT_HD2},
      NoiSoiDT_HD3=${NoiSoiDT_HD3},
      NoiSoiDDPolype_HD1=${NoiSoiDDPolype_HD1},
      NoiSoiDDPolype_HD2=${NoiSoiDDPolype_HD2},
      NoiSoiDDPolype_HD3=${NoiSoiDDPolype_HD3},
      NoiSoiDTPolype_HD1=${NoiSoiDTPolype_HD1},
      NoiSoiDTPolype_HD2=${NoiSoiDTPolype_HD2},
      NoiSoiDTPolype_HD3=${NoiSoiDTPolype_HD3},
      DD1To=${DD1To},
      DD4To=${DD4To},
      GayMeDD_HD1=${GayMeDD_HD1},
GayMeDD_HD2=${GayMeDD_HD2},
GayMeDD_HD3=${GayMeDD_HD3},
GayMeDT_HD1=${GayMeDT_HD1},
GayMeDT_HD2=${GayMeDT_HD2},
GayMeDT_HD3=${GayMeDT_HD3},
GayMeDD_Polype_HD1=${GayMeDD_Polype_HD1},
GayMeDD_Polype_HD2=${GayMeDD_Polype_HD2},
GayMeDD_Polype_HD3=${GayMeDD_Polype_HD3},
GayMeDT_Polype_HD1=${GayMeDT_Polype_HD1},
GayMeDT_Polype_HD2=${GayMeDT_Polype_HD2},
GayMeDT_Polype_HD3=${GayMeDT_Polype_HD3},
CongKham_TieuHoa_HD1=${CongKham_TieuHoa_HD1},
CongKham_TieuHoa_HD2=${CongKham_TieuHoa_HD2},
CongKham_TieuHoa_HD3=${CongKham_TieuHoa_HD3}


  
      WHERE NhanVien_Id = ${NhanVien_Id}
            `;

    // Thực hiện truy vấn cập nhật thông tin trong cơ sở dữ liệu
    const result = await pool.request().query(updateQuery);
    // Kiểm tra nếu có hàng được cập nhật thành công
    if (result.rowsAffected > 0) {
      res
        .status(200)
        .json({ message: "Thông tin đã được cập nhật thành công" });
    } else {
      res
        .status(404)
        .json({ message: "Không tìm thấy thông tin cần cập nhật" });
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật thông tin" });
  }
});

router.delete("/xoabacsi915/:id", async (req, res) => {
  var pool = await conn_Clinic_TMH;

  const NhanVien_Id = req.params.id;

  try {
    const deleteQuery = `DELETE FROM PhanTram_Bs WHERE NhanVien_Id = ${NhanVien_Id}`;

    const result = await pool.request().query(deleteQuery);

    if (result.rowsAffected > 0) {
      res.status(200).json({ message: "Xóa bác sĩ thành công" });
    } else {
      res.status(404).json({ message: "Không tìm thấy bác sĩ để xóa" });
      console.log(result);
    }
  } catch (error) {
    console.error("Lỗi khi xóa bác sĩ:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật thông tin" });
  }
});
module.exports = router;
