document.addEventListener("DOMContentLoaded", () => {

    /* ===== SLIDER ===== */
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
  
    if (slides.length && nextBtn && prevBtn) {
      let currentSlide = 0;
  
      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
      }
  
      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });
  
      prevBtn.addEventListener("click", () => {
        currentSlide =
          (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      });
    }
  
    /* ===== ORDER FORM ===== */
    const orderForm = document.getElementById("orderForm");

    if (orderForm) {
      orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const type = document.getElementById("orderType").value;
    
        let products = [];
        let totalQuantity = 0;
    
        // کوکی نوتلا
        const nutellaCheckbox = document.querySelector('input[value="کوکی نوتلا"]');
        const nutellaQtyInput = document.querySelector('input[name="quantity-nutella"]');
    
        if (nutellaCheckbox.checked) {
          const qty = parseInt(nutellaQtyInput.value) || 0;
          products.push(`کوکی نوتلا × ${qty}`);
          totalQuantity += qty;
        }
    
        // بلوندی چاکلت چیپ
        const blondieCheckbox = document.querySelector('input[value="بلوندی چاکلت چیپ"]');
        const blondieQtyInput = document.querySelector('input[name="quantity-blondie"]');
    
        if (blondieCheckbox.checked) {
          const qty = parseInt(blondieQtyInput.value) || 0;
          products.push(`بلوندی چاکلت چیپ × ${qty}`);
          totalQuantity += qty;
        }
    
        // حداقل یک محصول
        if (products.length === 0) {
          alert("لطفاً حداقل یک محصول انتخاب کنید 🍪");
          return;
        }
    
        // شرط حداقل سفارش
        if (type === "cafe" && totalQuantity < 10) {
          alert("حداقل سفارش برای کافه ۱۰ عدد است ☕");
          return;
        }
    
        if (type === "personal" && totalQuantity < 3) {
          alert("حداقل سفارش برای مصرف شخصی ۳ عدد است 🍪");
          return;
        }
    
        const waNumber = "989194589524"; // شماره واتساپ فعال
    
        const text = `سفارش جدید:
    نام: ${name}
    شماره تماس: ${phone}
    نوع سفارش: ${type}
    محصولات:
    ${products.join("\n")}
    جمع کل: ${totalQuantity} عدد`;
    
        window.open(
          `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
          "_blank"
        );
      });
    }
    /* ===== CONTACT FORM ===== */
    const contactForm = document.getElementById("contactForm");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = document.getElementById("contactName").value;
        const phone = document.getElementById("contactPhone").value;
        const message = document.getElementById("contactMessage").value;
  
        const waNumber = "989194589524";
        const text = `پیام جدید از سایت:
        نام: ${name}
        شماره تماس: ${phone}
        پیام: ${message || "-"}`;
        
        window.open(
          `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
          "_blank"
        );
      });
    }
    
      });
      document.addEventListener("DOMContentLoaded", () => {

        const orderForm = document.getElementById("orderForm");
      
        if (orderForm) {
          orderForm.addEventListener("submit", (e) => {
            e.preventDefault();
      
            const name = document.getElementById("customerName").value;
            const phone = document.getElementById("customerPhone").value;
            const type = document.getElementById("orderType").value;
      
            const nutellaChecked = document.querySelector('input[value="کوکی نوتلا"]').checked;
            const blondieChecked = document.querySelector('input[value="بلوندی چاکلت چیپ"]').checked;
      
            const nutellaInput = document.querySelector('input[name="quantity-nutella"]');
            const blondieInput = document.querySelector('input[name="quantity-blondie"]');
      
            const nutellaQty = nutellaInput ? parseInt(nutellaInput.value) : 0;
            const blondieQty = blondieInput ? parseInt(blondieInput.value) : 0;
      
            const products = [];
      
            if (nutellaChecked) {
              if (type === "cafe" && nutellaQty < 10) {
                alert("حداقل سفارش برای کافه کوکی نوتلا ۱۰ عدد است 🍪");
                return;
              }
              if (type === "personal" && nutellaQty < 3) {
                alert("حداقل سفارش برای مصرف شخصی کوکی نوتلا ۳ عدد است 🍪");
                return;
              }
              products.push(`کوکی نوتلا x ${nutellaQty}`);
            }
      
            if (blondieChecked) {
              if (type === "cafe" && blondieQty < 10) {
                alert("حداقل سفارش برای کافه کوکی بلوندی ۱۰ عدد است 🍪");
                return;
              }
              if (type === "personal" && blondieQty < 3) {
                alert("حداقل سفارش برای مصرف شخصی کوکی بلوندی ۳ عدد است 🍪");
                return;
              }
              products.push(`بلوندی چاکلت چیپ x ${blondieQty}`);
            }
      
            if (products.length === 0) {
              alert("لطفاً حداقل یک محصول انتخاب کنید 🍪");
              return;
            }
      
            const waNumber = "989123456789"; // شماره واتساپ خودت
            const text = `سفارش جدید:
      نام: ${name}
      شماره تماس: ${phone}
      نوع سفارش: ${type}
      محصولات: ${products.join(" + ")}`;
      
            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");
          });
        }
      

      });
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
