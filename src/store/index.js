import { createStore } from "vuex";

const m1 = {
    state(){
        return{
            count1:0,
            name1:"abc1"
        }
    },
    mutations:{
        increment1(state,obj){
            state.count1++
            console.log(obj)
        }
    }
}

const m2 = {
    state(){
        return{
            count2:0,
            name2:"abc2"
        }
    },
    mutations:{
        increment2(state,obj){
            state.count2++
            console.log(obj)
        }
    }
}

const store = createStore({
    modules:{
        a:m1,
        b:m2
    }
})

export default store