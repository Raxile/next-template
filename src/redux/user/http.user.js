import axiosInstance from '@/config/axiosInstance';
import { USER_LOGIN_API_ENDPOINT } from '@/utils/constants/api-endpint.constant';

export const userLoginHttp = async (data) => {
  try {
    const response = await axiosInstance.post(USER_LOGIN_API_ENDPOINT, data);
    return response;
  } catch (error) {
    return error;
  }
};
