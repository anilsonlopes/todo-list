<template>
  <div>
    <section
      v-for="(item, index) in items"
      :key="item.timestamp"
      class="transition flex justify-between items-center mb-3 w-full max-w-sm bg-grey-lighter p-5"
      :class="{ 'opacity-50': item.complete }"
    >
      <div class="w-full">
        {{ item.body }}
      </div>
      <button
        type="button"
        class="transition p-2 focus:outline-none active:text-black"
        :class="{ 'text-green': item.complete, 'text-grey': !item.complete }"
        @click="toggleCheckItem(index)"
      >
        <i class="fa fa-check" />
      </button>
      <button type="button" class="transition p-2 text-red focus:outline-none active:text-black" @click="removeItem(index)">
        <i class="fa fa-times" />
      </button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['items'])
  },
  methods: {
    ...mapMutations(['toggleCheckItem', 'removeItem'])
  }
}
</script>
