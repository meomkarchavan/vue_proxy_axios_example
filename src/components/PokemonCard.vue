<template>
  <div>
    <div>
      <h2>This is from Env file</h2>
      <p>{{ appEnv }}</p>
    </div>
    <hr />
    <div>
      <h2>This is from Axios</h2>
      <label for="number">Enter Number: </label>
      <input type="number" name="number" v-model="number" />
      <button @click="getData">Submit</button>
      <div>
        <h4>{{ data.name }}</h4>
        type :
        <ol>
          <li v-for="type in data.types" :key="type.name">
            {{ type.type.name }}
          </li>
        </ol>
        weight:
        {{ data.weight }}
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonCard",
  data() {
    return {
      number: 1,
      data: {},
      appEnv: process.env,
    };
  },
  methods: {
    getData() {
      let self_vue = this;
      // Make a request for a user with a given ID
      axios
        .get("/api/pokemon/" + self_vue.number)
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
  },
  created() {
    let self_vue = this;
    // Make a request for a user with a given ID
    axios
      .get("/api/pokemon/" + self_vue.number)
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
