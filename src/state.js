import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    base_url: 'http://127.0.0.1:8000',
    projects_api: '/api/projects',
    projects: [],

    getProjects() {
        axios
            .get(this.base_url + this.projects_api)
            .then(response => {
                console.log(response);
                this.projects = response.data.result
            })
            .catch(error => {
                console.error(error);
            })
    }
})