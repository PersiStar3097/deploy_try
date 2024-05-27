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
                                v-if="symptoms.btnLabel_prev===true" 
                                @click="levelSwitch('previous')"
                                >
                                Previous
                            </v-btn> <!-- 戻る-->

                            <v-btn 
                                variant="text" 
                                disabled="false"
                                width="120px" 
                                v-if="symptoms.btnLabel_prev===false"></v-btn> <!-- Prev非表示時のスペース確保用-->

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
                                v-if="symptoms.btnLabel_next===true" @click="levelSwitch('next')"
                                >
                                NEXT
                            </v-btn>
                            
                            <v-btn 
                                variant="text" 
                                disabled="false"
                                width="120px" 
                                v-if="symptoms.btnLabel_next===false"></v-btn> <!-- Next非表示時のスペース確保用-->
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
                                        <v-col cols="4" v-for="(item_data,index) in symptoms.info" :key="item_data">
                                            <v-btn color="cyan-accent-3" rounded="xl" width="150px" variant="outlined" @click="symptoms.data_index=index;nothingSwitch();symptoms.btnflag=true;">{{ item_data }}</v-btn>
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
                        <p v-if="symptoms.resultText==='emg'"><p class="text-red">🚑救急車で病院へ！🚑</p></p>
                        <p v-if="symptoms.resultText==='heavy'"><p class="text-red">🚨直ちに病院を受診してください！🚨</p></p>
                        <p v-if="symptoms.resultText==='normal'"><p class="text-yellow">🏥様子を見て診療時間内に受診しましょう🚗</p></p>
                        <p v-if="symptoms.resultText==='mild'"><p class="text-green">🏡しばらく自宅で様子をみましょう👪</p></p>
                    </h1>
                    
                    <p class="pt-12"></p>
                    <p class="pt-12"></p>
                    <v-btn  width="120px" variant="outlined"color="blue" @click="symptoms.resultflag=false">Close</v-btn>
                    
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
                resultText: "emg",
                param: 0,
                data_index: 1,
                data:{
                    0:{ // 発熱
                        emg: ["Nothing_Data"],
                        heavy:["生後3か月未満で発熱した","嘔吐を繰り返す","水分が取れず口の中が乾き、半日以上尿が出ていない","呼吸が浅く、小鼻がピクピクしている","呼びかけにも反応せず、ぐったりしている","顔色が悪く、唇の色も紫色になってきた","けいれんを起こした"],
                        normal:["いきなり高熱がでた","熱が3~4日以上続いている","咳や嘔吐などほかの症状がある","受診したが、熱が下がらない","受診後に、発疹が出てきた"],
                        mild:["機嫌は悪くない","熱以外の症状はみられない"]},
                    1:{ // 嘔吐
                        emg: ["Nothing_Data"],
                        heavy:["吐き方が激しくなって治まらない","ぐったりしている","水分がとれずに口の中が乾き、尿の量も極端に少ない","吐物が緑色で苦そうな臭いがする","吐物が赤もしくは赤黒かったりコーヒー色で生臭い","高熱や激しい腹痛がある"],
                        normal:["熱や下痢などの症状がある","半日以上、繰り返し吐く","機嫌が悪い","尿の量が少ない"],
                        mild:["機嫌は悪くない","2時間以内に食べたものを吐いた","熱などのほかの症状はない"]},
                    2:{ // 咳・呼吸
                        emg: ["Nothing_Data"],
                        heavy:["息苦しそうで呼吸がはやい","顔色が悪く、唇が紫色になっている","息を吸うときにぜーぜー、ヒューヒューと音がする","機嫌が悪く、ぐずる","水分をとらない","咳き込んで眠れない","肩で呼吸している（肩呼吸）","鎖骨の上や肋骨の下がくぼんでいる（陥没呼吸）","鼻の穴が広がり、ピクピク動く（鼻翼呼吸）","息を吸うときに胸が膨らまず、お腹が膨らむ"],
                        normal:["咳が多くても、食事や水分はとれている","眠れている","息がしにくそう"],
                        mild:["当てはまる症状はありません"]},
                    3:{ // 下痢
                        emg: ["Nothing_Data"],
                        heavy:["1日6回以上、水っぽい下痢が続く","水分がとれず口の中が乾き、半日以上尿が出ていない","血便が出た","排便しても腹痛が続く","下痢のほか、嘔吐もある","呼びかけにも反応せず、ぐったりしている","呼吸が浅く、小鼻がピクピクしている"],
                        normal:["おむつやパンツからはみ出るほどの大量の下痢","下痢が1週間以上続いている","便がすっぱい臭い、腐った臭いがする","白い便が出た"],
                        mild:["下痢っぽいが、期限は悪くない","下痢以外の症状はみられない"]},
                    4:{ // 便秘
                        emg: ["Nothing_Data"],
                        heavy:["Nothing_Data"],
                        normal:["食欲がなく、食事の量も減少している","腹痛や発熱がある","1週間以上、便秘が続く","排便痛があるので我慢してしまう","排便のときに出血する","何回も吐く"],
                        mild:["当てはまる症状はありません"]},
                    5:{ // 鼻水・鼻づまり
                        emg: ["Nothing_Data"],
                        heavy:["鼻がつまって呼吸が苦しい"],
                        normal:["鼻水・鼻づまりが何日も続いている","黄色や緑色の鼻水が出る","鼻水がドロドロしている","母乳やミルクが飲めない、食欲がない","眠れない"],
                        mild:["当てはまる症状はありません"]},
                    6:{ // 誤飲・誤嚥
                        emg: ["のどに物を詰まらせている","けいれんを起こしている","強く咳き込んでいる","意識がはっきりせずぐったりしている","声がかすれ、呼吸がぜーぜーと荒い","以下の物を飲み込んでしまった↓","　ネズミ駆除剤（吐かせない）","　トイレ用洗剤（吐かせない）","　苛性ソーダ（吐かせない）","　花火（吐かせない）","　防虫剤","　除草剤","　殺虫剤","　脱毛剤や除毛材","　抗うつ剤","　たばこの浸った灰皿の水","瓶やガラス、カッターの刃などの破片"],
                        heavy:["以下の物を飲み込んでしまった場合↓","灯油（吐かせない）","ベンジン（吐かせない）","ライター燃料（吐かせない）","家庭用漂白剤（吐かせない）","マニキュア除光液（吐かせない）","風呂洗浄剤","日焼け止め化粧品","香水","アルカリ電池","ボタン電池","たばこ","油性インク","油絵具","ポスターカラー","ヘアトニック・ヘアリキッド・ペアリンス"],
                        normal:["少量のインク","クレヨン","粘土","化粧品（口紅やファンデーション）","石鹸","蚊取り線香"],
                        mild:["当てはまる症状はありません"]},
                    7:{ // 頭をうった
                        emg: ["頭をぶつけた後、ぐったりして泣かない","意識が無い","大量に出血している","ぼんやりして呼びかけにも無反応","けいれんを起こしている","意識はあるが、左右の手足の動きがちぐはぐしている"],
                        heavy:["受け答えできず、つじつまが合わないことをいう","物が見えづらい（視力障害）、二重に見える（複視）","手足に力が入らず、しびれている","歩行が不安定","激しく頭が痛む","嘔吐を繰り返す","機嫌が悪く、ぐずる","普段よりもよく寝て、なかなか起きない","頭部に500円玉大のコブがある"],
                        normal:["1~2回だけ嘔吐した","皮膚の凹みがあり、少し痛がる"],
                        mild:["当てはまる症状はありません"]},
                    8:{ // ケガ
                        emg: ["傷が大きく、大量の血がでている","傷の原因となる物が体に深く刺さり、抜けない","不自然な骨の曲がりや腫れなどがあり、外見が変形している","顔色が悪く、立つことができない","頭を打ち、けいれんを起こしている"],
                        heavy:["傷口が開いている","傷口がえぐれている","汚れた物が体に刺さった","痛くて動けない","痛みが続いている","機嫌が悪く、泣き止まない","頭を打ち、嘔吐を繰り返している","野生動物や輸入動物に咬まれた","↑息苦しそうでぜーぜーしている","咬まれた部位がひどく腫れている","咬まれた傷が深い","4種混合（DPT-IPV）もしくは3種混合（DPT）の予防接種をしていない動物に咬まれた"],
                        normal:["Nothing_Data"],
                        mild:["当てはまる症状はありません"]},
                    9:{ // やけど
                        emg: ["やけどの範囲が全身の約10%以上（範囲の目安:片腕もしくは片足で10%程度、背中もしくはお腹で20%程度）","やけどをした皮膚が黒色、もしくは白くなっている","顔面にやけどしている"],
                        heavy:["手や足の指にやけどした","陰部にやけどした","水疱（水ぶくれ）がある"],
                        normal:["やけどの範囲が1円玉以下","皮膚がうっすら赤くなっている"],
                        mild:["当てはまる症状はありません"]},
                    10:{ // 鼻血
                        emg: ["Nothing_Data"],
                        heavy:["止血をしても鼻血が止まらない","顔にケガをしたことで鼻血が止まらない","皮膚に出血斑や内出血がある","ケガをすると血が止まりにくい"],
                        normal:["頻繁に鼻血が出るが、すぐに止まる"],
                        mild:["当てはまる症状はありません"]},
                    11:{ // 突発性発疹
                        emg: ["Nothing_Data"],
                        heavy:["Nothing_Data"],
                        normal:["生後3か月未満の赤ちゃん","ぐったりしていて、水分もとれない"],
                        mild:["下痢をしている","瞼の腫れ、大泉門の腫れ"]},
                    12:{ // 湿疹じんましん
                        emg: ["強く咳き込み、呼吸が苦しそう","意識が朦朧とし、ぐったりしている"],
                        heavy:["かゆみが強くて眠れない","全身にじんましんが広がっている"],
                        normal:["一部にしか発疹がなく、かゆみも弱い","湿疹やじんましんの症状が数日続く"],
                        mild:["当てはまる症状はありません"]},
                    13:{ // 熱中症
                        emg: ["意識がなく、呼びかけにも反応しない","けいれんを起こしている","まっすぐ走れない","体温が以上に高い","異常に汗をかいている、もしくは汗が出ない","熱が40度以上ある","激しい頭痛がある"],
                        heavy:["頭痛がする","吐き気があり、嘔吐した","全身がだるい、体が疲れている"],
                        normal:["めまいや立ち眩みが起こる","筋肉がこむら返りしたり、足がつる","大量の汗をかく","手足がしびれている","気分が悪い"],
                        mild:["当てはまる症状はありません"]},
                    14:{ // 目ヤニ
                        emg: ["Nothing_Data"],
                        heavy:["Nothing_Data"],
                        normal:["目ヤニが膿状の黄緑色をしている","粘り気があり、白い目ヤニが出る","涙の様にさらさらとした目ヤニが出る","目が赤く、充血している","まぶたが腫れている","発熱や鼻水などの症状がある"],
                        mild:["当てはまる症状はありません"]},
                    
                },
                level:"emg", // 重症：heavy,普通：normal,軽症：mild
                info: ["発熱","嘔吐","咳・呼吸","下痢","便秘","鼻水・鼻づまり","誤飲・誤嚥","頭をうった","ケガ","やけど","鼻血","突発性発疹","湿疹じんましん","熱中症","目ヤニ"],
                btnLabel: "Next",
                btnLabel_prev: false,
                btnLabel_next: true,
            }

        }
    },
    methods: {
        // handleClick(){
        //     test()
        // }
        nothingSwitch(){
                if (this.symptoms.data[this.symptoms.data_index][this.symptoms.level][0] === "Nothing_Data"){
                    switch(this.symptoms.level){
                        case "emg":
                            this.symptoms.level="heavy"
                            this.symptoms.btnLabel_prev = false
                            this.nothingSwitch();

                            break
                        case "heavy":
                            this.symptoms.level="normal"
                            this.symptoms.btnLabel_prev = false
                            this.nothingSwitch();

                            break
                        case "normal":
                            this.symptoms.level="mild"
                            this.symptoms.btnLabel_prev = false
                            this.symptoms.btnLabel_next = false
                            break
                    }
                }
            
        },
        levelSwitch(arg){
            if (arg==="previous"){
                switch(this.symptoms.level){
                    case "heavy":
                        this.symptoms.level="emg"
                        this.symptoms.btnLabel_prev = false
                        this.nothingSwitch();


                        break
                    case "normal":
                        this.symptoms.level="heavy"
                        this.nothingSwitch();

                        if (this.symptoms.data[this.symptoms.data_index]["emg"][0] === "Nothing_Data") this.symptoms.btnLabel_prev = false
                        break
                    case "mild":
                        this.symptoms.level="normal"
                        // this.nothingSwitch();　// ケガのときはここでバグる、”次へ”と”戻る”ボタン押したときのNothing_Dataとの連携をリファクタリングする必要あり。
                        if (this.symptoms.data[this.symptoms.data_index]["heavy"][0] === "Nothing_Data") this.symptoms.btnLabel_prev = false
                        

                        this.symptoms.btnLabel_next = true
                        break
                }
            }else if(arg==="next"){
                switch(this.symptoms.level){
                    case "emg":
                        this.symptoms.level="heavy"
                        this.nothingSwitch();

                        this.symptoms.btnLabel_prev = true

                        break
                    case "heavy":
                        this.symptoms.level="normal"
                        this.nothingSwitch();

                        this.symptoms.btnLabel_prev = true
                        break
                    case "normal":
                        this.symptoms.level="mild"
                        this.symptoms.btnLabel_prev = true
                        this.symptoms.btnLabel_next = false
                        break

                }
            }
        },
        hitResult(){
            this.symptoms.resultText = this.symptoms.level
            this.symptoms.resultflag = true
            this.symptoms.btnflag=false
            this.symptoms.btnLabel_next=true
            this.symptoms.btnLabel_prev=false
            this.symptoms.level='emg'

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