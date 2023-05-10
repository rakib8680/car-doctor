import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero py-28 bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='w-1/2 relative'>
                    <img src={img1} className="max-w-lg rounded-lg" />
                    <img src={img2} className="max-w-xs  rounded-lg absolute right-0 top-48 border-base-200 border-8 " />
                </div>
                <div className='w-1/2'>
                    <p className='text-info font-semibold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified and of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-info">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;