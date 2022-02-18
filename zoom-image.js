window.addEventListener("load",function(){
    const imageWrapper = document.querySelector(".slider-item");
    const imageCover = document.querySelectorAll(".image-cover");
    let imageWrapperWidth = imageWrapper.offsetWidth;
    let imageWrapperHeight = imageWrapper.offsetHeight;



    [...imageCover].forEach(item => item.addEventListener("mousemove",handlerHoverImage));
    
    function handlerHoverImage(e){
        const pX = e.pageX;
        const pY = e.pageY;
        e.target.previousElementSibling.style = "width: auto; height: auto; max-height: unset";
        let imageWidth = e.target.previousElementSibling.offsetWidth;
        let imageHeight = e.target.previousElementSibling.offsetHeight;
        let spaceX = (imageWidth / 2 - imageWrapperWidth) * 3;
        let spaceY = (imageHeight / 2 - imageWrapperHeight) * 3;
        imageWidth = imageWidth + spaceX;
        imageHeight = imageHeight + spaceY;
        let ratioX = imageWidth / imageWrapperWidth / 2;
        let ratioY = imageHeight / imageWrapperHeight / 2;
        let x = (pX - imageWrapper.offsetLeft) * ratioX;
        let y = (pY - imageWrapper.offsetTop) * ratioY;
        e.target.previousElementSibling.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none;`;
    };

    [...imageCover].forEach(item => item.addEventListener("mouseleave",function(e){
        e.target.previousElementSibling.style = "";
    }));

});