import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");
  const [isOnline, setIsOnline] = useState(false);

  const monthlyEarnings = 145280;

  const tabs = [
    { id: "home", icon: "Home", label: "Главная" },
    { id: "status", icon: "Activity", label: "Статус" },
    { id: "profile", icon: "User", label: "Профиль" },
    { id: "support", icon: "MessageCircle", label: "Поддержка" },
    { id: "stats", icon: "BarChart3", label: "Статистика" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6 pb-24">
            <div className="gradient-orange rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name="TrendingUp" size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">Прибыль за месяц</p>
                    <p className="text-xs text-white/60">Январь 2026</p>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Текущий
                </Badge>
              </div>
              <div className="text-6xl font-bold tracking-tight mb-2">
                {monthlyEarnings.toLocaleString('ru-RU')} ₽
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Icon name="TrendingUp" size={16} />
                <span className="text-sm font-medium">+12% к прошлому месяцу</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card 
                className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:shadow-lg hover:scale-105 duration-300"
                onClick={() => setIsOnline(!isOnline)}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                    isOnline 
                      ? 'bg-green-100' 
                      : 'bg-gray-100'
                  }`}>
                    <Icon 
                      name={isOnline ? "CheckCircle" : "Circle"} 
                      size={32} 
                      className={isOnline ? 'text-green-600' : 'text-gray-400'}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      {isOnline ? "На линии" : "Офлайн"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {isOnline ? "Активен" : "Нажмите для проверки"}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Icon name="Headphones" size={32} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Поддержка</h3>
                    <p className="text-xs text-muted-foreground">Связаться</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <Icon name="User" size={32} className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Профиль</h3>
                    <p className="text-xs text-muted-foreground">Мои данные</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:scale-105 duration-300">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Icon name="BarChart3" size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Статистика</h3>
                    <p className="text-xs text-muted-foreground">Отчёты</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Сегодняшние заказы</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Выполнено</span>
                      <span className="font-semibold text-green-600">12 заказов</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">В процессе</span>
                      <span className="font-semibold text-orange-600">2 заказа</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Заработано сегодня</span>
                      <span className="font-bold text-lg text-gradient">5 420 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case "status":
        return (
          <div className="space-y-4 pb-24">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Activity" size={24} className="text-orange-600" />
                Статус работы
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="font-medium">Статус в системе</span>
                  <Badge className={isOnline ? "bg-green-500" : "bg-gray-400"}>
                    {isOnline ? "Онлайн" : "Офлайн"}
                  </Badge>
                </div>
                <Button 
                  className="w-full gradient-orange text-white font-semibold py-6 text-lg"
                  onClick={() => setIsOnline(!isOnline)}
                >
                  <Icon name="RefreshCw" size={20} className="mr-2" />
                  Проверить статус в Яндекс
                </Button>
              </div>
            </Card>
          </div>
        );

      case "profile":
        return (
          <div className="space-y-4 pb-24">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 gradient-orange rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                  ИВ
                </div>
                <div>
                  <h2 className="text-xl font-bold">Иван Водителев</h2>
                  <p className="text-sm text-muted-foreground">+7 (900) 123-45-67</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Статус</p>
                  <p className="font-semibold">Активный водитель</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">ID водителя</p>
                  <p className="font-semibold">YD-123456</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Дата регистрации</p>
                  <p className="font-semibold">15 января 2025</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">Рейтинг</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">4.9</span>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case "support":
        return (
          <div className="space-y-4 pb-24">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Headphones" size={24} className="text-orange-600" />
                Техподдержка
              </h2>
              <div className="space-y-3">
                <Button className="w-full gradient-orange text-white font-semibold py-6 text-lg justify-start">
                  <Icon name="MessageCircle" size={20} className="mr-3" />
                  Написать в чат поддержки
                </Button>
                <Button variant="outline" className="w-full border-2 border-orange-200 py-6 text-lg justify-start hover:bg-orange-50">
                  <Icon name="Phone" size={20} className="mr-3 text-orange-600" />
                  Позвонить в поддержку
                </Button>
                <Button variant="outline" className="w-full border-2 border-orange-200 py-6 text-lg justify-start hover:bg-orange-50">
                  <Icon name="Mail" size={20} className="mr-3 text-orange-600" />
                  Написать на почту
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-sm text-muted-foreground mb-2">Часы работы поддержки</p>
                <p className="font-semibold">Ежедневно, 24/7</p>
              </div>
            </Card>
          </div>
        );

      case "stats":
        return (
          <div className="space-y-4 pb-24">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="BarChart3" size={24} className="text-orange-600" />
                Статистика
              </h2>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-muted-foreground mb-1">Заказы за неделю</p>
                  <p className="text-2xl font-bold text-gradient">84</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-muted-foreground mb-1">Часов на линии</p>
                  <p className="text-2xl font-bold text-gradient">42.5</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <p className="text-sm text-muted-foreground mb-1">Средний чек</p>
                  <p className="text-2xl font-bold text-green-600">1 728 ₽</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-muted-foreground mb-1">Рейтинг</p>
                  <p className="text-2xl font-bold text-blue-600">4.9 ⭐</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Выполнено заказов</span>
                    <span className="text-sm font-bold">84/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="gradient-orange h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Цель по прибыли</span>
                    <span className="text-sm font-bold">145k/200k ₽</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="gradient-yellow h-2 rounded-full" style={{ width: '72.5%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-yellow-50/30">
      <div className="max-w-md mx-auto">
        <header className="gradient-orange px-6 pt-12 pb-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold mb-1">Яндекс Доставка</h1>
              <p className="text-white/80 text-sm">Панель водителя</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon name="Truck" size={28} className="text-white" />
            </div>
          </div>
        </header>

        <main className="px-6 pt-6">
          {renderContent()}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-md mx-auto px-4 py-3">
            <div className="flex items-center justify-around">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon name={tab.icon} size={22} />
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
