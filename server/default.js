import {products} from './Constants/Data.js'
import Product from './Model/product-schema.js'


const DefaultData = async () =>{
    try{
        await Product.insertMany(products);
        console.log('Data inserted successfully');

    }catch(error){
        console.log('Error while inserting data ',error.message)
    }
}

export default DefaultData;