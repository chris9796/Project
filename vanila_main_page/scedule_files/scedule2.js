//calendar_2.js

        //결정하기 선택한후 선택한 날짜 가져오고 계산하기
        const cal_btn = document.querySelector("#cal_btn");
        let travelFirstDate;
        let travelLastDate;
        let travel_date;
        let ClickedYear;
        let ClickedMonth;
        let ChoiceDay_first;
        let ChoiceDay_last
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
      console.log(travelFirstDate,travelLastDate);
        // 8월에서만 가능 8월과 9월 선택 불가능

       
      
          while(travel_date != 0){
                console.log(ChoiceDay_first,ChoiceDay_last);
                Create_Nth_Day(travel_date);
                
                travel_date--;
             }
       
       });
      

       //알고리즘 어떻게 할거야??
       //큰틀로 가장 중요한건 TRAVEL_DATE가 0이 될때까지로 하고 그걸 한번 실행할때마다 -- 를 하자.

       function Create_Nth_Day(t_date){
        
    //     function translate_date(t_date){
    //         while(let real_date = 0; t_){
    //             real_date 
    //         }
    //     }


        const newP = document.createElement('p');
        const newStrong = document.createElement('strong');
        const newSpan = document.createElement('span');
        const newButton = document.createElement('button');
        // const newUl = document.createElement('ul');
        // const newLi = document.createElement('li');
        // const innerP = document.createElement('p');
        // innerP.className = 'item';

        newP.appendChild(newStrong);
        newP.appendChild(newSpan);
        newP.appendChild(newButton);
        newStrong.className = "scedule_strong";
        newSpan.className = "date";
        newButton.className = "summary_btn";
        newSpan.innerText = `${ClickedYear}.${ClickedMonth}.`;
        newStrong.innerText = `${t_date}일차`;
        
        
        
        // newP.appendChild(newUl);
        // newUl.setAttribute("id", "sortable");
        
        

        // newLi를 newUl의 자식 요소로 추가합니다.
        // newUl.appendChild(newLi);
        // newLi.appendChild(innerP);


        
          const aside = document.querySelector('aside');
        aside.appendChild(newP);

       }


       //new div








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

        
    