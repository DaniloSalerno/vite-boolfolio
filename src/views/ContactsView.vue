<script>
import axios from 'axios';
export default {
    name: 'ContactsView',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            loading: false,
            formSend: false,
            errors: []
        }
    },
    methods: {
        sendForm() {

            this.loading = true
            this.loading = true
            this.errors = []
            this.formSend = false

            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            };
            axios.post('http://127.0.0.1:8000/api/contacts', payload)
                .then(response => {
                    const success = response.data.success

                    if (!success) {
                        this.errors = response.data.errors
                        console.log(response.data.errors);
                    } else {
                        console.log(response);
                        this.name = ''
                        this.email = ''
                        this.phone = ''
                        this.message = ''
                        this.formSend = true

                    }
                    this.loading = false
                })
                .catch(error => {
                    console.error(error.message);
                })
        }
    }
}
</script>

<template>
    <div class="container">

        <h1 class="pt-5">
            Contact me
        </h1>

        <form action="#" class="py-5" v-on:submit.prevent="sendForm()">

            <div class="d-flex flex-wrap gap-4 justify-content-between pb-5">
                <div class="form-floating flex-grow-1">
                    <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name"
                        placeholder="Mario Rossi" v-model="name">
                    <label for="name">Name</label>
                    <div class="text-danger mt-2" role="alert" v-if="errors.name">
                        <strong>Errore! </strong>
                        <span v-for="message in errors.name">{{ message }}</span>
                    </div>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="tel" class="form-control" :class="{ 'is-invalid': errors.phone }" id="phone"
                        placeholder="0123456789" v-model="phone">
                    <label for="phone">Phone number</label>
                    <div class="text-danger mt-2" role="alert" v-if="errors.phone">
                        <strong>Errore! </strong>
                        <span v-for="message in errors.phone">{{ message }}</span>
                    </div>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="email"
                        placeholder="name@example.com" v-model="email">
                    <label for="email">Email address</label>
                    <div class="text-danger mt-2" role="alert" v-if="errors.email">
                        <strong>Errore! </strong>
                        <span v-for="message in errors.email">{{ message }}</span>
                    </div>
                </div>
            </div>

            <div class="py-5">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.message }" id="message" rows="5"
                    placeholder="Leave your message here" v-model="message"></textarea>
                <div class="text-danger mt-2" role="alert" v-if="errors.message">
                    <strong>Errore! </strong>
                    <span v-for="message in errors.message">{{ message }}</span>
                </div>
            </div>

            <button type="submit" class="btn btn-dark" :disabled="loading"> {{ loading ? 'Sending...' : 'Send' }}
            </button>

            <div class="alert alert-success mt-2" role="alert" v-if="formSend">
                <strong>Form send </strong>
            </div>

        </form>

    </div>
</template>


<style lang="scss" scoped></style>