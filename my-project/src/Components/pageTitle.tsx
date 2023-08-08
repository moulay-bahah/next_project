export default function pageTitel({ title }: { title: string }) {
  return (
    <p className="container mx-auto text-secondary flex justify-center text-2xl my-4 bg-white py-2 rounded-lg">
      {title}
    </p>
  );
}
