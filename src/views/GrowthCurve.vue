<template>
    <v-app>
        <v-app-bar color="cyan" height=50>
            <template v-slot:prepend>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
                </v-app-bar-nav-icon>
            </template>

            <v-app-bar-title >
                hack log
            </v-app-bar-title>

            <template v-slot:append>
                <v-btn>
                    <v-icon icon="mdi-baby" size="x-large">
                        <!-- mdi-baby
                size = "large" -->
                    </v-icon>
                </v-btn>

                <!-- <v-btn>
            <v-icon>
              mdi-home
            </v-icon>
          </v-btn> -->
            </template>
        </v-app-bar>
        <v-main>
        <p v-if="btnflag === 'false'">
        <p class="py-3"></p>
        <p class="text-h2">Growth Curve</p>
        <p class="py-3"></p>
        <p class="text-h5">生後・体重・身長と成長曲線を照らし合わせます</p>
        <p class="py-2"></p>
        <p class="mx-12"><v-divider thickness="5"></v-divider></p>
        <p class="py-3"></p>
        <v-container class="pa-2">
            <v-tabs
                v-model="tab"
                align-tabs="center"
                fixed-tabs
            >
                <v-tab value="1">
                    <v-icon class="mx-1">mdi-gender-male-female</v-icon>
                    Step 1</v-tab>
                <v-tab value="2">
                    <v-icon class="mx-1"> mdi-cake</v-icon>
                    Step 2</v-tab>
                <v-tab value="3">
                    <v-icon class="mx-1">mdi-weight-kilogram</v-icon>
                    Step 3</v-tab>
                <v-tab value="4">
                    <v-icon class="mx-1">mdi-human-male-height</v-icon>
                    Step 4</v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="1">
                    <v-sheet
                        color="white"
                        height="550"
                        tile
                    >
                    <p class="py-5"></p>
                    <h1>Q. 性別は？</h1>
                    <p class="py-10"></p>
                    <v-btn-toggle
                        v-model="toggle"
                        color="blue"
                        variant="Default"
                        mandatory>
                    <v-btn width="200px" icon=" mdi-gender-male"></v-btn>
                    <v-btn width="200px" icon="mdi-gender-female"></v-btn>

                    </v-btn-toggle>
                    <p class="py-10"></p>
                        <v-row>
                            <div style="width: 200px;"></div>
                            <!-- <v-btn @click="tab =1 "></v-btn> -->
                        <v-spacer></v-spacer>
                        <v-btn color="blue-lighten-2" variant="outlined" @click="tab =1 " style="width: 100px;">Next</v-btn>
                        <div style="width: 200px;"></div>
                    </v-row>
                        <!-- <h1 class="text-white">Window 1</h1> -->
                    </v-sheet>
                </v-window-item>

                <v-window-item value="2">
                    <v-sheet
                        color="white"
                        height="550"
                        tile
                    >
                    <p class="py-5"></p>
                    <h1>Q. 月齢は？</h1>
                    <p class="py-10"></p>
                    <v-slider
                        class="mx-12"
                        v-model="value"
                        :max="12"
                        :min="1"
                        :step="1"
                        thumb-label = "always"
                        show-ticks="always"
                        tick-size="4"
                        thumb-color="blue"
                        thumb-size="20"
                        color="blue"
                    ></v-slider>
                    <p class="py-10"></p>
                        <v-row>
                            <div style="width: 200px;"></div>
                            <v-btn color="blue-lighten-2" variant="outlined" @click="tab =0 " style="width: 100px;">Previous</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-lighten-2" variant="outlined" @click="tab =2 " style="width: 100px;">Next</v-btn>
                            <div style="width: 200px;"></div>
                        </v-row>
                        <!-- <h1 class="text-white">Window 1</h1> -->
                    </v-sheet>
                </v-window-item>

                <v-window-item value="3">
                    <v-sheet
                        color="white"
                        height="550"
                        tile
                    >
                    <p class="py-5"></p>
                    <h1>Q. 体重は？</h1>
                    <v-card width="250px"  class="mx-auto mt-5 rounded-xl" elevation="10">
                        <p class="py-3"></p>
                        <p class="text-h3">
                            <p class="text-red">{{ weight_value_left }} . {{ weight_value_right }} Kg</p>
                        </p>
                        <p class="py-2"></p>
                        <div class="column-box">

                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(1)">1</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(2)">2</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(3)">3</v-btn>

                            </div>
                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(4)">4</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(5)">5</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(6)">6</v-btn>

                            </div>
                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(7)">7</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(8)">8</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(9)">9</v-btn>
                            </div>

                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput(0)">0</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput('.')">.</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="weightInput('C')">C</v-btn>
                            </div>

                        </div>
                        <p class="py-2"></p>
                    </v-card>
                    <p class="py-5"></p>
                        <v-row>
                            <div style="width: 200px;"></div>
                            <v-btn color="blue-lighten-2" variant="outlined" @click="tab =1 " style="width: 100px;">Previous</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-lighten-2" variant="outlined" @click="tab =3 " style="width: 100px;">Next</v-btn>
                            <div style="width: 200px;"></div>
                        </v-row>
                        <!-- <h1 class="text-white">Window 1</h1> -->
                    </v-sheet>
                </v-window-item>
                <v-window-item value="4">
                    <v-sheet
                        color="white"
                        height="550"
                        tile
                    >
                    <p class="py-5"></p>
                    <h1>Q. 身長は？</h1>
                    <v-card width="250px"  class="mx-auto mt-5 rounded-xl" elevation="10">
                        <p class="py-3"></p>
                        <p class="text-h3">
                            <p class="text-red">{{ height_value }} cm</p>
                        </p>
                        <p class="py-2"></p>
                        <div class="column-box">

                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(1)">1</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(2)">2</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(3)">3</v-btn>

                            </div>
                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(4)">4</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(5)">5</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(6)">6</v-btn>

                            </div>
                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(7)">7</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(8)">8</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(9)">9</v-btn>
                            </div>

                            <p class="py-1"></p>
                            <div style="display: flex; gap: 2rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="heightInput(0)">0</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 100px; width: 100px; height: 50px;" @click="height_value = 0">C</v-btn>
                            </div>

                        </div>
                        <p class="py-2"></p>
                    </v-card>
                    <p class="py-5"></p>
                        <v-row>
                            <div style="width: 200px;"></div>
                            <v-btn color="blue-lighten-2" variant="outlined" @click="tab =2 " style="width: 100px;">Previous</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-lighten-2" variant="outlined" @click="btnflag='true';growthCheck()" style="width: 100px;">Finish!</v-btn>
                            <div style="width: 200px;"></div>
                        </v-row>
                        <!-- <h1 class="text-white">Window 1</h1> -->
                    </v-sheet>
                </v-window-item>
            </v-window>
        </v-container>
        </p>
        <p v-if="btnflag==='true'">
            <p class="py-12"></p>
            <v-card width="450px" height="450px"  class="mx-auto mt-5 rounded-xl" elevation="10">
                <p class="py-12"><h1>結果は・・・？</h1></p>
                <p v-if="btnflag_reslt==='false'">
                    <p class="py-12"></p><v-btn color="blue-lighten-2" variant="outlined" @click="btnflag_reslt='true'" style="width: 50px;">OPEN!</v-btn>
                </p>
                <p v-if="btnflag_reslt==='true'">
                <h1 class="py-8">{{baby_growth}}</h1>
                <h4 class="py-2">
                    <div class="d-flex flex-row justify-space-around"><p>{{ growth_result_height }}</p><p>{{ growth_result_weight }}</p></div></h4>
                <p class="py-8"></p><v-btn color="blue-lighten-2" variant="outlined" @click="btnflag_reslt='false';btnflag='false'" style="width: 50px;">CLOSE</v-btn>

                </p>

            </v-card>
            
        
        </p>

            <!-- <router-view /> -->
        
        
        
        
        
        
        </v-main>
        <v-navigation-drawer v-model="drawer" :width="300">
            <v-list>
              <v-list-item prepend-icon="mdi-home" title="Home" value="home"  to="/home" class="my-2"></v-list-item>
              <v-list-item prepend-icon="mdi-stethoscope" title="Check symptoms" value="check" to="/check" class="my-2"></v-list-item>
              <v-list-item prepend-icon="mdi-human-baby-changing-table" title="Growth Curve" value="growth" to="/growth" class="my-2"></v-list-item>
              <v-list-item prepend-icon="mdi-book-open-page-variant-outline" title="Document" value="doc" to="/doc" class="my-2"></v-list-item>

            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                <v-btn color="deep-purple-accent-4" variant="outlined" block to="/">Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-footer color="cyan" app height=20>
            2024 (c) N.N
        </v-footer>
    </v-app>
