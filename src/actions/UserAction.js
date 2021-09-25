import { ON_USER_SUBMIT ,ON_USER_LOGIN, IS_LOGIN} from "./types"

 const userAdd = initialState =>async dispatch=> {
     console.log(initialState)
    dispatch ({
        type:ON_USER_SUBMIT,
        payload:initialState
    }
    )
}





export default userAdd
