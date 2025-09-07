import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, BookOpen, Sprout, Award, ArrowRight, Menu, X } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Solo Vivo Educa</span>
              </div>
              <p className="text-gray-400 mb-4">
                Conectando conhecimento e prática para um futuro mais sustentável na agricultura.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#progresso" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Solo Vivo Educa. Todos os direitos reservados.</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;