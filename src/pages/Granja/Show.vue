<template lang="pug">
    q-layout(view='lHh Lpr lFf')
        q-header(elevated)
            q-toolbar
                q-btn(flat, dense, round, icon="arrow_back" aria-label='Menu'  @click="salir")
                q-toolbar-title
                    | Nombre de la granja
        q-page-container
            q-page
                w-card-granja

                q-tabs.q-mt-md(
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator)
                    q-tab(name="estanques" label="Estanques")
                    q-tab(name="semillas" label="Semillas")
                    q-tab(name="alimentacion" label="Alimentación")
                q-tab-panels(v-model="tab" animated)
                    q-tab-panel(name="estanques")
                        w-card-estanque.q-mb-sm(v-for="i in 4" :key="i")
                    q-tab-panel(name="semillas")
                        .text-h6 Semillas
                        | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    q-tab-panel(name="alimentacion")
                        .text-h6 Alimentación
                        | Lorem ipsum dolor sit amet consectetur adipisicing elit.
</template>

<script>
import WCardEstanque from '../../components/CardEstanque'
import WCardGranja from '../../components/CardGranja'
export default {
    components: {WCardGranja, WCardEstanque},
    data: () => ({
        tab: 'estanques'
    }),
    methods: {
        salir(){
            this.$q.dialog({
                title: '¿Estás seguro de salir?',
                message: 'Se perderán todos los datos ingresados.',
                ok: 'Salir',
                cancel: 'Cancelar'
            }).onOk(() => {
                this.$router.push({name: 'index'})
            })
        }
    }
}
</script>

<style>

</style>