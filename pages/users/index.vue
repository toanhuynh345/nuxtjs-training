<template>
    <div class="container-fluid">
            <div class="card">
                <div class="mt-3 ml-3">
                    <button type="button" class="btn btn-outline-primary" @click="$router.push('/users/create')">Tạo mới</button>
                </div>
                <div class="card-header">
                    Danh sách người dùng
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created at</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users">
                            <th scope="row">{{user.id}}</th>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.created_at}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                users: []
            }
        },
        created() {
            this.getListUsers();
        },
        methods: {
            async getListUsers() {
                let response = await this.$axios.get('/users');
                this.users = response.data;
                console.log(this.users);
                this.$nuxt.$emit('breadcrumb', 'users')
            },
        }
    }
</script>

<style scoped>
    #customers {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #ddd;}

    #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }
</style>