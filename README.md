Thù Lao - Hệ Thống Quản Lý Thù Lao
1. Giới thiệu
Dự án Thù Lao là một hệ thống quản lý và tính toán thù lao dành cho nhân viên trong bệnh viện. Hệ thống hỗ trợ tổng hợp dữ liệu từ nhiều nguồn, tính toán mức thù lao, và xuất báo cáo theo yêu cầu.
2. Mục đích
•	Tự động hóa việc tính toán thù lao từ dữ liệu thu thập được.
•	Tích hợp với cả PostgreSQL và MSSQL để lấy dữ liệu từ nhiều nguồn.
•	Xuất báo cáo dưới dạng Excel.
•	Xây dựng giao diện quản lý trực quan với Nuxt.js 2 (Vue.js 2).
3. Công nghệ sử dụng
•	Backend: Node.js với Express.js
•	Frontend: Nuxt.js 2 (Vue.js 2, TailwindCSS 4)
•	Cơ sở dữ liệu: PostgreSQL và MSSQL
•	Thư viện hỗ trợ: Axios, Moment.js, ExcelJS
4. Cách triển khai mã nguồn
Bước 1: Clone Repository
git clone https://github.com/HaoKiet1909/thulao.git
cd thulao
Bước 2: Cài đặt các thư viện
cd server
npm install
cd ../tmhsg
npm install
Bước 3: Chạy dự án
Chạy backend (Express.js)
Cấu hình file .env
cd server
npm start
Chạy frontend (Nuxt.js)
cd tmhsg
npm run dev
