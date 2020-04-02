import { QUERY_PRODUCT_INFO, QUERY_INSURE_INFO, SET_KEFU_VISIBLE, CHECK_INSURE } from './ActionTypes';
// import insureInfo from './mock/insureInfo';
// import productInfo from './mock/productInfo';

const productInfo = {
  data: {
    test: 'yqw'
  }
};

const insureInfo = {
  data: {}
};

const defaultState = {
  productInfo: productInfo.data,
  insureInfo: {},
  kefuVisible: false,
};

export default (state = defaultState, action:any) => {
  switch(action.type) {
    case QUERY_PRODUCT_INFO:
      return {
        ...state,
        productInfo: productInfo.data
      };
    case QUERY_INSURE_INFO:
      // console.log(`insureInfo.data:${JSON.stringify(insureInfo.data)}`);
      return {
        ...state,
        insureInfo: JSON.parse(JSON.stringify(insureInfo.data))
      };
    case SET_KEFU_VISIBLE:
      console.log(`action.kefuVisible:  ${action.kefuVisible}`);
      return {
        ...state,
        kefuVisible: action.kefuVisible,
      }
    case CHECK_INSURE:
      return {
        ...state,
        insureRet: {
          status: 200,
          message: '',
          data: {
            payUrl: 'http://www.baidu.com',
          },
        },
      }
    default:
      return state;
  }
}
