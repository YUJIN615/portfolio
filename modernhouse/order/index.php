<?php
  include_once($_SERVER['DOCUMENT_ROOT']."/modernhouse/header.php");
?>

<div>
  <div class="wrapper">
    <form>
      <fieldset>
        <div id="order_content1">
          <p>주문 리스트</p>
          <table>
            <tr>
              <th><div></div></th>
              <th><div>제품</div></th>
              <th><div>수량</div></th>
              <th><div>가격</div></th>
              <th><div>배송비</div></th>
              <th><div>합계</div></th>
            </tr><!--1행-->
            <tr>
              <td>
                <div><a href="#"><img src="../img/detail/detail1.jpg"></a></div>
              </td>
              <td>
                <div><a href="#">덴 2000 전면책상세트 / 옵션:책상+의자 세트</a></div>
              </td>
              <td>
                <div>
                  <input type="button" value="-" class="minus"><input type="text" value="1" class="quantity"><input type="button" value="+" class="plus">
                </div>
              </td>
              <td>
                <div>
                  <span>94,000</span>
                </div>
              </td>
              <td>
                <div>
                  <span>3,000</span>
                </div>
              </td>
              <td>
                <div>
                  <span>97,000</span>
                </div>
              </td>
            </tr><!--2행-->
            <tr>
              <td colspan="6">
                <div>
                  상품금액 94,000 + 배송비 3,000 = 합계 97,000원
                </div>
              </td>
            </tr><!--3행-->
          </table>
        </div><!--content1-->
        
        <div id="order_content2">
          <p>주문자 정보</p>
          <span>*는 필수 입력사항 입니다.</span>
          <table>
            <tr>
              <th><div>*이름</div></th>
              <td>
                <div>
                  <input type="text">
                </div>
              </td>
            </tr><!--1행-->
            <tr>
              <th><div>*이메일</div></th>
              <td>
                <div>
                  <input type="text">&nbsp;@&nbsp;<input type="text">&nbsp;
                  <select name="email">
                    <option>직접입력</option>
                    <option>naver.com</option>
                    <option>daum.net</option>
                    <option>nate.com</option>
                    <option>gmail.com</option>
                  </select>
                </div>
              </td>
            </tr><!--2행-->
            <tr>
              <th><div>*연락처</div></th>
              <td>
                <div>
                  <input type="text"> - <input type="text"> - <input type="text">
                </div>
              </td>
            </tr><!--3행-->
          </table>
        </div><!--content2-->
       
        <div id="order_content3">
          <p>배송 정보</p><span><input type="checkbox" id="same"> <label for="same">주문자 정보와 동일</label></span>
          <table>
            <tr>
              <th><div>*이름</div></th>
              <td>
                <div>
                  <input type="text">
                </div>
              </td>
            </tr><!--1행-->
            <tr>
              <th><div>*연락처</div></th>
              <td>
                <div>
                  <input type="text"> - <input type="text"> - <input type="text">
                </div>
              </td>
              <th><div>*연락처2</div></th>
              <td>
                <div>
                  <input type="text"> - <input type="text"> - <input type="text">
                </div>
              </td>
            </tr><!--2행-->
            <tr>
              <th><div>*주소</div></th>
              <td colspan="3">
                <div>
                  <input type="text" disabled="disabled">&nbsp;&nbsp;
                  <input type="button" value="우편번호"><br>
                  <input type="text">&nbsp;&nbsp;<input type="text">
                </div>
              </td>
            </tr><!--3행-->
            <tr>
              <th><div>배송메세지<br>(100자 내외)</div></th>
              <td>
                <div>
                  <textarea></textarea>
                </div>
              </td>
            </tr><!--4행-->
            <tr>
              <th>무통장 입금자명</th>
              <td>
                <div>
                  <input type="text">
                </div>
              </td>
            </tr><!--5행-->
          </table>
        </div><!--content3-->
        
        <div id="order_content4">
          <p>주문상품 할인적용</p>
          <table>
            <tr>
              <th>
                <div>상품금액</div>
              </th>
              <th>
                <div></div>
              </th>
              <th>
                <div>배송비</div>
              </th>
              <th>
                <div></div>
              </th>
              <th>
                <div>할인금액</div>
              </th>
              <th>
                <div></div>
              </th>
              <th>
                <div>추가금액</div>
              </th>
              <th>
                <div></div>
              </th>
              <th>
                <div>결제 예정금액</div>
              </th>
            </tr><!--1행-->
            <tr>
              <td>
                <div>94,000원</div>
              </td>
              <td>
                <div>+</div>
              </td>
              <td>
                <div>3,000원</div>
              </td>
              <td>
                <div>-</div>
              </td>
              <td>
                <div>0원</div>
              </td>
              <td>
                <div>+</div>
              </td>
              <td>
                <div>0원</div>
              </td>
              <td>
                <div>=</div>
              </td>
              <td>
                <div><span>97,000</span>원</div>
              </td>
            </tr><!--2행-->
          </table>
        </div><!--content4-->
        
        <div id="order_content5">
          <p>결제정보</p>
          <table>
            <tr>
              <th>
                <div>
                  결제방법
                </div>
              </th>
              <td>
                <div>
                  <input type="radio" id="credit" name="payment"> <label  for="credit">신용카드</label><br>
                  <input type="radio" id="bankbook" name="payment"> <label for="bankbook">무통장입금</label><br>
                  <input type="radio" id="account" name="payment"> <label for="account">실시간 계좌이체</label><br>
                  <input type="radio" id="phone" name="payment"> <label for="phone">휴대폰 결제</label><br>
                </div>
              </td>
            </tr><!--1행-->
            <tr>
              <td colspan="2">
                <div>
                  반드시 입금 기한 내에 정확한 결제금액을 입금해 주세요.<br>
                  입금 기한이 지나면 주문은 자동취소됩니다.
                </div>
              </td>
            </tr><!--2행-->
          </table>
        </div><!--content5-->

        <div id="order_content6">
          <table>
            <tr>
              <th>
                <div>최종 결제금액</div>
              </th>
              <td>
                <div><span>97,000</span>원</div>
              </td>
            </tr>
          </table>
        </div><!--content6-->

        <div id="order_content7">
          <div class="order"><a href="#">주문하기</a></div>
          <div><a href="#">주문취소</a></div>
        </div><!--content7-->

      </fieldset>
    </form>
  </div><!--wrapper-->
</div>

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
<script src="/modernhouse/js/jquery.mousewheel.min"></script>
<script src="/modernhouse/js/main.js"></script>
<script src="/modernhouse/js/product3.js"></script>
<script src="/modernhouse/js/login.js"></script>
</body>
</html>