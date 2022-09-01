<script>
  // import Button   from '@/Components/Button.vue';
  
  export default {
    props: ['data'],
    created(){
      console.log('created')
      function handle_like(){
        console.log('liked')
      }

      function handle_dislike(){
        console.log('disliked');
      }
    }
  }


</script>

<template>
  <tr class="p-6 shadow-sm">
    <td class="m-2"><h3>{{data.name}}</h3></td>
    <td>
      <button @click="handle_like">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>
    </td>
    <td>
      <button @click="handle_dislike">
        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
      </button>
    </td>
  </tr>
</template>
