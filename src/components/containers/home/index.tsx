import { Button, ToastAction, useToast } from "@components/ui";
import Head from "next/head";
import { api } from "~/utils/api";
import { PageLayout } from "../../layouts/PageLayout";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { toast } = useToast();

  return (
    <PageLayout>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button
          isLoading
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Login
        </Button>
      </main>
    </PageLayout>
  );
}
