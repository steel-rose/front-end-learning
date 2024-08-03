import { reactive, createApp, render, createVNode } from 'vue'
import Toast from '../components/Toast.vue';

const toastPlugin = {
    install(app) {
        app.config.globalProperties.$toast = (options) => {
            const wrapper = document.createElement('div');
            wrapper.id = 'ft-toast';
            let vnode = createVNode(Toast);
            const toastProps = reactive({
                message: options.message,
                isShow: options.isShow,
                duration: options.duration
            });
            vnode = createVNode(Toast, toastProps);
            render(vnode, wrapper);
            document.body.appendChild(wrapper);
        }
    }
}


export default toastPlugin;