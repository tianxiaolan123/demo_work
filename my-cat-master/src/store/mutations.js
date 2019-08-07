import * as types from './mutation-types'

const mutations = {
  [types.SET_DEMO] (state, demo) {
    state.demo = demo
  },
  [types.SET_AUDIO_PLAYING] (state, audioPlaying) {
    state.audioPlaying = audioPlaying
  }
}
export default mutations
