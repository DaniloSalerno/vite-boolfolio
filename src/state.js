import { reactive } from "vue";
import axios from 'axios';


export const state = reactive({

    base_url: 'http://127.0.0.1:8000',
    projects_api: '/api/projects',
    latestProject_api: '/api/projects-latest',
    types_api: '/api/types',
    technologies_api: '/api/technologies',
    latestProjects: [],
    api_page: 1,
    project: {},
    types: [],
    technologies: [],
    loading: false,
    overlay: true,

    getLatestProjects() {
        axios
            .get(this.base_url + this.latestProject_api)
            .then(response => {
                console.log(response.data.result);
                this.latestProjects = response.data.result
                this.loading = true
            })
            .catch(error => {
                console.error(error);
            })
    },

    getTypes() {
        axios.get(this.base_url + this.types_api)
            .then(response => {
                this.types = response.data.result.data;
                console.log(this.types);
            }).catch(error => {
                console.error(error);
            })
    },

    getTechnologies() {
        axios.get(this.base_url + this.technologies_api)
            .then(response => {
                this.technologies = response.data.technologies.data;
                console.log(this.technologies);
            }).catch(error => {
                console.error(error);
            })
    },
})