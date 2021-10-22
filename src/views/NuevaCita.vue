<template>
  <div>
    <h1 className="my-5">Crear nueva cita</h1>

    <div class="container mt-5 py-5">
      <div class="row">
        <div class="col-12 mb-5 d-flex justify-content-center">
          <a
            href="/"
            class="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
            >Volver</a
          >
        </div>

        <div class="col-md-8 mx-auto">
          <form
            @submit.prevent="enviarInformacion()"
            class="bg-white p-5 bordered"
          >
            <div class="form-group">
              <label htmlFor="nombre">Nombre Mascota</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="nombre"
                name="nombre"
                placeholder="Nombre Mascota"
                v-model="cita.nombre"
              />
            </div>

            <div class="form-group">
              <label htmlFor="propietario">Nombre Propietario</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="propietario"
                name="propietario"
                placeholder="Nombre Propietario"
                v-model="cita.propietario"
              />
            </div>

            <div class="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                class="form-control form-control-lg"
                id="telefono"
                name="telefono"
                placeholder="Teléfono"
                v-model="cita.telefono"
              />
            </div>

            <div class="form-group">
              <label htmlFor="fecha">Fecha Alta</label>
              <input
                type="date"
                class="form-control form-control-lg"
                id="fecha"
                name="fecha"
                v-model="cita.fecha"
              />
            </div>

            <div class="form-group">
              <label htmlFor="hora">Hora Alta</label>
              <input
                type="time"
                class="form-control form-control-lg"
                id="hora"
                name="hora"
                v-model="cita.hora"
              />
            </div>

            <div class="form-group">
              <label htmlFor="sintomas">Síntomas</label>
              <textarea
                class="form-control"
                name="sintomas"
                rows="6"
                v-model="cita.sintomas"
              ></textarea>
            </div>

            <input
              type="submit"
              class="
                btn btn-primary
                mt-3
                w-100
                p-3
                text-uppercase
                font-weight-bold
              "
              value="Crear Cita"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cita: {
        nombre: "",
        propietario: "",
        fecha: "",
        telefono: "",
        hora: "",
        sintomas: "",
      },
    };
  },

  methods: {
    irHome() {
      this.$router.push("/");
    },
    enviarInformacion() {
      this.axios
        .post("/pacientes", this.cita)
        .then((res) => {
          this.$swal.fire("Mensaje!",
          `${res.data.mensaje}`, 
          "success"
          );
          console.log(res.data);
          this.irHome();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>