<template>
    <div class="catalog">
        <Slider></Slider>
      <div class="section-title">
        <span>Catalog</span>
      </div>
  
      <div id="catalog" class="products__cards">
        <ul class="products__cards-list">
            <li class="products__list-item">
                <img src="/images/card__img-1.png" alt="product">
                <div class="product__desc">
                    <h4 class="product__title">Hoodies and Sweatshirt</h4>
                    <h3 class="product__price">15,99$</h3>
                    
                </div>
                <div class="add__product-tocart"><img src="/images/catalog__cart-icon.svg" alt="cart"></div>
            </li>
            <li class="products__list-item">
                <img src="/images/card__img-2.png" alt="product">
                <div class="product__desc">
                    <h4 class="product__title">Hoodies and Sweatshirt</h4>
                    <h3 class="product__price">15,99$</h3>
                    
                </div>
                <div class="add__product-tocart"><img src="/images/catalog__cart-icon.svg" alt="cart"></div>
            </li>
            <li class="products__list-item">
                <img src="/images/card__img-3.png" alt="product">
                <div class="product__desc">
                    <h4 class="product__title">Hoodies and Sweatshirt</h4>
                    <h3 class="product__price">15,99$</h3>
                    
                </div>
                <div class="add__product-tocart"><img src="/images/catalog__cart-icon.svg" alt="cart"></div>
            </li>
            <li class="products__list-item">
                <img src="/images/card__img-4.png" alt="product">
                <div class="product__desc">
                    <h4 class="product__title">Hoodies and Sweatshirt</h4>
                    <h3 class="product__price">15,99$</h3>
                    
                </div>
                <div class="add__product-tocart"><img src="/images/catalog__cart-icon.svg" alt="cart"></div>
            </li>
            <li class="products__list-item">
                <img src="/images/card__img-5.png" alt="product">
                <div class="product__desc">
                    <h4 class="product__title">Hoodies and Sweatshirt</h4>
                    <h3 class="product__price">15,99$</h3>
                    
                </div>
                <div class="add__product-tocart"><img src="/images/catalog__cart-icon.svg" alt="cart"></div>
            </li>
            <li class="products__list-item">
                <img src="/images/card__img-6.png" alt="product">
                <div class="product__desc">
                    <h4 class="product__title">Hoodies and Sweatshirt</h4>
                    <h3 class="product__price">15,99$</h3>
                    
                </div>
                <div class="add__product-tocart"><img src="/images/catalog__cart-icon.svg" alt="cart"></div>
            </li>
        </ul>
      </div>

      <div class="catalog__pagination">
        <div class="catalog__pages-pag">
            1 2 3
            <img src="/images/pag__icon.svg" alt="next">
        </div>
        <div class="loading-more">
            <p>Show more</p>
            <img src="/images/switch__page-icon.svg" alt="Switch Page"/>
        </div>
    </div>
    </div>
</template>
  
  <script>
  import Slider from "@/components/Slider";

  export default {
    components: {
       Slider,
    },
    data() {
        
    },
    
};
</script>
  
  <style scoped>

  .catalog {
    text-align: center;
    margin-bottom: 350px;
  }

  .slider {
    padding-bottom: 200px;
  }
  
  .section-title {
    color: #060E21;
    font-family: 'Montserrat';
    font-size: 52px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .products__cards {
    padding-top: 100px;
    font-family: 'Roboto';
    font-size: 22px;

  }

  .products__cards-list {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 120px;
    margin: 0 200px;
}
.products__list-item {
    display: flex;
    border: 3px solid #060E21;
    border-radius: 20px;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
}

.product__desc {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
}

.product__title {
    margin-bottom: 10px; 
}


.add__product-tocart{
    cursor: pointer;
    margin-left: auto;
    margin-top: -60px;
}



.catalog__pagination{
    margin-top: 100px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    column-gap: 75px;
}

.catalog__pages-pag {
    color: #060E21;
    font-family: 'Roboto';
    font-size: 28px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    column-gap: 20px;
    cursor: pointer;
}

  .loading-more {
    color: #060E21;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loading-more img {
    margin: 0 10px;
    cursor: pointer;
  }

 
</style>
  