export default function JournalPage() {

  const articles = [
    {
      title:
        "How To Dress With Confidence"
    },
    {
      title:
        "The Future Of African Luxury Fashion"
    },
    {
      title:
        "The Presence Collection"
    }
  ];

  return (
    <div className="pt-32">

      <div className="container-custom">

        <h1 className="heading-font text-7xl mb-12">
          Journal
        </h1>

        <div className="space-y-8">

          {articles.map((article) => (
            <div
              key={article.title}
              className="border-b pb-8"
            >
              <h2 className="heading-font text-4xl">
                {article.title}
              </h2>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
