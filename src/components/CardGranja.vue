<template lang="pug">
  q-card
    q-card-section
        .row
            .col-5
                q-img(src="https://www.gob.mx/cms/uploads/image/file/138301/trucha-tilapia-puebla-1.jpg")
            .col-7.q-px-md
                strong Nombre de la granja
                br
                span Nombre del productor
                q-btn.q-mt-sm(label="Descargar" color="secondary" size="sm" rounded icon="arrow_downward"
                @click="$router.push({name: 'granja.show', params: {id: 3}})")
</template>

<script>
export default {

}
</script>

<style>

</style>