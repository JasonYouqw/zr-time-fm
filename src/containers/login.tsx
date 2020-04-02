import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { queryInsureInfoAction, queryProductInfoAction } from '../redux/Actions';

interface Props extends RouteComponentProps {
  queryInsureInfo(param: {}): void,
  queryProductInfo(param: {}): void,
  insureInfo: Object,
  productInfo: {
    test: ''
  },
}

interface State {

}
class Login extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
  }

  componentWillMount() {
    this.props.queryProductInfo({
      productCode: 'PRD190827485024'
    });
  }
  render() {
    return (
      <>
        <div>登录页</div>
        <div>用户名：{this.props.productInfo.test}</div>
      </>
    )
  }
}

const mapStateToProps = (state:any) => {
  return {
    productInfo: state.giftReducer.productInfo,
    insureInfo: state.giftReducer.insureInfo,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    queryProductInfo(params:any) {
      dispatch(queryProductInfoAction(
        params
      ));
    },
    queryInsureInfo(params:any) {
      dispatch(queryInsureInfoAction(
        params
      ));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
