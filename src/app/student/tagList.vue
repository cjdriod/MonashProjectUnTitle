<template>
    <input type="text" v-model="editableTags">
</template>

<script>
export default {
    props: ['value'],
    methods: {
      remove (index) {
      var clonedValue = this.value.slice()
      clonedValue.splice(index, 1)
      this.$emit('input', clonedValue)
    }
    }
}
</script>
