import { Modal, Form as AntForm, Button, Input, Select, Row, Col, Divider } from "antd";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  taiKhoan: yup.string().required("Bắt buộc"),
  matKhau: yup.string().when("isEdit", {
    is: false,
    then: (s) => s.required("Bắt buộc"),
    otherwise: (s) => s.optional(),
  }),
  hoTen: yup.string().required("Bắt buộc"),
  email: yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  soDT: yup.string().required("Bắt buộc"),
  maLoaiNguoiDung: yup.string().required("Bắt buộc"),
  maNhom: yup.string().required("Bắt buộc"),
});

export default function UserForm({
  open,
  onClose,
  onSubmit,
  initialValues,
  isEdit = false,
  loaiNguoiDungOptions = [],
}) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP01",
      isEdit,
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (initialValues) reset({ ...initialValues, matKhau: "", isEdit });
    else reset({ taiKhoan: "", matKhau: "", hoTen: "", email: "", soDT: "", maLoaiNguoiDung: "HV", maNhom: "GP01", isEdit });
  }, [initialValues, isEdit, reset]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={isEdit ? "Sửa người dùng" : "Thêm người dùng"}
      width={680}
      destroyOnClose
    >
      <AntForm layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Row gutter={[16, 8]}>
          <Col xs={24} md={12}>
            <AntForm.Item
              label="Tài khoản"
              validateStatus={errors.taiKhoan && "error"}
              help={errors.taiKhoan?.message}
              required
            >
              <Controller
                name="taiKhoan"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="VD: admin001"
                    autoComplete="username"
                    disabled={isEdit}
                  />
                )}
              />
            </AntForm.Item>
          </Col>

          {!isEdit && (
            <Col xs={24} md={12}>
              <AntForm.Item
                label="Mật khẩu"
                validateStatus={errors.matKhau && "error"}
                help={errors.matKhau?.message}
                required
              >
                <Controller
                  name="matKhau"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      size="large"
                      placeholder="Nhập mật khẩu"
                      autoComplete="new-password"
                    />
                  )}
                />
              </AntForm.Item>
            </Col>
          )}

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Họ và tên"
              validateStatus={errors.hoTen && "error"}
              help={errors.hoTen?.message}
              required
            >
              <Controller
                name="hoTen"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="VD: Nguyễn Văn A" />
                )}
              />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Email"
              validateStatus={errors.email && "error"}
              help={errors.email?.message}
              required
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    type="email"
                    placeholder="vd: example@mail.com"
                    autoComplete="email"
                  />
                )}
              />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Số điện thoại"
              validateStatus={errors.soDT && "error"}
              help={errors.soDT?.message}
              required
            >
              <Controller
                name="soDT"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="VD: 0912345678" inputMode="numeric" />
                )}
              />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Loại người dùng"
              validateStatus={errors.maLoaiNguoiDung && "error"}
              help={errors.maLoaiNguoiDung?.message}
              required
            >
              <Controller
                name="maLoaiNguoiDung"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    size="large"
                    placeholder="Chọn loại người dùng"
                    options={loaiNguoiDungOptions.map((opt) => ({
                      value: opt.maLoaiNguoiDung || opt.value,
                      label: opt.tenLoaiNguoiDung || opt.label,
                    }))}
                  />
                )}
              />
            </AntForm.Item>
          </Col>

          <Col xs={24} md={12}>
            <AntForm.Item
              label="Mã nhóm"
              validateStatus={errors.maNhom && "error"}
              help={errors.maNhom?.message}
              required
            >
              <Controller
                name="maNhom"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="VD: GP01" />
                )}
              />
            </AntForm.Item>
          </Col>
        </Row>

        <Divider style={{ margin: "8px 0 16px" }} />

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <Button onClick={onClose}>Hủy</Button>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            {isEdit ? "Cập nhật" : "Thêm"}
          </Button>
        </div>
      </AntForm>
    </Modal>
  );
}
