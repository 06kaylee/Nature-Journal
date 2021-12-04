import http from "../http-common"

class LogDataService {
    getAll() {
        return http.get('/logs');
    }

    get(id) {
        return http.get(`/logs/${id}`);
    }

    create(data) {
        console.log(`From log data service: ${data}`);
        return http.post('/logs', data);
    }

    update(id, data) {
        return http.put(`/logs/${id}`, data);
    }

    delete(id) {
        return http.delete(`/logs/${id}`);
    }
}

export default new LogDataService();