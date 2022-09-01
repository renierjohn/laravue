<script setup>

    import { computed, onMounted, onUnmounted, ref } from 'vue';

    import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
    import Button   from '@/Components/Button.vue';
    import { Head , usePage } from '@inertiajs/inertia-vue3';
    import List     from '@/Components/List.vue';

    const datas   = ref([]);
    const offset  = ref(0);
    const liked_datas    = ref([]);
    const disliked_datas = ref([]);
    const isToastActive  = ref(false);

    const limit          = 20;
    const MAX_ITEMS      = 3;

    const triggerToast = computed(() => {
        if(isToastActive.value == true){
            setTimeout(function() {
                isToastActive.value = false;
            },1000);
        }
    });

    onMounted(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {datas.value = res.data;} );// .then( data => {return data} ).catch(err =>{return err}); //.then((response) => {return response});
        
        axios.get('/api/status').then(res => { 
           liked_datas.value    = res.data[0].likes.length    > 0 ? res.data[0].likes.split(',') : [];
           disliked_datas.value = res.data[0].dislikes.length > 0 ? res.data[0].dislikes.split(',') : [];
        });
    });
   
    function handle_pagination_next(){
         const offset_val = offset.value + 20;
         offset.value = offset_val;
         const response =  axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset_val}&limit=${limit}`);// .then( data => {return data} ).catch(err =>{return err}); //.then((response) => {return response});
         response.then(res => {datas.value = res.data;} )
    }

    function handle_pagination_prev(){
         const offset_val = offset.value > 20 ? offset.value  - 20 : 0;
         offset.value = offset_val;
         const response =  axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset_val}&limit=${limit}`);// .then( data => {return data} ).catch(err =>{return err}); //.then((response) => {return response});
         response.then(res => {datas.value = res.data;} )
    }

    function handle_like(name){

        if(!liked_datas.value.includes(name) ){
            if(liked_datas.value.length < MAX_ITEMS){
                liked_datas.value.push(name);
                 if(liked_datas.value.includes(name)){
                    disliked_datas.value = disliked_datas.value.filter((item)=>{
                                          return  item != name;
                                        });
                }
            setStatus();
            }else{
                isToastActive.value = true;
            }
        }
        else{
               liked_datas.value = liked_datas.value.filter((item)=>{
                  return  item != name;
                })
            setStatus();
        }

            
    }

    function handle_dislike(name){
        if(!disliked_datas.value.includes(name) ){
                if(disliked_datas.value.length < MAX_ITEMS){
                    disliked_datas.value.push(name);

                    if(liked_datas.value.includes(name)){
                         liked_datas.value = liked_datas.value.filter((item)=>{
                                  return  item != name;
                                })
                    }
                setStatus();    
                }else{
                    isToastActive.value = true;
                }
        }else{
            disliked_datas.value = disliked_datas.value.filter((item)=>{
                                  return  item != name;
                                });
             setStatus();
        }

       
    }

    function handleSearch(e){
        const name = e.target.value
        if(name.length > 0){
            const data = JSON.stringify({
                "query": "query getItems{pokemon_v2_item{name}}",
                "variables": null,
                "operationName":"getItems"
            })
            fetch('https://beta.pokeapi.co/graphql/v1beta',{
                method:'POST',
                body:data
            }).then(res => res.json())
            .then(res => {
                datas.value.results = res.data.pokemon_v2_item.filter((item) => {
                    if(item.name.startsWith(name)){
                        return  item;
                    }
                })
                datas.value.count = datas.value.results.length; 
            });
        }else{
              const response =  axios.get('https://pokeapi.co/api/v2/pokemon/');// .then( data => {return data} ).catch(err =>{return err}); //.then((response) => {return response});
             response.then(res => {console.log(res); datas.value = res.data;} )
        }
    }

    function setStatus(){
      const query_like   =  liked_datas.value    ? liked_datas.value.join(',') : '';
      const query_d_like =  disliked_datas.value ? disliked_datas.value.join(',') : '';
      axios.get(`/api/status/run?likes=${query_like}&dislikes=${query_d_like}`);
    }

    

</script>

<template>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="description">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Head>

      <div v-if="isToastActive"
        class="text-white text-2xl bg-orange-700 z-20 p-4 max-w-sm fixed right-2 top-2 mynotif active">
         Sorry , You Reach Maximum 3 Items
      </div>
      <div v-if="triggerToast"></div>

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">               
                Dashboard
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                      Found {{datas.count}} Pokemons 
                    </div>
                    <div class="p-6 bg-white border-b border-gray-200">
                      <input @input="handleSearch" type="text" name="search" placeholder="Search">
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <List>
                            <tr v-for="(item,index) in datas.results" class="p-6 m-6 shadow-sm border-b-2">
                                <td class="m-2"><h3>{{item.name}}</h3></td>
                                <td>
                                  <button @click="handle_like(item.name)">
                                    <i v-if="liked_datas.includes(item.name)"  class="fa fa-thumbs-up" style="color:green" aria-hidden="true"></i>
                                    <i v-else="liked_datas == item.name"  class="fa fa-thumbs-up" aria-hidden="true"></i>
                                  </button>
                                </td>
                                <td>
                                  <button @click="handle_dislike(item.name)">
                                    <i v-if="disliked_datas.includes(item.name)"  class="fa fa-thumbs-down" style="color:red" aria-hidden="true"></i>
                                    <i v-else  class="fa fa-thumbs-down" aria-hidden="true"></i>
                                  </button>
                                </td>
                              
                              </tr>

                        </List>
                </div>
                <div class="grid grid-cols-2 gap-x-6">
                    <Button v-if="offset > 0" @click="handle_pagination_prev">PREV</Button>
                    <Button @click="handle_pagination_next">NEXT</Button>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
