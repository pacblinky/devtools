<template>
    <div class="container">
        <div class="card card-sm bg-dark text-white">
            <div class="card-body">
                <button>openme</button>
            </div>
        </div>
    </div>
    <modal modal_id="1" title="Hello World" @modal="getModal"/>
    <modal modal_id="2" title="Hello Yes" @modal="getModal"/>
</template>

<script>
import Modal from "./../components/Modal.vue";
export default {
    name: "Mapcycle",
    data()
    {
        return {
            modals: []
        }
    },

    methods:
    {
        getModal({modal,modal_id})
        {
            this.modals.push({id: modal_id, modal: modal});
        }
    },

    components:
    {
        Modal
    }
}
</script>