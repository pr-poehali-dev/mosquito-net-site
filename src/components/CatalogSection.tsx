import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface CatalogSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const CatalogSection = ({ scrollToSection }: CatalogSectionProps) => {
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

  return (
    <>
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
    </>
  );
};

export default CatalogSection;
