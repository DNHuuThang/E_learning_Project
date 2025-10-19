import { Select, Input } from "antd";

const GROUPS = ["GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10"]
  .map((x) => ({ value: x, label: x }));

export default function CourseFilters({ maNhom, onChangeGroup, onSearch }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
      <Select
        value={maNhom}
        onChange={onChangeGroup}
        options={GROUPS}
        style={{ width: 120 }}
      />
      <Input.Search
        allowClear
        placeholder="Nhập tên khóa học"
        onSearch={onSearch}
        style={{ maxWidth: 320 }}
      />
    </div>
  );
}
