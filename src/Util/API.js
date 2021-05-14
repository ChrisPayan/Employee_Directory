import axios from "axios";

const API = {
    search: function () {
        return axios.get("https://randomuser.me/api/?results=20&inc=picture,name,phone,email,dob&nat=us");
    },
}

export default API;