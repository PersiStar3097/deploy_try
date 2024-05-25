<template>
    <v-app>
      <v-main>
        <p v-if="auth.errflag === 'true'">
            <v-alert
                class="ma-5"
                density="compact"
                text="Miss! Please enter your password."
                title="Alert"
                type="warning"
            >
            </v-alert>
            <v-btn variant="outlined" color="deep-purple-accent-4" @click = "errflag_cancel" >close</v-btn>
        </p>
        <p class="py-12"></p>
        <v-card width="450px" class="mx-auto mt-5 rounded-xl" elevation="10">
          <v-card-text>
            <p class="py-5"></p>
            <p class="text-h5">Login into your Account</p>
            <p class="py-10"></p>
            <v-form>
              <v-text-field
                class="mx-5"
                variant="underlined"
                prepend-icon="mdi-account-circle"
                label="Account"
                v-model="auth.account"
              />
              <v-text-field
                class="mx-5"
                variant="underlined"
                v-bind:type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="Password"
                @click:append="showPassword = !showPassword"
                v-model="auth.password"
              />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="tonal" color="deep-purple-accent-4" @click = "auth_login">
                  {{ "Login" }}
                </v-btn>
    
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-main>
    </v-app>
  </template>
  
  
  <script>
  export default {
    name:"login",
    data(){
      return {
        showPassword : false,
        auth:{
          account:"",
          password:"",
          errflag: "false"
        },
      }
    },
    methods:{

        auth_login(){
            if (this.auth.account === "hoge" && this.auth.password === "hoge"){
                this.$router.push("/home")
            }else{
                // window.alert("Miss!")
                this.auth.errflag="true"
            }
        },
        errflag_cancel(){
            this.auth.errflag="false"
        }
    }
  }
  </script>