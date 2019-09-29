<template lang="pug">
    q-layout(view='lHh Lpr lFf')
        q-header(elevated)
            q-toolbar
                q-btn(flat, dense, round, icon="arrow_back" aria-label='Menu'  @click="salir")
                q-toolbar-title
                    | Nombre de la granja
        q-page-container
            q-page
                w-card-estanque
                
                q-tabs.q-mt-md(
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                swipeable
                align="justify"
                narrow-indicator)
                    q-tab(name="semillas" label="Semillas")
                    q-tab(name="alimentacion" label="Alimentación")
                q-tab-panels(v-model="tab" animated)
                    q-tab-panel(name="semillas")
                        w-list-semilla(v-for="i in 5" :key="i")
                        q-page-sticky(position="bottom-right" :offset="[18, 18]")
                            q-btn(fab 
                            @click="$router.push({name: 'semilla.create', params: { id_granja: 2, id_estanque: 5 } })" 
                            color="primary" icon="add" )
                    q-tab-panel(name="alimentacion")
                        w-list-alimentacion(v-for="i in 5" :key="i")
                        q-page-sticky(position="bottom-right" :offset="[18, 18]")
                            q-btn(fab 
                            @click="$router.push({name: 'alimentacion.create', params: { id_granja: 2, id_estanque: 5 } })" 
                            color="secondary" icon="add" )
</template>

<script>
import WListSemilla from '../../components/ListSemilla'
import WListAlimentacion from '../../components/ListAlimentacion'
import WCardEstanque from '../../components/CardEstanque'
export default {
    data: () => ({
        tab: 'semillas'
    }),
    components: {WListSemilla, WListAlimentacion, WCardEstanque},
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
        }
    }
}
</script>

<style>

</style>