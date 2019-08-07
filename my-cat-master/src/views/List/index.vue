<template>
  <div class="container">
    <section class="lists">
      <div class="lists-item" v-for="(item, index) in lists" :key="index">
        <div class="back-cat"></div>
        <div class="picture-description">
          <p class="date">{{ item.date !== '' ? index + 1 + '.' + item.date : index + 1 + '.' + '大概忘记了时间'  }}</p>
          <p class="text">{{ renderTxt(item.description) }}</p>
        </div>
        <div class="picture-photo">
          <img :src="qiniuDomain + item.src + listsItemRule" alt="" :data-date="item.date" :data-text="item.description" :data-src="qiniuDomain + item.src"  @click="showDetail(index)">
        </div>
      </div>
    </section>

    <section class="go-to-top" v-if="goTopShow" @click="goTop"></section>

    <section class="footer"></section>

    <img-preview v-if="imgPreview.show" :img-index="imgPreview.nowIndex" @close-preview="closePreview"></img-preview>

  </div>
</template>

<script>
import * as Mock from '@/data/data'
import * as ImgUtils from '@/utils/img'
import { scrollToTop } from '@/utils/dom'
import ImgPreview from '@/components/preview/index'
export default {
  data () {
    return {
      lists: Mock.listsObj.slice(0, 10),
      qiniuDomain: 'http://static.guobaoyoo.com/img/naonao/',
      goTopShow: false,
      page: 1,
      isLoading: false,
      imgPreview: {
        show: false,
        nowIndex: 0
      }
    }
  },
  components: {
    ImgPreview
  },
  computed: {
    listsItemRule () {
      return '?' + ImgUtils.imageModifyRule.listsItem
    }
  },
  methods: {
    renderTxt (txt) {
      let res = ''
      if (txt.length === 0) {
        res = '可爱的闹闹'
      } else if (txt.length > 75) {
        res = txt.substring(0, 72) + '...'
      } else {
        res = txt
      }
      return res
    },
    scrollBottom () {
      let st = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
      let ch = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight
      let sh = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight
      this.goTopShow = st > 800
      if ((st + ch) === sh) {
        return true
      } else {
        return false
      }
    },
    goTop () {
      scrollToTop()
    },
    showDetail (index) {
      this.imgPreview.show = true
      this.imgPreview.nowIndex = index
      document.body.style.overflow = 'hidden'
    },
    closePreview () {
      this.imgPreview.show = false
      document.body.style.overflow = 'auto'
    },
    loadMore () {
      this.isLoading = true
      this.page += 1
      console.log((this.page - 1) * 10, this.page * 10)
      setTimeout(() => {
        this.lists = this.lists.concat(Mock.listsObj.slice((this.page - 1) * 10, this.page * 10))
        this.isLoading = false
      }, 1000)
    }
  },
  created () {
    // console.log(Mock.listsObj)
  },
  mounted () {
    let that = this
    window.onscroll = function () {
      if (that.scrollBottom() === true) {
        if (that.isLoading) {
          console.log('not hurry')
          return false
        } else {
          console.log('bottom')
          that.loadMore()
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import './main'
</style>
