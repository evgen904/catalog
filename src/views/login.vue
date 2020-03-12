<template>
  <div class="form">
    <div class="form--logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <template v-if="state=='auth'">
      <form @submit.prevent="auth">
        <div class="form--error">
          <template v-if="user && user.loginError != ''">
            {{ user.loginError }}
          </template>
        </div>
        <div class="form--label">
          <label>
            <div class="form--label-title">Ваш e-mail</div>
            <input
              v-model="userLogin.login"
              type="text"
              :class="{ 'is-invalid': submittedAuth && $v.userLogin.login.$error }"
            >
          </label>
          <div v-if="submittedAuth && $v.userLogin.login.$error" class="form--invalid-label">
            <span v-if="!$v.userLogin.login.required">Введите email</span>
            <span v-if="!$v.userLogin.login.email">Введен некорректный email</span>
          </div>
        </div>
        <div class="form--label">
          <label>
            <div class="form--label-title">Пароль</div>
            <input
              v-model="userLogin.password"
              type="password"
              :class="{ 'is-invalid': submittedAuth && $v.userLogin.password.$error }"
            >
          </label>
          <div v-if="submittedAuth && $v.userLogin.password.$error" class="form--invalid-label">
            <span v-if="!$v.userLogin.password.required">Введите пароль</span>
            <span v-if="!$v.userLogin.password.minLength">Пароль должен содержать не менее 6 символов</span>
          </div>
        </div>
        <div class="form--login">
          <button class="btn-orange" type="submit">Войти</button>
        </div>
        <div class="form--bot">
          <span @click="state = 'forgot'">Забыли пароль?</span>
          <span @click="state = 'registration'">Регистрация</span>
        </div>
      </form>
    </template>
    <template v-else-if="state=='forgot'">
      <form @submit.prevent="forgot">
        <div class="form--desk">
          Введите адрес электронной почты, указанный при регистрации. Мы вышлем вам новый пароль.
        </div>
        <div class="form--error">
          <template v-if="user && user.loginError != ''">
            {{ user.loginError }}
          </template>
        </div>
        <div class="form--label">
          <label>
            <div class="form--label-title">Ваш e-mail</div>
            <input
              type="text"
            >
          </label>
        </div>
        <div class="form--login">
          <button class="btn-orange" type="submit">Восстановить</button>
        </div>
        <div class="form--bot">
          <span @click="state = 'registration'">Регистрация</span>
        </div>
      </form>
    </template>
    <template v-else-if="state=='registration'">
      <form @submit.prevent="registration">
        <div class="form--error">
          <template v-if="user && user.loginError != ''">
            {{ user.loginError }}
          </template>
        </div>
        <div class="form--label">
          <label>
            <div class="form--label-title">Ваше имя</div>
            <input
              type="text"
            >
          </label>
        </div>
        <div class="form--label">
          <label>
            <div class="form--label-title">Ваш e-mail</div>
            <input
                type="text"
            >
          </label>
        </div>
        <div class="form--label">
          <label>
            <div class="form--label-title">Пароль</div>
            <input
                type="password"
            >
          </label>
        </div>
        <div class="form--login">
          <button class="btn-black" type="submit">Зарегестрироваться</button>
        </div>
        <div class="form--conditions">
          Нажимая кнопку «Зарегистрироваться», Вы принимаете условия Пользовательского соглашения.
        </div>
        <div class="form--bot registration">
          <span @click="state = 'auth'">Уже зарегистрированы? &nbsp;&nbsp;Войти тут</span>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import { required, minLength, email } from "vuelidate/lib/validators";

  export default {
    name: 'Login',
    data() {
      return {
        state: 'auth',
        userLogin: {
          login: 'admin@mail.ru',
          password: '123456'
        },
        submittedAuth: false
      }
    },
    computed: {
      ...mapState(['user'])
    },
    validations: {
      userLogin: {
        login: { required, email },
        password: { required, minLength: minLength(6) }
      }
    },
    methods: {
      ...mapActions(['login']),
      async auth() {
        this.submittedAuth = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        await this.login(this.userLogin);

        if (this.user && this.user.loginError == '') {
          this.$router.push({
            name: 'Dashboard'
          });
        }
      },
      forgot() {

      },
      registration() {

      }
    }
  }
</script>

<style lang="scss" scoped>
.form {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  max-width: 520px;
  text-align: center;
  padding: 70px 80px 30px;
  background: #fff;
  &--logo {
    margin-bottom: 38px;
  }
  &--desk {
    font-size: 15px;
    text-align: left;
    color: #313131;
  }
  &--error {
    font-size: 16px;
    color: #DC0000;
    padding-bottom: 32px;
  }
  &--label {
    text-align: left;
    font-size: 14px;
    color: #313131;
    margin-bottom: 16px;
    &-title {
      margin-bottom: 4px;
    }
  }
  &--invalid-label {
    font-size: 14px;
    padding-top: 4px;
    color: #dc0000;
  }
  &--login {
    padding-top: 14px;
  }
  &--conditions {
    font-size: 13px;
    line-height: 18px;
    color: #313131;
    padding-top: 24px;
  }
  &--bot {
    font-size: 15px;
    color: #8A8A8A;
    padding-top: 54px;
    &.registration {
      padding-top: 36px;
    }
    span {
      cursor: pointer;
      margin: 0 20px;
    }
  }
  form {
    margin: 0;
    padding: 0;
    label {
      padding: 0;
      margin: 0;
      outline-style: none;
    }
    input[type="text"],input[type="password"] {
      display: block;
      padding: 0 20px;
      margin: 0;
      outline-style: none;
      height: 48px;
      width: 100%;
      color: #000000;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;

      background: #FFFFFF;
      border: 1px solid #D2D2D2;
      border-radius: 2px;
      transition: border 0.3s ease;
      &:-webkit-autofill {
        -webkit-box-shadow: inset 0 0 0 100px #fff !important; /* Цвет фона */
        -webkit-text-fill-color: #000 !important; /* цвет текста */
        color: #000 !important; /* цвет текста */
      }
      &.is-invalid {
        border: 1px solid #dc0000;
      }
    }
  }
}
.error {
  white-space: pre-line;
}
.btn-orange {
  cursor: pointer;
  outline-style: none;
  height: 40px;
  text-align: center;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-left: 24px;
  padding-right: 24px;

  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;

  background: linear-gradient(255.53deg, #FF8900 13.86%, #FFAB2D 86.44%), #FFA133;
  border-radius: 2px;
}
.btn-black {
  cursor: pointer;
  outline-style: none;
  height: 40px;
  text-align: center;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-left: 24px;
  padding-right: 24px;

  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;

  background: #313131;
  border-radius: 2px;
}
</style>
