import http from '../http-common';

class ReviewEmpData {
    getQst(id) {
        return http.get(`/review/${id}`);
    }

    getRev(id) {
        return http.get(`/viewreview/${id}`);
    }

    createQst(data) {
        return http.post("/forum", data);
    }


}
