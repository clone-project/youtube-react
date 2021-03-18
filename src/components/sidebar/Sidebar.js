import GnbLogo from "../gnb/GnbLogo";
import "./Sidebar.scss";
import UserData from "../../mock/user";

function Sidebar() {
  return (
    <div id="gnb-layer-lnb" className="layer_lnb">
      {/*[D] layer 노출될 때 ltr 트랜지션*/}
      {/*[D] layer 여백 클릭 시 open 클래스 제거.*/}
      <div className="layer_content" role="menu">
        <div className="lnb_top_wrap">
          {/*[D] 클릭 시 .layer_lnb에 .open 클래스 제거 및 aria-expanded 값 false로 변경*/}
          <button type="button" id="gnb-button-lnb2" className="button_lnb" aria-expanded="false" aria-haspopup="menu">
            <span className="blind">메뉴</span>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_menu"><g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g></svg>
          </button>
          <GnbLogo isPremium={UserData.user.premium} />
        </div>
        <div className="lnb_list_wrap">
          <div className="menu_section">
            <ul role="menu" className="main_menu_list">
              <li role="presentation"  className="list_item">
                {/*[D] 현재 페이지에 클래스 .on 추가 및 aria-selected 값 true로 변경*/}
                <a href="/" role="menuitem" className="link on" aria-selected="true">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></g></svg>
                  <span className="text">홈</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="/feed/trending" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path></g></svg>
                  <span className="text">인기</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="/feed/subscriptions" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path></g></svg>
                  <span className="text">구독</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu_section">
            <ul role="menu" className="main_menu_list">
              <li role="presentation"  className="list_item">
                {/*[D] 현재 페이지에 클래스 .on 추가 및 aria-selected 값 true로 변경*/}
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g></svg>
                  <span className="text">보관함</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path></g></svg>
                  <span className="text">시청 기록</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path><path d="M10.2 9v6.5l5-3.2-5-3.2z"></path></g></svg>
                  <span className="text">내 동영상</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></g></svg>
                  <span className="text">내 영화</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                  <span className="text">나중에 볼 동영상</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                {/*[D] 클릭 시 .on 클래스 추가 X. .hide 클래스 추가.*/}
                <button type="button" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g></svg>
                 <span className="text">더보기</span>
               </button>
              </li>
              {/*[D] '더보기' 버튼 클릭 시 .hide 클래스 제거*/}
              <li role="presentation" className="list_item hide">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path></g></svg>
                  <span className="text">좋아요 표시한 동영상</span>
                </a>
              </li>
              <li role="presentation" className="list_item hide">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path></g></svg>
                  <span className="text">김송이 재생목록</span>
                </a>
              </li>
              <li role="presentation" className="list_item hide">
                {/*[D] 클릭 시 on 클래스 추가 X*/}
                <button type="button" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g></svg>
                  <span className="text">간략히 보기</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="menu_section sub_menu">
            <span className="section_title">구독</span>
            <ul className="subscribed_list">
              {/*[D] 채널 7개까지 노출. 초과될 경우 '더보기' 버튼 노출.*/}
              <li className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <img src="https://yt3.ggpht.com/ytc/AAUvwnh8x17T5B8QcY6BU5iKuG52rYQJtWDzgZNIWyL2xA=s88-c-k-c0x00ffffff-no-rj" className="image_channel" width="24" height="24" alt="" />
                  <span className="text">자이언트 펭TV</span>
                  {/*[D] 새 콘텐츠 업로드 시 DOM 추가*/}
                  <span className="new_dot"><span className="blind">NEW</span></span>
                </a>
              </li>
              <li className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <img src="https://yt3.ggpht.com/ytc/AAUvwnhTwUX9m2UYXnIcUjIw1NEHhUF8RdhYDbc82yTR=s88-c-k-c0x00ffffff-no-rj" className="image_channel" width="24" height="24" alt="" />
                  <span className="text">박막례 할머니 Korea Grandma</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                {/*[D] 클릭 시 .on 클래스 추가 X. .hide 클래스 추가.*/}
                <button type="button" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g></svg>
                  <span className="text">00개 더보기</span>
               </button>
              </li>
              {/*[D] '더보기' 버튼 클릭 시 .hide 클래스 제거*/}
              <li role="presentation" className="list_item hide">
                {/*[D] 클릭 시 on 클래스 추가 X*/}
                <button type="button" role="menuitem" className="link" aria-selected="false">
                 <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g></svg>
                 <span className="text">간략히 보기</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="menu_section sub_menu">
            <span className="section_title">YOUTUBE 더보기</span>
            <ul role="menu">
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path fill-rule="nonzero" d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"></path></g></svg>
                  <span className="text">YouTube Premium</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></g></svg>
                  <span className="text">영화</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g fill-rule="evenodd"><path d="M22,13V8l-5-3l-5,3l0,0L7,5L2,8v5l10,6L22,13z M9,11H7v2H6v-2H4v-1h2V8h1v2h2V11z M15,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,13,15,13z M18,11c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,11,18,11z"></path></g></svg>
                  <span className="text">게임</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                  <span className="text">실시간</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"></path></g></svg>
                  <span className="text">학습</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu_section sub_menu">
            <ul role="menu">
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g></svg>
                  <span className="text">설정</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g></svg>
                  <span className="text">신고 기록</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g></svg>
                  <span className="text">고객센터</span>
                </a>
              </li>
              <li role="presentation" className="list_item">
                <a href="#" role="menuitem" className="link" aria-selected="false">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g></svg>
                  <span className="text">의견 보내기</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="link_wrap">
              <a href="https://www.youtube.com/about/" className="link_item">정보</a>
              <a href="https://www.youtube.com/about/press/" className="link_item">보도자료</a>
              <a href="https://www.youtube.com/about/copyright/" className="link_item">저작권</a>
              <a href="/t/contact_us/" className="link_item">문의하기</a>
              <a href="https://www.youtube.com/creators/" className="link_item">크리에이터</a>
              <a href="https://www.youtube.com/ads/" className="link_item">광고</a>
              <a href="https://developers.google.com/youtube" className="link_item">개발자</a>
            </div>
            <div className="link_wrap">
              <a href="/t/terms" className="link_item">약관</a>
              <a href="https://policies.google.com/privacy?hl=ko" className="link_item">개인정보처리방침</a>
              <a href="https://www.youtube.com/about/policies/" className="link_item">정책 및 안전</a>
              <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen" className="link_item">YouTube 작동의 원리</a>
              <a href="/new" className="link_item">새로운 기능 테스트하기</a>
            </div>
            <div className="address_wrap">
              <span className="copyright">© 2020 Google LLC</span>
              <address>CEO: 선다 피차이 <br />주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.<br /> 전화: 080-822-1450(무료)</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;