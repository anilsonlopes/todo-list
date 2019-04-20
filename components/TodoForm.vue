<template>
  <form class="flex items-center mb-3 w-full max-w-sm bg-grey-lighter p-5" @submit.prevent="submitForm">
    <input v-model="item" type="text" placeholder="Inserir texto" class="text-sm focus:shadow transition focus:bg-white focus:outline-none bg-transparent px-4 border border py-2 w-full">
    <button type="submit" class="transition focus:shadow focus:bg-white focus:outline-none border ml-2 py-2 px-4">
      <i class="fa fa-plus" />
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    item: ''
  }),
  methods: {
    submitForm() {
      this.$store.dispatch('addItem', this.item).then(() => {
        this.item = ''
      }).catch((err) => {
        window.alert(err.message)
      })
    }
  }
}
</script>
