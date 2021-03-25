<?php
$mobileKey = array ('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
for($i = 0 ; $i < count($mobileKey) ; $i++)
{
if(strpos($_SERVER['HTTP_USER_AGENT'],$mobileKey[$i]) == true)
{

header("Location: http://leeyujin.dothome.co.kr/modernhouse/m/index.html");
exit;
}
}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>모던하우스</title>
  <link rel="stylesheet" href="/modernhouse/css/style.css">
  <link rel="stylesheet" href="/modernhouse/css/jquery.bxslider.css">
  <link rel="stylesheet" href="/modernhouse/css/jquery.bxslider2.css">
  <link rel="stylesheet" href="/modernhouse/css/jquery.bxslider3.css">
  <link rel="stylesheet" href="/modernhouse/css/jquery.bxslider4.css">
  <link rel="stylesheet" href="/modernhouse/css/jquery.bxslider5.css">
</head>
<body>
  <div id="header">

    <div></div><!--subcolor-->

    <div class="login_popup">
      <form id="login">
        <fieldset>
          <div>
            <p>LOGIN</p>
            <div><input class="id" type="text" value="아이디를 입력하세요"></div><!--아이디-->
            <div><input class="pw" type="text" value="비밀번호를 입력하세요"></div><!--비밀번호-->
            <div><input type="checkbox" id="remember"><label for="remember">아이디 기억하기</label></div>
            <div>로그인</div><!--로그인-->
            <div class="clearfix">
              <div>회원가입</div>
              <div>아이디/비밀번호 찾기</div>
            </div>
            <div><i class="fas fa-times"></i></div>
          </div>
        </fieldset>
      </form>
      <div class="login_bg"></div>
    </div>

    <div id="section1">
      <div class="wrapper">
        <ul id="lnb1" class="clearfix">
          <li><a href="#">Modern House</a></li>
          <li><a href="#">Elandmall</a></li>
          <li><a href="#">BUTTER</a></li>
          <li><a href="#">BRAND SITE <i class="fas fa-chevron-down"></i></a></li>
        </ul><!--lnb1-->

        <ul id="lnb2" class="clearfix">
          <li><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
          <li><a href="#">장바구니</a></li>
          <li><a href="#">마이페이지</a></li>
          <li><a href="#">고객센터</a></li>
        </ul><!--lnb2-->
      </div><!--wrapper-->
    </div><!--section1-->

    <div id="section2">
      <div class="wrapper">
        <div id="rank">
          <div>
            <div class="rank_con">
              <span>01</span>
              <span>침구</span>
            </div><!--1위-->
            <div class="rank_con">
              <span>02</span>
              <span>가구</span>
            </div><!--2위-->
            <div class="rank_con">
              <span>03</span>
              <span>주방</span>
            </div><!--3위-->
            <div class="rank_con">
              <span>04</span>
              <span>욕실</span>
            </div><!--4위-->
            <div class="rank_con">
              <span>05</span>
              <span>키즈</span>
            </div><!--5위-->
            <div class="rank_con">
              <span>06</span>
              <span>패브릭</span>
            </div><!--6위-->
            <div class="rank_con">
              <span>07</span>
              <span>홈데코</span>
            </div><!--7위-->
            <div class="rank_con">
              <span>08</span>
              <span>라이프</span>
            </div><!--8위-->
          </div>
          <div class="rank_open"><i class="fas fa-chevron-down"></i></div>
        </div><!--rank-->
        <div class="rank_box">
          <p><span>01</span>침구</p>
          <p><span>02</span>가구</p>
          <p><span>03</span>주방</p>
          <p><span>04</span>욕실</p>
          <p><span>05</span>키즈</p>
          <p><span>06</span>패브릭</p>
          <p><span>07</span>홈데코</p>
          <p><span>08</span>라이프</p>
        </div>

        <div id="logo">
          <h1><a href="/modernhouse/index.php">모던하우스</a></h1>
        </div><!--logo-->

        <div id="search">
          <input type="text">
          <i class="fas fa-search"></i>
        </div><!--search-->
      </div><!--wrapper-->
    </div><!--section2-->

    <div id="section3">
      <div class="wrapper">
        <ul id="gnb" class="clearfix">
          <li>
            <a href="#" class="allMenuBtn"><i class="fas fa-bars"></i>전체보기</a>
            <div class="allMenu">
              <ul class="clearfix">
                <li>
                  <a href="/modernhouse/product/index.php">주방</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">식기류</a></li>
                    <li><a href="/modernhouse/product/list.php">컵/보틀</a></li>
                    <li><a href="/modernhouse/product/list.php">테이블 소품</a></li>
                    <li><a href="/modernhouse/product/list.php">베이킹/커피/와인</a></li>
                    <li><a href="/modernhouse/product/list.php">조리도구</a></li>
                    <li><a href="/modernhouse/product/list.php">보관/수납/정리</a></li>
                    <li><a href="/modernhouse/product/list.php">주방잡화</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">가구</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">DIY</a></li>
                    <li><a href="/modernhouse/product/list.php">침실가구</a></li>
                    <li><a href="/modernhouse/product/list.php">거실가구</a></li>
                    <li><a href="/modernhouse/product/list.php">주방가구</a></li>
                    <li><a href="/modernhouse/product/list.php">서재가구</a></li>
                    <li><a href="/modernhouse/product/list.php">학생/아동가구</a></li>
                    <li><a href="/modernhouse/product/list.php">아웃도어 가구</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">수납</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">의류수납</a></li>
                    <li><a href="/modernhouse/product/list.php">바구니/박스</a></li>
                    <li><a href="/modernhouse/product/list.php">아이템 정리</a></li>
                    <li><a href="/modernhouse/product/list.php">선반/수납장</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">욕실</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">타올/가운</a></li>
                    <li><a href="/modernhouse/product/list.php">욕실수납/정리</a></li>
                    <li><a href="/modernhouse/product/list.php">욕실소품</a></li>
                    <li><a href="/modernhouse/product/list.php">욕실화</a></li>
                    <li><a href="/modernhouse/product/list.php">바디용품</a></li>
                    <li><a href="/modernhouse/product/list.php">청소용품</a></li>
                    <li><a href="/modernhouse/product/list.php">세탁용품</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">침구</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">일반침구</a></li>
                    <li><a href="/modernhouse/product/list.php">알러지케어 침구</a></li>
                    <li><a href="/modernhouse/product/list.php">충전재</a></li>
                    <li><a href="/modernhouse/product/list.php">담요/블랑켓</a></li>
                    <li><a href="/modernhouse/product/list.php">커튼</a></li>
                    <li><a href="/modernhouse/product/list.php">롤스크린/블라인드</a></li>
                    <li><a href="/modernhouse/product/list.php">커튼부자재</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">패브릭</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">쿠션</a></li>
                    <li><a href="/modernhouse/product/list.php">방석</a></li>
                    <li><a href="/modernhouse/product/list.php">키친패브릭</a></li>
                    <li><a href="/modernhouse/product/list.php">패브릭소품</a></li>
                    <li><a href="/modernhouse/product/list.php">매트/러그/카페트</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">홈데코</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">조명/스탠드</a></li>
                    <li><a href="/modernhouse/product/list.php">인테리어 소품</a></li>
                    <li><a href="/modernhouse/product/list.php">캔들/디퓨저</a></li>
                    <li><a href="/modernhouse/product/list.php">홈가드닝</a></li>
                    <li><a href="/modernhouse/product/list.php">DIY</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">라이프</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">가전/디지털</a></li>
                    <li><a href="/modernhouse/product/list.php">문구</a></li>
                    <li><a href="/modernhouse/product/list.php">뷰티</a></li>
                    <li><a href="/modernhouse/product/list.php">헬스/다이어트</a></li>
                    <li><a href="/modernhouse/product/list.php">패션잡화</a></li>
                    <li><a href="/modernhouse/product/list.php">여행/파티</a></li>
                    <li><a href="/modernhouse/product/list.php">펫샵</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/modernhouse/product/index.php">키즈</a>
                  <ul>
                    <li><a href="/modernhouse/product/list.php">문구/도서/장난감</a></li>
                    <li><a href="/modernhouse/product/list.php">가구/침구</a></li>
                    <li><a href="/modernhouse/product/list.php">식기/주방용품</a></li>
                    <li><a href="/modernhouse/product/list.php">욕실용품</a></li>
                    <li><a href="/modernhouse/product/list.php">아동 잡화</a></li>
                  </ul>
                </li>
              </ul>
            </div><!--전체메뉴-->
          </li>
          <li>
            <a href="/modernhouse/product/index.php">주방</a>
            <ul class="clearfix">
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">식기류</a></li>
                  <li><a href="/modernhouse/product/list.php">컵/보틀</a></li>
                  <li><a href="/modernhouse/product/list.php">테이블 소품</a></li>
                  <li><a href="/modernhouse/product/list.php">베이킹/커피/와인</a></li>
                  <li><a href="/modernhouse/product/list.php">조리도구</a></li>
                  <li><a href="/modernhouse/product/list.php">보관/수납/정리</a></li>
                  <li><a href="/modernhouse/product/list.php">주방잡화</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb1.jpg" alt="식기류">
              </li>
            </ul>
          </li><!--주방-->
          <li><a href="/modernhouse/product/index.php">가구</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">DIY</a></li>
                  <li><a href="/modernhouse/product/list.php">침실가구</a></li>
                  <li><a href="/modernhouse/product/list.php">거실가구</a></li>
                  <li><a href="/modernhouse/product/list.php">주방가구</a></li>
                  <li><a href="/modernhouse/product/list.php">서재가구</a></li>
                  <li><a href="/modernhouse/product/list.php">학생/아동가구</a></li>
                  <li><a href="/modernhouse/product/list.php">아웃도어 가구</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb2.jpg" alt="가구">
              </li>
            </ul>
          </li><!--가구-->
          <li><a href="/modernhouse/product/index.php">수납</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">의류수납</a></li>
                  <li><a href="/modernhouse/product/list.php">바구니/박스</a></li>
                  <li><a href="/modernhouse/product/list.php">아이템 정리</a></li>
                  <li><a href="/modernhouse/product/list.php">선반/수납장</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb3.jpg" alt="수납">
              </li>
            </ul>
          </li><!--수납-->
          <li><a href="/modernhouse/product/index.php">욕실</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">타올/가운</a></li>
                  <li><a href="/modernhouse/product/list.php">욕실수납/정리</a></li>
                  <li><a href="/modernhouse/product/list.php">욕실소품</a></li>
                  <li><a href="/modernhouse/product/list.php">욕실화</a></li>
                  <li><a href="/modernhouse/product/list.php">바디용품</a></li>
                  <li><a href="/modernhouse/product/list.php">청소용품</a></li>
                  <li><a href="/modernhouse/product/list.php">세탁용품</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb4.jpg" alt="욕실">
              </li>
            </ul>
          </li><!--욕실-->
          <li><a href="/modernhouse/product/index.php">침구</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">일반침구</a></li>
                  <li><a href="/modernhouse/product/list.php">알러지케어 침구</a></li>
                  <li><a href="/modernhouse/product/list.php">충전재</a></li>
                  <li><a href="/modernhouse/product/list.php">담요/블랑켓</a></li>
                  <li><a href="/modernhouse/product/list.php">커튼</a></li>
                  <li><a href="/modernhouse/product/list.php">롤스크린/블라인드</a></li>
                  <li><a href="/modernhouse/product/list.php">커튼부자재</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb5.jpg" alt="침구">
              </li>
            </ul>
          </li><!--침구-->
          <li><a href="/modernhouse/product/index.php">패브릭</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">쿠션</a></li>
                  <li><a href="/modernhouse/product/list.php">방석</a></li>
                  <li><a href="/modernhouse/product/list.php">키친패브릭</a></li>
                  <li><a href="/modernhouse/product/list.php">패브릭소품</a></li>
                  <li><a href="/modernhouse/product/list.php">매트/러그/카페트</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb6.jpg" alt="패브릭">
              </li>
            </ul>
          </li><!--패브릭-->
          <li><a href="/modernhouse/product/index.php">홈데코</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">조명/스탠드</a></li>
                  <li><a href="/modernhouse/product/list.php">인테리어 소품</a></li>
                  <li><a href="/modernhouse/product/list.php">캔들/디퓨저</a></li>
                  <li><a href="/modernhouse/product/list.php">홈가드닝</a></li>
                  <li><a href="/modernhouse/product/list.php">DIY</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb7.jpg" alt="홈데코">
              </li>
            </ul>
          </li><!--홈데코-->
          <li><a href="/modernhouse/product/index.php">라이프</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">가전/디지털</a></li>
                  <li><a href="/modernhouse/product/list.php">문구</a></li>
                  <li><a href="/modernhouse/product/list.php">뷰티</a></li>
                  <li><a href="/modernhouse/product/list.php">헬스/다이어트</a></li>
                  <li><a href="/modernhouse/product/list.php">패션잡화</a></li>
                  <li><a href="/modernhouse/product/list.php">여행/파티</a></li>
                  <li><a href="/modernhouse/product/list.php">펫샵</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb8.jpg" alt="라이프">
              </li>
            </ul>
          </li><!--라이프-->
          <li><a href="/modernhouse/product/index.php">키즈</a>
            <ul>
              <li>
                <ul>
                  <li><a href="/modernhouse/product/list.php">문구/도서/장난감</a></li>
                  <li><a href="/modernhouse/product/list.php">가구/침구</a></li>
                  <li><a href="/modernhouse/product/list.php">식기/주방용품</a></li>
                  <li><a href="/modernhouse/product/list.php">욕실용품</a></li>
                  <li><a href="/modernhouse/product/list.php">아동 잡화</a></li>
                </ul>
              </li>
              <li>
                <img src="/modernhouse/img/index/gnb9.jpg" alt="키즈">
              </li>
            </ul>
          </li><!--키즈-->
        </ul><!--gnb-->
      </div><!--wrapper-->
    </div><!--section3-->
  </div><!--header-->
