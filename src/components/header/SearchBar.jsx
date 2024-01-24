import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { allProducts } from '../../mock/products/allProducts';
import searchCategoryAtom from '../../recoil/searchCategoryAtom';
import search_icon from "../../assets/global/search_icon.svg";
import no_img from '../../assets/global/no_image.png';
import close from '../../assets/global/close.svg';
import { HashLink } from 'react-router-hash-link';

const SearchBar = () => {

    const [products, setProducts] = useState();

    const [searchCategory, setSearchCategory] = useRecoilState(searchCategoryAtom);
  
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      allProducts?.map((data) => {
        if (data?.category_id == 'cat-all') {
          setProducts(data);
        }
      })
    }, [])
  
    const searchItem = (name) => {
      if (allProducts?.filter((filterData) => filterData?.category_name === name)[0]?.category_name === name) {
        setSearchCategory(name)
      }
    };

    return (
        <div className="w-full flex relative">
            <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearchText(e?.target?.value)}
                value={searchText}
                className="border border-primary outline-none bg-white bg-opacity-70 text-sm placeholder:text-primary text-primary px-5 py-2 flex-1"
            />
            <button className="inline-block bg-primary p-2">
                {
                    searchText == '' ? (<img src={search_icon} alt="search" />) : (<img src={close} className='max-w-[23px]' onClick={() => setSearchText('')} alt="search" />)
                }
            </button>
            <div className="w-full absolute z-[110] top-[100%] ">
                <div className={`w-full bg-white ${searchText == '' ? 'h-0 border-none' : 'max-h-[500px]'} border-primary border overflow-y-scroll flex flex-col`}>
                    {

                        products?.products?.filter((filterValue) => {
                            if (searchText === '') {
                                return filterValue
                            } else if (filterValue?.product_name?.toLowerCase()?.includes(searchText?.toLowerCase())) {
                                return filterValue
                            }
                        })?.map((data, index) => {
                            return (
                                <HashLink
                                    to={`/categories#products`}
                                    key={index}
                                    className={` p-4 w-full flex gap-4 border-b`}
                                    onClick={() => searchItem(data?.category_name)}
                                >
                                    <div className="w-full max-w-[80px] border-secondary border rounded-[6px]">
                                        <img src={data?.product_image?.length > 0 ? data?.product_image[0] : no_img} alt="" className=" rounded-[6px]" />
                                    </div>
                                    <div className="w-full flex flex-col justify-start">
                                        <h1 className="text-[16px] font-[500]">{data.product_name}</h1>
                                        <h1 className="text-[13px] leading-[18px]">{data.value_desc}</h1>
                                    </div>
                                </HashLink>
                            );
                        })
                    }
                </div>
            </div>
            <div className={`w-full fixed inset-0 bg-black opacity-20 z-[100] ${searchText == '' ? 'hidden' : 'block'}`} onClick={() => setSearchText('')}></div>
        </div>
    )
}

export default SearchBar