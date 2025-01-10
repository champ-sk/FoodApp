import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Ooops Error!!!</h1>
            <h2>There is some error</h2>
        </div>
    )
}
export default Error;