import React, { useState } from 'react';
import Gnb from "../components/gnb/Gnb.js"
import MiniSidebar from "../components/mini-sidebar/MiniSidebar.js"
import Sidebar from "../components/sidebar/Sidebar.js"
import AdSection from "./ad-section/AdSection.js"
import RecommendList from "./RecommendList/RecommendList.js"
import { ReactComponent as IconAuthorized } from "../assets/icons/home/authorized.svg"
import { ReactComponent as IconOption } from "../assets/icons/home/option.svg"
import { ReactComponent as IconAdd } from "../assets/icons/home/add-list.svg"
import { ReactComponent as IconLater } from "../assets/icons/home/watch-later.svg"
import { ReactComponent as IconSave } from "../assets/icons/home/save-playlist.svg"
import { ReactComponent as IconUninterested } from "../assets/icons/home/uninterested.svg"
import { ReactComponent as IconNotRecommended } from "../assets/icons/home/not-recommended.svg"
import { ReactComponent as IconReport } from "../assets/icons/home/report.svg"
import { ReactComponent as IconMix } from "../assets/icons/home/mix-list.svg"
import { ReactComponent as IconPlay } from "../assets/icons/home/play.svg"
import { ReactComponent as IconLike } from "../assets/icons/home/like.svg"
import { ReactComponent as IconDislike } from "../assets/icons/home/dislike.svg"
import { ReactComponent as IconComment } from "../assets/icons/home/comment.svg"
import { ReactComponent as IconMore } from "../assets/icons/home/show-more.svg"
import "./App.scss";

