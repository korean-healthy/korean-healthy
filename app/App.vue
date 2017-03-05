<template>
	<lumi-app>
		<lumi-section
			:class="className"
			:background="require('./images/background.png')"
			attach="top left"
			v-if="!closed"
			full>

			<lumi-row pillar>
				<lumi-column>
					<lumi-text weight="200" size="60px">
						<b>Select</b> Language
					</lumi-text>
				</lumi-column>
				<lumi-row>
					<lumi-column>
						<lumi-button color="white" :click="selectLang('en')">
							English
						</lumi-button>
					</lumi-column>
					<lumi-column>
						<lumi-button color="white" :click="selectLang('ko')">
							한국어
						</lumi-button>
					</lumi-column>
				</lumi-row>
			</lumi-row>
		</lumi-section>
		<healthy-main v-if="lang" :lang="lang"></healthy-main>
	</lumi-app>
</template>

<style lang="less" scoped>

	.language-chooser {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		
		&.closing {
			opacity: 0;
			transition: opacity .35s ease;
		}
	}
</style>

<script>
	import Main from "./layouts/Main.vue";

	export default {
		data() {
			return {
				closing: false,
				closed: false,
				lang: null
			};
		},

		components: {
			HealthyMain: Main
		},

		methods: {
			selectLang(lang) {
				return () => {
					this.closing = true;
					this.lang = lang;
					setTimeout(() => {
						this.closed = true;
					}, 350);
				};
			}
		},

		computed: {
			className() {
				if(this.closing) return 'language-chooser closing';
				return 'language-chooser';
			}
		}
	}
</script>
