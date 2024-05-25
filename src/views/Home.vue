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
        <p class="py-2"></p>

            <p class="text-h1">Main Contents

            </p>
            <v-btn @click = "hoge">button</v-btn>
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
        name: "Home",
        data() {
            return {
                drawer: 0,

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