import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <title>Not found</title>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <StaticImage
          height={400}
          src="../images/alpin2.png"
          alt="flowalpin_alpin"
          placeholder="blurred"
          className="mt-5"
        />
        <h1 className="font-sharp_bold font-normal text-text text-[30px] tracking-[0] leading-[22px] mb-[16px]">
          404... Nothing to find here
        </h1>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;



export const Head: HeadFC = () => <title>Not found</title>
