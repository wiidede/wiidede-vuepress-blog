<template>
  <div
      class="body-bg"
      :style="bgStyle"
  >
    <div
        v-if="bgTransitionStyle"
        class="body-bg-transition"
        :style="bgTransitionStyle">
    </div>
    <div
        class="body-bg-transition-inner"
        :style="bgTransitionInnerStyle"></div>
  </div>
</template>

<script>
import {type} from '../util'

export default {
	inject: ['themeMode'],

	data() {
		return {
			timer: null,
			bgImg: '',
			bgColor: '',
			bgColorTransition: '',
			bgColorTransitionInner: '',
			bgColorTransitionActive: true,
			bgColorConfig: {
				light: null,
				dark: null,
				read: null
			},
			opacity: 0.5,
			intervalTime: 2,
			transitionTime: 2,
		}
	},

	computed: {
		bgStyle() {
			if (this.bgImg) {
				return {
					background: `url(${this.bgImg}) center center / cover no-repeat`,
					opacity: this.opacity,
					transition: ['background', `${this.transitionTime}s`]
				}
			}

			if (this.bgColor) {
				return {
					background: this.bgColor,
					opacity: this.opacity,
					transition: ['background', `${this.transitionTime}s`]
				}
			}

			return ''
		},
		bgTransitionStyle() {
			if (this.bgColorTransition) {
				return {
					background: this.bgColorTransition,
					opacity: this.bgColorTransitionActive ? 1 : 0,
					transition: `opacity ${this.transitionTime}s linear`
				}
			}
			return ''
		},
		bgTransitionInnerStyle() {
			if (this.bgColorTransitionInner) {
				return {
					background: this.bgColorTransitionInner,
					opacity: this.bgColorTransitionActive ? 0 : 1,
					transition: `opacity ${this.transitionTime}s linear`
				}
			}
			return ''
		}
	},

	watch: {
		themeMode: 'handleThemeChange'
	},

	mounted() {
		let {bodyBgImg, bodyBgImgOpacity, bodyBgColor, intervalTime, transitionTime} = this.$themeConfig

		if (type(bodyBgColor) === 'object') {
			this.bgColorConfig = bodyBgColor
		}

		if (intervalTime !== undefined) {
			// this.intervalTime = intervalTime
		}

		if (transitionTime !== undefined) {
			// this.transitionTime = transitionTime
		}

		if (type(bodyBgImg) === 'string') {
			this.bgImg = bodyBgImg
		} else if (type(bodyBgImg) === 'array') {
			this.startRotation(bodyBgImg, color => {
				this.bgImg = color
			})
		}

		if (bodyBgImgOpacity !== undefined) {
			this.opacity = bodyBgImgOpacity
		}

		this.handleThemeChange(this.themeMode)
	},

	unmounted() {
		clearInterval(this.timer)
	},

	methods: {
		startRotation(bgList, setBgFunc) {
			let count = 0
			setBgFunc(bgList[count], bgList[(count + 1) % bgList.length])
			clearInterval(this.timer)
			this.timer = setInterval(() => {
				if (++count >= bgList.length) {
					count = 0
				}
				setBgFunc(bgList[count], bgList[(count + 1) % bgList.length], true)
			}, this.intervalTime * 1000);
		},
		handleThemeChange(mode) {
			if (this.bgImg) return
			const bgColor = this.bgColorConfig[mode];
			if (type(bgColor) === 'string') {
				this.bgColor = bgColor;
			} else if (type(bgColor) === 'array') {
				this.startRotation(bgColor, (color, next, isInterval) => {
					isInterval && (this.bgColorTransitionActive = !this.bgColorTransitionActive)
					if (this.bgColorTransitionActive) {
						this.bgColorTransition = color
					} else {
						this.bgColorTransitionInner = color
					}
					console.log('color1', this.bgColorTransition)
					console.log('color2', this.bgColorTransitionInner)
				})
			}
		}
	}
}
</script>

<style lang='stylus'>
.body-bg
  position fixed
  left 0
  top 0
  z-index -999999
  height 100vh
  width 100vw
  transition background 0.5s

.body-bg-transition, .body-bg-transition-inner
  position fixed
  left 0
  top 0
  z-index -999999
  height 100vh
  width 100vw
</style>
