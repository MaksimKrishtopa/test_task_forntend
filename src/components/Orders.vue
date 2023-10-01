<template>
    <div class="orders">
      <div class="orders__content">
        <h1 class="orders__section-title">Orders</h1>
        <div class="order-card" v-for="order in orders" :key="order.id">
          <div class="order-details">
            <div class="order-date">{{ order.deliveryDate }}</div>
            <div class="order-total-price">
              15,99$
            </div>
          </div>
          <div class="order-items">
            <img src="/images/orders__product-1.png" alt="order-img">
          </div>
        </div>
        <div class="order-card" v-for="order in orders" :key="order.id">
          <div class="order-details">
            <div class="order-date">{{ order.deliveryDate }}</div>
            <div class="order-total-price">
              15,99$
            </div>
          </div>
          <div class="order-items">
            <img src="/images/orders_product-2.png" alt="order-img">
          </div>
        </div>
        <div class="order-card" v-for="order in orders" :key="order.id">
          <div class="order-details">
            <div class="order-date">{{ order.deliveryDate }}</div>
            <div class="order-total-price">
              15,99$
            </div>
          </div>
          <div class="order-items">
            <img src="/images/orders_product-3.png" alt="order-img">
          </div>
        </div>
        
       
      </div>
      
    </div>
  </template>
  
  <script>
  
  
  export default {
    
    data() {
      return {
        orders: [
          {
            id: 1,
            deliveryDate: "2023-10-15",
            totalPrice: 150,
            items: [
              { id: 1, name: "Product 1", image: "/images/orders__product-1.png" },
              { id: 2, name: "Product 2", image: "/images/orders_product-2.png" },
              { id: 3, name: "Product 3", image: "/images/orders_product-3.png" },
            ],
          },
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .orders {
    padding-top: 150px; 
  }

  .orders__section-title {
  color: #060E21;
  font-family: 'Montserrat';
  font-size: 52px;
  font-style: normal;
  font-weight: 600;
  }
  
  .orders__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;
  }
  
  .order-card {
    width: 100%;
    margin: 20px;
    padding: 20px;
    border: 2px solid #EED852;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #060E21;
    font-family: 'Montserrat';
    color: #fff;
}
  
.order-details {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 24px;
}
  
  .order-items {
    display: flex;
    gap: 10px;
  }
  
  .order__item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  </style>