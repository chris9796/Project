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