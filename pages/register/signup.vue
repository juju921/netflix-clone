<template>
    <div class="flex flex-row">
        <div class="w-1/3 flex items-center justify-center px-24 py-24">
            <NuxtLink
                to="/login"
                class="px-4 py-2 font-medium text-4xl text-white capitalize transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-800 focus:ring-opacity-80"
                >Login page</NuxtLink>
        </div>
        <div class="w-1/3 px-12 py-12 my-24 mx-24">
            <form novalidate class="md-layout" @submit.prevent="registerUser" >
                <div>
                    <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">Register</h1>
                </div>
                <label for="email">Email</label>
                <input type="email"  name="email" id="email" autocomplete="email" v-model="form.email"  />
                <div class="md-layout-item md-small-size-100">
                    <label for="password">Password</label>
                    <input type="password"  name="password" id="password" autocomplete="password" v-model="form.password"  />
                </div>
                <div class="flex justify-end">
                    <input  type="submit" class="md-primary" value="register" >
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'FormValidation',
      data: () => ({
        form: {
          password: null,
          email: null,
        }
      }),
      computed:{
        authenticated(){
          return this.$store.getters.authenticated;
        }
      },
      watch:{
        authenticated(token){
          if(token){
            setTimeout(()=>this.$router.push('/'),1500);
          }
        }
      },
      methods: {
        async registerUser(){
            await this.$store.dispatch('authenticateUser',{
                email: this.email,
                password: this.password,
            }
              .catch(err => {
            alert(err.message);
          })
          )
        }
      }
    }
</script>