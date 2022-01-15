<template>
    <div class="container">
        <div class="card card-sm bg-dark text-white">
            <div class="card-body">
                <button>openme</button>
            </div>
        </div>
    </div>
    <modal id="1" title="Hello World" @modal="getModal"/>
    <modal id="2" title="Hello Yes" @modal="getModal"/>
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
        getModal({modal,id})
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