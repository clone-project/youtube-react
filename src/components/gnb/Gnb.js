import GnbLogo from "./GnbLogo";
import GnbSearch from "./GnbSearch";
import GnbAccount from "./GnbAccount";
import "./Gnb.scss";
import UserData from "../../mock/user";

function Gnb() {
    return (
      <header className="gnb">
        <div className="left_section">
          {/*[D] 클릭 시 .layer_lnb에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
          <button type="button" id="gnb-button-lnb" className="button_lnb" aria-expanded="false" aria-haspopup="menu">
            <span className="blind">메뉴</span>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_menu">
              <g>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </g>
            </svg>
          </button>
          <GnbLogo isPremium={UserData.user.premium} />
        </div>
        <div className="right_section">
          <GnbSearch />
          <div className="upload_area">
            {/*[D] 클릭 시 .dropdown_make에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
            <button type="button" id="gnb-button-make" className="button_make" aria-haspopup="menu" aria-expanded="false">
              <span className="blind">만들기</span>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_upload">
                <g>
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
                </g>
              </svg>
            </button>
            <div id="gnb-dropdown-make" className="dropdown_make">
              <a href="#" className="link_item">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_upload">
                  <g>
                    <path d="M19,4H5A2.15,2.15,0,0,0,3,6V18a2.15,2.15,0,0,0,2,2H19a2.15,2.15,0,0,0,2-2V6A2.15,2.15,0,0,0,19,4ZM5,18H19V6H5Z" fill="#6f6f6f" fill-rule="evenodd"></path>
                    <path d="M15,12,10,8v8Z" fill="#f80000" fill-rule="evenodd"></path>
                  </g>
                </svg>
                <span className="text">동영상 업로드</span>
              </a>
              <a href="#" className="link_item">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_streaming">
                  <g>
                    <path d="M23,12a11,11,0,0,1-3.22,7.78l-1.41-1.41a9,9,0,0,0,0-12.73l1.41-1.41A11,11,0,0,1,23,12ZM5.64,5.64,4.22,4.22a11,11,0,0,0,0,15.56l1.41-1.41a9,9,0,0,1,0-12.73ZM16.95,7.05,15.54,8.46a5,5,0,0,1,0,7.07l1.41,1.41a7,7,0,0,0,0-9.9Zm-9.9,0a7,7,0,0,0,0,9.9l1.41-1.41a5,5,0,0,1,0-7.07Z" fill="#6f6f6f" fill-rule="evenodd"></path>
                    <path d="M12,9a3,3,0,1,1-3,3,3,3,0,0,1,3-3" fill="#f80000" fill-rule="evenodd"></path>
                  </g>
                </svg>
                <span className="text">실시간 스트리밍 시작</span>
              </a>
            </div>
          </div>
          <div className="app_area">
            {/*[D] 클릭 시 .dropdown_app에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
            <button type="button" id="gnb-button-app" className="button_app" aria-haspopup="menu" aria-expanded="false">
              <span className="blind">YouTube 앱</span>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_app">
                <g>
                  <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                </g>
              </svg>
            </button>
            <div id="gnb-dropdown-app" className="dropdown_app">
              <div className="dropdown_section">
                <a href="https://tv.youtube.com/welcome/?utm_campaign=home&utm_medium=ep&utm_source=youtube_web&ve=34273"
                   className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_tv">
                    <g>
                      <path fill="#F00" d="M23.8,17.1c0,0.9-0.7,1.6-1.6,1.6H1.9c-0.9,0-1.6-0.7-1.6-1.6V4.8c0-0.9,0.7-1.6,1.6-1.6 h20.3c0.9,0,1.6,0.7,1.6,1.6V17.1z"></path>
                      <path fill="#F00" d="M17.3,20.8H6.7c-0.3,0-0.5-0.2-0.5-0.5v0c0-0.3,0.2-0.5,0.5-0.5h10.7 c0.3,0,0.5,0.2,0.5,0.5v0C17.9,20.6,17.6,20.8,17.3,20.8z"></path>
                      <polygon fill="#FFFFFF" points="9.6,14.4 15.7,10.9 9.6,7.5"></polygon>
                    </g>
                  </svg>
                  <span className="text">YouTube TV</span>
                </a>
              </div>
              <div className="dropdown_section">
                <a href="" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_music">
                    <g fill-rule="nonzero" fill="none">
                      <circle fill="red" cx="12" cy="12" r="12"></circle>
                      <path d="M12 6.278A5.728 5.728 0 0 1 17.722 12 5.728 5.728 0 0 1 12 17.722 5.728 5.728 0 0 1 6.278 12 5.728 5.728 0 0 1 12 6.278zm0-.55A6.272 6.272 0 0 0 5.727 12 6.272 6.272 0 0 0 12 18.273 6.272 6.272 0 0 0 18.273 12 6.272 6.272 0 0 0 12 5.727z" fill="#FFF"></path>
                      <path fill="#FFF" d="M9.818 15.136l5.318-3.272-5.318-3z"></path>
                    </g>
                  </svg>
                  <span className="text">YouTube Music</span>
                </a>
                <a href="" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_kids">
                    <g>
                      <path fill="#282828" d="M16.38 10.69c-.04-.02-.09-.03-.13-.05-1.35-.65-5.69-2.07-6.55-2.32-.15-.05-.59-.18-.76-.05-.16.12-.06.63-.04.78.07.5.7 5.03.77 5.5l.01.09c.06.4.16 1.21.39 1.33.23.12.82-.27 1.13-.52 0 0 3.68-2.6 4.31-3.05l.82-.58.1-.07c.19-.12.42-.26.41-.57 0-.31-.27-.42-.46-.49zm-5.88 4.44c-.23-.83-.89-5.11-.95-6.12.97.12 5.1 1.58 6.34 2.25-.24.17-4.76 3.52-5.39 3.87z"></path>
                      <path fill="#F00" d="M23.29 13.89c-.04-1.1-.36-5.29-.43-5.8-.13-.93-.37-1.8-.69-2.6-.21-.52-.52-1.05-1.31-1.61-1.01-.72-1.82-.84-2.85-.84-.72 0-1.21.04-1.53.06-2.59.18-4.95.46-7.22.86-2.01.36-3.53.76-4.92 1.3-1.04.41-1.85.92-2.48 1.57C.83 7.88.56 8.85.79 10.01c.3 1.58.8 5.23.82 5.43.11.97.28 2.1.67 3.2.44 1.21 1.25 1.94 2.48 2.23.79.19 1.61.13 2.68-.12 1.44-.34 2.87-.67 4.33-.93 2.47-.45 4.78-.58 5.78-.64.45-.03 1.52-.12 1.61-.13.24-.03.56-.09.88-.15.82-.18 1.43-.61 1.99-1.15.27-.26.61-.69.82-1.11.44-.93.47-1.91.44-2.75zm-6.85-2.14c-.04.02-.07.04-.1.07-.28.19-.55.38-.82.58-.63.45-4.31 3.05-4.31 3.05-.31.25-.9.63-1.13.52-.23-.12-.33-.93-.39-1.33l-.01-.09c-.08-.48-.7-5.01-.77-5.5-.03-.15-.13-.66.03-.78.17-.13.61 0 .76.05.87.25 5.2 1.67 6.56 2.32.04.02.08.04.13.05.19.08.46.18.47.5 0 .3-.23.45-.42.56z"></path>
                      <path fill="#FFF" d="M15.9 11.26c-.25.17-4.77 3.52-5.4 3.87-.23-.83-.89-5.11-.95-6.12.98.12 5.1 1.58 6.35 2.25z"></path>
                      <path fill="#FF8983" d="M.76 9.91c.23-1.61 1.07-2.16 1.67-2.6 1.01-.75 1.88-1.16 3.3-1.55C9.75 4.65 12.16 4.33 16.3 4.2c1.11-.03 2.89-.12 3.92.37.83.39 1.5.86 2.3 1.92-.1-.34-.21-.67-.34-.99-.21-.52-.52-1.05-1.31-1.61-1.01-.72-1.82-.84-2.85-.84-.66 0-1.12.03-1.44.06-.03 0-.06.01-.09.01-2.59.18-4.95.46-7.22.86-2.01.36-3.53.76-4.92 1.3-1.05.39-1.86.9-2.49 1.55-.09.1-.18.19-.26.29C.81 8.03.59 8.9.76 9.91z"></path>
                      <path fill="#282828" d="M23.98 13.48c-.02-.58-.27-4.7-.37-5.37-.17-1.1-.37-2.16-.85-3.14-.48-.97-.91-1.52-1.63-1.92-1.33-.73-2.15-.84-4.09-.77-.96.04-6.6.72-7.83.93-2.06.35-3.7.78-5.17 1.36-1.01.4-1.82.89-2.46 1.49C.23 7.32-.24 8.7.11 10.38c.26 1.29.69 4.81.75 5.26.13.98.31 2.13.73 3.26.57 1.54 1.63 2.44 3.25 2.75.29.06.58.08.89.08.47.01 1.26-.12 1.88-.27.32-.08 1.34-.32 3.28-.73 3.2-.68 7.04-.88 7.77-.94.11-.01 1-.07 1.34-.13 1.35-.25 2.17-1.03 2.96-1.85.47-.49.9-1.36.99-2.25.07-.76.05-1.43.03-2.08zm-1.14 3.15c-.21.43-.55.85-.82 1.11-.57.54-1.17.96-1.99 1.15-.31.07-.63.13-.88.15-.09.01-1.17.1-1.61.13-1 .06-3.31.18-5.78.64-1.46.27-2.89.6-4.33.93-1.06.25-1.88.31-2.68.12-1.23-.3-2.04-1.03-2.48-2.23-.4-1.09-.56-2.23-.67-3.2-.02-.2-.51-3.85-.82-5.43-.22-1.15.05-2.12 1.08-3.17.63-.65 1.44-1.16 2.48-1.57 1.39-.54 2.91-.94 4.92-1.3 2.27-.4 4.63-.69 7.22-.86.32-.02.81-.06 1.53-.06 1.03 0 1.85.12 2.85.84.79.57 1.1 1.09 1.31 1.61.32.8.56 1.67.69 2.6.07.51.39 4.7.43 5.8.03.84 0 1.82-.45 2.74z"></path>
                    </g>
                  </svg>
                  <span className="text">YouTube Kids</span>
                </a>
              </div>
              <div className="dropdown_section">
                <a href="" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_normal">
                    <g>
                      <defs>
                        <radialGradient cx="5.4%" cy="7.11%" r="107.93%" fx="5.4%" fy="7.11%" gradientTransform="matrix(.70653 0 0 1 .016 0)">
                          <stop offset="0%" stop-color="#FFF"></stop>
                          <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                        </radialGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path d="M1 1h21.77v22H1z"></path>
                        <g fill-rule="nonzero">
                          <path fill="#F00" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"></path>
                          <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                          <path fill="#000" fill-opacity=".12" d="M9.68 8.88l5.13 3.48.73-.38"></path>
                          <path fill="#FFF" fill-opacity=".2" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"></path>
                          <path fill="#3E2723" fill-opacity=".2" d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"></path>
                          <path fill="#FFF" fill-opacity=".2" d="M9.68 15.08v.1l5.84-3.08v-.12"></path>
                          <path fill="#3E2723" fill-opacity=".2" d="M9.68 8.9v-.13l5.84 3.1v.1"></path>
                          <path fill="url(#youtube_round-a)" fill-opacity=".1" d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z" transform="translate(1 4.208)"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="text">크리에이터 아카데미</span>
                </a>
                <a href="" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_normal">
                    <g>
                      <defs>
                        <radialGradient cx="5.4%" cy="7.11%" r="107.93%" fx="5.4%" fy="7.11%" gradientTransform="matrix(.70653 0 0 1 .016 0)">
                          <stop offset="0%" stop-color="#FFF"></stop>
                          <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                        </radialGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path d="M1 1h21.77v22H1z"></path>
                        <g fill-rule="nonzero">
                          <path fill="#F00" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"></path>
                          <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                          <path fill="#000" fill-opacity=".12" d="M9.68 8.88l5.13 3.48.73-.38"></path>
                          <path fill="#FFF" fill-opacity=".2" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"></path>
                          <path fill="#3E2723" fill-opacity=".2" d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"></path>
                          <path fill="#FFF" fill-opacity=".2" d="M9.68 15.08v.1l5.84-3.08v-.12"></path>
                          <path fill="#3E2723" fill-opacity=".2" d="M9.68 8.9v-.13l5.84 3.1v.1"></path>
                          <path fill="url(#youtube_round-a)" fill-opacity=".1" d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z" transform="translate(1 4.208)"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="text">YouTube for Artists</span>
                </a>
              </div>
            </div>
          </div>
          <div id="gnb-notification-area" className="notification_area">
            {/*[D] 클릭 시 .dropdown_notification에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
            <button type="button" id="gnb-button-notification" className="button_notification" aria-haspopup="menu" aria-expanded="false">
              <span className="blind">알림</span>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_notification">
                <g>
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                </g>
              </svg>
            </button>
            <div className="dropdown_notification">
              <div className="title_wrap">
                <h2 className="Stitle">알림</h2>
                <a href="https://www.youtube.com/account_notifications" className="link_setting">
                  <span className="blind">설정</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_setting">
                    <g>
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="content_wrap">
                <div className="default">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_notification_default">
                    <g>
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                    </g>
                  </svg>
                  <p className="main_description">여기에 알림이 표시됩니다.</p>
                  <p className="sub_description">즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아 보세요.</p>
                </div>
              </div>
            </div>
          </div>
          <GnbAccount />
        </div>
      </header>
    )
}

export default Gnb;