// src/components/admin/CourseTable.jsx
import { Table, Space, Button, Popconfirm, Image } from "antd";

export default function CourseTable({
  dataSource = [],
  loading,
  page,
  pageSize,
  total,
  onChangePage,
  onEdit,
  onDelete,
  onEnroll,           // <— thêm callback ghi danh
}) {
  const columns = [
    {
      title: "STT",
      width: 70,
      align: "center",
      render: (_, __, i) => (page - 1) * pageSize + i + 1,
    },
    { title: "Mã khóa học", dataIndex: "maKhoaHoc", width: 120, fixed: "left" },
    { title: "Tên khóa học", dataIndex: "tenKhoaHoc" },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: 140,
      render: (src) => (
        <Image
          src={src}
          alt="thumb"
          width={120}
          height={68}
          style={{ objectFit: "cover", borderRadius: 6 }}
          fallback="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>"
          preview={false}
        />
      ),
    },
    { title: "Lượt xem", dataIndex: "luotXem", width: 110, align: "right" },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      width: 160,
      render: (val) => {
        // val có thể là string ("admin") hoặc object { hoTen: "...", taiKhoan: "..." }
        if (!val) return "-";
        if (typeof val === "string") return val;
        return val.hoTen || val.taiKhoan || "-";
      },
    },
    {
      title: "Thao tác",
      width: 260,
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => onEnroll?.(record)}>Ghi danh</Button>
          <Button onClick={() => onEdit?.(record)}>Sửa</Button>
          <Popconfirm title="Xóa khóa học?" onConfirm={() => onDelete?.(record)}>
            <Button danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey="maKhoaHoc"
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={{
        current: page,
        pageSize,
        total,
        onChange: onChangePage,
        showSizeChanger: true,
      }}
      scroll={{ x: 1100 }}
    />
  );
}
