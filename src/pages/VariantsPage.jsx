import React, { useEffect, useState } from 'react'
import HeroComponent from '../components/global-components/HeroComponent'
import { useParams } from 'react-router';
import ProductCard from '../components/landing/ProductCard';
import Footer from '../components/footer/Footer';
import { allProducts } from '../mock/products/allProducts';
import no_img from '../assets/global/no_image.png'
import { Link } from 'react-router-dom';

const VariantsPage = () => {

    const params = useParams();

    const [variantsData, setVariantsData] = useState([]);

    const heroData = {
        title: 'Rice Variants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil error ad doloribus eveniet reiciendis inventore dolores quia, maiores soluta.',
        imgPath: 'gallery/gallery_hero.png',
        linkColor: 'white'
    };

    useEffect(() => {
        allProducts?.map((data) => {
            if (data?.category_id == params?.categoryId) {
                data?.products?.map((product) => {
                    if (product?.product_id == params?.productId) {
                        console.log(product)
                        setVariantsData(product);
                    }
                })
            }
        })
    }, []);

    return (
        <div>
            <HeroComponent pageTitle={`${variantsData?.product_name} Variants`} pageDescription={heroData?.description} imagePath={heroData?.imgPath} linkColor={heroData?.linkColor} />
            <div className='w-full px-10 md:px-24 py-32'>
                <div className='w-full max-w-[1100px] flex flex-col-reverse md:flex-row mx-auto justify-between items-center md:items-start gap-10 md:gap-0'>
                    <div className='max-w-[400px] relative'>
                    {/* <img src={variantsData?.product_image[0] ? variantsData?.product_image[0] : no_img} className='w-full' alt="" /> */}

                        {
                            variantsData?.product_image ?
                                <img src={variantsData?.product_image[0]} className='w-full' alt="" />
                                :
                                <img src={no_img} className="w-full rounded-[21px] shadow-md" alt="" />
                        }
                        <div className='absolute w-fit rounded-full px-4 py-2 bottom-[5px] right-[5px] bg-[#F6F4EC] text-[#57AC49] text-sm font-[700]'>4 Variants</div>
                    </div>
                    <div className='w-full max-w-[700px]'>
                        <div className='flex flex-col items-center'>
                            <h1 className="text-center text-[20px] font-bold leading-none">{variantsData?.product_name}</h1>
                            <div className={`h-1 w-full bg-tertiary my-6 max-w-[300px]`}></div>
                            <p className='text-[12px] text-center px-10'>{variantsData?.value_desc}</p>
                        </div>
                    </div>
                </div>
                <div className='h-1 block md:hidden w-full bg-black max-w-[300px] mx-auto my-12'></div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center lg:flex justify-between pt-24 gap-4 px-[80px] md:px-[140px] lg:px-20 xl:px-[200px]'>
                    {
                        variantsData?.variants?.map((data) => (
                            <ProductCard title={data?.v_title} image={data?.v_image} description={data?.value_desc} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full pt-20'>
                <h1 className="text-center text-[20px] font-bold leading-none">Other Rice</h1>
            </div>
            <div className="w-full">
                {
                    allProducts?.map((data) => {
                        if (data.category_name === 'RICE') {
                            return (
                                <div key={data?.category_id} className="w-full px-[4rem] md:px-[7rem] lg:px-[10rem] xl:px-[15rem] py-[5rem]">
                                    <div className="flex flex-col items-center md:grid grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-16 justify-items-center">
                                        {
                                            data?.products?.map((s_data) => {
                                                if (s_data?.product_id !== params?.productId) {
                                                    return (
                                                        <Link key={s_data?.id} to={s_data?.variants ? `/categories/${params?.categoryId}/variants/${params?.productId}` : ''} className="">
                                                            <ProductCard title={s_data?.product_name} image={s_data?.product_image[0]} image2={s_data?.product_image[1]} variants={s_data?.variants ? true : false} />
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default VariantsPage