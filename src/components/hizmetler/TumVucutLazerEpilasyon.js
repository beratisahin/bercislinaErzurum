import "./Hizmet.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function TumVucutLazerEpilasyon() {
    useDocumentTitle('Tüm Vücut Lazer Epilasyon- Erzurum Blue Liva Güzellik Salonu');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Tüm Vücut Lazer Epilasyon"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    <h4><strong>Tüm Vücut Lazer Epilasyon&nbsp;</strong></h4>
                    <p class="hizmetyazi">Erzurum Blue Liva Güzellik Salonu</p>     
                </div>
            </div>
            
        </div>
    )
}



