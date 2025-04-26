import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Бесплатный",
    price: "0₽",
    description: "Для начинающих пользователей",
    features: [
      "Сохранение до 100 страниц",
      "Базовые функции хранения",
      "Доступ с 1 устройства",
      "7 дней хранения версий"
    ],
    mostPopular: false,
    buttonText: "Начать бесплатно"
  },
  {
    name: "Стандарт",
    price: "399₽",
    period: "в месяц",
    description: "Для активных пользователей",
    features: [
      "Сохранение до 1000 страниц",
      "Расширенные возможности хранения",
      "Доступ с 3 устройств",
      "30 дней хранения версий",
      "Персональная лента",
      "Отсутствие рекламы"
    ],
    mostPopular: true,
    buttonText: "Оформить подписку"
  },
  {
    name: "Премиум",
    price: "799₽",
    period: "в месяц",
    description: "Для профессионалов и команд",
    features: [
      "Неограниченное количество страниц",
      "Полные функции хранения и архивации",
      "Доступ с неограниченного числа устройств",
      "1 год хранения версий",
      "Расширенная аналитика",
      "Доступ к API",
      "Приоритетная поддержка"
    ],
    mostPopular: false,
    buttonText: "Оформить подписку"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Тарифные планы для любых потребностей
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий тариф, от бесплатного для личного использования до премиум 
            для профессионалов и бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl bg-card border ${
                plan.mostPopular ? "border-brand shadow-lg relative" : ""
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand text-white text-sm font-medium py-1 px-3 rounded-full">
                  Популярный выбор
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="size-5 text-brand flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.mostPopular ? "" : "variant-outline"}`}
                variant={plan.mostPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
