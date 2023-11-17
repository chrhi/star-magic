import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Courses } from "@/types";
import { Plus } from "lucide-react";

import { useState, type FC, Dispatch, SetStateAction } from "react";

interface EducationModleAbdullahProps {
  setData: Dispatch<SetStateAction<Courses[]>>;
  data: Courses[];
}

const CoursesModle: FC<EducationModleAbdullahProps> = ({ data, setData }) => {
  const handleSubmit = () => {
    setData([...data, currectFormData]);
  };

  const [currectFormData, setCurrentFormData] = useState<Courses>({
    provider: "",
    title: "",

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
            Ajouter un nouveau cours que vous avez suivi ?
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="w-full h-fit min-h-[400px] flex flex-col ">
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>d&apos;où as-tu suivi ton cours </Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  provider: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex flex-col items-start  gap-y-2 my-4 ">
            <Label>titre ou nom du diplôme </Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  title: e.target.value,
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
            <Label>Fini à</Label>
            <Input
              onChange={(e) =>
                setCurrentFormData({
                  ...currectFormData,
                  ends_at: e.target.value,
                })
              }
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

export default CoursesModle;
