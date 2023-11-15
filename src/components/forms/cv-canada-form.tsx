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
import { Education, Experience, Intershipes, Skills, Courses } from "@/types";

interface CvCanadaFormAbdullahProps {}

const CvCanadaForm: FC = ({}) => {
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
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof CvCanadaSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-8">
        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Personal informations</CardTitle>
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
                  <FormLabel>First name</FormLabel>
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
                  <FormLabel>Last name</FormLabel>
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
                  <FormLabel>your current address</FormLabel>
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
                  <FormLabel>your phone number</FormLabel>
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
                  <FormLabel>your email</FormLabel>
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
                  <FormLabel>languages you speak</FormLabel>
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
          <CardTitle>Educations</CardTitle>
          <CardDescription>if you have any kind of education</CardDescription>
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
          <CardTitle>Experiance</CardTitle>
          <CardDescription>if you have any kind of education</CardDescription>
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
          <CardTitle>Skills</CardTitle>
          <CardDescription>if you have any kind of education</CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit ">
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
          <CardTitle>Courses</CardTitle>
          <CardDescription>if you have any kind of education</CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[100px] h-fit ">
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
          <CardTitle>social media liks </CardTitle>
          <CardDescription>
            we reach out to you throw these so make sure they are currect
          </CardDescription>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>linked in url</FormLabel>
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
          <CardTitle>Colors </CardTitle>
          <CardDescription>
            we reach out to you throw these so make sure they are currect
          </CardDescription>
          <CardContent>
            <div className="w-full h-[50px] flex items-center gap-x-4 ">
              <Button className="bg-blue-500 hover:bg-blue-700" size="icon" />
              <Button className="bg-red-500 hover:bg-red-700" size="icon" />
              <Button
                className="bg-yellow-500 hover:bg-yellow-700"
                size="icon"
              />
              <Button
                className="bg-violet-500 hover:bg-violet-700"
                size="icon"
              />
              <Button
                className="bg-green-500 hover:bg-green-700 "
                size="icon"
              />
              <Button className="bg-rose-500 hover:bg-rose-700 " size="icon" />
              <Button className="bg-gray-500 hover:bg-gray-700 " size="icon" />
              <Button
                className="bg-orange-500 hover:bg-orange-700 "
                size="icon"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 max-w-2xl w-full h-[200px]  mx-auto my-8">
          <CardTitle>Submition</CardTitle>
          <CardDescription>
            make sure all the information are currect{" "}
          </CardDescription>
          <CardFooter className="w-full h-[100px] flex items-center justify-end">
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default CvCanadaForm;
