
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Download, Globe, Plus, Save, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaveOptions from "@/components/SaveOptions";
import SavedContentList from "@/components/SavedContentList";

const SaveContent = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  
  const handleSave = async () => {
    if (!url) return;
    
    setSaving(true);
    // Имитация процесса сохранения
    setTimeout(() => {
      setSaving(false);
      setShowOptions(false);
      setUrl("");
      // После сохранения можно было бы перейти к списку сохраненных страниц
      // или показать уведомление об успешном сохранении
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад на главную
        </Button>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Сохранить контент</h1>
            <p className="text-muted-foreground mb-8">
              Сохраняйте веб-страницы, изображения и другой контент для доступа в любое время
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Новое сохранение</CardTitle>
                <CardDescription>
                  Введите URL страницы, которую хотите сохранить
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="https://example.com"
                      className="pl-9"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleSave} 
                    disabled={!url || saving}
                  >
                    {saving ? (
                      <>Сохранение...</>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" /> Сохранить
                      </>
                    )}
                  </Button>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2" 
                  onClick={() => setShowOptions(!showOptions)}
                >
                  <Settings className="mr-2 h-4 w-4" /> 
                  {showOptions ? "Скрыть настройки" : "Показать настройки"}
                </Button>
                
                {showOptions && <SaveOptions />}
              </CardContent>
            </Card>

            <Tabs defaultValue="recent" className="mt-8">
              <TabsList>
                <TabsTrigger value="recent">Недавние сохранения</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
                <TabsTrigger value="scheduled">Запланированные</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="mt-4">
                <SavedContentList type="recent" />
              </TabsContent>
              <TabsContent value="favorites" className="mt-4">
                <SavedContentList type="favorites" />
              </TabsContent>
              <TabsContent value="scheduled" className="mt-4">
                <SavedContentList type="scheduled" />
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Быстрое сохранение</CardTitle>
                <CardDescription>
                  Установите расширение для браузера для мгновенного сохранения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center gap-4 py-4">
                  <div className="bg-secondary p-4 rounded-full">
                    <Download className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-medium">Расширение для браузера</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Сохраняйте контент в один клик прямо из вашего браузера
                    </p>
                    <Button className="mt-4" variant="outline">
                      Установить расширение
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Настройки сохранения</CardTitle>
                <CardDescription>
                  Настройте параметры по умолчанию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Автоматическое сохранение</span>
                    </div>
                    <Button size="sm" variant="outline">Настроить</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Расписание</span>
                    </div>
                    <Button size="sm" variant="outline">Настроить</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Plus className="h-4 w-4 text-muted-foreground" />
                      <span>Настроить интеграции</span>
                    </div>
                    <Button size="sm" variant="outline">Настроить</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SaveContent;
