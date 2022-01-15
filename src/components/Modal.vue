<template>
<div :id="id" class="modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark text-white">
      <div class="modal-header">
        <h5 class="modal-title">{{title}}</h5>
        <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-dark">
        <slot :name="body"></slot>
      </div>
      <div class="modal-footer">
        <slot :name="footer"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {Modal} from "bootstrap";
export default {
    name: "Modal",

    data()
    {
        return {
            modal: null
        };
    },

    props:
    {
        id: String,
        title: String,
    },

    mounted()
    {
      this.modal = new Modal(document.getElementById(this.id));
      this.$emit("modal",{
        modal: this.modal,
        modal_id: this.id
      });
    }
}
</script>

