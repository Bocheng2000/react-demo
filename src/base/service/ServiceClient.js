//用来存放数据请求接口
export default class ServiceClient  {
  static _instance =null;
  constructor() {

  }

//类似于単例
  static getInstance(){
  if (ServiceClient._instance === null) {
      ServiceClient._instance = new ServiceClient();
    }
    return ServiceClient._instance;
  }

//请求中间右边部分数据
  async getAsyncUserListDetail(uid){
    let res = null;
    try {
        res = await $.ajax({
            url: "/api/playlist/detail",
            type: "GET",
            data: {
                id:uid,
            }
        });
    } catch (e) {
        throw(e);
    }

    if (res.code === 200)
    {
        return res.result;
    }
    else
    {
        return res;
    }

  }

//请求中间左边部分数据
  async getAsyncUserPlayLists(uid)
    {
        let res = null;
        try {
            res = await $.ajax({
                url: "/api/user/playlist",
                type: "GET",
                data: {
                    uid,
                    limit: 1000,
                    offset: 0
                }
            });
        } catch (e) {
            throw(e);
        }

        if (res.code === 200)
        {
            return res.playlist;
        }
        else
        {
            return res;
        }

    }


}
