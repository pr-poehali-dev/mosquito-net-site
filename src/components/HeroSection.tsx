import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Защита от насекомых</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Качественные москитные сетки
              <span className="text-primary block mt-2">для вашего дома</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Производство и установка москитных сеток на окна и двери любых размеров. Надежная защита от насекомых для вашего комфорта.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('calculator')}>
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-2" onClick={() => scrollToSection('about')}>
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-600">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">2000+</div>
                <div className="text-sm text-gray-600">установок</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-600">гарантия</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
            <img
              src="/placeholder.svg"
              alt="Москитная сетка"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
