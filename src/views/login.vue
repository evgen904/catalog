<template>
  <div class="form">
    <form @submit.prevent="submit">
      <div>
        <label>
          Login - admin<br>
          <input
            v-model="userLogin.login"
            type="text"
            id="firstName"
            name="firstName"
            :class="{ 'is-invalid': submitted && $v.userLogin.login.$error }"
          >
        </label>
        <div v-if="submitted && !$v.userLogin.login.required" class="invalid-feedback">First Name is required</div>
      </div>
      <div>
        <label>
          Password - 123456<br>
          <input
            v-model="userLogin.password"
            type="password"
            id="password"
            name="password"
            :class="{ 'is-invalid': submitted && $v.userLogin.password.$error }"
          >
        </label>
        <div v-if="submitted && $v.userLogin.password.$error" class="invalid-feedback">
          <span v-if="!$v.userLogin.password.required">Password is required</span>
          <span v-if="!$v.userLogin.password.minLength">Password must be at least 6 characters</span>
        </div>
      </div>
      <button type="submit">Login</button>
      <div v-if="user && user.loginError != ''" class="error">
        {{ user.loginError }}
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import { required, minLength } from "vuelidate/lib/validators";

  export default {
    name: 'Login',
    data() {
      return {
        userLogin: {
          login: '',
          password: ''
        },
        submitted: false
      }
    },
    computed: {
      ...mapState(['user'])
    },
    validations: {
      userLogin: {
        login: { required },
        password: { required, minLength: minLength(6) }
      }
    },
    methods: {
      ...mapActions(['login']),
      async submit() {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        await this.login(this.userLogin);

        if (this.user && this.user.loginError == '') {
          this.$router.push({
            name: 'Catalog'
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.form {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ccc;
  min-height: 200px;
  text-align: left;
  padding: 40px;
}
.error {
  white-space: pre-line;
}
</style>
