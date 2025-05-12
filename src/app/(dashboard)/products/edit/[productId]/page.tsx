interface Props {
  params: {
    productId: Promise<{ productId: string }>;
  };
}
const Page = async ({ params }: Props) => {
  const { productId } = await params;
  return <div>edit: {`${productId}`} </div>;
};

export default Page;
