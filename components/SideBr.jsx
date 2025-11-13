"use client"
import Link from 'next/link'
import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuGrid2X2Plus } from "react-icons/lu";
import { VscTypeHierarchy } from "react-icons/vsc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";


const SideBr = () => {
  return (
    <div className='sideBar'>
        <div className="sideBar_wrapp">
            <h1 className='logo'>Euphoria</h1>
            <div className="sideBar_container">
                    <Link href={'/dashboard'}>
                        <span>
                            <MdOutlineDashboard />
                            <h2>Dashboard</h2>
                        </span>
                    </Link>
                    <Link href={'/post'}>
                        <span>
                            <LuGrid2X2Plus />
                            <h2>Post</h2>
                        </span>
                    </Link>
                    <Link href={'/catefories'}>
                        <span>
                            <VscTypeHierarchy />
                            <h2>Categories</h2>
                        </span>
                    </Link>
                    <Link href={'/product'}>
                        <span>
                            <MdOutlineProductionQuantityLimits />
                            <h2>Products</h2>
                        </span>
                    </Link>
                    <Link href={'/orders'}>
                        <span>
                            <FaShippingFast />
                            <h2>Orders</h2>
                        </span>
                    </Link>
            </div>
        </div>
    </div>
  )
}



export default SideBr