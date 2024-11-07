"use client";

import QuestionSpeakerInformation from "./question-speaker-info";
import QuestionAccomodation from "./question-accomodation";
import { Form, Formik } from "formik";
import FormValidation from "./validation";
import QuestionDinner from "./question-dinner";
import QuestionMasterclass from "./question-masterclass";
import QuestionPaperInformation from "./question-paper-info";
import { EventType } from "@/lib/types";
import QuestionPaymentType from "./question-payment-type";
import QuestionDiscount from "./question-discount";
import QuestionReferral from "./question-referral";
import QuestionGuidelines from "./question-guidelines";
import { initValues } from "@/lib/form-paper";
import QuestionConference from "./question-conference";

type SpeakerFormProps = {
  events: EventType[];
};

export default function SpeakerForm({ events }: SpeakerFormProps) {
  return (
    <Formik
      initialValues={{ ...initValues }}
      validationSchema={FormValidation}
      onSubmit={async () => { }}
    >
      {({ values, touched, setFieldValue, isSubmitting }) => (
        <Form>
          <QuestionConference
            values={values}
            touched={touched}
            events={events}
          />
          <QuestionSpeakerInformation values={values} touched={touched} />
          <QuestionPaperInformation values={values} touched={touched} />
          <QuestionDinner
            values={values}
            touched={touched}
            price={150}
            name={values.name}
            setFieldValue={setFieldValue}
          />
          <QuestionAccomodation values={values} touched={touched} />
          <QuestionMasterclass
            values={values}
            touched={touched}
            events={events}
          />
          {/* <QuestionPaymentType touched={touched} /> */}
          <QuestionDiscount />
          <QuestionReferral values={values} touched={touched} />
          <QuestionGuidelines values={values} touched={touched} />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
