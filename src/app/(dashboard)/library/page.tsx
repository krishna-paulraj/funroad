import BookmarkBanner from "../_components/bookmark-banner";

const Page = () => {
  return (
    <div>
      <div className="h-20 border-b p-6">
        <h1 className="text-xl md:text-3xl">Library</h1>
      </div>

      <BookmarkBanner />
    </div>
  );
};

export default Page;
