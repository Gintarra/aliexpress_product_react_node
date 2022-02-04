import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Main = () => {
    const input = useRef();
    const navigate = useNavigate();
    const {setProduct, getProduct} = useContext(MyContext)
    const [getProductLoad, setProductLoad] = useState(false)

    async function getInfo() {
        setProductLoad(true)
        const id = input.current.value;
        console.log(id);
        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id})
        }
        const result = await fetch('http://localhost:4000/product', options)
        const data = await result.json()
        console.log(data.data, "grizo")
        setProduct(data.data)
        setProductLoad(false)
        navigate('/product')
    }
    return (
        <div className='d-flex column align-center mt-50'>
            <input type="text" placeholder='write product ID' ref={input} />
            <button onClick={getInfo}>GET INFO</button>
           {getProductLoad && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
        </div>
    );
};

export default Main;