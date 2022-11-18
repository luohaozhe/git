//引入API请求文件地址
import { reqAddressInfo,reqShopCartInfo } from "@/api";

const state = {
    address:[],
    orderInfo:{}
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address;
    },
    GETORDERINFO(state,data){
        state.orderInfo = orderInfo;
    }
};
const actions = {
  //获取用户地址信息
  async getUserAddress({ commit }) {
    //调用请求函数
    let result = await reqAddressInfo();
    if(result.code == 200){
        commit('GETUSERADDRESS',result.data);
    }
  },
  //获取商品清单信息
        async getOrderInfo({commit}){
          let result = await reqShopCartInfo();
           if(result.code==200){
            commit("GETORDERINFO",result.data);
           }
        }
};
const getters = {};

//对外暴露
export default {
  state,
  mutations,
  actions,
  getters,
};
