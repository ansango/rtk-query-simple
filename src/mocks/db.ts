import { factory, primaryKey } from "@mswjs/data";
import { rest } from "msw";

const db = factory({
  user: {
    id: primaryKey(String),
    name: String,
    email: String,
  },
});

db.user.create({
  id: "1",
  name: "John Doe",
  email: "johndoe@a.com",
});

db.user.create({
  id: "2",
  name: "Jane Doe",
  email: "janedoe@a.es",
});

export const handlers = [
  rest.put("/api/users/:id", (req, res, ctx) => {
    const { name, email } = req.body as Partial<User>;
    if (Math.random() < 0.5) {
      return res(
        ctx.json({ error: "Oh no, there was an error" }),
        ctx.status(500),
        ctx.delay(400)
      );
    }
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : (req.params.id as unknown as number);
    const user = db.user.update({
      where: { id: { equals: id } },
      data: { name, email },
    });

    return res(ctx.json(user), ctx.delay(400));
  }),
  ...db.user.toHandlers("rest"),
] as const;
