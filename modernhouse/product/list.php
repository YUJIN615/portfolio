<?php
  include_once($_SERVER['DOCUMENT_ROOT']."/modernhouse/header.php");
?>

  <div id="productlist_content1">
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
      </div><!--네비게이터-->
    </div><!--wrapper-->
  </div><!--content1:네비게이터-->

  <div class="productlist_top">
    <div class="wrapper clearfix">
      <div id="productlist_content2">
        <p>가구</p>
        <ul>
          <li><a href="#">책상</a></li>
          <li><a href="#">책장</a></li>
          <li><a href="#">의자</a></li>
          <li><a href="#">수납/선반</a></li>
          <li><a href="#">소가구</a></li>
        </ul>
        <ul>
          <li><a href="#">EVENT</a></li>
          <li><a href="#">SALE</a></li>
        </ul>
      </div><!--content2:좌측메뉴-->

      <div id="productlist_content3" class="clearfix">
        <div>
          <span><i class="fas fa-medal"></i></span>
          <p>BEST 1</p>
          <div><a href="/modernhouse/product/detail.php"><img src="/modernhouse/img/product1/best1.jpg" alt=""></a></div>
          <p>모던하우스</p>
          <p>덴 2000 전면책상세트V3</p>
          <p>199,000</p>
          <p>94,000&nbsp;&nbsp;<span>[53%]</span></p>
        </div><!--con1-->
        <div>
          <span><i class="fas fa-medal"></i></span>
          <p>BEST 2</p>
          <div><a href="/modernhouse/product/detail.php"><img src="/modernhouse/img/product1/best2.jpg" alt=""></a></div>
          <p>모던하우스</p>
          <p>니노 1100 베이직 책상 세트</p>
          <p>129,000</p>
          <p>103,200&nbsp;&nbsp;<span>[20%]</span></p>
        </div><!--con2-->
        <div>
          <span><i class="fas fa-medal"></i></span>
          <p>BEST 3</p>
          <div><a href="/modernhouse/product/detail.php"><img src="/modernhouse/img/product1/best3.jpg" alt=""></a></div>
          <p>모던하우스</p>
          <p>에반스 메이플 3*5 책장</p>
          <p>159,000</p>
          <p>111,300&nbsp;&nbsp;<span>[30%]</span></p>
        </div><!--con3-->
      </div><!--content3:BEST3-->
    </div><!--wrapper-->
  </div>

  <div id="productlist_content4">
    <div class="wrapper clearfix">
      <div>
        <p>브랜드</p>
        <input type="checkbox" id="modern"><label for="modern"><span>&nbsp;모던하우스</span></label><br>
        <input type="checkbox" id="butter"><label for="butter"><span>&nbsp;버터</span></label>
      </div><!--con1-->
      <div>
        <p>혜택</p>
        <input type="checkbox" id="sale"><label for="sale"><span>&nbsp;즉시할인</span></label><br>
        <input type="checkbox" id="gift"><label for="gift"><span>&nbsp;사은품</span></label>
      </div><!--con2-->
      <div>
        <p>가격</p>
        <div><!--조정바-->
          <div>
            <div>
              <div class="scrollBar1"></div><!--조정버튼-->
              <div class="scrollBar2"></div><!--조정버튼-->
            </div>
          </div><!--조정바 배경-->
        </div><!--조정바-->
        <input value="23,700">&nbsp;<span>-</span>&nbsp;<input value="323,100">
      </div><!--con3-->
      <div>
        <p>할인율</p>
        <div><!--조정바-->
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div><!--조정바 배경-->
        </div><!--조정바-->
        <input value="0">&nbsp;<span>-</span>&nbsp;<input value="55">
      </div><!--con4-->
      <div>
        <div><i class="fas fa-search"></i><span>검색하기</span></div>
        <div><i class="fas fa-undo-alt"></i><span>선택초기화</span></div>
      </div><!--버튼-->
      <span class="close"><span>&nbsp;&nbsp;접기</span><i class="fas fa-angle-down"></i></span>
    </div><!--wrapper-->
  </div><!--content4:조건검색-->

  <div id="productlist_content5">
    <div class="wrapper">
      <p>서재가구 <span>124&nbsp;</span><span>items</span></p>
      <p class="array"><span class="active8">추천순</span><span>인기순</span><span>최신순</span><span>낮은가격 순</span><span>높은가격 순</span></p>
      <div class="clearfix">
        <div><!--content1-->
          <div>
            <img src="/modernhouse/img/product1/list_best1.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>니노 1100 베이직 책상 세트</p>
            <p>129,000</p>
            <p>99,000&nbsp;&nbsp;<span>[23%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content1-->
        <div><!--content2-->
          <div>
            <img src="/modernhouse/img/product1/list_best2.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>ON 로코 H형 좌식 책상 화이트</p>
            <p>49,900</p>
            <p>23,700&nbsp;&nbsp;<span>[53%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content2-->
        <div><!--content3-->
          <div>
            <img src="/modernhouse/img/product1/list_best3.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>카럽 오크 원목 테이블 4인세트</p>
            <p>438,600</p>
            <p>319,000&nbsp;&nbsp;<span>[27%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content3-->
        <div><!--content4-->
          <div>
            <img src="/modernhouse/img/product1/list_best4.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>아인스 아일랜드 원목테이블 스툴세트</p>
            <p>258,000</p>
            <p>129,000&nbsp;&nbsp;<span>[50%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content4-->
        <div><!--content5-->
          <div>
            <img src="/modernhouse/img/product1/list_best5.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>엔젤 하이 접이식 테이블</p>
            <p></p>
            <p>299,000<span></span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content5-->
        <div><!--content6-->
          <div>
            <img src="/modernhouse/img/product1/list_best6.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>토리 미니 소파</p>
            <p>259,000</p>
            <p>129,000&nbsp;&nbsp;<span>[50%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content6-->
        <div><!--content7-->
          <div>
            <img src="/modernhouse/img/product1/list_best7.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>로코 600 선반장(블랙)</p>
            <p>39,900</p>
            <p>37,900&nbsp;&nbsp;<span>[5%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content7-->
        <div><!--content8-->
          <div>
            <img src="/modernhouse/img/product1/list_best8.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>스페이스 전신거울 수납 행거</p>
            <p>99,000</p>
            <p>69,900&nbsp;&nbsp;<span>[29%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content8-->
        <div><!--content9-->
          <div>
            <img src="/modernhouse/img/product1/list_new1.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>ON 로코 600 행거 옷장 화이트</p>
            <p></p>
            <p>59,900<span></span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content9-->
        <div><!--content10-->
          <div>
            <img src="/modernhouse/img/product1/list_new2.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>씨포드 1000 책상/의자 세트</p>
            <p></p>
            <p>129,800<span></span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content10-->
        <div><!--content11-->
          <div>
            <img src="/modernhouse/img/product1/list_new3.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>ON 데인 600 5단 서랍장</p>
            <p></p>
            <p>99,000<span></span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content11-->
        <div><!--content12-->
          <div>
            <img src="/modernhouse/img/product1/list_new4.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>헤스팅 윌넛 우드도어장 세트</p>
            <p></p>
            <p>378,000<span></span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content12-->
        <div><!--content13-->
          <div>
            <img src="/modernhouse/img/product1/list_new5.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>로코 컴팩트 철제 테이블 시리즈</p>
            <p>39,900</p>
            <p>29,900&nbsp;&nbsp;<span>[25%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content13-->
        <div><!--content14-->
          <div>
            <img src="/modernhouse/img/product1/list_new6.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>스틸 폴딩 테이블 체어세트</p>
            <p>99,000</p>
            <p>79,900&nbsp;&nbsp;<span>[19%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content14-->
        <div><!--content15-->
          <div>
            <img src="/modernhouse/img/product1/list_new7.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>로코 전자렌지장(블랙)</p>
            <p>39,900</p>
            <p>29,900&nbsp;&nbsp;<span>[25%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content15-->
        <div><!--content16-->
          <div>
            <img src="/modernhouse/img/product1/list_new8.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>스페이스 전신거울 수납 행거</p>
            <p>299,000</p>
            <p>159,900&nbsp;&nbsp;<span>[47%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content16-->
        <div><!--content17-->
          <div>
            <img src="/modernhouse/img/product1/list_best5.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>엔젤 하이 접이식 테이블</p>
            <p></p>
            <p>299,000<span></span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content17-->
        <div><!--content18-->
          <div>
            <img src="/modernhouse/img/product1/list_best6.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>토리 미니 소파</p>
            <p>259,000</p>
            <p>129,000&nbsp;&nbsp;<span>[50%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content18-->
        <div><!--content19-->
          <div>
            <img src="/modernhouse/img/product1/list_best7.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>로코 600 선반장(블랙)</p>
            <p>39,900</p>
            <p>37,900&nbsp;&nbsp;<span>[5%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content19-->
        <div><!--content20-->
          <div>
            <img src="/modernhouse/img/product1/list_best8.jpg" alt="">
          </div><!--img감싼 div-->
          <div>
            <p>모던하우스</p>
            <p>스페이스 전신거울 수납 행거</p>
            <p>99,000</p>
            <p>69,900&nbsp;&nbsp;<span>[29%]</span></p>
            <div>
              <span class="window"><i class="far fa-window-restore"></i></span>
              <span class="cart"><i class="fas fa-shopping-cart"></i></span>
              <span class="wish"><i class="far fa-heart"></i></span>
            </div><!--아이콘-->
          </div><!--텍스트 감싼 div-->
        </div><!--content20-->
      </div><!--content group-->
    </div><!--wrapper-->
  </div><!--content5-->

  <div id="productlist_pager">
    <div class="wrapper">
      <div>
        <span><i class="fas fa-angle-double-left"></i></span>
        <span><i class="fas fa-angle-left"></i></span>
        <span class="active3">1</span><span>2</span><span>3</span><span>4</span><span>5</span>
        <span><i class="fas fa-angle-right"></i></span>
        <span><i class="fas fa-angle-double-right"></i></span>
      </div>
    </div>
  </div><!--페이지 이동버튼-->

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
  <script src="/modernhouse/js/product2.js"></script>
</body>
</html>
