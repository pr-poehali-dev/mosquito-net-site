import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1');
  const [meshType, setMeshType] = useState<string>('standard');

  const calculatePrice = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    const q = parseInt(quantity);

    if (!w || !h || !q) return 0;

    const area = (w * h) / 10000;
    const basePrice = meshType === 'standard' ? 1200 : meshType === 'pet' ? 1800 : 2500;
    const pricePerUnit = area * basePrice;

    return Math.round(pricePerUnit * q);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">МоскитЗащита</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors font-medium">
                Каталог
              </button>
              <button onClick={() => scrollToSection('calculator')} className="hover:text-primary transition-colors font-medium">
                Калькулятор
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors font-medium">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

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

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">Наша продукция</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог москитных сеток</h2>
            <p className="text-xl text-gray-600">Выберите идеальное решение для вашего дома</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Grid3x3" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Стандартная сетка</CardTitle>
                <CardDescription className="text-base">Базовая защита от насекомых</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Защита от комаров и мух</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Долговечный материал</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Легкий уход</span>
                  </li>
                </ul>
                <div className="text-3xl font-bold text-primary mb-4">от 1200₽/м²</div>
                <Button className="w-full" onClick={() => scrollToSection('calculator')}>Заказать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-secondary">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="PawPrint" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Антикошка</CardTitle>
                <CardDescription className="text-base">Усиленная защита для домашних животных</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Защита от когтей</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Усиленное полотно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Высокая прочность</span>
                  </li>
                </ul>
                <div className="text-3xl font-bold text-secondary mb-4">от 1800₽/м²</div>
                <Button className="w-full bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('calculator')}>Заказать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Wind" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Антипыль</CardTitle>
                <CardDescription className="text-base">Максимальная фильтрация</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Защита от пыли и пыльцы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Мелкоячеистое плетение</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Для аллергиков</span>
                  </li>
                </ul>
                <div className="text-3xl font-bold text-accent mb-4">от 2500₽/м²</div>
                <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => scrollToSection('calculator')}>Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Калькулятор</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рассчитайте стоимость</h2>
            <p className="text-xl text-gray-600">Узнайте цену москитной сетки под ваши размеры</p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
              <CardDescription>Введите размеры вашего окна в сантиметрах</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="width" className="text-base">Ширина (см)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="Например: 120"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="mt-2 text-lg h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-base">Высота (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Например: 150"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="mt-2 text-lg h-12"
                  />
                </div>
              </div>

              <div>
                <Label className="text-base mb-3 block">Тип москитной сетки</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setMeshType('standard')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      meshType === 'standard'
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-lg font-semibold">Стандарт</div>
                    <div className="text-sm text-gray-600">1200₽/м²</div>
                  </button>
                  <button
                    onClick={() => setMeshType('pet')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      meshType === 'pet'
                        ? 'border-secondary bg-secondary/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-lg font-semibold">Антикошка</div>
                    <div className="text-sm text-gray-600">1800₽/м²</div>
                  </button>
                  <button
                    onClick={() => setMeshType('dust')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      meshType === 'dust'
                        ? 'border-accent bg-accent/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-lg font-semibold">Антипыль</div>
                    <div className="text-sm text-gray-600">2500₽/м²</div>
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="quantity" className="text-base">Количество</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mt-2 text-lg h-12"
                />
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <div className="text-gray-600 mb-2">Итоговая стоимость</div>
                <div className="text-5xl font-bold text-primary mb-2">{calculatePrice()} ₽</div>
                <div className="text-sm text-gray-500">
                  {width && height && `Площадь: ${((parseFloat(width) * parseFloat(height)) / 10000).toFixed(2)} м²`}
                </div>
              </div>

              <Button size="lg" className="w-full h-14 text-lg" onClick={() => scrollToSection('contacts')}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по москитным сеткам</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Ruler" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Замер</h3>
                <p className="text-gray-600">Бесплатный выезд специалиста для точных замеров</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Factory" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Производство</h3>
                <p className="text-gray-600">Изготовление сеток под ваши размеры за 1-2 дня</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Установка</h3>
                <p className="text-gray-600">Профессиональный монтаж с гарантией качества</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ремонт</h3>
                <p className="text-gray-600">Замена полотна и фурнитуры москитных сеток</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-accent text-white">О компании</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Защищаем ваш комфорт уже 5 лет</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы — команда профессионалов, специализирующихся на производстве и установке москитных сеток любой сложности. За годы работы мы установили более 2000 сеток и заслужили доверие наших клиентов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-gray-600">Предоставляем гарантию на все виды работ и материалы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Быстрое изготовление</h3>
                    <p className="text-gray-600">Производим москитные сетки за 1-2 дня</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Опытные специалисты</h3>
                    <p className="text-gray-600">Квалифицированные мастера с многолетним опытом</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl transform -rotate-3"></div>
              <img
                src="/placeholder.svg"
                alt="О компании"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Ответим на все вопросы и поможем с выбором</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-500 mt-1">Звоните с 9:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@moskitzashita.ru</p>
                    <p className="text-sm text-gray-500 mt-1">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-gray-500 mt-1">Офис и производство</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Ваш вопрос" className="mt-1" />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" className="text-primary" size={28} />
                <span className="text-xl font-bold">МоскитЗащита</span>
              </div>
              <p className="text-gray-400">Надежная защита вашего дома от насекомых</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Стандартные сетки</li>
                <li className="hover:text-white cursor-pointer transition-colors">Антикошка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Антипыль</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Замер</li>
                <li className="hover:text-white cursor-pointer transition-colors">Производство</li>
                <li className="hover:text-white cursor-pointer transition-colors">Установка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Ремонт</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors">+7 (999) 123-45-67</li>
                <li className="hover:text-white transition-colors">info@moskitzashita.ru</li>
                <li className="hover:text-white transition-colors">г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МоскитЗащита. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;