url_products = "https://dummyjson.com/products";
url_categories = "https://dummyjson.com/products/categories";

// Products
fetch(url_products)
  .then((data) => {
    return data.json();
  })

  .then((allData) => {
    let singleData = Object.keys(allData.products);

    singleData.map((values) => {
      singleData[values] = `<div class="blog-post d-flex py-3">
    <div class="col-lg-3 col-md-3 col-sm-12 h-100 blog-image">
      <img src=${allData.products[values].thumbnail} class="img-fluid rounded-2" alt="...">
    </div>
    <article class="col-lg-6 col-md-6 col-sm-12 mx-4 blog-content">
      <h3 class="blog-post-title"><a href="#">${allData.products[values].title}</a></h3>
      <p class="blog-post-meta py-3">Written By <a href="#">${allData.products[values].brand}</a>
      </p>
      <p style="text-align: justify;">${allData.products[values].description}</p>
    </article>
  </div>`;
    });

    document.getElementById("news").innerHTML = singleData.slice(0, 5);
  })
  .catch((err) => {
    console.log(err);
  });

// Categories
document.addEventListener("DOMContentLoaded", function () {

  loadProducts(1);
  loadCategory();

});

//Products
function loadProducts(currentPage) {


  document.getElementById("products").innerHTML = `<div class="blog-post d-flex py-3">
  <div class="col-lg-3 col-md-3 col-sm-12 h-100 blog-image placeholder">
    
  </div>
  <article class="col-lg-6 col-md-6 col-sm-12 mx-4 blog-content">
    <h3 class="blog-post-title placeholder">

  <a  href="#"></a></h3>
  <p class="blog-post-meta py-3 placeholder"> <a href="#"></a>
  </p>
  <p class="placeholder" style="text-align: justify;"></p>
  </article>
  </div>
  <div class="blog-post d-flex py-3">
  <div class="col-lg-3 col-md-3 col-sm-12 h-100 blog-image placeholder">
    
  </div>
  <article class="col-lg-6 col-md-6 col-sm-12 mx-4 blog-content">
    <h3 class="blog-post-title placeholder">

  <a  href="#"></a></h3>
  <p class="blog-post-meta py-3 placeholder"> <a href="#"></a>
  </p>
  <p class="placeholder" style="text-align: justify;"></p>
  </article>
  </div>
  <div class="blog-post d-flex py-3">
  <div class="col-lg-3 col-md-3 col-sm-12 h-100 blog-image placeholder">
    
  </div>
  <article class="col-lg-6 col-md-6 col-sm-12 mx-4 blog-content">
    <h3 class="blog-post-title placeholder">

  <a  href="#"></a></h3>
  <p class="blog-post-meta py-3 placeholder"> <a href="#"></a>
  </p>
  <p class="placeholder" style="text-align: justify;"></p>
  </article>
  </div>
  <div class="blog-post d-flex py-3">
  <div class="col-lg-3 col-md-3 col-sm-12 h-100 blog-image placeholder">
    
  </div>
  <article class="col-lg-6 col-md-6 col-sm-12 mx-4 blog-content">
    <h3 class="blog-post-title placeholder">

  <a  href="#"></a></h3>
  <p class="blog-post-meta py-3 placeholder"> <a href="#"></a>
  </p>
  <p class="placeholder" style="text-align: justify;"></p>
  </article>
  </div>
  `
  var pageLimit = 5;
  var skipVal = (currentPage - 1) * pageLimit;

  var url_products =
    "https://dummyjson.com/products?limit=" + pageLimit + "&skip=" + skipVal;

  fetch(url_products)
    .then((data) => {
      return data.json();
    })
    .then((allData) => {
      console.log(allData.limit);
      let singleData = Object.keys(allData.products);

      
      document.getElementById("products").innerHTML = singleData.map((values) => {

        return ` <div class="blog-post d-flex py-3">
                            <div class="col-lg-3 col-md-3 col-sm-12 h-100 blog-image ">
                              <img src=${allData.products[values].thumbnail} class="img-fluid rounded-2" height="200px" width="300px" alt="...">
                            </div>
                            <article class="col-lg-6 col-md-6 col-sm-12 mx-4 blog-content">
                              <h3 class="blog-post-title ">
    
                            <a  href="#">${allData.products[values].title}</a></h3>
                            <p class="blog-post-meta py-3 ">Written By <a href="#">${allData.products[values].brand}</a>
                            </p>
                            <p class="" style="text-align: justify;">${allData.products[values].description}</p>
                            </article>
                            </div>`;
      }).join("");

      var totalPage = Math.ceil(allData.total / pageLimit);
      generatePagination(totalPage, currentPage);
    })
    .catch((err) => {
      console.log(err);
    });
}

function generatePagination(totalPage, currentPage) {
  var ul = document.getElementById("pagination");
  ul.innerHTML = "";

  for (let i = 1; i <= totalPage; i++) {
    var li = document.createElement("li");
    li.classList.add("page-item");
    if (currentPage == i) {
      li.classList.add("active");
    }
    var a = document.createElement("a");
    a.classList.add("page-link");
    a.setAttribute("onclick", `loadProducts(${i})`);
    a.appendChild(document.createTextNode(i));
    li.appendChild(a);
    ul.appendChild(li);
  }
}

//Categories
function loadCategory() {
  const url_categories = "https://dummyjson.com/products/categories";
  fetch(url_categories)
    .then((response) => response.json())

    .then(function (data) {
      let len = data.length;

      let text = " ";
      for (let i = 0; i < len; i++) {
        text += `<li>
            <a href="#">${data[i]} <i class="fa-solid fa-angle-down float-end"></i></a>
            </li>`;
      }

      document.getElementById("categories").innerHTML = text;
    });
}



