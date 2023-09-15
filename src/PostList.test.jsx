import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import PostList from "./PostList";
import { mockServer } from "../test-setup/mockServer";
import { rest } from "msw";

describe("PostList component", () => {
  it("should get a list of posts", async () => {
    // any get request that goes to this url, should be intercepted and do something with it
    mockServer.use(
      rest.get("http://example.com/api/posts", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" },
          ])
        );
      })
    );
    render(<PostList />);
    // must use find by, because inside the component we are using useEffect
    // expect(await screen.findByText("Post 1")).toBeInTheDocument();
    // expect(screen.getByText("Post 2")).toBeInTheDocument();

    // another way to wait for the useEffect to run and then assert
    await waitFor(() => {
      expect(screen.queryByText("Post 1")).toBeInTheDocument();
      expect(screen.getByText("Post 2")).toBeInTheDocument();
    });
  });
});
