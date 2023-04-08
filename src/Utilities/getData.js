const setToLocal = (id, name ,price ,img) => {
    // Retrieve the existing array from local storage
    const existingItemsStr = localStorage.getItem("myObj");
    let existingItems = [];
  
    if (existingItemsStr) {
      existingItems = JSON.parse(existingItemsStr);
    }
  
    // Find the item in the array, if it exists
    const existingItem = existingItems.find(item => item.id === id);
  
    if (existingItem) {
      // If the item already exists, increment its quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add a new item with quantity 1
      existingItems.push({ id, name,price ,img, quantity: 1 });
    }
  
    // Store the updated array back in local storage
    const updatedItemsStr = JSON.stringify(existingItems);
    localStorage.setItem("myObj", updatedItemsStr);
  };
  

  const getFromLocal = () => {
    const existingItemsStr = localStorage.getItem("myObj");
  
    if (existingItemsStr) {
      const existingItems = JSON.parse(existingItemsStr);
      return existingItems;
    } else {
      return [];
    }
  };
  

   const removeItem  = () =>{

    localStorage.removeItem("myObj");
   }
  
  export { setToLocal, getFromLocal };
  