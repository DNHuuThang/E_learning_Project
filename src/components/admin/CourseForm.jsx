// src/components/admin/CourseForm.jsx
import {
  Modal,
  Form as AntForm,
  Button,
  Input,
  Row,
  Col,
  Divider,
  Select,
  DatePicker,
  InputNumber,
  Upload,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { khoahocService } from "../../service/khoahocService";
import { userService } from "../../service/userService"; // ✨ thêm
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default function CourseForm({
  open,
  onClose,
  onSubmit,
  initialValues,
  isEdit,
  defaultMaNhom = "GP01",
}) {
  const [form] = AntForm.useForm();
  const [danhMucOptions, setDanhMucOptions] = useState([]);
  const [file, setFile] = useState(null);
  const [loadingInfo, setLoadingInfo] = useState(false);

  // Lấy danh mục
  useEffect(() => {
    khoahocService
      .layDanhMucKhoaHoc()
      .then((res) => {
        const arr = Array.isArray(res.data)
          ? res.data
          : res.data?.content || [];
        setDanhMucOptions(
          arr.map((d) => ({
            value: d.maDanhMuc || d.maDanhMucKhoaHoc,
            label: d.tenDanhMuc || d.tenDanhMucKhoaHoc,
          }))
        );
      })
      .catch(() => setDanhMucOptions([]));
  }, []);

  // Lấy thông tin tài khoản từ BE để xác nhận là GV & set nguoiTao
  useEffect(() => {
    if (!open) return;
    setLoadingInfo(true);
    userService
      .thongTinTaiKhoan()
      .then((res) => {
        const info = res?.data?.content || res?.data || {};
        if (info?.maLoaiNguoiDung !== "GV") {
          message.error(
            "Tài khoản hiện tại không phải giảng viên. Không thể thêm khóa học."
          );
          onClose?.();
          return;
        }
        // Set sẵn nguoiTao từ BE (disable input phía dưới)
          form.setFieldsValue({ taiKhoanNguoiTao: info?.taiKhoan || "" });
      })
      .catch(() => {
        message.error("Không lấy được thông tin tài khoản.");
        onClose?.();
      })
      .finally(() => setLoadingInfo(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Set default/initial form
  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        maKhoaHoc: initialValues.maKhoaHoc,
        tenKhoaHoc: initialValues.tenKhoaHoc,
        moTa: initialValues.moTa,
        maNhom: initialValues.maNhom || defaultMaNhom,
        maDanhMucKhoaHoc: initialValues.danhMucKhoaHoc?.maDanhMucKhoaHoc,
        hinhAnh: initialValues.hinhAnh || "",
        danhGia: initialValues.danhGia ?? 0,
        luotXem: initialValues.luotXem ?? 0,
        ngayTao: initialValues.ngayTao
       ? dayjs(initialValues.ngayTao, ["DD/MM/YYYY", "YYYY-MM-DD", dayjs.ISO_8601])
       : null,
      });
      setFile(null);
    } else {
      form.setFieldsValue({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        maNhom: defaultMaNhom,
        maDanhMucKhoaHoc: undefined,
        taiKhoanNguoiTao: "",
        danhGia: 0,
        luotXem: 0,
        ngayTao: null,
      });
      setFile(null);
    }
  }, [initialValues, form, defaultMaNhom, open]);

  const normUpload  = (e) => {
    const list = e?.fileList ?? [];
    const f = list[0]?.originFileObj ?? null;
    setFile(f);
    return list;
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={isEdit ? "Sửa khóa học" : "Thêm khóa học"}
      width={820}
      destroyOnClose
      confirmLoading={loadingInfo}
    >
      <AntForm
        layout="vertical"
        form={form}
        onFinish={(values) => onSubmit({ ...values, file })}
      >
        <Row gutter={[16, 8]}>
          <Col xs={24} md={12}>
            <AntForm.Item
              label="Mã khóa học"
              name="maKhoaHoc"
              rules={[{ required: true, message: "Bắt buộc" }]}
            >
              <Input size="large" placeholder="VD: BC001" disabled={isEdit} />
            </AntForm.Item>
          </Col>
          <Col xs={24} md={12}>
            <AntForm.Item
              label="Tên khóa học"
              name="tenKhoaHoc"
              rules={[{ required: true, message: "Bắt buộc" }]}
            >
              <Input size="large" placeholder="VD: ReactJS Pro" />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Danh mục khóa học"
              name="maDanhMucKhoaHoc"
              rules={[{ required: true, message: "Bắt buộc" }]}
            >
              <Select
                size="large"
                placeholder="Chọn danh mục"
                options={danhMucOptions}
              />
            </AntForm.Item>
          </Col>
          <Col xs={24} md={12}>
            <AntForm.Item label="Ngày tạo" name="ngayTao">
              <DatePicker
                size="large"
                style={{ width: "100%" }}
                format="DD/MM/YYYY"
              />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item label="Đánh giá" name="danhGia">
              <InputNumber
                min={0}
                max={10}
                precision={1}
                size="large"
                style={{ width: "100%" }}
                placeholder="0-10"
              />
            </AntForm.Item>
          </Col>
          <Col xs={24} md={12}>
            <AntForm.Item label="Lượt xem" name="luotXem">
              <InputNumber min={0} size="large" style={{ width: "100%" }} />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Người tạo"
              name="taiKhoanNguoiTao"
              rules={[{ required: true, message: "Bắt buộc" }]}
            >
              {/* ✨ lấy từ BE & không cho sửa để khớp kiểm tra vai trò */}
              <Input size="large" disabled />
            </AntForm.Item>
          </Col>
          <Col xs={24} md={12}>
            <AntForm.Item
              label="Mã nhóm"
              name="maNhom"
              rules={[{ required: true, message: "Bắt buộc" }]}
            >
              <Input size="large" placeholder="VD: GP01" />
            </AntForm.Item>
          </Col>
            <Col xs={24}>
            <AntForm.Item label="Hình ảnh" name="hinhAnh">
              <Input size="large" />
            </AntForm.Item>
          </Col>
          <Col xs={24}>
            <AntForm.Item
              label="Tải hình"
              valuePropName="fileList"
              getValueFromEvent={normUpload}
            >
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                accept="image/*"
                onRemove={() => setFile(null)}
              >
                <Button icon={<UploadOutlined />}>Chọn tệp</Button>
              </Upload>
            </AntForm.Item>
          </Col>

          <Col xs={24}>
            <AntForm.Item label="Mô tả" name="moTa">
              <Input.TextArea rows={5} placeholder="Nhập mô tả" />
            </AntForm.Item>
          </Col>
        </Row>

        <Divider style={{ margin: "8px 0 16px" }} />
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <Button onClick={onClose}>Hủy</Button>
          <Button type="primary" htmlType="submit">
            {isEdit ? "Cập nhật" : "Thêm"}
          </Button>
        </div>
      </AntForm>
    </Modal>
  );
}
