<template>
	<lumi-image-box :src="src" text>
		<lumi-text style="margin-bottom: 30px;" weight="200" v-html="text"></lumi-text>
		<lumi-flat-button background="blue" color="white" :click="callback(name)">
			{{this.translations[this.lang]['read-more']}}
		</lumi-flat-button>
	</lumi-image-box>
</template>

<script>
	import translations from "../data/translations.js";

	export default {
		data(){
			return {translations};
		},

		props: {
			name: {
				type: String,
				required: true
			},

			lang: {
				type: String,
				required: true
			},

			callback: {
				type: Function,
				required: true
			}
		},

		computed: {
			src() {
				return `/assets/${this.name}.svg`;
			},

			text() {
				return translations[this.lang][this.name];
			}
		}
	}
</script>
