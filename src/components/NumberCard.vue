<template>
  <div>
    <label for="number">Enter Number: </label>
    <input type="number" name="number" v-model="number" />
    <button @click="getData">Submit</button>
    <div>
      <p>
        {{ data }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NumberCard",
  data() {
    return {
      data: {},
      number: 0,
    };
  },
  methods: {
    getData() {
      let self_vue = this;
      axios
        .get("/numapi/" + self_vue.number)
        .then(function (response) {
          // handle success
          self_vue.data = response.data;
          //   console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  created() {
    let self_vue = this;
    axios
      .get("/numapi/" + self_vue.number)
      .then(function (response) {
        // handle success
        self_vue.data = response.data;
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
