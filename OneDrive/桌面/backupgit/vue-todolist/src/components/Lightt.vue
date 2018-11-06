<template>
    <div class="light">
      <p>
      </p>
      <h2>{{msg}}</h2>
      <h3>
        兄弟们哭惹
      </h3>
      <h4>vue真的好难
      </h4>
      <h5>我要回家</h5>
    </div>
</template>

<script>
export default {
  name: 'Lightt',
  data () {
    return {
      msg: 'ESlint?WTF'
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 1em;
}
  .light{
    background-color: transparent;
    /*border: 1px solid black;*/
    padding:20px;
    text-align: center;
  }
</style>
