
import { useState } from "react";
import { Check, Code, FileText, Image, Layout, Settings2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const SaveOptions = () => {
  const [saveFullPage, setSaveFullPage] = useState(true);
  const [saveImages, setSaveImages] = useState(true);
  const [saveSourceCode, setSaveSourceCode] = useState(false);
  const [captureType, setCaptureType] = useState("visible");
  
  return (
    <div className="mt-4 pt-4 border-t space-y-4">
      <h3 className="font-medium flex items-center gap-2">
        <Settings2 className="h-4 w-4" />
        Настройки сохранения
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <Label htmlFor="save-full-page">Сохранить полную страницу</Label>
            </div>
            <Switch
              id="save-full-page"
              checked={saveFullPage}
              onCheckedChange={setSaveFullPage}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              <Label htmlFor="save-images">Сохранить изображения</Label>
            </div>
            <Switch
              id="save-images"
              checked={saveImages}
              onCheckedChange={setSaveImages}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <Label htmlFor="save-source-code">Сохранить исходный код</Label>
            </div>
            <Switch
              id="save-source-code"
              checked={saveSourceCode}
              onCheckedChange={setSaveSourceCode}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="capture-type" className="block mb-2">Тип захвата</Label>
            <RadioGroup 
              id="capture-type" 
              value={captureType} 
              onValueChange={setCaptureType}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="visible" id="visible" />
                <Label htmlFor="visible">Видимая область</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fullpage" id="fullpage" />
                <Label htmlFor="fullpage">Вся страница</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="selection" id="selection" />
                <Label htmlFor="selection">Выделенная область</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="format-selector" className="block mb-2">Формат сохранения</Label>
            <Select defaultValue="html">
              <SelectTrigger id="format-selector">
                <SelectValue placeholder="Выберите формат" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="html">HTML (с ресурсами)</SelectItem>
                <SelectItem value="mhtml">MHTML (один файл)</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="png">PNG изображение</SelectItem>
                <SelectItem value="text">Только текст</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <Label htmlFor="tags" className="block mb-2">Метки и категории</Label>
        <div className="flex flex-wrap gap-2">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
            Важное <Check className="h-3 w-3" />
          </span>
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
            Работа <Check className="h-3 w-3" />
          </span>
          <span className="border border-input px-3 py-1 rounded-full text-xs">
            + Добавить метку
          </span>
        </div>
      </div>
    </div>
  );
};

export default SaveOptions;
