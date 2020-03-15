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
          <span @click="showModal" class="prod-title">
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
    <portal to="product-head" v-if="modal">
      title
    </portal>
    <portal to="product-body" v-if="modal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nihil non rerum sit tempore! Accusantium at corporis, dolorem dolores doloribus enim eum eveniet hic magni, nihil porro quas qui quia saepe suscipit vel vero? Accusamus adipisci cum dolorem dolorum ducimus, ea earum eligendi eos error est exercitationem harum id impedit incidunt ipsam laborum minima nam nesciunt nihil nobis non nulla obcaecati officiis perferendis perspiciatis qui, quia quibusdam quo quod rerum, sed sint sunt suscipit velit voluptas voluptate voluptates! Beatae eos laborum magnam magni omnis quae soluta sunt? Consequatur eos in quas ratione! Aliquid amet consequatur earum harum illo impedit magni modi molestias quae quisquam quos saepe, sequi similique ut veritatis vitae, voluptates voluptatum! Amet architecto atque dolor, eligendi enim eos fuga officia possimus quia reiciendis repellat repellendus voluptate voluptatibus. Accusantium, consectetur expedita in quasi saepe temporibus vitae. Architecto asperiores, assumenda dolor impedit magni officia possimus sint sunt! Adipisci alias at aut consectetur cum distinctio doloribus enim error est, et eveniet exercitationem facilis harum ipsa ipsum itaque iure laborum magni maiores necessitatibus perspiciatis quibusdam reiciendis rem repellendus reprehenderit rerum sed similique? Alias aliquam dignissimos dolor dolorem dolores esse fuga fugiat illo, impedit incidunt libero minima nam omnis provident recusandae tempora totam, vel. Aspernatur assumenda atque, consectetur consequuntur cumque, doloremque earum facilis harum ipsum iusto natus neque nesciunt nostrum nulla numquam obcaecati porro quae quia reiciendis repellat reprehenderit saepe sapiente suscipit tempora tenetur voluptates voluptatibus! Alias animi asperiores autem culpa debitis dolor, ducimus eaque esse, ex fuga iure libero nulla numquam pariatur qui quod rerum sit tenetur vero vitae. A aliquam aliquid asperiores doloribus iste laborum nam nihil? Alias consequatur cum dolorem, ex fugiat illo in, inventore ipsam iure laudantium nobis odio perspiciatis qui repellendus sit unde, vel voluptatem! Animi enim eos, facilis harum magni, molestiae possimus provident qui quod tenetur ut, voluptas. Adipisci animi aperiam aspernatur autem consectetur consequatur culpa cupiditate dicta eius eligendi eos esse facilis harum illo ipsa, ipsum iure labore magni mollitia non odio odit perferendis qui quisquam recusandae repellendus sequi sit soluta suscipit temporibus ullam velit voluptas voluptatum. Deleniti distinctio incidunt tempore. Autem commodi eligendi facilis laborum placeat qui quo, quos veritatis. Adipisci, aperiam aspernatur at cupiditate dolore dolorem doloribus eos error exercitationem harum hic inventore iusto laborum, maxime, minima necessitatibus odio perferendis porro quaerat quos repudiandae rerum similique sint sunt temporibus totam vitae! Ad adipisci aliquam aliquid aperiam, assumenda atque commodi consequatur consequuntur, doloremque eaque eos eveniet ipsum itaque labore laudantium nesciunt odio officiis omnis possimus quaerat quia quidem repudiandae tempora ullam, ut voluptates voluptatibus? Ab adipisci atque deserunt eos est incidunt, iure neque porro praesentium quae quasi quia rem, sapiente, temporibus tenetur. A consequatur debitis eum illo illum libero minus molestiae officiis omnis placeat porro quos, sit. Consequuntur cumque deleniti ea eligendi eum facilis minima placeat praesentium quo quod similique, temporibus voluptatum. Alias, aliquam, asperiores doloremque eaque hic ipsa laborum magnam minima molestiae nobis officia quas ratione repellendus rerum sint vero voluptate. Aspernatur deleniti dignissimos esse inventore ipsa odit quisquam sit, tempora ut vitae, voluptates?
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nihil non rerum sit tempore! Accusantium at corporis, dolorem dolores doloribus enim eum eveniet hic magni, nihil porro quas qui quia saepe suscipit vel vero? Accusamus adipisci cum dolorem dolorum ducimus, ea earum eligendi eos error est exercitationem harum id impedit incidunt ipsam laborum minima nam nesciunt nihil nobis non nulla obcaecati officiis perferendis perspiciatis qui, quia quibusdam quo quod rerum, sed sint sunt suscipit velit voluptas voluptate voluptates! Beatae eos laborum magnam magni omnis quae soluta sunt? Consequatur eos in quas ratione! Aliquid amet consequatur earum harum illo impedit magni modi molestias quae quisquam quos saepe, sequi similique ut veritatis vitae, voluptates voluptatum! Amet architecto atque dolor, eligendi enim eos fuga officia possimus quia reiciendis repellat repellendus voluptate voluptatibus. Accusantium, consectetur expedita in quasi saepe temporibus vitae. Architecto asperiores, assumenda dolor impedit magni officia possimus sint sunt! Adipisci alias at aut consectetur cum distinctio doloribus enim error est, et eveniet exercitationem facilis harum ipsa ipsum itaque iure laborum magni maiores necessitatibus perspiciatis quibusdam reiciendis rem repellendus reprehenderit rerum sed similique? Alias aliquam dignissimos dolor dolorem dolores esse fuga fugiat illo, impedit incidunt libero minima nam omnis provident recusandae tempora totam, vel. Aspernatur assumenda atque, consectetur consequuntur cumque, doloremque earum facilis harum ipsum iusto natus neque nesciunt nostrum nulla numquam obcaecati porro quae quia reiciendis repellat reprehenderit saepe sapiente suscipit tempora tenetur voluptates voluptatibus! Alias animi asperiores autem culpa debitis dolor, ducimus eaque esse, ex fuga iure libero nulla numquam pariatur qui quod rerum sit tenetur vero vitae. A aliquam aliquid asperiores doloribus iste laborum nam nihil? Alias consequatur cum dolorem, ex fugiat illo in, inventore ipsam iure laudantium nobis odio perspiciatis qui repellendus sit unde, vel voluptatem! Animi enim eos, facilis harum magni, molestiae possimus provident qui quod tenetur ut, voluptas. Adipisci animi aperiam aspernatur autem consectetur consequatur culpa cupiditate dicta eius eligendi eos esse facilis harum illo ipsa, ipsum iure labore magni mollitia non odio odit perferendis qui quisquam recusandae repellendus sequi sit soluta suscipit temporibus ullam velit voluptas voluptatum. Deleniti distinctio incidunt tempore. Autem commodi eligendi facilis laborum placeat qui quo, quos veritatis. Adipisci, aperiam aspernatur at cupiditate dolore dolorem doloribus eos error exercitationem harum hic inventore iusto laborum, maxime, minima necessitatibus odio perferendis porro quaerat quos repudiandae rerum similique sint sunt temporibus totam vitae! Ad adipisci aliquam aliquid aperiam, assumenda atque commodi consequatur consequuntur, doloremque eaque eos eveniet ipsum itaque labore laudantium nesciunt odio officiis omnis possimus quaerat quia quidem repudiandae tempora ullam, ut voluptates voluptatibus? Ab adipisci atque deserunt eos est incidunt, iure neque porro praesentium quae quasi quia rem, sapiente, temporibus tenetur. A consequatur debitis eum illo illum libero minus molestiae officiis omnis placeat porro quos, sit. Consequuntur cumque deleniti ea eligendi eum facilis minima placeat praesentium quo quod similique, temporibus voluptatum. Alias, aliquam, asperiores doloremque eaque hic ipsa laborum magnam minima molestiae nobis officia quas ratione repellendus rerum sint vero voluptate. Aspernatur deleniti dignissimos esse inventore ipsa odit quisquam sit, tempora ut vitae, voluptates?
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nihil non rerum sit tempore! Accusantium at corporis, dolorem dolores doloribus enim eum eveniet hic magni, nihil porro quas qui quia saepe suscipit vel vero? Accusamus adipisci cum dolorem dolorum ducimus, ea earum eligendi eos error est exercitationem harum id impedit incidunt ipsam laborum minima nam nesciunt nihil nobis non nulla obcaecati officiis perferendis perspiciatis qui, quia quibusdam quo quod rerum, sed sint sunt suscipit velit voluptas voluptate voluptates! Beatae eos laborum magnam magni omnis quae soluta sunt? Consequatur eos in quas ratione! Aliquid amet consequatur earum harum illo impedit magni modi molestias quae quisquam quos saepe, sequi similique ut veritatis vitae, voluptates voluptatum! Amet architecto atque dolor, eligendi enim eos fuga officia possimus quia reiciendis repellat repellendus voluptate voluptatibus. Accusantium, consectetur expedita in quasi saepe temporibus vitae. Architecto asperiores, assumenda dolor impedit magni officia possimus sint sunt! Adipisci alias at aut consectetur cum distinctio doloribus enim error est, et eveniet exercitationem facilis harum ipsa ipsum itaque iure laborum magni maiores necessitatibus perspiciatis quibusdam reiciendis rem repellendus reprehenderit rerum sed similique? Alias aliquam dignissimos dolor dolorem dolores esse fuga fugiat illo, impedit incidunt libero minima nam omnis provident recusandae tempora totam, vel. Aspernatur assumenda atque, consectetur consequuntur cumque, doloremque earum facilis harum ipsum iusto natus neque nesciunt nostrum nulla numquam obcaecati porro quae quia reiciendis repellat reprehenderit saepe sapiente suscipit tempora tenetur voluptates voluptatibus! Alias animi asperiores autem culpa debitis dolor, ducimus eaque esse, ex fuga iure libero nulla numquam pariatur qui quod rerum sit tenetur vero vitae. A aliquam aliquid asperiores doloribus iste laborum nam nihil? Alias consequatur cum dolorem, ex fugiat illo in, inventore ipsam iure laudantium nobis odio perspiciatis qui repellendus sit unde, vel voluptatem! Animi enim eos, facilis harum magni, molestiae possimus provident qui quod tenetur ut, voluptas. Adipisci animi aperiam aspernatur autem consectetur consequatur culpa cupiditate dicta eius eligendi eos esse facilis harum illo ipsa, ipsum iure labore magni mollitia non odio odit perferendis qui quisquam recusandae repellendus sequi sit soluta suscipit temporibus ullam velit voluptas voluptatum. Deleniti distinctio incidunt tempore. Autem commodi eligendi facilis laborum placeat qui quo, quos veritatis. Adipisci, aperiam aspernatur at cupiditate dolore dolorem doloribus eos error exercitationem harum hic inventore iusto laborum, maxime, minima necessitatibus odio perferendis porro quaerat quos repudiandae rerum similique sint sunt temporibus totam vitae! Ad adipisci aliquam aliquid aperiam, assumenda atque commodi consequatur consequuntur, doloremque eaque eos eveniet ipsum itaque labore laudantium nesciunt odio officiis omnis possimus quaerat quia quidem repudiandae tempora ullam, ut voluptates voluptatibus? Ab adipisci atque deserunt eos est incidunt, iure neque porro praesentium quae quasi quia rem, sapiente, temporibus tenetur. A consequatur debitis eum illo illum libero minus molestiae officiis omnis placeat porro quos, sit. Consequuntur cumque deleniti ea eligendi eum facilis minima placeat praesentium quo quod similique, temporibus voluptatum. Alias, aliquam, asperiores doloremque eaque hic ipsa laborum magnam minima molestiae nobis officia quas ratione repellendus rerum sint vero voluptate. Aspernatur deleniti dignissimos esse inventore ipsa odit quisquam sit, tempora ut vitae, voluptates?
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nihil non rerum sit tempore! Accusantium at corporis, dolorem dolores doloribus enim eum eveniet hic magni, nihil porro quas qui quia saepe suscipit vel vero? Accusamus adipisci cum dolorem dolorum ducimus, ea earum eligendi eos error est exercitationem harum id impedit incidunt ipsam laborum minima nam nesciunt nihil nobis non nulla obcaecati officiis perferendis perspiciatis qui, quia quibusdam quo quod rerum, sed sint sunt suscipit velit voluptas voluptate voluptates! Beatae eos laborum magnam magni omnis quae soluta sunt? Consequatur eos in quas ratione! Aliquid amet consequatur earum harum illo impedit magni modi molestias quae quisquam quos saepe, sequi similique ut veritatis vitae, voluptates voluptatum! Amet architecto atque dolor, eligendi enim eos fuga officia possimus quia reiciendis repellat repellendus voluptate voluptatibus. Accusantium, consectetur expedita in quasi saepe temporibus vitae. Architecto asperiores, assumenda dolor impedit magni officia possimus sint sunt! Adipisci alias at aut consectetur cum distinctio doloribus enim error est, et eveniet exercitationem facilis harum ipsa ipsum itaque iure laborum magni maiores necessitatibus perspiciatis quibusdam reiciendis rem repellendus reprehenderit rerum sed similique? Alias aliquam dignissimos dolor dolorem dolores esse fuga fugiat illo, impedit incidunt libero minima nam omnis provident recusandae tempora totam, vel. Aspernatur assumenda atque, consectetur consequuntur cumque, doloremque earum facilis harum ipsum iusto natus neque nesciunt nostrum nulla numquam obcaecati porro quae quia reiciendis repellat reprehenderit saepe sapiente suscipit tempora tenetur voluptates voluptatibus! Alias animi asperiores autem culpa debitis dolor, ducimus eaque esse, ex fuga iure libero nulla numquam pariatur qui quod rerum sit tenetur vero vitae. A aliquam aliquid asperiores doloribus iste laborum nam nihil? Alias consequatur cum dolorem, ex fugiat illo in, inventore ipsam iure laudantium nobis odio perspiciatis qui repellendus sit unde, vel voluptatem! Animi enim eos, facilis harum magni, molestiae possimus provident qui quod tenetur ut, voluptas. Adipisci animi aperiam aspernatur autem consectetur consequatur culpa cupiditate dicta eius eligendi eos esse facilis harum illo ipsa, ipsum iure labore magni mollitia non odio odit perferendis qui quisquam recusandae repellendus sequi sit soluta suscipit temporibus ullam velit voluptas voluptatum. Deleniti distinctio incidunt tempore. Autem commodi eligendi facilis laborum placeat qui quo, quos veritatis. Adipisci, aperiam aspernatur at cupiditate dolore dolorem doloribus eos error exercitationem harum hic inventore iusto laborum, maxime, minima necessitatibus odio perferendis porro quaerat quos repudiandae rerum similique sint sunt temporibus totam vitae! Ad adipisci aliquam aliquid aperiam, assumenda atque commodi consequatur consequuntur, doloremque eaque eos eveniet ipsum itaque labore laudantium nesciunt odio officiis omnis possimus quaerat quia quidem repudiandae tempora ullam, ut voluptates voluptatibus? Ab adipisci atque deserunt eos est incidunt, iure neque porro praesentium quae quasi quia rem, sapiente, temporibus tenetur. A consequatur debitis eum illo illum libero minus molestiae officiis omnis placeat porro quos, sit. Consequuntur cumque deleniti ea eligendi eum facilis minima placeat praesentium quo quod similique, temporibus voluptatum. Alias, aliquam, asperiores doloremque eaque hic ipsa laborum magnam minima molestiae nobis officia quas ratione repellendus rerum sint vero voluptate. Aspernatur deleniti dignissimos esse inventore ipsa odit quisquam sit, tempora ut vitae, voluptates?
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nihil non rerum sit tempore! Accusantium at corporis, dolorem dolores doloribus enim eum eveniet hic magni, nihil porro quas qui quia saepe suscipit vel vero? Accusamus adipisci cum dolorem dolorum ducimus, ea earum eligendi eos error est exercitationem harum id impedit incidunt ipsam laborum minima nam nesciunt nihil nobis non nulla obcaecati officiis perferendis perspiciatis qui, quia quibusdam quo quod rerum, sed sint sunt suscipit velit voluptas voluptate voluptates! Beatae eos laborum magnam magni omnis quae soluta sunt? Consequatur eos in quas ratione! Aliquid amet consequatur earum harum illo impedit magni modi molestias quae quisquam quos saepe, sequi similique ut veritatis vitae, voluptates voluptatum! Amet architecto atque dolor, eligendi enim eos fuga officia possimus quia reiciendis repellat repellendus voluptate voluptatibus. Accusantium, consectetur expedita in quasi saepe temporibus vitae. Architecto asperiores, assumenda dolor impedit magni officia possimus sint sunt! Adipisci alias at aut consectetur cum distinctio doloribus enim error est, et eveniet exercitationem facilis harum ipsa ipsum itaque iure laborum magni maiores necessitatibus perspiciatis quibusdam reiciendis rem repellendus reprehenderit rerum sed similique? Alias aliquam dignissimos dolor dolorem dolores esse fuga fugiat illo, impedit incidunt libero minima nam omnis provident recusandae tempora totam, vel. Aspernatur assumenda atque, consectetur consequuntur cumque, doloremque earum facilis harum ipsum iusto natus neque nesciunt nostrum nulla numquam obcaecati porro quae quia reiciendis repellat reprehenderit saepe sapiente suscipit tempora tenetur voluptates voluptatibus! Alias animi asperiores autem culpa debitis dolor, ducimus eaque esse, ex fuga iure libero nulla numquam pariatur qui quod rerum sit tenetur vero vitae. A aliquam aliquid asperiores doloribus iste laborum nam nihil? Alias consequatur cum dolorem, ex fugiat illo in, inventore ipsam iure laudantium nobis odio perspiciatis qui repellendus sit unde, vel voluptatem! Animi enim eos, facilis harum magni, molestiae possimus provident qui quod tenetur ut, voluptas. Adipisci animi aperiam aspernatur autem consectetur consequatur culpa cupiditate dicta eius eligendi eos esse facilis harum illo ipsa, ipsum iure labore magni mollitia non odio odit perferendis qui quisquam recusandae repellendus sequi sit soluta suscipit temporibus ullam velit voluptas voluptatum. Deleniti distinctio incidunt tempore. Autem commodi eligendi facilis laborum placeat qui quo, quos veritatis. Adipisci, aperiam aspernatur at cupiditate dolore dolorem doloribus eos error exercitationem harum hic inventore iusto laborum, maxime, minima necessitatibus odio perferendis porro quaerat quos repudiandae rerum similique sint sunt temporibus totam vitae! Ad adipisci aliquam aliquid aperiam, assumenda atque commodi consequatur consequuntur, doloremque eaque eos eveniet ipsum itaque labore laudantium nesciunt odio officiis omnis possimus quaerat quia quidem repudiandae tempora ullam, ut voluptates voluptatibus? Ab adipisci atque deserunt eos est incidunt, iure neque porro praesentium quae quasi quia rem, sapiente, temporibus tenetur. A consequatur debitis eum illo illum libero minus molestiae officiis omnis placeat porro quos, sit. Consequuntur cumque deleniti ea eligendi eum facilis minima placeat praesentium quo quod similique, temporibus voluptatum. Alias, aliquam, asperiores doloremque eaque hic ipsa laborum magnam minima molestiae nobis officia quas ratione repellendus rerum sint vero voluptate. Aspernatur deleniti dignissimos esse inventore ipsa odit quisquam sit, tempora ut vitae, voluptates?
      <br>
    </portal>
  </li>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

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
      ...mapState('catalog', ['products', 'modal']),
      productsFolder() {
        return this.products.filter(el => el.idFolder == this.item.idFolder);
      },
      isFolder: function () {
        return this.item.children &&
            this.item.children.length || this.productsFolder.length
      }
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
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

      },
      showModal() {
        this.setModal(true);
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
