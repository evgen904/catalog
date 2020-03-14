<template>
  <div class="search">
    <form @submit.prevent="search">
      <label>
        <input type="text" placeholder="Введите название или код товара">
        <button>
          <img src="../../assets/search.svg" alt="">
        </button>
      </label>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Search",
    methods: {
      search() {

      }
    }
  }
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 20px;
  form {
    padding: 0;
    margin: 0;
    label {
      display: flex;
      padding: 0;
      margin: 0;
      background: #FFFFFF;
      border: 1px solid #313131;
      box-sizing: border-box;
      border-radius: 2px;
      width: 246px;
      input[type="text"] {
        display: block;
        outline-style: none;
        font-size: 12px;
        height: 22px;
        width: 100%;
        background: none;
        border: none;
        padding: 5px 10px;
        margin: 0;
      }
      button {
        cursor: pointer;
        display: block;
        outline-style: none;
        width: 30px;
        height: 22px;
        padding: 0;
        margin: 0;
        background: none;
        border: none;
      }
    }
  }
}
</style>
