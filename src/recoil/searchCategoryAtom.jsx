import { atom } from "recoil";

const searchCategoryAtom = atom({
    key: 'searchCategoryAtom',
    default: 'ALL PRODUCTS'
});

export default searchCategoryAtom;