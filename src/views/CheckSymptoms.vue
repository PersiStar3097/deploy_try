<template>
    <v-app>
        <v-app-bar color="cyan" height=50>
            <template v-slot:prepend>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
                </v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>
                hack log
            </v-app-bar-title>

            <template v-slot:append>
                <v-btn>
                    <v-icon icon="mdi-baby" size="x-large">

                    </v-icon>
                </v-btn>

            </template>

        </v-app-bar>
        <v-main>
            

            <p v-if="symptoms.resultflag===false">
                <p class="py-5"></p>
                <p class="text-h2">
                    Check Symptoms
                </p>
                <p class="py-5"></p>
                <p v-if="symptoms.btnflag === true">
                    <p class="py-5"></p>
                    <v-card width="650px" height="450px" class="mx-auto mt-5 rounded-xl" elevation="10">
                        <h1 class="pt-7">この中で当てはまる項目はありますか？</h1>
                        <v-container>
                            <v-table class="mx-12" height="250">
                                <tbody>
                                    <tr v-for="item in symptoms.data[symptoms.data_index][symptoms.level]" :key="item" >
                                        <td>{{ item }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-container>
                        <p class="pt-5"></p>
                        <v-row class="d-frex justify-space-around">
                            <v-btn 
                                width="120px" 
                                variant="outlined" 
                                color="blue" 
                                v-if="symptoms.level!=='heavy'" 
                                @click="levelSwitch('previous')"
                                >
                                Previous
                            </v-btn> <!-- 戻る-->

                            <v-btn 
                                variant="text" 
                                disabled="false"
                                width="120px" 
                                v-if="symptoms.level==='heavy'"></v-btn> <!-- Prev非表示時のスペース確保用-->

                            <v-btn 
                                width="120px" 
                                color="blue" 
                                @click="hitResult()"
                                >
                                Hit!
                            </v-btn> <!-- 結果表示する　-->
                            
                            <v-btn 
                                width="120px" 
                                variant="outlined" 
                                color="blue" 
                                v-if="symptoms.btnLabel!=='end'" @click="levelSwitch('next')"
                                >
                                {{symptoms.btnLabel}}
                            </v-btn>
                            
                            <v-btn 
                                variant="text" 
                                disabled="false"
                                width="120px" 
                                v-if="symptoms.btnLabel==='end'"></v-btn> <!-- Next非表示時のスペース確保用-->
                        </v-row>
                        
                    </v-card>
                </p>
                <v-row class="pl-12">
                    <p class="pl-12"></p>
                    <v-btn v-show="!symptoms.btnflag" color="blue-lighten-1" icon size="x-large" @click="temperature.btnflag = 'true'" fab>
                        <v-icon icon="mdi-temperature-celsius"></v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <div class="py-12">
                        <p v-if="temperature.btnflag === 'false'">
                            <p v-if="symptoms.btnflag === false">
                                <p class="text-h5">この中で気になる症状はありますか？</p>
                                <p class="py-5"></p>
                                <v-container style="max-width:650px;" fluid >
                                    <v-row>
                                        <v-col cols="3" v-for="(item_data,index) in symptoms.info" :key="item_data">
                                            <v-btn color="cyan-accent-3" rounded="xl" width="150px" variant="outlined" @click="symptoms.btnflag=true;symptoms.data_index=index;">{{ item_data }}</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </p>
                        </p>
                    </div>
                    <v-spacer></v-spacer>
                </v-row>
                <p v-if="temperature.btnflag === 'true'">
                    <v-card width="450px"  class="mx-auto mt-5 rounded-xl" elevation="10">
                        <p class="py-4"></p>
                        <p class="text-h5">Input Body Temperature</p>
                        <p class="py-3"></p>
                        <p class="text-h3">
                            <p class="text-red">{{ temperature.largeNum + "." + temperature.smallNum }} ℃</p>
                        </p>
                        <p class="py-2"></p>
                        <div class="column-box">
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-darken-2" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.largeNum = '35'">35</v-btn>
                                <v-btn color="yellow-darken-2" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.largeNum = '36'">36</v-btn>
                                <v-btn color="yellow-darken-2" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.largeNum = '37'">37</v-btn>
                                <v-btn color="yellow-darken-2" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.largeNum = '38'">38</v-btn>
                                <v-btn color="yellow-darken-2" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.largeNum = '39'">39</v-btn>
                                <v-btn color="yellow-darken-2" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.largeNum = '40'">40</v-btn>
                            </div>
                            <p class="py-2"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '1'">1</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '2'">2</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '3'">3</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '4'">4</v-btn>

                            </div>
                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '5'">5</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '6'">6</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '7'">7</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '8'">8</v-btn>
                            </div>
                            <p class="py-1"></p>
                            <div style="display: flex; gap: 1rem; justify-content: center;padding-right: 130px;">
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '9'">9</v-btn>
                                <v-btn color="yellow-lighten-4" rounded style="min-width: 50px; width: 50px; height: 50px;" @click="temperature.smallNum = '0'">0</v-btn>
                            </div>

                        </div>
                        <p class="py-5"></p>
                        <v-btn color="blue" variant="outlined" @click="temperature.btnflag = 'false'">close</v-btn>
                        <p class="py-5"></p>
                    </v-card>
                </p>
            </p>
            <!-- <router-view /> -->
            <p v-if="symptoms.resultflag===true"> <!--結果表示-->
                <p class="py-5"></p>
                <v-card width="800px" height="400px"  class="mx-auto mt-5 rounded-xl" elevation="10">
                    <p class="pt-8"><h1>症状確認結果</h1></p>
                    <p class="pt-12"></p>
                    <h1 class="pt-12">
                        <p v-if="symptoms.resultText==='heavy'"><p class="text-red">🚑直ちに病院を受診してください！🚨</p></p>
                        <p v-if="symptoms.resultText==='normal'"><p class="text-yellow">🏥様子を見て診療時間内に受診しましょう🚗</p></p>
                        <p v-if="symptoms.resultText==='mild'"><p class="text-green">🏡しばらく自宅で様子をみましょう👪</p></p>
                    </h1>
                    
                    <p class="pt-12"></p>
                    <p class="pt-12"></p>
                    <v-btn  width="120px" color="blue" @click="symptoms.resultflag=false">Close</v-btn>
                    
                </v-card>
                <p class="py-5"></p>
                <h2>迷ったときは</h2>
                <v-row class="mx-5">
                    <v-col col="3">
                        <v-card>
                            <v-card-title>とよた急病・子育てコール24</v-card-title>
                            <v-card-subtitle>～育救さんコール～</v-card-subtitle>
                            <v-card-text>📞0120-799-192</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col col="3">
                        <v-card>
                            <v-card-title>豊田地域医療センター</v-card-title>
                            <v-card-subtitle>平日：午後7時～翌朝午前9時/土曜：(内科)午後2時(外科)午後7時～翌朝午前9時</v-card-subtitle>
                            <v-card-subtitle>日祝年末年始：午後5時～翌朝午前9時</v-card-subtitle>
                            <v-card-text>📞0565-34-3000</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col col="3">
                        <v-card>
                            <v-card-title>休日救急内科診療所</v-card-title>
                            <v-card-subtitle>日祝年末年始：(内科・小児科)午前9時～午後5時</v-card-subtitle>
                            <v-card-text>📞0120-799-192</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </p>
        </v-main>
        <v-navigation-drawer v-model="drawer" :width="300">
            <v-list>
                <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/home" class="my-2"></v-list-item>
                <v-list-item prepend-icon="mdi-stethoscope" title="Check symptoms" value="check" to="/check"
                    class="my-2"></v-list-item>
                <v-list-item prepend-icon="mdi-human-baby-changing-table" title="Growth Curve" value="growth"
                    to="/growth" class="my-2"></v-list-item>
                <v-list-item prepend-icon="mdi-book-open-page-variant-outline" title="Document" value="doc" to="/doc"
                    class="my-2"></v-list-item>

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
    name: "check",
    data() {
        return {
            drawer: 0,
            temperature: {
                btnflag: "false",
                largeNum: "36",
                smallNum: "5",
                // num: largeNum + "." + smallNum
            },
            symptoms:{
                btnflag: false,
                resultflag: false,
                resultText: "heavy",
                param: 0,
                data_index: 1,
                data:{
                    0:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    1:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    2:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    3:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    4:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    5:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    6:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    7:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    8:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    9:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    10:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    11:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    12:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    13:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    14:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                    15:{
                        heavy:[""],
                        normal:[""],
                        mild:[""]},
                },
                level:"heavy", // 重症：heavy,普通：normal,軽症：mild
                info: ["発熱","嘔吐","咳・呼吸","下痢","便秘","鼻水・鼻づまり","誤飲・誤嚥","頭をうった","ケガ","やけど","鼻血","突発性発疹","湿疹じんましん","熱中症","中耳炎","目ヤニ"],
                btnLabel: "Next"
            }

        }
    },
    methods: {
        // handleClick(){
        //     test()
        // }
        levelSwitch(arg){
            if (arg==="previous"){
                switch(this.symptoms.level){
                    case "normal":
                        this.symptoms.level="heavy"
                        break
                    case "mild":
                        this.symptoms.level="normal"
                        this.symptoms.btnLabel = "Next"
                        break
                }
            }else if(arg==="next"){
                switch(this.symptoms.level){
                    case "heavy":
                        this.symptoms.level="normal"
                        break
                    case "normal":
                        this.symptoms.level="mild"
                        this.symptoms.btnLabel = "end"
                        break
                    case "mild":
                        this.symptoms.level="heavy"
                        break
                }
            }
        },
        hitResult(){
            this.symptoms.resultText = this.symptoms.level
            this.symptoms.resultflag = true
            this.symptoms.btnflag=false
            this.symptoms.btnLabel='Next'
            this.symptoms.level='heavy'

        },
        hoge() {
            // window.alert(String(this.temperature.largeNum) + "." + String(this.temperature.smallNum));
            // console.log(this.temperature.btnflag);
            alert(this.symptoms.btnflag)
            this.symptoms.btnflag = false
        }
    }
}
</script>