const axios = require('axios');
const proxyMap = require('../config').proxyMap;

const proxyHttp = async (ctx: any, next: any) => {
  const apiUrl = ctx.request.url;
  const { method, data, query } = ctx;
  const proxyUrl = getProxyUrl(apiUrl);
  await axios({
    url: proxyUrl,
    method,
    query,
    data
  }).then(() => {
    
  })
  next();
};

const getProxyUrl = async (proxyFrom: String) => {
  let proxyTo = proxyFrom;
  const apiList = getProxyApiList();
  apiList.some((apiReg: any) => {
    const matched = proxyFrom.match(apiReg);
    if (matched && matched[0]) {
      proxyTo = proxyMap[matched[1]] + proxyFrom.substring(matched[0].length - 1);
    }
  })
  return proxyTo;
};

const getProxyApiList = () => {
  const apiList = Object.keys(proxyMap).map(matchString) || [];
  return apiList;
};

const matchString = (str: String) => {
  return new RegExp("^/(" + str + ")/.*?");
};

module.exports = {
  proxyHttp,
};

