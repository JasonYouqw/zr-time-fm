import axios from 'axios';

const get = async (param: any) => {
  const { url, contentType, data} = param;
  return axios.get(
    url,
    {
      params: data,
    }
  );
};

const post = () => {

};

export default {
  get,
  post,
};