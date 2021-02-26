export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    //проверим есть ли в массиве такой товар
    let haveProduct = this.cartItems.find(item => item.product.id == product.id);
    if(haveProduct==undefined)
    {
      let newProduct={
        product: product,
        count: 1
      }
      this.cartItems.push(newProduct)
      this.onProductUpdate(newProduct);
    }
    else
    {
      haveProduct.count=haveProduct.count+1;
      this.onProductUpdate(haveProduct);
    }


  }

  updateProductCount(productId, amount) {
    //проверим есть ли в массиве такой товар
    let haveProduct = this.cartItems.find(item => item.product.id == productId);
    if(haveProduct!=undefined)
    {
      let productCount=haveProduct.count+amount;
      if(productCount>0)
        haveProduct.count=haveProduct.count+amount;
      else
      {
        let haveProductIndex=this.cartItems.indexOf(haveProduct)
        this.cartItems.splice(haveProductIndex,1)
        
      }

      this.onProductUpdate(haveProduct);
    }
  }

  isEmpty() {
    return (this.getTotalCount()==0)
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, current) => sum + current.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, current) => sum + current.count*current.product.price, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

