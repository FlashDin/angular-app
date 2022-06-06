<template>
    <div id="myModal" class="modal">
        <div class="modal-content" v-bind:style="{width: width === '' ? '80%' : width}">
            <div class="modal-header">
                <span class="close">&times;</span>
                <slot name="modalHeader"/>
            </div>
            <div class="modal-body">
                <slot name="modalContent"/>
            </div>
            <div class="modal-footer">
                <slot name="modalFooter"/>
            </div>
        </div>
    </div>
</template>
<script>
    import './index.css';

    export default {
        name: 'modal',
        props: ['handleClose', 'modalHeader', 'modalContent', 'modalFooter', 'width'],
        watch: {
            handleClose: {
                handler(val) {
                    if (val) {
                        this.openModal(val);
                    }
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            openModal(handleOpen) {
                let modal = document.getElementById("myModal");
                let span = document.getElementsByClassName("close")[0];
                if (handleOpen) {
                    modal.style.display = "block";
                } else {
                    modal.style.display = "none";
                }
                span.onclick = () => {
                    modal.style.display = "none";
                };
                this.$emit('modalShow', false);
            }
        }
    }
</script>
