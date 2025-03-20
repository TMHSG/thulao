var express = require("express");
var cors = require("cors");
const multer = require('multer');
const XLSX = require('xlsx');

const router = express.Router();
router.use(cors());
router.use(express.json());
const upload = multer({ dest: 'uploads/' });
var { conn_Clinic_PKQ7 } = require("./connect.js");


router.post('/uploadExcelQ7', upload.single('file'), async (req, res) => {
  try {
    const excelData = parseExcel(req.file.path);
    const logContents = await updateDatabase(excelData); // Lấy logContents từ hàm updateDatabase
    res.json({ message: 'Upload successful', logContents: logContents });
  } catch (error) {
    console.error('Error uploading Excel file:', error);
    res.status(500).json({ error: 'Failed to upload Excel file' });
  }
});

function parseExcel(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
}

async function updateDatabase(data) {
  var pool = await conn_Clinic_PKQ7; // Khởi tạo kết nối đến cơ sở dữ liệu
  const updatedData = data.slice(1);
  const logContents = [];
  for (const row of updatedData ) {
    const nhanVienId = row['NhanVien_Id'];
    delete row['NhanVien_Id']; // Xóa cột NhanVien_Id khỏi dữ liệu, vì chúng ta sẽ sử dụng nó trong điều kiện WHERE
    let setClause = Object.keys(row).map(key => `${key} = ${row[key]}`).join(', ');
    const query = `UPDATE dbo.PhanTram_BS SET ${setClause} WHERE NhanVien_Id = ${nhanVienId}`;

    try {
      // Thực hiện truy vấn SQL để cập nhật cơ sở dữ liệu
      await pool.request().query(query);
      const logContent = { ...row };
      logContent['NhanVien_Id'] = nhanVienId; 
      logContents.push(logContent);
    } catch (err) {
      console.error(err);
      throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
    }
  }
  return logContents
}

router.get("/nhanvienq7", async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

  var sqlString = `SELECT NhanVien_Id,TenNhanVien FROM dbo.PhanTram_BS ORDER BY TenNhanVien ASC`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});

router.get(`/thuthuatq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

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

router.get(`/congkhamq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

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

router.get(`/cdclsq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

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

router.get(`/thclsq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

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

router.get(`/gaymeq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

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

router.get(`/tonghopq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC ThuLaoTongHop_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

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

router.get("/tennhanvienq7/:id", async function (req, res) {
  try {
    const pool = await conn_Clinic_PKQ7;
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

router.get(`/tylethulaoq7`, async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

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

router.get("/listnhanvienq7", async function (req, res) {
  var pool = await conn_Clinic_PKQ7;

  var sqlString = `SELECT NhanVien_Id,TenNhanVien FROM dbo.NhanVien WHERE TamNgung = 0 ORDER BY NgayTao ASC`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});

router.post("/insertbacsiq7", async (req, res) => {
  var pool = await conn_Clinic_PKQ7;

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
            PhanTram_ChiDinhNSTH            
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
            ${PhanTram_ChiDinhNSTH}

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

router.put("/updatebacsiq7/:id", async (req, res) => {
  var pool = await conn_Clinic_PKQ7;

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
    PhanTram_ChiDinhNSTH=${PhanTram_ChiDinhNSTH}

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

router.delete("/xoabacsiq7/:id", async (req, res) => {
  var pool = await conn_Clinic_PKQ7;

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

router.post("/insertlogq7", async (req, res) => {
  var pool = await conn_Clinic_PKQ7;

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
module.exports = router;
