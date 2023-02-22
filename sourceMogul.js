(() => {


// Get the current date
const today = new Date();
const options = {day: 'numeric', month: 'short'};
const todayFormatted = today.toLocaleDateString(undefined, options);

const SHIPPING = 5.50;


for (let i = 0; i < retailers.length; i++) {
  // Get a list of all retailers on SourceMogul
  let retailers = document.querySelectorAll('.o-list-panel.c-list3-panel');
  let retailer = retailers[i];
  let viewBtn = retailer.querySelector('.c-btn-sm');
  viewBtn.click();
// Get the date element
let dateElement = document.querySelector('.o-panel-header h2');

// Check if the date element matches today's date
if (dateElement.textContent === todayFormatted) {
    
    
        // Wait for the page to load
        window.onload = function() {
          // Select the product elements on the page
let products = document.querySelectorAll('.o-panel.u-bdr-5.u-bxs-5');

// Iterate through the products and check for the presence of the checkmark image
products.forEach(product => {
  let forwardButton = product.querySelector('button.c-slider-nav.c-slider-nav-next');
  forwardButton.click();
  // Get the "buy box" element for the product
  let buyBox = product.querySelector('th.u-fs-xs.u-ta-l:contains("Buy box")');

  // Check for the presence of the checkmark image
  let checkmark = buyBox.querySelector('svg.c-icon-sm.u-tc-purple-70 use[href="#icon-check-circle"]');

  // If the checkmark image is present, continue to the next product
  // Check if buy box
  if (checkmark) {
    return;
  }
  
  else {
  	let prevButton = product.querySelector('button.c-slider-nav.c-slider-nav-prev');
  	prevButton.click();
  	let targetElement1 = product.querySelector('div.c-slider-item.c-slider-product-xl[data-gslide="0"] a.o-flex.u-fill-y');
  	let price1Element = targetElement1.querySelector('span.u-fs-xl.u-fw-900.u-tc-red')
    var price1 = price1Element.textContent
    targetElement1.click();
  	
    // Check if on fleet farm
    if (window.location.hostname === 'www.fleetfarm.com') {
      var retailerUrl = window.location.href;
    let retailerPriceElement = document.querySelector('.regular-price span#regular-price');
    let priceExtract = retailerPriceElement.textContent.match(/\d+\.\d+/);
    var retailerPrice = priceExtract[0];    
    let shippingDaysText = document.querySelector('.ship-sub-title').innerText;
    if (shippingDaysText.contains("Out of Stock")){
      return
    }
  
    window.history.back()

  // Check if prices are equal
if (price1 === retailerPrice && shippingDaysText.contains("Days")) {
let targetElement2 = product.querySelector('div.c-slider-item.c-slider-product-xl[data-gslide="1"] a.o-flex.u-fill-y');
let price2 = targetElement2.querySelector('span.u-fs-xl.u-fw-900.u-tc-red')
targetElement2.click()

// Get product name
var productName = document.querySelector("#productTitle").textContent;

// Get amazon link
var amazonUrl = window.location.href;
let addToCartSpan = document.querySelector('span:contains("Add to Cart")');
if (addToCartSpan) {
// The Add to Cart span is present, so the buy box is present

// Continue with the forEach loop on the sourcemogul page
  return;
}
else {
  let seeAllBuyingOptionsButton = document.querySelector('a.a-button-text[title="See All Buying Options"]');
  seeAllBuyingOptionsButton.click();
  let newOffersDiv = document.querySelector('div#aod-offer-heading');
if (!newOffersDiv) {
    return;
  }
  else {
      let lowestPriceElement = document.querySelector('div.a-row.a-spacing-mini.olpOffer:contains("New") span.a-size-large.a-color-price.olpOfferPrice.a-text-bold');
      var lowestPrice = lowestPriceElement.textContent;
      var productTitle = document.getElementById("productTitle").textContent
      if ((lowestPrice - price1) / lowestPrice < 0.15) {
        return;
      } 
      else {
          // Extract the ASIN from the URL
          var url = window.location.href;
          var asin = url.match(/\/dp\/([A-Z0-9]+)/)[1];
          window.location.href = "https://sellercentral.amazon.com/";
          // Wait for the page to load
          window.onload = function() {
          // Select the hamburger icon element
          let hamburgerIcon = document.querySelector('div[data-test-tag="hamburger-icon"]');
          // Click the hamburger icon
          hamburgerIcon.click();
          let catalogMenu = document.querySelector('span.nav-section-label:contains("Catalog")');
          catalogMenu.addEventListener('mouseenter', () => {
          setTimeout(() => {
          let addProductsButton = document.querySelector('span.flyout-menu-item-label:contains("Add Products")');
          addProductsButton.click();
          // Select the input element by its ID
          let inputElement = document.querySelector('input[part="input"][id="katal-id-0"]');
          // Set the value of the input element to the ASIN
          inputElement.value = asin;
          let enterEvent = new KeyboardEvent('keydown', {
          'keyCode': 13,
          'which': 13
          });
                  
          // Dispatch the event
          inputElement.dispatchEvent(enterEvent);

          // Get the dropdown menu
          let dropdown = document.querySelector('.select-header');
        
          if (dropdown)
          {// Simulate a click on the dropdown menu to open it
          dropdown.click();

          // Get the "New" option
          let newOption = document.querySelector('kat-option[value="new"]');

          // Simulate a click on the "New" option
          newOption.click();}
          else {
            if (!document.querySelector('.copy-kat-button.primary'))
              {return}

        }
       

          // Get the button
          let button = document.querySelector('.dropdown-and-button kat-dropdown-button:not(.dropdown)')
          let disabledButton = document.querySelector('button[disabled][text="Not available"]');
        
          if(disabledButton){
            return
          }
        // Simulate a click on the button
          button.click();
        
          // Wait for the page to load
          window.onload = function() {
            if (window.location.href.indexOf("approvalrequest") !== -1) {
              let requestButton = document.querySelector("input[id='a-autoid-0']")
              if (requestButton) {
                requestButton.click();
                approvedMessage = document.querySelector("div[class='saw-performance-check-message-highlight']")
              if (approvedMessage.contains("Your selling application is approved")){
                window.location.href('https://sellercentral.amazon.com/product-search')
                // Input is already defined above
                
                // Set the value of the input element to the ASIN
                inputElement.value = asin;
                let enterEvent = new KeyboardEvent('keydown', {
                'keyCode': 13,
                'which': 13
                });
                // Check if lets us sell
                if (document.querySelector('.button[text="Sell this product"]')){
                  // click sell button
                  let button = document.querySelector('.button[text="Sell this product"]');
                  button.click()
              }
              
                else {
                  let refreshCounter = 0;
                  setTimeout(() => {
                      refreshPage();
                      refreshCounter++;
                      if (refreshCounter > 4) {
                          return;
                      }
                      let button = document.querySelector('.button[text="Sell this product"]');
                      // check if button exists
                      if (!button) {
                          return;
                      }
                      // click the sell button
                      button.click();
                      // enter the sale data
                      let asinInput = document.querySelector('input[name="contribution_sku-0-value"]');
                      asinInput.value = asin;
                      asinInput.dispatchEvent(new Event('change'));
                  
                      let quantInput = document.querySelector('input[id="katal-id-13"]');
                      quantInput.value = '2';
                      quantInput.dispatchEvent(new Event('change'));
                  
                      var mySalePrice = lowestPrice - SHIPPING - .01;
                      let priceInput = document.querySelector('input[id="katal-id-17"]');
                      priceInput.value = mySalePrice
                      priceInput.dispatchEvent(new Event('change'));
                  
                      // Press the new option
                      let dropdown = document.querySelector('.kat-select-container');
                      let newOption = dropdown.querySelector('kat-option[value="new_new"]');
                      newOption.click();
                  
                      // Press that I will fulfill the order
                      let radioButton = document.querySelector('input[name="offerFulfillment"][value="MFN"]');
                      radioButton.click();
                  
                      let saveAndFinishButton = document.querySelector('kat-button[label="Save and finish"]');
                  
                      const dataArray = createSalesDataObject(productName, mySalePrice, lowestPrice, amazonUrl, retailerUrl, asin, todayFormatted);;
                      return 
                  }, 10000);
                }
              
            console.log("This is an amazon seller central link")
        } else if (window.location.href.indexOf("listing") !== -1) {
          let asinInput = document.querySelector('input[name="contribution_sku-0-value"]');
          asinInput.value = asin;
          asinInput.dispatchEvent(new Event('change'));
      
          let quantInput = document.querySelector('input[id="katal-id-13"]');
          quantInput.value = '2';
          quantInput.dispatchEvent(new Event('change'));
      
          var mySalePrice = lowestPrice - SHIPPING - .01;
          let priceInput = document.querySelector('input[id="katal-id-17"]');
          priceInput.value = mySalePrice
          priceInput.dispatchEvent(new Event('change'));
      
          // Press the new option
          let dropdown = document.querySelector('.kat-select-container');
          let newOption = dropdown.querySelector('kat-option[value="new_new"]');
          newOption.click();
      
          // Press that I will fulfill the order
          let radioButton = document.querySelector('input[name="offerFulfillment"][value="MFN"]');
          radioButton.click();
      
          let saveAndFinishButton = document.querySelector('kat-button[label="Save and finish"]');
      
          const dataArray = createSalesDataObject(productName, mySalePrice, lowestPrice, amazonUrl, retailerUrl, asin, todayFormatted);;
            return
          
        }
        else {
          return
        }
        }}}
        }, 500);
});
        };


      }
  }
}
}
else {
return
}
  }
    
  
    else if (window.location.hostname === 'www.acmetools.com'){
      let retailerPriceElement = document.querySelector('.sales');
      let priceExtract = retailerPriceElement.textContent.match(/\d+\.\d+/);
      let retailerPrice = priceExtract[0];
      let shippingDaysText = document.querySelector('.ship-sub-title').innerText;
      if (shippingDaysText.contains("Out of Stock")){
        return
      }
      window.history.back()

      // Check if prices are equal
    if (price1 === retailerPrice) {
    let targetElement2 = product.querySelector('div.c-slider-item.c-slider-product-xl[data-gslide="1"] a.o-flex.u-fill-y');
    let price2 = targetElement2.querySelector('span.u-fs-xl.u-fw-900.u-tc-red')
    targetElement2.click()
    
    // Get product name
    var productName = document.querySelector("#productTitle").textContent;
    
    // Get amazon link
    var amazonUrl = window.location.href;
    let addToCartSpan = document.querySelector('span:contains("Add to Cart")');
    if (addToCartSpan) {
    // The Add to Cart span is present, so the buy box is present
    
    // Continue with the forEach loop on the sourcemogul page
      return;
    }
    else {
      let seeAllBuyingOptionsButton = document.querySelector('a.a-button-text[title="See All Buying Options"]');
      seeAllBuyingOptionsButton.click();
      let newOffersDiv = document.querySelector('div#aod-offer-heading');
    if (!newOffersDiv) {
        return;
      }
      else {
          let lowestPriceElement = document.querySelector('div.a-row.a-spacing-mini.olpOffer:contains("New") span.a-size-large.a-color-price.olpOfferPrice.a-text-bold');
          var lowestPrice = lowestPriceElement.textContent;
          var productTitle = document.getElementById("productTitle").textContent
          if ((lowestPrice - price1) / lowestPrice < 0.15) {
            return;
          } 
          else {
              // Extract the ASIN from the URL
              var url = window.location.href;
              var asin = url.match(/\/dp\/([A-Z0-9]+)/)[1];
              window.location.href = "https://sellercentral.amazon.com/";
              // Wait for the page to load
              window.onload = function() {
              // Select the hamburger icon element
              let hamburgerIcon = document.querySelector('div[data-test-tag="hamburger-icon"]');
              // Click the hamburger icon
              hamburgerIcon.click();
              let catalogMenu = document.querySelector('span.nav-section-label:contains("Catalog")');
              catalogMenu.addEventListener('mouseenter', () => {
              setTimeout(() => {
              let addProductsButton = document.querySelector('span.flyout-menu-item-label:contains("Add Products")');
              addProductsButton.click();
              // Select the input element by its ID
              let inputElement = document.querySelector('input[part="input"][id="katal-id-0"]');
              // Set the value of the input element to the ASIN
              inputElement.value = asin;
              let enterEvent = new KeyboardEvent('keydown', {
              'keyCode': 13,
              'which': 13
              });
                  
              // Dispatch the event
              inputElement.dispatchEvent(enterEvent);
    
              // Get the dropdown menu
              let dropdown = document.querySelector('.select-header');
            
              if (dropdown)
              {// Simulate a click on the dropdown menu to open it
              dropdown.click();
    
              // Get the "New" option
              let newOption = document.querySelector('kat-option[value="new"]');
    
              // Simulate a click on the "New" option
              newOption.click();}
              else {
                if (!document.querySelector('.copy-kat-button.primary'))
                  {return}
    
            }
           
    
              // Get the button
              let button = document.querySelector('.dropdown-and-button kat-dropdown-button:not(.dropdown)')
              let disabledButton = document.querySelector('button[disabled][text="Not available"]');
            
              if(disabledButton){
                return
              }
            // Simulate a click on the button
              button.click();
            
              // Wait for the page to load
              window.onload = function() {
                if (window.location.href.indexOf("approvalrequest") !== -1) {
                  let requestButton = document.querySelector("input[id='a-autoid-0']")
                  if (requestButton) {
                    requestButton.click();
                    approvedMessage = document.querySelector("div[class='saw-performance-check-message-highlight']")
                  if (approvedMessage.contains("Your selling application is approved")){
                    window.location.href('https://sellercentral.amazon.com/product-search')
                    // Input is already defined above
                    
                    // Set the value of the input element to the ASIN
                    inputElement.value = asin;
                    let enterEvent = new KeyboardEvent('keydown', {
                    'keyCode': 13,
                    'which': 13
                    });
                    // Check if lets us sell
                    if (document.querySelector('.button[text="Sell this product"]')){
                      // click sell button
                      let button = document.querySelector('.button[text="Sell this product"]');
                      button.click()
                  }
                  
                    else {
                      let refreshCounter = 0;
                      setTimeout(() => {
                          refreshPage();
                          refreshCounter++;
                          if (refreshCounter > 4) {
                              return;
                          }
                          let button = document.querySelector('.button[text="Sell this product"]');
                          // check if button exists
                          if (!button) {
                              return;
                          }
                          // click the sell button
                          button.click();
                          // enter the sale data
                          let asinInput = document.querySelector('input[name="contribution_sku-0-value"]');
                          asinInput.value = asin;
                          asinInput.dispatchEvent(new Event('change'));
                      
                          let quantInput = document.querySelector('input[id="katal-id-13"]');
                          quantInput.value = '2';
                          quantInput.dispatchEvent(new Event('change'));
                      
                          var mySalePrice = lowestPrice - SHIPPING - .01;
                          let priceInput = document.querySelector('input[id="katal-id-17"]');
                          priceInput.value = mySalePrice
                          priceInput.dispatchEvent(new Event('change'));
                      
                          // Press the new option
                          let dropdown = document.querySelector('.kat-select-container');
                          let newOption = dropdown.querySelector('kat-option[value="new_new"]');
                          newOption.click();
                      
                          // Press that I will fulfill the order
                          let radioButton = document.querySelector('input[name="offerFulfillment"][value="MFN"]');
                          radioButton.click();
                      
                          let saveAndFinishButton = document.querySelector('kat-button[label="Save and finish"]');
                      
                          const dataArray = createSalesDataObject(productName, mySalePrice, lowestPrice, amazonUrl, retailerUrl, asin, todayFormatted);;
                          return 
                      }, 10000);
                    }
                  
                console.log("This is an amazon seller central link")
            } else if (window.location.href.indexOf("listing") !== -1) {
              let asinInput = document.querySelector('input[name="contribution_sku-0-value"]');
              asinInput.value = asin;
              asinInput.dispatchEvent(new Event('change'));
          
              let quantInput = document.querySelector('input[id="katal-id-13"]');
              quantInput.value = '2';
              quantInput.dispatchEvent(new Event('change'));
          
              var mySalePrice = lowestPrice - SHIPPING - .01;
              let priceInput = document.querySelector('input[id="katal-id-17"]');
              priceInput.value = mySalePrice
              priceInput.dispatchEvent(new Event('change'));
          
              // Press the new option
              let dropdown = document.querySelector('.kat-select-container');
              let newOption = dropdown.querySelector('kat-option[value="new_new"]');
              newOption.click();
          
              // Press that I will fulfill the order
              let radioButton = document.querySelector('input[name="offerFulfillment"][value="MFN"]');
              radioButton.click();
          
              let saveAndFinishButton = document.querySelector('kat-button[label="Save and finish"]');
          
              const dataArray = createSalesDataObject(productName, mySalePrice, lowestPrice, amazonUrl, retailerUrl, asin, todayFormatted);;
                return
              
            }
            else {
              return
            }
            }}}
            }, 500);
    });
            };
    
    
          }
      }
    }
    }
    else {
    return
    }
    }
    

    else if (window.location.hostname === 'www.bestbuy.com'){
      let priceElement = document.querySelector('.priceView-hero-price.priceView-customer-price');
      let priceText = priceElement.querySelector('span[aria-hidden="true"]').textContent;
      let priceExtract = priceText.match(/\d+\.\d+/);
      let retailerPrice = priceExtract[0];
      window.history.back()

      // Check if prices are equal
    if (price1 === retailerPrice) {
    let targetElement2 = product.querySelector('div.c-slider-item.c-slider-product-xl[data-gslide="1"] a.o-flex.u-fill-y');
    let price2 = targetElement2.querySelector('span.u-fs-xl.u-fw-900.u-tc-red')
    targetElement2.click()
    
    // Get product name
    var productName = document.querySelector("#productTitle").textContent;
    
    // Get amazon link
    var amazonUrl = window.location.href;
    let addToCartSpan = document.querySelector('span:contains("Add to Cart")');
    if (addToCartSpan) {
    // The Add to Cart span is present, so the buy box is present
    
    // Continue with the forEach loop on the sourcemogul page
      return;
    }
    else {
      let seeAllBuyingOptionsButton = document.querySelector('a.a-button-text[title="See All Buying Options"]');
      seeAllBuyingOptionsButton.click();
      let newOffersDiv = document.querySelector('div#aod-offer-heading');
    if (!newOffersDiv) {
        return;
      }
      else {
          let lowestPriceElement = document.querySelector('div.a-row.a-spacing-mini.olpOffer:contains("New") span.a-size-large.a-color-price.olpOfferPrice.a-text-bold');
          var lowestPrice = lowestPriceElement.textContent;
          var productTitle = document.getElementById("productTitle").textContent
          if ((lowestPrice - price1) / lowestPrice < 0.15) {
            return;
          } 
          else {
              // Extract the ASIN from the URL
              var url = window.location.href;
              var asin = url.match(/\/dp\/([A-Z0-9]+)/)[1];
              window.location.href = "https://sellercentral.amazon.com/";
              // Wait for the page to load
              window.onload = function() {
              // Select the hamburger icon element
              let hamburgerIcon = document.querySelector('div[data-test-tag="hamburger-icon"]');
              // Click the hamburger icon
              hamburgerIcon.click();
              let catalogMenu = document.querySelector('span.nav-section-label:contains("Catalog")');
              catalogMenu.addEventListener('mouseenter', () => {
              setTimeout(() => {
              let addProductsButton = document.querySelector('span.flyout-menu-item-label:contains("Add Products")');
              addProductsButton.click();
              // Select the input element by its ID
              let inputElement = document.querySelector('input[part="input"][id="katal-id-0"]');
              // Set the value of the input element to the ASIN
              inputElement.value = asin;
              let enterEvent = new KeyboardEvent('keydown', {
              'keyCode': 13,
              'which': 13
                });
                  
              // Dispatch the event
              inputElement.dispatchEvent(enterEvent);
    
              // Get the dropdown menu
              let dropdown = document.querySelector('.select-header');
            
              if (dropdown)
              {// Simulate a click on the dropdown menu to open it
              dropdown.click();
    
              // Get the "New" option
              let newOption = document.querySelector('kat-option[value="new"]');
    
              // Simulate a click on the "New" option
              newOption.click();}
              else {
                if (!document.querySelector('.copy-kat-button.primary'))
                  {return}
    
            }
           
    
              // Get the button
              let button = document.querySelector('.dropdown-and-button kat-dropdown-button:not(.dropdown)')
              let disabledButton = document.querySelector('button[disabled][text="Not available"]');
            
              if(disabledButton){
                return
              }
            // Simulate a click on the button
              button.click();
            
              // Wait for the page to load
              window.onload = function() {
                if (window.location.href.indexOf("approvalrequest") !== -1) {
                  let requestButton = document.querySelector("input[id='a-autoid-0']")
                  if (requestButton) {
                    requestButton.click();
                    approvedMessage = document.querySelector("div[class='saw-performance-check-message-highlight']")
                  if (approvedMessage.contains("Your selling application is approved")){
                    window.location.href('https://sellercentral.amazon.com/product-search')
                    // Input is already defined above
                    
                    // Set the value of the input element to the ASIN
                    inputElement.value = asin;
                    let enterEvent = new KeyboardEvent('keydown', {
                    'keyCode': 13,
                    'which': 13
                    });
                    // Check if lets us sell
                    if (document.querySelector('.button[text="Sell this product"]')){
                      // click sell button
                      let button = document.querySelector('.button[text="Sell this product"]');
                      button.click()
                  }
                  
                    else {
                      let refreshCounter = 0;
                      setTimeout(() => {
                          refreshPage();
                          refreshCounter++;
                          if (refreshCounter > 4) {
                              return;
                          }
                          let button = document.querySelector('.button[text="Sell this product"]');
                          // check if button exists
                          if (!button) {
                              return;
                          }
                          // click the sell button
                          button.click();
                          // enter the sale data
                          let asinInput = document.querySelector('input[name="contribution_sku-0-value"]');
                          asinInput.value = asin;
                          asinInput.dispatchEvent(new Event('change'));
                      
                          let quantInput = document.querySelector('input[id="katal-id-13"]');
                          quantInput.value = '2';
                          quantInput.dispatchEvent(new Event('change'));
                      
                          var mySalePrice = lowestPrice - SHIPPING - .01;
                          let priceInput = document.querySelector('input[id="katal-id-17"]');
                          priceInput.value = mySalePrice
                          priceInput.dispatchEvent(new Event('change'));
                      
                          // Press the new option
                          let dropdown = document.querySelector('.kat-select-container');
                          let newOption = dropdown.querySelector('kat-option[value="new_new"]');
                          newOption.click();
                      
                          // Press that I will fulfill the order
                          let radioButton = document.querySelector('input[name="offerFulfillment"][value="MFN"]');
                          radioButton.click();
                      
                          let saveAndFinishButton = document.querySelector('kat-button[label="Save and finish"]');
                      
                          const dataArray = createSalesDataObject(productName, mySalePrice, lowestPrice, amazonUrl, retailerUrl, asin, todayFormatted);;
                          return 
                      }, 10000);
                    }
                  
                console.log("This is an amazon seller central link")
            } else if (window.location.href.indexOf("listing") !== -1) {
              // enter the sale data  
              let asinInput = document.querySelector('input[name="contribution_sku-0-value"]');
              asinInput.value = asin;
              asinInput.dispatchEvent(new Event('change'));
          
              let quantInput = document.querySelector('input[id="katal-id-13"]');
              quantInput.value = '2';
              quantInput.dispatchEvent(new Event('change'));
          
              var mySalePrice = lowestPrice - SHIPPING - .01;
              let priceInput = document.querySelector('input[id="katal-id-17"]');
              priceInput.value = mySalePrice
              priceInput.dispatchEvent(new Event('change'));
          
              // Press the new option
              let dropdown = document.querySelector('.kat-select-container');
              let newOption = dropdown.querySelector('kat-option[value="new_new"]');
              newOption.click();
          
              // Press that I will fulfill the order
              let radioButton = document.querySelector('input[name="offerFulfillment"][value="MFN"]');
              radioButton.click();
          
              let saveAndFinishButton = document.querySelector('kat-button[label="Save and finish"]');
          
              const dataArray = createSalesDataObject(productName, mySalePrice, lowestPrice, amazonUrl, retailerUrl, asin, todayFormatted);;
                return
              
            }
            else {
              return
            }
            }}}
            }, 500);
    });
            };
    
    
          }
      }
    }
    }
    else {
    return
    }
    }


    
}

  
  
});
    }
  }

}})();