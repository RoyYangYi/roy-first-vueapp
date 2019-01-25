import Vue from 'vue'

const div = document.createElement('div')
document.body.appendChild(div)

const app = new Vue({
    template: '<div>{{text}}</div>',
    data:{
        text:0
    }
})

app.$mount('#root')

setInterval(() => {
    app.text+=1
},1000)