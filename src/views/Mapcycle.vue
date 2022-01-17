<template>
    <div class="container">
        <modal id="addMap" title="Add map" @modal="modals['addMap'] = $event"/>
        <button @click="modals['addMap'].show()">Open</button>
    </div>
</template>

<script>
import Modal from "./../components/Modal.vue";
export default {
    name: "Mapcycle",
    data()
    {
        return {
            modals: {},
            mapcycles: [],
            maps: [],
            cvars: [],
        }
    },

    components:
    {
        Modal
    }
}
</script>