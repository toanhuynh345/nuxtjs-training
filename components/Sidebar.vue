<template>
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light" @click="$router.push('/shoes')">Shoes</a>
            <a href="#" class="list-group-item list-group-item-action bg-light"  @click="$router.push('/female/shirt')">Female Shirts</a>
            <a href="#" class="list-group-item list-group-item-action bg-light" @click="$router.push('/users')">Danh sách người dùng</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
            <a href="#" class="list-group-item list-group-item-action bg-light" @click="logout">Logout</a>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            async logout() {
                await this.$auth.logout().then(() => {
                    this.$router.push('/login');
                });
            },
        },
    }
</script>