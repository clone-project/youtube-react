import { ReactComponent as IconSearch } from "../../assets/icons/gnb/search.svg"
import { ReactComponent as IconBack } from "../../assets/icons/gnb/search-back.svg"
import "./GnbSearch.module.scss";

function GnbSearch() {
  return (
    <div className="search_area">
      {/*[D] 클릭 시 .input_wrap에 .open 클래스 추가 및 aria-expanded 값 true로 변경*/}
      <button type="button" className="button_search">
        <span className="blind">검색</span>
        <IconSearch />
      </button>
      <div className="input_wrap">
        <button type="button" className="button_back">
          <span className="blind">검색 취소</span>
          <IconBack />
        </button>
        <form action="" className="form_input">
          <input type="search" className="input_search" placeholder="검색" />
          <div className="keyword_wrap">
            <ul className="keyword_list">
              <li className="list_item">
                <span className="item_inner">
                  <a href="https://www.youtube.com/results?search_query=aaa" className="link_keyword">aaa</a>
                  <button type="button" className="button_delete">삭제</button>
                </span>
                <span className="deleted_keyword">추천 검색어 삭제됨</span>
              </li>
              <li className="list_item">
                <span className="item_inner">
                  <a href="https://www.youtube.com/results?search_query=bbb" className="link_keyword">bbb</a>
                  <button type="button" className="button_delete">삭제</button>
                </span>
                <span className="deleted_keyword">추천 검색어 삭제됨</span>
              </li>
              {/*[D] 삭제 클릭 시 .list_item 에 .is_deleted 클래스 추가.*/}
              <li className="list_item is_deleted">
                <span className="item_inner">
                  <a href="https://www.youtube.com/results?search_query=ccc" className="link_keyword">ccc</a>
                  <button type="button" className="button_delete">삭제</button>
                </span>
                <span className="deleted_keyword">추천 검색어 삭제됨</span>
              </li>
              <li className="list_item">
                <span className="item_inner">
                   <a href="https://www.youtube.com/results?search_query=가나다라마" className="link_keyword">가나다라마</a>
                  <button type="button" className="button_delete">삭제</button>
                </span>
                <span className="deleted_keyword">추천 검색어 삭제됨</span>
              </li>
            </ul>
          </div>
          <button type="button" className="button_submit">
            <span className="blind">검색</span>
            <IconSearch />
          </button>
        </form>
      </div>
    </div>
  )
}

export default GnbSearch;