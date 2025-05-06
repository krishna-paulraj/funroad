import Image from "next/image";
import Link from "next/link";

const BookmarkBanner = () => {
  return (
    <div className="m-6 pb-10 border border-dashed shadow-shadow bg-slate-100">
      <Image
        src={"/bookmark.png"}
        height={700}
        width={1500}
        alt="banner"
        className="bg-cover"
      />
      <p className="text-center text-lg font-medium pt-10 cursor-pointer">
        Save products you are wishing for
      </p>

      <p className="text-center text-xs">
        Bookmark and organize your desired products with ease
      </p>

      <Link href={"/"}>
        <p className="text-center text-xs underline mt-2">
          Start by discovering products.
        </p>
      </Link>
    </div>
  );
};

export default BookmarkBanner;
