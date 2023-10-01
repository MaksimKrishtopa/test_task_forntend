<template>
   <footer class="footer" id="contacts">
    <div class="footer__container">
      <div class="logo">
        <a><img src="/images/Logo.svg" alt="JustBuy Logo" width="168" height="90" /></a>
      </div>
      <nav class="nav footer__nav">
        <NavItem :class="{ active: $route.path === '/' }">
          <router-link to="/">Home</router-link>
        </NavItem>
        <NavItem :class="{ active: $route.path === '/orders' }">
          <router-link to="/orders">Orders</router-link>
        </NavItem>
        <NavItem :class="{ active: isContactsActive }">
          <a @click="scrollToContacts">Contacts</a>

          <div class="contacts__content">
            <p>+79234269673</p>
            <div class="soceties">
              <img src="/images/vk-icon.svg" alt="icon">
              <img src="/images/tg-icon.svg" alt="icon">
              <img src="/images/whatsapp-icon.svg" alt="icon">
            </div>
          </div>
        </NavItem>
      </nav>
    </div>
   </footer>
  </template>
  
  <script>
  export default {
   
  };
  
  </script>
  
  <style scoped>
    .footer__container {
      display: flex;
      margin: 0 200px;
      padding: 75px 0;
      justify-content: space-between;
    }

    .footer__nav {
      gap: 215px;
    }

    .contacts__content {
      padding-top: 75px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .soceties {
      display: flex;
      gap: 10px;
    }

    .soceties img{
      cursor: pointer;
    }



  </style>