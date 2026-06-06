export async function POST(req: Request) {
  const body = await req.json();

  const review = await prisma.review.create({
    data: {
      comment: body.comment,
      rating: body.rating,
      collegeId: body.collegeId,
      userId: body.userId
    }
  });

  return Response.json(review);
}