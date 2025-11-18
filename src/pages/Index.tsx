import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Monitor",
      title: "Ремонт телевизоров",
      description: "Диагностика и ремонт всех типов телевизоров: LCD, LED, OLED, плазменных панелей"
    },
    {
      icon: "Tv",
      title: "Замена матриц",
      description: "Профессиональная замена матриц телевизоров любых производителей с гарантией"
    },
    {
      icon: "Settings",
      title: "Настройка изображения",
      description: "Калибровка цвета, настройка яркости и контраста для идеального качества"
    },
    {
      icon: "Laptop",
      title: "Ремонт компьютеров",
      description: "Диагностика и ремонт настольных ПК, ноутбуков, замена комплектующих"
    },
    {
      icon: "Wrench",
      title: "Диагностика",
      description: "Бесплатная диагностика неисправностей с подробным отчетом"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "До 12 месяцев гарантии на все виды ремонтных работ"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Tv" className="text-primary" size={32} />
            <span className="text-2xl font-bold">TechRepair</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button size="lg">Заказать звонок</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Профессиональный ремонт
            <br />
            <span className="text-primary">телевизоров и техники</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Быстрый и качественный ремонт любой сложности. Диагностика бесплатно. Гарантия до 12 месяцев.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Вызвать мастера
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг по ремонту и обслуживанию техники
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О нашем сервисе</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Мы специализируемся на профессиональном ремонте телевизоров и компьютерной техники более 10 лет.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Наши мастера имеют высокую квалификацию и регулярно проходят обучение по работе с новейшими моделями техники.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">Сертифицированные специалисты</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">Оригинальные запчасти</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">Гарантия до 12 месяцев</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">Выезд мастера на дом</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="p-6 text-center border-2">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </Card>
              <Card className="p-6 text-center border-2">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">ремонтов</div>
              </Card>
              <Card className="p-6 text-center border-2">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </Card>
              <Card className="p-6 text-center border-2">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">поддержка</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Описание проблемы</label>
                  <Textarea 
                    placeholder="Опишите, что случилось с вашей техникой..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (999) 765-43-21</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Email</h3>
                    <p className="text-muted-foreground">info@techrepair.ru</p>
                    <p className="text-muted-foreground">support@techrepair.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 TechRepair. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
