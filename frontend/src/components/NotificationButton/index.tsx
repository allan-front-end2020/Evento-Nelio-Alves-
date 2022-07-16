import axios from "axios";
import { toast } from "react-toastify";
import icon from  "../../assets/img/Vector (1).svg";
import { BASE_URL } from "../../utils/resquest";
import "./style.css"

type Prosp ={
    saleId:number;
}
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
       toast .info("Sms enviado com sucesso")
    });
}

function NotificationButton({saleId} : Prosp) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
         <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificationButton

