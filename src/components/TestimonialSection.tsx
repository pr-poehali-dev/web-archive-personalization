import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "ТаймВолт помог мне сохранить всю историю разработки нашего проекта. Теперь я могу легко отслеживать изменения и возвращаться к предыдущим версиям.",
    author: "Алексей Петров",
    role: "Frontend-разработчик"
  },
  {
    content: "Я использую сервис для сохранения важных статей и исследований. Возможность добавлять теги и комментарии делает поиск невероятно удобным.",
    author: "Елена Смирнова",
    role: "Маркетолог"
  },
  {
    content: "Как дизайнер, я постоянно ищу вдохновение. С ТаймВолт я могу сохранять идеи и референсы, которые нахожу в интернете, и иметь к ним доступ даже когда источник исчезает.",
    author: "Максим Иванов",
    role: "UI/UX дизайнер"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Что говорят наши пользователи
          </h2>
          <p className="text-lg text-muted-foreground">
            Присоединяйтесь к тысячам довольных пользователей, которые уже используют ТаймВолт 
            для сохранения важного контента.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
