import http from '../http-common';

class ReviewEmpDataService {
    getQst(id) {
        return http.get(`/review/${id}`);
    }

    getRev(id) {
        return http.get(`/viewreview/${id}`);
    }

    createQst(data) {
        return http.post("/qst", data);
    }

    
}

export default new ReviewEmpDataService();