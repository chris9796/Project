//calendar_2.js

        //결정하기 선택한후 선택한 날짜 가져오고 계산하기
        const cal_btn = document.querySelector("#cal_btn");
        let travelFirstDate;
        let travelLastDate;
        let travel_date;
       cal_btn.addEventListener('click',function cal_decide(){
       const cal_display_div = document.querySelector("#cal_display_id");
        cal_display_div.classList.add("cal_display");


       const ChoiceDay_last = document.getElementsByClassName("choiceDay")[1].innerText;
       const ChoiceDay_first = document.getElementsByClassName("choiceDay")[0].innerText;
       travel_date = ChoiceDay_last - ChoiceDay_first + 1;
        
        

      alert(`여행하는 날이 ${travel_date}일이군요!`);
      const ClickedYear = document.getElementById("calYear").innerText;
      const ClickedMonth = document.getElementById("calMonth").innerText - 1;
      travelFirstDate = [ClickedYear,ClickedMonth,ChoiceDay_first];
      travelLastDate = [ClickedYear,ClickedMonth,ChoiceDay_last];
      console.log(travelFirstDate,travelLastDate);
        // 8월에서만 가능 8월과 9월 선택 불가능
       
       });
       //new div
       function Create_Nth_Day(){
        const newP = document.createElement('p');
        const newStrong = document.createElement('strong');
        const newSpan = document.createElement('button');
        const newUl = document.createElement('ul');
        const newLi = document.createElement('li');
        const innerP = document.createElement('p');
        innerP.className = 'item';

        newP.appendChild(newStrong);
        newP.appendChild(newSpan);
        newP.appendChild(newUl);
        newUl.setAttribute("id", "sortable");
        
        

        // newLi를 newUl의 자식 요소로 추가합니다.
        newUl.appendChild(newLi);
        newLi.appendChild(innerP);


        
          const aside = document.querySelector('aside');
      aside.appendChild(newP);

       }
    Create_Nth_Day();







//scedule_2.js
console.log(travelFirstDate,travelLastDate);

const Detail = document.querySelectorAll(".Detail_after");
    const btn = document.querySelector(".summary_btn");
    
    btn.addEventListener("click", Detail_btn_click);
    function Detail_btn_click(){
        for(let i = 0; i < Detail.length; i++){
            Detail[i].classList.toggle("Detail_after");
        }


        
        if(btn.innerText === "summary")
        btn.innerText = "Details";
        else{
            btn.innerText = "summary";
        }
    }