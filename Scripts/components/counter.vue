<template>
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a Vue.js component</p>

    <p>
      Current count : <strong>{{ currentCount }}</strong>
    </p>
    <p>
      Auto11 count: <strong>{{ autoCount }}</strong>
    </p>

    <button @click="incrementCounter()">Increment</button>
    <button @click="resetCounter()">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data() {
    return {
      autoCount: 0,
      currentCount: 0
    };
  },

  methods: {
    incrementCounter: function() {
      this.currentCount++;
    },
    resetCounter: function() {
      this.currentCount = 0;
      this.autoCount = 0;
    }
  },

  created() {
    setInterval(() => {
      this.autoCount += 1;
    }, 1000);
  }
};
</script>

<style>

</style>
