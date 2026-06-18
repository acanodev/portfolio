import { Helmet } from "react-helmet-async";
import { SKILLS_PAGE_TITLE } from "../../consts/consts";

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>{SKILLS_PAGE_TITLE}</title>
      </Helmet>
    </>
  );
}
