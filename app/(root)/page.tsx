import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const query = (await searchParams).query;

  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch your Startup, <br /> Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        JHY Directory is a platform for entrepreneurs to pitch their startup
        ideas, get feedback and connect with other entrepreneurs.
      </p>
      <SearchForm query={query} />
    </section>
  );
}
