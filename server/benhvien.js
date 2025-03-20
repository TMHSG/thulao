var express = require("express");
var cors = require("cors");
const multer = require('multer');
const XLSX = require('xlsx');

const router = express.Router();
router.use(cors());
router.use(express.json());
const upload = multer({ dest: 'uploads/' });
var { conn_eHospital_TMH } = require("./connect.js");
// const { VarChar } = require("msnodesqlv8");
// const { parse, types } = require("@babel/core");
//các route



router.post('/uploadExcel', upload.single('file'), async (req, res) => {
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

// async function updateDatabase(data,) {
//   var pool = await conn_eHospital_TMH; // Khởi tạo kết nối đến cơ sở dữ liệu
//   const updatedData = data.slice(1);
//   const logContents = [];
//   for (const row of updatedData ) {
//     const nhanVienId = row['NhanVien_Id'];
//     delete row['NhanVien_Id']; // Xóa cột NhanVien_Id khỏi dữ liệu, vì chúng ta sẽ sử dụng nó trong điều kiện WHERE
//     let setClause = Object.keys(row).map(key => `${key} = ${row[key]}`).join(', ');
  
//     const query = `UPDATE dbo.PhanTram_BS SET ${setClause} WHERE NhanVien_Id = ${nhanVienId}`;
// console.log(query);
// console.log(setClause); 
//     try {
//       // Thực hiện truy vấn SQL để cập nhật cơ sở dữ liệu
//       await pool.request().query(query);
//       const logContent = { ...row };
//       logContent['NhanVien_Id'] = nhanVienId; 
//       logContents.push(logContent);
     
//     } catch (err) {
//       console.error(err);
//       throw new Error(`Lỗi trong quá trình thực hiện truy vấn: ${err}`);
//     }
//   }
//   return logContents;
// }
async function updateDatabase(data) {
  var pool = await conn_eHospital_TMH; // Khởi tạo kết nối đến cơ sở dữ liệu
  const updatedData = data.slice(1);
  const logContents = [];
  for (const row of updatedData) {
    const nhanVienId = row['NhanVien_Id'];
    delete row['NhanVien_Id']; // Xóa cột NhanVien_Id khỏi dữ liệu, vì chúng ta sẽ sử dụng nó trong điều kiện WHERE
    
    // Tạo mảng chứa các cặp key-value cho set clause
    const setClauses = [];
    for (const [key, value] of Object.entries(row)) {
      // Nếu value là một chuỗi, thêm dấu nháy đơn xung quanh nó
      const formattedValue = typeof value === 'string' ? `'${value}'` : value;
      setClauses.push(`${key} = ${formattedValue}`);
    }
    // Kết hợp các cặp key-value thành một chuỗi
    const setClause = setClauses.join(', ');

    const query = `UPDATE dbo.PhanTram_BS SET ${setClause} WHERE NhanVien_Id = ${nhanVienId}`;
    //console.log(query);
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
  return logContents;
}



router.get(`/congkham`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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
router.get(`/thuthuat`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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

router.get(`/thcls`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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

router.get(`/cdcls`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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
router.get(`/phauthuat`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = `EXEC dbo.ThuLaoPhauThuat_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

  try {
    const request = pool.request();
    const data = await request.query(sqlString);
    res.send({ result: data.recordset });

  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Lỗi trong quá trình xử lý truy vấn." + err });
  }
});


router.get(`/cdpt`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoChiDinhPT_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

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

router.get(`/chamsocsaupt`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoChamSocSauPT_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

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

router.get(`/dieutrinoitru`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

  const { TuNgay, DenNgay, NhanVien_Id } = req.query;

  var sqlString = ` EXEC dbo.ThuLaoDieuTriNoiTru_2023 @TuNgay='${TuNgay}',@DenNgay='${DenNgay}',@NhanVien_Id=${NhanVien_Id}`;

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

router.get(`/ngoaigio`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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

router.get(`/gayme`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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

router.get(`/tonghop`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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

router.get(`/hangbs`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

  var sqlString = `select ROW_NUMBER() OVER (ORDER BY a.Hang_Id) AS [STT],* from (SELECT * FROM dbo.Hang_BacSi)a`;

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

router.get(`/tylethulao`, async function (req, res) {
  var pool = await conn_eHospital_TMH;

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

router.get("/nhanvien", async function (req, res) {
  var pool = await conn_eHospital_TMH;

  var sqlString = `SELECT NhanVien_Id,TenNhanVien FROM dbo.PhanTram_BS ORDER BY TenNhanVien ASC`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});
router.post("/insertbacsi", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const {
    NhanVien_Id,
    TenNhanVien,
    Hang_Bs,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_TaiKham_DB,
    PhanTram_TaiKham_BH,
    PhanTram_TaiKham_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_ThucHienCLS_DB,
    PhanTram_ThucHienCLS_BH,
    PhanTram_ThucHienCLS_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    PhanTram_ThuThuat_DB,
    PhanTram_ThuThuat_BH,
    PhanTram_ThuThuat_KL,
    PhanTram_GMTMH_DB,
    PhanTram_GMTMH_BH,
    PhanTram_GMTMH_KL,
    PhanTram_GMTH_DB,
    PhanTram_GMTH_BH,
    PhanTram_GMTH_KL,
    NgoaiGio,
    PhanTram_PTChinh,
    PhanTram_PTPhu,
    PhanTram_PTCungBsKhac,
    PhanTram_PT_BSGioiThieuNgoai,
    PhanTram_PT_ChiDinh,
    PhanTram_PTChinh_TruBH,
    ThuLaoChamSocSPT_DB,
    ThuLaoChamSocSPT_BH,
    ThuLaoChamSocSPT_KL,
    PhanTram_Tru_PTKho,
    DonGiaDTNTru,
    PhanTram_DTNT_DB,
    PhanTram_DTNT_BH,
    PhanTram_DTNT_KL,
    PhanTram_MienGiam13,
    PhanTram_MienGiam2,
    PhanTram_DDKGN,
    PhanTram_NGCLS_DB,
    PhanTram_NGCLS_BH,
    PhanTram_NGCLS_KL,
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
        Hang_Bs,
        PhanTram_Kham_DB,
        PhanTram_Kham_BH,
        PhanTram_Kham_KL,
        PhanTram_TaiKham_DB,
        PhanTram_TaiKham_BH,
        PhanTram_TaiKham_KL,
        PhanTram_ChiDinhCLS,
        PhanTram_ThucHienCLS_DB,
        PhanTram_ThucHienCLS_BH,
        PhanTram_ThucHienCLS_KL,
        PhanTram_ECGHH_DB,
        PhanTram_ECGHH_BH,
        PhanTram_ECGHH_KL,
        PhanTram_ThuThuat_DB,
        PhanTram_ThuThuat_BH,
        PhanTram_ThuThuat_KL,
        PhanTram_GMTMH_DB,
        PhanTram_GMTMH_BH,
        PhanTram_GMTMH_KL,
        PhanTram_GMTH_DB,
        PhanTram_GMTH_BH,
        PhanTram_GMTH_KL,
        NgoaiGio,
        PhanTram_PTChinh,
        PhanTram_PTPhu,
        PhanTram_PTCungBsKhac,
        PhanTram_PT_BSGioiThieuNgoai,
        PhanTram_PT_ChiDinh,
        PhanTram_PTChinh_TruBH,
        ThuLaoChamSocSPT_DB,
        ThuLaoChamSocSPT_BH,
        ThuLaoChamSocSPT_KL,
        PhanTram_Tru_PTKho,
        DonGiaDTNTru,
        PhanTram_DTNT_DB,
        PhanTram_DTNT_BH,
        PhanTram_DTNT_KL,
        PhanTram_MienGiam13,
        PhanTram_MienGiam2,
        PhanTram_DDKGN,
        PhanTram_NGCLS_DB,
        PhanTram_NGCLS_BH,
        PhanTram_NGCLS_KL
    )
      VALUES (${NhanVien_Id},N'${TenNhanVien}','${Hang_Bs}', ${PhanTram_Kham_DB}, ${PhanTram_Kham_BH}, ${PhanTram_Kham_KL},${PhanTram_TaiKham_DB},
      ${PhanTram_TaiKham_BH},
      ${PhanTram_TaiKham_KL},
      ${PhanTram_ChiDinhCLS},
      ${PhanTram_ThucHienCLS_DB},
      ${PhanTram_ThucHienCLS_BH},
      ${PhanTram_ThucHienCLS_KL},
      ${PhanTram_ECGHH_DB},
      ${PhanTram_ECGHH_BH},
      ${PhanTram_ECGHH_KL},
      ${PhanTram_ThuThuat_DB},
      ${PhanTram_ThuThuat_BH},
      ${PhanTram_ThuThuat_KL},
      ${PhanTram_GMTMH_DB},
      ${PhanTram_GMTMH_BH},
      ${PhanTram_GMTMH_KL},
      ${PhanTram_GMTH_DB},
      ${PhanTram_GMTH_BH},
      ${PhanTram_GMTH_KL},
      ${NgoaiGio},
      ${PhanTram_PTChinh},
      ${PhanTram_PTPhu},
      ${PhanTram_PTCungBsKhac},
      ${PhanTram_PT_BSGioiThieuNgoai},
      ${PhanTram_PT_ChiDinh},
      ${PhanTram_PTChinh_TruBH},
      ${ThuLaoChamSocSPT_DB},
      ${ThuLaoChamSocSPT_BH},
      ${ThuLaoChamSocSPT_KL},
      ${PhanTram_Tru_PTKho},
      ${DonGiaDTNTru},
      ${PhanTram_DTNT_DB},
      ${PhanTram_DTNT_BH},
      ${PhanTram_DTNT_KL},
      ${PhanTram_MienGiam13},
      ${PhanTram_MienGiam2},
      ${PhanTram_DDKGN},
      ${PhanTram_NGCLS_DB},
      ${PhanTram_NGCLS_BH},
      ${PhanTram_NGCLS_KL}
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

    res
      .status(500)
      .json({
        error:
          "ID NHÂN VIÊN KHÔNG HỢP LỆ HOẶC BÁC SĨ ĐÃ TỒN TẠI TRONG BẢNG TỶ LỆ",
      });
  }
});

router.put("/updatebacsi/:id", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const NhanVien_Id = req.params.id;

  const {
    TenNhanVien,
    Hang_Bs,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_TaiKham_DB,
    PhanTram_TaiKham_BH,
    PhanTram_TaiKham_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_ThucHienCLS_DB,
    PhanTram_ThucHienCLS_BH,
    PhanTram_ThucHienCLS_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    PhanTram_ThuThuat_DB,
    PhanTram_ThuThuat_BH,
    PhanTram_ThuThuat_KL,
    PhanTram_GMTMH_DB,
    PhanTram_GMTMH_BH,
    PhanTram_GMTMH_KL,
    PhanTram_GMTH_DB,
    PhanTram_GMTH_BH,
    PhanTram_GMTH_KL,
    NgoaiGio,
    PhanTram_PTChinh,
    PhanTram_PTPhu,
    PhanTram_PTCungBsKhac,
    PhanTram_PT_BSGioiThieuNgoai,
    PhanTram_PT_ChiDinh,
    PhanTram_PTChinh_TruBH,
    ThuLaoChamSocSPT_DB,
    ThuLaoChamSocSPT_BH,
    ThuLaoChamSocSPT_KL,
    PhanTram_Tru_PTKho,
    DonGiaDTNTru,
    PhanTram_DTNT_DB,
    PhanTram_DTNT_BH,
    PhanTram_DTNT_KL,
    PhanTram_MienGiam13,
    PhanTram_MienGiam2,
    PhanTram_DDKGN,
    PhanTram_NGCLS_DB,
    PhanTram_NGCLS_BH,
    PhanTram_NGCLS_KL,
  } = req.body;

  try {
    // Tạo câu lệnh SQL UPDATE tương ứng
    const updateQuery = `
    UPDATE dbo.PhanTram_BS SET
    TenNhanVien=N'${TenNhanVien}',
    Hang_Bs='${Hang_Bs}',
    PhanTram_Kham_DB=${PhanTram_Kham_DB},
    PhanTram_Kham_BH=${PhanTram_Kham_BH},
    PhanTram_Kham_KL=${PhanTram_Kham_KL},
    PhanTram_TaiKham_DB=${PhanTram_TaiKham_DB},
    PhanTram_TaiKham_BH=${PhanTram_TaiKham_BH},
    PhanTram_TaiKham_KL=${PhanTram_TaiKham_KL},
    PhanTram_ChiDinhCLS=${PhanTram_ChiDinhCLS},
    PhanTram_ThucHienCLS_DB=${PhanTram_ThucHienCLS_DB},
    PhanTram_ThucHienCLS_BH=${PhanTram_ThucHienCLS_BH},
    PhanTram_ThucHienCLS_KL=${PhanTram_ThucHienCLS_KL},
    PhanTram_ECGHH_DB=${PhanTram_ECGHH_DB},
    PhanTram_ECGHH_BH=${PhanTram_ECGHH_BH},
    PhanTram_ECGHH_KL=${PhanTram_ECGHH_KL},
    PhanTram_ThuThuat_DB=${PhanTram_ThuThuat_DB},
    PhanTram_ThuThuat_BH=${PhanTram_ThuThuat_BH},
    PhanTram_ThuThuat_KL=${PhanTram_ThuThuat_KL},
    PhanTram_GMTMH_DB=${PhanTram_GMTMH_DB},
    PhanTram_GMTMH_BH=${PhanTram_GMTMH_BH},
    PhanTram_GMTMH_KL=${PhanTram_GMTMH_KL},
    PhanTram_GMTH_DB=${PhanTram_GMTH_DB},
    PhanTram_GMTH_BH=${PhanTram_GMTH_BH},
    PhanTram_GMTH_KL=${PhanTram_GMTH_KL},
    NgoaiGio=${NgoaiGio},
    PhanTram_PTChinh=${PhanTram_PTChinh},
    PhanTram_PTPhu=${PhanTram_PTPhu},
    PhanTram_PTCungBsKhac=${PhanTram_PTCungBsKhac},
    PhanTram_PT_BSGioiThieuNgoai=${PhanTram_PT_BSGioiThieuNgoai},
    PhanTram_PT_ChiDinh=${PhanTram_PT_ChiDinh},
    PhanTram_PTChinh_TruBH=${PhanTram_PTChinh_TruBH},
    ThuLaoChamSocSPT_DB=${ThuLaoChamSocSPT_DB},
    ThuLaoChamSocSPT_BH=${ThuLaoChamSocSPT_BH},
    ThuLaoChamSocSPT_KL=${ThuLaoChamSocSPT_KL},
    PhanTram_Tru_PTKho=${PhanTram_Tru_PTKho},
    DonGiaDTNTru=${DonGiaDTNTru},
    PhanTram_DTNT_DB=${PhanTram_DTNT_DB},
    PhanTram_DTNT_BH=${PhanTram_DTNT_BH},
    PhanTram_DTNT_KL=${PhanTram_DTNT_KL},
    PhanTram_MienGiam13=${PhanTram_MienGiam13},
    PhanTram_MienGiam2=${PhanTram_MienGiam2},
    PhanTram_DDKGN=${PhanTram_DDKGN},
    PhanTram_NGCLS_DB=${PhanTram_NGCLS_DB},
    PhanTram_NGCLS_BH=${PhanTram_NGCLS_BH},
    PhanTram_NGCLS_KL=${PhanTram_NGCLS_KL}
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
router.put("/updatebacsihangloat", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  // Extract the array of NhanVien_Id values from the request body
  const {
    NhanVien_Ids,
    Hang_Bs,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_TaiKham_DB,
    PhanTram_TaiKham_BH,
    PhanTram_TaiKham_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_ThucHienCLS_DB,
    PhanTram_ThucHienCLS_BH,
    PhanTram_ThucHienCLS_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    PhanTram_ThuThuat_DB,
    PhanTram_ThuThuat_BH,
    PhanTram_ThuThuat_KL,
    PhanTram_GMTMH_DB,
    PhanTram_GMTMH_BH,
    PhanTram_GMTMH_KL,
    PhanTram_GMTH_DB,
    PhanTram_GMTH_BH,
    PhanTram_GMTH_KL,
    NgoaiGio,
    PhanTram_PTChinh,
    PhanTram_PTPhu,
    PhanTram_PTCungBsKhac,
    PhanTram_PT_BSGioiThieuNgoai,
    PhanTram_PT_ChiDinh,
    PhanTram_PTChinh_TruBH,
    ThuLaoChamSocSPT_DB,
    ThuLaoChamSocSPT_BH,
    ThuLaoChamSocSPT_KL,
    PhanTram_Tru_PTKho,
    DonGiaDTNTru,
    PhanTram_DTNT_DB,
    PhanTram_DTNT_BH,
    PhanTram_DTNT_KL,
    PhanTram_MienGiam13,
    PhanTram_MienGiam2,
    PhanTram_DDKGN,
    PhanTram_NGCLS_DB,
    PhanTram_NGCLS_BH,
    PhanTram_NGCLS_KL, } = req.body;

  try {
    // Tạo câu lệnh SQL UPDATE tương ứng
    const updateQuery = ` UPDATE dbo.PhanTram_BS SET
    Hang_Bs='${Hang_Bs}',
    PhanTram_Kham_DB=${PhanTram_Kham_DB},
    PhanTram_Kham_BH=${PhanTram_Kham_BH},
    PhanTram_Kham_KL=${PhanTram_Kham_KL},
    PhanTram_TaiKham_DB=${PhanTram_TaiKham_DB},
    PhanTram_TaiKham_BH=${PhanTram_TaiKham_BH},
    PhanTram_TaiKham_KL=${PhanTram_TaiKham_KL},
    PhanTram_ChiDinhCLS=${PhanTram_ChiDinhCLS},
    PhanTram_ThucHienCLS_DB=${PhanTram_ThucHienCLS_DB},
    PhanTram_ThucHienCLS_BH=${PhanTram_ThucHienCLS_BH},
    PhanTram_ThucHienCLS_KL=${PhanTram_ThucHienCLS_KL},
    PhanTram_ECGHH_DB=${PhanTram_ECGHH_DB},
    PhanTram_ECGHH_BH=${PhanTram_ECGHH_BH},
    PhanTram_ECGHH_KL=${PhanTram_ECGHH_KL},
    PhanTram_ThuThuat_DB=${PhanTram_ThuThuat_DB},
    PhanTram_ThuThuat_BH=${PhanTram_ThuThuat_BH},
    PhanTram_ThuThuat_KL=${PhanTram_ThuThuat_KL},
    PhanTram_GMTMH_DB=${PhanTram_GMTMH_DB},
    PhanTram_GMTMH_BH=${PhanTram_GMTMH_BH},
    PhanTram_GMTMH_KL=${PhanTram_GMTMH_KL},
    PhanTram_GMTH_DB=${PhanTram_GMTH_DB},
    PhanTram_GMTH_BH=${PhanTram_GMTH_BH},
    PhanTram_GMTH_KL=${PhanTram_GMTH_KL},
    NgoaiGio=${NgoaiGio},
    PhanTram_PTChinh=${PhanTram_PTChinh},
    PhanTram_PTPhu=${PhanTram_PTPhu},
    PhanTram_PTCungBsKhac=${PhanTram_PTCungBsKhac},
    PhanTram_PT_BSGioiThieuNgoai=${PhanTram_PT_BSGioiThieuNgoai},
    PhanTram_PT_ChiDinh=${PhanTram_PT_ChiDinh},
    PhanTram_PTChinh_TruBH=${PhanTram_PTChinh_TruBH},
    ThuLaoChamSocSPT_DB=${ThuLaoChamSocSPT_DB},
    ThuLaoChamSocSPT_BH=${ThuLaoChamSocSPT_BH},
    ThuLaoChamSocSPT_KL=${ThuLaoChamSocSPT_KL},
    PhanTram_Tru_PTKho=${PhanTram_Tru_PTKho},
    DonGiaDTNTru=${DonGiaDTNTru},
    PhanTram_DTNT_DB=${PhanTram_DTNT_DB},
    PhanTram_DTNT_BH=${PhanTram_DTNT_BH},
    PhanTram_DTNT_KL=${PhanTram_DTNT_KL},
    PhanTram_MienGiam13=${PhanTram_MienGiam13},
    PhanTram_MienGiam2=${PhanTram_MienGiam2},
    PhanTram_DDKGN=${PhanTram_DDKGN},
    PhanTram_NGCLS_DB=${PhanTram_NGCLS_DB},
    PhanTram_NGCLS_BH=${PhanTram_NGCLS_BH},
    PhanTram_NGCLS_KL=${PhanTram_NGCLS_KL}
      WHERE NhanVien_Id IN (${NhanVien_Ids.join(', ')})
    `;

    // Thực hiện truy vấn cập nhật thông tin trong cơ sở dữ liệu
    const result = await pool.request().query(updateQuery);

    // Kiểm tra nếu có hàng được cập nhật thành công
    if (result.rowsAffected > 0) {
      res.status(200).json({ message: "Thông tin đã được cập nhật thành công" });
    } else {
      res.status(404).json({ message: "Không tìm thấy thông tin cần cập nhật" });
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật thông tin" });
  }
});
router.delete("/xoabacsi/:id", async (req, res) => {
  var pool = await conn_eHospital_TMH;

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
router.get("/listnhanvien", async function (req, res) {
  var pool = await conn_eHospital_TMH;

  var sqlString = `SELECT NhanVien_Id,TenNhanVien FROM dbo.NhanVien WHERE TamNgung = 0 ORDER BY NgayTao ASC`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});


router.post("/login", async (req, res) => {
  var pool = await conn_eHospital_TMH;
  const { username, password } = req.body;
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: "Vui lòng cung cấp tên người dùng và mật khẩu" });
    return;
  }

  var sqlString = `
    SELECT Name, Username, Password, Role
    FROM dbo.DangNhapThuLao
    WHERE Username = @username AND Password = @password`;

  try {
    const result = await pool
      .request()
      .input('username', username)
      .input('password', password)
      .query(sqlString);

    if (result.recordset.length > 0) {
      const user = result.recordset[0];
      res.status(200).json({
        Name: user.Name,
        userName: user.Username,
        userPassword: user.Password,
        role: user.Role,
        message: "Đăng nhập thành công",
      });
    } else {
      res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
    }
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi thực hiện đăng nhập" });
  }
});

router.post("/insertlog", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const {
    username,
    actionType,
    actionDetails

  } = req.body;

  try {
    // Tạo câu lệnh SQL INSERT tương ứng
    const insertQuery = `
    INSERT INTO dbo.CheckLogThuLao (Username, ActionType, ActionDetails, Timestamp) VALUES (N'${username}', N'${actionType}', N'${actionDetails}', GETDATE())`;

    // Thực hiện truy vấn chèn dữ liệu vào cơ sở dữ liệu
    const result = await pool.request().query(insertQuery);

  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);

    res
      .status(500)
      .json({
        error:
          "ID NHÂN VIÊN KHÔNG HỢP LỆ HOẶC BÁC SĨ ĐÃ TỒN TẠI TRONG BẢNG TỶ LỆ",
      });
  }
});


router.put("/updatepassword/:id", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const taikhoan = req.params.id;

  const {
    matkhau,
    resetmatkhau

  } = req.body;

  if (!req.body.resetmatkhau || !req.body.matkhau) {
    res.status(400).json({ error: "Vui lòng cung cấp đầy đủ thông tin" });
    return;
  }
  try {
    // Tạo câu lệnh SQL UPDATE tương ứng
    const updateQuery = `
    UPDATE dbo.DangNhapThuLao SET Password = '${resetmatkhau}' WHERE Username = '${taikhoan}' AND Password = '${matkhau}'
          `;

    // Thực hiện truy vấn cập nhật thông tin trong cơ sở dữ liệu
    const result = await pool.request().query(updateQuery);
    // Kiểm tra nếu có hàng được cập nhật thành công
    if (result.rowsAffected > 0) {
      res
        .status(200)
        .json({ message: "Mật khẩu đã được thay đổi" });
    } else {
      res
        .status(404)
        .json({ message: "Sai mật khẩu cũ" });

    }
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật thông tin" });
  }
});
router.post("/insertaccount", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const {
    name, username,password,role

  } = req.body;
  if (!req.body.name || !req.body.username || !req.body.password || !req.body.role) {
    res.status(400).json({ error: "Vui lòng cung cấp đầy đủ thông tin" });
    return;
  }
  try {
    // Tạo câu lệnh SQL INSERT tương ứng
    const insertQuery = `
    INSERT INTO dbo.DangNhapThuLao
(
    Name,
    Username,
    Password,
    Role
)
VALUES
(   N'${name}',
    '${username}',
    '${password}',
    '${role}'
    )`;

    // Thực hiện truy vấn chèn dữ liệu vào cơ sở dữ liệu
    const result = await pool.request().query(insertQuery);
    if (result.rowsAffected > 0) {
      res
        .status(200)
        .json({ message: "Tạo tài khoản thành công" });
    } else {
      res
        .status(404)
        .json({ message: "Tên đăng nhập đã tồn tại" });

    }
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);
    res
      .status(500)
      .json({
        error:
          "",
      });
  }
});


router.get("/tennhanvien/:id", async function (req, res) {
  try {
    const pool = await conn_eHospital_TMH;
    const NhanVien_Id = req.params.id;

    const sqlString = `SELECT NhanVien_Id, TenNhanVien FROM dbo.NhanVien WHERE TamNgung = 0 AND NhanVien_Id = ${NhanVien_Id}`;
    const result = await pool.request().input('NhanVien_Id', NhanVien_Id).query(sqlString);
    if (result.recordset.length > 0) {
      res.send({ TenNhanVien: result.recordset[0].TenNhanVien });
    } else {
      res.status(404).send({ error: 'Bác sĩ không tồn tại.' });
    }
  } catch (err) {
    console.error('Error fetching doctor information:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

router.get("/hangbs", async function (req, res) {
  var pool = await conn_eHospital_TMH;

  var sqlString = `SELECT * FROM dbo.Hang_BacSi`;
  return await pool.request().query(sqlString, function (err, data) {
    res.send({ result: data.recordset });
  });
});

router.get("/hangbsitem/:id", async function (req, res) {
  try {
    const pool = await conn_eHospital_TMH;
    const Hang = req.params.id;

    const sqlString = `SELECT * FROM dbo.Hang_BacSi WHERE Hang = '${Hang}'`;
    console.log(sqlString);
    const result = await pool.request().input('Hang', Hang).query(sqlString);
   
    if (result.recordset.length > 0) {
      
      res.send({ result: result.recordset });
    } else {
      res.status(404).send({ error: 'Hạng Bác sĩ không tồn tại.' });
    }
  } catch (err) {
    console.error('Error fetching Hang information:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

router.post("/inserthangbs", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const {
    
    Hang,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_TaiKham_DB,
    PhanTram_TaiKham_BH,
    PhanTram_TaiKham_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_ThucHienCLS_DB,
    PhanTram_ThucHienCLS_BH,
    PhanTram_ThucHienCLS_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    PhanTram_ThuThuat_DB,
    PhanTram_ThuThuat_BH,
    PhanTram_ThuThuat_KL,
    PhanTram_GMTMH_DB,
    PhanTram_GMTMH_BH,
    PhanTram_GMTMH_KL,
    PhanTram_GMTH_DB,
    PhanTram_GMTH_BH,
    PhanTram_GMTH_KL,
    NgoaiGio,
    PhanTram_PTChinh,
    PhanTram_PTPhu,
    PhanTram_PTCungBsKhac,
    PhanTram_PT_BSGioiThieuNgoai,
    PhanTram_PT_ChiDinh,
    PhanTram_PTChinh_TruBH,
    ThuLaoChamSocSPT_DB,
    ThuLaoChamSocSPT_BH,
    ThuLaoChamSocSPT_KL,
    PhanTram_Tru_PTKho,
    DonGiaDTNTru,
    PhanTram_DTNT_DB,
    PhanTram_DTNT_BH,
    PhanTram_DTNT_KL,
    PhanTram_MienGiam13,
    PhanTram_MienGiam2,
    PhanTram_DDKGN,
    PhanTram_NGCLS_DB,
    PhanTram_NGCLS_BH,
    PhanTram_NGCLS_KL,
  } = req.body;
  if (!Hang) {
    res
      .status(400)
      .json({ error: "Vui lòng cung cấp đầy đủ Hạng" });
    return;
  }
  try {
    // Tạo câu lệnh SQL INSERT tương ứng
    const insertQuery = `
    INSERT INTO dbo.Hang_BacSi
    (
        Hang,
        PhanTram_Kham_DB,
        PhanTram_Kham_BH,
        PhanTram_Kham_KL,
        PhanTram_TaiKham_DB,
        PhanTram_TaiKham_BH,
        PhanTram_TaiKham_KL,
        PhanTram_ChiDinhCLS,
        PhanTram_ThucHienCLS_DB,
        PhanTram_ThucHienCLS_BH,
        PhanTram_ThucHienCLS_KL,
        PhanTram_ECGHH_DB,
        PhanTram_ECGHH_BH,
        PhanTram_ECGHH_KL,
        PhanTram_ThuThuat_DB,
        PhanTram_ThuThuat_BH,
        PhanTram_ThuThuat_KL,
        PhanTram_GMTMH_DB,
        PhanTram_GMTMH_BH,
        PhanTram_GMTMH_KL,
        PhanTram_GMTH_DB,
        PhanTram_GMTH_BH,
        PhanTram_GMTH_KL,
        NgoaiGio,
        PhanTram_PTChinh,
        PhanTram_PTPhu,
        PhanTram_PTCungBsKhac,
        PhanTram_PT_BSGioiThieuNgoai,
        PhanTram_PT_ChiDinh,
        PhanTram_PTChinh_TruBH,
        ThuLaoChamSocSPT_DB,
        ThuLaoChamSocSPT_BH,
        ThuLaoChamSocSPT_KL,
        PhanTram_Tru_PTKho,
        DonGiaDTNTru,
        PhanTram_DTNT_DB,
        PhanTram_DTNT_BH,
        PhanTram_DTNT_KL,
        PhanTram_MienGiam13,
        PhanTram_MienGiam2,
        PhanTram_DDKGN,
        PhanTram_NGCLS_DB,
        PhanTram_NGCLS_BH,
        PhanTram_NGCLS_KL
    )
      VALUES ('${Hang}', ${PhanTram_Kham_DB}, ${PhanTram_Kham_BH}, ${PhanTram_Kham_KL},${PhanTram_TaiKham_DB},
      ${PhanTram_TaiKham_BH},
      ${PhanTram_TaiKham_KL},
      ${PhanTram_ChiDinhCLS},
      ${PhanTram_ThucHienCLS_DB},
      ${PhanTram_ThucHienCLS_BH},
      ${PhanTram_ThucHienCLS_KL},
      ${PhanTram_ECGHH_DB},
      ${PhanTram_ECGHH_BH},
      ${PhanTram_ECGHH_KL},
      ${PhanTram_ThuThuat_DB},
      ${PhanTram_ThuThuat_BH},
      ${PhanTram_ThuThuat_KL},
      ${PhanTram_GMTMH_DB},
      ${PhanTram_GMTMH_BH},
      ${PhanTram_GMTMH_KL},
      ${PhanTram_GMTH_DB},
      ${PhanTram_GMTH_BH},
      ${PhanTram_GMTH_KL},
      ${NgoaiGio},
      ${PhanTram_PTChinh},
      ${PhanTram_PTPhu},
      ${PhanTram_PTCungBsKhac},
      ${PhanTram_PT_BSGioiThieuNgoai},
      ${PhanTram_PT_ChiDinh},
      ${PhanTram_PTChinh_TruBH},
      ${ThuLaoChamSocSPT_DB},
      ${ThuLaoChamSocSPT_BH},
      ${ThuLaoChamSocSPT_KL},
      ${PhanTram_Tru_PTKho},
      ${DonGiaDTNTru},
      ${PhanTram_DTNT_DB},
      ${PhanTram_DTNT_BH},
      ${PhanTram_DTNT_KL},
      ${PhanTram_MienGiam13},
      ${PhanTram_MienGiam2},
      ${PhanTram_DDKGN},
      ${PhanTram_NGCLS_DB},
      ${PhanTram_NGCLS_BH},
      ${PhanTram_NGCLS_KL}
      )
    `;

    // Thực hiện truy vấn chèn dữ liệu vào cơ sở dữ liệu
    const result = await pool.request().query(insertQuery);
    // Kiểm tra nếu có hàng được chèn thành công
    if (result.rowsAffected > 0) {
      res.status(201).json({ message: "Thêm hạng bác sĩ thành công" });
    } else {
      res.status(401).json({ message: "Thêm hạng bác sĩ KHÔNG thành công" });
    }
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);

    res
      .status(500)
      .json({
        error:
          "Hạng bác sĩ này đã tồn tại",
      });
  }
});

router.put("/updatehangbs/:id", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const Hang_Id = req.params.id;

  const {
    
    Hang,
    PhanTram_Kham_DB,
    PhanTram_Kham_BH,
    PhanTram_Kham_KL,
    PhanTram_TaiKham_DB,
    PhanTram_TaiKham_BH,
    PhanTram_TaiKham_KL,
    PhanTram_ChiDinhCLS,
    PhanTram_ThucHienCLS_DB,
    PhanTram_ThucHienCLS_BH,
    PhanTram_ThucHienCLS_KL,
    PhanTram_ECGHH_DB,
    PhanTram_ECGHH_BH,
    PhanTram_ECGHH_KL,
    PhanTram_ThuThuat_DB,
    PhanTram_ThuThuat_BH,
    PhanTram_ThuThuat_KL,
    PhanTram_GMTMH_DB,
    PhanTram_GMTMH_BH,
    PhanTram_GMTMH_KL,
    PhanTram_GMTH_DB,
    PhanTram_GMTH_BH,
    PhanTram_GMTH_KL,
    NgoaiGio,
    PhanTram_PTChinh,
    PhanTram_PTPhu,
    PhanTram_PTCungBsKhac,
    PhanTram_PT_BSGioiThieuNgoai,
    PhanTram_PT_ChiDinh,
    PhanTram_PTChinh_TruBH,
    ThuLaoChamSocSPT_DB,
    ThuLaoChamSocSPT_BH,
    ThuLaoChamSocSPT_KL,
    PhanTram_Tru_PTKho,
    DonGiaDTNTru,
    PhanTram_DTNT_DB,
    PhanTram_DTNT_BH,
    PhanTram_DTNT_KL,
    PhanTram_MienGiam13,
    PhanTram_MienGiam2,
    PhanTram_DDKGN,
    PhanTram_NGCLS_DB,
    PhanTram_NGCLS_BH,
    PhanTram_NGCLS_KL,
  } = req.body;

  try {
    // Tạo câu lệnh SQL UPDATE tương ứng
    const updateQuery = `
    UPDATE dbo.Hang_BacSi SET
    Hang='${Hang}',
    PhanTram_Kham_DB=${PhanTram_Kham_DB},
    PhanTram_Kham_BH=${PhanTram_Kham_BH},
    PhanTram_Kham_KL=${PhanTram_Kham_KL},
    PhanTram_TaiKham_DB=${PhanTram_TaiKham_DB},
    PhanTram_TaiKham_BH=${PhanTram_TaiKham_BH},
    PhanTram_TaiKham_KL=${PhanTram_TaiKham_KL},
    PhanTram_ChiDinhCLS=${PhanTram_ChiDinhCLS},
    PhanTram_ThucHienCLS_DB=${PhanTram_ThucHienCLS_DB},
    PhanTram_ThucHienCLS_BH=${PhanTram_ThucHienCLS_BH},
    PhanTram_ThucHienCLS_KL=${PhanTram_ThucHienCLS_KL},
    PhanTram_ECGHH_DB=${PhanTram_ECGHH_DB},
    PhanTram_ECGHH_BH=${PhanTram_ECGHH_BH},
    PhanTram_ECGHH_KL=${PhanTram_ECGHH_KL},
    PhanTram_ThuThuat_DB=${PhanTram_ThuThuat_DB},
    PhanTram_ThuThuat_BH=${PhanTram_ThuThuat_BH},
    PhanTram_ThuThuat_KL=${PhanTram_ThuThuat_KL},
    PhanTram_GMTMH_DB=${PhanTram_GMTMH_DB},
    PhanTram_GMTMH_BH=${PhanTram_GMTMH_BH},
    PhanTram_GMTMH_KL=${PhanTram_GMTMH_KL},
    PhanTram_GMTH_DB=${PhanTram_GMTH_DB},
    PhanTram_GMTH_BH=${PhanTram_GMTH_BH},
    PhanTram_GMTH_KL=${PhanTram_GMTH_KL},
    NgoaiGio=${NgoaiGio},
    PhanTram_PTChinh=${PhanTram_PTChinh},
    PhanTram_PTPhu=${PhanTram_PTPhu},
    PhanTram_PTCungBsKhac=${PhanTram_PTCungBsKhac},
    PhanTram_PT_BSGioiThieuNgoai=${PhanTram_PT_BSGioiThieuNgoai},
    PhanTram_PT_ChiDinh=${PhanTram_PT_ChiDinh},
    PhanTram_PTChinh_TruBH=${PhanTram_PTChinh_TruBH},
    ThuLaoChamSocSPT_DB=${ThuLaoChamSocSPT_DB},
    ThuLaoChamSocSPT_BH=${ThuLaoChamSocSPT_BH},
    ThuLaoChamSocSPT_KL=${ThuLaoChamSocSPT_KL},
    PhanTram_Tru_PTKho=${PhanTram_Tru_PTKho},
    DonGiaDTNTru=${DonGiaDTNTru},
    PhanTram_DTNT_DB=${PhanTram_DTNT_DB},
    PhanTram_DTNT_BH=${PhanTram_DTNT_BH},
    PhanTram_DTNT_KL=${PhanTram_DTNT_KL},
    PhanTram_MienGiam13=${PhanTram_MienGiam13},
    PhanTram_MienGiam2=${PhanTram_MienGiam2},
    PhanTram_DDKGN=${PhanTram_DDKGN},
    PhanTram_NGCLS_DB=${PhanTram_NGCLS_DB},
    PhanTram_NGCLS_BH=${PhanTram_NGCLS_BH},
    PhanTram_NGCLS_KL=${PhanTram_NGCLS_KL}
    WHERE Hang_Id = ${Hang_Id}
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

router.delete("/xoahangbs/:id", async (req, res) => {
  var pool = await conn_eHospital_TMH;

  const Hang_Id = req.params.id;

  try {
    const deleteQuery = `DELETE FROM Hang_BacSi WHERE Hang_Id = ${Hang_Id}`;

    const result = await pool.request().query(deleteQuery);

    if (result.rowsAffected > 0) {
      res.status(200).json({ message: "Xóa hạng bác sĩ thành công" });
    } else {
      res.status(404).json({ message: "Không tìm thấy hạng bác sĩ để xóa" });
      
    }
  } catch (error) {
    console.error("Lỗi khi xóa hạng bác sĩ:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật thông tin" });
  }
});
module.exports = router;
