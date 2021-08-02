<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rizor Pages</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Rubik+Mono+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <?php
    // require functions.php file
    require ('functions.php');
    ?>
    <link rel="icon" href="<?php echo $imgObject->main_logo ?>">
</head>
<body>
<header class="header">
    <div class="header__wrapper">
        <a href="/"><img src="<?php echo $imgObject->main_logo ?>" alt="main page logo in the header" class="main-logo"></a>
        <nav class="header__nav navigation">
            <ul class="header__list navigation__list">
                <li class="header__list-item navigation__list-item"> 
                    <a href="#" class="header__link navigation__link">Преимущества</a>
                    <span class="navigation__underscore"></span>
                </li>
                <li class="header__list-item">
                    <a href="#" class="header__link navigation__link">Характеристики</a>
                    <span class="navigation__underscore"></span>
                </li>
                <li class="header__list-item">
                    <a href="#" class="header__link navigation__link">Для кого</a>
                    <span class="navigation__underscore"></span>
                </li>
            </ul>
        </nav>
        <div class="header__burger navigation__burger burger">
            <div class="burger__bar burger__bar--first"></div>
            <div class="burger__bar burger__bar--second"></div>
            <div class="burger__bar burger__bar--third"></div>
        </div>
    </div>
</header>