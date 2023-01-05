function navbar() {
    return `
      <nav id="navbar">
      <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f694.svg" alt="">
      <div class="logo">
      <p1 style="font-size:30px">Masaicars</p1>
      </div>
      <div class="pages">
          <div>
              <button onclick="window.location.href='AdPage.html'">REGISTER YOUR CARS HERE</button>
          </div>
          <div><button onclick="window.location.href='CarsPage.html'">CAR MODELS</button></div>
          <div><button onclick="window.location.href='WishlistPage.html'">WISHLIST</button></div>
      </div>
  </nav>
      `
  }
  export default navbar;