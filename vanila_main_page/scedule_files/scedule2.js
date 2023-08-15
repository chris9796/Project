


//일단 거리가 가장 가까운 순서대로 만들자. 할꺼야? 호텔 ㄱㄱㄱ

//calendar_2.js
function is_checked(checkbox) {
  
    // 1. checkbox element를 찾습니다.
    // let checkbox = document.querySelector()
  
    // 2. checked 속성을 체크합니다.
    // const is_checked = checkbox.checked;
  
   
  }
  


        //결정하기 선택한후 선택한 날짜 가져오고 계산하기
        const cal_btn = document.querySelector("#cal_btn");
        let travelFirstDate;
        let travelLastDate;
        let travel_date;
        let ClickedYear;
        let ClickedMonth;
        let ChoiceDay_first;
        let ChoiceDay_last
        let Create_Nth_Day_i = 0;
       cal_btn.addEventListener('click',function cal_decide(){
       const cal_display_div = document.querySelector("#cal_display_id");
        cal_display_div.classList.add("cal_display");


       ChoiceDay_last = document.getElementsByClassName("choiceDay")[1].innerText;
       ChoiceDay_first = document.getElementsByClassName("choiceDay")[0].innerText;
       travel_date = ChoiceDay_last - ChoiceDay_first + 1;
        
        

      alert(`여행하는 날이 ${travel_date}일이군요!`);
      ClickedYear = document.getElementById("calYear").innerText;
      ClickedMonth = document.getElementById("calMonth").innerText - 1;
      travelFirstDate = [ClickedYear,ClickedMonth,ChoiceDay_first];
      travelLastDate = [ClickedYear,ClickedMonth,ChoiceDay_last];

      // console.log(travelFirstDate,travelLastDate);
      
      // 8월에서만 가능 8월과 9월 선택 불가능

      let Nth_var_date_Array = new Array(travel_date);
      for(let i = 0; i < Nth_var_date_Array.length; i++){
        Nth_var_date_Array[i] = ChoiceDay_first;
        ChoiceDay_first++;
      }


       let travel_date_reverse = new Array(travel_date);
       for(let i = 0; i < travel_date_reverse.length; i++){
        travel_date_reverse[i] = i + 1;
        //console.log(travel_date_reverse);
       }
       
          while(travel_date != 0){
               
                Create_Nth_Day(travel_date,travel_date_reverse,Nth_var_date_Array);
             
                travel_date--;
                
             }
       
       });
      

       //알고리즘 어떻게 할거야??
       //큰틀로 가장 중요한건 TRAVEL_DATE가 0이 될때까지로 하고 그걸 한번 실행할때마다 -- 를 하자.

       function Create_Nth_Day(t_date,t_d_reverse,var_date){

    //    console.log(places[index_places]);
        

   
        const newP = document.createElement('p');
        const newStrong = document.createElement('strong');
        const newSpan = document.createElement('span');
        const newButton = document.createElement('button');
        const newHotel = document.createElement('p');
        const newUl = document.createElement('ul');
        const newInput = document.createElement('input');
        newInput.type = `checkbox`;
        
 
        newP.appendChild(newStrong);
        newP.appendChild(newSpan);
        newP.appendChild(newButton);
        newP.appendChild(newInput);

        
        newInput.className = `Nth_day_checkbox${Create_Nth_Day_i + 1}`
        newUl.className = "scedule_ul";
        newStrong.className = "scedule_strong";
        newSpan.className = "date";
        newButton.className = "summary_btn";
        newSpan.innerText = `${ClickedYear}.${ClickedMonth + 1}.${var_date[Create_Nth_Day_i]}`;
        newStrong.innerText = `${t_d_reverse[Create_Nth_Day_i]}일차`;
        newButton.innerText = `Details`;
        
        
        let checkbox = document.querySelector(`Nth_day_checkbox${Create_Nth_Day_i + 1}`);
        
        Create_Nth_Day_i++;
      
        
        // newP.appendChild(newUl);
        // newUl.setAttribute("id", "sortable");
        
        

        // newLi를 newUl의 자식 요소로 추가합니다.
        // newUl.appendChild(newLi);
        // newLi.appendChild(innerP);

        //호텔 칸 만들기 
        for(let i = 0; t_date - 1 > i; i++){
          newP.appendChild(newHotel);
          newHotel.innerText = "HOTEL_CONTENTS";
          
        }
    
        
          const aside = document.querySelector('aside');
        aside.appendChild(newP);
        aside.appendChild(newUl);
        newP.className = `Nth_day_p${Create_Nth_Day_i}`
       }


       //new div

