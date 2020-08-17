import http from '../plugins/http';

const key = '/api/v1';

const api = http[key] || http.instance(key); // api modules.test

class Service {
    api = api;

    updateReconfirm(params) { // 修改交易二次确认
        return this.api.post('/user/updateReconfirm', params);
    }

}

export default new Service();
