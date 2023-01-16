import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import swal from "sweetalert";


// TODO GET SERVER SIDE PROPS THROUGH AN API REQUEST TO THE DB OVER A NEW API FILE /API/REQUEST


export default function estado(){
    const route = useRouter()
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            swal("Você será redirecionado(a) para fazer login!")
            route.push('/login')
        },
    });
    return(
        <>
            <h1>ola</h1>
        </>
    );
}

