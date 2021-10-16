export const initialState={

    token:null,
    pic:null,
    }
    export const actionTypes={
        SET_TOKEN:"SET_TOKEN",
        SET_PIC:"SET_PIC"
    }
    const reducer=(state,action)=>{
        console.log(action);
        switch(action.type){
            case actionTypes.SET_TOKEN:
                return {
                    ...state,
                    token: action.token,
                    pic:action.pic,
                };
        
                default:
                    return state;
    
    
            }
    
    };
    export default reducer;