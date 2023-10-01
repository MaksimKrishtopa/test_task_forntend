<template>
    <div class="app">
        <Header></Header>
      
        <router-view></router-view>
        <Footer>
        </Footer>
    </div>
</template>


<script>

import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Catalog from "@/components/Catalog";
import Orders from "@/components/Orders";
import NavItem from "@/components/NavItem";
import Footer from "@/components/Footer";
export default {
    components: {
        Header,Slider,Catalog,Orders,NavItem,Footer,
},
    data() {
      
    },
   
  };
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


li,ul,ol {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}

nav {
  padding-left: 180px;
  display: flex;
  gap: 90px;
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 600;
  color: #FFF;
  position: relative;
}

.nav a:hover {
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.70);
    cursor: pointer;
  }

  .footer {
    background: #060E21;
    width: 100%;
    margin-top: 100px;
  }
</style>