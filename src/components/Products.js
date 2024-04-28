import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const groceryItems = [
        {
            "id": "1",
            "name": "Apples",
            "category": "Fruits",
            "price": "$2.99",
            "quantity": "1 kg",
            "image": "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
        },
        {
            "id": "2",
            "name": "Bananas",
            "category": "Fruits",
            "price": "$1.99",
            "quantity": "1 bunch",
            "image": "https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": "3",
            "name": "Milk",
            "category": "Dairy",
            "price": "$2.49",
            "quantity": "1 gallon",
            "image": "https://2freshmilk.com/images/features.jpg"
          },
          {
            "id": "4",
            "name": "Eggs",
            "category": "Dairy",
            "price": "$1.99",
            "quantity": "1 dozen",
            "image": "https://www.mangosupermarked.no/wp-content/uploads/2021/07/egg.jpeg"
          },
          {
            "id": "5",
            "name": "Bread",
            "category": "Bakery",
            "price": "$2.49",
            "quantity": "1 loaf",
            "image": "https://www.foodandwine.com/thmb/C8XvnSkIMvz2XewXFDB_JYK-mSU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Perfect-Sandwich-Bread-FT-RECIPE0723-dace53e15a304942acbc880b0ae34f5a.jpg"
          },
          {
            "id": "6",
            "name": "Potatoes",
            "category": "Vegetables",
            "price": "$1.49",
            "quantity": "1 kg",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RTI0d1GFL1BNefiSQPrMudmSpPa4LRB66Q&usqp=CAU"
          },
          {
            "id": "7",
            "name": "Tomatoes",
            "category": "Vegetables",
            "price": "$2.99",
            "quantity": "500 g",
            "image": "https://img.etimg.com/thumb/width-640,height-480,imgsize-56196,resizemode-75,msid-95423731/magazines/panache/5-reasons-why-tomatoes-should-be-your-favourite-fruit-this-year/tomatoes-canva.jpg"
          },
          {
            "id": "8",
            "name": "Chicken",
            "category": "Meat",
            "price": "$5.99",
            "quantity": "1 kg",
            "image": "https://www.licious.in/blog/wp-content/uploads/2022/03/Chicken-Curry-Cut-min.png"
          },
          {
            "id": "9",
            "name": "Salmon",
            "category": "Seafood",
            "price": "$10.99",
            "quantity": "200 g",
            "image": "https://content.instructables.com/FD2/5JB5/ICRXTDTH/FD25JB5ICRXTDTH.jpg?auto=webp"
          },
          {
            "id": "10",
            "name": "Rice",
            "category": "Grains",
            "price": "$3.99",
            "quantity": "1 kg",
            "image": "data:image/jpeg;base64,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"
          },
          {
            "id": "11",
            "name": "Pasta",
            "category": "Grains",
            "price": "$1.99",
            "quantity": "500 g",
            "image": "https://www.italianfoodexperts.com/wp-content/uploads/2017/11/Vera-pasta-italiana.jpg"
          },
          {
            "id": "12",
            "name": "Olive Oil",
            "category": "Condiments",
            "price": "$7.99",
            "quantity": "500 ml",
            "image": "https://m.media-amazon.com/images/I/71Y0DuEYXXL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "id": "13",
            "name": "Sugar",
            "category": "Baking",
            "price": "$2.49",
            "quantity": "1 kg",
            "image": "https://nammamaligai.com/wp-content/uploads/2016/10/sugar-1.jpg"
          },
          {
            "id": "14",
            "name": "Salt",
            "category": "Spices",
            "price": "$0.99",
            "quantity": "500 g",
            "image": "https://m.media-amazon.com/images/I/61-zRoFrfqL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "id": "15",
            "name": "Coffee",
            "category": "Beverages",
            "price": "$4.99",
            "quantity": "250 g",
            "image": "https://www.amorecoffee.co.uk/wp-content/uploads/2019/01/Enjoy.jpg"
          }
        // Add the remaining grocery items here
    ];

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    return (
        <div className="productsWrappers">
        <div className="productsWrapper">
        {groceryItems.map((product) => (
            <div className="card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>Name: {product.name}</h2>
                <h4>Quantity: {product.quantity}</h4>
                <h4>Price: {product.price}</h4>
                <h4>Category: {product.category}</h4>
                <button onClick={() => handleAdd(product)} className="btn">
                    Add to cart
                </button>
                
            </div>
        ))}
       
      </div>
       <div className="productsWrapperS center-text">

       <h1>"EAT HEALTHY STAY FRESH"</h1>
       <h1>THANK YOU FOR VISITING OUR GROCERY SHOPPING APP</h1>
       
       <h3>HAVE A GREAT DAY..!!</h3>
   </div>
   </div>
    
    );
   
};

export default Products;
