import { BASE_URL} from './config.js'

export default {

  //首页
  // 业务看板查询
  LOOK_BORAD: BASE_URL + "/index/lookBorad",
  // 成交数据、收入数据查询
  DEAL_AND_INCOME: BASE_URL + "/index/dealAndIncome",
  // 车商数据查询
  MERCHANT_DATA: BASE_URL + "/index/merchantData",
  // 最新拍卖简报列表查询
  SIMPLE_REPOTR_LIST: BASE_URL + "/index/simpleReportList",

  //拍卖会简报列表及竞拍城市
  // 拍卖会竞拍城市查询
  AUCTION_CITY_LIST: BASE_URL + "/auction/cityList",
  // 拍卖会简报列表查询
  AUCTION_LIST: BASE_URL + "/auction/list",
  // 拍卖会简报查询
  AUCTION_SIMPLE_REPORT: BASE_URL + "/auction/simpleReport",

  //车商经销商排名及拍场业务能力
  // 1、车商排名TOP10查询
  RANK_MERCHANT: BASE_URL + "/rank/merchant",
  // 2、经销商排名TOP5查询
  RANK_DERLER: BASE_URL + "/rank/dealer",
  // 3、拍场业务能力查询
  AUCTION_PLACE_TOP: BASE_URL + "/auctionPlace/top",

  //全国看板
  // 1、全国年成交& 收入数据查询
  NAT_YEAR_INCOME: BASE_URL + "/nationwide/yearDealAndIncome",
  // 2、全国月成交数据、收入数据查询
  NAT_MONTH_INCOME: BASE_URL + "/nationwide/monthDealAndIncome",
  // 3、全国月车商数据查询
  NAT_MERCHANT: BASE_URL + "/nationwide/merchant",
  // 4、大区月完成率柱状图数据查询
  NAT_FINISH_REDIO: BASE_URL + "/nationwide/finishRedioBar",
  // 5、大区月度成交率
  NAT_DEAL_REDIO: BASE_URL + "/nationwide/dealRedioBar",
  // 6、大区同步拍成交看板
  NAT_DEAL_PIE: BASE_URL + "/nationwide/dealPie",
  // 7、大区月度收入数据
  NAT_INCOME_BAR: BASE_URL + "/nationwide/incomeBar",
  // 8、收入完成率查询
  NAT_INCOME_FINISH: BASE_URL + "/nationwide/incomeFinishRedio",
  // 9、收入环比、同比柱状折线图数据查询
  NAT_INCOME_LINK: BASE_URL + "/nationwide/incomeLinkAndYear",


  //大区看板
  // 1、大区年成交&收入数据查询
  REGION_YEAR_INCOME: BASE_URL + "/region/yearDealAndIncome",
  // 2、大区月成交数据、收入数据查询
  REGION_MONTH_INCOME: BASE_URL + "/region/monthDealAndIncome",
  // 3、大区月车商数据查询
  REGION_MERCHANT: BASE_URL + "/region/merchant",
  // 4、城市月度完成数据查询
  REGION_FINISH_DATA: BASE_URL + "/region/finishMonthData",
  // 5、城市月完成率柱状图数据查询
  REGION_FINISH_REDIO: BASE_URL + "/region/finishRedioBar",
  // 6、城市成交量环比、同比柱状折线图数据查询
  REGION_DEAL_LINK: BASE_URL + "/region/dealLinkAndYear",
  // 7、城市月度成交率
  REGION_DEAL_RDEIO: BASE_URL + "/region/dealRedioBar",
  // 8、城市月度收入数据
  REGION_INCOME_BAR: BASE_URL + "/region/incomeBar",
  // 9、城市收入完成率查询
  REGION_INCOME_FINISH_REDIO: BASE_URL + "/region/incomeFinishRedio",
  // 10、城市收入环比、同比柱状折线图数据查询
  REGION_INCOME_LINK: BASE_URL + "/region/incomeLinkAndYear",

  // 1、获取微信小程序 session_key 和 openid
  GET_WX_OPENID: BASE_URL + "/weiXinAuth/getSessionKeyOrOpenid",
  // 2、获取用户信息（微信小程序 encrypteddata 解密）
  GET_WX_UER_INFO: BASE_URL + "/weiXinAuth/getWxUerInfo",
  // 3、微信授权信息与商户手机号绑定 保存
  GET_SAVE_USER_INFO: BASE_URL + "/weiXin/member/login",
  // 4、微信授权信息与商户手机号 登录校验
  GET_SHOP_LIST: BASE_URL + "/shopping/v2/menu",
}