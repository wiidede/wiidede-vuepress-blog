<template>
  <div
    class="post-list"
    ref="postList"
  >
    <transition-group
      tag="div"
      name="post"
    >
      <div
        class="post card-box"
        v-for="item in sortPosts"
        :key="item.key"
      >
        <div v-if="item.frontmatter.sticky" class="sticky iconfont icon-zhiding"></div>
        <div class="title-wrapper">
          <h2>
            <router-link :to="item.path">{{item.title}}</router-link>
          </h2>
          <div class="article-info">
            <a
              title="作者"
              target="_blank"
              v-if="item.author && item.author.href"
              :href="item.author.href"
            ><i class="iconfont icon-touxiang"/>{{ item.author.name ? item.author.name : item.author }}</a>
            <span
              title="作者"
              v-else-if="item.author"
            ><i class="iconfont icon-touxiang"/>{{ item.author.name ? item.author.name : item.author }}</span>

            <span
              title="创建时间"
              class=""
              v-if="item.frontmatter.date"
            ><i class="iconfont icon-riqi"/>{{ item.frontmatter.date.split(' ')[0]}}</span>
            <span
              title="分类"
              class=""
              v-if="$themeConfig.category !== false && item.frontmatter.categories"
            >
              <i class="iconfont icon-wenjian"/>
              <router-link
                :to="`/categories/?category=${encodeURIComponent(c)}`"
                v-for="(c, index) in item.frontmatter.categories"
                :key="index"
              >{{c}}</router-link>
            </span>
            <span
              title="标签"
              class="tags"
              v-if="$themeConfig.tag !== false && item.frontmatter.tags && item.frontmatter.tags[0]"
            >
              <i class="iconfont icon-biaoqian"/>
              <router-link
                :to="`/tags/?tag=${encodeURIComponent(t)}`"
                v-for="(t, index) in item.frontmatter.tags"
                :key="index"
              >{{t}}</router-link>
            </span>
          </div>
        </div>
        <div
          class="excerpt-wrapper"
          v-if="item.excerpt"
        >
          <div
            class="excerpt"
            v-html="item.excerpt"
          ></div>
          <router-link
            :to="item.path"
            class="readmore"
          ><i class="iconfont icon-jiantou-you"></i>阅读全文</router-link>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      sortPosts: [],
      postListOffsetTop: 0
    }
  },
  created () {
    this.setPosts()
  },
  mounted () {
    // this.postListOffsetTop = this.getElementToPageTop(this.$refs.postList) - 240
  },
  watch: {
    currentPage () {
      if (this.$route.query.p !== this.currentPage) { // 此判断防止添加相同的路由信息（如浏览器回退时触发的）
        this.$router.push({
          query: {
            ...this.$route.query,
            p: this.currentPage
          }
        })
      }
      // setTimeout(() => {
      //   window.scrollTo({ top: this.postListOffsetTop }) // behavior: 'smooth'
      // },0)
      this.setPosts()
    },
    category () {
      this.setPosts()
    },
    tag () {
      this.setPosts()
    }
  },
  methods: {
    setPosts () {
      const currentPage = this.currentPage
      const perPage = this.perPage

      let posts = []
      if (this.category) {
        posts = this.$groupPosts.categories[this.category]
      } else if (this.tag) {
        posts = this.$groupPosts.tags[this.tag]
      } else {
        posts = this.$sortPosts
      }

      this.sortPosts = posts.slice((currentPage - 1) * perPage, currentPage * perPage)
    },
    // getElementToPageTop(el) {
    //   if(el && el.parentElement) {
    //     return this.getElementToPageTop(el.parentElement) + el.offsetTop
    //   }
    //   return el.offsetTop
    // }
  }
}
</script>

<style lang='stylus'>
.post-list
  margin-bottom 4rem
  .post
    position relative
    padding 1rem 1.5rem
    margin-bottom 0.9rem
    &.post-leave-active
      display none
    &.post-enter
      opacity 0
      transform translateX(-20px)
    .sticky
      position absolute
      top -1.5px
      right 0
      font-size 40px
      color #80808080
      opacity 0.85
    .title-wrapper
      a
        color var(--textColor)
        &:hover
          color $accentColor
      h2
        margin 0.5rem 0
        font-size 1.4rem
        border none
        a
          @media (max-width $MQMobile)
            font-weight 400
      .article-info
        > a, > span
          opacity 0.7
          font-size 0.8rem
          margin-right 1rem
          cursor pointer
          i
            margin-right 0.3rem
          a
            margin 0
            &:not(:last-child)
              &::after
                content '/'
        .tags a:not(:last-child)::after
          content '、'
    .excerpt-wrapper
      border-top 1px solid var(--borderColor)
      margin 0.5rem 0
      overflow hidden
      .excerpt
        margin-bottom 0.3rem
        font-size 0.92rem
        h1, h2, h3
          display none
        img
          max-height 280px
          max-width 100% !important
          margin 0 auto
      .readmore
        float right
        margin-right 1rem
        line-height 1rem
        i
          float right
          font-size 0.8rem
          margin 0.1rem 0 0 0.2rem
</style>
