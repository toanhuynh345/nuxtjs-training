<template>
    <div>
        <div class="container-fluid">
            <h1 class="mt-4">Tìm kích cỡ giày phù hợp. </h1>
            <div class="card-header">
                {{project}}
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
                                <tbody v-if="male_shoes_chosen !== undefined">
                                <tr>
                                    <td width="400">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/usa-today.png"
                                                 class="img-thumbnail bg-transparent border-0" width="40"> Size US:
                                        </div>
                                    </td>
                                    <td class="align-middle">{{male_shoes_chosen.size_us !== undefined ?
                                        male_shoes_chosen.size_us : '-'}}
                                    </td>
                                </tr>
                                <tr>
                                    <td width="400">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/uk.png" class="img-thumbnail bg-transparent border-0"
                                                 width="40"> Size UK:
                                        </div>
                                    </td>
                                    <td class="align-middle">{{male_shoes_chosen.size_uk !== undefined ?
                                        male_shoes_chosen.size_uk : '-'}}
                                    </td>

                                </tr>
                                <tr>
                                    <td width="400">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/vietnam.png" class="img-thumbnail bg-transparent border-0"
                                                 width="40"> Size VN:
                                        </div>
                                    </td>
                                    <td class="align-middle">{{male_shoes_chosen.size_vn !== undefined ?
                                        male_shoes_chosen.size_vn : '-'}}
                                    </td>

                                </tr>
                                </tbody>
                                <tbody v-else>
                                <td colspan="2"> Làm gì có kích cỡ như dị =)))...</td>
                                </tbody>
                            </table>
                        </div>
                        <div class="table-responsive mt-2">
                            <div>Kích thước dành cho nữ :</div>
                            <table class="table table-striped ">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody v-if="female_shoes_chosen !== undefined">
                                <tr>
                                    <td width="400">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/usa-today.png"
                                                 class="img-thumbnail bg-transparent border-0" width="40"> Size US:
                                        </div>
                                    </td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            {{female_shoes_chosen.size_us !== undefined ? female_shoes_chosen.size_us :
                                            '-'}}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="400">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/uk.png" class="img-thumbnail bg-transparent border-0"
                                                 width="40"> Size UK:
                                        </div>
                                    </td>
                                    <td class="align-middle">{{female_shoes_chosen.size_uk !== undefined ?
                                        female_shoes_chosen.size_uk : '-'}}
                                    </td>

                                </tr>
                                <tr>
                                    <td width="400">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/vietnam.png" class="img-thumbnail bg-transparent border-0"
                                                 width="40"> Size VN:
                                        </div>
                                    </td>
                                    <td class="align-middle">{{female_shoes_chosen.size_vn !== undefined ?
                                        female_shoes_chosen.size_vn : '-'}}
                                    </td>

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
</template>

<script>
    export default {
        name: "shoes",
        data() {
            return {
                male_shoes: [],
                female_shoes: [],
                male_shoes_chosen: {},
                female_shoes_chosen: {},
                size: "",
                type: 1,
                size_cm: "",
                size_inch: ""
            }
        },
        created() {
            this.getAllShoeSizes();
            this.$nuxt.$emit('breadcrumb', 'shoes')
        },
        methods: {
            async getAllShoeSizes() {
                const response = await this.$axios.get('/shoes/index');
                this.male_shoes = response.data.maleShoes;
                this.female_shoes = response.data.femaleShoes;
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
                this.male_shoes_chosen = this.male_shoes.find((element) => {
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
                console.log(this.female_shoes);
                this.female_shoes_chosen = this.female_shoes.find((element) => {
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
                console.log(this.female_shoes_chosen);
            },
        },
        mounted() {
            this.$hello('mounted')
            // will console.log 'Hello mounted!'
        },
        asyncData (context) {
            return { project: 'nuxt' }
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