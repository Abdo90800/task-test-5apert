
import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import Logo from './Logo';
import { signatureConfig } from '../config/signatureConfig';
import { MdEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";

const EmailSignature: React.FC = () => {
  const {  team, phone, email, website, websiteUrl } = signatureConfig;
  
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="flex border-gray-300">
        {/* Logo and Brand Section */}
        <div className="pr-6 flex flex-col justify-center items-center">
          <div className="mb-2">
            <Logo size={32} />
          </div>
        </div>
        
        {/* Vertical Line */}
        <div className="border-l border-gray-300 mx-6 h-auto"></div>
        
        {/* Contact Information Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-green-600 font-medium mb-2">{team}</h3>
          
          <div className="flex flex-col space-y-1 text-sm text-gray-700">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>{phone}</span>
            </div>
            
            <div className="flex items-center">
              <MdEmail className="w-4 h-4 mr-2" />
              <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            </div>
            
            <div className="flex items-center">
              <BsGlobe2 className="w-4 h-4 mr-2" />
              <a href={websiteUrl} className="hover:underline">{website}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignature;
