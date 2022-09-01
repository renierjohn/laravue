<script setup>
	import { computed, onMounted, onUnmounted, ref} from 'vue';
	import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
  import { Head } from '@inertiajs/inertia-vue3';

  const isToastActive  = ref(false);
  const toastMessage   = ref(false);
  const profile_data   = ref({
  		  id:'',
	  		name:'',
		  	email:'',
		  	birthday:''
		  });

  const input_fullname = ref('');
  const input_email    = ref('');
  const input_birthday = ref('');

  const triggerToast = computed(() => {
        if(isToastActive.value == true){
            setTimeout(function() {
                isToastActive.value = false;
            },1000);
        }
    });

  onMounted(() => {
        axios.get('/api/status/user').then(res => { 
           console.log(res.data)
           profile_data.value = res.data;
        });
    });

  function handleSubmit(){
  	if(input_fullname.value.length == 0){
  		toastMessage.value  = 'Please Fillup Name';
  		isToastActive.value = true;
  		return;
  	}

  	if(input_email.value.length == 0){
  		toastMessage.value  = 'Please Fillup Email';
  		isToastActive.value = true;
  		return;
  	}

  	if(input_birthday.value.length == 0){
  		toastMessage.value  = 'Please Fillup Birthday';
  		isToastActive.value = true;
  		return;
  	}

  	axios.post('/api/status/user/update',{
  		body: profile_data.value
  	}).then(res =>  {
  		profile_data.value = res.data
  		toastMessage.value  = 'Success';
	  	isToastActive.value = true;
  	});
  	
  }

  function handleFullname(e){
  	input_fullname.value    = e.target.value;
  	profile_data.value.name = e.target.value;
  }

  function handleEmail(e){
  	input_email.value        = e.target.value;
  	profile_data.value.email = e.target.value;
  }

  function handleBirthday(e){
    input_birthday.value        =	e.target.value;
  	profile_data.value.birthday = e.target.value;
  }

</script>

<template>
	<Head>
	    <title>{{$page.props.auth.user.name}} | Pokemon</title>
      <meta name="description" content="description">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  		<meta name="csrf-token" content="{{ csrf_token() }}">
  </Head>
	<BreezeAuthenticatedLayout >

		<div v-if="isToastActive"
			class="text-white text-2xl bg-orange-700 z-20 p-4 max-w-sm fixed right-2 top-2 mynotif active">
			{{ toastMessage }}
		</div>
		<div v-if="triggerToast"></div>

		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		 		<div class="grid gap-4 grid-cols-2 grid-rows-3">
									<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
										<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
											  <div>
											      <div class="form-group mb-6">
											        <input type="text" class="form-control
											          block
											          w-full
											          px-3
											          py-1.5
											          text-base
											          font-normal
											          text-gray-700
											          bg-white bg-clip-padding
											          border border-solid border-gray-300
											          rounded
											          transition
											          ease-in-out
											          m-0
											          bg-gray-300
											          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
											          disabled
											          v-model="profile_data.name"
											          aria-describedby="emailHelp123" placeholder="Full Name">
											      </div>
											    <div class="form-group mb-6">
											      <input type="email" class="form-control block
											        w-full
											        px-3
											        py-1.5
											        text-base
											        font-normal
											        text-gray-700
											        bg-white bg-clip-padding
											        border border-solid border-gray-300
											        rounded
											        transition
											        ease-in-out
											        m-0
											        bg-gray-300
											        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
											        disabled
											        v-model="profile_data.email"
											        placeholder="Email address">
											    </div>
											    <div class="form-group mb-6">
												    <div class="flex items-center justify-center">
														  <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
														    <label for="floatingInput" class="text-gray-700">Birthday</label>
														    <input type="date"
														    	v-model="profile_data.birthday"
														      disabled
														      class="bg-gray-300 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														      placeholder="Select a date" />
														  </div>
														</div>
											    </div>
											  </div>
								</div>
							</div>	

								<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
										<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
											  <div >
											    <!-- <div class="grid grid-cols-2 gap-4"> -->
											      <div class="form-group mb-6">
											        <input 
											          @input="handleFullname"
											          v-model="input_fullname"
											        	type="text" class="form-control
											          block
											          w-full
											          px-3
											          py-1.5
											          text-base
											          font-normal
											          text-gray-700
											          bg-white bg-clip-padding
											          border border-solid border-gray-300
											          rounded
											          transition
											          ease-in-out
											          m-0
											          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
											          aria-describedby="emailHelp123" placeholder="Full Name">
											      </div>
											    <div class="form-group mb-6">
											      <input 
											      	@input="handleEmail"
											      	v-model="input_email"
											      	type="email" class="form-control block
											        w-full
											        px-3
											        py-1.5
											        text-base
											        font-normal
											        text-gray-700
											        bg-white bg-clip-padding
											        border border-solid border-gray-300
											        rounded
											        transition
											        ease-in-out
											        m-0
											        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
											        placeholder="Email address">
											    </div>
											    <div class="form-group mb-6">
												    <div class="flex items-center justify-center">
														  <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
														    <label for="floatingInput" class="text-gray-700">Birthday</label>
														    <input 
														    	@input="handleBirthday"
														    	v-model="input_birthday"
														    	type="date"
														      class="d-date form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														      placeholder="Select a date" />
														    
														  </div>
														</div>
											    </div>
											    <button 
											    	@click="handleSubmit"
											    	class="
											      w-full
											      px-6
											      py-2.5
											      bg-blue-600
											      text-white
											      font-medium
											      text-xs
											      leading-tight
											      uppercase
											      rounded
											      shadow-md
											      hover:bg-blue-700 hover:shadow-lg
											      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
											      active:bg-blue-800 active:shadow-lg
											      transition
											      duration-150
											      ease-in-out">Update</button>
											  </div>
								</div>
							</div>
				</div>
			</div>
		</div>
	</BreezeAuthenticatedLayout>
</template>