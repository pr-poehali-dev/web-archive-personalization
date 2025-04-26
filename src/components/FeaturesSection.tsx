import { Calendar, Share2, Star, Shield, Clock, Code } from "lucide-react";

const features = [
  {
    icon: <Calendar className="size-10 text-brand p-2 bg-brand-light rounded-lg" />,
    title: "Настройка расписания",
    description: "Создавайте графики автоматического сохранения страниц с гибкими интервалами от часа до месяца."
  },
  {
    icon: <Star className="size-10 text-brand p-2 bg-brand-light rounded-lg" />,
    title: "Отметка важных страниц",
    description: "Добавляйте теги, комментарии и отмечайте избранное для быстрого доступа к сохраненным материалам."
  },
  {
    icon: <Share2 className="size-10 text-brand p-2 bg-brand-light rounded-lg" />,
    title: "Совместная работа",
    description: "Делитесь сохраненными страницами с коллегами, друзьями или командой для совместной работы."
  },
  {
    icon: <Shield className="size-10 text-brand p-2 bg-brand-light rounded-lg" />,
    title: "Безопасность данных",
    description: "Надежное шифрование и контроль доступа обеспечивают полную безопасность сохраненной информации."
  },
  {
    icon: <Clock className="size-10 text-brand p-2 bg-brand-light rounded-lg" />,
    title: "Версионирование",
    description: "Храните и управляйте несколькими версиями одной и той же страницы, отслеживая изменения во времени."
  },
  {
    icon: <Code className="size-10 text-brand p-2 bg-brand-light rounded-lg" />,
    title: "API для разработчиков",
    description: "Интегрируйте функционал сохранения в свои приложения с помощью нашего гибкого API."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Расширенные возможности для сохранения контента
          </h2>
          <p className="text-lg text-muted-foreground">
            ТаймВолт предлагает полный набор инструментов для интеллектуального сохранения 
            и управления веб-контентом как для обычных пользователей, так и для разработчиков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border rounded-xl bg-card transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
