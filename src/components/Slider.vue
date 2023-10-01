<template>
    <div class="slider">
      <div class="slider__wrap">
        <a href="#" class="slider__arrow first__arrow" @click="prevSlide">
          <img src="/images/slider__arrow-left.svg" alt="arrow-left" />
        </a>
        <a href="#" class="slider__arrow second__arrow" @click="nextSlide">
          <img src="/images/slider__arrow-right.svg" alt="arrow-right" />
        </a>
  
        <div class="slider-block slider__first-item" v-show="currentSlide === 0">
          <div class="slider__item-wrapper">
          <img class="slider__img-1" src="/images/slider-img.png" alt="slider-img" />
          <!-- Добавьте остальное содержимое для первого слайда здесь -->
          <a class="slider__button" @click="scrollToCatalog" href="#">SHOP NOW <img src="/images/slider__button-icon.svg" alt="slider__button-icon" /></a>
        </div>
          <div class="slider__pagination">
            <a
              href="#"
              v-for="(slide, index) in slides"
              :key="index"
              @click="goToSlide(index)"
              :class="{ active: index === currentSlide, halfActive: index !== currentSlide }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#060E21" />
              </svg>
            </a>
          </div>
        </div>
  
        <div class="slider-block slider__second-item" v-show="currentSlide === 1">
          <div class="slider__item-wrapper">
          <img class="slider__img-1" src="/images/slider__img-3.png" alt="slider-img" />
          <!-- Добавьте остальное содержимое для второго слайда здесь -->
          <a class="slider__button slider__second-button" @click="scrollToCatalog" href="#">SHOP NOW <img src="/images/slider__button-icon.svg" alt="slider__button-icon" /></a>
        </div>
          <div class="slider__pagination">
            <a
              href="#"
              v-for="(slide, index) in slides"
              :key="index"
              @click="goToSlide(index)"
              :class="{ active: index === currentSlide }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#060E21" />
              </svg>
            </a>
          </div>
        </div>
  
        <div class="slider-block slider__third-item" v-show="currentSlide === 2">
          <div class="slider__item-wrapper">
          <img class="slider__img-1" src="/images/slider__img-2.png" alt="slider-img" />
          <a class="slider__button slider__third-button" @click="scrollToCatalog" href="#">SHOP NOW <img src="/images/slider__button-icon.svg" alt="slider__button-icon" /></a>
          </div>
          <div class="slider__pagination">
            <a
              href="#"
              v-for="(slide, index) in slides"
              :key="index"
              @click="goToSlide(index)"
              :class="{ active: index === currentSlide, halfActive: index !== currentSlide }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" :fill="index === currentSlide ? '#060E21' : 'rgba(6, 14, 33, 0.5)'" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="brands__row">
        <img src="/images/brand__1.png" alt="Brand 1" />
        <img src="/images/brand__2.png" alt="Brand 2" />
        <img src="/images/brand__3.png" alt="Brand 3" />
        <img src="/images/brand__4.png" alt="Brand 4" />
        <img src="/images/brand__5.png" alt="Brand 5" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [0, 1, 2],
      };
    },
    methods: {
      scrollToCatalog() {
         // Плавный якорный переход к каталогу
         const catalogElement = document.getElementById('catalog');
         catalogElement.scrollIntoView({
            behavior: 'smooth',
         });
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      },
      goToSlide(index) {
        this.currentSlide = index;
      },
    },
  };
  </script>


  <style scoped>

  .no__vision {
    display: none;
  }
  .slider-block {
    margin: 105px 160px 0;
    height: 449px;
    border-radius: 20px;
    }

   .slider__item-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: baseline;
   }

    .slider__first-item {
    background-image: url('/public/images/slider-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    }

    .slider__second-item {
        background-image: url('/public/images/slider-background__second.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .slider__third-item {
        background-image: url('/public/images/slider-background__third.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }  

    .slider__wrap {
        position: relative;
    }
  
    .slider__img-1 {
        padding-top: 35px;

    }

    .slider__button{
        margin-top: 29px;
        margin-left: 110px;
        border-radius: 4.75px;
        display: flex;
        width: 175px;
        height: 65px;
        background-color: #060E21;
        color: #FFF;
        font-family: 'Roboto';
        font-size: 22px;
        font-weight: 500;
        justify-content: center;
        align-items: center;
    }


    .slider__button img{
        padding-left: 10px;
    }
  
    .slider__pagination {
        display: flex;
        justify-content: center;
        gap: 50px;
        padding-top: 30px;
      }
      
      .slider__pagination a {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s;
        border-radius: 50%;
        opacity: 0.5; 
      }
      
      .slider__pagination a.active {
        opacity: 1; 
        background-color: #060e21;
      }

  .brands__row {
    padding-top: 140px;
    display: flex;
    gap: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
    }

    .slider__arrow {
        position: absolute;
    }

    .first__arrow {
        top: 225px;
        left: 90px;
    }

    .second__arrow {
        top: 225px;
        right: 90px;
    }
  

  </style>
  