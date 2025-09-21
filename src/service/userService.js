import { axiosCustom } from "./config";

export const userService = {
  
    postLogin :(infoUser)=>{
        return axiosCustom.post("/QuanLyNguoiDung/DangNhap", infoUser);
    },
    postRegister : (infoUser) => {
        return axiosCustom.post("/QuanLyNguoiDung/DangKy", infoUser);
    }
    
};