<template>
    
<center><div>
    
    <h1>&nbsp;</h1>
        <h1>Login</h1>
        <form v-on:submit.prevent="onLogin">
            <b> Email <br><br /><input type="text" v-model="email" /></b><br><br/>
            <b> Password<br><br /> <input type="password" v-model="password" /></b><br><br/>
            <button class="buttonnnn button" type="submit"><b>Login</b></button>
            <b><div class="error" v-if="error">{{ error }}</div></b> 
        </form>
    </div></center>
    
</template>
<style scoped>
.error {
    color: red;
}
</style>
<script>
import AuthenService from "@/services/AuthenService";
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },
    
    methods: {
        navigateTo(route){
        this.$router.push(route)
      },
        async onLogin() {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)


                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)

                console.log(response)


                this.$router.push({
                    name: 'bikes'
                })

            } catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''

            }
        }
        
    },async created() {
      try{
        this.users = (await UsersService.index()).data;
      }catch (err){
        console.log(err)
      }}
}
</script>