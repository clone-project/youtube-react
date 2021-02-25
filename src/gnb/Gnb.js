import React from 'react';
import "./Gnb.scss";

class Gnb extends React.Component {
  render() {
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
          <h1 className="logo">
            <a href="/" className="link">
              <span className="blind">YouTube</span>
              <svg viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet" className="svg_style icon_youtube">
                <g viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
                  <g>
                    <path fill="#FF0000" d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31 c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56 C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30 S64.31,19.77,63,14.87z"></path>
                    <polygon fill="#FFFFFF" points="26.6,39.43 42.93,30 26.6,20.57"></polygon>
                  </g>
                  <g>
                    <g id="youtube-paths">
                      <path fill="#282828" d="M92.69,48.03c-1.24-0.84-2.13-2.14-2.65-3.91c-0.52-1.77-0.79-4.12-0.79-7.06v-4 c0-2.97,0.3-5.35,0.9-7.15c0.6-1.8,1.54-3.11,2.81-3.93c1.27-0.82,2.94-1.24,5.01-1.24c2.04,0,3.67,0.42,4.9,1.26 c1.23,0.84,2.13,2.15,2.7,3.93c0.57,1.78,0.85,4.16,0.85,7.12v4c0,2.94-0.28,5.3-0.83,7.08c-0.55,1.78-1.45,3.09-2.7,3.91 c-1.24,0.82-2.93,1.24-5.06,1.24C95.65,49.29,93.93,48.87,92.69,48.03z M99.66,43.71c0.34-0.9,0.52-2.37,0.52-4.4v-8.59 c0-1.98-0.17-3.42-0.52-4.34c-0.34-0.91-0.95-1.37-1.82-1.37c-0.84,0-1.43,0.46-1.78,1.37c-0.34,0.91-0.52,2.36-0.52,4.34v8.59 c0,2.04,0.16,3.51,0.49,4.4c0.33,0.9,0.93,1.35,1.8,1.35C98.71,45.06,99.31,44.61,99.66,43.71z"></path>
                      <path fill="#282828" d="M188.16,37.13v1.39c0,1.77,0.05,3.09,0.16,3.98c0.1,0.88,0.32,1.53,0.65,1.93 c0.33,0.4,0.84,0.61,1.53,0.61c0.93,0,1.57-0.36,1.91-1.08c0.34-0.72,0.53-1.92,0.56-3.6l5.35,0.31 c0.03,0.24,0.04,0.57,0.04,0.99c0,2.55-0.7,4.45-2.09,5.71c-1.39,1.26-3.36,1.89-5.91,1.89c-3.06,0-5.2-0.96-6.43-2.88 c-1.23-1.92-1.84-4.88-1.84-8.9v-4.81c0-4.14,0.64-7.15,1.91-9.06c1.27-1.9,3.45-2.85,6.54-2.85c2.13,0,3.76,0.39,4.9,1.17 c1.14,0.78,1.94,1.99,2.41,3.64c0.46,1.65,0.7,3.93,0.7,6.83v4.72H188.16z M188.95,25.53c-0.31,0.39-0.52,1.03-0.63,1.91 c-0.11,0.88-0.16,2.23-0.16,4.02v1.98h4.54v-1.98c0-1.77-0.06-3.11-0.18-4.02c-0.12-0.91-0.34-1.56-0.65-1.93 c-0.31-0.37-0.8-0.56-1.46-0.56C189.75,24.94,189.26,25.14,188.95,25.53z"></path>
                      <path fill="#282828" d="M77.59,36.61l-7.06-25.49h6.16l2.47,11.55c0.63,2.85,1.09,5.27,1.39,7.28h0.18 c0.21-1.44,0.67-3.85,1.39-7.24l2.56-11.6h6.16L83.7,36.61v12.23h-6.11V36.61z"></path>
                      <path fill="#282828" d="M126.45,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8 c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79 c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H126.45z"></path>
                      <path fill="#282828" d="M158.27,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8 c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79 c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H158.27z"></path>
                      <path fill="#282828" d="M143.31,16.11h-6.16v32.72h-6.07V16.11h-6.16v-4.99h18.38V16.11z" ></path>
                      <path fill="#282828" d="M178.8,25.69c-0.38-1.74-0.98-3-1.82-3.78c-0.84-0.78-1.99-1.17-3.46-1.17c-1.14,0-2.2,0.32-3.19,0.97 c-0.99,0.64-1.75,1.49-2.29,2.54h-0.05l0-14.52h-5.98v39.11h5.12l0.63-2.61h0.13c0.48,0.93,1.2,1.66,2.16,2.2 c0.96,0.54,2.02,0.81,3.19,0.81c2.1,0,3.64-0.97,4.63-2.9c0.99-1.93,1.48-4.95,1.48-9.06v-4.36 C179.36,29.84,179.17,27.43,178.8,25.69z M173.11,36.93c0,2.01-0.08,3.58-0.25,4.72c-0.16,1.14-0.44,1.95-0.83,2.43 c-0.39,0.48-0.91,0.72-1.57,0.72c-0.51,0-0.98-0.12-1.42-0.36c-0.43-0.24-0.79-0.6-1.06-1.08V27.71 c0.21-0.75,0.57-1.36,1.08-1.84c0.51-0.48,1.06-0.72,1.66-0.72c0.63,0,1.12,0.25,1.46,0.74c0.34,0.49,0.58,1.33,0.72,2.49 c0.13,1.17,0.2,2.83,0.2,4.99V36.93z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <span className="unit_nation">KR</span>
          </h1>
        </div>
        <div className="right_section">
          <div className="search_area">
           {/*[D] 클릭 시 .input_wrap에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
            <button type="button" className="button_search">
              <span className="blind">검색</span>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_search">
                <g>
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </g>
              </svg>
            </button>
            <div className="input_wrap">
              <button type="button" className="button_back">
                <span className="blind">검색 취소</span>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_back">
                  <g mirror-in-rtl="">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                  </g>
                </svg>
              </button>
              <form action="" className="form_input">
                <input type="search" className="input_search" placeholder="검색" />
                <div className="keyword_wrap">
                  <ul className="keyword_list">
                    <li className="list_item">
                      <span className="item_inner">
                        <a href="#" className="link_keyword">aaa</a>
                        <button type="button" className="button_delete">삭제</button>
                      </span>
                      <span className="deleted_keyword">추천 검색어 삭제됨</span>
                    </li>
                    <li className="list_item">
                      <span className="item_inner">
                        <a href="#" className="link_keyword">bbb</a>
                        <button type="button" className="button_delete">삭제</button>
                      </span>
                      <span className="deleted_keyword">추천 검색어 삭제됨</span>
                    </li>
                    {/*[D] 삭제 클릭 시 .list_item 에 .is_deleted 클래스 추가.*/}
                    <li className="list_item is_deleted">
                      <span className="item_inner">
                        <a href="#" className="link_keyword">ccc</a>
                        <button type="button" className="button_delete">삭제</button>
                      </span>
                      <span className="deleted_keyword">추천 검색어 삭제됨</span>
                    </li>
                    <li className="list_item">
                      <span className="item_inner">
                         <a href="#" className="link_keyword">가나다라마</a>
                        <button type="button" className="button_delete">삭제</button>
                      </span>
                      <span className="deleted_keyword">추천 검색어 삭제됨</span>
                    </li>
                  </ul>
                </div>
                <button type="button" className="button_submit">
                  <span className="blind">검색</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_submit_search">
                    <g>
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </g>
                  </svg>
                </button>
              </form>
            </div>
          </div>
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
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                       className="svg_style icon_notification_default">
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
          {/*[D] login 상태일 경우 .is-login 클래스 추가*/}
          <div id="gnb-account" className="account_area">
            <span className="logout-item">
              {/*[D] 클릭 시 .dropdown_account에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
              <button type="button" id="gnb-button-setting" className="button_setting" aria-expanded="false">
                <span className="blind">설정</span>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_setting"><g><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g></svg>
              </button>
              {/*<a href="https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dko%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=ko&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="link_login">*/}
              {/*  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" class="svg_style icon_login"><g><path d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"></path></g></svg>로그인*/}
              {/*</a>*/}
              <button type="button" id="button-login" className="link_login">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style icon_login"><g><path d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"></path></g></svg>로그인
              </button>
            </span>
            {/*[D] 클릭 시 .dropdown_account에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
            <button type="button" id="gnb-button-account" className="button_account login-item" aria-expanded="false">
              <img id="user-profile24" src="" className="image_profile" width="24" height="24" alt="프로필" />
            </button>
            <div id="gnb-dropdown-account" className="dropdown_account">
              <div className="profile_section login-item">
                <div className="image_area">
                  <img id="user-profile40" src="" className="image_profile" width="40" height="40" alt="프로필" />
                </div>
                <div className="text_area">
                  <span id="user-nickname" className="nickname"></span>
                  <span id="user-id" className="address"></span>
                  <a href="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=ko" className="link_account">Google 계정 관리</a>
                </div>
              </div>
              <div className="dropdown_section login-item">
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </g>
                  </svg>
                  <span className="text">내 채널</span>
                </a>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </g>
                  </svg>
                  <span className="text">구매 항목 및 멤버십</span>
                </a>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM10 15V9l5 3-5 3z"></path>
                    </g>
                  </svg>
                  <span className="text">YouTube 스튜디오</span>
                </a>
                <button type="button" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12zm-3 5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15z"></path>
                    </g>
                  </svg>
                  <span className="text">계정 전환</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_arrow">
                    <g mirror-in-rtl="">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                  </svg>
                </button>
                <button type="button" id="button-logout" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g mirror-in-rtl="">
                      <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    </g>
                  </svg>
                  <span className="text">로그아웃</span>
                </button>
              </div>
              <div className="dropdown_section">
                <button type="button" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M280.485281,201.514719 L284,198 L287.514719,201.514719 L292.485281,201.514719 L292.485281,206.485281 L296,210 L292.485281,213.514719 L292.485281,218.485281 L287.514719,218.485281 L284,222 L280.485281,218.485281 L275.514719,218.485281 L275.514719,213.514719 L272,210 L275.514719,206.485281 L275.514719,201.514719 L280.485281,201.514719 Z M283.726536,215.86375 C287.116026,215.86375 289.86375,213.251451 289.86375,210.029016 C289.86375,206.806581 287.116026,204.194281 283.726536,204.194281 C283.073662,204.194281 282.164855,204.396254 281.000116,204.800201 C282.532112,206.378393 283.29811,208.121331 283.29811,210.029016 C283.29811,211.9367 282.444938,213.635948 280.738594,215.126758 C282.007413,215.618086 283.003393,215.86375 283.726536,215.86375 Z" transform="translate(-272, -198)"></path>
                    </g>
                  </svg>
                  <span className="text">디자인: 기기 테마</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_arrow">
                    <g mirror-in-rtl="">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                  </svg>
                </button>
                <button type="button" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
                    </g>
                  </svg>
                  <span className="text">언어: 한국어</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_arrow">
                    <g mirror-in-rtl="">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                  </svg>
                </button>
                <button type="button" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                    </g>
                  </svg>
                  <span className="text">위치: 한국</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_arrow">
                    <g mirror-in-rtl="">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                  </svg>
                </button>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </g>
                  </svg>
                  <span className="text">설정</span>
                </a>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zM7.7 15.1A5.3 5.3 0 0 1 12 6.7a5.3 5.3 0 0 1 4.3 8.4c-.6-1.1-3-1.7-4.3-1.7-1.3 0-3.7.6-4.3 1.7zM12 8.3a2.2 2.2 0 0 0-2.2 2.2c0 1.2 1 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2c0-1.2-1-2.2-2.2-2.2zm0-2.6A6.3 6.3 0 0 0 5.7 12a6.3 6.3 0 0 0 6.3 6.3 6.3 6.3 0 0 0 6.3-6.3A6.3 6.3 0 0 0 12 5.7z"></path>
                    </g>
                  </svg>
                  <span className="text">YouTube의 내 데이터</span>
                </a>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
                    </g>
                  </svg>
                  <span className="text">고객센터</span>
                </a>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path>
                    </g>
                  </svg>
                  <span className="text">의견 보내기</span>
                </a>
                <a href="#" className="link_item">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                    <g>
                      <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path>
                    </g>
                  </svg>
                  <span className="text">단축키</span>
                </a>
              </div>
              <div className="dropdown_section">
                <button type="button" className="link_item">
                  <span className="text">제한 모드: 사용 안함</span>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_arrow">
                    <g mirror-in-rtl="">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Gnb;