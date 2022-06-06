<template>
    <div id="snackbar">{{message}}</div>
</template>
<script>
    import './index.css';

    export default {
        name: 'snackbar',
        props: {
            message: String,
            updateSnack: Boolean
        },
        // data() {
        //     return {
        //         unwatcher: null
        //     }
        // },
        // created() {
        //     this.unwatcher = this.$watch('updateSnack', (val, oldVal) => {
        //         this.$emit('update:updateSnack', oldVal);
        //         console.log(val, oldVal);
        //     });
        // },
        watch: {
            updateSnack: {
                handler(val, oldVal) {
                    if (val) {
                        this.handleSnackbar();
                        // this.$emit('update:updateSnack', oldVal);
                        console.log(val, oldVal);
                    }
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            handleSnackbar() {
                let x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                    // this.unwatcher;
                }, 3000);
                this.$emit('resetSnack', false);
            }
        }
    }
</script>
