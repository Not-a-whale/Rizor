<section class="advantages">
    <div class="advantages__img-container">
        <img src="<?php  echo $imgObject->video_background ?>" alt="Video Background">
    </div>
    <article class="advantages__design design">
        <h3 class="advantages__heading">Преимущества</h2>
        <div class="design__block">
            <h2 class="design__heading">Дизайн</h2>
            <p class="design__text">Внешний вид скутера дышит<br> идеями футуризма</p>
            <ul class="design__list">
                <li class="design__list-item">
                    <span class="mark"></span>
                    <p>Плавные линии</p>
                </li>
                <li class="design__list-item">
                    <span class="mark"></span>
                    <p>Подсветка светодиодными<br> индикаторами</p>
                </li>
                <li class="design__list-item">
                    <span class="mark"></span>
                    <p>Рельефные бамперы,<br> оснащенные защитными <br> панелями</p>
                </li>
            </ul>
        </div>
    </article>
    <article class="advantages__color color">
        <h2 class="color__heading">Цвет</h2>
        <p class="color__text">Модель представлена сразу <br> в нескольких цветах</p>
        <div class="color__colors">
            <div class="color__color color__color--yellow"></div>
            <div class="color__color color__color--blue"></div>
            <div class="color__color color__color--red"></div>
            <div class="color__color color__color--grey"></div>
            <div class="color__color color__color--black"></div>
        </div>
        <div class="color__container">
            <img src="<?php  echo $imgObject->board_img_yellow ?>" alt="yellow board image" class="color__item color__item--yellow">
            <img src="<?php  echo $imgObject->board_img_blue ?>" alt="blue board image" class="color__item color__item--blue">
            <img src="<?php  echo $imgObject->board_img_red ?>" alt="Red board image" class="color__item color__item--red">
            <img src="<?php  echo $imgObject->board_img_grey ?>" alt="grey board image" class="color__item color__item--grey">
            <img src="<?php  echo $imgObject->board_img_black ?>" alt="Black board image" class="color__item color__item--black active">
        </div>
        <div class="color__pointer">
            <img src="<?php  echo $imgObject->border_advantages ?>" alt="Advantages image">
        </div>
    </article>
    <img src="<?php  echo $imgObject->RIzor ?>" alt="Rizor background image" class="advantages__background">
</section>