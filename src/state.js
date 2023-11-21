import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    base_url: 'http://127.0.0.1:8000',
    projects_api: '/api/projects',
    latestProject_api: '/api/projects-latest',
    latestProjects: [],
    api_page: 1,
    project: {},
    type: '',
    technologies: [],

    getLatestProjects() {
        axios
            .get(this.base_url + this.latestProject_api)
            .then(response => {
                console.log(response);
                this.latestProjects = response.data.result
            })
            .catch(error => {
                console.error(error);
            })
    }
})