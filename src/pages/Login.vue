<template lang="pug">
    q-layout(view="lHh Lpr lFf")
        q-page-container
            q-page
                .text-center.q-pt-xl
                    img( width="200px" src="../statics/ampa_logo.png", alt="alt")
                
                .text-center.q-py-lg
                    .text-h6.text-secondary Costos de unidades productivas acuícolas
                
                .q-ma-md
                    .text-h6
                        strong Iniciar sesión
                    q-input(label="Usuario" type="email" v-model="form.email")
                        template(v-slot:prepend)
                            q-icon(name="mail")
                    q-input(label="Contraseña" type="password" v-model="form.password")
                        template(v-slot:prepend)
                            q-icon(name="vpn_key")
                    q-btn.full-width.q-mt-md(label="Ingresar" color="secondary")
                
                .text-center
                    span.text-grey App de Extensionismo
</template>

<script>
export default {
    data: () => ({
        form: {
            email: '',
            password: ''
        }
    })
}
</script>

<style>

</style>