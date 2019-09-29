<template lang="pug">
    q-layout(view='lHh Lpr lFf')
        q-header(elevated)
            q-toolbar
                q-btn(flat, dense, round, icon="arrow_back" aria-label='Menu'  @click="salir")
                q-toolbar-title
                    | Registar alimentación
        q-page-container
            q-page
                q-page
                    .q-mx-md
                        q-input(label="Precio")
                        q-input(label="Cantidad")
                        span.strong Total
                        q-input(label="Proveedor (Opcional)")
                        q-input(label="Descripción (Opcional)")
                        q-btn.full-width.q-mt-md(label="Guardar" color="secondary" @click="guardar")
</template>

<script>
export default {
    methods: {
        salir(){
            this.$q.dialog({
                title: '¿Estás seguro de salir?',
                message: 'Se perderán todos los datos ingresados.',
                ok: 'Salir',
                cancel: 'Cancelar'
            }).onOk(() => {
                this.$router.push({name: 'granja.show', params: {id: 2}})
            })
        },
        guardar(){
            this.$q.notify('Guardado con éxito')
        }
    }
}
</script>

<style>

</style>