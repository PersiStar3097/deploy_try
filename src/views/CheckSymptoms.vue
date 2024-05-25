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
            <p class="py-5"></p>
            <p class="text-h2">
                Check Symptoms
            </p>
            <p class="py-5"></p>
            <v-row class="pl-12">
                <p class="pl-12"></p>
                <v-btn color="blue-lighten-1" icon size="x-large" @click="temperature.btnflag = 'true'" fab>
                    <v-icon icon="mdi-temperature-celsius"></v-icon>
                </v-btn>
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
            <p v-if="temperature.btnflag === 'false'">
                <v-btn @click="hoge">byn</v-btn>

            </p>




            <!-- <router-view /> -->
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

        }
    },
    methods: {
        // handleClick(){
        //     test()
        // }

        hoge() {
            window.alert(String(this.temperature.largeNum) + "." + String(this.temperature.smallNum));
            console.log(this.temperature.btnflag);
        }
    }
}
</script>