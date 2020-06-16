<template>
    <div class="d-flex" id="wrapper">
        <!-- Sidebar -->
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">Hello {{this.$store.getters.getProfile.name}}</div>
            <div class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
                <a class="list-group-item list-group-item-action bg-light" @click="logout">Logout</a>
            </div>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">

            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid">
                <h1 class="mt-4">Tìm kích cỡ giày phù hợp. </h1><i class="fas fa-shoe-prints"></i>
                <div class="card-header">
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/images/shoes.jpg" alt="IMG">
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label><img src="/images/icon-foots.png" alt="img"
                                                    width="100"></label>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="custom-control custom-radio">
                                            <input type="radio"
                                                   v-model="type"
                                                   @change="changeType"
                                                   value="1"
                                                   class="custom-control-input"
                                                   id="customControlValidation2"
                                                   name="radio-stacked">
                                            <label class="custom-control-label" for="customControlValidation2">{{size_inch
                                                ? size_inch :''}} inches</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio"
                                                   v-model="type"
                                                   @change="changeType"
                                                   value="0"
                                                   class="custom-control-input"
                                                   id="customControlValidation3"
                                                   name="radio-stacked" required>
                                            <label class="custom-control-label" for="customControlValidation3">{{
                                                size_cm ? size_cm: ""}} centimeters </label>
                                            <div class="invalid-feedback"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="d-flex">
                                            <input type="text" class="form-control w-50" v-model="size"
                                                   @keyup="typeSize(size)"
                                                   placeholder="Nhập chiều dài bàn chân">
                                            <button class="btn btn-primary m-l-5" @click="searchSize">Tìm size</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <div>Kích thước dành cho nam :</div>
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th width="400"></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="shoes_chosen !== undefined">
                                    <tr>
                                        <td width="400">
                                            <div class="d-flex align-items-center">
                                                <img src="/images/usa-today.png" class="img-thumbnail bg-transparent border-0" width="40"> Size US:
                                            </div>
                                        </td>
                                        <td>{{shoes_chosen.size_us !== undefined ? shoes_chosen.size_us : '-'}} </td>
                                    </tr>
                                    <tr>
                                        <td width="400">
                                            <div class="d-flex align-items-center">
                                                <img src="/images/uk.png" class="img-thumbnail bg-transparent border-0" width="40"> Size UK:
                                            </div>
                                        </td>
                                        <td>{{shoes_chosen.size_uk  !== undefined ? shoes_chosen.size_uk : '-'}}</td>

                                    </tr>
                                    <tr>
                                        <td width="400">
                                            <div class="d-flex align-items-center">
                                                <img src="/images/vietnam.png" class="img-thumbnail bg-transparent border-0" width="40"> Size VN:
                                            </div>
                                        </td>
                                        <td>{{shoes_chosen.size_vn  !== undefined ? shoes_chosen.size_vn : '-'}}</td>

                                    </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <td colspan="2"> Làm gì có kích cỡ như dị =)))...</td>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive mt-2">
                                <div>Kích thước dành cho nữ :</div>
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="shoes_chosen !== undefined">
                                    <tr>
                                        <td width="400">
                                            <div class="d-flex align-items-center">
                                                <img src="/images/usa-today.png" class="img-thumbnail bg-transparent border-0" width="40"> Size US:
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                            {{shoes_chosen.size_us !== undefined ? shoes_chosen.size_us : '-'}}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="400">
                                            <div class="d-flex align-items-center">
                                                <img src="/images/uk.png" class="img-thumbnail bg-transparent border-0" width="40"> Size UK:
                                            </div>
                                        </td>
                                        <td>{{shoes_chosen.size_uk  !== undefined ? shoes_chosen.size_uk : '-'}}</td>

                                    </tr>
                                    <tr>
                                        <td width="400">
                                            <div class="d-flex align-items-center">
                                                <img src="/images/vietnam.png" class="img-thumbnail bg-transparent border-0" width="40"> Size VN:
                                            </div>
                                        </td>
                                        <td>{{shoes_chosen.size_vn  !== undefined ? shoes_chosen.size_vn : '-'}}</td>

                                    </tr>
                                    </tbody>
                                    <tbody v-else>
                                    <td colspan="2"> Làm gì có kích cỡ như dị =)))...</td>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                shoes: [],
                shoes_chosen: {},
                size: "",
                type: 1,
                size_cm: "",
                size_inch: ""
            }
        },
        created() {
            this.getAllShoeSizes();
        },
        methods: {
            async logout() {
                await this.$auth.logout().then(() => {
                    this.$router.push('/login');
                });
            },
            async getAllShoeSizes() {
                const response = await this.$axios.get('/shoes/index');
                this.shoes = response.data;
            },
            convertOtherType(size, type) {
                if (type == 1) {
                    return size === "" ? "" : (parseFloat(size) * 2.54).toFixed(2);
                }
                return size === "" ? "" : (parseFloat(size) * 0.393701).toFixed(2)
            },
            changeType() {
                this.size = this.type == 0 ? this.size_cm : this.size_inch
            },
            typeSize(size) {
                if (this.type == 1) {
                    this.size_cm = size === "" ? "" : this.convertOtherType(size, this.type);
                    this.size_inch = size;
                } else {
                    this.size_cm = size
                    this.size_inch = size === "" ? "" : this.convertOtherType(size, this.type);
                }
            },
            searchSize() {
                var search = parseFloat(this.size);
                const shoes = this.shoes;
                this.shoes_chosen =  shoes.find((element) => {
                    if (this.type == 1) {
                        if (parseFloat(element.foot_size_inch_from) <= search && search <= parseFloat(element.foot_size_inch_to)) {
                            return element;
                        }
                    } else {
                        if (parseFloat(element.foot_size_cm_from) <= search && search <= parseFloat(element.foot_size_cm_to)) {
                            return element;
                        }
                    }
                })
            },
            calculateMediumSize(prev, next) {
                if (prev && next) {
                    return (parseFloat(prev) + parseFloat(next)) / 2
                }
                return null;
            }
        }
    }
</script>

<style scoped>
    body {
        overflow-x: hidden;
    }

    #sidebar-wrapper {
        min-height: 100vh;
        margin-left: -15rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
    }

    #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
    }

    #sidebar-wrapper .list-group {
        width: 15rem;
    }

    #page-content-wrapper {
        min-width: 100vw;
    }

    #wrapper.toggled #sidebar-wrapper {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        #sidebar-wrapper {
            margin-left: 0;
        }

        #page-content-wrapper {
            min-width: 0;
            width: 100%;
        }

        #wrapper.toggled #sidebar-wrapper {
            margin-left: -15rem;
        }
    }

</style>