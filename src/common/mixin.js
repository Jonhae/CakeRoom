// 混入
import {
  debounce
} from './utils'
import BackTop from 'components/content/backTop/BackTop';

// 图片监听
export const imgListenerMixin = {
  data() {
    return {
      ImgListener: null
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 500)
    //事件总线 监听图片加载完成
    this.ImgListener = () => {
      refresh()
    }
    this.$bus.$on('imageLoad', this.ImgListener)
    // console.log('mixin');
  },
}
// 回到顶部
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  },
}
