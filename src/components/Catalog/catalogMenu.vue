<template>
  <li :class="`level-${item.level}`">
    <div class="tr">
      <div>
        <span
          class="link-folder"
          :class="{'child':item.children && item.children.length}"
          @click="toggle"
          @dblclick="makeFolder"
        >
          <img class="ico-arrow" src="../../assets/arrow.svg" alt="">
          <img class="ico-folder" src="../../assets/folder.svg" alt="">
          {{ item.title }}
          <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </span>
      </div>
      <div>{{ item.code }}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <catalogMenu
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      ></catalogMenu>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "catalogMenu",
    props: {
      item: Object
    },
    data: function () {
      return {
        isOpen: false
      }
    },
    computed: {
      isFolder: function () {
        return this.item.children &&
            this.item.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.isOpen = !this.isOpen
        }
      },
      makeFolder: function () {
        if (!this.isFolder) {
          this.$emit('make-folder', this.item)
          this.isOpen = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 12px;
    li {
      .link-folder {
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        &.child {
          cursor: pointer;
        }
        .ico-arrow {
          margin-right: 6px;
          vertical-align: middle;
        }
        .ico-folder {
          margin-right: 6px;
          vert-align: middle;
        }
      }
      &.level-2 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 18px;
            }
          }
        }
      }
      &.level-3 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 36px;
            }
          }
        }
      }
      .tr {
        display: flex;
        width: 100%;
        > div {
          border: 1px solid #ccc;
          margin-right: -1px;
          margin-bottom: -1px;
          padding: 5px;
          &:nth-child(1) {
            width: 36%;
          }
          &:nth-child(2) {
            width: 8%;
          }
          &:nth-child(3) {
            width: 10%;
          }
          &:nth-child(4) {
            width: 10%;
          }
          &:nth-child(5) {
            width: 8%;
          }
          &:nth-child(6) {
            width: 8%;
          }
          &:nth-child(7) {
            width: 10%;
          }
          &:nth-child(8) {
            width: 10%;
            margin-right: 0;
          }
        }
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
    }
  }
</style>
