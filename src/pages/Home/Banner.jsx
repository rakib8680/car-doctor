
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div className="carousel  md:w-2/3 md:h-[550px] mx-auto mb-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide4" className="btn btn-circle btn-accent btn-sm md:btn-md">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-accent  btn-sm md:btn-md">❯</a>
                </div>
                <div className="absolute flex items-center  gap-5 h-full w-full bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
                    <div className=' md:pl-16 pl-4 md:w-[400px] w-[300px] space-y-3 md:space-y-6 '>
                        <h2 className='md:text-5xl text-3xl font-bold leading-tight '>Affordable Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row'>
                        <button className='btn btn-primary mr-4 btn-xs md:btn-md w-fit mb-3 md:mb-0'>Discover More</button>
                        <button className='btn btn-info btn-outline btn-xs md:btn-md w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide1" className="btn btn-circle btn-accent btn-sm md:btn-md ">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-accent btn-sm md:btn-md">❯</a>
                </div>
                <div className="absolute flex items-center  gap-5 h-full w-full bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
                    <div className=' md:pl-16 pl-4 md:w-[400px] w-[300px] space-y-3 md:space-y-6 '>
                        <h2 className='md:text-5xl text-3xl font-bold leading-tight '>Affordable Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row'>
                        <button className='btn btn-primary mr-4 btn-xs md:btn-md w-fit mb-3 md:mb-0'>Discover More</button>
                        <button className='btn btn-info btn-outline btn-xs md:btn-md w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide2" className="btn btn-circle btn-accent btn-sm md:btn-md">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-accent btn-sm md:btn-md">❯</a>
                </div>
                <div className="absolute flex items-center  gap-5 h-full w-full bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
                    <div className=' md:pl-16 pl-4 md:w-[400px] w-[300px] space-y-3 md:space-y-6 '>
                        <h2 className='md:text-5xl text-3xl font-bold leading-tight '>Affordable Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row'>
                        <button className='btn btn-primary mr-4 btn-xs md:btn-md w-fit mb-3 md:mb-0'>Discover More</button>
                        <button className='btn btn-info btn-outline btn-xs md:btn-md w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide3" className="btn btn-circle btn-accent btn-sm md:btn-md">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-accent btn-sm md:btn-md">❯</a>
                </div>
                <div className="absolute flex items-center  gap-5 h-full w-full bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
                    <div className=' md:pl-16 pl-4 md:w-[400px] w-[300px] space-y-3 md:space-y-6 '>
                        <h2 className='md:text-5xl text-3xl font-bold leading-tight '>Affordable Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row'>
                        <button className='btn btn-primary mr-4 btn-xs md:btn-md w-fit mb-3 md:mb-0'>Discover More</button>
                        <button className='btn btn-info btn-outline btn-xs md:btn-md w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide3" className="btn btn-circle btn-accent btn-sm md:btn-md">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-accent btn-sm md:btn-md">❯</a>
                </div>
                <div className="absolute flex items-center  gap-5 h-full w-full bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
                    <div className=' md:pl-16 pl-4 md:w-[400px] w-[300px] space-y-3 md:space-y-6 '>
                        <h2 className='md:text-5xl text-3xl font-bold leading-tight '>Affordable Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row'>
                        <button className='btn btn-primary mr-4 btn-xs md:btn-md w-fit mb-3 md:mb-0'>Discover More</button>
                        <button className='btn btn-info btn-outline btn-xs md:btn-md w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide3" className="btn btn-circle btn-accent btn-sm md:btn-md">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-accent btn-sm md:btn-md">❯</a>
                </div>
                <div className="absolute flex items-center  gap-5 h-full w-full bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
                    <div className=' md:pl-16 pl-4 md:w-[400px] w-[300px] space-y-3 md:space-y-6 '>
                        <h2 className='md:text-5xl text-3xl font-bold leading-tight '>Affordable Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row'>
                        <button className='btn btn-primary mr-4 btn-xs md:btn-md w-fit mb-3 md:mb-0'>Discover More</button>
                        <button className='btn btn-info btn-outline btn-xs md:btn-md w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>F
            </div>
        </div>
    );
};

export default Banner;