import { Table, Space, Button, Popconfirm, Tag } from 'antd';

export default function UserTable({
  dataSource = [], total = 0, loading, page, pageSize,
  onChangePage, onEdit, onDelete, onEnroll,
}) {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      width: 70,
      render: (_, __, i) => (page - 1) * pageSize + i + 1,
    },
    { title: 'Tài khoản', dataIndex: 'taiKhoan' },
    {
      title: 'Người dùng',
      dataIndex: 'maLoaiNguoiDung',
      width: 110,
      render: (val) => <Tag color={val === 'GV' ? 'green' : 'blue'}>{val}</Tag>,
    },
    { title: 'Họ và tên', dataIndex: 'hoTen' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Số điện thoại', dataIndex: 'soDT' },
    {
      title: 'Thao tác',
      fixed: 'right',
      width: 260,
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => onEnroll(record)}>Ghi danh</Button>
          <Button onClick={() => onEdit(record)}>Sửa</Button>
          <Popconfirm title="Xóa người dùng?" onConfirm={() => onDelete(record)}>
            <Button danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey="taiKhoan"
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={{
        current: page,
        pageSize,
        total,
        showSizeChanger: true,
        onChange: onChangePage,
      }}
      scroll={{ x: 1000 }}
    />
  );
}
