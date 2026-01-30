import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [isOnline, setIsOnline] = useState(false);

  const monthlyEarnings = 145280;



  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-yellow-50/30">
      <div className="max-w-md mx-auto">
        <header className="gradient-orange px-6 pt-12 pb-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold mb-1">Король Доставки 📦</h1>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon name="Truck" size={28} className="text-white" />
            </div>
          </div>
        </header>

        <main className="px-6 pt-6">
          <div className="space-y-6 pb-6">
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

              <Card 
                className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:shadow-lg hover:scale-105 duration-300"
                onClick={() => alert('Раздел Поддержка в разработке')}
              >
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

              <Card 
                className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:shadow-lg hover:scale-105 duration-300"
                onClick={() => alert('Раздел Профиль в разработке')}
              >
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

              <Card 
                className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer hover:shadow-lg hover:scale-105 duration-300"
                onClick={() => alert('Раздел Статистика в разработке')}
              >
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
        </main>
      </div>
    </div>
  );
}