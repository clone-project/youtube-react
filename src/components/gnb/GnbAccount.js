import React, { useState } from 'react';
import { ReactComponent as IconOption } from "../../assets/icons/gnb/option.svg"
import { ReactComponent as IconLogin } from "../../assets/icons/gnb/account-login.svg"
import { ReactComponent as IconArrow } from "../../assets/icons/gnb/arrow.svg"
import "./GnbAccount.module.scss";
import UserData from "../../mock/user"

function GnbAccount() {
  const [ isLogin, setLogin ] = useState(false);

  function toggleLogin() {
    setLogin(!isLogin);
  }

  return (
    <div id="gnb-account" className={ "account_area " + ( isLogin? 'is_login' : '' ) }>
      {/*[D] login 상태일 경우 .account_area에 .is-login 클래스 추가*/}
      <span className="logout-item">
        {/*[D] 클릭 시 .dropdown_account에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
        <button type="button" id="gnb-button-setting" className="button_setting" aria-expanded="false">
          <span className="blind">설정</span>
          <IconOption />
        </button>
        <button type="button" id="button-login" className="link_login" onClick={ toggleLogin }>
          <IconLogin />로그인
        </button>
      </span>
    {/*[D] 클릭 시 .dropdown_account에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
    <button type="button" id="gnb-button-account" className="button_account login-item" aria-expanded="false" onClick={ toggleLogin }>
      <img id="user-profile24" src={ UserData.user.accounts[0].profile } className="image_profile" width="24" height="24" alt="프로필" />
    </button>
    <div id="gnb-dropdown-account" className="dropdown_account">
      <div className="profile_section login-item">
        <div className="image_area">
          <img id="user-profile40" src={ UserData.user.accounts[0].profile } className="image_profile" width="40" height="40" alt="프로필" />
        </div>
        <div className="text_area">
          <span className="nickname">{ UserData.user.accounts[0].nickname }</span>
          <span className="address">{ UserData.user.id }</span>
          <a href="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=ko" className="link_account">Google 계정 관리</a>
        </div>
      </div>
      <div className="dropdown_section login-item">
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path><path d="M0 0h24v24H0z" fill="none"></path></g></svg>
          <span className="text">내 채널</span>
        </a>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
          <span className="text">구매 항목 및 멤버십</span>
        </a>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM10 15V9l5 3-5 3z"></path></g></svg>
          <span className="text">YouTube 스튜디오</span>
        </a>
        <button type="button" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12zm-3 5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15z"></path></g></svg>
          <span className="text">계정 전환</span>
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_arrow"><g mirror-in-rtl=""><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g></svg>
        </button>
        <button type="button" id="button-logout" className="link_item" onClick={ toggleLogin }>
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g mirror-in-rtl=""><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g></svg>
          <span className="text">로그아웃</span>
        </button>
      </div>
      <div className="dropdown_section">
        <button type="button" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M280.485281,201.514719 L284,198 L287.514719,201.514719 L292.485281,201.514719 L292.485281,206.485281 L296,210 L292.485281,213.514719 L292.485281,218.485281 L287.514719,218.485281 L284,222 L280.485281,218.485281 L275.514719,218.485281 L275.514719,213.514719 L272,210 L275.514719,206.485281 L275.514719,201.514719 L280.485281,201.514719 Z M283.726536,215.86375 C287.116026,215.86375 289.86375,213.251451 289.86375,210.029016 C289.86375,206.806581 287.116026,204.194281 283.726536,204.194281 C283.073662,204.194281 282.164855,204.396254 281.000116,204.800201 C282.532112,206.378393 283.29811,208.121331 283.29811,210.029016 C283.29811,211.9367 282.444938,213.635948 280.738594,215.126758 C282.007413,215.618086 283.003393,215.86375 283.726536,215.86375 Z" transform="translate(-272, -198)"></path></g></svg>
          <span className="text">디자인: 기기 테마</span>
          <IconArrow />
        </button>
        <button type="button" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g></svg>
          <span className="text">언어: 한국어</span>
          <IconArrow />
        </button>
        <button type="button" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g></svg>
          <span className="text">위치: 한국</span>
          <IconArrow />
        </button>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g></svg>
          <span className="text">설정</span>
        </a>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zM7.7 15.1A5.3 5.3 0 0 1 12 6.7a5.3 5.3 0 0 1 4.3 8.4c-.6-1.1-3-1.7-4.3-1.7-1.3 0-3.7.6-4.3 1.7zM12 8.3a2.2 2.2 0 0 0-2.2 2.2c0 1.2 1 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2c0-1.2-1-2.2-2.2-2.2zm0-2.6A6.3 6.3 0 0 0 5.7 12a6.3 6.3 0 0 0 6.3 6.3 6.3 6.3 0 0 0 6.3-6.3A6.3 6.3 0 0 0 12 5.7z"></path></g></svg>
          <span className="text">YouTube의 내 데이터</span>
        </a>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g></svg>
          <span className="text">고객센터</span>
        </a>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g></svg>
          <span className="text">의견 보내기</span>
        </a>
        <a href="#" className="link_item">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path></g></svg>
          <span className="text">단축키</span>
        </a>
      </div>
      <div className="dropdown_section">
        <button type="button" className="link_item">
          <span className="text">제한 모드: 사용 안함</span>
          <IconArrow />
        </button>
      </div>
    </div>
  </div>
  )
}

export default GnbAccount;