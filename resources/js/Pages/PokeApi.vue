<script setup>
	import { computed, onMounted, onUnmounted, ref} from 'vue';
	import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import { Head } from '@inertiajs/inertia-vue3';


  const liked_datas    = ref([]);
  const disliked_datas = ref([]);

  onMounted(() => {
        axios.get('/api/status').then(res => { 
           liked_datas.value    = res.data[0].likes.length > 0 ? res.data[0].likes.split(',') : [];
           disliked_datas.value = res.data[0].dislikes.length > 0 ? res.data[0].dislikes.split(',') : [];
        });
    });
</script>

<template>
	<Head>
	   <title>My Pokemons</title>
      <meta name="description" content="description">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </Head>
	<BreezeAuthenticatedLayout >
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		 		<div class="grid gap-4 grid-cols-2 grid-rows-3">
					<div class="shadow-2xl p-6">
						<h3>My Favorate Pokemons</h3>
						<ul>
							<li v-for="(item,index) in liked_datas">
								<i class="fa fa-thumbs-up" style="color:green" aria-hidden="true"></i> {{item}} 
							</li>
						</ul>
					</div>
					<div class="shadow-2xl p-6">
						<h3>My Hated  Pokemons</h3>
						<ul>
							<li v-for="(item,index) in disliked_datas">
								<i class="fa fa-thumbs-down" style="color:red" aria-hidden="true"></i> {{item}} 
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</BreezeAuthenticatedLayout>
</template>