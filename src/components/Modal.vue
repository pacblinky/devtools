<template>
<div :id="modal_id" class="modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark text-white">
      <div class="modal-header">
        <h5 class="modal-title">{{modal_title}}</h5>
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
        modal_id: String,
        modal_title: String,
    },

    mounted()
    {
      this.modal = new Modal(document.getElementById(this.modal_id));
      this.$emit("modal",this.modal);
    }
}
</script>

