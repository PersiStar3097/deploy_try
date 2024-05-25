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
          <p class="py-3"></p>
            <p class="text-h2">Document Library</p>
            <p class="py-3"></p>
            <p class="text-h5">症状に応じたPDFを閲覧できます。</p>
            <p class="py-2"></p>
            <p class="mx-12"><v-divider thickness="5"></v-divider></p>
            <p class="py-1"></p>

            <v-container>
                <v-carousel v-model="model">
                    <v-carousel-item>
                        <v-sheet
                            class="bg-white"
                            height="450"
                            tile
                        >
                            <v-row justify="center">
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='豊田市版_読む救急箱';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">読む救急箱~家庭の医療ガイドブック~</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='子どもの救急ガイドブック_こんな時どうする';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">子どもの救急ガイドブック~こんな時どうする？~</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_発熱';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">発熱</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_咳・呼吸が苦しい';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">咳・呼吸</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_嘔吐';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">嘔吐</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_下痢';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">下痢</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet
                            class="bg-white"
                            height="450"
                            tile
                        >
                            <v-row justify="center">
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_便秘';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">便秘</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_鼻水・鼻詰まり';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">鼻水・鼻詰まり</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_誤飲・誤嚥';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">誤飲・誤嚥</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_頭をうった';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">頭をうった</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_ケガ';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">ケガ</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_やけど';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">やけど</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet
                            class="bg-white"
                            height="450"
                            tile
                        >
                            <v-row justify="center">
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_鼻血';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">鼻血</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_突発性発疹';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">突発性発疹</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_湿疹じんましん';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">湿疹じんましん</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_熱中症';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">熱中症</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_中耳炎';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">中耳炎</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_目やに';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">目やに</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet
                            class="bg-white"
                            height="450"
                            tile
                        >
                            <v-row justify="center">
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_RSウイルス';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">RSウイルス</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_とびひ';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">とびひ</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_インフルエンザ';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">インフルエンザ</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_アデノウイルス感染症_プール熱・はやり目';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">アデノウイルス感染症　プール熱・はやり目</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_ヘルパンギーナ';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">ヘルパンギーナ</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_りんご病';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">りんご病</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet
                            class="bg-white"
                            height="450"
                            tile
                        >
                            <v-row justify="center">
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_手足口病';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">手足口病</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_ロタウイルス感染性胃腸炎';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">ロタウイルス感染性胃腸炎</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="3" class="pa-5" >
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_溶連菌感染症';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">溶連菌感染症</h3>
                                        </v-vard-text>
                                    </v-card>
                                    <p class="py-2"></p>
                                    <v-card color="blue-lighten-5" variant="elevated" height="200" @click.stop="doc_title='キッズドクター_川崎病';cardClick()">
                                        <v-vard-text>
                                            <h3 class="py-12 px-2">川崎病</h3>
                                        </v-vard-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
            </v-carousel>
            </v-container>

            <!-- <v-btn @click = "hoge">button</v-btn> -->
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
  export default {
    name: "Document",
    data() {
        return {
            drawer: 0,
            model: 0,
            doc_title: "",

        }
    },
    methods:{
        cardClick(){
            const docUrl = `/deploy_try/document_PDF/${this.doc_title}.pdf`; // 本番環境
            // alert(docUrl);
            // const docUrl = './public/docment_PDF/' + this.doc_title + '.pdf';
            window.open(docUrl,'_blank') // repo名を書く　PDFをブラウザ別タブで表示させる

        },
        hoge(){
            window.open('/deploy_try/document_PDF/test.pdf','_blank') // repo名を書く　PDFをブラウザ別タブで表示させる
        }
    }
  }
  </script>