const input_btn = document.querySelector("#input-btn");
const show_btn = document.querySelector(".show-btn");
const lrside = document.querySelector("#lrside");
const tbside = document.querySelector("#tbside");
const popup = document.querySelector("#popup");
const toast_popup1 = document.querySelector(".output1");
const toast_popup2 = document.querySelector(".output2");
const toast_popup3 = document.querySelector(".output3");
const toast_popup4 = document.querySelector(".output4");

show_btn.addEventListener("click", function () {
  if (popup.value === "Success") {
    toast_popup1.style.backgroundColor = "#32c731";
    toast_popup2.style.backgroundColor = "#32c731";
    toast_popup3.style.backgroundColor = "#32c731";
    toast_popup4.style.backgroundColor = "#32c731";
    if (lrside.value === "Left") {
      if (tbside.value === "Top") {
        toast_popup1.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup1.innerHTML = `${input_btn.value} <span class="cross1"> X</span>`;
        const cross1 = document.querySelector(".cross1");
        if (
          cross1.addEventListener("click", function () {
            toast_popup1.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup2.style.display = "block";
        toast_popup1.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup2.innerHTML = `${input_btn.value} <span class="cross2"> X</span>`;
        const cross2 = document.querySelector(".cross2");
        if (
          cross2.addEventListener("click", function () {
            toast_popup2.style.display = "none";
          })
        ) {
        }
      }
    } else if (lrside.value === "Right") {
      if (tbside.value === "Top") {
        toast_popup3.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup3.innerHTML = `${input_btn.value} <span class="cross3"> X</span>`;
        const cross3 = document.querySelector(".cross3");
        if (
          cross3.addEventListener("click", function () {
            toast_popup3.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup4.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.innerHTML = `${input_btn.value} <span class="cross4"> X</span>`;
        const cross4 = document.querySelector(".cross4");
        if (
          cross4.addEventListener("click", function () {
            toast_popup4.style.display = "none";
          })
        ) {
        }
      }
    }
  }
});

show_btn.addEventListener("click", function () {
  if (popup.value === "Error") {
    toast_popup1.style.backgroundColor = "red";
    toast_popup2.style.backgroundColor = "red";
    toast_popup3.style.backgroundColor = "red";
    toast_popup4.style.backgroundColor = "red";
    if (lrside.value === "Left") {
      if (tbside.value === "Top") {
        toast_popup1.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup1.innerHTML = `${input_btn.value} <span class="cross1"> X</span>`;
        const cross1 = document.querySelector(".cross1");
        if (
          cross1.addEventListener("click", function () {
            toast_popup1.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup2.style.display = "block";
        toast_popup1.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup2.innerHTML = `${input_btn.value} <span class="cross2"> X</span>`;
        const cross2 = document.querySelector(".cross2");
        if (
          cross2.addEventListener("click", function () {
            toast_popup2.style.display = "none";
          })
        ) {
        }
      }
    } else if (lrside.value === "Right") {
      if (tbside.value === "Top") {
        toast_popup3.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup3.innerHTML = `${input_btn.value} <span class="cross3"> X</span>`;
        const cross3 = document.querySelector(".cross3");
        if (
          cross3.addEventListener("click", function () {
            toast_popup3.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup4.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.innerHTML = `${input_btn.value} <span class="cross4"> X</span>`;
        const cross4 = document.querySelector(".cross4");
        if (
          cross4.addEventListener("click", function () {
            toast_popup4.style.display = "none";
          })
        ) {
        }
      }
    }
  }
});

show_btn.addEventListener("click", function () {
  if (popup.value === "Warning") {
    toast_popup1.style.backgroundColor = "#FFA500";
    toast_popup2.style.backgroundColor = "#FFA500";
    toast_popup3.style.backgroundColor = "#FFA500";
    toast_popup4.style.backgroundColor = "#FFA500";
    if (lrside.value === "Left") {
      if (tbside.value === "Top") {
        toast_popup1.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup1.innerHTML = `${input_btn.value} <span class="cross1"> X</span>`;
        const cross1 = document.querySelector(".cross1");
        if (
          cross1.addEventListener("click", function () {
            toast_popup1.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup2.style.display = "block";
        toast_popup1.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup2.innerHTML = `${input_btn.value} <span class="cross2"> X</span>`;
        const cross2 = document.querySelector(".cross2");
        if (
          cross2.addEventListener("click", function () {
            toast_popup2.style.display = "none";
          })
        ) {
        }
      }
    } else if (lrside.value === "Right") {
      if (tbside.value === "Top") {
        toast_popup3.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup3.innerHTML = `${input_btn.value} <span class="cross3"> X</span>`;
        const cross3 = document.querySelector(".cross3");
        if (
          cross3.addEventListener("click", function () {
            toast_popup3.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup4.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.innerHTML = `${input_btn.value} <span class="cross4"> X</span>`;
        const cross4 = document.querySelector(".cross4");
        if (
          cross4.addEventListener("click", function () {
            toast_popup4.style.display = "none";
          })
        ) {
        }
      }
    }
  }
});

show_btn.addEventListener("click", function () {
  if (popup.value === "Info") {
    toast_popup1.style.backgroundColor = "#99A15E";
    toast_popup2.style.backgroundColor = "#99A15E";
    toast_popup3.style.backgroundColor = "#99A15E";
    toast_popup4.style.backgroundColor = "#99A15E";
    if (lrside.value === "Left") {
      if (tbside.value === "Top") {
        toast_popup1.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup1.innerHTML = `${input_btn.value} <span class="cross1"> X</span>`;
        const cross1 = document.querySelector(".cross1");
        if (
          cross1.addEventListener("click", function () {
            toast_popup1.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup2.style.display = "block";
        toast_popup1.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup2.innerHTML = `${input_btn.value} <span class="cross2"> X</span>`;
        const cross2 = document.querySelector(".cross2");
        if (
          cross2.addEventListener("click", function () {
            toast_popup2.style.display = "none";
          })
        ) {
        }
      }
    } else if (lrside.value === "Right") {
      if (tbside.value === "Top") {
        toast_popup3.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.style.display = "none";
        toast_popup3.innerHTML = `${input_btn.value} <span class="cross3"> X</span>`;
        const cross3 = document.querySelector(".cross3");
        if (
          cross3.addEventListener("click", function () {
            toast_popup3.style.display = "none";
          })
        ) {
        }
      } else {
        toast_popup4.style.display = "block";
        toast_popup2.style.display = "none";
        toast_popup3.style.display = "none";
        toast_popup1.style.display = "none";
        toast_popup4.innerHTML = `${input_btn.value} <span class="cross4"> X</span>`;
        const cross4 = document.querySelector(".cross4");
        if (
          cross4.addEventListener("click", function () {
            toast_popup4.style.display = "none";
          })
        ) {
        }
      }
    }
  }
});
