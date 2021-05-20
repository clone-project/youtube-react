import {ReactComponent as IconLater} from "../../assets/icons/home/watch-later.svg";
import {ReactComponent as IconAdd} from "../../assets/icons/home/add-list.svg";
import {ReactComponent as IconAuthorized} from "../../assets/icons/home/authorized.svg";
import {ReactComponent as IconOption} from "../../assets/icons/home/option.svg";
import {ReactComponent as IconSave} from "../../assets/icons/home/save-playlist.svg";
import {ReactComponent as IconUninterested} from "../../assets/icons/home/uninterested.svg";
import {ReactComponent as IconNotRecommended} from "../../assets/icons/home/not-recommended.svg";
import {ReactComponent as IconReport} from "../../assets/icons/home/report.svg";

function VideoItem(props) {
  const { data } = props;
  const { streaming, fullTime, playedTime, thumbnail, channel, title, link, date, count } = data;
  const playedWidth = playedTime / fullTime * 100;
  const now = new Date();

  function formatRemainedTime(full, played) {
    const remainedTime = full - played;
    let hour = Math.floor(remainedTime/3600);
    let min = Math.floor((remainedTime - (hour*3600))/60);
    let sec = remainedTime - (hour*3600) - (min*60);

    function addZero(num) {
      return (num < 10 ? '0' : '') + num;
    }

    if(hour > 0) return hour + ':' + addZero(min) + ':' + addZero(sec);
    else return min + ':' + addZero(sec);
  }

  return (
    <li className="list_item">
      <div className="video_area">
        <a href={ link } className="link_video">
          <img src={ thumbnail } className="thumbnail" width="36" height="36" alt="" />
          { !streaming &&
            <span id="remained-time" className="time">{ formatRemainedTime(fullTime, playedTime) }</span>
          }
          <div className="progress_bar">
            <div className="played_bar" style={{ width: playedWidth + '%'}}></div>
          </div>
        </a>
        <div className="button_wrap">
          <button type="button" className="button_add">
            <span className="icon"><IconLater /></span>
            <span className="text">나중에 볼 동영상</span>
          </button>
          <button type="button" className="button_add">
            <span className="icon"><IconAdd /></span>
            <span className="text">목록에 추가</span>
          </button>
        </div>
        {
          //임시 숨김
          false &&
          <div className="additional"><span className="point">JTBC Voyage</span> 시청자가 이 채널을 시청합니다.</div>
        }
      </div>
      <div className="text_area">
        <a href={ channel.link } className="link_profile">
          <img src={ channel.profile } className="image_channel" width="36" height="36" alt="" />
        </a>
        <div className="text_wrap">
          <a href={ link } id="title-video" className="link_title">{ title }</a>
          <a href={ channel.link } id="link-channel" className="link_channel">
            <span id="name-channel" className="channel">{ channel.name }</span>
            {
              channel.authorized &&
              <span className="icon_authorized"><span className="blind">인증됨</span><IconAuthorized/></span>
            }
          </a>
          <a href="/#" className="information_wrap">
            {/* 스트리밍 방송 */}
            {
              streaming &&
              <span className="item">1.5만명 시청 중</span>
            }
            {/* 업로드된 방송 */}
            <span className="item">조회수 9.4만회</span>
            <span className="item">3시간 전</span>
          </a>
          {/* 스트리밍 방송 */}
          {
            streaming &&
            <a href="/#" className="badge_streaming">실시간 스트리밍 중</a>
          }
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
                <IconLater />
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
  )
}

export default VideoItem;