function openPopup() {
    // Открываем окно путем удаления класса "hide" у блока cartMobile__popup
    document.querySelector('.cartMobile__popup').classList.remove('hide');
  
    // Скрываем блок cartMobile__cart путем добавления класса "hide"
    document.getElementById('cartMobileCart').classList.add('hide');
  
    // По умолчанию отображаем только форму popup__data-formPhiz
    document.querySelector('.popup__data-formPhiz').style.display = 'block';
    document.querySelector('.popup__data-formJur').style.display = 'none';
  }
  
  // Функция для переключения между формами popup__data-formPhiz и popup__data-formJur
  function toggleForms(form) {
    if (form === 'phiz') {
        document.querySelector('.popup__data-formPhiz').style.display = 'block';
        document.querySelector('.popup__data-formJur').style.display = 'none';
    } else if (form === 'jur') {
        document.querySelector('.popup__data-formPhiz').style.display = 'none';
        document.querySelector('.popup__data-formJur').style.display = 'block';
    } else if (form === 'courier') {
        document.querySelector('.popup__data-formCourier').style.display = 'block';
        document.querySelector('.popup__data-formPlace').style.display = 'none';
    } else if (form === 'place') {
        document.querySelector('.popup__data-formCourier').style.display = 'none';
        document.querySelector('.popup__data-formPlace').style.display = 'block';
    }
  }
  
  
  var buttonData = document.getElementById("cartMobile__popup-buttonOne");
  var buttonDelivery = document.getElementById("cartMobile__popup-buttonThwo");
  var buttonPay = document.getElementById("cartMobile__popup-buttonThree");
  buttonData.addEventListener("click", function(){
    document.querySelector(".popup__data").classList.add("hide");
    document.querySelector(".popup__delivery").classList.remove("hide");
    document.querySelector(".cartMobile__popup-progressItem:nth-child(2)").classList.add("active");
  });
  buttonDelivery.addEventListener("click", function(){
    document.querySelector(".popup__data").classList.add("hide");
    document.querySelector(".popup__delivery").classList.add("hide");
    document.querySelector(".popup__pay").classList.remove("hide");
    document.querySelector(".cartMobile__popup-progressItem:last-child").classList.add("active");
  });
  buttonPay.addEventListener("click", function(){
    document.querySelector(".popup__data").classList.add("hide");
    document.querySelector(".popup__delivery").classList.add("hide");
    document.querySelector(".popup__pay").classList.add("hide");
    document.querySelector(".popup__end").classList.remove("hide");
    document.querySelector(".cartMobile__popup-header").classList.add("hide");
    document.querySelector(".tabs__oreder").classList.add("active");
    document.querySelector(".cartMobile__popup-progressItem:last-child").classList.add("submit");
  });
  
  
  var sbpButton = document.querySelector(".popup__data-buttonSbp");
  var CheckButton = document.querySelector(".popup__data-buttonCheck");
  CheckButton.addEventListener("click", function(){
    document.querySelector(".popup__data-formSbp").classList.add("hide")
    document.querySelector(".popup__data-formCheck").classList.remove("hide")
    CheckButton.classList.add("active")
    sbpButton.classList.add("hide")
    
  })
  sbpButton.addEventListener("click", function(){
    document.querySelector(".popup__data-formSbp").classList.remove("hide")
    document.querySelector(".popup__data-formCheck").classList.add("hide")
    CheckButton.classList.remove("active")
    sbpButton.classList.remove("hide")
  })
  
  
  var buttonPhiz = document.querySelector(".popup__data-buttonPhiz");
  var buttonJur = document.querySelector(".popup__data-buttonJur");
  var buttonCourier = document.querySelector(".popup__data-buttonCourier");
  var buttonPlace = document.querySelector(".popup__data-buttonPlace");
  
  buttonJur.addEventListener("click", function(){
    buttonJur.classList.add("active");
    buttonPhiz.classList.add("hide");
  });
  buttonPhiz.addEventListener("click", function(){
    buttonJur.classList.remove("active");
    buttonPhiz.classList.remove("hide");
  });
  
  buttonPlace.addEventListener("click", function(){
    buttonCourier.classList.add("hide");
    buttonPlace.classList.remove("hide");
  });
  buttonCourier.addEventListener("click", function(){
    buttonCourier.classList.remove("hide");
    buttonPlace.classList.add("hide");
  });
  
  
  
  // Обработчик события для кнопки popup__data-buttonCourier
  document.querySelector('.popup__data-buttonCourier').addEventListener('click', function() {
    toggleForms('courier');
  });
  
  // Обработчик события для кнопки popup__data-buttonPlace
  document.querySelector('.popup__data-buttonPlace').addEventListener('click', function() {
    toggleForms('place');
  });