import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndComponents,
} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndComponents();
      setCategoriesMap(categoryMap);
    };
    getCategoryMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
