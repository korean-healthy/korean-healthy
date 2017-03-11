<template>
	<main>
		<lumi-navbar color="orange">
			<lumi-navbar-link href="/" slot="title" no-effect>
				<img :src="require('../images/korean-healthy.svg')" style="width: 48px; height: 48px; padding: 8px;">
			</lumi-navbar-link>
		</lumi-navbar>

		<lumi-section :background="require('../images/background.png')" attach="top left" full>
			<lumi-row>
				<lumi-column>
					<img :src="require('../images/korean-healthy.svg')" style="width: 18rem; height: 18rem;">
				</lumi-column>
				<lumi-column>
					<lumi-text weight="200" size="5rem" v-html="translations[lang]['channel']">
					</lumi-text>
				</lumi-column>
			</lumi-row>
		</lumi-section>

		<lumi-section color="dark-blue">
			<div>
				<lumi-text size="3rem" weight="200" v-html="translations[lang]['channel-desc-1']"></lumi-text>
			</div>
			<div>
				<lumi-text size="4rem" weight="200" v-html="translations[lang]['channel-desc-2']"></lumi-text>
			</div>
		</lumi-section>

		<lumi-section color="white">
			<lumi-row>
				<lumi-stat stat="100%" :desc="translations[lang]['human-death-rate']" color="black"></lumi-stat>
				<lumi-stat stat="217,057" :desc="translations[lang]['cancer-patients']" color="teal"></lumi-stat>
				<lumi-stat stat="0.3%" :desc="translations[lang]['cancer-incidence']" color="black"></lumi-stat>
			</lumi-row>
		</lumi-section>

		<lumi-container>
			<h1>
				<lumi-icon icon="information"></lumi-icon>
				<lumi-text color="black" weight="800" v-html="translations[lang]['recent']"></lumi-text>
			</h1>

			<lumi-gallery>
				<food-card :lang="lang" name="sports" :callback="openFoodModal"></food-card>
				<food-card :lang="lang" name="water" :callback="openFoodModal"></food-card>
				<template v-for="food in foods">
					<food-card :lang="lang" :name="food" :callback="openFoodModal"></food-card>
				</template>
			</lumi-gallery>
		</lumi-container>

		<lumi-section color="dark-blue" style="margin-top: 100px;">
			<lumi-row>
				<lumi-column>
					<lumi-text style="width: 100px" weight="200" v-html="translations[lang]['warning']"></lumi-text>
				</lumi-column>
				<lumi-column>
					<lumi-text weight="200" v-html="translations[lang]['warning-desc']"></lumi-text>
				</lumi-column>
			</lumi-row>
		</lumi-section>

		<lumi-modal :opened="modal" :backdrop-close="closeModal" :closing="closing" :title="modalTitle">
			<lumi-row>
				<lumi-text>{{ modalText }}</lumi-text>
			</lumi-row>

			<lumi-gradient-button :click="closeModal" slot="buttons">
				{{ translations[lang]['ok'] }}
			</lumi-gradient-button>
		</lumi-modal>
	</main>
</template>

<script>
	import FoodCard from "../components/FoodCard.vue";

	import foods from "../data/foods.json";
	import translations from "../data/translations.js";

	export default {
		data(){
			return {
				modal: false,
				closing: false,
				modalText: '',
				modalTitle: '',
				foods,
				translations
			};
		},

		props: {
			lang: {
				type: String
			}
		},

		methods: {
			openModal(){
				this.modal = true;
				this.closing = false;
			},

			openFoodModal(args){
				return () => {
					this.modalTitle = translations[this.lang][args];
					this.modalText = translations[this.lang][`${args}-desc`];
					this.openModal();
				};
			},

			closeModal(){
				this.closing = true;
				setTimeout(() => {
					this.modal = false;
				}, 300);
			}
		},

		components: {
			FoodCard
		}
	};
</script>
