import Head from "next/head";

type Props = {
   title: string;
   description: string;
};

export default function PageHead({ title, description }: Props) {
   return (
      <Head>
         <title>{title}</title>
         <meta name="description" content={description} />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
}
