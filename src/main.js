import { createApp } from 'vue'
import './style.css'
import App from './components/App/App.vue'
//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'



library.add(faPlus, faTrash)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
