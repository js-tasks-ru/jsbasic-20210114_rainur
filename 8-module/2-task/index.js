import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.createProductsGrid();

    let filters=new Object();
    filters.noNuts=null;
    filters.vegeterianOnly=null;
    filters.maxSpiciness=0;
    filters.category=null;

    this.filters = filters;
  }
  createProductsGrid()
  {
    
    let divProductsGrid=document.createElement("div");
    divProductsGrid.classList.add("products-grid");

    let divProductsGridInner=document.createElement("div");
    divProductsGridInner.classList.add("products-grid__inner");


    divProductsGridInner.innerHTML="";
    
    for(let product of this.products)
    {
      //проверим продукт
      let noSeeProduct=false
      if(this.filters!=undefined)
      {
        if(this.filters.noNuts && product.hasOwnProperty("nuts") && product.nuts)
        {
         
          noSeeProduct=true;
        }

        if(this.filters.vegeterianOnly && (!product.hasOwnProperty("vegeterian") || !product.vegeterian) )
        {
         
          noSeeProduct=true;
        }

        if(this.filters.maxSpiciness && product.hasOwnProperty("spiciness") && parseInt(product.spiciness) <=parseInt(this.filters.maxSpiciness))
        {
         
          noSeeProduct=true;
        }
        
        if(this.filters.category && this.filters.category!=product.category )
        {
         
          noSeeProduct=true;
        }


      }
     

      if(noSeeProduct)
        continue;

      divProductsGridInner.append(new ProductCard(product).elem);
    }
    divProductsGrid.append(divProductsGridInner)

    this.elem=divProductsGrid;

    
  }
  updateFilter(filters)
  {
    
    if(filters.noNuts!=undefined)
      this.filters.noNuts=filters.noNuts

    if(filters.vegeterianOnly!=undefined)
      this.filters.vegeterianOnly=filters.vegeterianOnly

    if(filters.maxSpiciness!=undefined)
      this.filters.maxSpiciness=filters.maxSpiciness

    if(filters.category!=undefined)
      this.filters.category=filters.category

    this.createProductsGrid();
    document.querySelector("#container").innerHTML="";
    document.querySelector("#container").append(this.elem);
  }

}
