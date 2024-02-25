document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, является ли устройство мобильным
    if (window.matchMedia("(max-width: 767px)").matches) {
        // Если устройство мобильное
        fetch('cart_mobile.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('cart').innerHTML = data;

                // Получаем элементы header__shop и cart после загрузки содержимого для корзины
                const headerShopButton = document.querySelector('.header__shop');
                let cartElement = document.querySelector('.cart');

                // Проверяем разрешение экрана при загрузке страницы
                if (window.innerWidth < 800) {
                    // Если разрешение экрана меньше 765 пикселей, заменяем cartElement на cart_mobile
                    cartElement = document.querySelector('.cartMobile');
                }

                // Добавляем обработчик события click к элементу header__shop
                headerShopButton.addEventListener('click', () => {
                    if (cartElement) {
                        cartElement.classList.toggle('open');
                        document.body.classList.toggle('hide');
                        document.querySelector(".header").classList.toggle('active');
                        headerShopButton.classList.toggle('active');
                    } else {
                        console.error('cartElement не найден');
                    }
                });
            });
    } else {
        // Если устройство не мобильное или разрешение экрана больше или равно 768 пикселей
        if (navigator.userAgent.includes('Windows')) {
            // Проверяем, является ли устройство Windows
            fetch('cart.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('cart').innerHTML = data;

                    // Получаем элементы header__shop и cart после загрузки содержимого для корзины
                    const headerShopButton = document.querySelector('.header__shop');
                    let cartElement = document.querySelector('.cart');

                    // Проверяем разрешение экрана при загрузке страницы
                    if (window.innerWidth < 800) {
                        // Если разрешение экрана меньше 765 пикселей, заменяем cartElement на cart_mobile
                        cartElement = document.querySelector('.cartMobile');
                    }

                    // Добавляем обработчик события click к элементу header__shop
                    headerShopButton.addEventListener('click', () => {
                        if (cartElement) {
                            cartElement.classList.toggle('open');
                            document.body.classList.toggle('hide');
                            document.querySelector(".header").classList.toggle('active');
                            headerShopButton.classList.toggle('active');
                        } else {
                            console.error('cartElement не найден');
                        }
                    });
                });
        } else {
            // Проверяем разрешение экрана
            var width = window.innerWidth;
            var cartUrl = (width && width < 800) ? 'cart_mobile.html' : 'cart.html';

            fetch(cartUrl)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('cart').innerHTML = data;

                    // Получаем элементы header__shop и cart после загрузки содержимого для корзины
                    const headerShopButton = document.querySelector('.header__shop');
                    let cartElement = document.querySelector('.cart');

                    // Проверяем разрешение экрана при загрузке страницы
                    if (window.innerWidth < 800) {
                        // Если разрешение экрана меньше 765 пикселей, заменяем cartElement на cart_mobile
                        cartElement = document.querySelector('.cartMobile');
                    }

                    // Добавляем обработчик события click к элементу header__shop
                    headerShopButton.addEventListener('click', () => {
                        if (cartElement) {
                            cartElement.classList.toggle('open');
                            document.body.classList.toggle('hide');
                            document.querySelector(".header").classList.toggle('active');
                            headerShopButton.classList.toggle('active');
                        } else {
                            console.error('cartElement не найден');
                        }
                    });
                });
        }
    }

    var searchIcon = document.querySelector('.header__search-icon');
    var searchBlock = document.querySelector('.header__mobile-search');

    searchIcon.addEventListener('click', function(event) {
        // Проверяем ширину экрана
        if (window.innerWidth < 945) {
            event.preventDefault();
            searchBlock.classList.toggle('active');
        }
    });
});