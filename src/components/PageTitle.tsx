type Props = {
   children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
   return (
      <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold tracking-tighter min-w-max uppercase font-oswald">
         {children}
      </h1>
   );
}
