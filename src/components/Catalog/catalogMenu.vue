<template>
  <li :class="`level-${item.level}`">
    <div class="tr">
      <div>
        <span
          class="link-folder"
          :class="{'child':item.children && item.children.length || productsFolder.length}"
          @click="toggle"
          @dblclick="makeFolder"
        >
          <span class="ico-arrow" :class="{'open': isOpen}"></span>
          <img class="ico-folder" src="../../assets/folder.svg" alt="">
          {{ item.title }}
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
    <template v-if="productsFolder.length">
      <div
        class="tr product"
        v-for="prod in productsFolder"
        :key="prod.id"
        v-show="isOpen"
      >
        <div>
          <input
            :id="`id-order-${prod.code}`"
            type="checkbox"
            class="style-checkbox"
            @change="setCombineOrder($event, prod)"
            :value="prod.combineOrder"
            :checked="prod.combineOrder"
          >
          <label :for="`id-order-${prod.code}`"></label>
          <span class="prod-title">
            {{ prod.title }}
          </span>
        </div>
        <div>{{ prod.code }}</div>
        <div>{{ prod.remainder }}</div>
        <div>{{ prod.byAgreement }}</div>
        <div>{{ prod.priceDealer | sum }}</div>
        <div>{{ prod.priceBasic | sum }}</div>
        <div>{{ prod.minibox }}</div>
        <div class="text-right">{{ prod.packaging }}</div>
      </div>
    </template>
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
  import { mapState } from "vuex";

  export default {
    name: "catalogMenu",
    props: {
      item: Object,
    },
    data: function () {
      return {
        isOpen: false
      }
    },
    computed: {
      ...mapState('catalog', ['products']),
      productsFolder() {
        return this.products.filter(el => el.idFolder == this.item.idFolder);
      },
      isFolder: function () {
        return this.item.children &&
            this.item.children.length || this.productsFolder.length
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
      },
      setCombineOrder() {

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
    color: #313131;
    li {
      .link-folder {
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        &.child {
          cursor: pointer;
          .ico-arrow {
            opacity: 1;
          }
        }
        .ico-arrow {
          display: inline-block;
          vertical-align: middle;
          width: 6px;
          height: 6px;
          position: relative;
          margin-right: 10px;
          opacity: 0;
          &:after {
            content: '';
            display: block;
            width: 6px;
            height: 6px;
            background: url('../../assets/arrow.svg') 0 0 no-repeat;
            position: absolute;
            top: 0;
            left: 0;
          }
          &.open {
            &:after {
              top: -3px;
              transform: rotate(180deg);
            }
          }
        }
        .ico-folder {
          margin-right: 6px;
          vert-align: middle;
        }
      }
      &.level-1 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 14px;
            }
          }
        }
      }
      &.level-2 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 30px;
            }
          }
        }
      }
      &.level-3 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 46px;
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
          padding: 12px 8px;
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
  .style-checkbox + label {
    &:after, &:before {
      margin-top: -6px;
      margin-left: 4px;
    }
  }
  .prod-title {
    cursor: pointer;
    padding-left: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
