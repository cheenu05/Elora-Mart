import React from 'react';
import Mobile from "../../assets/Mobile.webp";
import Beauty from "../../assets/Beauty.webp";
import Fashion from "../../assets/Fashion.webp";
import Electronic from "../../assets/Electronic.png";
import Tv from "../../assets/tv.png";
import Sports from "../../assets/Sports.png";
import Furniture from "../../assets/Furniture.webp";
import { Link, Links } from 'react-router-dom'


const MenuBar = () => {

  const symbol = ">"
  return (
    <>

      <div className=' flex items-center justify-evenly p-10  h-40  mt-8 mb-8 m-20 rounded-[100px] bg  ' >


        <Link to="mobile">
          <div className=' h-30 w-30 hover:cursor-pointer'>
            <div
              style={{
                backgroundImage: `url(${Mobile})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>
            <h1 className='text-center menuColor'>Mobile & Tablet {symbol}</h1>
          </div>

        </Link>

        {/* mobile and tablet end  */}

        <Link to="fashion">
          <div className='0 h-30 w-30 hover:cursor-pointer'>

            <div
              style={{
                backgroundImage: `url(${Fashion})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>

            <h1 className='text-center menuColor'>Fashion {symbol}</h1>
          </div>
        </Link>
        {/* Fashion ends */}

        <Link to="electronic">
          <div className='0 h-30 w-30 hover:cursor-pointer'>

            <div
              style={{
                backgroundImage: `url(${Electronic})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>

            <h1 className='text-center menuColor'>Electronic {symbol}</h1>
          </div>
        </Link>
        {/* electronic ends */}

        <Link to="tv">
          <div className=' h-30 w-30 hover:cursor-pointer'>

            <div
              style={{
                backgroundImage: `url(${Tv})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>

            <h1 className='text-center menuColor'>TV & Appliances {symbol}</h1>
          </div>
        </Link>
        {/* tv and appliances end*/}

        <Link to="furniture">
          <div className='0 h-30 w-30 hover:cursor-pointer'>

            <div
              style={{
                backgroundImage: `url(${Furniture})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>

            <h1 className='text-center menuColor'>Furniture {symbol}</h1>
          </div>
        </Link>
        {/* furniture ends */}

        <Link to="beauty">
          <div className='0 h-30 w-30 hover:cursor-pointer'>


            <div
              style={{
                backgroundImage: `url(${Beauty})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>

            <h1 className='text-center menuColor'>Beauty {symbol}</h1>
          </div>
        </Link>
        {/* Beauty ends */}

        <Link to="sports">
          <div className='0 h-30 w-30 hover:cursor-pointer'>

            <div
              style={{
                backgroundImage: `url(${Sports})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}

            ></div>

            <h1 className='text-center menuColor'>Sports {symbol}</h1>
          </div>
        </Link>

        {/* Sports ends */}

      </div>

    </>
  )
}

export default MenuBar
