import React from "react";
import './HeaderIntroduceStyle.scss';
import Product from "../ListProduct/Product";
import { listReason } from "../../../../_core/constant/constant";

const HeaderIntroduce = () => {
    return (
        <div className="header-introduce">
            <div className="ask-question">
                <span>
                Vì sao nên 
                    chọn chúng tôi
                </span>
            </div>
            <div className="list-reason">
                {listReason.map(item => {
                    return (<Product icon={item.icon} title={item.title} content={item.content} />)
                })}
                
            </div>
        </div>
    )
};

export default HeaderIntroduce;
