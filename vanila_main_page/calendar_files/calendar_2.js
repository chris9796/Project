
    
        //결정하기 선택한후 선택한 날짜 가져오고 계산하기
        const cal_btn = document.querySelector("#cal_btn");
        
       cal_btn.addEventListener('click',function cal_decide(){
        const cal_display_div = document.querySelector("#cal_display_id");
        cal_display_div.classList.add("cal_display");
        const ChoiceDay_last = document.getElementsByClassName("choiceDay")[1].innerText;
        const ChoiceDay_first = document.getElementsByClassName("choiceDay")[0].innerText;
       const travel_date = ChoiceDay_last - ChoiceDay_first + 1;
        
        

      alert(`여행하는 날이 ${travel_date}일이군요!`);
      const ClickedYear = document.getElementById("calYear").innerText;
      const ClickedMonth = document.getElementById("calMonth").innerText - 1;
      const travelFirstDate = new Date(ClickedYear,ClickedMonth,ChoiceDay_first);
      const travelLastDate = new Date(ClickedYear,ClickedMonth,ChoiceDay_last);
      console.log(travelFirstDate,travelLastDate);
        // 8월에서만 가능 8월과 9월 선택 불가능
       });
       
