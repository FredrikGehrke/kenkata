<template>
  <div class="d-flex flex-column">
      <h2 class="dark-header">{{ headline }}</h2>
      <div class="dotted-box">
          <slot></slot>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'DarkHeaderBox',
    props: ['headline'],
}
</script>

<style scoped>

h2.dark-header{
    background-color: #0E153D;
    color: var(--ownBlue);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
}

.dotted-box{
    padding: 1.875rem;
    padding-top: 1.5rem;
    border: dashed 2px #0E153D;
    border-top: none;
}

.highlight{
    color: var(--ownBlue);
}

</style>