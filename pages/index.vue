<template>
  <div id="app" class="flex items-center flex-col min-h-screen bg-grey-light">
    <div class="flex flex-col px-4 w-full max-w-sm mt-10">
      <todo-form />
      <todo-list />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
    TodoForm: () => import('~/components/TodoForm'),
    TodoList: () => import('~/components/TodoList')
  }
}
</script>
