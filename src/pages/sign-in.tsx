import {SignIn} from "@/components";
import {useLoginMutation} from "@/services/auth.ts";

export const SignInPage = ( )=>{
    const [login] = useLoginMutation()
    return <SignIn onSubmit={login}/>
}