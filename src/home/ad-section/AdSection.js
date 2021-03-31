import React, { useState } from 'react';
import { ReactComponent as IconClose } from "../../assets/icons/home/close.svg";
import "./AdSection.scss";
import AdData from "../../mock/advertise";

function AdSection() {
  const [ isActive, setActive ] = useState(true);

  function close() {
    setActive(!isActive);
  }

  return (
    <div className={"ad_section " + ( isActive? '' : 'hide')}>
      <div className="section_inner">
        <h3 className="blind">광고</h3>
        <img src={ AdData.ad.imageURL } className="image_premium" alt="" />
        <strong className="ad_title">{ AdData.ad.mainText }</strong>
        <a href="#" className="link_ad">{ AdData.ad.linkText }</a>
        <button type="button" className="button_close" onClick={ close }>
          <IconClose />
          <span className="blind">광고 닫기</span>
        </button>
      </div>
    </div>
  )
}

export default AdSection;