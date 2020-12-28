<template>
  <svg
    class="error-404"
    enable-background="new 0 0 512 512"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="m230.667 270h50.666v122h-50.666z" />
      <path d="m249.787 60 60-60h-309.787v60z" />
      <path d="m512 120v-120h-159.787l-90 90h-262.213v30z" />
      <path
        d="m0 150v362h512v-362zm341.333 90h30v106h50.667v-106h30v182h-30v-46h-80.667zm-140.666 0h110.666v182h-110.666zm-140.667 0h30v106h50.667v-106h30v182h-30v-46h-80.667z"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: 'E404',
  data() {
    return {}
  },
  created() {
    this.$myError('这是一个404页面')
  },
}
</script>

<style>
.error-404 {
  animation: 1s appear;
  height: 50%;
  width: 50%;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
