# Employee Management Dashboard - Backend

## Mô tả dự án

Hệ thống backend cho bảng điều khiển quản lý nhân sự và tiền lương giúp cung cấp thông tin tổng hợp về nhân viên, tiền lương, và phúc lợi. Hệ thống được xây dựng theo kiến trúc microservice, sử dụng **Express.js** cho backend và **MongoDB** làm cơ sở dữ liệu.

## Kiến trúc hệ thống

Dự án áp dụng kiến trúc microservice với các service chính:

- **HR Service**: Quản lý thông tin nhân viên.
- **Payroll Service**: Quản lý thông tin lương và phúc lợi.
- **Alert Service**: Xử lý các cảnh báo và thông báo sự kiện đặc biệt.

Các service này giao tiếp với nhau thông qua API Gateway.

## Chức năng chính

### 1. Thông tin tổng hợp

- Tổng thu nhập theo cổ đông, giới tính, sắc tộc, loại nhân viên (toàn thời gian/bán thời gian), năm hiện tại và năm trước, theo từng phòng ban.
- Tổng số ngày nghỉ phép đã sử dụng theo các tiêu chí trên.
- Trung bình các khoản phúc lợi được chi trả theo gói phúc lợi, phân biệt cổ đông và không cổ đông.

### 2. Hệ thống cảnh báo

- Cảnh báo khi nhân viên sắp đến ngày kỷ niệm làm việc.
- Cảnh báo khi nhân viên tích lũy quá số ngày nghỉ nhất định.
- Cảnh báo khi nhân viên thay đổi gói phúc lợi ảnh hưởng đến lương.
- Danh sách nhân viên có sinh nhật trong tháng hiện tại.

### 3. Khả năng drill-down

- Cho phép người dùng xem chi tiết từ dữ liệu tổng hợp.

## Công nghệ sử dụng

- **Node.js** với **Express.js** làm framework backend.
- **MongoDB** làm cơ sở dữ liệu.
- **RabbitMQ/Kafka** cho message queue giữa các microservice.

## Cách chạy dự án

### Yêu cầu hệ thống

- Node.js >= 16.x
- MongoDB

### Cài đặt

```sh
# Clone repository
git clone https://github.com/your-repo/employee-management-dashboard.git
cd employee-management-dashboard

# Cài đặt các package
npm install

# Chạy dự án (môi trường development)
npm run dev
```

## API Endpoint {đang phát triển}

## Hướng phát triển

- Xây dựng giao diện quản trị viên bằng React
- Thêm các tiêu chí lọc và báo cáo chi tiết hơn.
