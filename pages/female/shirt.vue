<template>
    <div>
    <div class="container-fluid">
        <h1 class="mt-4"> </h1>
        <div class="card-header">
            <div>
                <img src="/images/girls/women-sleeveless-shirt.png" width="40" />
                Tìm kích cỡ áo phù hợp cho em
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <div class="d-flex justify-content-center">
                            <div>
                                <label>Bưởi:</label>
                                <input type="text" class="form-control" v-model="hip"
                                       placeholder="Vòng mông">
                            </div>
                            <img src="/images/girls/buttocks.png" width="80">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <div class="d-flex justify-content-center">
                            <div>
                                <label>Thịt:</label>
                                <input type="text" class="form-control" v-model="weight"
                                       placeholder="Cân nặng kg">
                            </div>
                            <img src="/images/girls/weighing-machine.png" class="ml-lg-2" width="60">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <div class="d-flex justify-content-center">
                            <div>
                                <label>Vú sữa:</label>
                                <input type="text" class="form-control" v-model="chest"
                                       placeholder="Vòng ngực">
                            </div>
                            <img src="/images/girls/breast.png" class="ml-lg-2" width="60">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="d-flex justify-content-center">
                            <div>
                                <label>Eo biển:</label>
                                <input type="text" class="form-control" v-model="waist"
                                       placeholder="Vòng eo">
                            </div>
                            <img src="/images/girls/waist.png" class="ml-lg-2" width="60">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="d-flex">
                            <div>
                                <label>Chiều cao:</label>
                                <input type="text" class="form-control" v-model="height"
                                       placeholder="cm">
                            </div>
                            <img src="/images/girls/height.png" class="ml-lg-2" width="70">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-dark" @click="searchSize">Tìm kích cỡ</button>
                    </div>
                </div>
                <div class="col-md-4">
                </div>
            </div>
            <div class="row mt-5" v-if="results !== undefined">
                <div class="col-md-4">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="/images/usa-today.png"
                             class="img-thumbnail bg-transparent border-0" width="40"> Size US:
                        {{results.size_us !== undefined ? results.size_us : "" }}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="/images/uk.png"
                             class="img-thumbnail bg-transparent border-0" width="40"> Size UK:
                        {{results.size_uk !== undefined ? results.size_uk : "" }}

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="/images/european-union.png"
                             class="img-thumbnail bg-transparent border-0" width="40"> Size EU:
                        {{results.size_eu !== undefined ? results.size_eu : "" }}
                    </div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="d-flex justify-content-center">
                        Không tìm ra kích cỡ phù hợp cho em rồi
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                shirts: [],
                hip: "",
                weight: "",
                chest: "",
                waist: "",
                height: "",
                search:"",
                results: {}
            }
        },
        created() {
            this.getShirtSizes();
        },
        methods:{
            async getShirtSizes() {
                const response = await this.$axios.get('/shirts/female');
                this.shirts = response.data;
                console.log(this.shirts);
            },
            searchSize(){

                let results = this.shirts.find((element) => {
                    let {hip, weight, height, waist, chest} = element;
                    hip = hip.split('-');
                    waist = waist.split('-');
                    height = height.split('-');
                    chest = chest.split('-');
                    if ((parseFloat(hip[0]) <= this.hip && this.hip <= parseFloat(hip[1])) &&
                        (parseFloat(waist[0]) <= this.waist && this.waist <= parseFloat(waist[1])) &&
                        (parseFloat(height[0]) <= this.height && this.height <= parseFloat(height[1])) &&
                        (parseFloat(chest[0]) <= this.chest && this.chest <= parseFloat(chest[1]))
                    ) {
                        return element
                    }
                })
                console.log(results);
                this.results = results;
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