function App() {
  const [ isOpenMenu, setOpenMenu ] = useState(false);
  const [ isLogin, setLogin ] = useState(false);

  return (
    <div className="App">
      <Gnb isOpenMenu={ isOpenMenu } setOpenMenu={ setOpenMenu } isLogin={ isLogin } setLogin={ setLogin } />
      <div className="container">
        <MiniSidebar />
        <Sidebar isOpenMenu={ isOpenMenu } setOpenMenu={ setOpenMenu } isLogin={ isLogin } setLogin={ setLogin } />
        <div id="content" className="content">
          <h2 className="blind">홈</h2>
          <AdSection />
          <div className="content_inner">
            <div className="section flow_section">
              <RecommendList />
            </div>
            <div className="section cut_in_section">
              <h3 className="section_title">최신 YouTube 게시물</h3>
              <ul className="post_list">
                {/*[D] 해상도에 따라 한줄씩만 노출. 나머지는 숨김처리후, 더보기 버튼 노출*/}
                <li className="list_item">
                  <div className="information_area">
                    <a href="/#" className="link_channel">
                      <span className="image_area">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwni7qBszEiGBkcxnJbOKY6KN8sk39FWybDHkvceERQ=s32-c-k-c0x00ffffff-no-rj-mo" width="24" height="24" className="image_channel" alt="" />
                      </span>
                      <span className="title_area">
                        <span className="title_channel">엠뚜루마뚜루 : MBC 공식 종합 채널</span>
                      </span>
                    </a>
                    <a href="/#" className="link_date"><span className="dot">•</span>3일 전(수정됨)</a>
                  </div>
                  <div className="article_area">
                    <a href="/#" className="link_image">
                      <img src="https://yt3.ggpht.com/KLasinL_kzhjzvyCiYJU277w3UUxePCYZ0C37YWeEHtkhCom7HOroBtk8bnXtEwcTKBvdgdmEkZ8=s800-c-fcrop64=1,00000000ffffffff-nd-rwa" className="image_post" width="116" height="116" alt="" />
                    </a>
                    {/*[D] .article_post 에 링크 처리*/}
                    <p className="article_post"><span>모두가 이말년을 말렸다… 주호민도, 김풍도, 슬리피도...

                  이것이 리얼 </span><a href="/#">#내돈내산</a><span> 투자법!</span>
                      <a href="/#">#침착맨</a><span> 의 노후대비 주식입문기 &lt;말년을 행복하게&gt;
                        ❤매주 목요일 오후 6시 💙

                    그 가슴 웅장해지는 시작,
                    유튜브 M드로메다에서 지금 바로 감상하세요!
                    👉 </span></p>
                  </div>
                  <div className="button_area">
                    {/*[D] 버튼 클릭 시 aria-pressed 값 변경 및 숫자 + 1*/}
                    <button type="button" className="button_like" aria-pressed="false">
                      <IconLike />
                      <span className="blind">좋아요</span>666<span className="blind">개 추가됨</span></button>
                    <button type="button" className="button_dislike" aria-pressed="false">
                      <IconDislike />
                      <span className="blind">싫어요</span>
                    </button>
                    <div className="right_wrap">
                      <a href="/#" className="link_comment">
                        <IconComment />
                        <span className="blind">댓글</span>20<span className="blind">개</span>
                      </a>
                      <div className="option_area">
                        {/*[D] 버튼 클릭 시 aria-expanded 추가*/}
                        <button type="button" className="button_option" aria-haspopup="dialog" aria-expanded="false">
                          <IconOption />
                          <span className="blind">더보기</span>
                        </button>
                        {/*[D] .button_option 클릭 시 .dropdown_option에 .open 클래스 추가*/}
                        <div className="dropdown_option">
                          <button type="button" className="item">
                            <IconReport />
                            <span className="text">신고</span>
                          </button>
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널의 게시물 추천 안함</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  <div className="information_area">
                    <a href="/#" className="link_channel">
                      <span className="image_area">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwnioVQSrskFskFsSCe8QkRHWiAV2Cleai-_4Ecpy=s32-c-k-c0x00ffffff-no-rj-mo" width="24" height="24" className="image_channel" alt="" />
                      </span>
                      <span className="title_area">
                        <span className="title_channel">안소희</span>
                      </span>
                    </a>
                    <a href="/#" className="link_date"><span className="dot">•</span>1일 전</a>
                  </div>
                  <div className="article_area">
                    <a href="/#" className="link_image">
                      <img src="https://yt3.ggpht.com/Gy5iAdfsHGdkqRfb0_SbvJ7KGayWDiGqoOlnWIQxHmeAPQYyhzAc_MNrrc25Jh8hRaWpcjPury90cQ=s1080-c-fcrop64=1,000001ecffffc1eb-nd" width="116" height="116" className="image_post" alt="" />
                    </a>
                    <p className="article_post"><span>크리스마스 잘 보냈나요?🎄
                  다들 렌즈 셀카를 보고 싶어 하셔서
                  한 장 올려요!! 😉</span></p>
                  </div>
                  <div className="button_area">
                    {/*[D] 버튼 클릭 시 aria-pressed 값 변경 및 숫자 + 1*/}
                    <button type="button" className="button_like" aria-pressed="false">
                      <IconLike />
                      <span className="blind">좋아요</span>2.4천<span className="blind">개 추가됨</span>
                    </button>
                    <button type="button" className="button_dislike" aria-pressed="false">
                      <IconDislike />
                      <span className="blind">싫어요</span>
                    </button>
                    <div className="right_wrap">
                      <a href="/#" className="link_comment">
                        <IconComment />
                        <span className="blind">댓글</span>127<span className="blind">개</span>
                      </a>
                      <div className="option_area">
                        <button type="button" className="button_option" aria-haspopup="dialog" aria-expanded="false">
                          <IconOption />
                          <span className="blind">더보기</span>
                        </button>
                        <div className="dropdown_option">
                          <button type="button" className="item">
                            <IconReport />
                            <span className="text">신고</span>
                          </button>
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널의 게시물 추천 안함</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  <div className="information_area">
                    <a href="/#" className="link_channel">
                      <span className="image_area">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwnh8x17T5B8QcY6BU5iKuG52rYQJtWDzgZNIWyL2xA=s32-c-k-c0x00ffffff-no-rj-mo" width="24" height="24" className="image_channel" alt="" />
                      </span>
                      <span className="title_area">
                        <span className="title_channel">자이언트 펭TV</span>
                      </span>
                    </a>
                    <a href="/#" className="link_date"><span className="dot">•</span>2일 전</a>
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
                      <IconLike />
                      <span className="blind">좋아요</span>5.4천<span className="blind">개 추가됨</span></button>
                    <button type="button" className="button_dislike" aria-pressed="false">
                      <IconDislike />
                      <span className="blind">싫어요</span>
                    </button>
                    <div className="right_wrap">
                      <a href="/#" className="link_comment">
                        <IconComment />
                        <span className="blind">댓글</span>464<span className="blind">개</span>
                      </a>
                      <div className="option_area">
                        <button type="button" className="button_option" aria-haspopup="dialog" aria-expanded="false">
                          <IconOption />
                          <span className="blind">더보기</span>
                        </button>
                        <div className="dropdown_option">
                          <button type="button" className="item">
                            <IconReport />
                            <span className="text">신고</span>
                          </button>
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널의 게시물 추천 안함</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button type="button" className="button_more">
                <IconMore />
                <span className="blind">더보기</span>
              </button>
            </div>
            <div className="section flow_section">
              <ul className="video_list">
                {/* 동영상 */}
                <li className="list_item">
                  <div className="video_area">
                    <a href="/#" className="link_video">
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
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                    <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime Scene</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">JTBC Entertainment</span>
                        {/*[D] 인증된 채널에만 .icon_authroized 추가*/}
                        <span className="icon_authorized">
                          <span className="blind">인증됨</span>
                          <IconAuthorized />
                        </span>
                      </a>
                      <a href="/#" className="information_wrap">
                        {/* 스트리밍 방송 */}
                        <span className="item">1.5만명 시청 중</span>
                        {/* 업로드된 방송 */}
                        <span className="item">조회수 9.4만회</span>
                        <span className="item">3시간 전</span>
                      </a>
                      {/* 스트리밍 방송 */}
                      <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
                    </div>
                    <div className="option_wrap">
                      {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가 */}
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                      <span className="time">15:43</span>
                    </a>
                    <div className="button_wrap">
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">14F 일사에프</span>
                      </a>
                      <a href="/#" className="information_wrap">
                        <span className="item">조회수 41만회</span>
                        <span className="item">1개월 전</span>
                      </a>
                    </div>
                    <div className="option_wrap">
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                        <div className="progress_bar">
                          {/*[D] 재생 이력 있는 스트리밍 영상은 width: 100%*/}
                          <div className="played_bar"></div>
                        </div>
                    </a>
                    <div className="button_wrap">
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                    <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">Sleepify</span>
                      </a>
                      <a href="/#" className="information_wrap">
                        <span className="item">2천명 시청 중</span>
                      </a>
                      <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
                    </div>
                    <div className="option_wrap">
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                        <div className="playlist_information">
                          <span className="blind">영상 수</span>
                          <div className="text">50+</div>
                          <IconMix />
                        </div>
                        <div className="layer_dimmed">
                          <IconPlay />
                          <span className="text">모두 재생</span>
                        </div>
                    </a>
                  </div>
                  <div className="text_area">
                    <div className="text_wrap">
                      <a href="/#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                      <a href="/#" className="information_wrap">
                        <span className="item">이수현, Crush, 정승환 등</span>
                      </a>
                    </div>
                    <div className="option_wrap">
                      {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
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
                    <a href="/#" className="link_video">
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
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                    <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime Scene</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">JTBC Entertainment</span>
                        {/*[D] 인증된 채널에만 .icon_authroized 추가*/}
                        <span className="icon_authorized">
                          <span className="blind">인증됨</span>
                          <IconAuthorized />
                        </span>
                      </a>
                      <a href="/#" className="information_wrap">
                        {/* 스트리밍 방송 */}
                        <span className="item">1.5만명 시청 중</span>
                        {/* 업로드된 방송 */}
                        <span className="item">조회수 9.4만회</span>
                        <span className="item">3시간 전</span>
                      </a>
                      {/* 스트리밍 방송 */}
                      <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
                    </div>
                    <div className="option_wrap">
                      {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                      <span className="time">15:43</span>
                    </a>
                    <div className="button_wrap">
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">14F 일사에프</span>
                      </a>
                      <a href="/#" className="information_wrap">
                        <span className="item">조회수 41만회</span>
                        <span className="item">1개월 전</span>
                      </a>
                    </div>
                    <div className="option_wrap">
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                      <div className="progress_bar">
                        {/*[D] 재생 이력 있는 스트리밍 영상은 width: 100%*/}
                        <div className="played_bar"></div>
                      </div>
                    </a>
                    <div className="button_wrap">
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                    <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">Sleepify</span>
                      </a>
                      <a href="/#" className="information_wrap">
                        <span className="item">2천명 시청 중</span>
                      </a>
                      <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
                    </div>
                    <div className="option_wrap">
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                      <div className="playlist_information">
                        <span className="blind">영상 수</span>
                        <div className="text">50+</div>
                        <IconMix />
                      </div>
                      <div className="layer_dimmed">
                        <IconPlay />
                        <span className="text">모두 재생</span>
                      </div>
                    </a>
                  </div>
                  <div className="text_area">
                    <div className="text_wrap">
                      <a href="/#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                      <a href="/#" className="information_wrap">
                        <span className="item">이수현, Crush, 정승환 등</span>
                      </a>
                    </div>
                    <div className="option_wrap">
                      {/*[D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button type="button" className="button_more">
                <IconMore />
                <span className="blind">더보기</span>
              </button>
            </div>
            <div className="section flow_section">
              <ul className="video_list">
                {/* 동영상 */}
                <li className="list_item">
                  <div className="video_area">
                    <a href="/#" className="link_video">
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
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                    <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GiBs36NV9XAZnzVv-l32UW9wriHuhVb4YRmaQ=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">[연말 특집🎄] '크라임씬' 시즌1~3 고화질 라이브 스트리밍!! Crime Scene</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">JTBC Entertainment</span>
                        {/*[D] 인증된 채널에만 .icon_authroized 추가 */}
                        <span className="icon_authorized">
                          <span className="blind">인증됨</span>
                          <IconAuthorized />
                        </span>
                      </a>
                      <a href="/#" className="information_wrap">
                        {/*  스트리밍 방송 */}
                        <span className="item">1.5만명 시청 중</span>
                        {/* 업로드된 방송 */}
                        <span className="item">조회수 9.4만회</span>
                        <span className="item">3시간 전</span>
                      </a>
                      {/*  스트리밍 방송 */}
                      <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
                    </div>
                    <div className="option_wrap">
                      {/* [D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/5LXlH7Jdw2Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3vCFy1-rBwaDVc8eVkCFSJjgByg" className="thumbnail" width="36" height="36" alt="" />
                      <span className="time">15:43</span>
                    </a>
                    <div className="button_wrap">
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GjB1lPQxLVo0vu7b753hUQ3Or19BV31mPxi=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">지금 주식, 비트코인, 부동산 사야되나 말아야되나? '돈의 역사' 홍춘욱 박사가 알려주는 2021년 경제 전망 / 14F</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">14F 일사에프</span>
                      </a>
                      <a href="/#" className="information_wrap">
                        <span className="item">조회수 41만회</span>
                        <span className="item">1개월 전</span>
                      </a>
                    </div>
                    <div className="option_wrap">
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/_3IphE64yRA/hq720_live.jpg?sqp=COyezf8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHr_7tvymB0FuAoTJK8xtBwfvo8A" className="thumbnail" width="36" height="36" alt="" />
                      <div className="progress_bar">
                        {/*[D] 재생 이력 있는 스트리밍 영상은 width: 100%*/}
                        <div className="played_bar"></div>
                      </div>
                    </a>
                    <div className="button_wrap">
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconLater/>
                        </span>
                        <span className="text">나중에 볼 동영상</span>
                      </button>
                      <button type="button" className="button_add">
                        <span className="icon">
                          <IconAdd />
                        </span>
                        <span className="text">목록에 추가</span>
                      </button>
                    </div>
                    <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
                  </div>
                  <div className="text_area">
                    <a href="/#" className="link_profile">
                      <img src="https://yt3.ggpht.com/a-/AOh14GgiNzHmWPZa3-YEcpCpWEMZARYUCdEtraQC9Q=s68-c-k-c0x00ffffff-no-rj-mo" className="image_channel" width="36" height="36" alt="" />
                    </a>
                    <div className="text_wrap">
                      <a href="/#" className="link_title">Classical Piano Music with Fireplace 24/7 - Mozart, Chopin, Beethoven, Bach, Debussy, Grieg, Liszt</a>
                      <a href="/#" className="link_channel">
                        <span className="channel">Sleepify</span>
                      </a>
                      <a href="/#" className="information_wrap">
                        <span className="item">2천명 시청 중</span>
                      </a>
                      <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
                    </div>
                    <div className="option_wrap">
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconAdd />
                            <span className="text">목록에 추가</span>
                          </button>
                          <button type="button" className="item">
                            <IconLater/>
                            <span className="text">나중에 볼 동영상에 저장</span>
                          </button>
                          <button type="button" className="item">
                            <IconSave />
                            <span className="text">재생목록에 저장</span>
                          </button>
                        </div>
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
                            <span className="text">관심 없음</span>
                          </button>
                          <button type="button" className="item">
                            <IconNotRecommended />
                            <span className="text">채널 추천 안함</span>
                          </button>
                          <button type="button" className="item">
                            <IconReport />
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
                    <a href="/#" className="link_video">
                      <img src="https://i.ytimg.com/vi/0GxM9_qHCFo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADdDzdXaSjNY47PhB7TBTrzYaJgw" className="thumbnail" width="36" height="36" alt="" />
                      <div className="playlist_information">
                        <span className="blind">영상 수</span>
                        <div className="text">50+</div>
                        <IconMix />
                      </div>
                      <div className="layer_dimmed">
                        <IconPlay />
                        <span className="text">모두 재생</span>
                      </div>
                    </a>
                  </div>
                  <div className="text_area">
                    <div className="text_wrap">
                      <a href="/#" className="link_title">믹스 - 🎤 이수현(Lee Su-hyun)x크러쉬(Crush)의 달콤한 목소리로 재탄생한 ′Romeo N Juliet′♪ 〈비긴어게인 코리아(beginagainkorea)〉 9회</a>
                      <a href="/#" className="information_wrap">
                        <span className="item">이수현, Crush, 정승환 등</span>
                      </a>
                    </div>
                    <div className="option_wrap">
                      {/* [D] 버튼 클릭시 .dropdown_option에 .open 추가*/}
                      <button type="button" className="button_option">
                        <span className="blind">작업 메뉴</span>
                        <IconOption />
                      </button>
                      <div className="dropdown_option">
                        <div className="dropdown_section">
                          <button type="button" className="item">
                            <IconUninterested />
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

export default App;
