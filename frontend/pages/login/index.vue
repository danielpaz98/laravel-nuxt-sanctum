<template>
  <form autocomplete="off" @submit.prevent="login(form)">
    <input type="text" name="email" id="email" placeholder="email:" v-model="form.email" />
    <input type="password" name="password" id="password" placeholder="password:" v-model="form.password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      email: "prueba@prueba.com",
      password: "12345678"
    },
  }),
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
