<template>
  <div>
    <PokemonCard />
    <NumberCard />
  </div>
</template>

<script>
import PokemonCard from "./components/PokemonCard.vue";
import NumberCard from "./components/NumberCard.vue";

export default {
  name: "App",
  components: {
    PokemonCard,
    NumberCard,
  },
};
</script>

<style>
</style>
