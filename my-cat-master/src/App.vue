<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <div class="bgm-switch" @click="audioControl" :class="{'bgm-play-ani': playing}"></div>
    <audio src="http://static.guobaoyoo.com/mp3/naonao/bgm.mp3" loop id="bgmMp3"></audio>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: '',
      audioPlaying: false
    }
  },
  computed: {
    playing () {
      return this.$store.state.audioPlaying
    }
  },
  watch: {// 使用watch 监听$router的变化
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  },
  methods: {
    bgmPlay () {
      let audio = document.querySelector('#bgmMp3')
      if (!this.playing) {
        audio.load()
        audio.play()
        // this.$store.commit('SET_AUDIO_PLAYING', true)
      }
    },
    bgmPause () {
      let audio = document.querySelector('#bgmMp3')
      if (!this.playing) {
        audio.pause()
        this.$store.commit('SET_AUDIO_PLAYING', false)
      }
    },
    audioControl () {
      let audio = document.querySelector('#bgmMp3')
      if (!this.playing) {
        audio.play()
        this.$store.commit('SET_AUDIO_PLAYING', true)
      } else {
        audio.pause()
        this.$store.commit('SET_AUDIO_PLAYING', false)
      }
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang="stylus">
@import '~common/stylus/reset'
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active
    will-change transform
    transition all 500ms
    position absolute

  .slide-right-enter
    opacity 0
    transform translate3d(-100%, 0, 0)

  .slide-right-leave-active
    opacity 0
    transform translate3d(100%, 0, 0)

  .slide-left-enter
    opacity 0
    transform translate3d(100%, 0, 0)

  .slide-left-leave-active
    opacity 0
    transform translate3d(-100%, 0, 0)

  .bgm-switch
    width 80px
    height 80px
    position fixed
    top 30px
    right 30px
    background url(http://static.guobaoyoo.com/img/naonao/bgm-switch.png) repeat center center
    background-size contain
    z-index 999

  .bgm-play-ani
    animation bgmPlay 3s linear infinite

  @keyframes bgmPlay
    from
      transform rotate(0deg)
    to
      transform rotate(360deg)
</style>