//scedule_2.js
//console.log(travelFirstDate,travelLastDate);

    // const Detail = document.querySelectorAll(".Detail_after");
    // const btn = document.querySelector(".summary_btn");
    
    // // btn.addEventListener("click", Detail_btn_click);
    // // function Detail_btn_click(){
    // //     for(let i = 0; i < Detail.length; i++){
    // //         Detail[i].classList.toggle("Detail_after");
    // //     }


        
    //     if(btn.innerText === "summary")
    //     btn.innerText = "Details";
    //     else{
    //         btn.innerText = "summary";
    //     }
    // }

        
    //마커 생성
var markers = [];

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();  

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

// 키워드로 장소를 검색합니다
searchPlaces();

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {

    var keyword = document.getElementById('keyword').value;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB);
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data);
        
        // 페이지 번호를 표출합니다
        displayPagination(pagination);

    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === kakao.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    }
}



// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new kakao.maps.LatLngBounds(), 
    listStr = '';
   
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();
    
    for ( var i=0; i<places.length; i++ ) {

        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
            marker = addMarker(placePosition, i),

           itemEl = getListItem(i, places[i]);
            // console.log(places[i]);
             // 검색 결과 항목 Element를 생성합니다
            

          
        
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });

            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
            //수정 onclick으로 원래는 onmouseover//
            itemEl.addEventListener('click',() => {
                displayInfowindow(marker, title);
                // console.log(places[index_places]);
                
            
                    ConveyPlaces(places[index_places]);
                  
            });  
          

            itemEl.onmouseout =  function () {
                infowindow.close();
            };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
}


// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {
 
    var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                '<div class="info">' +
                '   <h5>' + places.place_name + '</h5>';
 
    if (places.road_address_name) {
        itemStr += '    <span>' + places.road_address_name + '</span>' +
                    '   <span class="jibun gray">' +  places.address_name  + '</span>';
    } else {
        itemStr += '    <span>' +  places.address_name  + '</span>'; 
    }
                 
      itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                '</div>';           

    el.innerHTML = itemStr;
    el.className = 'item';
      
    el.addEventListener('click', function() {
        onListItemClick(index);
    });

 
    return el;
}
function onListItemClick(index) {
    // 클릭된 항목에 대한 처리를 여기에 작성합니다.
     // NewPlacesArray는 검색 결과를 저장한 배열
    // 예: 클릭된 장소의 정보를 활용하여 무엇인가를 수행하거나 특정 기능을 호출
    // 예: 클릭한 장소의 정보를 이용해서 지도에서 해당 위치로 이동
    index_places = index; // 예시로 클릭한 장소 정보를 콘솔에 출력
    
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i; 

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
    
}

 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {   
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}
let convey_place_array = new Array(100);

function ConveyPlaces(place){
 
    convey_place_array[i] = place;
  console.log(convey_place_array[i]);
  
  
    
    let checkbox = document.querySelector(".Nth_day_checkbox1");
    if (checkbox.checked) {
        addToSearchList(`Day ${t_d_reverse[Create_Nth_Day_i]} (${ClickedYear}.${ClickedMonth}.${var_date[Create_Nth_Day_i]})`);
    } 
    let newP = document.querySelector(".Nth_day_p1");
    


}
