
import { Heart, Calendar, MoreVertical, ExternalLink, Trash2, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type SavedItemType = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  savedAt: string;
  isFavorite: boolean;
  tags?: string[];
  scheduled?: string;
};

type SavedContentListProps = {
  type: "recent" | "favorites" | "scheduled";
};

// Моковые данные для демонстрации
const mockData: SavedItemType[] = [
  {
    id: "1",
    title: "Документация React - Начало работы",
    url: "https://reactjs.org/docs/getting-started.html",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    savedAt: "2 часа назад",
    isFavorite: true,
    tags: ["React", "Программирование"],
  },
  {
    id: "2",
    title: "Tailwind CSS - Руководство по установке",
    url: "https://tailwindcss.com/docs/installation",
    thumbnail: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    savedAt: "Вчера",
    isFavorite: false,
    tags: ["CSS", "Программирование"],
  },
  {
    id: "3",
    title: "Создание современного приложения с TypeScript",
    url: "https://typescript-handbook.ru/docs/",
    thumbnail: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    savedAt: "3 дня назад",
    isFavorite: true,
    tags: ["TypeScript", "Программирование"],
    scheduled: "Еженедельно, ПН",
  },
];

const SavedContentList = ({ type }: SavedContentListProps) => {
  // Фильтрация данных в зависимости от типа списка
  const filteredData = type === "favorites" 
    ? mockData.filter(item => item.isFavorite)
    : type === "scheduled" 
      ? mockData.filter(item => item.scheduled)
      : mockData;

  if (filteredData.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Нет сохраненных элементов</p>
        {type === "favorites" && (
          <p className="text-sm mt-2">Добавьте страницы в избранное, чтобы они появились здесь</p>
        )}
        {type === "scheduled" && (
          <p className="text-sm mt-2">Настройте расписание сохранения для страниц</p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredData.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="aspect-video relative overflow-hidden bg-muted">
            <img 
              src={item.thumbnail} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 bg-black/30 text-white hover:bg-black/50 hover:text-white"
            >
              {item.isFavorite ? (
                <Heart className="h-4 w-4 fill-current" />
              ) : (
                <Heart className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <CardContent className="p-4">
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-medium line-clamp-2">{item.title}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <ExternalLink className="mr-2 h-4 w-4" /> Открыть оригинал
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Star className="mr-2 h-4 w-4" /> {item.isFavorite ? "Убрать из избранного" : "В избранное"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Clock className="mr-2 h-4 w-4" /> Настроить расписание
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Удалить
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="mt-2 text-xs text-muted-foreground truncate">
              {item.url}
            </div>
            
            {item.tags && item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-secondary/50 px-2 py-0.5 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
          
          <CardFooter className="px-4 py-3 bg-secondary/30 text-xs flex justify-between items-center">
            <div className="text-muted-foreground">
              Сохранено {item.savedAt}
            </div>
            
            {item.scheduled && (
              <div className="flex items-center gap-1 text-primary">
                <Calendar className="h-3 w-3" />
                <span>{item.scheduled}</span>
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SavedContentList;
