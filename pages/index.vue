<template>
  <div class="container">
    <div class="NoteCreate">
      <form @submit.prevent="save()">
        <input
          type="text"
          id="title"
          placeholder="Title"
          required
          v-model="title"
        />
        <textarea
          name=""
          id="text"
          cols="30"
          rows="10"
          placeholder="Here Text"
          required
          v-model="des"
        ></textarea>
        <input type="submit" value="Save" id="save" />
      </form>
    </div>
  </div>
</template>

<script>
var id = 0;
export default {
  head() {
    return {
      title: "Create Note",
      meta: [
        { hid: "description", name: "description", content: "Create Notes " }
      ]
    };
  },
  data() {
    return {
      title: "",
      des: ""
    };
  },
  methods: {
    save() {
      this.$store.commit("pushnote", {
        id: `${id}`,
        title: `${this.title}`,
        des: `${this.des}`
      });
      id += 1;
    }
  }
};
</script>

<style>
button {
  margin-top: 100px;
}
</style>
