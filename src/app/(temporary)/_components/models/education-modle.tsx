import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Education } from "@/types";
import { Plus } from "lucide-react";

import { useState, type FC, Dispatch, SetStateAction } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface EducationModleAbdullahProps {
  setData: Dispatch<SetStateAction<Education[]>>;
  data: Education[];
}

const EducationModle: FC<EducationModleAbdullahProps> = ({ data, setData }) => {
  const handleSubmit = () => {
    setData([...data, currectFormData]);
  };

  const [currectFormData, setCurrentFormData] = useState<Education>({
    degree_description: "",
    university: "",
    degree_name: "",
    ends_at: "",
    start_at: "",
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-[100px] hover:scale-105  transition-all  cursor-pointer hover:bg-violet-600 h-[100px] rounded-2xl bg-violet-500 flex items-center justify-center">
          <div className="bg-white w-[20px] h-[20px] rounded-[50%] flex items-center justify-center">
            <Plus className="text-violet-500 w-5 h-5" />
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Ajoutez un nouveau diplôme ou diplôme que vous possédez?
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="w-full h-fit min-h-[400px] flex flex-col ">
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>Nom de diplome </Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  degree_name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>université </Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  degree_name: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>Commencé à </Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  start_at: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>Fini à </Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  ends_at: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>Description </Label>
            <Textarea
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  degree_description: e.target.value,
                })
              }
              rows={3}
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>
            Continuer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EducationModle;
