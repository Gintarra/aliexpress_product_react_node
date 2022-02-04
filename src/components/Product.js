import React, { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Product = () => {
    const { getProduct } = useContext(MyContext)
    const [getPhoto, setPhoto] = useState(getProduct.images[0])
    function changePhoto(x){
        setPhoto(x)
    }
    function changePhoto2(){
       const photoIndex =  getProduct.images.indexOf(getPhoto)
       if(photoIndex !== -1 && photoIndex+1 < getProduct.images.length){
            setPhoto(getProduct.images[photoIndex+1])
       } else {
        setPhoto(getProduct.images[0])
       }
    }
    return (
        <div className='m-20'>
            <div className='d-flex justify-center'>

                {getProduct &&
                    <div className='grow1'>
                        <img onClick={changePhoto2} className='img' src={getPhoto} alt="" />
                        <div className='d-flex wrap'>
                            {getProduct.images.map((x, i) => <div onMouseOver={() => changePhoto(x)} key={i}> <img className='variantsImg2' src={x} alt="" /> </div>)}
                        </div>
                    </div>}



                {getProduct &&
                    <div className='grow2'>
                        <h4>{getProduct.title}</h4>
                        <h4>Price: {getProduct.price} Eur</h4>
                        <h4>Quantity: {getProduct.quantity} </h4>
                        <div className='d-flex wrap'>
                            {getProduct.variants.options.map((x, i) => x.values.map((y, index) => <div key={index}> <img className='variantsImg' src={y.image} alt="" /> </div>))}
                        </div>
                        <h3>Customers reviews ({getProduct.feedback.length})</h3>
                        {getProduct.feedback.map((x, i) => <div className='d-flex box' key={i} >
                            <h3 className='grow1 text-center'>{x.displayName}</h3>
                            <div className='grow2'>
                                <p>{x.date}</p>
                                <img className="stars"
                                    src={x.rating >= 1 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                    alt="" />
                                <img className="stars"
                                    src={x.rating >= 2 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                    alt="" />
                                <img className="stars"
                                    src={x.rating >= 3 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                    alt="" />
                                <img className="stars"
                                    src={x.rating >= 4 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                    alt="" />
                                <img className="stars"
                                    src={x.rating >= 5 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                    alt="" />
                                <p>{x.content}</p>
                            </div>
                        </div>)}
                    </div>}

            </div>
        </div>
    );
};

export default Product;