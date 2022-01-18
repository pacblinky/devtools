<template>
    <div class="container">
        <button @click='modals["addMap"].show()'>open</button>
    </div>
    <modal id="addMap" title="Add map" @modal="modals['addMap'] = $event">
        <template v-slot:body>
            <label>Map name</label>
            <input type="text">
        </template>
    </modal>
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