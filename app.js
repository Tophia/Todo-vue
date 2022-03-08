const app = new Vue({
    el: "#app",
    data: {
        title: 'Hello Everyone',
        newTodo:'',
        todos:[]
    },
    methods:{
        addTodo(){
            this.todos.push({
                title:this.newTodo,
                done:false
            })
            this.newTodo ='';
            console.log(this.newTodo);
        }
    }
}
)