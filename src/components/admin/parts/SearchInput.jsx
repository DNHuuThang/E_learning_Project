import { Input } from "antd";

export default function SearchInput({ value, onChange, placeholder = "Tìm kiếm...", style }) {
  return (
    <Input
      allowClear
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      style={style}
    />
  );
}
