<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ idx }}</strong>
  </h3>
</template>

<script>
import { computed, toRefs } from 'vue'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus.vue'
export default {
  components: { AppStatus },
  props: ['id'],
  setup (props) {
    const store = useStore()
    const idx = toRefs(props, 'id')
    const task = computed(() => store.getters.taskById(idx.id.value))
    const setStatus = (status) => {
      const updated = { ...task.value, status }
      store.dispatch('changeTask', updated)
    }

    return {
      task,
      idx,
      setStatus
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
