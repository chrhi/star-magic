"use client";

import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CvCanadaSchema } from "../validators/cv-validator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import EducationModle from "@/app/(temporary)/_components/models/education-modle";
import CoursesModle from "@/app/(temporary)/_components/models/courses-model";
import ExperienceModle from "@/app/(temporary)/_components/models/experience-model";
import SkillModle from "@/app/(temporary)/_components/models/skills-model";
import { Education, Experience, Intershipes, Skills, Courses } from "@/types";
import IntershipModle from "@/app/(temporary)/_components/models/intershipe-model";
import { submitCvRequestAction } from "@/app/(temporary)/_actions/cv.action";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const CvCanadaForm: FC = ({}) => {
  const [color, setColor] = useState<string>("violet");
  const [data, setData] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [course, setCourse] = useState<Courses[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [internshipes, setIntershipes] = useState<Intershipes[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof CvCanadaSchema>>({
    //@ts-ignore
    resolver: zodResolver(CvCanadaSchema),
    defaultValues: {
      address: "",
      cources: [""],
      education: [""],
      email: "",
      experience: [""],
      firstName: "",
      hobbies: [""],
      internshipe: [""],
      lastName: "",
      phone: "",
      skills: [""],
      facebook_url: "",
      linkedInUrl: "",
      lang: "",
      cv_used_for: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CvCanadaSchema>) {
    setIsLoading(true);
    try {
      await submitCvRequestAction({
        address: values.address,
        cources: course,
        education: data,
        email: values.email,
        experience,
        facebook_url: values.facebook_url,
        first_name: values.firstName,
        interships: internshipes,

        lang: values.lang,
        last_name: values.lastName,
        linked_in_url: values.linkedInUrl,
        phone: values.phone,
        prefer_color: color,
        skills,
        cv_used_for: values.cv_used_for,
      });
      router.push("/thank-you");
    } catch (err) {
      console.log(err);
      toast({
        title: "Ohh no !",
        description: "something went wrong ",
      });
    } finally {
      setIsLoading(false);
      toast({
        title: "Merci encore!",
        description:
          "NOUS allons commencer à travailler sur votre CV maintenant",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-8">
        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Informations personnelles</CardTitle>
          <CardDescription>
            make sure all the informations right here are currect because they
            are the way to comuicate with you
          </CardDescription>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom or first name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de famille</FormLabel>
                  <FormControl>
                    <Input placeholder="le nom " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ton adresse actuelle</FormLabel>
                  <FormControl>
                    <Input placeholder="state , city , street" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="098765555" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Langues que vous parlez</FormLabel>
                  <FormControl>
                    <Input placeholder="english frensh ..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv_used_for"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>à quoi va servir ce CV</FormLabel>
                  <FormDescription>
                    c&apos;est très important car c&apos;est sur cette base que
                    nous déterminons la manière dont nous construisons votre CV
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="english frensh ..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Éducation & formation</CardTitle>
          <CardDescription>
            Une formation variée sur votre CV résume la valeur que vos
            apprentissages et votre expérience apporteront au travail.
          </CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit">
              {data.map((item) => (
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 
                          
                          w-[100px] hover:scale-105  transition-all  cursor-pointer hover:bg-violet-600 h-[100px] flex items-center justify-center
                          "
                  key={item.degree_name + item.ends_at}
                >
                  <p className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                    {item.degree_name}
                  </p>
                </div>
              ))}
              <EducationModle data={data} setData={setData} />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Ton expérience</CardTitle>
          <CardDescription>
            Montrez votre expérience pertinente (10 dernières années). Utilisez
            des puces pour noter vos réalisations, si possible - utilisez des
            chiffres/faits (Réalisé X, mesuré par Y, en faisant Z).
          </CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit">
              {experience.map((item) => (
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 
                          
                          w-[100px] hover:scale-105  transition-all  cursor-pointer hover:bg-violet-600 h-[100px] flex items-center justify-center
                          "
                  key={item.company_name + item.ends_at}
                >
                  <p className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                    {item.company_name}
                  </p>
                </div>
              ))}
              <ExperienceModle data={experience} setData={setExperience} />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Compétences que vous possédez</CardTitle>
          <CardDescription>
            Choisissez 5 compétences importantes qui montrent que vous
            correspondez au poste. Assurez-vous qu&apos;ils correspondent aux
            compétences clés mentionnées dans l&apos;offre d&apos;emploi (en
            particulier lorsque vous postulez via un système en ligne).
          </CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit ">
              {skills.map((item, index) => (
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 
                          
                          w-[100px] hover:scale-105  transition-all  cursor-pointer hover:bg-violet-600 h-[100px] flex items-center justify-center
                          "
                  key={item.skill_name + index}
                >
                  <p className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                    {item.skill_name}
                  </p>
                </div>
              ))}
              <SkillModle data={skills} setData={setSkills} />
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Les stages que vous avez</CardTitle>
          <CardDescription>si vous avez des stages pratiques</CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit ">
              {internshipes.map((item) => (
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 
                          
                          w-[100px] hover:scale-105  transition-all  cursor-pointer hover:bg-violet-600 h-[100px] flex items-center justify-center
                          "
                  key={item.company_name + item.ends_at}
                >
                  <p className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                    {item.company_name}
                  </p>
                </div>
              ))}
              <IntershipModle data={internshipes} setData={setIntershipes} />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Cours que vous avez suivis</CardTitle>
          <CardDescription>
            tout cours en ligne ou certificat privé
          </CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit ">
              {course.map((item) => (
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 
                          
                          w-[100px] hover:scale-105  transition-all  cursor-pointer hover:bg-violet-600 h-[100px] flex items-center justify-center
                          "
                  key={item.title + item.ends_at}
                >
                  <p className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
              <CoursesModle data={course} setData={setCourse} />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>liens vers les réseaux sociaux </CardTitle>
          <CardDescription>
            nous utilisons votre profil Facebook pour vous contacter et nous
            vérifions votre profil LinkedIn s&apos;il nécessite des
            améliorations
          </CardDescription>
          <CardContent>
            <FormField
              control={form.control}
              name="facebook_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>facebook url</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.facebook.com/profile.php?id=100010070348939"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedInUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>linkedin url</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.linkedin.com/in/chehri-abdellah-4a8858267/"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Tu as préféré la couleur </CardTitle>
          <CardDescription>
            il s&apos;agit d&apos;une couleur secondaire utilisée pour les
            titres
          </CardDescription>
          <CardContent>
            <div className="w-full h-[50px] flex items-center gap-x-4 ">
              <Button
                type="button"
                onClick={() => setColor("blue")}
                className={`bg-blue-500 hover:bg-blue-700 ${
                  color === "blue" ? "border-[5px]" : ""
                }`}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("red")}
                className={`bg-red-500 hover:bg-red-700 ${
                  color === "red" ? "border-[5px]" : ""
                } `}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("yellow")}
                className={`bg-yellow-500 hover:bg-yellow-700 ${
                  color === "yellow" ? "border-[5px]" : ""
                }`}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("violet")}
                className={`bg-violet-500 hover:bg-violet-700 ${
                  color === "violet" ? "border-[5px]" : ""
                }`}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("green")}
                className={`bg-green-500 hover:bg-green-700 ${
                  color === "green" ? "border-[5px]" : ""
                } `}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("rose")}
                className={`bg-rose-500 hover:bg-rose-700 ${
                  color === "rose" ? "border-[5px]" : ""
                } `}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("gray")}
                className={`bg-gray-500 hover:bg-gray-700 ${
                  color === "gray" ? "border-[5px]" : ""
                } `}
                size="icon"
              />
              <Button
                type="button"
                onClick={() => setColor("orange")}
                className={`bg-orange-500 hover:bg-orange-700 ${
                  color === "orange" ? "border-[5px]" : ""
                } `}
                size="icon"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full  mx-auto my-8">
          <CardTitle>la fin</CardTitle>
          <CardDescription>
            assurez-vous que toutes les informations sont exactes, merci pour
            votre confiance
          </CardDescription>
          <CardFooter className="w-full h-[100px] flex items-center justify-end">
            <Button disabled={isLoading} type="submit">
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              commencer à travailler sur mon CV
            </Button>
          </CardFooter>
        </Card>
        <div className="w-full h-[200px] " />
      </form>
    </Form>
  );
};

export default CvCanadaForm;
