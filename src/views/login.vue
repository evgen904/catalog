<template>
  <div class="form">
    <form @submit.prevent="submit">
      <div>
        <label>
          Login<br>
          <input
            v-model="user.firstName"
            type="text"
            id="firstName"
            name="firstName"
            :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
          >
        </label>
        <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">First Name is required</div>
      </div>
      <div>
        <label>
          Password<br>
          <input
            v-model="user.password"
            type="password"
            id="password"
            name="password"
            :class="{ 'is-invalid': submitted && $v.user.password.$error }"
          >
        </label>
        <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
          <span v-if="!$v.user.password.required">Password is required</span>
          <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import { required, minLength } from "vuelidate/lib/validators";

  export default {
    name: 'Login',
    data() {
      return {
        user: {
          firstName: '',
          password: ''
        },
        submitted: false
      }
    },
    validations: {
      user: {
        firstName: { required },
        password: { required, minLength: minLength(6) }
      }
    },
    methods: {
      submit() {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        console.log(JSON.stringify(this.user));

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
</style>
