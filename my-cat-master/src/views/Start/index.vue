<template>
  <div class="container">
    <section class="chimes"></section>
    <section class="flower"></section>
    <section class="main">
      <section class="avatar"></section>
      <transition name="custom-classes-transition" leave-active-class="animated bounceOutRight">
        <section v-if="verseShow" class="verse"></section>
      </transition>
      <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft">
        <section v-if="txtTipShow" class="start-btn" @click="goToList"></section>
      </transition>
    </section>
    <section class="house"></section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      verseShow: true,
      txtTipShow: false
    }
  },
  computed: {
  },
  methods: {
    goToList () {
      this.$router.push({ name: 'list' })
    }
  },
  created () {

  },
  mounted () {
    setTimeout(() => {
      this.verseShow = false
    }, 2000)
    setTimeout(() => {
      this.txtTipShow = true
    }, 3000)
  }
}
</script>

<style scoped lang="stylus">
@import './main'
</style>
