<template>
  <div class="preview-container" @click.stop="closePreview">
    <section class="close-preview-btn"></section>
    <section class="preview-img">
      <img :src=previewItem alt="">
    </section>
    <section class="preview-count">
      {{ nowIndex + 1 }} / {{ this.itemLists.length }}
    </section>
    <section class="preview-buttons">
      <div class="pre-button" @click.stop="preImg"></div>
      <div class="next-button" @click.stop="nextImg"></div>
      <div class="close-button" @click.stop="closePreview">关闭</div>
    </section>
  </div>
</template>

<script>
import { listsObj } from '@/data/data.js'
import { imageModifyRule } from '@/utils/img'
export default {
  props: {
    'img-index': Number
  },
  data () {
    return {
      qiniuDomain: 'http://static.guobaoyoo.com/img/naonao/',
      nowIndex: this.imgIndex,
      itemLists: listsObj
    }
  },
  computed: {
    previewItem () {
      return this.qiniuDomain + this.itemLists[this.nowIndex].src + '?' + imageModifyRule.previewItem
    }
  },
  methods: {
    closePreview () {
      this.$emit('close-preview')
    },
    preImg () {
      if (this.nowIndex > 0) {
        this.nowIndex = this.nowIndex - 1
      }
    },
    nextImg () {
      if (this.nowIndex < this.itemLists.length) {
        this.nowIndex = this.nowIndex + 1
      }
    }
  },
  created () {
    // console.log(this.nowIndex, this.itemLists.length)
  }
}
</script>

<style scoped lang="stylus">
@import './main'
</style>
