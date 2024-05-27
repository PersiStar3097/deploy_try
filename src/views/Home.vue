<template>
    <v-app class="bg-cyan-accent-4">
        <!-- <v-app-bar color="cyan" height=50>
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
                    </v-icon>
                </v-btn>
            </template>

        </v-app-bar> -->
        <v-main>
       
            <!-- <v-container style="margin-inline:auto; max-inline-size: max-content;"> -->
            <v-container class="fill-height">
                <v-row align="center" justify="center">
                    <v-col>
                        <p>ハクログ</p>
                        <p class="text-h1">Hack Log<v-icon icon="mdi-baby" size="small"></v-icon></p>
                        <p class="pt-10"></p>
                        <p class="text-h6">症状を選択する事である程度の緊急度を判断するアプリです</p>

                        <p class="py-8"></p>
                        <p class="px-12">
                        <p class="px-12">
                        <v-row justify="space-around">
                            <v-btn width="200px" height="200px" variant="elevated" color="cyan-lighten-3" to="/check">Check Symptoms<v-icon icon="mdi-stethoscope" size="x-large"></v-icon></v-btn>
                            <v-btn width="200px" height="200px" variant="elevated" color="cyan-lighten-3" to="/growth">Growth Curve<v-icon icon="mdi-human-baby-changing-table" size="x-large"></v-icon></v-btn>
                            <v-btn width="200px" height="200px" variant="elevated" color="cyan-lighten-3" to="/doc">Document<v-icon icon="mdi-book-open-page-variant-outline" size="x-large"></v-icon></v-btn>
                        </v-row>
                        </p>
                        </p>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-main>
        <!-- <v-navigation-drawer v-model="drawer" :width="300">
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
        </v-footer> -->
    </v-app>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                // drawer: 0,

            }
        },
        methods: {
            // handleClick(){
            //     test()
            // }

            hoge() {
                window.alert("hoge");
            }
    }
}
</script>