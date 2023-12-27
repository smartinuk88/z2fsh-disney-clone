export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  const res = await fetch(
    `https://z2fsh-disney-clone.azurewebsites.net/api/getAISuggestion?term=${term}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  const message = await res.text();

  return Response.json({ message });
}
