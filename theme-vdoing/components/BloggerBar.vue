<template>
  <aside class="blogger-wrapper card-box">
    <div class="top-avatar-line">
      <div class="avatar">
        <img :src="blogger.avatar" alt="头像" title="我好看吗"/>
      </div>
      <div class="icons" v-if="social && social.icons && social.icons.length">
        <a
            v-for="(item, index) in social.icons"
            :key="index"
            :href="item.link"
            :title="item.title"
            :class="['iconfont', item.iconClass]"
            :style="{ width: 100 / social.icons.length + '%' }"
            target="_blank"
        />
      </div>
    </div>
    <div class="blogger">
      <span class="name">{{ blogger.name }}</span>
      <span class="slogan">{{ blogger.slogan }}</span>
    </div>
  </aside>
</template>

<script>
export default {
	computed: {
		blogger() {
			return this.$themeConfig.blogger
		},
		social() {
			return this.$themeConfig.social
		}
	}
}
</script>

<style lang='stylus'>
.blogger-wrapper
  height auto
  display inline-table
  padding-top 0 !important
  overflow hidden
  .top-avatar-line
    display flex
    align-items center
    padding 12px
  .avatar
    display inline-block
    width 40%
    overflow hidden
    img
      width 100%
      height 100%

  .icons
    padding 0 12px
    flex 1
    display flex
    justify-content space-around
    // border 1px solid var(--borderColor)
    border-top none
    height 35px
    line-height 35px

    a
      font-size 20px
      //width 33%
      color var(--textColor)
      display block
      float left
      text-align center
      opacity 0.8

      &:hover
        color $accentColor

  .blogger
    padding 0.3rem 0.95rem 0 0.95rem

    .name
      font-size 1.3rem
      display block
      margin-bottom 6px

    .slogan
      color var(--textColor)
</style>
