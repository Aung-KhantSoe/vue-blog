<template>
  <div class="spin"></div>
  <span>Loading...</span>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    width: 50px;
    height: 50px;
    margin: 30px auto;
    border: 5px solid crimson;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation:spin 1s infinite;
}
@keyframes spin {
    to{transform: rotate(360deg);}
}
</style>