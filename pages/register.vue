<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="/images/img-01.png" alt="IMG">
                </div>

                <form class="login100-form validate-form">
					<span class="login100-form-title">
						Member Register
					</span>
                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input100" type="text" name="name" placeholder="name" v-model="userForm.name">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-apple" aria-hidden="true"></i>
						</span>
                        <span v-if="errors.name" class="text-danger small pl-5"> {{errors.name[0]}}</span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input100" type="text" name="email" placeholder="Email"  v-model="userForm.email">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        <span v-if="errors.email" class="text-danger small pl-5"> {{errors.email[0]}}</span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Password"  v-model="userForm.password">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
                        <span v-if="errors.password" class="text-danger small pl-5"> {{errors.password[0]}}</span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Password"  v-model="userForm.password_confirm">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
                        <span v-if="errors.password_confirm" class="text-danger small pl-5"> {{errors.password_confirm[0]}}</span>
                    </div>

                    <div class="container-login100-form-btn">
                        <span v-if="messages" class="text-danger small pl-5"> {{messages}}</span>
                        <button class="login100-form-btn" @click.prevent="registerUser">
                            Submit
                        </button>
                    </div>
                    <div class="text-center p-t-136">
                        <span class="btn btn-sm" @click="$router.push('/login')">
                            <i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
                            Back to login
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        auth: false,
        data(){
            return {
                userForm: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirm: '',
                },
                errors: [],
                messages: null
            }
        },
        methods: {
            async registerUser() {
                try {
                    let res = await this.$axios.post('register', this.userForm);
                    console.log('res:',res);
                    this.$auth.loginWith('local', {
                        data: this.userForm
                    }).then(() => {
                        this.$router.push('/home'); // rồi chuyển hướng đến một trang nào
                    });
                } catch (e) {
                    this.messages = e.response.data.message;
                    if (e.response.status === 422) {
                        this.errors = e.response.data;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>