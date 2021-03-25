<?php
  include_once($_SERVER['DOCUMENT_ROOT']."/modernhouse/header.php");
?>

  <div id="productdetail_content1">
    <div class="wrapper">
      <div>
        <span>HOME</span>
        <i class="fas fa-chevron-right"></i>
        <select name="cate">
          <option value="주방">주방</option>
          <option value="가구" selected="selected">가구</option>
          <option value="수납">수납</option>
          <option value="욕실">욕실</option>
          <option value="침구">침구</option>
          <option value="패브릭">패브릭</option>
          <option value="홈데코">홈데코</option>
          <option value="라이프">라이프</option>
          <option value="키즈">키즈</option>
        </select>
        <i class="fas fa-chevron-right"></i>
        <select name="cate">
          <option value="DIY">DIY</option>
          <option value="침실가구">침실가구</option>
          <option value="거실가구">거실가구</option>
          <option value="주방가구">주방가구</option>
          <option value="서재가구" selected="selected">서재가구</option>
          <option value="학생/아동가구">학생/아동가구</option>
          <option value="아웃도어 가구">아웃도어 가구</option>
        </select>
        <i class="fas fa-chevron-right"></i>
        <select name="cate">
          <option value="책상" selected="selected">책상</option>
          <option value="책장">책장</option>
          <option value="의자">의자</option>
          <option value="수납/선반">수납/선반</option>
          <option value="소가구">소가구</option>
        </select>
      </div><!--네비게이터-->
    </div><!--wrapper-->
  </div><!--content1:네비게이터-->

  <div id="productdetail_content2">
    <div class="wrapper clearfix">
      <div class="product_img">
        <div><img src="/modernhouse/img/detail/detail1.jpg" alt="detail"></div><!--대표이미지-->
        <div class="clearfix">
          <div><img src="/modernhouse/img/detail/detail1.jpg" alt="detail"></div>
          <div><img src="/modernhouse/img/detail/detail2.jpg" alt="detail"></div>
          <div><img src="/modernhouse/img/detail/detail3.jpg" alt="detail"></div>
        </div><!--서브이미지-->
      </div><!--제품이미지-->
      <div class="product_info">
        <p>덴 2000 전면책상세트V3</p>
        <p>모던하우스 <span>브랜드샵 <i class="fas fa-chevron-right"></i></span></p>
        <div>
          <div>
            <span>정상가</span>
            <span>199,000원</span>
          </div>
          <div>
            <span>할인판매가</span>
            <span>94,000원 <span>[53%]</span></span>
          </div>
          <div>
            <span>배송비</span>
            <span>5,000원</span>
          </div>
          <div>
            <span>발송예정일</span>
            <span>04월 03일 (금) 이내</span>
          </div>
          <div>
            <span>멤버십 포인트</span>
            <span>190원</span>
          </div>
          <div>
            <span>주문 수량</span>
            <input type="button" value="-" class="minus"><input type="text" value="1" class="quantity"><input type="button" value="+" class="plus">
          </div>
          <div>
            <span>옵션 선택</span>
            <select name="option" id="select">
              <option value="none" selected="selected">옵션을 선택해 주세요.</option>
              <option value="option1">덴 2000 책상(+40,000)</option>
              <option value="option2">덴 2000 책장(+54,000)</option>
              <option value="option3">덴 2000 책상+책장세트(+94,000)</option>
            </select>
          </div>
        </div>
        <p>총 상품금액 <span class="amount">0</span>원</p>
        <div class="clearfix">
          <div>
            <a href="/modernhouse/order/index.php">바로구매</a>
          </div>
          <div class="cart">
            <a>장바구니</a>
          </div>
          <div class="wish">
            <a><i class="fas fa-heart"></i></a>
          </div>
        </div><!--버튼-->
        <div class="clearfix">
          <div>
            <p>리뷰평점</p>
            <p>4.5</p>
            <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></p>
          </div><!--리뷰평점-->
          <div>
            <p>포토리뷰</p>
            <div class="clearfix">
              <i class="fas fa-chevron-left"></i>
              <div><img src="/modernhouse/img/detail/review1.jpg" alt="review"></div>
              <div><img src="/modernhouse/img/detail/review2.jpg" alt="review"></div>
              <div><img src="/modernhouse/img/detail/review3.jpg" alt="review"></div>
              <div><img src="/modernhouse/img/detail/review4.jpg" alt="review"></div>
              <i class="fas fa-chevron-right"></i>
            </div><!--이미지-->
          </div><!--포토리뷰-->
        </div><!--포토리뷰-->
      </div><!--제품정보-->
    </div><!--wrapper-->
  </div><!--content2:상품 주요정보-->

  <div id="productdetail_content3">
    <div class="wrapper">
      <div class="clearfix">
        <div class="active4"><a href="#productdetail_content3">상품정보</a></div>
        <div><a href="#detail">상품정보 공시</a></div>
        <div><a href="#productdetail_content5">상품 후기</a></div>
        <div><a href="#productdetail_content7">상품 문의</a></div>
        <div><a href="#productdetail_content8">배송/반품/교환</a></div>
      </div><!--위치이동 버튼-->
      <div>
        <div><img src="/modernhouse/img/detail/detail_info1-1.jpg" alt="detail info"></div>
        <div id="detail"><img src="/modernhouse/img/detail/detail_info1-2.jpg" alt="detail info"></div>
      </div><!--상세페이지 정보-->
    </div><!--wrapper-->
  </div><!--content3:상품 상세페이지-->

  <div id="productdetail_content4">
    <div class="wrapper">
      <div>
        <p>YOU MAY ALSO LIKE</p>
        <span>이 상품을 조회한 고객님들이 같이 조회한 상품</span>
        <div class="rel_con clearfix">
          <div>
            <div><img src="../img/detail/rel1.jpg" alt="니노 1100 베이직 책상 세트"></div>
            <p>모던하우스</p>
            <p>니노 1100 베이직 책상 세트</p>
            <p>99,000<span>BEST</span></p>
          </div><!--con1-->
          <div>
            <div><img src="../img/detail/rel2.jpg" alt="니노 1100 베이직 책상 세트"></div>
            <p>모던하우스</p>
            <p>니노 1100 베이직 책상 세트</p>
            <p>99,000<span>BEST</span></p>
          </div><!--con2-->
          <div>
            <div><img src="../img/detail/rel3.jpg" alt="니노 1100 베이직 책상 세트"></div>
            <p>모던하우스</p>
            <p>니노 1100 베이직 책상 세트</p>
            <p>99,000<span>BEST</span></p>
          </div><!--con3-->
          <div>
            <div><img src="../img/detail/rel4.jpg" alt="니노 1100 베이직 책상 세트"></div>
            <p>모던하우스</p>
            <p>니노 1100 베이직 책상 세트</p>
            <p>99,000<span>BEST</span></p>
          </div><!--con4-->
          <div>
            <div><img src="../img/detail/rel5.jpg" alt="니노 1100 베이직 책상 세트"></div>
            <p>모던하우스</p>
            <p>니노 1100 베이직 책상 세트</p>
            <p>99,000<span>BEST</span></p>
          </div><!--con5-->
        </div>
      </div><!--연관상품-->
    </div><!--wrapper-->
  </div><!--content4:연관상품-->

  <div id="productdetail_content5">
    <div class="wrapper">
      <p>포토 리뷰</p>
      <div>
        <div><a href="#">리뷰 등록</a></div>
        <ul>리뷰 순서<i class="fas fa-angle-down"></i>
          <li>최신순</li>
          <li>추천순</li>
          <li>평점높은순</li>
          <li>평점낮은순</li>
        </ul>
      </div><!--버튼-->
      <div class="clearfix review">
        <div><img src="/modernhouse/img/detail/review1.jpg" alt="review"></div>
        <div>
          <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--포토리뷰1-->
      <div class="clearfix review">
        <div><img src="/modernhouse/img/detail/review2.jpg" alt="review"></div>
        <div>
          <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--포토리뷰2-->
      <div class="clearfix review">
        <div><img src="/modernhouse/img/detail/review3.jpg" alt="review"></div>
        <div>
          <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--포토리뷰3-->
      <div class="pager2 clearfix">
        <div>
          <span class="active5">1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div><!--페이저-->
    </div><!--wrapper-->
  </div><!--content5:포토리뷰-->

  <div id="productdetail_content6">
    <div class="wrapper">
      <p>텍스트 리뷰</p>
      <div>
        <div><a href="#">리뷰 등록</a></div>
        <ul>리뷰 순서<i class="fas fa-angle-down"></i>
          <li>최신순</li>
          <li>추천순</li>
          <li>평점높은순</li>
          <li>평점낮은순</li>
        </ul>
      </div><!--버튼-->
      <div class="clearfix review2">
        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--텍스트리뷰1-->
      <div class="clearfix review2">
        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--텍스트리뷰2-->
      <div class="clearfix review2">
        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--텍스트리뷰3-->
      <div class="clearfix review2">
        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--텍스트리뷰4-->
      <div class="clearfix review2">
        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div>
          <p>
            매우 만족합니다^^<br>
            신학기행사로 저렴하게 구매해서 두 개 들였는데 정말 잘한 것 같아요~!<br>
            예비초등학생과 저학년인 아이가 굉장히 좋아하네요~
          </p>
          <span>더보기</span>
          <div>
            <span>2020.02.03</span>
            <span>작성자</span>
          </div>
        </div>
      </div><!--텍스트리뷰5-->
      <div class="pager3 clearfix">
        <div>
          <span class="active6">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div><!--페이저-->
    </div><!--wrapper-->
  </div><!--content6:텍스트리뷰-->

  <div id="productdetail_content7">
    <div class="wrapper">
      <p>상품 문의</p>
      <div><a href="#">문의 등록</a></div>
      <div class="clearfix qna">
        <div>답변완료</div>
        <div>상품문의</div>
        <div>작성자</div>
        <div>2020.02.28</div>
      </div><!--상품문의1-->
      <div class="clearfix qna">
        <div>답변완료</div>
        <div>상품문의</div>
        <div>작성자</div>
        <div>2020.02.28</div>
      </div><!--상품문의2-->
      <div class="clearfix qna">
        <div>답변완료</div>
        <div>상품문의</div>
        <div>작성자</div>
        <div>2020.02.28</div>
      </div><!--상품문의3-->
      <div class="clearfix qna">
        <div>답변완료</div>
        <div>상품문의</div>
        <div>작성자</div>
        <div>2020.02.28</div>
      </div><!--상품문의4-->
      <div class="clearfix qna">
        <div>답변완료</div>
        <div>상품문의</div>
        <div>작성자</div>
        <div>2020.02.28</div>
      </div><!--상품문의5-->
      <div class="pager4 clearfix">
        <div>
          <span class="active7">1</span>
          <span>2</span>
        </div>
      </div><!--페이저-->
    </div><!--wrapper-->
  </div><!--content7:상품문의-->

  <div id="productdetail_content8">
    <div class="wrapper">
      <div>
        <p>상품 배송안내</p>
        <div class="clearfix">
          <div>공급업체</div><!--제목-->
          <div>주식회사 엠에치앤코</div><!--내용-->
        </div>
        <div class="clearfix">
          <div>배송비</div><!--제목-->
          <div>무료배송, 전국(제주/도서산간제외)</div><!--내용-->
        </div>
        <div class="clearfix">
          <div>배송정보</div><!--제목-->
          <div>발송예정일 04월 03일(금) 이내 (토, 일, 공휴일제외)</div><!--내용-->
        </div>
      </div><!--상품 배송안내-->
      <div class="clearfix">
        <p>환불 안내</p>
        <div class="clearfix">
          <div>카드 결제 환불</div><!--제목-->
          <div>결제 당일 취소는 카드사 홈페이지에서 당일 취소확인이 가능합니다.<br>익일 취소일 경우 카드사 사정에 따라 3-7일 후 해당 카드사 홈페이지에서 취소 내역을 확인하실 수 있습니다.</div><!--내용-->
        </div>
        <div class="clearfix">
          <div>현금 결제<br>(실시간 계좌이체/무통장 입금)</div><!--제목-->
          <div>취소/반품 신청 시, 환불계좌를 등록하시면 물류센터에서 반품제품을 확인한 뒤 영업일 3일 이내에 환불처리 됩니다.</div><!--내용-->
        </div>
      </div><!--상품 배송안내-->
    </div>
  </div><!--content8:배송안내 등-->

  <div class="popup_cart">
    <p>선택하신 상품을<br>장바구니에 담았습니다.</p>
    <div>
      <div>쇼핑 계속하기</div><div>장바구니 가기</div>
    </div>
  </div><!--장바구니 팝업-->

  <div class="popup_wish">
    <p>선택하신 상품을<br>위시리스트에 담았습니다.</p>
    <div>
      <div>쇼핑 계속하기</div><div>위시리스트 가기</div>
    </div>
  </div><!--위시리스트 팝업-->

  <?php
    include_once($_SERVER['DOCUMENT_ROOT']."/modernhouse/aside.php");
  ?>

  <?php
    include_once($_SERVER['DOCUMENT_ROOT']."/modernhouse/footer.php");
  ?>

  <script src="/modernhouse/js/prefixfree.min.js"></script>
  <script src="https://kit.fontawesome.com/2f92a2487f.js" crossorigin="anonymous"></script>
  <script src="/modernhouse/js/jquery-3.4.1.min.js"></script>
  <script src="/modernhouse/js/jquery-ui.min.js"></script>
  <script src="/modernhouse/js/jquery.bxslider.min.js"></script>
  <script src="/modernhouse/js/main.js"></script>
  <script src="/modernhouse/js/login.js"></script>
  <script src="/modernhouse/js/product3.js"></script>

</body>
</html>
