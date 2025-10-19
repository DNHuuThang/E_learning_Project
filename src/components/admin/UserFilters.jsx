import { Input } from "antd";

export default function UserFilters({ onSearch }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
      <Input.Search
        allowClear
        placeholder="Nhập tài khoản hoặc họ tên người dùng"
        onSearch={onSearch}
        style={{ maxWidth: 420 }}
      />
    </div>
  );
}
