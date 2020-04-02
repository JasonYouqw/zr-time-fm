import { QUERY_PRODUCT_INFO, QUERY_INSURE_INFO, SET_KEFU_VISIBLE, CHECK_INSURE } from './ActionTypes';
// import axios from './utils/axios';

const getProduct = async () => {
  // 请求数据
  // await axios.axiosRequest({
  //   url: '/api/productmarketh5/product/v1/getProduct',
  //   method: 'post',
  //   data: {
  //     "bizNo": "INST190889098019",
  //     "productCode": "PRD190819898016",
  //     "bizType": "1"
  //   },
  // }).then((res) => {
  //   console.log(`ret: ${JSON.stringify(res)}`);
  // }).catch((error) => {
  //   console.log(`error:${JSON.stringify(error)}`);
  // });
};

export const queryProductInfoAction = ({productCode = ''}) => {
  console.log('getdddd');
  getProduct();
  return {
    type: QUERY_PRODUCT_INFO,
    productCode,
  };
}

export const queryInsureInfoAction = ({policyNo='', insureLastCertNo=''}) => {
  // 在此发送axios请求
  return {
    type: QUERY_INSURE_INFO,
    policyNo,
    insureLastCertNo,
  };
}

export const kefuVisibleAction = ({kefuVisible = false}) => {
  return {
    type: SET_KEFU_VISIBLE,
    kefuVisible,
  };
}

export const checkInsureAction = () => {
  return {
    type: CHECK_INSURE
  }
}
