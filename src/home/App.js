import React from 'react';
import Gnb from "../components/gnb/Gnb.js"
import MiniSidebar from "../components/mini-sidebar/MiniSidebar.js"
import Sidebar from "../components/sidebar/Sidebar.js"
import AdSection from "./ad-section/AdSection.js"
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Gnb />
        <div className="container">
          <MiniSidebar />
          <Sidebar />
          <div id="content" className="content">
            <h2 className="blind">홈</h2>
            <AdSection />
            <div className="content_inner">
              <div className="section flow_section">
                <ul className="video_list">
                  {/*동영상*/}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img id="thumbnail-video" src="https://i.ytimg.com/vi/WbUVK6mgaFk/hq720_live.jpg?sqp=CJDTp_8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYHFFcvnPQK9yHYmrvNfNb0XuNTQ" className="thumbnail" width="36" height="36" alt="" />
                        {/*[D] 스트리밍일 경우 .time 미노출*/}
                        <span id="remained-time" className="time">2:35</span>
                        <div className="progress_bar">
                          {/*[D] 재생된 퍼센티지를 inline-style로 추가. ex) width: 50%*/}
                          <div id="played-bar" className="played_bar"></div>
                        </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                      </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                      </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" id="title-video" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime
                          Scene</a>
                        <a href="#" id="link-channel" className="link_channel">
                          <span id="name-channel" className="channel">JTBC Entertainment</span>
                          {/*[D] 인증된 채널에만 .icon_authroized 추가*/}
                          <span id="authorized-channel" className="icon_authorized">
                        <span className="blind">인증됨</span>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                      </span>
                        </a>
                        <a href="#" className="information_wrap">
                          {/* 스트리밍 방송 */}
                          <span className="item">1.5만명 시청 중</span>
                          {/* 업로드된 방송 */}
                          <span className="item">조회수 9.4만회</span>
                          <span className="item">3시간 전</span>
                        </a>
                        {/* 스트리밍 방송 */}
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 일반 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                        <span className="time">15:43</span>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                        <a href="#" className="link_channel">
                          <span className="channel">14F 일사에프</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">조회수 41만회</span>
                          <span className="item">1개월 전</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 스트리밍 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                        <div className="progress_bar">
                          {/*[D] 재생 이력 있는 스트리밍 영상은 style= width: 100%*/}
                          <div className="played_bar"></div>
                        </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                        <a href="#" className="link_channel">
                          <span className="channel">Sleepify</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">2천명 시청 중</span>
                        </a>
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 재생목록 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                          <div className="playlist_information">
                            <span className="blind">영상 수</span>
                            <div className="text">50+</div>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                              <g>
                                <path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="layer_dimmed">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_play">
                              <g>
                                <path d="M8 5v14l11-7z"></path>
                              </g>
                            </svg>
                            <span className="text">모두 재생</span>
                          </div>
                      </a>
                    </div>
                    <div className="text_area">
                      <div className="text_wrap">
                        <a href="#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                        <a href="#" className="information_wrap">
                          <span className="item">이수현, Crush, 정승환 등</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section cut_in_section">
                <h3 className="section_title">최신 YouTube 게시물</h3>
                <ul className="post_list">
                  {/*[D] 해상도에 따라 한줄씩만 노출. 나머지는 숨김처리후, 더보기 버튼 노출*/}
                  <li className="list_item">
                    <div className="information_area">
                      <a href="#" className="link_channel">
                        <span className="image_area">
                          <img src="https://yt3.ggpht.com/ytc/AAUvwni7qBszEiGBkcxnJbOKY6KN8sk39FWybDHkvceERQ=s32-c-k-c0x00ffffff-no-rj-mo" width="24" height="24" className="image_channel" alt="" />
                        </span>
                        <span className="title_area">
                          <span className="title_channel">엠뚜루마뚜루 : MBC 공식 종합 채널</span>
                        </span>
                      </a>
                      <a href="#" className="link_date"><span className="dot">•</span>3일 전(수정됨)</a>
                    </div>
                    <div className="article_area">
                      <a href="#" className="link_image">
                        <img src="https://yt3.ggpht.com/KLasinL_kzhjzvyCiYJU277w3UUxePCYZ0C37YWeEHtkhCom7HOroBtk8bnXtEwcTKBvdgdmEkZ8=s800-c-fcrop64=1,00000000ffffffff-nd-rwa" className="image_post" width="116" height="116" alt="" />
                      </a>
                      {/*[D] .article_post 에 링크 처리*/}
                      <p className="article_post"><span>모두가 이말년을 말렸다… 주호민도, 김풍도, 슬리피도...

                    이것이 리얼 </span><a href="#">#내돈내산</a><span> 투자법!</span>
                        <a href="#">#침착맨</a><span> 의 노후대비 주식입문기 &lt;말년을 행복하게&gt;
                          ❤매주 목요일 오후 6시 💙

                      그 가슴 웅장해지는 시작,
                      유튜브 M드로메다에서 지금 바로 감상하세요!
                      👉 </span></p>
                    </div>
                    <div className="button_area">
                      {/*[D] 버튼 클릭 시 aria-pressed 값 변경 및 숫자 + 1*/}
                      <button type="button" className="button_like" aria-pressed="false">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                          <g>
                            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                          </g>
                        </svg>
                        <span className="blind">좋아요</span>666<span className="blind">개 추가됨</span></button>
                      <button type="button" className="button_dislike" aria-pressed="false">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                          <g>
                            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                          </g>
                        </svg>
                        <span className="blind">싫어요</span>
                      </button>
                      <div className="right_wrap">
                        <a href="#" className="link_comment">
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                            <g>
                              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </g>
                          </svg>
                          <span className="blind">댓글</span>20<span className="blind">개</span>
                        </a>
                        <div className="option_area">
                          {/*[D] 버튼 클릭 시 aria-expanded 추가*/}
                          <button type="button" className="button_option" aria-haspopup="dialog" aria-expanded="false">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                              <g>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </g>
                            </svg>
                            <span className="blind">더보기</span>
                          </button>
                          {/*[D] .button_option 클릭 시 .dropdown_option에 .open 클래스 추가*/}
                          <div className="dropdown_option">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널의 게시물 추천 안함</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list_item">
                    <div className="information_area">
                      <a href="#" className="link_channel">
                        <span className="image_area">
                          <img src="https://yt3.ggpht.com/ytc/AAUvwnioVQSrskFskFsSCe8QkRHWiAV2Cleai-_4Ecpy=s32-c-k-c0x00ffffff-no-rj-mo" width="24" height="24" className="image_channel" alt="" />
                        </span>
                        <span className="title_area">
                          <span className="title_channel">안소희</span>
                        </span>
                      </a>
                      <a href="#" className="link_date"><span className="dot">•</span>1일 전</a>
                    </div>
                    <div className="article_area">
                      <a href="#" className="link_image">
                        <img src="https://yt3.ggpht.com/Gy5iAdfsHGdkqRfb0_SbvJ7KGayWDiGqoOlnWIQxHmeAPQYyhzAc_MNrrc25Jh8hRaWpcjPury90cQ=s1080-c-fcrop64=1,000001ecffffc1eb-nd" width="116" height="116" className="image_post" alt="" />
                      </a>
                      <p className="article_post"><span>크리스마스 잘 보냈나요?🎄
                    다들 렌즈 셀카를 보고 싶어 하셔서
                    한 장 올려요!! 😉</span></p>
                    </div>
                    <div className="button_area">
                      {/*[D] 버튼 클릭 시 aria-pressed 값 변경 및 숫자 + 1*/}
                      <button type="button" className="button_like" aria-pressed="false">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                          <g>
                            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                          </g>
                        </svg>
                        <span className="blind">좋아요</span>2.4천<span className="blind">개 추가됨</span>
                      </button>
                      <button type="button" className="button_dislike" aria-pressed="false">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                          <g>
                            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                          </g>
                        </svg>
                        <span className="blind">싫어요</span>
                      </button>
                      <div className="right_wrap">
                        <a href="#" className="link_comment">
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                            <g>
                              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </g>
                          </svg>
                          <span className="blind">댓글</span>127<span className="blind">개</span>
                        </a>
                        <div className="option_area">
                          <button type="button" className="button_option" aria-haspopup="dialog" aria-expanded="false">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                              <g>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </g>
                            </svg>
                            <span className="blind">더보기</span>
                          </button>
                          <div className="dropdown_option">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널의 게시물 추천 안함</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list_item">
                    <div className="information_area">
                      <a href="#" className="link_channel">
                        <span className="image_area">
                          <img src="https://yt3.ggpht.com/ytc/AAUvwnh8x17T5B8QcY6BU5iKuG52rYQJtWDzgZNIWyL2xA=s32-c-k-c0x00ffffff-no-rj-mo" width="24" height="24" className="image_channel" alt="" />
                        </span>
                        <span className="title_area">
                          <span className="title_channel">자이언트 펭TV</span>
                        </span>
                      </a>
                      <a href="#" className="link_date"><span className="dot">•</span>2일 전</a>
                    </div>
                    <div className="article_area">
                      <p className="article_post"><span>📣방송 일정 변동사항 공지드립니다

                    펭클럽 여러분, 메리 펭리스마스!🎄
                    크리스마스 연휴 건강하게 즐겁게 보내고 계신가요?

                    펭TV는 펭수와 제작진의 안전을 위해 12/28(월), 1/4(월), 1/11(월) 방송을 재방송으로 대체하게 되었습니다.

                    깜짝 업로드 일정이나 추가 변동 사항이 있을 시 또 공지 드리도록 하겠습니다!

                    금요일마다 더 알차고 재밌는 콘텐츠로 찾아올게요! 모두 안전한 연말 보내윰!🪄✨ 펭러뷰💙</span></p>
                    </div>
                    <div className="button_area">
                      {/*[D] 버튼 클릭 시 aria-pressed 값 변경 및 숫자 + 1*/}
                      <button type="button" className="button_like" aria-pressed="false">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                          <g>
                            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                          </g>
                        </svg>
                        <span className="blind">좋아요</span>5.4천<span className="blind">개 추가됨</span></button>
                      <button type="button" className="button_dislike" aria-pressed="false">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                          <g>
                            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                          </g>
                        </svg>
                        <span className="blind">싫어요</span>
                      </button>
                      <div className="right_wrap">
                        <a href="#" className="link_comment">
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                            <g>
                              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </g>
                          </svg>
                          <span className="blind">댓글</span>464<span className="blind">개</span>
                        </a>
                        <div className="option_area">
                          <button type="button" className="button_option" aria-haspopup="dialog" aria-expanded="false">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                              <g>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </g>
                            </svg>
                            <span className="blind">더보기</span>
                          </button>
                          <div className="dropdown_option">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널의 게시물 추천 안함</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <button type="button" className="button_more">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_more">
                    <g>
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </g>
                  </svg>
                  <span className="blind">더보기</span>
                </button>
              </div>
              <div className="section flow_section">
                <ul className="video_list">
                  {/* 동영상 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/WbUVK6mgaFk/hq720_live.jpg?sqp=CJDTp_8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYHFFcvnPQK9yHYmrvNfNb0XuNTQ" className="thumbnail" width="36" height="36" alt="" />
                          {/*[D] 스트리밍일 경우 .time 미노출*/}
                          <span className="time">2:35</span>
                          <div className="progress_bar">
                            {/*[D] 재생된 퍼센티지를 inline-style로 추가.*/}
                            <div className="played_bar"></div>
                          </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime Scene</a>
                        <a href="#" className="link_channel">
                          <span className="channel">JTBC Entertainment</span>
                          {/*[D] 인증된 채널에만 .icon_authroized 추가*/}
                          <span className="icon_authorized">
                            <span className="blind">인증됨</span>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                          </span>
                        </a>
                        <a href="#" className="information_wrap">
                          {/* 스트리밍 방송 */}
                          <span className="item">1.5만명 시청 중</span>
                          {/* 업로드된 방송 */}
                          <span className="item">조회수 9.4만회</span>
                          <span className="item">3시간 전</span>
                        </a>
                        {/* 스트리밍 방송 */}
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가 */}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 일반 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                        <span className="time">15:43</span>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                        <a href="#" className="link_channel">
                          <span className="channel">14F 일사에프</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">조회수 41만회</span>
                          <span className="item">1개월 전</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 스트리밍 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                          <div className="progress_bar">
                            {/*[D] 재생 이력 있는 스트리밍 영상은 width: 100%*/}
                            <div className="played_bar"></div>
                          </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                        <a href="#" className="link_channel">
                          <span className="channel">Sleepify</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">2천명 시청 중</span>
                        </a>
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 재생목록 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                          <div className="playlist_information">
                            <span className="blind">영상 수</span>
                            <div className="text">50+</div>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                              <g>
                                <path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="layer_dimmed">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_play">
                              <g>
                                <path d="M8 5v14l11-7z"></path>
                              </g>
                            </svg>
                            <span className="text">모두 재생</span>
                          </div>
                      </a>
                    </div>
                    <div className="text_area">
                      <div className="text_wrap">
                        <a href="#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                        <a href="#" className="information_wrap">
                          <span className="item">이수현, Crush, 정승환 등</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section cut_in_section">
                <h3 className="section_title">인기</h3>
                <ul className="video_list">
                  {/* 동영상 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/WbUVK6mgaFk/hq720_live.jpg?sqp=CJDTp_8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYHFFcvnPQK9yHYmrvNfNb0XuNTQ" className="thumbnail" width="36" height="36" alt="" />
                        {/*[D] 스트리밍일 경우 .time 미노출*/}
                        <span className="time">2:35</span>
                        <div className="progress_bar">
                          {/*[D] 재생된 퍼센티지를 inline-style로 추가.*/}
                          <div className="played_bar"></div>
                        </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime Scene</a>
                        <a href="#" className="link_channel">
                          <span className="channel">JTBC Entertainment</span>
                          {/*[D] 인증된 채널에만 .icon_authroized 추가*/}
                          <span className="icon_authorized">
                        <span className="blind">인증됨</span>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                      </span>
                        </a>
                        <a href="#" className="information_wrap">
                          {/* 스트리밍 방송 */}
                          <span className="item">1.5만명 시청 중</span>
                          {/* 업로드된 방송 */}
                          <span className="item">조회수 9.4만회</span>
                          <span className="item">3시간 전</span>
                        </a>
                        {/* 스트리밍 방송 */}
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 일반 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                        <span className="time">15:43</span>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                        <a href="#" className="link_channel">
                          <span className="channel">14F 일사에프</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">조회수 41만회</span>
                          <span className="item">1개월 전</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 스트리밍 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                        <div className="progress_bar">
                          {/*[D] 재생 이력 있는 스트리밍 영상은 width: 100%*/}
                          <div className="played_bar"></div>
                        </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                        <a href="#" className="link_channel">
                          <span className="channel">Sleepify</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">2천명 시청 중</span>
                        </a>
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 재생목록 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                        <div className="playlist_information">
                          <span className="blind">영상 수</span>
                          <div className="text">50+</div>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                            <g>
                              <path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="layer_dimmed">
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_play">
                            <g>
                              <path d="M8 5v14l11-7z"></path>
                            </g>
                          </svg>
                          <span className="text">모두 재생</span>
                        </div>
                      </a>
                    </div>
                    <div className="text_area">
                      <div className="text_wrap">
                        <a href="#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                        <a href="#" className="information_wrap">
                          <span className="item">이수현, Crush, 정승환 등</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <button type="button" className="button_more">
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_more">
                    <g>
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </g>
                  </svg>
                  <span className="blind">더보기</span>
                </button>
              </div>
              <div className="section flow_section">
                <ul className="video_list">
                  {/* 동영상 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/WbUVK6mgaFk/hq720_live.jpg?sqp=CJDTp_8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYHFFcvnPQK9yHYmrvNfNb0XuNTQ" className="thumbnail" width="36" height="36" alt="" />
                        {/* [D] 스트리밍일 경우 .time 미노출*/}
                        <span className="time">2:35</span>
                        <div className="progress_bar">
                          {/*[D] 재생된 퍼센티지를 inline-style로 추가.*/}
                          <div className="played_bar"></div>
                        </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime Scene</a>
                        <a href="#" className="link_channel">
                          <span className="channel">JTBC Entertainment</span>
                          {/*[D] 인증된 채널에만 .icon_authroized 추가 */}
                          <span className="icon_authorized">
                            <span className="blind">인증됨</span>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                          </span>
                        </a>
                        <a href="#" className="information_wrap">
                          {/*  스트리밍 방송 */}
                          <span className="item">1.5만명 시청 중</span>
                          {/* 업로드된 방송 */}
                          <span className="item">조회수 9.4만회</span>
                          <span className="item">3시간 전</span>
                        </a>
                        {/*  스트리밍 방송 */}
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        {/* [D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 일반 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                        <span className="time">15:43</span>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                        <a href="#" className="link_channel">
                          <span className="channel">14F 일사에프</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">조회수 41만회</span>
                          <span className="item">1개월 전</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 동영상 : 스트리밍 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                        <div className="progress_bar">
                          {/*[D] 재생 이력 있는 스트리밍 영상은 width: 100%*/}
                          <div className="played_bar"></div>
                        </div>
                      </a>
                      <div className="button_wrap">
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                          </span>
                          <span className="text">나중에 볼 동영상</span>
                        </button>
                        <button type="button" className="button_add">
                          <span className="icon">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                          </span>
                          <span className="text">목록에 추가</span>
                        </button>
                      </div>
                      <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                    </div>
                    <div className="text_area">
                      <a href="#" className="link_profile">
                        <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                      </a>
                      <div className="text_wrap">
                        <a href="#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                        <a href="#" className="link_channel">
                          <span className="channel">Sleepify</span>
                        </a>
                        <a href="#" className="information_wrap">
                          <span className="item">2천명 시청 중</span>
                        </a>
                        <a href="#" className="badge_streaming">실시간 스트리밍 중</a>
                      </div>
                      <div className="option_wrap">
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path>
                                </g>
                              </svg>
                              <span className="text">목록에 추가</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
                                </g>
                              </svg>
                              <span className="text">나중에 볼 동영상에 저장</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                                </g>
                              </svg>
                              <span className="text">재생목록에 저장</span>
                            </button>
                          </div>
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </g>
                              </svg>
                              <span className="text">채널 추천 안함</span>
                            </button>
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g>
                                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                                </g>
                              </svg>
                              <span className="text">신고</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 재생목록 */}
                  <li className="list_item">
                    <div className="video_area">
                      <a href="#" className="link_video">
                        <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                        <div className="playlist_information">
                          <span className="blind">영상 수</span>
                          <div className="text">50+</div>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                            <g>
                              <path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="layer_dimmed">
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_play">
                            <g>
                              <path d="M8 5v14l11-7z"></path>
                            </g>
                          </svg>
                          <span className="text">모두 재생</span>
                        </div>
                      </a>
                    </div>
                    <div className="text_area">
                      <div className="text_wrap">
                        <a href="#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                        <a href="#" className="information_wrap">
                          <span className="item">이수현, Crush, 정승환 등</span>
                        </a>
                      </div>
                      <div className="option_wrap">
                        {/* [D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                        <button type="button" className="button_option">
                          <span className="blind">작업 메뉴</span>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="icon_option">
                            <g>
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </g>
                          </svg>
                        </button>
                        <div className="dropdown_option">
                          <div className="dropdown_section">
                            <button type="button" className="item">
                              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="svg_style">
                                <g className="style-scope yt-icon">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                                </g>
                              </svg>
                              <span className="text">관심 없음</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
