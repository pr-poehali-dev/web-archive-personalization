import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl flex items-center gap-2">
            <span className="text-brand">ТаймВолт</span>
            <span className="text-sm bg-brand text-white px-2 py-0.5 rounded-md">Beta</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand transition-colors">
            Главная
          </Link>
          <Link to="/features" className="text-sm font-medium hover:text-brand transition-colors">
            Возможности
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-brand transition-colors">
            Тарифы
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand transition-colors">
            О нас
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-brand transition-colors">
            Блог
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button size="sm" variant="outline">
            Войти
          </Button>
          <Button size="sm">Регистрация</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>
              Главная
            </Link>
            <Link to="/features" className="text-sm font-medium px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>
              Возможности
            </Link>
            <Link to="/pricing" className="text-sm font-medium px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>
              Тарифы
            </Link>
            <Link to="/about" className="text-sm font-medium px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>
              О нас
            </Link>
            <Link to="/blog" className="text-sm font-medium px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>
              Блог
            </Link>

            <div className="flex gap-4 mt-4">
              <Button size="sm" variant="outline" className="flex-1">
                Войти
              </Button>
              <Button size="sm" className="flex-1">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
