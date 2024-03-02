import { Oval } from "react-loader-spinner"
import '../../GlobalSyles.css'

export const Loader = () => {
    return (
        <div className="weapper-loader">
            <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
    )
}