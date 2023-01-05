let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const registerFormData = new FormData(registerForm);
  let brand = registerFormData.get("brand");
  let type = registerFormData.get("type");
  let year = registerFormData.get("Year");
  let kms = registerFormData.get("km_drive");
  let Description = registerFormData.get("description");
  let Price = registerFormData.get("price");

  if (
    brand === "" ||
    type === "" ||
    year === "" ||
    kms === "" ||
    Description === "" ||
    Price === ""
  ) {
    alert("please fill the missing details");
  } else {
    let obj = {
      brand,
      type,
      year,
      kms,
      Description,
      Price,
    };
let data = JSON.stringify(obj);
     register(data);
  }
});
function register(data) {
  fetch("https://data-qkfn.onrender.com/cars", {
  method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      alert("registered successfully");
      setTimeout(() => {
        window.location.href = "CarsPage.html";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    });
}