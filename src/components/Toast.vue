<script setup lang='ts'>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
    message: {
        type: String,
        default: ''
    },
    isShow: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Number,
        default: 500
    }
});

const show = ref(props.isShow)

onMounted(() => {
    setTimeout(() => {
        show.value = false;
    }, props.duration);
})

</script>

<template>
    <transition name="toast-fade">
        <div class="toast" v-if="show">
            {{ message }}
        </div>
    </transition>
</template>

<style scoped lang='less'>
.toast {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 15px;
    background-color: gray;
    color: red;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
    transition: transform 0.5s ease-in-out;
}

.toast-fade-leave-to {
    transform: translateY(-100%);
}
</style>
