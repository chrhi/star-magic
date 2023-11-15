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
import { Education } from "@/types";

interface CvCanadaFormAbdullahProps {}

const CvCanadaForm: FC = ({}) => {
  const [data, setData] = useState<Education[]>([]);

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
          </CardContent>
        </Card>
        <Card className="p-4 max-w-2xl w-full  mx-auto my-4">
          <CardTitle>Educations</CardTitle>
          <CardDescription>if you have any kind of education</CardDescription>
          <CardContent>
            <div className="w-full flex gap-4 py-4 min-h-[300px] ">
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
