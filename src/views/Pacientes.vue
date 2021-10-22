<template>
  <div>
    <h1 class="my-5">Administrador de Pacientes</h1>
    <div class="container mt-5 py-5">
      <div class="row">
        <div class="col-12 mb-5 d-flex justify-content-center">
          <a
            href="/nueva"
            class="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
          >
            Crear Citas</a
          >
        </div>
        <div class="col-md-8 mx-auto">
          <div class="list-group" v-for="(cita, index) in citas" :key="index">
            <a
              class="
                p-5
                list-group-item list-group-item-action
                flex-column
                align-items-start
              "
            >
              <div class="d-flex w-100 justify-content-between mb-4">
                <h3 class="mb-3">{{ cita.nombre }}</h3>
                <small class="fecha-alta">
                  {{ cita.fecha }} - {{ cita.hora }}
                </small>
              </div>

              <p class="mb-0">{{ cita.sintomas }}</p>
              <div class="contacto py-3">
                <p>Dueño: {{ cita.propietario }}</p>
                <p>Teléfono: {{ cita.telefono }}</p>
              </div>
              <div class="d-flex">
                <button
                  type="button"
                  class="btn-danger btn-sm mx-2"
                  @click="eliminar(cita._id)"
                >
                  Eliminar &times;
                </button>
              </div>
                <div class="">
                <button
                  type="button"
                  class="btn-success btn-sm mx-2"
                  @click="buscar()"
                >
                  Actualizar
                </button>
              </div>
            </a>


          </div>
        </div>
         
       
      </div>
    </div> 
   
  </div>
</template>


<script>
export default {
  data() {
    return {
      citas: [],
 
    }
     
  },
  created() {
    this.obtener();
  
  },

  methods: {
    obtener() {
      this.axios
        .get("/pacientes")
        .then((res) => {
          this.citas = res.data;
        
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    eliminar(id){

      this.$swal.fire({
            title: '¿Estas seguro?',
            text: "Una cita eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {

                // Alerta de eliminado
               this.$swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                ) 
     this.axios.delete(`pacientes/${id}`)
     .then((res)=>{
      
            console.log(res.data)  
           location.reload()                       
     })
     .catch( e => {
        console.log(e.response);
 })
            }
        })

    },
  buscar(){
//  const { value: text } = await this.$swal.fire({
//   input: 'textarea',
//    inputLabel: 'Message',
//   inputPlaceholder: 'Type your message here...',
//   inputAttributes: {
//     'aria-label': 'Type your message here'
//        },
//    showCancelButton: true
//  })

//  if (text) {
//    this.$swal.fire(text)
console.log('Buscando..')
//  }
    }
  }
  }

</script>

