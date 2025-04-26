import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Готовы начать сохранять<br />контент прямо сейчас?
            </h2>
            <p className="text-lg opacity-90 mb-8 md:mb-0 max-w-xl">
              Зарегистрируйтесь бесплатно и откройте для себя удобный способ сохранения 
              и организации важного веб-контента.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-brand hover:bg-white/90">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Демонстрация <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
