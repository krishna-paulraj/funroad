import { MailIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-slate-100 pt-20 flex items-center justify-center">
      <div className="text-center">
        <b className="text-muted-foreground">Contact Me</b>
        <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
          Get In Touch
        </h2>
        <div className="max-w-screen-xl mx-auto py-24 flex justify-center items-center px-6 md:px-0">
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="mt-2 text-muted-foreground">
              I will be happy to help.
            </p>
            <Link
              className="mt-4 font-medium text-primary"
              href="mailto:krishnapaurlaj2004@gmail.com"
            >
              krishnapaulraj2004@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
