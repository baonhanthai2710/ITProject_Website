import Products from "./models/productSchema.js";
import productData from "./constant/productdata.js";

const defaultData = async()=>{
    try{
        await Products.deleteMany({});

        const storeData = await Products.insertMany(productData);
        console.log(storeData);
    }catch(error){
        console.log("error" + error.message);
    }
};

export default defaultData;
