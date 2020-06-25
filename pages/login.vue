<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="/images/img-01.png" alt="IMG">
                </div>
                <form class="login100-form validate-form"
                      action=""
                      method="post"
                >
					<span class="login100-form-title">
						Member Login
					</span>

                    <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input class="input100" type="text" name="email" placeholder="Email" v-model="userForm.email">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        <span v-if="errors.email" class="text-danger small pl-5"> {{errors.email[0]}}</span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Password"
                               v-model="userForm.password">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
                        <span v-if="errors.password" class="text-danger small pl-5"> {{errors.password[0]}}</span>
                    </div>

                    <div class="container-login100-form-btn">
                        <span v-if="message" class="text-danger small pl-4"> {{message}}</span>
                        <button class="login100-form-btn" @click.prevent="login" type="button">
                            Login
                        </button>
                    </div>

                    <div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
                        <a class="txt2" href="#">
                            Username / Password?
                        </a>
                    </div>

                    <div class="text-center p-t-136">
                        <span class="btn btn-sm" @click="$router.push('/register')">
                            Create your Account
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        layout: 'fullpage',
        data() {
            return {
                userForm: {
                    email: '',
                    password: ''
                },
                errors: [],
                message: null
            }
        },
        methods: {
           async login() {
               this.message = null;
               this.errors = [];
               await this.$auth.login({
                   data: this.userForm
               }).then((response) => {

                  this.$router.push('/shoes');
               }).catch((errors) => {
                   this.message = errors.response.data.message;
                   if (errors.response.status === 422 ){
                       this.errors = errors.response.data;
                   }
                });
            }
        }
    }
</script>

<style scoped>

</style>