import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    base_url: 'http://127.0.0.1:8000',
    projects_api: '/api/projects',
    latestProject_api: '/api/projects-latest',
    projects: [],
    latestProjects: [],
    api_page: 1,
    project: {},
    type: '',
    technologies: [],

    getProjects() {
        axios
            .get(this.base_url + this.projects_api, {
                params: {
                    page: this.api_page
                }
            })
            .then(response => {
                //console.log(response);
                this.projects = response.data.result
            })
            .catch(error => {
                console.error(error);
            })
    },

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
    },

    getSingleProject(url) {


        axios.get(url)
            .then(response => {
                //console.log(response.data.result);
                this.project = response.data.result
                this.type = response.data.result.type.name
                this.technologies = response.data.result.technologies
            })
            .catch(error => {
                console.error(error);
            })
    }
})