</template>
<script>
// import { test } from '../js/export'

export default {
    name: "growth",
    data() {
        return {
            drawer: 0,
            tab: 0,
            toggle: 0,
            value: 1,
            btnflag: "false",
            btnflag_reslt: "false",
            baby_growth: "",
            growth_result: "",
            weight_value_left: 0,
            weight_value_right: 0,
            weight_value_swich: "false",
            height_value: 0,
            baby_status: {
                High_Light:"✨Slender Baby!✨",
                High_Normal:"Tall Baby!",
                High_Heavy:"BIG Baby!",
                Normal_Light:"Light Baby!",
                Normal_Normal:"🎉Normal Baby!🎉",
                Normal_Heavy:"Heavy Baby!",
                Low_Light:"Tiny Baby!",
                Low_Normal:"Little Baby!",
                Low_Heavy:"👶Deby...👶"
            },
            growth_data:[
                // 男の子データ
                {
                1:{height_low: 48, height_high: 57, weight_low: 3, weight_high: 5},
                2:{height_low: 53, height_high: 62, weight_low: 4, weight_high: 6.5},
                3:{height_low: 56, height_high: 65, weight_low: 4.8, weight_high: 7.5},
                4:{height_low: 58, height_high: 67, weight_low: 5.2, weight_high: 8.2},
                5:{height_low: 61, height_high: 70, weight_low: 6, weight_high: 9},
                6:{height_low: 63, height_high: 71, weight_low: 6.2, weight_high: 9.3},
                7:{height_low: 64, height_high: 73, weight_low: 6.5, weight_high: 9.8},
                8:{height_low: 66, height_high: 74, weight_low: 6.8, weight_high: 10},
                9:{height_low: 67, height_high: 76, weight_low: 7, weight_high: 10.2},
                10:{height_low: 68, height_high: 77, weight_low: 7.2, weight_high: 10.5},
                11:{height_low: 69, height_high: 78, weight_low: 7.5, weight_high: 10.8},
                12:{height_low: 70, height_high: 79, weight_low: 7.6, weight_high: 11},
                },
                // 女の子データ
                {
                1:{height_low: 48, height_high: 57, weight_low: 3, weight_high: 4.8},
                2:{height_low: 52, height_high: 60, weight_low: 3.8, weight_high: 6},
                3:{height_low: 55, height_high: 63, weight_low: 4.5, weight_high: 7},
                4:{height_low: 57, height_high: 66, weight_low: 5.1, weight_high: 7.9},
                5:{height_low: 59, height_high: 67, weight_low: 5.5, weight_high: 8.4},
                6:{height_low: 62, height_high: 70, weight_low: 5.9, weight_high: 8.9},
                7:{height_low: 63, height_high: 71, weight_low: 6.1, weight_high: 9.2},
                8:{height_low: 64, height_high: 73, weight_low: 6.4, weight_high: 9.5},
                9:{height_low: 65, height_high: 74, weight_low: 6.6, weight_high: 9.7},
                10:{height_low: 66, height_high: 75, weight_low: 6.8, weight_high: 9.9},
                11:{height_low: 67, height_high: 72, weight_low: 6.9, weight_high: 10.1},
                12:{height_low: 68, height_high: 73, weight_low: 7.1, weight_high: 10.3},
                }
            ],
            

        }
    },
    methods: {
        // handleClick(){
        //     test()
        // }

        hoge() {
            window.alert(Number(String(this.weight_value_left) + "." + String(this.weight_value_right)) * 10);
        },
        weightInput(num){
            if (num === ".") {
                this.weight_value_swich = "true";
            } else if (num === "C") {
                this.weight_value_swich = "false";
                this.weight_value_left = 0;
                this.weight_value_right = 0;

            }else{
                if(this.weight_value_swich === "false"){
                    if(this.weight_value_left === 0){
                        this.weight_value_left = num;
                    }else if(this.weight_value_left > 0 && this.weight_value_left < 10){
                        this.weight_value_left = this.weight_value_left * 10 + num;
                        this.weight_value_swich = "true";
                    }
                }else if(this.weight_value_swich === "true"){
                    this.weight_value_right = num;
                }
            };
        },
        heightInput(num){
            if(this.height_value === 0){
                this.height_value = num;
            }else if(this.height_value > 0 && this.height_value < 20 ){
                this.height_value = this.height_value * 10 + num;
            }
        },
        growthCheck(){
            const object = this.growth_data[this.toggle][this.value];

            let result_height="";
            let result_weight="";

            // console.log(object.weight_high);
            if (this.height_value >= object.height_low && this.height_value <= object.height_high) {
                result_height = "Normal";
            }else if(this.height_value < object.height_low) {
                result_height = "Low";
            }else{
                result_height = "High";
            }
            console.log(result_height);
            const weight_value = Number(String(this.weight_value_left) + "." + String(this.weight_value_right)) * 10;
            if (weight_value >= object.weight_low * 10 && weight_value <= object.weight_high * 10) {
                result_weight = "Normal";
            } else if (weight_value < object.weight_low * 10) {
                result_weight = "Light";
            } else{
                result_weight = "Heavy";
            }

            this.baby_growth = this.baby_status[result_height + "_" + result_weight];
            this.growth_result_height = `Height : ${result_height}`;
            this.growth_result_weight = `Weight : ${result_weight}`


        }
    }
}
</script>