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

const CvCanadaForm: FC = ({}) => {
  const [color, setColor] = useState<string>("violet");
  const [data, setData] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [course, setCourse] = useState<Courses[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [internshipes, setIntershipes] = useState<Intershipes[]>([]);

  const form = useForm<z.infer<typeof CvCanadaSchema>>({
    //@ts-ignore
    resolver: zodResolver(CvCanadaSchema),
    defaultValues: {
      address: "",
      cources: [""],
      education: [""],
      email: "example@gmail.com",
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
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof CvCanadaSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log(data);
    console.log(experience);
    console.log(color);
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
                    <Input placeholder="shadcn" {...field} />
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
                    <Input placeholder="shadcn" {...field} />
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
                    <Input placeholder="shadcn" {...field} />
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
                    <Input placeholder="shadcn" {...field} />
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
                    <Input placeholder="shadcn" {...field} />
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
          </CardContent>
        </Card>
        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Éducation</CardTitle>
          <CardDescription>todo explain this later</CardDescription>
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
          <CardDescription>if you have any kind of education</CardDescription>
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
          <CardDescription>if you have any kind of education</CardDescription>
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
          <CardDescription>if you have any kind of intershipe</CardDescription>
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
          <CardDescription>if you have any kind of education</CardDescription>
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
            we reach out to you throw these so make sure they are currect
          </CardDescription>
          <CardContent>
            <FormField
              control={form.control}
              name="facebook_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>facebook url</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
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
                    <Input placeholder="shadcn" {...field} />
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
            we reach out to you throw these so make sure they are currect
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
          <CardTitle>Submition</CardTitle>
          <CardDescription>
            make sure all the information are currect{" "}
          </CardDescription>
          <CardFooter className="w-full h-[100px] flex items-center justify-end">
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
        <div className="w-full h-[200px] " />
      </form>
    </Form>
  );
};

export default CvCanadaForm;
