<template>
    <form id="formAdd" class="form-default" v-on:submit.prevent="saveData">
        <input class="square-input-field"
               name="title"
               type="text"
               v-model="post.title"
               placeholder="Title"/>
        <br/>
        <textarea class="square-input-field"
                  v-model="post.body"
                  name="body" placeholder="Body"></textarea>
        <br/>
        <button type="submit">Save</button>
    </form>
</template>
<script>
    const initData = () => {
        return {
            post: {
                userId: 1,
                id: '',
                title: '',
                body: '',
            }
        }
    };

    export default {
        name: 'PostForm',
        props: {
            data: null,
            toastNotif: null,
            modalShow: null,
            getData: null
        },
        data() {
            return initData()
        },
        watch: {
            data: {
                handler(val) {
                    this.post = val;
                }
            }
        },
        methods: {
            resetField() {
                Object.assign(this.$data, initData());
            },
            saveData() {
                fetch('http://localhost:3002/posts/' + this.post.id, {
                    method: this.post.id === '' ? 'POST' : 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.post)
                }).then(res => {
                    if (res.ok) {
                        this.resetField();
                        this.$props.modalShow("modalShow");
                        this.$props.getData();
                    }
                    this.$props.toastNotif(res.statusText);
                });
            }
        },
        mounted() {
            this.post = this.$props.data;
        }
    }
</script>
