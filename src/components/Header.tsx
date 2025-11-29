import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">МоскитЗащита</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => handleScroll('home')} className="hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => handleScroll('catalog')} className="hover:text-primary transition-colors font-medium">
              Каталог
            </button>
            <button onClick={() => handleScroll('calculator')} className="hover:text-primary transition-colors font-medium">
              Калькулятор
            </button>
            <button onClick={() => handleScroll('services')} className="hover:text-primary transition-colors font-medium">
              Услуги
            </button>
            <button onClick={() => handleScroll('about')} className="hover:text-primary transition-colors font-medium">
              О нас
            </button>
            <button onClick={() => handleScroll('contacts')} className="hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </div>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} className="text-primary" />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => handleScroll('home')}
              className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => handleScroll('catalog')}
              className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              Каталог
            </button>
            <button
              onClick={() => handleScroll('calculator')}
              className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              Калькулятор
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => handleScroll('about')}
              className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              О нас
            </button>
            <button
              onClick={() => handleScroll('contacts')}
              className="text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              Контакты
            </button>
            <Button className="w-full mt-2">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
