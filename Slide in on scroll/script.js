function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const imageslider = document.querySelectorAll('.slide-in');

  function checkslide(){
      imageslider.forEach(imageslide =>{
          const slideInAt = (window.scrollY + window.innerHeight) - imageslide.height/2;
          const imgBottom = imageslide.offsetTop + imageslide.height;
          const isHalfShown = slideInAt > imageslide.offsetTop;
          const isNotScrolledPast = window.scrollY < imgBottom;
          if(isHalfShown && isNotScrolledPast){
            imageslide.classList.add('active');
          }else{
            imageslide.classList.remove('active');
          }
      });
  }



  window.addEventListener('scroll',debounce(checkslide));
