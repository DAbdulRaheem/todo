function addToCart() {
    const itemInput = document.getElementById("item");
    const itemName = itemInput.value.trim();
  
    if (itemName) {
      const data = document.createElement("h3");
      data.textContent = itemName + " ";
      data.id = itemName;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.onclick = function () {
        data.remove(); 
      };
      data.appendChild(removeBtn);
      document.getElementById("selectedList").appendChild(data);
      itemInput.value = ""; 
    }
  }
