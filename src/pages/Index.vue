<template lang="pug">
  q-page
    .q-pa-md
      q-input(color="teal" outlined v-model="text_buscar" label="Buscar granja ... ")
          template(v-slot:append)
            q-icon(name="search")
    strong.text-grey.q-mx-md Granjas: 5
    w-card-granja.q-ma-md(v-for="i in 5" :key="i")
    br
    br
    br
    q-page-sticky(position="bottom-right" :offset="[10, 10]")
      q-btn(
        rounded
        label="Sincronizar"
        @click="$router.push({name: 'alimentacion.create', params: { id_granja: 2, id_estanque: 5 } })" 
        color="primary" icon="cloud" )
</template>

<script>
import WCardGranja from '../components/CardGranja'
export default {
  name: 'PageIndex',
  components: {WCardGranja},
  data: () => ({
    text_buscar: ''
  })
}
</script>
