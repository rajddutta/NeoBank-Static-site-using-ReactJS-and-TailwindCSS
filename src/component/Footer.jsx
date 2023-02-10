import React from "react";
import { FaFacebookSquare, FaGithubSquare,FaLinkedinIn,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
   return(
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#Ff2c2c]">NEOBANK</h1>
          <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, natus illo deserunt recusandae maiores dolorem</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaLinkedinIn size={30}/>
            <FaTwitterSquare size={30}/>
            <FaInstagramSquare size={30}/>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Roadmap</li>
              <li className="py-2 text-sm">Portfolio</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Team</li>
              <li className="py-2 text-sm">Community</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Digital Loan</li>
              <li className="py-2 text-sm">more...</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Useful Links</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Privacy Policy</li>
            </ul>
          </div>

        </div>
       
      </div>
   )
}

export default Footer;
