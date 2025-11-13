"use client"
import Image from 'next/image';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineDashboard } from 'react-icons/md';

const AdminNav = () => {
  return (
    <div className="dashboard_nav">
        <div className="dashboard_nav_container">
            <div className="search">
                <CiSearch className='text-2xl' />
                <input name='' placeholder='Search or type comman...' />
                <button>
                    <MdOutlineDashboard />
                    <p>K</p>
                </button>
            </div>
            <Image src={'/logo.png'} alt={'jgj'} height={50} width={50} />
        </div>
    </div>
  )
}

export default AdminNav