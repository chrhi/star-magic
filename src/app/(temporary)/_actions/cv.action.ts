"use server";

import { db } from "@/lib/db";
import { Courses, Education, Experience, Intershipes, Skills } from "@/types";

type SubmitionData = {
  address: string;
  email: string;
  facebook_url: string;
  first_name: string;
  isCanada: boolean;
  lang: string;
  last_name: string;
  linked_in_url: string;
  phone: string;
  prefer_color: string;
  cources: Courses[];

  education: Education[];
  experience: Experience[];
  interships: Intershipes[];
  skills: Skills[];
  cv_used_for: string;
};

export const submitCvRequestAction = async (params: SubmitionData) => {
  try {
    const data = await db.customer.create({
      data: {
        address: params.address,
        email: params.email,
        facebook_url: params.facebook_url,
        first_name: params.first_name,
        isCanada: params.isCanada,
        lang: params.lang,
        last_name: params.last_name,
        linked_in_url: params.linked_in_url,
        phone: params.phone,
        prefer_color: params.prefer_color,
        cources: JSON.stringify(params.cources),

        education: JSON.stringify(params.education),
        experience: JSON.stringify(params.experience),
        cv_used_for: params.cv_used_for,
        interships: JSON.stringify(params.interships),
        skills: JSON.stringify(params.skills),
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllCvRequests = async () => {
  // to do that later
};
