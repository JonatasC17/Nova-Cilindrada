import { useContext } from "react";
import { PurchaseContext } from "./purchaseContext";



const usePurchase = () => {
    const context = useContext(PurchaseContext);
  
    return context;
  };
  
  export default usePurchase;