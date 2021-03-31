import GnbLogo from "./GnbLogo";
import GnbSearch from "./GnbSearch";
import GnbAccount from "./GnbAccount";
import GnbDropdown from "./GnbDropdown";
import { ReactComponent as IconMenu } from "../../assets/icons/gnb/menu.svg"
import "./Gnb.scss";
import UserData from "../../mock/user";
import DropdownData from "../../mock/gnbDropdown";

function Gnb() {
  return (
    <header className="gnb">
      <div className="left_section">
        {/*[D] 클릭 시 .layer_lnb에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
        <button type="button" id="gnb-button-lnb" className="button_lnb" aria-expanded="false" aria-haspopup="menu">
          <span className="blind">메뉴</span>
          <IconMenu />
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
          <GnbDropdown data={ DropdownData.dropdowns[0] } />
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
          <GnbDropdown data={ DropdownData.dropdowns[1] } />
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