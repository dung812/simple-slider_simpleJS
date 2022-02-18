window.addEventListener("load", function() {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const sliderItems = document.querySelectorAll(".slider-item");
    const btnPrev = document.querySelector(".slider-prev");
    const btnNext = document.querySelector(".slider-next");
    const dotItems = document.querySelectorAll(".slider-dots-item");
    
    const sliderItemWidth = sliderItems[0].offsetWidth; // Lấy độ dài slider item
    const sliderAllItemLength = sliderItems.length; // Số phần tử slider item
    let positionX = 0;
    let index = 0;
    
    
    btnNext.addEventListener("click", function(e) {
        handleBtnChangeSlide(1);
    
    });
    
    btnPrev.addEventListener("click", function(e) {
        handleBtnChangeSlide(-1);
    });
    
    
    function handleBtnChangeSlide(direction) {
        if (direction === 1) {
            // Handle next
            if (index >= sliderAllItemLength - 1) {
                index = sliderAllItemLength - 1;
                return;
            }
    
            positionX -= sliderItemWidth;
            sliderWrapper.style = `transform: translateX(${positionX}px)`;
            index++;
        }
    
        else if (direction === -1) {
            // Handle prev
            if (index <= 0) {
                index = 0;
                return;
            }
    
            positionX += sliderItemWidth;
            sliderWrapper.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    
        // Khi bấm nút next prev thì dot sẽ cập nhập vị trí
        [...dotItems].forEach(item => item.classList.remove("active"));
        dotItems[index].classList.add("active");
    }
    
    // Sự kiện bấm nút tròn để chuyển slider
    [...dotItems].forEach(item => item.addEventListener("click", function(e){
        const indexDot = parseInt(e.target.dataset.index);
        positionX = -1 * sliderItemWidth * indexDot;
        sliderWrapper.style = `transform: translateX(${positionX}px)`;
    }));
    
    // Sự kiện bấm nút tròn để active nút tròn đó
    [...dotItems].forEach(item => item.addEventListener("click", function(e){
        [...dotItems].forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
    }));
});