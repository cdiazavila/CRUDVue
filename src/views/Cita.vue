<template>
<div>
  <button @click="mostrar=true">mostrar</button>
   <v-dialog  v-model="mostrar">
     <h1>hola</h1>
   </v-dialog>

   </div>
</template>


<script>
export default {
  data(){
    return{
      mostrar:false,
    }
  },
  created(){
    
  }
}
</script>