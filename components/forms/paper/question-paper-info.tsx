import { PaperFormikValuesType } from "@/lib/form-paper-types";
import { Field, FormikTouched } from "formik";
import clsx from "clsx";

type QuestionPaperInformationProps = {
  values: PaperFormikValuesType;
  touched: FormikTouched<PaperFormikValuesType>;
};

export default function QuestionPaperInformation({
  values,
  touched,
}: QuestionPaperInformationProps) {
  return (
    <>
      <Field
        type="text"
        name="title"
        placeholder="Paper Title"
        className={clsx("field", {
          "!placeholder-red-500 !border-red-500 italic":
            !values.paperTitle?.trim() && touched.paperTitle,
        })}
      />
      <div className="grid grid-cols-2 gap-2">
        <Field
          as="textarea"
          name="biography"
          placeholder="Speaker Biography"
          className={clsx("field", {
            "!placeholder-red-500 !border-red-500 italic":
              !values.biography?.trim() && touched.biography,
          })}
        />
        <Field
          as="textarea"
          name="description"
          placeholder="Paper Description"
          className={clsx("field", {
            "!placeholder-red-500 !border-red-500 italic":
              !values.paperDescription?.trim() && touched.paperDescription,
          })}
        />
      </div>
    </>
  );
}
