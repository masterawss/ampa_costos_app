<template lang="pug">
    q-card
        q-card-section
            .row
                .col-5
                    q-img(src="https://portal.andina.pe/EDPfotografia2/Thumbnail/2011/04/13/000153207W.jpg")
                .col-7.q-px-md
                    
                    strong ID: 2
                    br
                    strong Cod. estanque
                    br
                    span Área: 202 m2
                    q-btn(label="Ver estanque" 
                        color="secondary"
                        rounded
                        outline
                        size="sm"
                        @click="$router.push({name: 'estanque.show', params: {id_granja: 3, id_estanque: 5}})")
            //- .row
                .col-6
                    q-btn.q-mt-sm(label="Registrar semilla" color="primary" size="sm" rounded
                    @click="$router.push({name: 'granja.show', params: {id: 3}})")
                .col-6
                    q-btn.q-mt-sm(label="Registrar alimento" color="secondary" size="sm" rounded
                    @click="$router.push({name: 'granja.show', params: {id: 3}})")

</template>

<script>
export default {

}
</script>

<style>

</style>