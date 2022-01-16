<template>
    <div class="container">
        <div class="card card-sm bg-dark text-white">
            <div class="card-body">
                <button>openme</button>
                {{modals}}
                <modal id="1" title="Add map" @modal="addModal">
                    <template v-slot:body>
                        <p>Body</p>
                    </template>
                    <template v-slot:footer>
                        <p>Footer</p>
                    </template>
                </modal>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "./../components/Modal.vue";
export default {
    name: "Mapcycle",
    data()
    {
        return {
            modals: [],
            mapcycles: [],
            maps: [],
            cvars: [],
        }
    },

    methods:
    {
        addModal({modal,id})
        {
            this.modals.push({id: id, modal: modal});
        }
    },

    components:
    {
        Modal
    }
}
</script>