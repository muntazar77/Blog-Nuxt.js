import Vue from "vue";
import Swal from 'sweetalert2'
// Vue.use(Vue2Editor);



window.Swal=Swal
Vue.prototype.$swal =Swal

console.log('reen')
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
  // window.Toast=Toast
window.Toast =Toast
Vue.prototype.$toast =Toast
