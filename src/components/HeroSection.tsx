import { Button } from "@/components/ui/button";
import { ArrowRight, Archive, Clock, Tag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in">
              Сохраняйте веб-контент<br />
              <span className="text-brand">навсегда</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              ТаймВолт — это интеллектуальный сервис для сохранения веб-страниц, медиа-контента 
              и важных данных с полной персонализацией и удобным доступом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gap-2">
                Начать бесплатно <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8 animate-fade-in text-muted-foreground" style={{ animationDelay: "0.3s" }}>
              <span className="flex items-center gap-1">
                <Archive className="h-4 w-4" /> Более 1 миллиона страниц
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 24/7 сохранение
              </span>
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4" /> Бесплатный старт
              </span>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="rounded-xl bg-white shadow-2xl overflow-hidden border animate-float p-4">
              <div className="bg-secondary mb-2 h-8 w-3/4 rounded-md"></div>
              <div className="space-y-2">
                <div className="h-20 bg-brand/10 rounded-md flex items-center p-4">
                  <div className="w-10 h-10 bg-brand rounded-full mr-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-36 bg-secondary rounded-sm"></div>
                    <div className="h-3 w-24 bg-secondary rounded-sm"></div>
                  </div>
                </div>
                <div className="h-16 bg-secondary/50 rounded-md"></div>
                <div className="h-16 bg-secondary/50 rounded-md"></div>
                <div className="flex justify-between gap-4">
                  <div className="h-10 w-24 bg-brand rounded-md"></div>
                  <div className="h-10 w-24 bg-secondary rounded-md"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 size-24 bg-brand-light rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 size-16 bg-brand-light rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
