<template>
    <div class="container">
        <div class="card card-sm bg-dark text-white">
            <div class="card-body">
                <button @click="modal.show()">openme</button>
            </div>
        </div>
    </div>
    <modal :modal_id='1' :title="'Hello World'" @modal="getModal"/>
</template>

<script>
import Modal from "./../Modal.vue";
export default {
    name: "Mapcycle",
    data()
    {
        return {
            modal: null
        }
    },

    methods:
    {
        getModal(value)
        {
            this.modal = value
        }
    },
    
    components:
    {
        Modal
    }
}
</script>